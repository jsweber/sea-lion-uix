'use client';
import { FC, CSSProperties, useEffect } from 'react';
import classNames from 'classnames';

/** 判断是否为 iconfont Symbol 资源链接（.js），用于多色图标 */
export function isSymbolOssUrl(ossUrl: string | undefined): boolean {
    return Boolean(ossUrl?.trim() && /\.js$/i.test(ossUrl.trim()));
}

export interface IconFontProps {
    /** 图标名，Font-class 为类名如 icon-xxx，Symbol 为 id 如 icon-xxx（会补 #） */
    icon: string;
    color?: string;
    fontSize?: string;
    style?: CSSProperties;
    className?: string;
    /** iconfont 资源地址：不传时使用内置默认链接，由 useSymbol 决定用 Font-class 还是 Symbol */
    ossUrl?: string;
    /** 是否使用 Symbol 多色渲染；不传 ossUrl 时生效，默认 false（Font-class）；传了 ossUrl 时按 ossUrl 是否为 .js 自动判断 */
    useSymbol?: boolean;
}

// oss://openmmlab-open/x-lab/sea-lion-ui/iconfont/
// https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.20&manage_type=myprojects&projectId=3858115&keyword=&project_type=&page=

/** 内置 Font-class 资源（.css） */
const defaultOssIconCssUrl = '//at.alicdn.com/t/c/font_3858115_hwwfmyoy6t7.css';
/** 内置 Symbol 多色资源（.js） */
const defaultOssIconJsUrl = '//at.alicdn.com/t/c/font_3858115_hwwfmyoy6t7.js';
/** @deprecated 使用 defaultOssIconCssUrl，保留兼容 */
const defaultOssIconUrl = defaultOssIconCssUrl;

const IconFont: FC<IconFontProps> = ({
    icon,
    color,
    fontSize,
    style,
    className,
    ossUrl,
    useSymbol = false,
}) => {
    const resolvedUrl = ossUrl ?? (useSymbol ? defaultOssIconJsUrl : defaultOssIconCssUrl);
    const useSymbolMode = isSymbolOssUrl(resolvedUrl);

    useEffect(() => {
        if (!resolvedUrl?.trim()) return;
        try {
            const normalizedUrl = resolvedUrl.startsWith('//') ? `https:${resolvedUrl}` : resolvedUrl;
            const isJs = /\.js$/i.test(resolvedUrl);
            const safeId = `oss-iconfont-${isJs ? 'js' : 'css'}-${resolvedUrl.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80)}`;
            if (typeof document !== 'undefined' && document.getElementById(safeId)) return;

            if (isJs) {
                const script = document.createElement('script');
                script.id = safeId;
                script.src = normalizedUrl;
                script.async = true;
                document.head.appendChild(script);
            } else {
                const styleEl = document.createElement('style');
                styleEl.id = safeId;
                styleEl.textContent = `@import url("${normalizedUrl}");`;
                document.head.appendChild(styleEl);
            }
        } catch (error) {
            console.error(error);
        }
    }, [resolvedUrl]);

    const size = fontSize ?? style?.fontSize ?? '1em';
    const sizeStyle = typeof size === 'number' ? `${size}px` : size;

    if (useSymbolMode) {
        const href = icon.startsWith('#') ? icon : `#${icon}`;
        return (
            <svg
                className={classNames('icon', 'rt-OssIconSymbol', className)}
                aria-hidden
                style={{
                    display: 'inline-block',
                    width: sizeStyle,
                    height: sizeStyle,
                    verticalAlign: 'middle',
                    overflow: 'hidden',
                    ...style,
                }}
            >
                <use xlinkHref={href} />
            </svg>
        );
    }

    return (
        <i
            className={classNames(className, icon, 'iconfont')}
            style={{
                display: 'inline-block',
                color: color ?? 'currentColor',
                fontSize: fontSize ?? '1em',
                ...style,
            }}
        />
    );
};
export {
    IconFont,
    defaultOssIconUrl,
    defaultOssIconCssUrl,
    defaultOssIconJsUrl,
}
