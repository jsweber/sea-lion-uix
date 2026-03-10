import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
    IconFont,
    defaultOssIconCssUrl,
    defaultOssIconJsUrl,
} from '@sea-lion/react-oss-icon';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

/** Iconfont 平台常用资源类型：Font-class 用 .css，Symbol 用 .js */
const ICONFONT_PLATFORM_URLS = {
    css: defaultOssIconCssUrl,
    js: defaultOssIconJsUrl,
} as const;

/** 图标库 Story 使用的 CSS 地址（与内置 Font-class 一致） */
const ICONFONT_ICONS_CSS_URL = defaultOssIconCssUrl;

/** 从 iconfont 生成的 CSS 文本中解析出所有图标类名（用捕获组动态提取，避免写死截取长度） */
function parseIconNamesFromCss(cssText: string): string[] {
    const matches = [...cssText.matchAll(/\.(icon-[^:]+):before/g)];
    return [...new Set(matches.map((m) => m[1]))];
}

/**
 * ## 介绍
 *
 * OssIcon (IconFont) 是基于 [iconfont 平台](https://www.iconfont.cn/) 的图标组件，支持通过 **Font-class**（.css）或 **Symbol**（.js）资源地址加载图标。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-oss-icon
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-oss-icon
 * yarn add @sea-lion/react-oss-icon
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import { IconFont } from '@sea-lion/react-oss-icon';
 * ```
 *
 * ## 何时使用
 *
 * - 需要使用团队 iconfont 项目中的图标时
 * - 需要与现有 iconfont 图标体系保持一致时
 * - 需要轻量、可配置颜色与尺寸的图标展示时
 *
 * ## 与 iconfont 平台对接
 *
 * - **内置链接**：不传 `ossUrl` 时使用默认 Font-class（.css）或 Symbol（.js），由 **useSymbol** 切换，默认 `useSymbol: false` 即 Font-class。
 * - **Font-class**：`ossUrl` 传 .css 或 `useSymbol: false` 且不传 ossUrl，单色，用 `<IconFont icon="icon-xxx" />`。
 * - **Symbol 多色**：`ossUrl` 传 .js 或 `useSymbol: true` 且不传 ossUrl，组件内部用 SVG `<use>` 渲染。
 * - **自定义 ossUrl**：传了 `ossUrl` 后按链接后缀自动判断（.js → Symbol，否则 → Font-class），此时 `useSymbol` 不参与判断。
 * - 支持协议相对地址（`//...`），会自动补全为 `https:`。
 */
const meta: Meta<typeof IconFont> = {
    component: IconFont,
    title: '通用/OssIcon',
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: null,
        },
    },
    decorators: [
        (Story) => (
            <Theme>
                <div className="story-book-container">
                    <div className="story-book-margin-top-20">
                        <Story />
                    </div>
                </div>
            </Theme>
        ),
    ],
    argTypes: {
        icon: {
            control: 'text',
            description: '图标类名，与 iconfont 项目中的 class 一致（如 icon-xxx）',
        },
        color: {
            control: 'color',
            description: '图标颜色',
        },
        fontSize: {
            control: 'text',
            description: '图标字号',
        },
        ossUrl: {
            control: 'text',
            description: 'iconfont 资源地址：.css（Font-class）或 .js（Symbol）；不传时用内置链接，由 useSymbol 决定',
        },
        useSymbol: {
            control: 'boolean',
            description: '是否用 Symbol 多色渲染；仅在不传 ossUrl 时生效，默认 false（Font-class）',
        },
    },
};

export default meta;

export const Basic = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">基础用法，传入 icon 类名即可展示对应图标：</Text>
                <Flex gap="4" align="center">
                    <IconFont icon="icon-CompassionOutlined" style={{ fontSize: 24 }} />
                    <IconFont icon="icon-RefreshOutlined" style={{ fontSize: 24 }} />
                    <IconFont icon="icon-cuowu1" style={{ fontSize: 24 }} />
                </Flex>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const Colors = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">通过 color 属性设置图标颜色：</Text>
                <Flex gap="4" align="center" wrap="wrap">
                    <IconFont icon="icon-CompassionOutlined" color="#1890ff" style={{ fontSize: 28 }} />
                    <IconFont icon="icon-CompassionOutlined" color="#52c41a" style={{ fontSize: 28 }} />
                    <IconFont icon="icon-CompassionOutlined" color="#fa8c16" style={{ fontSize: 28 }} />
                    <IconFont icon="icon-CompassionOutlined" color="#eb2f96" style={{ fontSize: 28 }} />
                    <IconFont icon="icon-CompassionOutlined" color="#722ed1" style={{ fontSize: 28 }} />
                </Flex>
            </Box>
        </Theme>
    );
};

Colors.storyName = '不同颜色';

export const Sizes = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">通过 fontSize 或 style 控制图标尺寸：</Text>
                <Flex gap="4" align="center">
                    <IconFont icon="icon-RefreshOutlined" fontSize="16px" />
                    <IconFont icon="icon-RefreshOutlined" fontSize="24px" />
                    <IconFont icon="icon-RefreshOutlined" fontSize="32px" />
                    <IconFont icon="icon-RefreshOutlined" style={{ fontSize: 40 }} />
                </Flex>
            </Box>
        </Theme>
    );
};

Sizes.storyName = '不同尺寸';

export const WithClassName = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">通过 className 可叠加样式（如旋转动画）：</Text>
                <Flex gap="4" align="center">
                    <IconFont icon="icon-RefreshOutlined" style={{ fontSize: 28 }} />
                    <IconFont className="spin" icon="icon-RefreshOutlined" style={{ fontSize: 28, color: 'var(--gray-11)' }} />
                </Flex>
                <Text mt="2" size="1" color="gray">
                    注：需在全局或父级提供 .spin 等动画样式
                </Text>
            </Box>
        </Theme>
    );
};

WithClassName.storyName = '自定义类名';

export const IconfontPlatform = (args: { icon: string; ossUrl: string }) => {
    const isCss = args.ossUrl.toLowerCase().endsWith('.css');
    return (
        <Theme>
            <Box p="5">
                <Text mb="2">与 iconfont 平台对接：传入项目生成的 .css（Font-class）或 .js（Symbol）地址。</Text>
                <Text mb="4" size="1" color="gray">
                    当前为 {isCss ? 'Font-class (.css)' : 'Symbol (.js)'} 资源，图标类名需与项目中一致。
                </Text>
                <Flex gap="4" align="center">
                    <IconFont icon={args.icon || 'icon-CompassionOutlined'} ossUrl={args.ossUrl} style={{ fontSize: 28 }} />
                    <Text size="1" color="gray">icon 类名：{args.icon || 'icon-CompassionOutlined'}</Text>
                </Flex>
            </Box>
        </Theme>
    );
};

IconfontPlatform.storyName = 'Iconfont 平台资源';
IconfontPlatform.args = {
    icon: 'icon-CompassionOutlined',
    ossUrl: ICONFONT_PLATFORM_URLS.css,
};
IconfontPlatform.argTypes = {
    ossUrl: {
        control: 'text',
        description: 'iconfont 项目地址：.css 或 .js，支持 //at.alicdn.com/...',
    },
};

export const CustomOssUrl = (args: { icon: string; ossUrl?: string }) => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">可传入任意 OSS / CDN 或 iconfont 地址（.css 或 .js）：</Text>
                <Flex direction="column" gap="2">
                    <IconFont icon={args.icon || 'icon-CompassionOutlined'} ossUrl={args.ossUrl} style={{ fontSize: 24 }} />
                    <Text size="1" color="gray">
                        示例：//at.alicdn.com/t/c/font_3858115_xxx.css 或 .js
                    </Text>
                </Flex>
            </Box>
        </Theme>
    );
};

CustomOssUrl.storyName = '自定义资源地址';
CustomOssUrl.args = {
    icon: 'icon-CompassionOutlined',
    ossUrl: ICONFONT_PLATFORM_URLS.css,
};

/** 多色图标示例（Symbol 模式下可见多色） */
const MULTICOLOR_ICONS = ['icon-guanjianzhen', 'icon-huggingfaceColor', 'icon-jushenzhineng'] as const;

/** useSymbol 切换：不传 ossUrl 时用内置链接，useSymbol 决定 Font-class 还是 Symbol */
export const UseSymbolSwitch = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="2">不传 <code>ossUrl</code> 时使用内置链接，通过 <code>useSymbol</code> 切换渲染方式。</Text>
                <Text mb="4" size="1" color="gray">
                    内置 Font-class：{defaultOssIconCssUrl} · 内置 Symbol：{defaultOssIconJsUrl}
                </Text>
                <Flex direction="column" gap="5">
                    <Box>
                        <Text size="2" weight="bold" mb="2">useSymbol=false（默认）— Font-class 单色</Text>
                        <Text size="1" color="gray" mb="2">多色图标在 Font-class 下呈单色，可设置 color</Text>
                        <Flex gap="4" align="center" wrap="wrap">
                            {MULTICOLOR_ICONS.map((name) => (
                                <IconFont key={name} icon={name} color="var(--gray-11)" style={{ fontSize: 28 }} />
                            ))}
                            <IconFont icon="icon-guanjianzhen" color="#1890ff" style={{ fontSize: 28 }} />
                        </Flex>
                    </Box>
                    <Box>
                        <Text size="2" weight="bold" mb="2">useSymbol=true — Symbol 多色</Text>
                        <Text size="1" color="gray" mb="2">icon-guanjianzhen、icon-huggingfaceColor、icon-jushenzhineng 为多色图标</Text>
                        <Flex gap="4" align="center" wrap="wrap">
                            {MULTICOLOR_ICONS.map((name) => (
                                <IconFont key={name} icon={name} useSymbol style={{ fontSize: 28 }} />
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseSymbolSwitch.storyName = 'useSymbol 切换（内置链接）';

/** 控件演示：useSymbol 与 ossUrl；传了 ossUrl 时按链接类型渲染，useSymbol 不生效 */
export const UseSymbolArgs = (args: { icon: string; useSymbol?: boolean; ossUrl?: string }) => {
    const ossUrl = args.ossUrl?.trim() || undefined;
    return (
        <Theme>
            <Box p="5">
                <Text mb="2">在控件中切换 <code>useSymbol</code> 或填写 <code>ossUrl</code>。不传 ossUrl 时 useSymbol 控制内置 Font-class / Symbol。</Text>
                <Flex gap="4" align="center" mt="3">
                    <IconFont
                        icon={args.icon || 'icon-CompassionOutlined'}
                        useSymbol={args.useSymbol}
                        ossUrl={ossUrl}
                        style={{ fontSize: 32 }}
                    />
                    <Text size="1" color="gray">
                        useSymbol={String(args.useSymbol)} {ossUrl ? `· ossUrl 已设置` : '· 使用内置链接'}
                    </Text>
                </Flex>
            </Box>
        </Theme>
    );
};

UseSymbolArgs.storyName = 'useSymbol / ossUrl 控件';
UseSymbolArgs.args = {
    icon: 'icon-guanjianzhen',
    useSymbol: true,
    ossUrl: '',
};
UseSymbolArgs.argTypes = {
    icon: {
        control: 'select',
        options: [...MULTICOLOR_ICONS, 'icon-CompassionOutlined'],
    },
    ossUrl: { control: 'text' },
};

/** 图标库：从 iconfont CSS 解析并网格展示，点击复制图标名 */
function IconGalleryInner() {
    const [iconList, setIconList] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    useEffect(() => {
        const url = ICONFONT_ICONS_CSS_URL;
        setLoading(true);
        fetch(url)
            .then((res) => res.text())
            .then((cssText) => setIconList(parseIconNamesFromCss(cssText)))
            .catch(() => setIconList([]))
            .finally(() => setLoading(false));
    }, []);

    const filteredIcons = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return iconList;
        return iconList.filter((name) => name.toLowerCase().includes(q));
    }, [iconList, search]);

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
        <Box p="5" style={{ minHeight: 400 }}>
            <Text size="2" weight="bold" mb="3">
                图标库（点击复制类名）
            </Text>
            <Text size="1" color="gray" mb="3">
                资源：{ICONFONT_ICONS_CSS_URL}
            </Text>
            <Box mb="4">
                <input
                    type="text"
                    placeholder="搜索图标名称…"
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    style={{
                        width: '100%',
                        maxWidth: 320,
                        padding: '8px 12px',
                        border: '1px solid var(--gray-6)',
                        borderRadius: 6,
                        fontSize: 14,
                    }}
                />
            </Box>
            {loading ? (
                <Text color="gray">加载中…</Text>
            ) : (
                <Box
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                        gap: 8,
                    }}
                >
                    {filteredIcons.map((name) => (
                        <Flex
                            key={name}
                            direction="column"
                            align="center"
                            justify="center"
                            onClick={() => copyIconName(name)}
                            style={{
                                padding: '16px 8px',
                                borderRadius: 8,
                                border: '1px solid var(--gray-4)',
                                cursor: 'pointer',
                                background: copiedId === name ? 'var(--blue-3)' : 'var(--gray-2)',
                                transition: 'background 0.15s, border-color 0.15s',
                            }}
                            onMouseEnter={(e) => {
                                if (copiedId !== name) {
                                    e.currentTarget.style.background = 'var(--gray-3)';
                                    e.currentTarget.style.borderColor = 'var(--gray-6)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (copiedId !== name) {
                                    e.currentTarget.style.background = 'var(--gray-2)';
                                    e.currentTarget.style.borderColor = 'var(--gray-4)';
                                }
                            }}
                        >
                            <IconFont ossUrl={ICONFONT_ICONS_CSS_URL} icon={name} style={{ fontSize: 28, marginBottom: 8 }} />
                            <Text size="1" style={{ textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.3 }}>
                                {copiedId === name ? '已复制' : name}
                            </Text>
                        </Flex>
                    ))}
                </Box>
            )}
            {!loading && filteredIcons.length === 0 && (
                <Text color="gray">未找到匹配的图标</Text>
            )}
        </Box>
    );
}

export const IconGallery = () => (
    <Theme>
        <IconGalleryInner />
    </Theme>
);

IconGallery.storyName = '图标库（可视化·点击复制）';
