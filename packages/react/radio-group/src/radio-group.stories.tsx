import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';

import * as RadioGroup from '@sea-lion/react-radio-group';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';

// 导入图标
import {
    CheckIcon,
    QuestionMarkCircledIcon,
    MixerHorizontalIcon,
    PersonIcon,
    GearIcon,
    RocketIcon,
    LapTimerIcon,
    HeartIcon,
} from '@radix-ui/react-icons';

import { RadioGroupPropsComponent } from './radio-group-props-table';

/**
 * ## 介绍
 *
 * RadioGroup 是一个单选按钮组组件，用于在一组选项中选择一个选项。
 *
 * ## 何时使用
 *
 * - 需要在一组互斥选项中选择一个选项时
 * - 选项数量较少且可以同时显示在界面上
 * - 需要用户做出明确选择时
 */
const meta: Meta<typeof RadioGroup.Root> = {
    component: RadioGroup.Root,
    title: '数据录入/RadioGroup',
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
    const [value, setValue] = useState("option1");

    return (
        <Box>
            <Heading size="3" mb="4">基础用法</Heading>
            <Text mb="3">最基本的单选按钮组用法。</Text>
            <Box style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    value={value}
                    onValueChange={setValue}
                >
                    <RadioGroup.Item value="option1">选项 1</RadioGroup.Item>
                    <RadioGroup.Item value="option2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="option3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
            <Text mt="3">选中的值: {value}</Text>
        </Box>
    );
};

export const WithIcons = () => {
    const [value, setValue] = useState("settings");

    return (
        <Box>
            <Heading size="3" mb="4">带图标的选项</Heading>
            <Text mb="3">使用图标增强视觉识别度。</Text>
            <Box style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    value={value}
                    onValueChange={setValue}
                >
                    <RadioGroup.Item value="profile">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>个人资料</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="settings">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>设置</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="help">
                        <Flex gap="2" align="center">
                            <QuestionMarkCircledIcon />
                            <Text>帮助</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="advanced">
                        <Flex gap="2" align="center">
                            <MixerHorizontalIcon />
                            <Text>高级选项</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
            <Text mt="3">选中的值: {value}</Text>
        </Box>
    );
};

export const Sizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同尺寸</Heading>
            <Text mb="3">RadioGroup 组件提供了三种尺寸可供选择。</Text>

            <Heading size="2" mb="2">小尺寸 (size="1")</Heading>
            <Box mb="5" style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    size="1"
                    defaultValue="small1"
                >
                    <RadioGroup.Item value="small1">
                        <Flex gap="2" align="center">
                            <Text>小尺寸选项 1</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="small2">
                        <Flex gap="2" align="center">
                            <Text>小尺寸选项 2</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="small3">
                        <Flex gap="2" align="center">
                            <Text>小尺寸选项 3</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Heading size="2" mb="2">默认尺寸 (size="2")</Heading>
            <Box mb="5" style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    size="2"
                    defaultValue="medium1"
                >
                    <RadioGroup.Item value="medium1">
                        <Flex gap="2" align="center">
                            <Text>默认尺寸选项 1</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="medium2">
                        <Flex gap="2" align="center">
                            <Text>默认尺寸选项 2</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="medium3">
                        <Flex gap="2" align="center">
                            <Text>默认尺寸选项 3</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Heading size="2" mb="2">大尺寸 (size="3")</Heading>
            <Box style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    size="3"
                    defaultValue="large1"
                >
                    <RadioGroup.Item value="large1">
                        <Flex gap="2" align="center">
                            <Text>大尺寸选项 1</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="large2">
                        <Flex gap="2" align="center">
                            <Text>大尺寸选项 2</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="large3">
                        <Flex gap="2" align="center">
                            <Text>大尺寸选项 3</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
        </Box>
    );
};

export const Variants = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同变体</Heading>
            <Text mb="3">RadioGroup 组件提供了三种变体样式可供选择。</Text>

            <Heading size="2" mb="2">Surface 变体 (variant="surface")</Heading>
            <Box mb="5" style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    variant="surface"
                    defaultValue="surface1"
                >
                    <RadioGroup.Item value="surface1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>Surface 变体选项 1</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="surface2">
                        <Flex gap="2" align="center">
                            <LapTimerIcon />
                            <Text>Surface 变体选项 2</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="surface3">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>Surface 变体选项 3</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Heading size="2" mb="2">Classic 变体 (variant="classic")</Heading>
            <Box mb="5" style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    variant="classic"
                    defaultValue="classic1"
                >
                    <RadioGroup.Item value="classic1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>Classic 变体选项 1</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="classic2">
                        <Flex gap="2" align="center">
                            <LapTimerIcon />
                            <Text>Classic 变体选项 2</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="classic3">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>Classic 变体选项 3</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Heading size="2" mb="2">Soft 变体 (variant="soft")</Heading>
            <Box style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    variant="soft"
                    defaultValue="soft1"
                >
                    <RadioGroup.Item value="soft1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>Soft 变体选项 1</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="soft2">
                        <Flex gap="2" align="center">
                            <LapTimerIcon />
                            <Text>Soft 变体选项 2</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="soft3">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>Soft 变体选项 3</Text>
                        </Flex>
                    </RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
        </Box>
    );
};

export const Colors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同颜色</Heading>
            <Text mb="3">RadioGroup 组件可以使用不同的颜色来表达不同的状态或类别。</Text>

            <Box mb="5" style={{ maxWidth: '500px' }}>
                <Heading size="2" mb="2">默认颜色</Heading>
                <RadioGroup.Root
                    defaultValue="default"
                    mb="4"
                >
                    <RadioGroup.Item value="default">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>默认颜色</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="default2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="default3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>

                <Heading size="2" mb="2">蓝色</Heading>
                <RadioGroup.Root
                    color="blue"
                    defaultValue="blue"
                    mb="4"
                >
                    <RadioGroup.Item value="blue">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>蓝色</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="blue2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="blue3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>

                <Heading size="2" mb="2">绿色</Heading>
                <RadioGroup.Root
                    color="green"
                    defaultValue="green"
                    mb="4"
                >
                    <RadioGroup.Item value="green">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>绿色</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="green2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="green3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>

                <Heading size="2" mb="2">红色</Heading>
                <RadioGroup.Root
                    color="red"
                    defaultValue="red"
                >
                    <RadioGroup.Item value="red">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>红色</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="red2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="red3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
        </Box>
    );
};

export const HighContrast = () => {
    return (
        <Box>
            <Heading size="3" mb="4">高对比度</Heading>
            <Text mb="3">RadioGroup 组件可以使用高对比度模式，提高视觉可访问性。</Text>

            <Box mb="5" style={{ maxWidth: '500px' }}>
                <Heading size="2" mb="2">普通对比度</Heading>
                <RadioGroup.Root
                    defaultValue="normal"
                    mb="4"
                >
                    <RadioGroup.Item value="normal">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>普通对比度</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="normal2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="normal3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>

                <Heading size="2" mb="2">高对比度</Heading>
                <RadioGroup.Root
                    highContrast
                    defaultValue="high"
                >
                    <RadioGroup.Item value="high">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>高对比度</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="high2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="high3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Box mb="5" style={{ maxWidth: '500px' }}>
                <Heading size="2" mb="2">普通对比度（蓝色）</Heading>
                <RadioGroup.Root
                    color="blue"
                    defaultValue="normal-blue"
                    mb="4"
                >
                    <RadioGroup.Item value="normal-blue">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>蓝色普通对比度</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="normal-blue2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="normal-blue3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>

                <Heading size="2" mb="2">高对比度（蓝色）</Heading>
                <RadioGroup.Root
                    color="blue"
                    highContrast
                    defaultValue="high-blue"
                >
                    <RadioGroup.Item value="high-blue">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>蓝色高对比度</Text>
                        </Flex>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="high-blue2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="high-blue3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
        </Box>
    );
};

export const Disabled = () => {
    return (
        <Box>
            <Heading size="3" mb="4">禁用状态</Heading>
            <Text mb="3">RadioGroup 组件可以禁用整个组或单个选项。</Text>

            <Heading size="2" mb="2">禁用单个选项</Heading>
            <Box mb="5" style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    defaultValue="enabled1"
                >
                    <RadioGroup.Item value="enabled1">启用的选项 1</RadioGroup.Item>
                    <RadioGroup.Item value="disabled1" disabled>禁用的选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="enabled2">启用的选项 3</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Heading size="2" mb="2">禁用整个组</Heading>
            <Box style={{ maxWidth: '500px' }}>
                <RadioGroup.Root
                    disabled
                    defaultValue="group1"
                >
                    <RadioGroup.Item value="group1">选项 1（整组禁用）</RadioGroup.Item>
                    <RadioGroup.Item value="group2">选项 2（整组禁用）</RadioGroup.Item>
                    <RadioGroup.Item value="group3">选项 3（整组禁用）</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
        </Box>
    );
};

export const CustomLayout = () => {
    return (
        <Box>
            <Heading size="3" mb="4">自定义布局</Heading>
            <Text mb="3">RadioGroup 组件默认是垂直排列的，但可以通过样式自定义布局。</Text>

            <Heading size="2" mb="2">水平布局</Heading>
            <Box mb="5" style={{ maxWidth: '800px' }}>
                <RadioGroup.Root
                    defaultValue="horizontal1"
                    style={{ flexDirection: 'row', gap: '16px' }}
                >
                    <RadioGroup.Item value="horizontal1">选项 1</RadioGroup.Item>
                    <RadioGroup.Item value="horizontal2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="horizontal3">选项 3</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>

            <Heading size="2" mb="2">网格布局</Heading>
            <Box style={{ maxWidth: '800px' }}>
                <RadioGroup.Root
                    defaultValue="grid1"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                    }}
                >
                    <RadioGroup.Item value="grid1">选项 1</RadioGroup.Item>
                    <RadioGroup.Item value="grid2">选项 2</RadioGroup.Item>
                    <RadioGroup.Item value="grid3">选项 3</RadioGroup.Item>
                    <RadioGroup.Item value="grid4">选项 4</RadioGroup.Item>
                    <RadioGroup.Item value="grid5">选项 5</RadioGroup.Item>
                    <RadioGroup.Item value="grid6">选项 6</RadioGroup.Item>
                </RadioGroup.Root>
            </Box>
        </Box>
    );
};

export const UseCases = () => {
    const [gender, setGender] = useState("male");
    const [notification, setNotification] = useState("all");
    const [payMethod, setPayMethod] = useState("wechat");

    return (
        <Theme>
            <Box p="5">
                <Heading size="4" mb="6">实用案例</Heading>
                <Text mb="5">RadioGroup 组件在实际应用中的一些示例。</Text>

                <Flex direction="column" gap="7">
                    {/* 性别选择案例 */}
                    <Box style={{ maxWidth: '600px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">性别选择</Heading>
                        <RadioGroup.Root
                            value={gender}
                            onValueChange={setGender}
                            style={{ flexDirection: 'row', gap: '12px' }}
                        >
                            <RadioGroup.Item value="male">男</RadioGroup.Item>
                            <RadioGroup.Item value="female">女</RadioGroup.Item>
                            <RadioGroup.Item value="other">其他</RadioGroup.Item>
                        </RadioGroup.Root>
                        <Text size="2" mt="4" color="gray">用户注册表单中的性别选择</Text>
                    </Box>

                    {/* 通知设置案例 */}
                    <Box style={{ maxWidth: '600px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">通知设置</Heading>
                        <RadioGroup.Root
                            value={notification}
                            onValueChange={setNotification}
                            variant="classic"
                            color="blue"
                        >
                            <RadioGroup.Item value="all">
                                <Flex direction="column">
                                    <Text weight="bold">接收所有通知</Text>
                                    <Text size="1" color="gray">接收应用内和邮件的所有通知</Text>
                                </Flex>
                            </RadioGroup.Item>
                            <RadioGroup.Item value="important">
                                <Flex direction="column">
                                    <Text weight="bold">仅接收重要通知</Text>
                                    <Text size="1" color="gray">只接收重要的应用内和邮件通知</Text>
                                </Flex>
                            </RadioGroup.Item>
                            <RadioGroup.Item value="none">
                                <Flex direction="column">
                                    <Text weight="bold">关闭所有通知</Text>
                                    <Text size="1" color="gray">不接收任何通知</Text>
                                </Flex>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                        <Text size="2" mt="4" color="gray">设置页面中的通知偏好设置</Text>
                    </Box>

                    {/* 支付方式选择案例 */}
                    <Box style={{ maxWidth: '600px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">选择支付方式</Heading>
                        <RadioGroup.Root
                            value={payMethod}
                            onValueChange={setPayMethod}
                            variant="soft"
                            color="green"
                            size="3"
                        >
                            <RadioGroup.Item value="alipay">
                                <Flex gap="2" align="center">
                                    <Box style={{ fontSize: '16px' }}>💰</Box>
                                    <Text>支付宝</Text>
                                </Flex>
                            </RadioGroup.Item>
                            <RadioGroup.Item value="wechat">
                                <Flex gap="2" align="center">
                                    <Box style={{ fontSize: '16px' }}>📱</Box>
                                    <Text>微信支付</Text>
                                </Flex>
                            </RadioGroup.Item>
                            <RadioGroup.Item value="card">
                                <Flex gap="2" align="center">
                                    <Box style={{ fontSize: '16px' }}>💳</Box>
                                    <Text>银行卡</Text>
                                </Flex>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                        <Text size="2" mt="4" color="gray">结账页面的支付方式选择</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const RadioGroupAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">RadioGroup API</div>
                <RadioGroupPropsComponent />
            </div>
        </Theme>
    );
};

RadioGroupAPI.storyName = '组件 API';
