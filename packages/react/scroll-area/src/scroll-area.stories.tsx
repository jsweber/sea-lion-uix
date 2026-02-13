import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { ScrollArea } from '@sea-lion/react-scroll-area';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { ScrollAreaPropsComponent } from './scroll-area-props-table';

/**
 * ## 介绍
 *
 * ScrollArea 是一个自定义滚动区域组件，提供优雅的跨浏览器滚动体验，具有可自定义的滚动条。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-scroll-area
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-scroll-area
 * yarn add @sea-lion/react-scroll-area
 * ```
 *
 * ## 何时使用
 *
 * - 需要自定义滚动条样式时
 * - 需要在不同浏览器中保持一致的滚动体验
 * - 需要控制滚动条的显示和隐藏
 */
const meta: Meta<typeof ScrollArea> = {
    component: ScrollArea,
    title: '布局/ScrollArea',
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

// 创建一个长内容的示例
const LongContent = () => (
    <div style={{ padding: '16px' }}>
        <Text as="p" mb="3">
            这是一段很长的文本内容，当内容超出容器大小时，会显示自定义滚动条。
        </Text>
        {Array.from({ length: 20 }).map((_, i) => (
            <Text as="p" key={i} mb="3">
                第 {i + 1} 段示例文本，可以滚动查看更多内容。ScrollArea 组件提供了自定义的滚动条，让用户体验更加一致和美观。
            </Text>
        ))}
    </div>
);

// 创建一个宽内容的示例
const WideContent = () => (
    <div style={{ padding: '16px', width: '1200px' }}>
        <Text as="p" mb="3">
            这是一个宽内容示例，当内容宽度超出容器时，会显示水平滚动条。
        </Text>
        <div style={{ display: 'flex', gap: '16px' }}>
            {Array.from({ length: 20 }).map((_, i) => (
                <Box
                    key={i}
                    style={{
                        minWidth: '200px',
                        height: '150px',
                        backgroundColor: 'var(--gray-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                    }}
                >
                    内容块 {i + 1}
                </Box>
            ))}
        </div>
    </div>
);

export const Basic = () => {
    return (
        <Box>
            <Heading size="3" mb="4">基础用法</Heading>
            <Text mb="3">ScrollArea 组件为内容区域提供自定义滚动条，让用户体验更加一致和美观。</Text>

            <Box style={{ width: '400px', height: '300px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                <ScrollArea>
                    <LongContent />
                </ScrollArea>
            </Box>
        </Box>
    );
};

export const Sizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">滚动条尺寸</Heading>
            <Text mb="3">ScrollArea 组件支持三种滚动条尺寸：小 (1)、中 (2) 和大 (3)。</Text>

            <Flex gap="6" direction="column">
                <Box>
                    <Text weight="bold" mb="2">尺寸 1 (默认)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea size="1">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">尺寸 2：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea size="2">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">尺寸 3：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea size="3">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export const ScrollbarDirection = () => {
    return (
        <Box>
            <Heading size="3" mb="4">滚动条方向</Heading>
            <Text mb="3">可以使用 scrollbars 属性控制显示的滚动条方向。</Text>

            <Flex gap="6" direction="column">
                <Box>
                    <Text weight="bold" mb="2">垂直滚动条：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea scrollbars="vertical">
                            <WideContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">水平滚动条：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea scrollbars="horizontal">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">双向滚动条：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea scrollbars="both">
                            <WideContent />
                        </ScrollArea>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export const Radius = () => {
    return (
        <Box>
            <Heading size="3" mb="4">滚动条圆角</Heading>
            <Text mb="3">使用 radius 属性可以设置滚动条的圆角样式，有多种预设值可选。</Text>

            <Flex gap="6" direction="column">
                <Box>
                    <Text weight="bold" mb="2">无圆角 (none)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea radius="none">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">小圆角 (small)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea radius="small">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">中等圆角 (medium)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea radius="medium">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">大圆角 (large)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea radius="large">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">完全圆角 (full)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea radius="full">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

Radius.storyName = '滚动条圆角';

export const ScrollbarType = () => {
    return (
        <Box>
            <Heading size="3" mb="4">滚动条类型</Heading>
            <Text mb="3">使用 type 属性控制滚动条的显示行为。</Text>

            <Flex gap="6" direction="column">
                <Box>
                    <Text weight="bold" mb="2">自动 (auto)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea type="auto">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">始终显示 (always)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea type="always">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">滚动时显示 (scroll)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea type="scroll">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                    <Text size="1" mt="1" color="gray">提示：滚动内容时显示滚动条</Text>
                </Box>

                <Box>
                    <Text weight="bold" mb="2">悬停时显示 (hover)：</Text>
                    <Box style={{ width: '400px', height: '200px', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
                        <ScrollArea type="hover">
                            <LongContent />
                        </ScrollArea>
                    </Box>
                    <Text size="1" mt="1" color="gray">提示：鼠标悬停在容器上时显示滚动条</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export const UseCases = () => {
    return (
        <Theme>
            <Box>
                <Heading size="3" mb="4">实用案例</Heading>
                <Text mb="3">以下是一些常见的使用场景示例。</Text>

                <Flex gap="6" direction="column">
                    <Box>
                        <Text weight="bold" mb="2">内容卡片：</Text>
                        <Box
                            style={{
                                width: '350px',
                                height: '400px',
                                border: '1px solid var(--gray-6)',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                            }}
                        >
                            <Box style={{ padding: '16px', borderBottom: '1px solid var(--gray-4)' }}>
                                <Heading size="3">文章标题</Heading>
                            </Box>
                            <Box style={{ height: 'calc(400px - 61px)' }}>
                                <ScrollArea>
                                    <Box style={{ padding: '16px' }}>
                                        <Text as="p" mb="3">这是一个内容卡片示例，当文章内容较长时，卡片内部使用 ScrollArea 组件提供平滑的滚动体验。</Text>
                                        {Array.from({ length: 15 }).map((_, i) => (
                                            <Text as="p" key={i} mb="3">
                                                第 {i + 1} 段文章内容。使用 ScrollArea 组件可以保持卡片的高度固定，同时允许用户滚动查看所有内容。
                                            </Text>
                                        ))}
                                    </Box>
                                </ScrollArea>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Text weight="bold" mb="2">侧边菜单：</Text>
                        <Flex>
                            <Box
                                style={{
                                    width: '200px',
                                    height: '400px',
                                    backgroundColor: 'var(--gray-2)',
                                    borderRadius: '8px 0 0 8px',
                                    border: '1px solid var(--gray-6)',
                                    borderRight: 'none',
                                }}
                            >
                                <ScrollArea>
                                    <Box style={{ padding: '16px' }}>
                                        <Text weight="bold" mb="3">菜单</Text>
                                        {Array.from({ length: 30 }).map((_, i) => (
                                            <Box
                                                key={i}
                                                style={{
                                                    padding: '8px 12px',
                                                    marginBottom: '4px',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    backgroundColor: i === 2 ? 'var(--gray-4)' : 'transparent',
                                                }}
                                            >
                                                菜单项 {i + 1}
                                            </Box>
                                        ))}
                                    </Box>
                                </ScrollArea>
                            </Box>
                            <Box
                                style={{
                                    width: '400px',
                                    height: '400px',
                                    padding: '16px',
                                    backgroundColor: 'white',
                                    borderRadius: '0 8px 8px 0',
                                    border: '1px solid var(--gray-6)',
                                }}
                            >
                                <Heading size="3" mb="3">内容区域</Heading>
                                <Text>这里是主内容区域，当菜单项过多时，侧边栏使用 ScrollArea 组件提供滚动功能。</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const ScrollAreaAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">ScrollArea API</div>
                <ScrollAreaPropsComponent />
            </div>
        </Theme>
    );
};

ScrollAreaAPI.storyName = '组件 API';
