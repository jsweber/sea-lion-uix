import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';
import { Separator } from '@sea-lion/react-separator';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';

/**
 * ## 介绍
 *
 * Separator 是一个分隔线组件，用于在视觉上分隔不同的内容区域。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-separator
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-separator
 * yarn add @sea-lion/react-separator
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import { Separator } from '@sea-lion/react-separator';
 * ```
 *
 * ## 何时使用
 *
 * - 需要在不同内容块之间创建视觉分隔
 * - 需要在布局中添加水平或垂直分隔线
 * - 需要划分不同的内容区域
 */
const meta: Meta<typeof Separator> = {
    title: '布局/Separator',
    component: Separator,
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

export const BasicUsage = () => {
    return (
        <Box>
            <Heading size="3" mb="4">基本用法</Heading>
            <Text mb="5">最基本的分隔线。</Text>

            <Box style={{ width: '300px' }}>
                <Text mb="3">上方内容</Text>
                <Separator size="4" />
                <Text mt="3">下方内容</Text>
            </Box>
        </Box>
    );
};

BasicUsage.storyName = '基本用法';

export const Orientation = () => {
    return (
        <Box>
            <Heading size="3" mb="4">方向</Heading>
            <Text mb="5">Separator 支持水平和垂直两种方向。</Text>

            <Flex direction="column" gap="6">
                <Box>
                    <Text size="2" mb="2">水平方向（默认）</Text>
                    <Box style={{ width: '300px' }}>
                        <Text mb="3">上方内容</Text>
                        <Separator orientation="horizontal" size="4" />
                        <Text mt="3">下方内容</Text>
                    </Box>
                </Box>

                <Box>
                    <Text size="2" mb="2">垂直方向</Text>
                    <Flex align="center" style={{ height: '60px' }}>
                        <Text>左侧内容</Text>
                        <Separator orientation="vertical" size="3" mx="3" />
                        <Text>右侧内容</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

Orientation.storyName = '方向';

export const Sizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">尺寸</Heading>
            <Text mb="5">Separator 支持四种尺寸，用于适配不同的场景。</Text>

            <Flex direction="column" gap="6">
                <Box>
                    <Text size="2" mb="2">水平方向尺寸</Text>
                    <Flex direction="column" gap="4" style={{ width: '300px' }}>
                        <Box>
                            <Text size="1" mb="2">尺寸 1 (最小)</Text>
                            <Separator size="1" />
                        </Box>

                        <Box>
                            <Text size="1" mb="2">尺寸 2</Text>
                            <Separator size="2" />
                        </Box>

                        <Box>
                            <Text size="1" mb="2">尺寸 3</Text>
                            <Separator size="3" />
                        </Box>

                        <Box>
                            <Text size="1" mb="2">尺寸 4 (填充可用空间)</Text>
                            <Separator size="4" />
                        </Box>
                    </Flex>
                </Box>

                <Box>
                    <Text size="2" mb="2">垂直方向尺寸</Text>
                    <Flex align="center" style={{ height: '100px' }}>
                        <Box>
                            <Text size="1" mb="2">尺寸 1</Text>
                            <Separator orientation="vertical" size="1" />
                        </Box>

                        <Box ml="6">
                            <Text size="1" mb="2">尺寸 2</Text>
                            <Separator orientation="vertical" size="2" />
                        </Box>

                        <Box ml="6">
                            <Text size="1" mb="2">尺寸 3</Text>
                            <Separator orientation="vertical" size="3" />
                        </Box>

                        <Box ml="6">
                            <Text size="1" mb="2">尺寸 4</Text>
                            <Separator orientation="vertical" size="4" style={{ height: '80px' }} />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

Sizes.storyName = '尺寸';

export const Colors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">颜色</Heading>
            <Text mb="5">Separator 支持自定义颜色。</Text>

            <Flex direction="column" gap="4" style={{ width: '300px' }}>
                <Box>
                    <Text size="2" mb="2">默认颜色 (gray)</Text>
                    <Separator size="4" color="gray" />
                </Box>

                <Box>
                    <Text size="2" mb="2">主题色 (蓝色)</Text>
                    <Separator size="4" color="blue" />
                </Box>

                <Box>
                    <Text size="2" mb="2">红色 (red)</Text>
                    <Separator size="4" color="red" />
                </Box>

                <Box>
                    <Text size="2" mb="2">蓝色 (blue)</Text>
                    <Separator size="4" color="blue" />
                </Box>

                <Box>
                    <Text size="2" mb="2">绿色 (green)</Text>
                    <Separator size="4" color="green" />
                </Box>
            </Flex>
        </Box>
    );
};

Colors.storyName = '颜色';

export const UseCases = () => {
    return (
        <Box>
            <Heading size="3" mb="4">实用案例</Heading>
            <Text mb="5">以下是 Separator 组件在实际应用中的一些常见用法。</Text>

            <Box mb="8">
                <Heading size="2" mb="3">内容分节</Heading>
                <Box style={{ maxWidth: '500px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                    <Heading size="4" mb="2">公司简介</Heading>
                    <Text size="2" mb="4">我们是一家专注于用户体验和设计系统的科技公司...</Text>

                    <Separator size="4" my="4" />

                    <Heading size="4" mb="2">我们的使命</Heading>
                    <Text size="2" mb="4">为开发者提供易用、高效、美观的组件库，提升开发效率...</Text>

                    <Separator size="4" my="4" />

                    <Heading size="4" mb="2">联系我们</Heading>
                    <Text size="2">电子邮件: contact@example.com</Text>
                </Box>
            </Box>

            <Box mb="8">
                <Heading size="2" mb="3">导航菜单项分隔</Heading>
                <Box style={{ maxWidth: '250px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                    <Flex direction="column">
                        <Box py="2">
                            <Text size="2" weight="medium">首页</Text>
                        </Box>
                        <Separator size="4" />
                        <Box py="2">
                            <Text size="2" weight="medium">产品</Text>
                        </Box>
                        <Separator size="4" />
                        <Text size="2" style={{ paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-2)' }} weight="medium">服务</Text>
                        <Separator size="4" />
                        <Text size="2" style={{ paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-2)' }} weight="medium">关于我们</Text>
                        <Separator size="4" />
                        <Text size="2" style={{ paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-2)' }} weight="medium">联系我们</Text>
                    </Flex>
                </Box>
            </Box>

            <Box>
                <Heading size="2" mb="3">内容区域布局</Heading>
                <Box style={{ maxWidth: '600px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                    <Flex>
                        <Box style={{ width: '200px' }}>
                            <Text size="2" weight="medium" mb="3">侧边导航</Text>
                            <Flex direction="column" gap="2">
                                <Text size="1">菜单项 1</Text>
                                <Text size="1">菜单项 2</Text>
                                <Text size="1">菜单项 3</Text>
                            </Flex>
                        </Box>

                        <Separator orientation="vertical" size="4" mx="4" />

                        <Box style={{ flex: 1 }}>
                            <Text size="2" weight="medium" mb="3">主要内容区域</Text>
                            <Text size="1">这里是主要内容区域，可以包含各种组件和信息...</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

UseCases.storyName = '实用案例';

export const SeparatorAPI = () => {
    return (
        <Theme>
            <Box style={{ padding: 'var(--space-5)' }}>
                <Heading size="4" mb="5">API 参考</Heading>

                <Box style={{ maxWidth: '900px' }}>
                    <Text size="3" weight="bold" mb="3">Separator 属性</Text>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--gray-3)' }}>
                                <th style={{ textAlign: 'left', padding: '12px 16px', width: '15%', borderBottom: '2px solid var(--gray-5)' }}>参数</th>
                                <th style={{ textAlign: 'left', padding: '12px 16px', width: '35%', borderBottom: '2px solid var(--gray-5)' }}>说明</th>
                                <th style={{ textAlign: 'left', padding: '12px 16px', width: '30%', borderBottom: '2px solid var(--gray-5)' }}>类型</th>
                                <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>默认值</th>
                                <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>版本</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: 'var(--gray-1)' }}>
                                <td style={{ padding: '12px 16px' }}>orientation</td>
                                <td style={{ padding: '12px 16px' }}>分隔线方向</td>
                                <td style={{ padding: '12px 16px' }}>'horizontal' | 'vertical'</td>
                                <td style={{ padding: '12px 16px' }}>'horizontal'</td>
                                <td style={{ padding: '12px 16px' }}>0.2.0</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px 16px' }}>size</td>
                                <td style={{ padding: '12px 16px' }}>分隔线尺寸</td>
                                <td style={{ padding: '12px 16px' }}>'1' | '2' | '3' | '4'</td>
                                <td style={{ padding: '12px 16px' }}>'1'</td>
                                <td style={{ padding: '12px 16px' }}>0.2.0</td>
                            </tr>
                            <tr style={{ backgroundColor: 'var(--gray-1)' }}>
                                <td style={{ padding: '12px 16px' }}>color</td>
                                <td style={{ padding: '12px 16px' }}>分隔线颜色</td>
                                <td style={{ padding: '12px 16px' }}>string</td>
                                <td style={{ padding: '12px 16px' }}>'gray'</td>
                                <td style={{ padding: '12px 16px' }}>0.2.0</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px 16px' }}>decorative</td>
                                <td style={{ padding: '12px 16px' }}>是否为装饰性元素</td>
                                <td style={{ padding: '12px 16px' }}>boolean</td>
                                <td style={{ padding: '12px 16px' }}>true</td>
                                <td style={{ padding: '12px 16px' }}>0.2.0</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>
        </Theme>
    );
};

SeparatorAPI.storyName = '组件 API';
