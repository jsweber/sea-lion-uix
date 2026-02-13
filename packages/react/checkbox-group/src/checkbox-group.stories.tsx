import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as CheckboxGroup from '@sea-lion/react-checkbox-group';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
import { useState } from 'react';

/**
 * ## 介绍
 *
 * CheckboxGroup 是一组复选框组件，用于从一组数据中选择多个值。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-checkbox-group
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-checkbox-group
 * yarn add @sea-lion/react-checkbox-group
 * ```
 *
 * ## 何时使用
 *
 * - 当用户需要从一组数据中选择多个选项时
 * - 当用户需要在开/关状态之间切换多个选项时
 * - 需要与表单一起使用，收集多个选项值的情况
 * - 适用于配置项的选择、多个条件筛选、数据列表的批量操作等场景
 *
 * 与单独使用的Checkbox相比，CheckboxGroup提供了统一的值管理和布局控制，更适合成组使用的场景。
 */
const meta: Meta<typeof CheckboxGroup.Root> = {
    component: CheckboxGroup.Root,
    title: '数据录入/CheckboxGroup',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup.Root>;

export const CheckboxGroupWithProps: Story = {
    name: 'CheckboxGroup Props',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3'],
            description: '复选框尺寸："1" | "2" | "3"',
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
        variant: {
            control: 'inline-radio',
            options: ['classic', 'soft', 'surface'],
            description: '视觉变量："classic" | "soft" | "surface"',
        },
        highContrast: {
            control: 'boolean',
            description: '使用高对比度颜色',
            type: 'boolean',
        },
        disabled: {
            control: 'boolean',
            description: '复选框组禁用',
            type: 'boolean',
        },
        orientation: {
            control: 'inline-radio',
            options: ['horizontal', 'vertical'],
            description: '排列方向："horizontal" | "vertical"',
        },
        required: {
            control: 'boolean',
            description: '是否必选',
            type: 'boolean',
        },
        name: {
            control: 'text',
            description: '表单字段名称',
        },
        onValueChange: {
            description: '值变化时的回调函数',
        },
    },
    args: {
        size: '2',
        color: 'blue',
        variant: 'classic',
        highContrast: undefined,
        disabled: undefined,
    },
    render: (props) => {
        return (
            <div>
                <Theme>
                    <div className="story-book-container">
                        <CheckboxGroup.Root {...props} defaultValue={['apple', 'banana']}>
                            <CheckboxGroup.Item value="apple">苹果</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="banana">香蕉</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="orange">橙子</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="pear">梨</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                    </div>
                </Theme>
            </div>
        );
    },
};

export const CheckboxGroupSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的复选框组</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 1</Text>
                            <CheckboxGroup.Root size="1" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 2 (默认)</Text>
                            <CheckboxGroup.Root size="2" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Size 3</Text>
                            <CheckboxGroup.Root size="3" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CheckboxGroupSizes.storyName = '复选框组尺寸';

export const CheckboxGroupColors = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同颜色的复选框组</div>
                    <Flex direction="column" gap="20px">
                        <CheckboxGroup.Root color="blue" defaultValue={['option1']}>
                            <CheckboxGroup.Item value="option1">蓝色 (默认)</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                        <CheckboxGroup.Root color="crimson" defaultValue={['option1']}>
                            <CheckboxGroup.Item value="option1">猩红色</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                        <CheckboxGroup.Root color="grass" defaultValue={['option1']}>
                            <CheckboxGroup.Item value="option1">草绿色</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                        <CheckboxGroup.Root color="amber" defaultValue={['option1']}>
                            <CheckboxGroup.Item value="option1">琥珀色</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CheckboxGroupColors.storyName = '复选框组颜色';

export const CheckboxGroupVariants = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同风格的复选框组</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">Classic</Text>
                            <CheckboxGroup.Root variant="classic" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Solid</Text>
                            <CheckboxGroup.Root variant="surface" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Soft</Text>
                            <CheckboxGroup.Root variant="soft" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">Surface</Text>
                            <CheckboxGroup.Root variant="surface" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CheckboxGroupVariants.storyName = '复选框组风格';

export const DisabledCheckboxGroup = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">禁用状态的复选框组</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">整组禁用</Text>
                            <CheckboxGroup.Root disabled defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">个别选项禁用</Text>
                            <CheckboxGroup.Root defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2" disabled>选项 2 (禁用)</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DisabledCheckboxGroup.storyName = '禁用状态';

export const ControlledCheckboxGroup = () => {
    const [value, setValue] = useState<string[]>(['option2']);

    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">受控复选框组</div>
                    <CheckboxGroup.Root
                        value={value}
                        onValueChange={setValue}
                    >
                        <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                        <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                        <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                    </CheckboxGroup.Root>

                    <Box mt="4">
                        <Text as="p" size="2">当前选中值: {value.join(', ') || '无'}</Text>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

ControlledCheckboxGroup.storyName = '受控复选框组';

export const CheckboxGroupWithoutTheme = () => {
    return (
        <div className="story-book-container">
            <div className="story-book-margin-top-20">
                <div className="story-book-label">不使用Theme组件</div>
                <CheckboxGroup.Root defaultValue={['option1']}>
                    <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                    <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                </CheckboxGroup.Root>
            </div>
        </div>
    );
};

CheckboxGroupWithoutTheme.storyName = '不使用Theme组件';

export const HighContrastCheckboxGroup = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">高对比度复选框组</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">普通对比度</Text>
                            <CheckboxGroup.Root color="blue" defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">高对比度</Text>
                            <CheckboxGroup.Root color="blue" highContrast defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

HighContrastCheckboxGroup.storyName = '高对比度';

export const CheckboxGroupWithRequiredField = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">必选复选框组</div>
                    <CheckboxGroup.Root required name="required-options" defaultValue={['option1']}>
                        <CheckboxGroup.Item value="option1">选项 1 (必选)</CheckboxGroup.Item>
                        <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                        <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                    </CheckboxGroup.Root>
                </div>
            </div>
        </Theme>
    );
};

CheckboxGroupWithRequiredField.storyName = '必选字段';

export const CheckboxGroupOrientation = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同方向的复选框组</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">垂直方向 (默认)</Text>
                            <CheckboxGroup.Root defaultValue={['option1']}>
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">水平方向</Text>
                            <CheckboxGroup.Root
                                orientation="horizontal"
                                defaultValue={['option1']}
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                            >
                                <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
                                <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
                            </CheckboxGroup.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

CheckboxGroupOrientation.storyName = '复选框组方向';
