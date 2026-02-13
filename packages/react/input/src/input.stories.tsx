import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as Input from '@sea-lion/react-input';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { InputPropsComponent } from './input-props-table';

/**
 * ## 介绍
 *
 * Input 是一个用于收集用户输入的文本字段组件，提供多种样式和变体选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-input
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-input
 * yarn add @sea-lion/react-input
 * ```
 *
 * ## 何时使用
 *
 * - 收集用户文本信息
 * - 表单输入字段
 * - 搜索框
 * - 带有前缀或后缀的输入框
 * - 需要用户输入密码、邮箱等特定格式数据
 */
const meta: Meta<typeof Input> = {
    component: Input.Root as any,
    title: '数据录入/Input',
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
                <Text mb="4">基本的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Input.Root placeholder="请输入内容..." />
                </Flex>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const Types = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同类型的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>文本：</Text>
                        </Box>
                        <Input.Root type="text" placeholder="请输入文本" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>密码：</Text>
                        </Box>
                        <Input.Root type="password" placeholder="请输入密码" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>数字：</Text>
                        </Box>
                        <Input.Root type="number" placeholder="请输入数字" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>邮箱：</Text>
                        </Box>
                        <Input.Root type="email" placeholder="请输入邮箱" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>日期：</Text>
                        </Box>
                        <Input.Root type="date" />
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Types.storyName = '不同类型';

export const Variants = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同变体的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>Surface：</Text>
                        </Box>
                        <Input.Root variant="surface" placeholder="Surface 变体" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>Classic：</Text>
                        </Box>
                        <Input.Root variant="classic" placeholder="Classic 变体" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>Soft：</Text>
                        </Box>
                        <Input.Root variant="soft" placeholder="Soft 变体" />
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Variants.storyName = '不同变体';

export const Sizes = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同尺寸的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>小尺寸：</Text>
                        </Box>
                        <Input.Root size="1" placeholder="小尺寸输入框" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>中等尺寸：</Text>
                        </Box>
                        <Input.Root size="2" placeholder="中等尺寸输入框（默认）" />
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>大尺寸：</Text>
                        </Box>
                        <Input.Root size="3" placeholder="大尺寸输入框" />
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Sizes.storyName = '不同尺寸';

export const Colors = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同颜色的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Input.Root color="gray" placeholder="灰色（默认）" />
                    <Input.Root color="blue" placeholder="蓝色" />
                    <Input.Root color="green" placeholder="绿色" />
                    <Input.Root color="amber" placeholder="琥珀色" />
                    <Input.Root color="red" placeholder="红色" />
                    <Input.Root color="plum" placeholder="梅红色" />
                </Flex>
            </Box>
        </Theme>
    );
};

Colors.storyName = '不同颜色';

export const Radius = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同圆角的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Input.Root radius="none" placeholder="无圆角" />
                    <Input.Root radius="small" placeholder="圆角大小 small" />
                    <Input.Root radius="medium" placeholder="圆角大小 medium" />
                    <Input.Root radius="large" placeholder="圆角大小 large（默认）" />
                    <Input.Root radius="full" placeholder="完全圆角" />
                </Flex>
            </Box>
        </Theme>
    );
};

Radius.storyName = '不同圆角';

export const WithSlots = () => {
    // 模拟图标组件
    const SearchIcon = () => (
        <Box style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </Box>
    );

    const UserIcon = () => (
        <Box style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
            </svg>
        </Box>
    );

    return (
        <Theme>
            <Box p="5">
                <Text mb="4">带插槽的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Input.Root>
                        <Input.Slot side="left">
                            <SearchIcon />
                        </Input.Slot>
                        <Input.Slot side="right">
                            <Text size="2" color="gray">搜索</Text>
                        </Input.Slot>
                    </Input.Root>

                    <Input.Root>
                        <Input.Slot side="left">
                            <UserIcon />
                        </Input.Slot>
                        <Input.Slot side="right">
                            <Text size="2" color="gray">@example.com</Text>
                        </Input.Slot>
                    </Input.Root>

                    <Input.Root>
                        <Input.Slot side="left">￥</Input.Slot>
                        <Input.Slot side="right">.00</Input.Slot>
                    </Input.Root>
                </Flex>
            </Box>
        </Theme>
    );
};

WithSlots.storyName = '带插槽';

export const States = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同状态的输入框：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '320px' }}>
                    <Input.Root defaultValue="默认状态" />
                    <Input.Root defaultValue="禁用状态" disabled />
                    <Input.Root defaultValue="只读状态" readOnly />
                    <Input.Root placeholder="输入框获得焦点时会有高亮边框" />
                </Flex>
            </Box>
        </Theme>
    );
};

States.storyName = '不同状态';

export const UseCases = () => {
    // 模拟图标组件
    const SearchIcon = () => (
        <Box style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </Box>
    );

    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">实用案例</Text>

                <Box mb="6">
                    <Text size="2" weight="bold" mb="2">搜索框</Text>
                    <Box style={{ maxWidth: '400px' }}>
                        <Input.Root placeholder="搜索...">
                            <Input.Slot side="left">
                                <SearchIcon />
                            </Input.Slot>
                        </Input.Root>
                    </Box>
                </Box>

                <Box mb="6">
                    <Text size="2" weight="bold" mb="2">登录表单</Text>
                    <Box style={{ maxWidth: '320px', padding: '16px', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <Flex direction="column" gap="3">
                            <Text>用户名</Text>
                            <Input.Root placeholder="请输入用户名" />
                            <Text mt="2">密码</Text>
                            <Input.Root type="password" placeholder="请输入密码" />
                            <Box mt="3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Box style={{ padding: '8px 16px', background: 'var(--blue-9)', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>
                                    登录
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="2">付款表单</Text>
                    <Box style={{ maxWidth: '400px', padding: '16px', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <Flex direction="column" gap="3">
                            <Text>卡号</Text>
                            <Input.Root placeholder="1234 5678 9012 3456" />

                            <Flex gap="4">
                                <Box style={{ flex: 1 }}>
                                    <Text>有效期</Text>
                                    <Input.Root placeholder="MM/YY" />
                                </Box>
                                <Box style={{ flex: 1 }}>
                                    <Text>安全码</Text>
                                    <Input.Root placeholder="CVC" type="password" />
                                </Box>
                            </Flex>

                            <Text mt="2">金额</Text>
                            <Input.Root>
                                <Input.Slot side="left">￥</Input.Slot>
                            </Input.Root>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

// API 文档
export const InputAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Input props</div>
                <InputPropsComponent />
            </div>
        </Theme>
    );
};

InputAPI.storyName = '组件 API';
