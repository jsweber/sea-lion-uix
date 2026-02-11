import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Heading } from '@sea-lion/react-heading';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { HeadingPropsComponent } from './heading-props-table';

/**
 * ## 介绍
 *
 * Heading 是一个用于显示标题的组件，提供多种级别、尺寸和样式选项，以满足不同层级的标题需求。
 *
 * ## 何时使用
 *
 * - 网页、应用的各级标题展示
 * - 内容区域的分段标题
 * - 需要强调层级关系的文本标题
 * - 产品标题、页面标题等需要突出的文本
 * - 不同粗细、尺寸的标题展示
 */
const meta: Meta<typeof Heading> = {
    component: Heading,
    title: '排版/Heading',
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
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingWithProps: Story = {
    name: 'Heading 属性',
    argTypes: {
        as: {
            control: 'inline-radio',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            description: '要渲染的 HTML 元素',
        },
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            description: '标题文本尺寸',
        },
        weight: {
            control: 'inline-radio',
            options: ['light', 'regular', 'medium', 'bold'],
            description: '文本粗细',
        },
        align: {
            control: 'inline-radio',
            options: ['left', 'center', 'right'],
            description: '文本对齐方式',
        },
        color: {
            control: 'text',
            description: '文本颜色',
        },
        highContrast: {
            control: 'boolean',
            description: '是否使用高对比度颜色',
        },
        truncate: {
            control: 'boolean',
            description: '是否截断文本并显示省略号',
        },
    },
    args: {
        as: 'h2',
        size: '6',
        weight: 'bold',
        children: '这是一个标题',
    },
    render: (args) => <Heading {...args} />,
};

export const HeadingLevels = () => {
    return (
        <Theme>
            <div>
                <Box mb="5">
                    <Text weight="bold" mb="3">标题层级</Text>
                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }}>
                        <Flex direction="column" gap="3">
                            <Heading as="h1" size="9">Heading 1 (size 9)</Heading>
                            <Heading as="h2" size="7">Heading 2 (size 7)</Heading>
                            <Heading as="h3" size="5">Heading 3 (size 5)</Heading>
                            <Heading as="h4" size="3">Heading 4 (size 3)</Heading>
                            <Heading as="h5" size="2">Heading 5 (size 2)</Heading>
                            <Heading as="h6" size="1">Heading 6 (size 1)</Heading>
                        </Flex>
                    </Box>
                </Box>
            </div>
        </Theme>
    );
};

HeadingLevels.storyName = '标题层级';

export const HeadingSizes = () => {
    return (
        <Theme>
            <div>
                <Box mb="5">
                    <Text weight="bold" mb="3">标题尺寸</Text>
                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }}>
                        <Flex direction="column" gap="3">
                            <Heading size="9">尺寸 9</Heading>
                            <Heading size="8">尺寸 8</Heading>
                            <Heading size="7">尺寸 7</Heading>
                            <Heading size="6">尺寸 6 (默认)</Heading>
                            <Heading size="5">尺寸 5</Heading>
                            <Heading size="4">尺寸 4</Heading>
                            <Heading size="3">尺寸 3</Heading>
                            <Heading size="2">尺寸 2</Heading>
                            <Heading size="1">尺寸 1</Heading>
                        </Flex>
                    </Box>
                </Box>
            </div>
        </Theme>
    );
};

HeadingSizes.storyName = '标题尺寸';

export const HeadingStyles = () => {
    return (
        <Theme>
            <div>
                <Box mb="5">
                    <Text weight="bold" mb="3">标题样式变化</Text>

                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }} mb="4">
                        <Text weight="bold" mb="2">文本粗细</Text>
                        <Flex direction="column" gap="3">
                            <Heading weight="light">Light 粗细</Heading>
                            <Heading weight="regular">Regular 粗细</Heading>
                            <Heading weight="medium">Medium 粗细</Heading>
                            <Heading weight="bold">Bold 粗细 (默认)</Heading>
                        </Flex>
                    </Box>

                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }} mb="4">
                        <Text weight="bold" mb="2">文本对齐</Text>
                        <Flex direction="column" gap="3">
                            <Heading align="left">左对齐文本</Heading>
                            <Heading align="center">居中对齐文本</Heading>
                            <Heading align="right">右对齐文本</Heading>
                        </Flex>
                    </Box>

                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }} mb="4">
                        <Text weight="bold" mb="2">文本颜色</Text>
                        <Flex direction="column" gap="3">
                            <Heading color="blue">蓝色标题</Heading>
                            <Heading color="green">绿色标题</Heading>
                            <Heading color="red">红色标题</Heading>
                            <Heading color="amber">琥珀色标题</Heading>
                            <Heading color="gray">灰色标题</Heading>
                        </Flex>
                    </Box>

                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }} mb="4">
                        <Text weight="bold" mb="2">高对比度</Text>
                        <Flex direction="column" gap="3">
                            <Heading color="blue">普通对比度</Heading>
                            <Heading color="blue" highContrast>高对比度</Heading>
                        </Flex>
                    </Box>

                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }}>
                        <Text weight="bold" mb="2">文本截断</Text>
                        <Flex direction="column" gap="3">
                            <Box style={{ width: '300px' }}>
                                <Heading truncate>这是一个非常长的标题，在空间不足时会被截断并显示省略号...</Heading>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </div>
        </Theme>
    );
};

HeadingStyles.storyName = '标题样式';

export const HeadingResponsive = () => {
    return (
        <Theme>
            <div>
                <Box mb="5">
                    <Text weight="bold" mb="3">响应式标题</Text>
                    <Box style={{ background: 'var(--gray-2)', padding: '24px', borderRadius: '6px' }}>
                        <Flex direction="column" gap="5">
                            <Box>
                                <Text size="2" mb="2">根据屏幕尺寸变化大小:</Text>
                                <Heading size={{ initial: '3', sm: '5', md: '7', lg: '9' }}>
                                    响应式标题大小
                                </Heading>
                                <Text size="2" color="gray" mt="2">
                                    在不同屏幕尺寸下会显示不同大小：在小屏幕上显示尺寸3，在中等屏幕显示尺寸5，在中大屏幕显示尺寸7，在大屏幕显示尺寸9
                                </Text>
                            </Box>

                            <Box>
                                <Text size="2" mb="2">根据屏幕尺寸变化对齐方式:</Text>
                                <Heading align={{ initial: 'left', md: 'center', lg: 'right' }}>
                                    响应式对齐方式
                                </Heading>
                                <Text size="2" color="gray" mt="2">
                                    在不同屏幕尺寸下会有不同的对齐方式：在小屏幕上左对齐，在中等屏幕居中对齐，在大屏幕右对齐
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </div>
        </Theme>
    );
};

HeadingResponsive.storyName = '响应式标题';

export const HeadingPractical = () => {
    return (
        <Theme>
            <div>
                <Box mb="5">
                    <Text weight="bold" mb="4">实用案例</Text>

                    <Flex direction="column" gap="6">
                        <Box>
                            <Text size="2" weight="bold" mb="2">博客文章布局</Text>
                            <Box style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <Heading size="8" mb="3">探索现代前端架构的演进</Heading>
                                <Text size="2" color="gray" mb="4">发布于 2023年6月15日 · 阅读时间 8分钟</Text>

                                <Heading as="h2" size="5" mt="5" mb="3">前端架构的历史</Heading>
                                <Text mb="3">前端开发领域在过去的十年中经历了剧烈的变革...</Text>

                                <Heading as="h3" size="3" mt="4" mb="2">单页应用的兴起</Heading>
                                <Text mb="3">随着Ajax的普及和JavaScript框架的发展...</Text>

                                <Heading as="h4" size="2" mt="3" mb="2">React的组件化思想</Heading>
                                <Text>组件化开发模式彻底改变了前端工程的组织方式...</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Text size="2" weight="bold" mb="2">产品登陆页</Text>
                            <Box style={{ background: 'var(--blue-1)', padding: '32px', borderRadius: '8px' }}>
                                <Flex direction="column" align="center" gap="3">
                                    <Heading color="blue" size="9" align="center" mb="2">
                                        未来就在眼前
                                    </Heading>
                                    <Heading color="gray" weight="regular" size="4" align="center" mb="5" style={{ maxWidth: '600px' }}>
                                        我们创新的产品让复杂的任务变得简单，帮助您提高工作效率
                                    </Heading>
                                    <Flex gap="3">
                                        <button style={{
                                            background: 'var(--blue-9)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                        }}
                                        >
                                            立即尝试
                                        </button>
                                        <button style={{
                                            background: 'transparent',
                                            color: 'var(--blue-11)',
                                            border: '1px solid var(--blue-7)',
                                            borderRadius: '4px',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                        }}
                                        >
                                            了解更多
                                        </button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>

                        <Box>
                            <Text size="2" weight="bold" mb="2">文档页面标题</Text>
                            <Box style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <Heading as="h1" size="8" mb="2">组件文档</Heading>
                                <Heading as="h2" size="3" weight="regular" color="gray" mb="5">全面了解我们的组件库及其API</Heading>

                                <Flex gap="5" wrap="wrap">
                                    {['按钮', '表单', '导航', '布局', '反馈', '数据展示'].map((item) => (
                                        <Box
                                            key={item}
                                            style={{
                                                background: 'var(--gray-2)',
                                                padding: '16px 24px',
                                                borderRadius: '8px',
                                                minWidth: '180px',
                                            }}
                                        >
                                            <Heading as="h3" size="2" mb="1">{item}</Heading>
                                            <Text size="1" color="gray">查看详细文档</Text>
                                        </Box>
                                    ))}
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </div>
        </Theme>
    );
};

HeadingPractical.storyName = '实用案例';

// API 文档
export const HeadingAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Heading props</div>
                <HeadingPropsComponent />
            </div>
        </Theme>
    );
};

HeadingAPI.storyName = '组件 API';
