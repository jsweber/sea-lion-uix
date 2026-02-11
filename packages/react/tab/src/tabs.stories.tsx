import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';
import * as Tabs from '@sea-lion/react-tab';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import {
    TabsRootPropsComponent,
    TabsListPropsComponent,
    TabsTriggerPropsComponent,
    TabsContentPropsComponent,
} from './tabs-props-table';

/**
 * ## 介绍
 *
 * Tabs 是一个选项卡组件，用于在同一个区域内切换不同内容。
 *
 * ## 何时使用
 *
 * - 需要在同一区域内展示不同类别的内容
 * - 内容分组且彼此相关
 * - 需要节省页面空间
 */
const meta: Meta<typeof Tabs.Root> = {
    title: '导航/Tabs',
    component: Tabs.Root,
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
            <Text mb="5">最基本的选项卡组件。</Text>

            <Tabs.Root defaultValue="tab1">
                <Tabs.List>
                    <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">选项卡 3</Tabs.Trigger>
                </Tabs.List>
                <Box p="4" style={{ border: '1px solid var(--gray-5)', borderTop: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                    <Tabs.Content value="tab1">
                        <Text>这是选项卡 1 的内容。</Text>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                        <Text>这是选项卡 2 的内容。</Text>
                    </Tabs.Content>
                    <Tabs.Content value="tab3">
                        <Text>这是选项卡 3 的内容。</Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </Box>
    );
};

BasicUsage.storyName = '基本用法';

export const ControlledTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <Box>
            <Heading size="3" mb="4">受控组件</Heading>
            <Text mb="5">通过 React 状态控制选项卡。</Text>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
                <Tabs.List>
                    <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                </Tabs.List>
                <Box p="4" style={{ border: '1px solid var(--gray-5)', borderTop: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                    <Tabs.Content value="tab1">
                        <Text>这是选项卡 1 的内容。当前激活的选项卡: {activeTab}</Text>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                        <Text>这是选项卡 2 的内容。当前激活的选项卡: {activeTab}</Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </Box>
    );
};

ControlledTabs.storyName = '受控组件';

export const TabSizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同尺寸</Heading>
            <Text mb="5">选项卡提供三种不同尺寸。</Text>

            <Flex direction="column" gap="6">
                <Box>
                    <Text mb="2" size="2" color="gray">尺寸 1 (最小)</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List size="1">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                        <Box p="2" style={{ border: '1px solid var(--gray-5)', borderTop: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                            <Tabs.Content value="tab1">
                                <Text size="1">尺寸 1 的内容区域</Text>
                            </Tabs.Content>
                            <Tabs.Content value="tab2">
                                <Text size="1">尺寸 1 的内容区域</Text>
                            </Tabs.Content>
                        </Box>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">尺寸 2 (默认)</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List size="2">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                        <Box p="3" style={{ border: '1px solid var(--gray-5)', borderTop: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                            <Tabs.Content value="tab1">
                                <Text size="2">尺寸 2 的内容区域</Text>
                            </Tabs.Content>
                            <Tabs.Content value="tab2">
                                <Text size="2">尺寸 2 的内容区域</Text>
                            </Tabs.Content>
                        </Box>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">尺寸 3 (最大)</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List size="3">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                        <Box p="4" style={{ border: '1px solid var(--gray-5)', borderTop: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                            <Tabs.Content value="tab1">
                                <Text size="3">尺寸 3 的内容区域</Text>
                            </Tabs.Content>
                            <Tabs.Content value="tab2">
                                <Text size="3">尺寸 3 的内容区域</Text>
                            </Tabs.Content>
                        </Box>
                    </Tabs.Root>
                </Box>
            </Flex>
        </Box>
    );
};

TabSizes.storyName = '不同尺寸';

export const TabColors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同颜色</Heading>
            <Text mb="5">选项卡支持不同的颜色。</Text>

            <Flex direction="column" gap="6">
                <Box>
                    <Text mb="2" size="2" color="gray">默认颜色 (蓝色)</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List>
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">红色</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List color="red">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">绿色</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List color="green">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">紫色</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List color="purple">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>
            </Flex>
        </Box>
    );
};

TabColors.storyName = '不同颜色';

export const TabVariants = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同变体</Heading>
            <Text mb="5">选项卡支持不同的变体样式。</Text>

            <Flex direction="column" gap="6">
                <Box>
                    <Text mb="2" size="2" color="gray">表面变体 (默认)</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List>
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">下划线变体</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List variant="underline">
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>
            </Flex>
        </Box>
    );
};

TabVariants.storyName = '不同变体';

export const HighContrastTabs = () => {
    return (
        <Box>
            <Heading size="3" mb="4">高对比度</Heading>
            <Text mb="5">启用高对比度模式使选项卡更加醒目。</Text>

            <Flex direction="column" gap="6">
                <Box>
                    <Text mb="2" size="2" color="gray">正常对比度</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List>
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">高对比度</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List highContrast>
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>

                <Box>
                    <Text mb="2" size="2" color="gray">红色 - 高对比度</Text>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List color="red" highContrast>
                            <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
                            <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>
            </Flex>
        </Box>
    );
};

HighContrastTabs.storyName = '高对比度';

export const DisabledTabs = () => {
    return (
        <Box>
            <Heading size="3" mb="4">禁用选项卡</Heading>
            <Text mb="5">可以禁用特定的选项卡。</Text>

            <Tabs.Root defaultValue="tab1">
                <Tabs.List>
                    <Tabs.Trigger value="tab1">可用选项卡</Tabs.Trigger>
                    <Tabs.Trigger value="tab2" disabled>禁用选项卡</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">可用选项卡</Tabs.Trigger>
                </Tabs.List>
                <Box p="4" style={{ border: '1px solid var(--gray-5)', borderTop: 'none', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                    <Tabs.Content value="tab1">
                        <Text>这是选项卡 1 的内容。</Text>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                        <Text>这是选项卡 2 的内容。</Text>
                    </Tabs.Content>
                    <Tabs.Content value="tab3">
                        <Text>这是选项卡 3 的内容。</Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </Box>
    );
};

DisabledTabs.storyName = '禁用选项卡';

export const TabsAPI = () => {
    return (
        <Theme>
            <Box style={{ padding: 'var(--space-5)' }}>
                <Heading size="4" mb="5">API 参考</Heading>

                <TabsRootPropsComponent />
                <TabsListPropsComponent />
                <TabsTriggerPropsComponent />
                <TabsContentPropsComponent />

                <Box mt="4" style={{ maxWidth: '900px' }}>
                    <Text size="2" mt="3" color="gray">所有组件还支持标准的外边距（margin）属性。</Text>
                </Box>
            </Box>
        </Theme>
    );
};

TabsAPI.storyName = '组件 API';
