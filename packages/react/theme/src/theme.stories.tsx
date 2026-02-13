import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Box } from '@sea-lion/react-box';
import { Heading } from '@sea-lion/react-heading';
// import '@sea-lion/react-button/button.css'

/**
 * ## 介绍
 *
 * Theme 组件是一个提供统一设计系统的主题提供者，用于向应用程序提供颜色、字体、尺寸等设计变量。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-theme
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-theme
 * yarn add @sea-lion/react-theme
 * ```
 *
 * ## 何时使用
 *
 * - 需要在应用程序中应用一致的设计系统时
 * - 实现主题切换功能（如明暗模式）时
 * - 需要自定义应用程序视觉风格时
 */
const meta: Meta<typeof Theme> = {
    component: Theme,
    title: '主题/Theme',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Theme>;

// 基本用法示例
export const Basic: Story = {
    name: '基本用法',
    argTypes: {
        appearance: {
            control: 'inline-radio',
            options: ['light', 'dark'],
            description: '主题外观："light" | "dark"',
        },
        accentColor: {
            control: 'select',
            options: ['blue', 'red', 'green', 'purple', 'orange', 'gray'],
            description: '主题强调色',
        },
        grayColor: {
            control: 'select',
            options: ['gray', 'slate', 'mauve'],
            description: '主题灰度色',
        },
        radius: {
            control: 'select',
            options: ['none', 'small', 'medium', 'large', 'full'],
            description: '全局圆角样式',
        },
        scaling: {
            control: 'select',
            options: ['90%', '95%', '100%', '105%', '110%'],
            description: '全局缩放比例',
        },
    },
    args: {
        appearance: 'light',
        accentColor: 'blue',
        grayColor: 'gray',
        radius: 'medium',
        scaling: '100%',
    },
    render: (props) => (
        <Theme {...props}>
            <Box p="5" style={{ background: 'var(--gray-2)', borderRadius: '6px' }}>
                <Heading size="5" mb="4">主题预览</Heading>
                <Flex direction="column" gap="4">
                    <Box p="3" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px' }}>
                        <Text>强调色元素</Text>
                    </Box>
                    <Box p="3" style={{ background: 'white', color: 'var(--gray-12)', borderRadius: '4px', border: '1px solid var(--gray-6)' }}>
                        <Text>灰度色元素</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    ),
};

// 明暗主题切换示例
export const Appearances: Story = {
    name: '明暗主题',
    render: () => (
        <Flex gap="4">
            <Theme appearance="light">
                <Box p="4" style={{ background: 'var(--gray-2)', borderRadius: '6px', width: '300px' }}>
                    <Heading size="3" mb="2">明亮主题</Heading>
                    <Box p="3" style={{ background: 'white', color: 'var(--gray-12)', borderRadius: '4px', border: '1px solid var(--gray-6)' }}>
                        <Text>亮色模式内容</Text>
                    </Box>
                </Box>
            </Theme>

            <Theme appearance="dark">
                <Box p="4" style={{ background: 'var(--gray-2)', borderRadius: '6px', width: '300px' }}>
                    <Heading size="3" mb="2">暗黑主题</Heading>
                    <Box p="3" style={{ background: 'var(--gray-3)', color: 'var(--gray-12)', borderRadius: '4px', border: '1px solid var(--gray-6)' }}>
                        <Text>暗色模式内容</Text>
                    </Box>
                </Box>
            </Theme>
        </Flex>
    ),
};

// 强调色示例
export const AccentColors: Story = {
    name: '强调色',
    render: () => (
        <Flex direction="column" gap="4">
            {['blue', 'red', 'green', 'purple', 'orange', 'gray'].map((color) => (
                <Theme key={color} accentColor={color as any}>
                    <Flex align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{color}:</Text>
                        <Box p="3" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px', width: '200px' }}>
                            <Text>强调色 {color}</Text>
                        </Box>
                        <Box p="3" style={{ background: 'var(--accent-3)', color: 'var(--accent-11)', borderRadius: '4px', width: '200px' }}>
                            <Text>淡色 {color}</Text>
                        </Box>
                    </Flex>
                </Theme>
            ))}
        </Flex>
    ),
};

// 灰度色示例
export const GrayColors: Story = {
    name: '灰度色',
    render: () => (
        <Flex direction="column" gap="4">
            {['gray', 'slate', 'mauve'].map((color) => (
                <Theme key={color} grayColor={color as any}>
                    <Flex align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{color}:</Text>
                        <Box p="3" style={{ background: 'var(--gray-3)', color: 'var(--gray-12)', borderRadius: '4px', width: '200px', border: '1px solid var(--gray-6)' }}>
                            <Text>灰度色 {color}</Text>
                        </Box>
                    </Flex>
                </Theme>
            ))}
        </Flex>
    ),
};

// 圆角样式示例
export const RadiusStyles: Story = {
    name: '圆角样式',
    render: () => (
        <Flex direction="column" gap="4">
            {['none', 'small', 'medium', 'large', 'full'].map((radius) => (
                <Theme key={radius} radius={radius as any}>
                    <Flex align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{radius}:</Text>
                        <Box p="3" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: 'var(--radius-4)', width: '200px' }}>
                            <Text>圆角样式 {radius}</Text>
                        </Box>
                    </Flex>
                </Theme>
            ))}
        </Flex>
    ),
};

// 嵌套主题示例
export const NestedThemes: Story = {
    name: '嵌套主题',
    render: () => (
        <Theme appearance="light" accentColor="blue">
            <Box p="4" style={{ background: 'var(--gray-2)', borderRadius: '6px' }}>
                <Heading size="4" mb="3">全局主题 (蓝色)</Heading>
                <Flex gap="4">
                    <Box p="3" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px' }}>
                        <Text>蓝色元素</Text>
                    </Box>

                    <Theme accentColor="red">
                        <Box p="3" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px' }}>
                            <Text>红色元素</Text>
                        </Box>
                    </Theme>

                    <Theme accentColor="green">
                        <Box p="3" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px' }}>
                            <Text>绿色元素</Text>
                        </Box>
                    </Theme>
                </Flex>
            </Box>
        </Theme>
    ),
};

// 实用示例
export const PracticalExample: Story = {
    name: '实用示例',
    render: () => (
        <Theme>
            <Box p="5" style={{ background: 'var(--gray-2)', borderRadius: '8px', maxWidth: '800px' }}>
                <Heading size="6" mb="4">主题应用演示</Heading>

                <Flex direction="column" gap="5">
                    <Box p="4" style={{ background: 'white', borderRadius: '6px', border: '1px solid var(--gray-6)' }}>
                        <Heading size="3" mb="3">默认主题应用</Heading>
                        <Text mb="3">这部分使用应用的默认主题设置。</Text>
                        <Flex gap="2">
                            <Box p="2" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px' }}>
                                <Text>强调按钮</Text>
                            </Box>
                            <Box p="2" style={{ background: 'var(--gray-3)', color: 'var(--gray-11)', borderRadius: '4px', border: '1px solid var(--gray-6)' }}>
                                <Text>次要按钮</Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Flex gap="4">
                        <Theme appearance="dark" accentColor="purple">
                            <Box p="4" style={{ background: 'var(--gray-2)', borderRadius: '6px', border: '1px solid var(--gray-6)', flex: 1 }}>
                                <Heading size="3" mb="3">紫色暗黑主题</Heading>
                                <Text mb="3">这部分使用紫色暗黑主题。</Text>
                                <Flex gap="2">
                                    <Box p="2" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: '4px' }}>
                                        <Text>强调按钮</Text>
                                    </Box>
                                    <Box p="2" style={{ background: 'var(--gray-3)', color: 'var(--gray-11)', borderRadius: '4px', border: '1px solid var(--gray-6)' }}>
                                        <Text>次要按钮</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Theme>

                        <Theme accentColor="green" radius="large">
                            <Box p="4" style={{ background: 'var(--accent-2)', borderRadius: '6px', border: '1px solid var(--accent-6)', flex: 1 }}>
                                <Heading size="3" mb="3">绿色大圆角主题</Heading>
                                <Text mb="3">这部分使用绿色大圆角主题。</Text>
                                <Flex gap="2">
                                    <Box p="2" style={{ background: 'var(--accent-9)', color: 'white', borderRadius: 'var(--radius-4)' }}>
                                        <Text>强调按钮</Text>
                                    </Box>
                                    <Box p="2" style={{ background: 'white', color: 'var(--accent-11)', borderRadius: 'var(--radius-4)', border: '1px solid var(--accent-6)' }}>
                                        <Text>次要按钮</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Theme>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    ),
};
