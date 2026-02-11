import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

const meta = {
    title: '数据展示/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

// 使用猫咪图片
const catImageUrl = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&h=200&q=80';

// 基本用法示例
export const Basic: Story = {
    name: '基本用法',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            description: '头像尺寸："1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"',
        },
        variant: {
            control: 'inline-radio',
            options: ['solid', 'soft'],
            description: '视觉变量："solid" | "soft"',
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
        size: '3',
        variant: 'soft',
        radius: 'full',
        color: 'gray',
        highContrast: false,
        src: catImageUrl,
        fallback: 'CAT',
        alt: '猫咪头像',
    },
    render: (props) => (
        <Theme>
            <Avatar {...props} />
        </Theme>
    ),
};

// 不同尺寸示例
export const Sizes: Story = {
    name: '不同尺寸',
    render: () => (
        <Theme>
            <Flex align="center" gap="4">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
                    <Avatar
                        key={size}
                        size={size as any}
                        src={catImageUrl}
                        fallback="CAT"
                        alt="猫咪头像"
                    />
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
                {['solid', 'soft'].map((variant) => (
                    <Flex key={variant} align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{variant}:</Text>
                        <Avatar
                            variant={variant as 'solid' | 'soft'}
                            src={catImageUrl}
                            fallback="CAT"
                            alt="猫咪头像"
                        />
                        <Avatar
                            variant={variant as 'solid' | 'soft'}
                            fallback="CAT"
                            alt="猫咪头像"
                        />
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
                        <Avatar
                            color={color}
                            variant="solid"
                            fallback="CAT"
                            alt="猫咪头像"
                        />
                        <Avatar
                            color={color}
                            variant="soft"
                            fallback="CAT"
                            alt="猫咪头像"
                        />
                    </Flex>
                ))}
            </Flex>
        </Theme>
    ),
};

// Fallback 示例
export const Fallbacks: Story = {
    name: 'Fallback 展示',
    render: () => (
        <Theme>
            <Flex gap="4">
                <Avatar
                    size="5"
                    fallback="喵喵"
                    alt="猫咪头像"
                />
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
                <Avatar
                    highContrast
                    variant="solid"
                    fallback="CAT"
                    alt="猫咪头像"
                />
                <Avatar
                    highContrast
                    variant="soft"
                    fallback="CAT"
                    alt="猫咪头像"
                />
            </Flex>
        </Theme>
    ),
};
