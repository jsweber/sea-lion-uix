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
        try {
            const id = 'append_oss_iconfont_id';
            const iconStyleElement = document.getElementById(id);
            if (!iconStyleElement) {
                const newStyleElement = document.createElement('style');
                newStyleElement.textContent = `@import url(${ossUrl});`;
                newStyleElement.id = id;
                document.head.appendChild(newStyleElement);
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
