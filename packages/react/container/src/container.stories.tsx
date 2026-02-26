import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Container } from '@sea-lion/react-container';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';

/**
 * ## 介绍
 *
 * Container 是一个用于限制内容最大宽度并在页面中居中内容的组件。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-container
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-container
 * yarn add @sea-lion/react-container
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import { Container } from '@sea-lion/react-container';
 * ```
 *
 * ## 何时使用
 *
 * - 创建具有标准宽度的页面布局
 * - 确保长文本内容在大屏幕上保持适当的行长度
 * - 居中显示内容并保持一致的页边距
 */
const meta: Meta<typeof Container> = {
    component: Container,
    title: '布局/Container',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const ContainerWithProps: Story = {
    name: 'Container 属性',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4'],
            description: '容器尺寸："1" | "2" | "3" | "4"',
        },
        display: {
            control: 'inline-radio',
            options: ['none', 'initial'],
            description: '显示模式："none" | "initial"',
        },
        align: {
            control: 'inline-radio',
            options: ['left', 'center', 'right'],
            description: '内容对齐方式："left" | "center" | "right"',
        },
    },
    args: {
        size: '2',
        align: 'center',
        children: <Text>这是一个容器内的文本内容</Text>,
    },
};

export const ContainerSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的容器</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 1 (448px)</Text>
                            <Container size="1" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4">
                                    <Text>这是一个尺寸为 1 的容器，最大宽度为 448px。</Text>
                                </Box>
                            </Container>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 2 (688px)</Text>
                            <Container size="2" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4">
                                    <Text>这是一个尺寸为 2 的容器，最大宽度为 688px。</Text>
                                </Box>
                            </Container>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 3 (880px)</Text>
                            <Container size="3" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4">
                                    <Text>这是一个尺寸为 3 的容器，最大宽度为 880px。</Text>
                                </Box>
                            </Container>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 4 (1136px)</Text>
                            <Container size="4" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4">
                                    <Text>这是一个尺寸为 4 的容器，最大宽度为 1136px。</Text>
                                </Box>
                            </Container>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

ContainerSizes.storyName = '容器尺寸';

export const ContainerAlignment = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同对齐方式的容器</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">左对齐</Text>
                            <Container size="3" align="left" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
                                    <Text>左对齐的内容</Text>
                                </Box>
                            </Container>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">居中对齐</Text>
                            <Container size="3" align="center" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
                                    <Text>居中对齐的内容</Text>
                                </Box>
                            </Container>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">右对齐</Text>
                            <Container size="3" align="right" style={{ backgroundColor: 'var(--gray-a3)' }}>
                                <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
                                    <Text>右对齐的内容</Text>
                                </Box>
                            </Container>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

ContainerAlignment.storyName = '容器对齐方式';

export const ContainerInLayout = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">在布局中使用容器</div>
                    <Container size="3" style={{ backgroundColor: 'var(--gray-a2)' }}>
                        <Box p="4">
                            <Heading size="5" mb="4">一个简单的页面布局</Heading>
                            <Text as="p" mb="4">
                                Container 组件可以用来创建标准的页面布局，限制内容宽度并确保其在各种屏幕尺寸下的可读性。
                                这对于文本内容特别重要，因为过长的行宽会降低可读性。
                            </Text>
                            <Flex gap="4" wrap="wrap">
                                <Box style={{ flex: '1 1 200px', backgroundColor: 'var(--blue-a3)' }} p="4">
                                    <Text weight="bold" mb="2">侧边栏</Text>
                                    <Text size="2">这里可以放置导航或相关内容。</Text>
                                </Box>
                                <Box style={{ flex: '2 1 400px', backgroundColor: 'var(--blue-a2)' }} p="4">
                                    <Text weight="bold" mb="2">主要内容</Text>
                                    <Text size="2">
                                        在这个区域放置页面的主要内容。容器确保了内容不会拉伸到过宽，从而保持了良好的可读性。
                                        对于大屏幕，内容将居中显示，而在小屏幕上，内容将使用可用空间。
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Container>
                </div>
            </div>
        </Theme>
    );
};

ContainerInLayout.storyName = '布局中的容器';

export const ResponsiveContainer = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">响应式容器</div>
                    <Container
                        size={{ sm: '1', md: '2', lg: '3', xl: '4' }}
                        style={{ backgroundColor: 'var(--gray-a3)' }}
                    >
                        <Box p="4">
                            <Text>
                                这个容器在不同的断点使用不同的尺寸：
                                <br />小屏幕 (sm) - 尺寸 1 (448px)
                                <br />中等屏幕 (md) - 尺寸 2 (688px)
                                <br />大屏幕 (lg) - 尺寸 3 (880px)
                                <br />超大屏幕 (xl) - 尺寸 4 (1136px)
                            </Text>
                        </Box>
                    </Container>
                </div>
            </div>
        </Theme>
    );
};

ResponsiveContainer.storyName = '响应式容器';
