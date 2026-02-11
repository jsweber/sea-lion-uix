import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from './blockquote';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

const meta = {
    title: '排版/Blockquote',
    component: Blockquote,
    tags: ['autodocs'],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof Blockquote>;

const sampleText = '道可道，非常道。名可名，非常名。无名天地之始，有名万物之母。';
const sampleLongText = '人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。处众人之所恶，故几于道。居善地，心善渊，与善仁，言善信，正善治，事善能，动善时。夫唯不争，故无尤。';

// 基本用法示例
export const Basic: Story = {
    name: '基本用法',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            description: '文字尺寸："1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"',
        },
        weight: {
            control: 'inline-radio',
            options: ['light', 'regular', 'medium', 'bold'],
            description: '字重："light" | "regular" | "medium" | "bold"',
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
        weight: 'regular',
        color: 'gray',
        highContrast: false,
        children: sampleText,
    },
    render: (props) => (
        <Theme>
            <Blockquote {...props} />
        </Theme>
    ),
};

// 不同尺寸示例
export const Sizes: Story = {
    name: '不同尺寸',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
                    <Flex key={size} align="center" gap="4">
                        <Text size="2" style={{ width: '60px' }}>Size {size}:</Text>
                        <Blockquote size={size as any}>
                            {sampleText}
                        </Blockquote>
                    </Flex>
                ))}
            </Flex>
        </Theme>
    ),
};

// 不同字重示例
export const Weights: Story = {
    name: '不同字重',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {['light', 'regular', 'medium', 'bold'].map((weight) => (
                    <Flex key={weight} align="center" gap="4">
                        <Text size="2" style={{ width: '80px' }}>{weight}:</Text>
                        <Blockquote weight={weight as any}>
                            {sampleText}
                        </Blockquote>
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
                        <Blockquote color={color}>
                            {sampleText}
                        </Blockquote>
                    </Flex>
                ))}
            </Flex>
        </Theme>
    ),
};

// 文本换行示例
export const TextWrap: Story = {
    name: '文本换行',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                <div style={{ width: '400px' }}>
                    <Text size="2" mb="2">默认换行：</Text>
                    <Blockquote>
                        {sampleLongText}
                    </Blockquote>
                </div>

                <div style={{ width: '400px' }}>
                    <Text size="2" mb="2">单行省略：</Text>
                    <Blockquote truncate>
                        {sampleLongText}
                    </Blockquote>
                </div>

                <div style={{ width: '400px' }}>
                    <Text size="2" mb="2">禁止换行：</Text>
                    <Blockquote wrap="nowrap">
                        {sampleLongText}
                    </Blockquote>
                </div>
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
                {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color: any) => (
                    <Blockquote key={color} color={color} highContrast>
                        {sampleText}
                    </Blockquote>
                ))}
            </Flex>
        </Theme>
    ),
};
