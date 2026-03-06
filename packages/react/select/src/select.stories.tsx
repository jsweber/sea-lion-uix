import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';
import * as Select from '@sea-lion/react-select';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { useState } from 'react';
import { SelectPropsComponent } from './select-props-table';

/**
 * ## 介绍
 *
 * Select 是一个下拉选择组件，允许用户从预定义的选项列表中选择一个值。组件支持选项分组、禁用选项和自定义占位符。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-select
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-select
 * yarn add @sea-lion/react-select
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import * as Select from '@sea-lion/react-select';
 * ```
 *
 * ## 何时使用
 *
 * - 需要从一组选项中选择单个值
 * - 选项数量超过 5 个，考虑使用下拉选择而非单选按钮
 * - 页面空间有限，需要节省空间
 * - 选项需要分类展示
 */
const meta: Meta<typeof Select.Root> = {
    title: '数据录入/Select',
    component: Select.Root,
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
            <Text mb="5">最基本的下拉选择器。</Text>

            <Box style={{ maxWidth: '300px' }}>
                <Select.Root defaultValue="apple">
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Item value="apple">苹果</Select.Item>
                        <Select.Item value="orange">橙子</Select.Item>
                        <Select.Item value="grape">葡萄</Select.Item>
                        <Select.Item value="banana">香蕉</Select.Item>
                        <Select.Item value="watermelon">西瓜</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>
        </Box>
    );
};

BasicUsage.storyName = '基本用法';

export const Sizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">尺寸</Heading>
            <Text mb="5">Select 支持三种尺寸，用于适配不同的场景。</Text>

            <Flex direction="column" gap="4" style={{ maxWidth: '300px' }}>
                <Box>
                    <Text size="2" mb="2">小尺寸</Text>
                    <Select.Root size="1" defaultValue="apple">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" mb="2">中等尺寸（默认）</Text>
                    <Select.Root size="2" defaultValue="apple">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" mb="2">大尺寸</Text>
                    <Select.Root size="3" defaultValue="apple">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>
            </Flex>
        </Box>
    );
};

Sizes.storyName = '尺寸';

export const TriggerVariants = () => {
    return (
        <Box>
            <Heading size="3" mb="4">触发器变体</Heading>
            <Text mb="5">Select.Trigger 支持四种视觉变体，用于不同的视觉风格。</Text>

            <Flex direction="column" gap="4" style={{ maxWidth: '300px' }}>
                <Box>
                    <Text size="2" mb="2">Surface 变体（默认）</Text>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger variant="surface" />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" mb="2">Classic 变体</Text>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger variant="classic" />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" mb="2">Soft 变体</Text>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger variant="soft" />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" mb="2">Ghost 变体</Text>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger variant="ghost" />
                        <Select.Content>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>
            </Flex>
        </Box>
    );
};

TriggerVariants.storyName = '触发器变体';

export const ContentVariants = () => {
    return (
        <Box>
            <Heading size="3" mb="4">内容变体</Heading>
            <Text mb="5">Select.Content 支持两种视觉变体，用于不同的视觉风格。</Text>

            <Flex direction="column" gap="4" style={{ maxWidth: '300px' }}>
                <Box>
                    <Text size="2" mb="2">Solid 变体（默认）</Text>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger />
                        <Select.Content variant="solid">
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" mb="2">Soft 变体</Text>
                    <Select.Root defaultValue="apple">
                        <Select.Trigger />
                        <Select.Content variant="soft">
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>
            </Flex>
        </Box>
    );
};

ContentVariants.storyName = '内容变体';

export const GroupedOptions = () => {
    return (
        <Box>
            <Heading size="3" mb="4">分组选项</Heading>
            <Text mb="5">使用 Group 和 Label 组件可以将选项分组展示。</Text>

            <Box style={{ maxWidth: '300px' }}>
                <Select.Root defaultValue="apple">
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>水果</Select.Label>
                            <Select.Item value="apple">苹果</Select.Item>
                            <Select.Item value="orange">橙子</Select.Item>
                            <Select.Item value="grape">葡萄</Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                            <Select.Label>蔬菜</Select.Label>
                            <Select.Item value="carrot">胡萝卜</Select.Item>
                            <Select.Item value="potato">土豆</Select.Item>
                            <Select.Item value="broccoli">西兰花</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </Box>
        </Box>
    );
};

GroupedOptions.storyName = '分组选项';

export const WithPlaceholder = () => {
    return (
        <Box>
            <Heading size="3" mb="4">带占位符</Heading>
            <Text mb="5">Select.Trigger 可以设置 placeholder 属性来显示占位文本。</Text>

            <Box style={{ maxWidth: '300px' }}>
                <Select.Root>
                    <Select.Trigger placeholder="请选择一个选项..." />
                    <Select.Content>
                        <Select.Item value="apple">苹果</Select.Item>
                        <Select.Item value="orange">橙子</Select.Item>
                        <Select.Item value="grape">葡萄</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>
        </Box>
    );
};

WithPlaceholder.storyName = '带占位符';

export const DisabledOptions = () => {
    return (
        <Box>
            <Heading size="3" mb="4">禁用选项</Heading>
            <Text mb="5">可以通过设置 disabled 属性来禁用特定选项。</Text>

            <Box style={{ maxWidth: '300px' }}>
                <Select.Root defaultValue="apple">
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Item value="apple">苹果</Select.Item>
                        <Select.Item value="orange">橙子</Select.Item>
                        <Select.Item value="grape" disabled>葡萄</Select.Item>
                        <Select.Item value="banana" disabled>香蕉</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>
        </Box>
    );
};

DisabledOptions.storyName = '禁用选项';

export const ControlledMode = () => {
    const [value, setValue] = useState('apple');

    return (
        <Box>
            <Heading size="3" mb="4">受控模式</Heading>
            <Text mb="5">通过 value 和 onValueChange 属性可以将 Select 组件作为受控组件使用。</Text>

            <Box style={{ maxWidth: '300px' }}>
                <Text mb="2">当前选中值: {value}</Text>
                <Select.Root value={value} onValueChange={setValue}>
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Item value="apple">苹果</Select.Item>
                        <Select.Item value="orange">橙子</Select.Item>
                        <Select.Item value="grape">葡萄</Select.Item>
                        <Select.Item value="banana">香蕉</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>
        </Box>
    );
};

ControlledMode.storyName = '受控模式';

export const UseCases = () => {
    return (
        <Box>
            <Heading size="3" mb="4">实用案例</Heading>
            <Text mb="5">以下是 Select 组件在实际应用中的一些常见用法。</Text>

            <Box mb="8">
                <Heading size="2" mb="3">语言选择器</Heading>
                <Box style={{ maxWidth: '250px' }}>
                    <Select.Root defaultValue="zh">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item value="zh">中文</Select.Item>
                            <Select.Item value="en">English</Select.Item>
                            <Select.Item value="ja">日本語</Select.Item>
                            <Select.Item value="ko">한국어</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>
            </Box>

            <Box mb="8">
                <Heading size="2" mb="3">表单下拉选择</Heading>
                <Box style={{ maxWidth: '350px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                    <Flex direction="column" gap="4">
                        <Box>
                            <Text size="2" mb="2" weight="medium">姓名</Text>
                            <Box style={{ height: '40px', padding: '0 12px', border: '1px solid var(--gray-6)', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                                <Text>张三</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Text size="2" mb="2" weight="medium">职业</Text>
                            <Select.Root defaultValue="developer">
                                <Select.Trigger />
                                <Select.Content>
                                    <Select.Item value="developer">开发工程师</Select.Item>
                                    <Select.Item value="designer">设计师</Select.Item>
                                    <Select.Item value="product">产品经理</Select.Item>
                                    <Select.Item value="marketing">市场营销</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </Box>

                        <Box>
                            <Text size="2" mb="2" weight="medium">工作地点</Text>
                            <Select.Root defaultValue="beijing">
                                <Select.Trigger />
                                <Select.Content>
                                    <Select.Item value="beijing">北京</Select.Item>
                                    <Select.Item value="shanghai">上海</Select.Item>
                                    <Select.Item value="guangzhou">广州</Select.Item>
                                    <Select.Item value="shenzhen">深圳</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box>
                <Heading size="2" mb="3">筛选器</Heading>
                <Box style={{ maxWidth: '600px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                    <Flex gap="4" mb="4">
                        <Select.Root size="1" defaultValue="all">
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Item value="all">所有分类</Select.Item>
                                <Select.Item value="tech">科技</Select.Item>
                                <Select.Item value="life">生活</Select.Item>
                                <Select.Item value="sports">运动</Select.Item>
                            </Select.Content>
                        </Select.Root>

                        <Select.Root size="1" defaultValue="latest">
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Item value="latest">最新发布</Select.Item>
                                <Select.Item value="popular">最受欢迎</Select.Item>
                                <Select.Item value="price-asc">价格从低到高</Select.Item>
                                <Select.Item value="price-desc">价格从高到低</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Flex>

                    <Box style={{ height: '150px', backgroundColor: 'var(--gray-2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Text color="gray">列表内容区域</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

UseCases.storyName = '实用案例';

export const SelectAPI = () => {
    return (
        <Theme>
            <Box style={{ padding: 'var(--space-5)' }}>
                <Heading size="4" mb="5">API 参考</Heading>
                <SelectPropsComponent />
            </Box>
        </Theme>
    );
};

SelectAPI.storyName = '组件 API';
