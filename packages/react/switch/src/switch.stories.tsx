import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';
import { Switch } from '@sea-lion/react-switch';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { SwitchPropsComponent } from './switch-props-table';

/**
 * ## 介绍
 *
 * Switch 是一个开关组件，用于在两种状态间切换。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-switch
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-switch
 * yarn add @sea-lion/react-switch
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import { Switch } from '@sea-lion/react-switch';
 * ```
 *
 * ## 何时使用
 *
 * - 需要表示开关状态/处理用户的选择时
 * - 切换单个选项的状态时
 * - 立即生效的操作
 */
const meta: Meta<typeof Switch> = {
    title: '数据录入/Switch',
    component: Switch,
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
            <Text mb="5">最基本的开关组件。</Text>

            <Flex gap="4" align="center">
                <Switch />
                <Text>默认状态（未选中）</Text>
            </Flex>

            <Flex gap="4" align="center" mt="4">
                <Switch defaultChecked />
                <Text>默认选中状态</Text>
            </Flex>
        </Box>
    );
};

BasicUsage.storyName = '基本用法';

export const ControlledSwitch = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Box>
            <Heading size="3" mb="4">受控组件</Heading>
            <Text mb="5">通过 React 状态控制开关。</Text>

            <Flex gap="4" align="center">
                <Switch
                    checked={checked}
                    onCheckedChange={setChecked}
                />
                <Text>开关状态: {checked ? '开启' : '关闭'}</Text>
            </Flex>
        </Box>
    );
};

ControlledSwitch.storyName = '受控组件';

export const SwitchSizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同尺寸</Heading>
            <Text mb="5">Switch 组件提供三种不同的尺寸。</Text>

            <Flex direction="column" gap="4">
                <Flex gap="4" align="center">
                    <Switch size="1" />
                    <Text>尺寸 1（最小）</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch size="2" />
                    <Text>尺寸 2（默认）</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch size="3" />
                    <Text>尺寸 3（最大）</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

SwitchSizes.storyName = '不同尺寸';

export const SwitchVariants = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同变体</Heading>
            <Text mb="5">Switch 组件支持多种变体样式。</Text>

            <Flex direction="column" gap="4">
                <Flex gap="4" align="center">
                    <Switch variant="classic" defaultChecked />
                    <Text>经典变体（Classic）</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch variant="surface" defaultChecked />
                    <Text>表面变体（Surface，默认）</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch variant="soft" defaultChecked />
                    <Text>柔和变体（Soft）</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

SwitchVariants.storyName = '不同变体';

export const CustomColors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">自定义颜色</Heading>
            <Text mb="5">Switch 组件可以自定义颜色。</Text>

            <Flex direction="column" gap="4">
                <Flex gap="4" align="center">
                    <Switch color="blue" defaultChecked />
                    <Text>蓝色（默认）</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch color="red" defaultChecked />
                    <Text>红色</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch color="green" defaultChecked />
                    <Text>绿色</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch color="purple" defaultChecked />
                    <Text>紫色</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

CustomColors.storyName = '自定义颜色';

export const HighContrastSwitch = () => {
    return (
        <Box>
            <Heading size="3" mb="4">高对比度</Heading>
            <Text mb="5">启用高对比度模式使开关更加醒目。</Text>

            <Flex direction="column" gap="4">
                <Flex gap="4" align="center">
                    <Switch defaultChecked />
                    <Text>正常对比度</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch highContrast defaultChecked />
                    <Text>高对比度</Text>
                </Flex>

                <Flex gap="4" align="center" mt="4">
                    <Switch color="red" defaultChecked />
                    <Text>红色 - 正常对比度</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch color="red" highContrast defaultChecked />
                    <Text>红色 - 高对比度</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

HighContrastSwitch.storyName = '高对比度';

export const DisabledSwitch = () => {
    return (
        <Box>
            <Heading size="3" mb="4">禁用状态</Heading>
            <Text mb="5">禁用状态的开关无法交互。</Text>

            <Flex direction="column" gap="4">
                <Flex gap="4" align="center">
                    <Switch disabled />
                    <Text>禁用 - 未选中</Text>
                </Flex>

                <Flex gap="4" align="center">
                    <Switch disabled defaultChecked />
                    <Text>禁用 - 已选中</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

DisabledSwitch.storyName = '禁用状态';

export const SwitchWithLabels = () => {
    return (
        <Box>
            <Heading size="3" mb="4">带标签的开关</Heading>
            <Text mb="5">搭配标签使用可以提高可用性。</Text>

            <Flex direction="column" gap="5">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <Switch id="airplane-mode" />
                    <Text>飞行模式</Text>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <Switch id="dark-mode" defaultChecked />
                    <Text>深色模式</Text>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <Switch id="notifications" color="green" />
                    <Text>通知</Text>
                </label>
            </Flex>
        </Box>
    );
};

SwitchWithLabels.storyName = '带标签的开关';

export const SwitchAPI = () => {
    return (
        <Theme>
            <Box style={{ padding: 'var(--space-5)' }}>
                <Heading size="4" mb="5">API 参考</Heading>

                <SwitchPropsComponent />
                <Box mt="4" style={{ maxWidth: '900px' }}>
                    <Text size="2" mt="3" color="gray">除了上述属性外，Switch 组件还支持所有标准的外边距（margin）属性。</Text>
                </Box>
            </Box>
        </Theme>
    );
};

SwitchAPI.storyName = '组件 API';
