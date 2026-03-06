import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Text } from '@sea-lion/react-text';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Heading } from '@sea-lion/react-heading';
import { TextPropsComponent } from './text-props-table';

/**
 * ## 介绍
 *
 * Text 是一个文本组件，用于显示不同样式和尺寸的文本内容。组件支持多种尺寸、字重、对齐方式和颜色选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-text
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-text
 * yarn add @sea-lion/react-text
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import { Text } from '@sea-lion/react-text';
 * ```
 *
 * ## 何时使用
 *
 * - 需要显示段落、标签或一般文本内容时
 * - 需要控制文本的尺寸、字重、对齐方式时
 * - 需要对文本应用不同颜色和样式时
 * - 需要处理文本溢出或截断时
 */
const meta: Meta<typeof Text> = {
    title: '数据录入/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            control: { type: 'select' },
        },
        weight: {
            options: ['light', 'regular', 'medium', 'bold'],
            control: { type: 'select' },
        },
        color: {
            options: [
                'gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange',
                'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple',
                'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade',
                'green', 'grass', 'lime',
            ],
            control: { type: 'select' },
        },
        textAlign: {
            options: ['left', 'center', 'right'],
            control: { type: 'select' },
        },
        as: {
            options: ['span', 'div', 'label', 'p'],
            control: { type: 'select' },
        },
    },
};

export default meta;

export const Default = () => {
    return (
        <Theme>
            <Box p="4">
                <Heading as="h1" size="6" mb="5">文本 Text</Heading>
                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">基本用法</Heading>
                    <Flex direction="column" gap="4">
                        <Text>这是默认文本样式</Text>
                        <Text size="3" weight="medium">这是 size="3" weight="medium" 的文本</Text>
                        <Text color="blue">这是蓝色文本</Text>
                        <Text color="red" highContrast>这是高对比度红色文本</Text>
                    </Flex>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">文本尺寸</Heading>
                    <Flex direction="column" gap="4">
                        <Text size="1">文本尺寸 1 (最小)</Text>
                        <Text size="2">文本尺寸 2</Text>
                        <Text size="3">文本尺寸 3</Text>
                        <Text size="4">文本尺寸 4</Text>
                        <Text size="5">文本尺寸 5</Text>
                        <Text size="6">文本尺寸 6</Text>
                        <Text size="7">文本尺寸 7</Text>
                        <Text size="8">文本尺寸 8</Text>
                        <Text size="9">文本尺寸 9 (最大)</Text>
                    </Flex>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">文本字重</Heading>
                    <Flex direction="column" gap="4">
                        <Text weight="light">轻量字重 (Light)</Text>
                        <Text weight="regular">常规字重 (Regular)</Text>
                        <Text weight="medium">中等字重 (Medium)</Text>
                        <Text weight="bold">粗体字重 (Bold)</Text>
                    </Flex>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">文本对齐</Heading>
                    <Flex direction="column" gap="4" style={{ width: '100%' }}>
                        <Box style={{ border: '1px dashed var(--gray-6)', padding: '8px' }}>
                            <Text textAlign="left">左对齐文本</Text>
                        </Box>
                        <Box style={{ border: '1px dashed var(--gray-6)', padding: '8px' }}>
                            <Text textAlign="center">居中对齐文本</Text>
                        </Box>
                        <Box style={{ border: '1px dashed var(--gray-6)', padding: '8px' }}>
                            <Text textAlign="right">右对齐文本</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">文本颜色</Heading>
                    <Flex wrap="wrap" gap="4">
                        <Text color="gray">灰色文本</Text>
                        <Text color="blue">蓝色文本</Text>
                        <Text color="green">绿色文本</Text>
                        <Text color="red">红色文本</Text>
                        <Text color="purple">紫色文本</Text>
                        <Text color="orange">橙色文本</Text>
                        <Text color="pink">粉色文本</Text>
                        <Text color="yellow">黄色文本</Text>
                    </Flex>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">高对比度文本</Heading>
                    <Flex wrap="wrap" gap="4">
                        <Text color="gray" highContrast>高对比度灰色</Text>
                        <Text color="blue" highContrast>高对比度蓝色</Text>
                        <Text color="green" highContrast>高对比度绿色</Text>
                        <Text color="red" highContrast>高对比度红色</Text>
                    </Flex>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">文本截断</Heading>
                    <Box style={{ width: '200px', border: '1px dashed var(--gray-6)', padding: '8px' }}>
                        <Text truncate>这是一段很长的文本，将被截断显示省略号，因为设置了 truncate 属性</Text>
                    </Box>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="5" mb="4">不同元素类型</Heading>
                    <Flex direction="column" gap="4">
                        <Text as="span">这是一个 span 元素 (默认)</Text>
                        <Text as="div">这是一个 div 元素</Text>
                        <Text as="label">这是一个 label 元素</Text>
                        <Text as="p">这是一个段落 (p) 元素</Text>
                    </Flex>
                </Box>
            </Box>
        </Theme>
    );
};

export const UseCases = () => {
    return (
        <Theme>
            <Box p="4">
                <Heading as="h1" size="6" mb="5">实用案例</Heading>

                <Box mb="6">
                    <Heading as="h2" size="4" mb="4">文章内容</Heading>
                    <Box style={{ maxWidth: '650px' }}>
                        <Heading size="6" mb="2">中国古典文学的魅力</Heading>
                        <Text as="p" size="3" color="gray" mb="4">发布于 2023 年 8 月 15 日 · 阅读时间 5 分钟</Text>
                        <Text as="p" size="3" mb="3">
                            中国古典文学有着几千年的悠久历史，是中华文化宝库中的瑰宝。从《诗经》到唐诗宋词，从四大名著到才子佳人小说，中国古典文学以其丰富的内容、多样的形式和深刻的思想，展现了中华民族深厚的文化底蕴和卓越的艺术才华。
                        </Text>
                        <Text as="p" size="3" mb="3">
                            在漫长的历史长河中，古代文人墨客用他们的智慧与情感，创作了无数传世佳作，这些作品不仅具有极高的审美价值，还承载着丰富的历史信息和深刻的人生哲理。
                        </Text>
                        <Text as="p" size="3" mb="3">
                            通过阅读古典文学作品，我们可以了解古代社会的风貌，感受古人的情感与智慧，汲取宝贵的文化营养，丰富我们的精神世界。
                        </Text>
                    </Box>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="4" mb="4">产品价格卡片</Heading>
                    <Flex gap="4" wrap="wrap">
                        <Box style={{ width: '250px', padding: '24px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                            <Text size="5" weight="bold" mb="2">基础版</Text>
                            <Flex align="baseline" mb="3">
                                <Text size="7" weight="bold">¥99</Text>
                                <Text size="2" color="gray">/月</Text>
                            </Flex>
                            <Text size="2" color="gray" mb="4">适合个人用户和小型团队</Text>
                            <Text size="2" mb="2">✓ 基础功能</Text>
                            <Text size="2" mb="2">✓ 5GB 存储空间</Text>
                            <Text size="2" mb="2">✓ 邮件支持</Text>
                            <Text size="2" color="gray">✗ 高级功能</Text>
                        </Box>

                        <Box style={{ width: '250px', padding: '24px', border: '1px solid var(--blue-6)', borderRadius: '8px', background: 'var(--blue-2)' }}>
                            <Text size="5" weight="bold" color="blue" mb="2">专业版</Text>
                            <Flex align="baseline" mb="3">
                                <Text size="7" weight="bold" color="blue">¥199</Text>
                                <Text size="2" color="gray">/月</Text>
                            </Flex>
                            <Text size="2" color="gray" mb="4">适合中型企业和专业团队</Text>
                            <Text size="2" mb="2">✓ 所有基础功能</Text>
                            <Text size="2" mb="2">✓ 50GB 存储空间</Text>
                            <Text size="2" mb="2">✓ 优先邮件支持</Text>
                            <Text size="2" mb="2">✓ 高级分析功能</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

// 添加 API 文档故事
export const API = () => {
    return (
        <Theme>
            <Box p="4">
                <Heading as="h1" size="5" mb="5">API 参考</Heading>
                <TextPropsComponent />
            </Box>
        </Theme>
    );
};

API.storyName = '组件 API';

// TextAPI 部分将在 text-props-table.tsx 中创建
