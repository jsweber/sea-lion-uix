import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Flex } from '@sea-lion/react-flex';
import { Button } from '@sea-lion/react-button';
import { Box } from '@sea-lion/react-box';
import { Card } from '@sea-lion/react-card';
import { Inset } from '@sea-lion/react-inset';
import { Text } from '@sea-lion/react-text';
import NazaImage from '../../../web-playground/images/naza.jpg';

import './style/button-story.less';

/**
 * ## 介绍
 *
 * Button 是按钮组件，提供多种尺寸、变体和颜色选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-button
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-button
 * yarn add @sea-lion/react-button
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import { Button } from '@sea-lion/react-button';
 * ```
 */
const meta: Meta<typeof Button> = {
    component: Button,
    title: '通用/Button', // 不加title就会出现文件夹，如src
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonWithProps: Story = {
    name: 'Button Props',
    argTypes: {
        asChild: {
            control: 'boolean',
            description: '使用chidren根元素作为组件元素，并且自身props和children props合并',
            type: 'boolean',
        },
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4'],
            description: '按钮尺寸："1" | "2" | "3" | "4"',
        },
        variant: {
            control: 'inline-radio',
            options: ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'],
            description: '视觉变量："classic" | "solid" | "soft" | "surface" | "outline" | "ghost"',
        },
        //
        color: {
            control: 'inline-radio',
            options: [
                "gray",
                "gold",
                "bronze",
                "brown",
                "yellow",
                "amber",
                "orange",
                "tomato",
                "red",
                "ruby",
                "crimson",
                "pink",
                "plum",
                "purple",
                "violet",
                "iris",
                "indigo",
                "blue",
                "cyan",
                "teal",
                "jade",
                "green",
                "grass",
                "lime",
                "mint",
                "sky",
            ],
            description: '颜色："gray" | "gold" | "brown"...',
        },
        radius: {
            control: 'inline-radio',
            options: ['none', 'small', 'medium', 'large', 'full'],
            description: '圆角："none" | "small" | "medium" | "large" | "full"',
        },
        highContrast: {
            control: 'boolean',
            description: '使用高对比度颜色',
            type: 'boolean',
        },
        disabled: {
            control: 'boolean',
            description: '按钮禁用',
            type: 'boolean',
        },
        loading: {
            control: 'boolean',
            description: '按钮loading态',
            type: 'boolean',
        },
    },
    args: {
        asChild: undefined,
        size: '2',
        variant: 'solid',
        color: 'blue',
        radius: 'large',
        highContrast: undefined,
        disabled: undefined,
        loading: undefined,
        onClick: () => alert('click'),
    },
    render: (props) => {
        return (
            <div>
                <Theme>
                    <div className="story-book-container button-example-container">
                        <div className="button-example-box">
                            <div className="story-book-label">面性按钮</div>
                            <Flex gap="20px">
                                <Button {...props} variant="solid">solid button</Button>
                                <Button {...props} variant="solid" disabled>solid button</Button>
                                <Button {...props} variant="solid" loading>solid button</Button>
                            </Flex>
                        </div>
                        <div className="button-example-box">
                            <div className="story-book-label">线性按钮</div>
                            <Flex gap="20px">
                                <Button {...props} variant="outline">outline button</Button>
                                <Button {...props} variant="outline" disabled>outline button</Button>
                                <Button {...props} variant="outline" loading>outline button</Button>
                            </Flex>
                        </div>
                        <div className="button-example-box">
                            <div className="story-book-label">link按钮</div>
                            <Flex gap="20px">
                                <Button {...props} variant="ghost">link button</Button>
                                <Button {...props} variant="ghost" disabled>link button</Button>
                                <Button {...props} variant="ghost" loading>link button</Button>
                            </Flex>
                        </div>
                    </div>
                    <div className="button-example-container">
                        <Box maxWidth="240px">
                            <Card size="2">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src={NazaImage}
                                        alt="Bold typography"
                                        style={{
                                            display: "block",
                                            objectFit: "cover",
                                            width: "100%",
                                            height: 140,
                                            backgroundColor: "var(--gray-5)",
                                        }}
                                    />
                                </Inset>
                                <Text as="p" size="3">
                                    <strong>哪吒</strong> 生性善良，行侠仗义，见义勇为。
                                </Text>
                                <div className="button-example-section">
                                    <Button {...props} variant="solid" block>block button</Button>
                                </div>

                            </Card>
                        </Box>

                    </div>
                </Theme>
            </div>
        );
    },
}


export const ButtonWithEditor: Story = {
    name: 'Button panel',
    argTypes: {
        color: {
            control: 'inline-radio',
            options: [
                "gray",
                "gold",
                "bronze",
                "brown",
                "yellow",
                "amber",
                "orange",
                "tomato",
                "red",
                "ruby",
                "crimson",
                "pink",
                "plum",
                "purple",
                "violet",
                "iris",
                "indigo",
                "blue",
                "cyan",
                "teal",
                "jade",
                "green",
                "grass",
                "lime",
                "mint",
                "sky",
            ],
            description: '颜色："gray" | "gold" | "brown"...',
        },
        radius: {
            control: 'inline-radio',
            options: ['none', 'small', 'medium', 'large', 'full'],
            description: '圆角："none" | "small" | "medium" | "large" | "full"',
        },
        highContrast: {
            control: 'boolean',
            description: '使用高对比度颜色',
            type: 'boolean',
        },
    },
    args: {
        size: '2',
        color: 'ruby',
        radius: 'large',
    },
    render: (props) => {
        return (
            <div>
                <Theme>
                    <div className="story-book-container">
                        <div className="story-book-margin-top-20">
                            <div className="story-book-label">面性按钮</div>
                            <Flex gap="20px">
                                <Button {...props} variant="solid">solid button</Button>
                                <Button {...props} variant="solid" disabled>solid button</Button>
                                <Button {...props} variant="solid" loading>solid button</Button>
                            </Flex>
                        </div>
                        <div className="story-book-margin-top-20">
                            <div className="story-book-label">线性按钮</div>
                            <Flex gap="20px">
                                <Button {...props} variant="outline">outline button</Button>
                                <Button {...props} variant="outline" disabled>outline button</Button>
                                <Button {...props} variant="outline" loading>outline button</Button>
                            </Flex>
                        </div>
                        <div className="story-book-margin-top-20">
                            <div className="story-book-label">link按钮</div>
                            <Flex gap="20px">
                                <Button {...props} variant="ghost">link button</Button>
                                <Button {...props} variant="ghost" disabled>link button</Button>
                                <Button {...props} variant="ghost" loading>link button</Button>
                            </Flex>
                        </div>
                    </div>
                </Theme>
            </div>
        );
    },
}

export const ButtonWithoutTheme = () => {
    return (
        <div>
            <Flex>
                <Button>不带主题button</Button>
            </Flex>
        </div>
    );
}

ButtonWithoutTheme.storyName = '不使用Theme组件'

export const ButtonStyle = () => {
    return (
        <Theme >
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的按钮</div>
                    <Flex gap="20px">
                        <Button size="1" color="pink">size 1</Button>
                        <Button size="2">size 2</Button>
                        <Button size="3">size 3</Button>
                        <Button size="4">size 4</Button>
                    </Flex>
                </div>
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的按钮</div>
                    <Flex gap="20px">
                        <Button>default</Button>
                        <Button color="cyan">cyan</Button>
                        <Button color="pink">pink</Button>
                        <Button color="brown">brown</Button>
                    </Flex>
                </div>
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同圆角的按钮</div>
                    <Flex gap="20px">
                        <Button radius="none" size="2">none</Button>
                        <Button radius="small" size="2">small</Button>
                        <Button radius="medium" size="2">medium</Button>
                        <Button radius="large" size="2">large</Button>
                        <Button radius="full" size="2">full</Button>
                    </Flex>
                </div>
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">disabled按钮</div>
                    <Flex gap="20px">
                        <Button radius="none" size="2" disabled onClick={() => { alert('click'); }}>disabled</Button>
                    </Flex>
                </div>
            </div>

        </Theme>
    );
}

ButtonStyle.storyName = '按钮样式';

export const nestingThemeButton = () => {
    return (
        <Theme accentColor="blue" >
            <div className="story-book-container story-book-border">
                <div>
                    <div className="story-book-label">主题来自外层主题</div>
                    <Flex gap="20px">
                        <Button size="1">size 1</Button>
                        <Button size="2">size 2</Button>
                    </Flex>
                </div>
                <div className="story-book-border">
                    <div className="story-book-label">主题来自内部主题</div>
                    <Theme accentColor="yellow">
                        <Flex gap="20px">

                            <Button size="3">size 3</Button>
                            <Button size="4">size 4</Button>

                        </Flex>
                    </Theme>
                </div>
            </div>
        </Theme>
    );
}

nestingThemeButton.storyName = '嵌套使用Theme'

