import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as HoverCard from '@sea-lion/react-hover-card';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Avatar } from '@sea-lion/react-avatar';
import { HoverCardPropsComponent } from './hover-card-props-table';

/**
 * ## 介绍
 *
 * HoverCard 是一个在用户悬停在触发元素上时显示的卡片组件，用于展示补充内容，不打断用户的操作流程。
 *
 * ## 何时使用
 *
 * - 显示用户简介或头像信息
 * - 提供术语、概念的解释说明
 * - 预览链接目标内容
 * - 展示产品详情或附加信息
 * - 在不离开当前上下文的情况下提供更多信息
 */
const meta: Meta<typeof HoverCard> = {
    component: HoverCard.Root as any,
    title: '数据录入/HoverCard',
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

export const Basic = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">将鼠标悬停在用户名上查看详细信息：</Text>
                <HoverCard.Root>
                    <HoverCard.Trigger>
                        <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>@张小明</Text>
                    </HoverCard.Trigger>
                    <HoverCard.Content>
                        <Flex gap="3">
                            <Avatar
                                size="3"
                                src="https://i.pravatar.cc/300"
                                fallback="张小明"
                            />
                            <div>
                                <Text weight="bold">张小明</Text>
                                <Text size="2" color="gray">@张小明</Text>
                                <Text size="2" mt="2">前端开发工程师，热爱React和UI组件设计。目前正在研究组件库的最佳实践。</Text>
                            </div>
                        </Flex>
                    </HoverCard.Content>
                </HoverCard.Root>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const Sizes = () => {
    return (
        <Theme>
            <Flex direction="column" gap="6" p="5">
                <Box>
                    <Text mb="2" weight="bold">小尺寸 (size="1")</Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>小尺寸悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content size="1">
                            <Text>简洁的内容，适合展示少量信息。</Text>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>

                <Box>
                    <Text mb="2" weight="bold">中等尺寸 (size="2"，默认)</Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>默认尺寸悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content size="2">
                            <Flex direction="column" gap="2">
                                <Text weight="bold">标准大小内容</Text>
                                <Text>适合大多数场景，提供了良好的空间来展示信息。</Text>
                            </Flex>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>

                <Box>
                    <Text mb="2" weight="bold">大尺寸 (size="3")</Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>大尺寸悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content size="3">
                            <Flex direction="column" gap="3">
                                <Text weight="bold" size="4">更大的内容区域</Text>
                                <Text>当需要显示更多详细内容时，大尺寸提供了更宽敞的空间。可以放置更多的信息、图像或复杂的布局结构。</Text>
                                <Flex gap="2" mt="2">
                                    <Box style={{ width: 60, height: 60, background: 'var(--gray-4)', borderRadius: 4 }} />
                                    <Box style={{ width: 60, height: 60, background: 'var(--gray-4)', borderRadius: 4 }} />
                                    <Box style={{ width: 60, height: 60, background: 'var(--gray-4)', borderRadius: 4 }} />
                                </Flex>
                            </Flex>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>
            </Flex>
        </Theme>
    );
};

Sizes.storyName = '不同尺寸';

export const CustomWidth = () => {
    return (
        <Theme>
            <Flex direction="column" gap="6" p="5">
                <Box>
                    <Text mb="2" weight="bold">固定宽度 (width="300px")</Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>固定宽度悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content width="300px">
                            <Text>此卡片的宽度固定为300像素，无论内容多少。</Text>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>

                <Box>
                    <Text mb="2" weight="bold">最小和最大宽度 (minWidth="200px" maxWidth="400px")</Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>带有最小和最大宽度的悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content minWidth="200px" maxWidth="400px">
                            <Text>此卡片的宽度将根据内容在200px到400px之间自动调整。当内容较少时，宽度至少为200px；当内容较多时，宽度最多为400px，超出部分将换行显示。</Text>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>
            </Flex>
        </Theme>
    );
};

CustomWidth.storyName = '自定义宽度';

export const Delay = () => {
    return (
        <Theme>
            <Flex direction="column" gap="6" p="5">
                <Box>
                    <Text mb="2" weight="bold">默认延迟 (openDelay=200ms, closeDelay=150ms)</Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>默认延迟悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content>
                            <Text>悬停200毫秒后显示，离开150毫秒后关闭。</Text>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>

                <Box>
                    <Text mb="2" weight="bold">自定义延迟 (openDelay=500ms, closeDelay=300ms)</Text>
                    <HoverCard.Root openDelay={500} closeDelay={300}>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>较长延迟悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content>
                            <Text>悬停500毫秒后显示，离开300毫秒后关闭。这个延迟更长，可以减少意外触发。</Text>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>

                <Box>
                    <Text mb="2" weight="bold">快速延迟 (openDelay=50ms, closeDelay=50ms)</Text>
                    <HoverCard.Root openDelay={50} closeDelay={50}>
                        <HoverCard.Trigger>
                            <Text style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>快速延迟悬停卡片</Text>
                        </HoverCard.Trigger>
                        <HoverCard.Content>
                            <Text>悬停50毫秒后显示，离开50毫秒后关闭。这个延迟很短，几乎是立即显示和关闭。</Text>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </Box>
            </Flex>
        </Theme>
    );
};

Delay.storyName = '延迟控制';

export const HoverCardPractical = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="5" weight="bold" mb="4">实用案例展示</Text>

                <Flex direction="column" gap="6">
                    <Box>
                        <Text size="2" weight="bold" mb="2">用户资料卡</Text>
                        <Box style={{ background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <Text>在这篇文章中，<HoverCard.Root>
                                <HoverCard.Trigger>
                                    <Text as="span" style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>@李明</Text>
                                </HoverCard.Trigger>
                                <HoverCard.Content>
                                    <Flex gap="3">
                                        <Avatar size="3" src="https://i.pravatar.cc/150?img=11" fallback="李明" />
                                        <div>
                                            <Flex gap="2" align="center">
                                                <Text weight="bold">李明</Text>
                                                <Box style={{ background: 'var(--blue-5)', color: 'var(--blue-11)', fontSize: '12px', padding: '2px 6px', borderRadius: '4px' }}>作者</Box>
                                            </Flex>
                                            <Text size="2" color="gray">@李明</Text>
                                            <Text size="2" mt="2">高级前端开发工程师，专注于用户体验和性能优化。已发表30篇技术文章。</Text>
                                            <Flex mt="3" gap="3">
                                                <Box style={{ fontSize: '12px' }}>
                                                    <Text weight="bold">134</Text>
                                                    <Text color="gray">文章</Text>
                                                </Box>
                                                <Box style={{ fontSize: '12px' }}>
                                                    <Text weight="bold">15.2k</Text>
                                                    <Text color="gray">粉丝</Text>
                                                </Box>
                                            </Flex>
                                        </div>
                                    </Flex>
                                </HoverCard.Content>
                                         </HoverCard.Root> 和 <HoverCard.Root>
                                <HoverCard.Trigger>
                                                 <Text as="span" style={{ cursor: 'pointer', color: 'var(--blue-9)' }}>@王红</Text>
                                             </HoverCard.Trigger>
                                <HoverCard.Content>
                                                 <Flex gap="3">
                                        <Avatar size="3" src="https://i.pravatar.cc/150?img=5" fallback="王红" />
                                        <div>
                                                         <Text weight="bold">王红</Text>
                                                         <Text size="2" color="gray">@王红</Text>
                                                         <Text size="2" mt="2">UI设计师，注重细节和用户体验。喜欢简约而不简单的设计风格。</Text>
                                                     </div>
                                    </Flex>
                                             </HoverCard.Content>
                                                </HoverCard.Root> 讨论了现代前端框架的发展趋势...
                            </Text>
                        </Box>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">术语解释</Text>
                        <Box style={{ background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <Text>
                                要理解现代JavaScript开发，掌握 <HoverCard.Root>
                                    <HoverCard.Trigger>
                                        <Text as="span" style={{ cursor: 'pointer', borderBottom: '1px dashed', color: 'var(--blue-9)' }}>闭包</Text>
                                    </HoverCard.Trigger>
                                    <HoverCard.Content size="2">
                                        <Text weight="bold">闭包 (Closure)</Text>
                                        <Text size="2" mt="1">闭包是指函数和声明该函数的词法环境的组合。这个环境包含了这个闭包创建时作用域内的任何局部变量。</Text>
                                        <Box style={{ background: 'var(--gray-2)', padding: '8px', borderRadius: '4px', marginTop: '8px' }}>
                                            <Text size="2" as="div" style={{ margin: 0, fontFamily: 'monospace', whiteSpace: 'pre' }}>
                                                {`function makeCounter() {
                          let count = 0;
                          return function() {
                            return count++;
                          };
                        }

                        const counter = makeCounter();
                        console.log(counter()); // 0
                        console.log(counter()); // 1`}
                                            </Text>
                                        </Box>
                                    </HoverCard.Content>
                                                     </HoverCard.Root> 和 <HoverCard.Root>
                                    <HoverCard.Trigger>
                                                             <Text as="span" style={{ cursor: 'pointer', borderBottom: '1px dashed', color: 'var(--blue-9)' }}>原型继承</Text>
                                                         </HoverCard.Trigger>
                                    <HoverCard.Content size="2">
                                                             <Text weight="bold">原型继承 (Prototype Inheritance)</Text>
                                                             <Text size="2" mt="1">JavaScript 对象有一个指向一个原型对象的链接。当试图访问一个对象的属性时，不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索。</Text>
                                                         </HoverCard.Content>
                                                    </HoverCard.Root> 的概念非常重要。
                            </Text>
                        </Box>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">产品预览</Text>
                        <Box style={{ background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <Flex gap="4" wrap="wrap">
                                {['音乐播放器', '智能手表', '无线耳机'].map((product) => (
                                    <HoverCard.Root key={product}>
                                        <HoverCard.Trigger>
                                            <Box style={{
                                                width: '120px',
                                                height: '120px',
                                                background: 'var(--gray-3)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                            }}
                                            >
                                                <Text>{product}</Text>
                                            </Box>
                                        </HoverCard.Trigger>
                                        <HoverCard.Content>
                                            <Flex direction="column" gap="2">
                                                <Text weight="bold">{product}</Text>
                                                <Text size="2">¥ {Math.floor(Math.random() * 1000) + 500}.00</Text>
                                                <Text size="2" color="gray">这是一段关于{product}的详细说明，包括其特点、规格和用途。</Text>
                                                <Box style={{
                                                    width: '100%',
                                                    height: '80px',
                                                    background: 'var(--gray-3)',
                                                    borderRadius: '4px',
                                                    marginTop: '8px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                >
                                                    <Text size="2" color="gray">产品图片</Text>
                                                </Box>
                                            </Flex>
                                        </HoverCard.Content>
                                    </HoverCard.Root>
                                ))}
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

HoverCardPractical.storyName = '实用案例';

// API 文档
export const HoverCardAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">HoverCard props</div>
                <HoverCardPropsComponent />
            </div>
        </Theme>
    );
};

HoverCardAPI.storyName = '组件 API';
