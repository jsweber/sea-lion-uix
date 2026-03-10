import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Theme } from '@sea-lion/react-theme';
import { Container } from '@sea-lion/react-container';
import { Blockquote } from '@sea-lion/react-blockquote';
import { Heading } from '@sea-lion/react-heading';
import { Text } from '@sea-lion/react-text';
import { Flex } from '@sea-lion/react-flex';
import { IconFont } from '@sea-lion/react-oss-icon';

import './oss-icon-picker.less';

/** Font-class 图标资源（.css） */
export const ICONFONT_ICONS_CSS_URL = '//at.alicdn.com/t/c/font_3858115_hwwfmyoy6t7.css';
/** Symbol 多色图标资源（.js），用于 <svg><use xlink:href="#icon-xxx" /></svg> */
export const ICONFONT_SYMBOL_JS_URL = '//at.alicdn.com/t/c/font_3858115_hwwfmyoy6t7.js';
const PAGE_SIZE = 7 * 7; // 49

function parseIconNamesFromCss(cssText: string): string[] {
    const matches = [...cssText.matchAll(/\.(icon-[^:]+):before/g)];
    return [...new Set(matches.map((m) => m[1]))];
}

function loadSymbolScript(src: string): Promise<void> {
    const normalized = src.startsWith('//') ? `https:${src}` : src;
    const id = `oip-symbol-${normalized.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 60)}`;
    if (typeof document === 'undefined') return Promise.resolve();
    const existing = document.getElementById(id);
    if (existing) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = id;
        script.src = normalized;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load: ${normalized}`));
        document.head.appendChild(script);
    });
}

export const OssIconPicker: FC = () => {
    const [iconList, setIconList] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [symbolLoaded, setSymbolLoaded] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(ICONFONT_ICONS_CSS_URL)
            .then((res) => res.text())
            .then((cssText) => setIconList(parseIconNamesFromCss(cssText)))
            .catch(() => setIconList([]))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        loadSymbolScript(ICONFONT_SYMBOL_JS_URL).then(() => setSymbolLoaded(true)).catch(() => setSymbolLoaded(false));
    }, []);

    const filteredIcons = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return iconList;
        return iconList.filter((name) => name.toLowerCase().includes(q));
    }, [iconList, search]);

    const totalPages = Math.max(1, Math.ceil(filteredIcons.length / PAGE_SIZE));

    const pageIcons = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE;
        return filteredIcons.slice(start, start + PAGE_SIZE);
    }, [filteredIcons, page]);

    useEffect(() => {
        setPage(1);
    }, [search]);

    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
    }, [page, totalPages]);

    const copyIconName = useCallback(async (name: string) => {
        try {
            await navigator.clipboard.writeText(name);
            setCopiedId(name);
            setTimeout(() => setCopiedId(null), 2000);
        } catch {
            // ignore
        }
    }, []);

    return (
        <Theme>
            <div className="oip-root">
                <Container>
                    <header className="oip-header">
                        <Heading size="8" mb="2">Oss Icon 选择器</Heading>
                        <Text size="2" color="gray" mb="4">
                            从 iconfont 项目加载图标，列表按 <strong>Symbol 多色</strong> 方式渲染；悬停卡片可见「点击复制」，
                            复制类名用于 <code className="oip-code">IconFont</code> 的 <code className="oip-code">icon</code>，
                            多色时 <code className="oip-code">ossUrl</code> 传 Symbol 的 .js。
                        </Text>
                        <Text size="1" color="gray">
                            Font-class：{ICONFONT_ICONS_CSS_URL} · Symbol：{ICONFONT_SYMBOL_JS_URL}
                        </Text>
                    </header>

                    <Blockquote size="5">搜索与筛选</Blockquote>
                    <div className="block-section">
                        <div className="oip-search-wrap">
                            <input
                                type="text"
                                className="oip-search"
                                placeholder="按图标名称搜索…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Text size="1" color="gray">
                                共 {filteredIcons.length} 个图标 · 每页 7×7
                            </Text>
                        </div>
                    </div>

                    <Blockquote size="5">图标列表</Blockquote>
                    <div className="block-section">
                        {loading ? (
                            <Flex align="center" justify="center" py="9">
                                <Text color="gray">加载中…</Text>
                            </Flex>
                        ) : (
                            <div className="oip-grid">
                                {pageIcons.map((name) => (
                                    <div
                                        key={name}
                                        role="button"
                                        tabIndex={0}
                                        className={`oip-card ${copiedId === name ? 'oip-card-copied' : ''}`}
                                        onClick={() => copyIconName(name)}
                                        onKeyDown={(e) => e.key === 'Enter' && copyIconName(name)}
                                        title={name}
                                    >
                                        <div className="oip-card-hint">
                                            {copiedId === name ? '已复制' : '点击复制'}
                                        </div>
                                        <div className="oip-card-icon">
                                            {symbolLoaded ? (
                                                <svg
                                                    className="icon oip-icon-symbol"
                                                    aria-hidden
                                                    width="28"
                                                    height="28"
                                                    style={{ display: 'block', overflow: 'hidden' }}
                                                >
                                                    <use xlinkHref={`#${name}`} />
                                                </svg>
                                            ) : (
                                                <IconFont ossUrl={ICONFONT_ICONS_CSS_URL} icon={name} style={{ fontSize: 28 }} />
                                            )}
                                        </div>
                                        <Text size="1" className="oip-card-name" title={name}>
                                            {name}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!loading && filteredIcons.length > 0 && totalPages > 1 && (
                            <Flex className="oip-pagination" align="center" justify="center" gap="3" mt="4">
                                <button
                                    type="button"
                                    className="oip-page-btn"
                                    disabled={page <= 1}
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                >
                                    上一页
                                </button>
                                <Text size="2" color="gray">
                                    第 {page} / 共 {totalPages} 页
                                </Text>
                                <button
                                    type="button"
                                    className="oip-page-btn"
                                    disabled={page >= totalPages}
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                >
                                    下一页
                                </button>
                            </Flex>
                        )}
                        {!loading && filteredIcons.length === 0 && (
                            <Flex align="center" justify="center" py="9">
                                <Text color="gray">未找到匹配的图标</Text>
                            </Flex>
                        )}
                    </div>
                    <div style={{ height: 80 }} />
                </Container>
            </div>
        </Theme>
    );
};
