import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
import { Button } from '@sea-lion/react-button';
import { FlexPropsComponent } from './flex-props-table';

/**
 * ## 介绍
 *
 * Flex 是一个基于 CSS flexbox 布局的容器组件，用于创建灵活的一维布局，无论是行还是列。
 *
 * ## 何时使用
 *
 * - 创建水平或垂直方向的布局结构
 * - 需要灵活分配空间的用户界面
 * - 对齐和分布子元素
 * - 构建响应式布局
 * - 实现导航栏、工具栏等基础UI组件
 */
const meta: Meta<typeof Flex> = {
    component: Flex,
    title: '布局/Flex',
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

type Story = StoryObj<typeof Flex>;

// 基本用法示例
export const FlexBasic: Story = {
    name: '基本用法',
    render: () => (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">基本用法</div>
                    <Flex gap="4">
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 1</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 2</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 3</Text>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    ),
};

// 方向示例
export const FlexDirection = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">方向 (direction)</div>

                    <Text size="2" mb="2">row (默认)</Text>
                    <Flex direction="row" gap="3" mb="4">
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 1</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 2</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 3</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">column</Text>
                    <Flex direction="column" gap="3" mb="4">
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 1</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 2</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 3</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">row-reverse</Text>
                    <Flex direction="row-reverse" gap="3" mb="4">
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 1</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 2</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 3</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">column-reverse</Text>
                    <Flex direction="column-reverse" gap="3">
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 1</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 2</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目 3</Text>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

FlexDirection.storyName = '方向';

// 对齐方式示例
export const FlexAlignment = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">对齐方式 (align & justify)</div>

                    <Text size="2" mb="2">justify: start (默认)</Text>
                    <Flex
                        justify="start"
                        gap="3"
                        mb="4"
                        style={{ minHeight: '80px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}
                    >
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>start</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>start</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">justify: center</Text>
                    <Flex
                        justify="center"
                        gap="3"
                        mb="4"
                        style={{ minHeight: '80px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}
                    >
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>center</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>center</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">justify: end</Text>
                    <Flex
                        justify="end"
                        gap="3"
                        mb="4"
                        style={{ minHeight: '80px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}
                    >
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>end</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>end</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">justify: between</Text>
                    <Flex
                        justify="between"
                        gap="3"
                        mb="4"
                        style={{ minHeight: '80px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}
                    >
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>between</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>between</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">align: center, 高度不同的元素</Text>
                    <Flex
                        align="center"
                        gap="3"
                        style={{ minHeight: '120px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}
                    >
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>短项</Text>
                        </Box>
                        <Box p="3" style={{ height: '80px', backgroundColor: 'var(--blue-5)', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>高项</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>短项</Text>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

FlexAlignment.storyName = '对齐方式';

// 间距示例
export const FlexGap = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">间距 (gap)</div>

                    <Text size="2" mb="2">gap="1" (最小)</Text>
                    <Flex gap="1" mb="4" style={{ backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">gap="3" (小)</Text>
                    <Flex gap="3" mb="4" style={{ backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">gap="5" (中)</Text>
                    <Flex gap="5" mb="4" style={{ backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                    </Flex>

                    <Text size="2" mb="2">gap="9" (最大)</Text>
                    <Flex gap="9" style={{ backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                        <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                            <Text style={{ color: 'white' }}>项目</Text>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

FlexGap.storyName = '间距';

// Flex包装示例
export const FlexWrap = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">包装 (wrap)</div>

                    <Text size="2" mb="2">wrap="nowrap" (默认)</Text>
                    <Flex
                        wrap="nowrap"
                        gap="3"
                        mb="4"
                        style={{ maxWidth: '400px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px', overflowX: 'auto' }}
                    >
                        {Array.from({ length: 8 }).map((_, i) => (
                            <Box key={i} p="3" style={{ flex: '0 0 100px', backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                                <Text style={{ color: 'white' }}>项目 {i + 1}</Text>
                            </Box>
                        ))}
                    </Flex>

                    <Text size="2" mb="2">wrap="wrap"</Text>
                    <Flex
                        wrap="wrap"
                        gap="3"
                        style={{ maxWidth: '400px', backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '8px' }}
                    >
                        {Array.from({ length: 8 }).map((_, i) => (
                            <Box key={i} p="3" style={{ flex: '0 0 100px', backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                                <Text style={{ color: 'white' }}>项目 {i + 1}</Text>
                            </Box>
                        ))}
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

FlexWrap.storyName = '元素包装';

// 实用案例示例
export const FlexPractical = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">实用案例</div>

                    <Text size="2" mb="2">导航栏</Text>
                    <Flex
                        justify="between"
                        align="center"
                        mb="5"
                        style={{ backgroundColor: 'var(--gray-3)', borderRadius: '6px', padding: '16px' }}
                    >
                        <Text size="5" weight="bold">网站名称</Text>
                        <Flex gap="4">
                            <Button variant="soft">首页</Button>
                            <Button variant="soft">产品</Button>
                            <Button variant="soft">关于我们</Button>
                            <Button>联系我们</Button>
                        </Flex>
                    </Flex>

                    <Text size="2" mb="2">卡片布局</Text>
                    <Flex gap="4" wrap="wrap">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Box
                                key={i}
                                style={{
                                    flex: '1 1 200px',
                                    backgroundColor: 'white',
                                    borderRadius: '6px',
                                    padding: '16px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                }}
                            >
                                <Text size="3" weight="bold" mb="2">卡片标题</Text>
                                <Text size="2" mb="4">这是卡片的内容描述，可以包含各种信息。</Text>
                                <Button size="1">了解更多</Button>
                            </Box>
                        ))}
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

FlexPractical.storyName = '实用案例';

// API 文档
export const FlexAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Flex props</div>
                <FlexPropsComponent />
            </div>
        </Theme>
    );
};

FlexAPI.storyName = '组件 API';
