import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

/**
 * ## 介绍
 *
 * Badge 是徽章组件，用于展示标签、计数或状态等短文本。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-badge
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-badge
 * yarn add @sea-lion/react-badge
 * ```
 */
const meta = {
    title: '数据展示/Badge',
    component: Badge,
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

// 基本用法示例
export const Basic: Story = {
    name: '基本用法',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3'],
            description: '徽章尺寸："1" | "2" | "3"',
        },
        variant: {
            control: 'inline-radio',
            options: ['solid', 'soft', 'surface', 'outline'],
            description: '视觉变体："solid" | "soft" | "surface" | "outline"',
        },
        radius: {
            control: 'inline-radio',
            options: ['none', 'small', 'medium', 'large', 'full'],
            description: '圆角："none" | "small" | "medium" | "large" | "full"',
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
        radius: 'full',
        color: 'gray',
        highContrast: false,
        children: '新功能',
    },
    render: (props) => (
        <Theme>
            <Badge {...props} />
        </Theme>
    ),
};

// 不同尺寸示例
export const Sizes: Story = {
    name: '不同尺寸',
    render: () => (
        <Theme>
            <Flex align="center" gap="4">
                {['1', '2', '3'].map((size) => (
                    <Badge
                        key={size}
                        size={size as any}
                    >
                        Size {size}
                    </Badge>
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
                {['solid', 'soft', 'surface', 'outline'].map((variant) => (
                    <Flex key={variant} align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{variant}:</Text>
                        <Badge variant={variant as any}>
                            {variant}
                        </Badge>
                    </Flex>
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
                {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color: any) => (
                    <Flex key={color} align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{color}:</Text>
                        <Badge color={color} variant="solid">
                            {color}
                        </Badge>
                        <Badge color={color} variant="soft">
                            {color}
                        </Badge>
                        <Badge color={color} variant="surface">
                            {color}
                        </Badge>
                        <Badge color={color} variant="outline">
                            {color}
                        </Badge>
                    </Flex>
                ))}
            </Flex>
        </Theme>
    ),
};

// 常见用例示例
export const UseCases: Story = {
    name: '常见用例',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                <Flex align="center" gap="2">
                    <Text>消息通知</Text>
                    <Badge color="red" size="1">99+</Badge>
                </Flex>

                <Flex align="center" gap="2">
                    <Text>功能标签</Text>
                    <Badge color="blue" variant="soft">Beta</Badge>
                </Flex>

                <Flex align="center" gap="2">
                    <Text>状态标识</Text>
                    <Badge color="green" variant="surface">在线</Badge>
                    <Badge color="gray" variant="surface">离线</Badge>
                </Flex>

                <Flex align="center" gap="2">
                    <Text>版本信息</Text>
                    <Badge color="gold" variant="outline">v2.0.0</Badge>
                </Flex>
            </Flex>
        </Theme>
    ),
};

// 高对比度示例
export const HighContrast: Story = {
    name: '高对比度',
    render: () => (
        <Theme>
            <Flex gap="4">
                <Badge highContrast variant="solid">
                    高对比实心
                </Badge>
                <Badge highContrast variant="soft">
                    高对比柔和
                </Badge>
                <Badge highContrast variant="surface">
                    高对比面型
                </Badge>
                <Badge highContrast variant="outline">
                    高对比描边
                </Badge>
            </Flex>
        </Theme>
    ),
};
