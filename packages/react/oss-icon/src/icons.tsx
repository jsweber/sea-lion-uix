'use client';
import { FC, CSSProperties, useEffect } from 'react';
import classNames from 'classnames';

interface IconFontProps {
    icon: string;
    color?: string;
    fontSize?: string;
    style?: CSSProperties;
    className?: string;
    ossUrl?: string;
}
// oss://openmmlab-open/x-lab/sea-lion-ui/iconfont/
// https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.20&manage_type=myprojects&projectId=3858115&keyword=&project_type=&page=

const defaultOssIconUrl = 'https://cdn-static.openxlab.org.cn/x-lab/sea-lion-ui/iconfont/iconfont.css';

const IconFont: FC<IconFontProps> = ({
    icon, color, fontSize, style, className,
    ossUrl = defaultOssIconUrl,
}) => {
    const classes = classNames(className, icon, 'iconfont');
    useEffect(() => {
        if (!ossUrl?.trim()) return;
        try {
            const normalizedUrl = ossUrl.startsWith('//') ? `https:${ossUrl}` : ossUrl;
            const isJs = /\.js$/i.test(ossUrl);
            const safeId = `oss-iconfont-${isJs ? 'js' : 'css'}-${ossUrl.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80)}`;
            if (document.getElementById(safeId)) return;

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
    }, [ossUrl]);

    return (
        <i
            className={classes}
            style={{
                display: 'inline-block',
                color: `${color && color}`,
                fontSize: `${fontSize && fontSize}`,
                ...style,
            }}
        />
    );
};
export {
    IconFont,
    defaultOssIconUrl,
}

export type {
    IconFontProps,
}
