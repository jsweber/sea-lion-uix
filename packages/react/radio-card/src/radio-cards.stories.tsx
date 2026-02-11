import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';

import * as RadioCards from '@sea-lion/react-radio-card';
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
    BackpackIcon,
    BookmarkIcon,
} from '@radix-ui/react-icons';

import { RadioCardsPropsComponent } from './radio-cards-props-table';

/**
 * ## 介绍
 *
 * RadioCards 是一个卡片式单选按钮组件，用于在一组选项中选择一个选项，适合需要更大点击区域或需要展示更丰富内容的场景。
 *
 * ## 何时使用
 *
 * - 需要在一组选项中进行单选，且选项有图标或需要更多文本描述
 * - 需要更大的点击区域提高用户体验
 * - 需要视觉上更吸引人的选择界面
 */
const meta: Meta<typeof RadioCards.Root> = {
    component: RadioCards.Root,
    title: '数据录入/RadioCards',
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
            <Text mb="3">最基本的卡片式单选按钮组用法。</Text>
            <Box style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    value={value}
                    onValueChange={setValue}
                >
                    <RadioCards.Item value="option1">选项 1</RadioCards.Item>
                    <RadioCards.Item value="option2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="option3">选项 3</RadioCards.Item>
                    <RadioCards.Item value="option4">选项 4</RadioCards.Item>
                </RadioCards.Root>
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
            <Box style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    value={value}
                    onValueChange={setValue}
                >
                    <RadioCards.Item value="profile">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>个人资料</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="settings">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>设置</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="help">
                        <Flex gap="2" align="center">
                            <QuestionMarkCircledIcon />
                            <Text>帮助</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="advanced">
                        <Flex gap="2" align="center">
                            <MixerHorizontalIcon />
                            <Text>高级选项</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>
            <Text mt="3">选中的值: {value}</Text>
        </Box>
    );
};

export const Sizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同尺寸</Heading>
            <Text mb="3">RadioCards 组件提供了三种尺寸可供选择。</Text>

            <Heading size="2" mb="2">小尺寸 (size="1")</Heading>
            <Box mb="5" style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    size="1"
                    defaultValue="small1"
                >
                    <RadioCards.Item value="small1">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>个人资料</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="small2">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>设置</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="small3">
                        <Flex gap="2" align="center">
                            <QuestionMarkCircledIcon />
                            <Text>帮助</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>

            <Heading size="2" mb="2">默认尺寸 (size="2")</Heading>
            <Box mb="5" style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    size="2"
                    defaultValue="medium1"
                >
                    <RadioCards.Item value="medium1">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>个人资料</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="medium2">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>设置</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="medium3">
                        <Flex gap="2" align="center">
                            <QuestionMarkCircledIcon />
                            <Text>帮助</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>

            <Heading size="2" mb="2">大尺寸 (size="3")</Heading>
            <Box style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    size="3"
                    defaultValue="large1"
                >
                    <RadioCards.Item value="large1">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>个人资料</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="large2">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>设置</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="large3">
                        <Flex gap="2" align="center">
                            <QuestionMarkCircledIcon />
                            <Text>帮助</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>
        </Box>
    );
};

export const Variants = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同变体</Heading>
            <Text mb="3">RadioCards 组件提供了两种变体样式可供选择。</Text>

            <Heading size="2" mb="2">Surface 变体 (variant="surface")</Heading>
            <Box mb="5" style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    variant="surface"
                    defaultValue="surface1"
                >
                    <RadioCards.Item value="surface1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>选项 1</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="surface2">
                        <Flex gap="2" align="center">
                            <LapTimerIcon />
                            <Text>选项 2</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="surface3">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>选项 3</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>

            <Heading size="2" mb="2">Classic 变体 (variant="classic")</Heading>
            <Box style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    variant="classic"
                    defaultValue="classic1"
                >
                    <RadioCards.Item value="classic1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>选项 1</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="classic2">
                        <Flex gap="2" align="center">
                            <LapTimerIcon />
                            <Text>选项 2</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="classic3">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>选项 3</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>
        </Box>
    );
};

export const Colors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同颜色</Heading>
            <Text mb="3">RadioCards 组件可以使用不同的颜色来表达不同的状态或类别。</Text>

            <Box mb="5" style={{ maxWidth: '800px' }}>
                <Heading size="2" mb="2">默认颜色</Heading>
                <RadioCards.Root
                    defaultValue="default"
                    mb="4"
                >
                    <RadioCards.Item value="default">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>默认颜色</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="default2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="default3">选项 3</RadioCards.Item>
                </RadioCards.Root>

                <Heading size="2" mb="2">蓝色</Heading>
                <RadioCards.Root
                    color="blue"
                    defaultValue="blue"
                    mb="4"
                >
                    <RadioCards.Item value="blue">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>蓝色</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="blue2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="blue3">选项 3</RadioCards.Item>
                </RadioCards.Root>

                <Heading size="2" mb="2">绿色</Heading>
                <RadioCards.Root
                    color="green"
                    defaultValue="green"
                    mb="4"
                >
                    <RadioCards.Item value="green">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>绿色</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="green2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="green3">选项 3</RadioCards.Item>
                </RadioCards.Root>

                <Heading size="2" mb="2">红色</Heading>
                <RadioCards.Root
                    color="red"
                    defaultValue="red"
                >
                    <RadioCards.Item value="red">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>红色</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="red2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="red3">选项 3</RadioCards.Item>
                </RadioCards.Root>
            </Box>
        </Box>
    );
};

export const HighContrast = () => {
    return (
        <Box>
            <Heading size="3" mb="4">高对比度</Heading>
            <Text mb="3">RadioCards 组件可以使用高对比度模式，提高视觉可访问性。</Text>

            <Box mb="5" style={{ maxWidth: '800px' }}>
                <Heading size="2" mb="2">普通对比度</Heading>
                <RadioCards.Root
                    defaultValue="normal"
                    mb="4"
                >
                    <RadioCards.Item value="normal">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>普通对比度</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="normal2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="normal3">选项 3</RadioCards.Item>
                </RadioCards.Root>

                <Heading size="2" mb="2">高对比度</Heading>
                <RadioCards.Root
                    highContrast
                    defaultValue="high"
                >
                    <RadioCards.Item value="high">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>高对比度</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="high2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="high3">选项 3</RadioCards.Item>
                </RadioCards.Root>
            </Box>

            <Box mb="5" style={{ maxWidth: '800px' }}>
                <Heading size="2" mb="2">普通对比度（蓝色）</Heading>
                <RadioCards.Root
                    color="blue"
                    defaultValue="normal-blue"
                    mb="4"
                >
                    <RadioCards.Item value="normal-blue">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>蓝色普通对比度</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="normal-blue2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="normal-blue3">选项 3</RadioCards.Item>
                </RadioCards.Root>

                <Heading size="2" mb="2">高对比度（蓝色）</Heading>
                <RadioCards.Root
                    color="blue"
                    highContrast
                    defaultValue="high-blue"
                >
                    <RadioCards.Item value="high-blue">
                        <Flex gap="2" align="center">
                            <CheckIcon />
                            <Text>蓝色高对比度</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="high-blue2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="high-blue3">选项 3</RadioCards.Item>
                </RadioCards.Root>
            </Box>
        </Box>
    );
};

export const CustomLayout = () => {
    return (
        <Box>
            <Heading size="3" mb="4">自定义布局</Heading>
            <Text mb="3">可以通过 columns 和 gap 属性来自定义卡片布局。</Text>

            <Heading size="2" mb="2">两列布局</Heading>
            <Box mb="5" style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    columns="2"
                    gap="3"
                    defaultValue="two-col1"
                >
                    <RadioCards.Item value="two-col1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>选项 1</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="two-col2">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>选项 2</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="two-col3">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>选项 3</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="two-col4">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>选项 4</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>

            <Heading size="2" mb="2">三列布局</Heading>
            <Box mb="5" style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    columns="3"
                    gap="3"
                    defaultValue="three-col1"
                >
                    <RadioCards.Item value="three-col1">
                        <Flex gap="2" align="center">
                            <RocketIcon />
                            <Text>选项 1</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="three-col2">
                        <Flex gap="2" align="center">
                            <GearIcon />
                            <Text>选项 2</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="three-col3">
                        <Flex gap="2" align="center">
                            <PersonIcon />
                            <Text>选项 3</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="three-col4">
                        <Flex gap="2" align="center">
                            <HeartIcon />
                            <Text>选项 4</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="three-col5">
                        <Flex gap="2" align="center">
                            <BackpackIcon />
                            <Text>选项 5</Text>
                        </Flex>
                    </RadioCards.Item>
                    <RadioCards.Item value="three-col6">
                        <Flex gap="2" align="center">
                            <BookmarkIcon />
                            <Text>选项 6</Text>
                        </Flex>
                    </RadioCards.Item>
                </RadioCards.Root>
            </Box>

            <Heading size="2" mb="2">自适应布局</Heading>
            <Box style={{ maxWidth: '800px' }}>
                <RadioCards.Root
                    columns="repeat(auto-fit, minmax(120px, 1fr))"
                    gap="2"
                    defaultValue="auto-fit1"
                >
                    <RadioCards.Item value="auto-fit1">选项 1</RadioCards.Item>
                    <RadioCards.Item value="auto-fit2">选项 2</RadioCards.Item>
                    <RadioCards.Item value="auto-fit3">选项 3</RadioCards.Item>
                    <RadioCards.Item value="auto-fit4">选项 4</RadioCards.Item>
                    <RadioCards.Item value="auto-fit5">选项 5</RadioCards.Item>
                    <RadioCards.Item value="auto-fit6">选项 6</RadioCards.Item>
                </RadioCards.Root>
            </Box>
        </Box>
    );
};

export const UseCases = () => {
    const [theme, setTheme] = useState("light");
    const [paymentMethod, setPaymentMethod] = useState("credit");
    const [planType, setPlanType] = useState("pro");

    return (
        <Theme>
            <Box p="5">
                <Heading size="4" mb="6">实用案例</Heading>
                <Text mb="5">RadioCards 组件在实际应用中的一些示例。</Text>

                <Flex direction="column" gap="7">
                    {/* 主题选择案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">主题设置</Heading>
                        <RadioCards.Root
                            value={theme}
                            onValueChange={setTheme}
                            columns="3"
                            gap="3"
                            size="2"
                        >
                            <RadioCards.Item value="light">
                                <Flex direction="column" align="center" gap="2">
                                    <Box style={{ width: '48px', height: '48px', backgroundColor: 'var(--gray-1)', borderRadius: '50%', border: '1px solid var(--gray-5)' }} />
                                    <Text>浅色模式</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value="dark">
                                <Flex direction="column" align="center" gap="2">
                                    <Box style={{ width: '48px', height: '48px', backgroundColor: 'var(--gray-12)', borderRadius: '50%', border: '1px solid var(--gray-11)' }} />
                                    <Text>深色模式</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value="system">
                                <Flex direction="column" align="center" gap="2">
                                    <Box style={{ width: '48px', height: '48px', backgroundColor: 'var(--gray-3)', borderRadius: '50%', border: '1px solid var(--gray-7)', overflow: 'hidden' }}>
                                        <Box style={{ width: '24px', height: '48px', backgroundColor: 'var(--gray-11)', float: 'right' }} />
                                    </Box>
                                    <Text>跟随系统</Text>
                                </Flex>
                            </RadioCards.Item>
                        </RadioCards.Root>
                        <Text size="2" mt="4" color="gray">主题选择界面</Text>
                    </Box>

                    {/* 支付方式选择案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">选择支付方式</Heading>
                        <RadioCards.Root
                            value={paymentMethod}
                            onValueChange={setPaymentMethod}
                            columns="3"
                            variant="classic"
                            color="blue"
                        >
                            <RadioCards.Item value="credit">
                                <Flex direction="column" align="center" gap="2">
                                    <Box style={{ fontSize: '24px' }}>💳</Box>
                                    <Text>信用卡</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value="alipay">
                                <Flex direction="column" align="center" gap="2">
                                    <Box style={{ fontSize: '24px' }}>📱</Box>
                                    <Text>支付宝</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value="wechat">
                                <Flex direction="column" align="center" gap="2">
                                    <Box style={{ fontSize: '24px' }}>📲</Box>
                                    <Text>微信支付</Text>
                                </Flex>
                            </RadioCards.Item>
                        </RadioCards.Root>
                        <Text size="2" mt="4" color="gray">结账页面的支付方式选择</Text>
                    </Box>

                    {/* 订阅计划选择案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">选择订阅计划</Heading>
                        <RadioCards.Root
                            value={planType}
                            onValueChange={setPlanType}
                            gap="3"
                            columns="3"
                            color="green"
                            size="3"
                        >
                            <RadioCards.Item value="basic">
                                <Flex direction="column" align="center" gap="2" style={{ padding: '8px 0' }}>
                                    <Text weight="bold">基础版</Text>
                                    <Text size="6" weight="bold">¥99</Text>
                                    <Text size="1" color="gray">每年</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value="pro">
                                <Flex direction="column" align="center" gap="2" style={{ padding: '8px 0' }}>
                                    <Text weight="bold">专业版</Text>
                                    <Text size="6" weight="bold">¥199</Text>
                                    <Text size="1" color="gray">每年</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value="enterprise">
                                <Flex direction="column" align="center" gap="2" style={{ padding: '8px 0' }}>
                                    <Text weight="bold">企业版</Text>
                                    <Text size="6" weight="bold">¥599</Text>
                                    <Text size="1" color="gray">每年</Text>
                                </Flex>
                            </RadioCards.Item>
                        </RadioCards.Root>
                        <Text size="2" mt="4" color="gray">订阅页面的计划选择</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const RadioCardsAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">RadioCards API</div>
                <RadioCardsPropsComponent />
            </div>
        </Theme>
    );
};

RadioCardsAPI.storyName = '组件 API';
