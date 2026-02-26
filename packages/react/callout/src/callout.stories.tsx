import type { Meta, StoryObj } from '@storybook/react';
import * as Callout from './callout';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { InfoCircledIcon, ExclamationTriangleIcon, CheckCircledIcon } from '@radix-ui/react-icons';

/**
 * ## 介绍
 *
 * Callout 是一个用于展示重要信息、提示、警告等内容的组件。
 * 它包含图标和文本两个部分，支持不同的视觉样式、尺寸和颜色主题。
 *
 * 主要特点：
 * - 支持三种尺寸：small(1)、medium(2)、large(3)
 * - 提供三种视觉变体：soft、surface、outline
 * - 可自定义颜色主题
 * - 支持高对比度模式
 * - 包含 Icon 和 Text 两个子组件
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-callout
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-callout
 * yarn add @sea-lion/react-callout
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import * as Callout from '@sea-lion/react-callout';
 * ```
 */

const meta = {
    title: '反馈/Callout',
    component: Callout.Root,
    tags: ['autodocs'],
} satisfies Meta<typeof Callout.Root>;

export default meta;
type Story = StoryObj<typeof Callout.Root>;

// 基本用法示例
export const Basic: Story = {
    name: '基本用法',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3'],
            description: '提示框尺寸："1" | "2" | "3"',
        },
        variant: {
            control: 'inline-radio',
            options: ['soft', 'surface', 'outline'],
            description: '视觉变体："soft" | "surface" | "outline"',
        },
        color: {
            control: 'select',
            options: ['gray', 'gold', 'bronze', 'red', 'blue', 'green'],
            description: '颜色主题',
        },
        highContrast: {
            control: 'boolean',
            description: '是否使用高对比度',
        },
    },
    args: {
        size: '2',
        variant: 'soft',
        color: 'blue',
        highContrast: false,
    },
    render: (props) => (
        <Theme>
            <Callout.Root {...props}>
                <Callout.Icon>
                    <InfoCircledIcon width="20" height="20" />
                </Callout.Icon>
                <Callout.Text>
                    这是一个基础的 Callout 提示框，用于展示重要信息。
                </Callout.Text>
            </Callout.Root>
        </Theme>
    ),
};

// 不同尺寸示例
export const Sizes: Story = {
    name: '不同尺寸',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {['1', '2', '3'].map((size) => (
                    <Callout.Root key={size} size={size as any}>
                        <Callout.Icon>
                            <InfoCircledIcon width={size === '3' ? '24' : '20'} height={size === '3' ? '24' : '20'} />
                        </Callout.Icon>
                        <Callout.Text>
                            尺寸 {size} 的 Callout 提示框
                        </Callout.Text>
                    </Callout.Root>
                ))}
            </Flex>
        </Theme>
    ),
};

// 不同变体示例
export const Variants: Story = {
    name: '不同变体',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {['soft', 'surface', 'outline'].map((variant) => (
                    <Callout.Root key={variant} variant={variant as any}>
                        <Callout.Icon>
                            <InfoCircledIcon width="20" height="20" />
                        </Callout.Icon>
                        <Callout.Text>
                            {variant} 变体的 Callout 提示框
                        </Callout.Text>
                    </Callout.Root>
                ))}
            </Flex>
        </Theme>
    ),
};

// 不同颜色示例
export const Colors: Story = {
    name: '不同颜色',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {[
                    { color: 'blue', text: '信息提示' },
                    { color: 'green', text: '成功提示' },
                    { color: 'red', text: '错误提示' },
                    { color: 'yellow', text: '警告提示' },
                ].map(({ color, text }) => (
                    <Callout.Root key={color} color={color as any}>
                        <Callout.Icon>
                            <InfoCircledIcon width="20" height="20" />
                        </Callout.Icon>
                        <Callout.Text>
                            {text} - 使用 {color} 颜色主题
                        </Callout.Text>
                    </Callout.Root>
                ))}
            </Flex>
        </Theme>
    ),
};

// 使用场景示例
export const UseCases: Story = {
    name: '使用场景',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {/* 信息提示 */}
                <Callout.Root color="blue" variant="soft">
                    <Callout.Icon>
                        <InfoCircledIcon width="20" height="20" />
                    </Callout.Icon>
                    <Callout.Text>
                        系统将于今晚 24:00 进行例行维护，请提前保存您的工作。
                    </Callout.Text>
                </Callout.Root>

                {/* 成功提示 */}
                <Callout.Root color="green" variant="surface">
                    <Callout.Icon>
                        <CheckCircledIcon width="20" height="20" />
                    </Callout.Icon>
                    <Callout.Text>
                        您的更改已成功保存，所有设置已生效。
                    </Callout.Text>
                </Callout.Root>

                {/* 警告提示 */}
                <Callout.Root color="yellow" variant="outline">
                    <Callout.Icon>
                        <ExclamationTriangleIcon width="20" height="20" />
                    </Callout.Icon>
                    <Callout.Text>
                        您的存储空间即将用完，请及时清理不必要的文件。
                    </Callout.Text>
                </Callout.Root>
            </Flex>
        </Theme>
    ),
};

// 高对比度示例
export const HighContrast: Story = {
    name: '高对比度',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {['soft', 'surface', 'outline'].map((variant) => (
                    <Callout.Root key={variant} variant={variant as any} highContrast>
                        <Callout.Icon>
                            <InfoCircledIcon width="20" height="20" />
                        </Callout.Icon>
                        <Callout.Text>
                            高对比度的 {variant} Callout 提示框
                        </Callout.Text>
                    </Callout.Root>
                ))}
            </Flex>
        </Theme>
    ),
};
