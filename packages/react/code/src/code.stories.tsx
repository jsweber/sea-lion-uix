import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Code } from '@sea-lion/react-code';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
/**
 * ## 介绍
 *
 * Code 是一个用于展示代码片段的组件，提供了多种风格和尺寸选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-code
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-code
 * yarn add @sea-lion/react-code
 * ```
 *
 * ## 何时使用
 *
 * - 在文本中展示代码片段或命令
 * - 需要突出显示技术名称或变量
 * - 在文档或教程中标记代码语法
 * - 展示配置项、参数名称或技术术语
 *
 * Code组件提供了与上下文环境区分的视觉样式，使代码内容更加醒目。
 */
const meta: Meta<typeof Code> = {
    component: Code,
    title: '排版/Code',
    tags: ['autodocs'],
    argTypes: {
        textWrap: {
            control: 'inline-radio',
            options: ['wrap', 'nowrap', 'balance', 'pretty'],
            description: '文本换行方式',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const CodeWithProps: Story = {
    name: 'Code Props',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            description: '代码尺寸："1" | "2" | ... | "9"',
        },
        variant: {
            control: 'inline-radio',
            options: ['solid', 'soft', 'outline', 'ghost'],
            description: '视觉变量："solid" | "soft" | "outline" | "ghost"',
        },
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
        highContrast: {
            control: 'boolean',
            description: '使用高对比度颜色',
            type: 'boolean',
        },
        weight: {
            control: 'inline-radio',
            options: ['light', 'regular', 'medium', 'bold'],
            description: '文本粗细',
        },
        truncate: {
            control: 'boolean',
            description: '文本截断',
            type: 'boolean',
        },
        textWrap: {
            control: 'inline-radio',
            options: ['wrap', 'nowrap', 'balance', 'pretty'],
            description: '文本换行方式',
        },
    },
    args: {
        size: '2',
        variant: 'soft',
        color: 'blue',
        highContrast: undefined,
        children: 'console.log("Hello World");',
    },
    render: (props) => {
        return (
            <div>
                <Theme>
                    <div className="story-book-container">
                        <Code {...props} />
                    </div>
                </Theme>
            </div>
        );
    },
};

export const CodeBasicExample = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">基本用法</div>
                    <Text as="p" size="3">
                        这里是普通文本，包含一段 <Code>console.log('Hello World')</Code> 代码。
                    </Text>
                </div>
            </div>
        </Theme>
    );
};

CodeBasicExample.storyName = '基本用法';

export const CodeSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的代码</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 1</Text>
                            <Code size="1">npm install @sea-lion/react-code</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 2 (默认)</Text>
                            <Code size="2">npm install @sea-lion/react-code</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 3</Text>
                            <Code size="3">npm install @sea-lion/react-code</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 4</Text>
                            <Code size="4">npm install @sea-lion/react-code</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 5</Text>
                            <Code size="5">npm install @sea-lion/react-code</Code>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CodeSizes.storyName = '代码尺寸';

export const CodeVariants = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同风格的代码</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">Soft (默认)</Text>
                            <Code variant="soft">{"import { useState } from 'react';"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Solid</Text>
                            <Code variant="solid">{"import { useState } from 'react';"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Outline</Text>
                            <Code variant="outline">{"import { useState } from 'react';"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Ghost</Text>
                            <Code variant="ghost">{"import { useState } from 'react';"}</Code>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CodeVariants.storyName = '代码风格';

export const CodeColors = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同颜色的代码</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">蓝色 (默认)</Text>
                            <Code color="blue">{"const Component = () => {};"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">猩红色</Text>
                            <Code color="crimson">{"const Component = () => {};"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">绿色</Text>
                            <Code color="green">{"const Component = () => {};"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">橙色</Text>
                            <Code color="orange">{"const Component = () => {};"}</Code>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CodeColors.storyName = '代码颜色';

export const HighContrastCode = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">高对比度代码</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">普通对比度</Text>
                            <Code color="blue" variant="soft">{"function example() { return true; }"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">高对比度</Text>
                            <Code color="blue" variant="soft" highContrast>{"function example() { return true; }"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">普通对比度 (solid)</Text>
                            <Code color="blue" variant="solid">{"function example() { return true; }"}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">高对比度 (solid)</Text>
                            <Code color="blue" variant="solid" highContrast>{"function example() { return true; }"}</Code>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

HighContrastCode.storyName = '高对比度';

export const CodeWithoutTheme = () => {
    return (
        <div className="story-book-container">
            <div className="story-book-margin-top-20">
                <div className="story-book-label">不使用Theme组件</div>
                <Code>const example = 'no theme';</Code>
            </div>
        </div>
    );
};

CodeWithoutTheme.storyName = '不使用Theme组件';

export const CodeTextProperties = () => {
    const longCode = `function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}`;

    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">文本属性</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">普通文本</Text>
                            <Code>{longCode}</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">文本截断 (truncate)</Text>
                            <div style={{ width: '300px' }}>
                                <Code truncate>{longCode}</Code>
                            </div>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">不换行 (nowrap)</Text>
                            <div style={{ width: '300px', overflow: 'auto' }}>
                                <Code textWrap="nowrap">{longCode}</Code>
                            </div>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">平衡换行 (balance)</Text>
                            <div style={{ width: '300px' }}>
                                <Code textWrap="balance">{longCode}</Code>
                            </div>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CodeTextProperties.storyName = '文本处理属性';

export const CodeWeights = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同字重的代码</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">Regular (默认)</Text>
                            <Code weight="regular">const data = [1, 2, 3, 4];</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Medium</Text>
                            <Code weight="medium">const data = [1, 2, 3, 4];</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Bold</Text>
                            <Code weight="bold">const data = [1, 2, 3, 4];</Code>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Light</Text>
                            <Code weight="light">const data = [1, 2, 3, 4];</Code>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CodeWeights.storyName = '字重变化';

export const CodeInContext = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">文本中使用代码</div>
                    <Box>
                        <Text as="p" size="3">
                            在React组件中，使用 <Code>useState</Code> 钩子可以创建状态变量。例如：
                        </Text>
                        <Box mt="2" p="3" style={{ backgroundColor: 'var(--gray-3)' }}>
                            <Code variant="ghost">
                                const [count, setCount] = useState(0);
                            </Code>
                        </Box>
                        <Text as="p" size="3" mt="2">
                            然后可以通过 <Code>setCount</Code> 更新状态值，并使用 <Code>count</Code> 在渲染中读取状态值。
                        </Text>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

CodeInContext.storyName = '上下文中的代码';
