import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { IconFont } from '@sea-lion/react-oss-icon';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

/** Iconfont 平台常用资源类型：Font-class 用 .css，Symbol 用 .js */
const ICONFONT_PLATFORM_URLS = {
    css: '//at.alicdn.com/t/c/font_3858115_arqhh46u7i7.css',
    js: '//at.alicdn.com/t/c/font_3858115_arqhh46u7i7.js',
} as const;

/**
 * ## 介绍
 *
 * OssIcon (IconFont) 是基于 [iconfont 平台](https://www.iconfont.cn/) 的图标组件，支持通过 **Font-class**（.css）或 **Symbol**（.js）资源地址加载图标。
 *
 * ## 何时使用
 *
 * - 需要使用团队 iconfont 项目中的图标时
 * - 需要与现有 iconfont 图标体系保持一致时
 * - 需要轻量、可配置颜色与尺寸的图标展示时
 *
 * ## 与 iconfont 平台对接
 *
 * - **Font-class 引用**：`ossUrl` 传入项目生成的 **.css** 链接（如 `//at.alicdn.com/t/c/font_xxx.css`），使用方式为 `<IconFont icon="icon-图标名" />`。
 * - **Symbol 引用**：`ossUrl` 传入项目生成的 **.js** 链接（如 `//at.alicdn.com/t/c/font_xxx.js`），组件会动态注入脚本；Symbol 多色图标需配合 SVG `<use>` 使用，本组件主要用于 Font-class 类名展示。
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
            description: 'iconfont 资源地址：.css（Font-class）或 .js（Symbol），支持 // 开头的协议相对地址',
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
