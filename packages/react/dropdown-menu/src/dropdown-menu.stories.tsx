import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as DropdownMenu from '@sea-lion/react-dropdown-menu';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
import { Button } from '@sea-lion/react-button';
import { useState } from 'react';
import { DropdownMenuPropsComponent } from './dropdown-menu-props-table';

/**
 * ## 介绍
 *
 * DropdownMenu 是一个下拉菜单组件，它可以在用户点击触发器后显示一系列选项，支持多级子菜单、复选框、单选框等功能。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-dropdown-menu
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-dropdown-menu
 * yarn add @sea-lion/react-dropdown-menu
 * ```
 *
 * ## 何时使用
 *
 * - 提供一组相关操作的入口
 * - 节省页面空间，隐藏次要功能
 * - 显示与某个控件相关的选项列表
 * - 提供分层级的命令或选项
 * - 实现选择、切换或分组相关功能
 */
const meta: Meta<typeof DropdownMenu.Root> = {
    component: DropdownMenu.Root,
    title: '反馈/DropdownMenu',
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

type Story = StoryObj<typeof DropdownMenu.Root>;

// 基本用法示例
export const DropdownMenuBasic: Story = {
    name: '基本用法',
    render: () => (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">基本下拉菜单</div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button>
                                菜单选项 <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>新建文档</DropdownMenu.Item>
                            <DropdownMenu.Item>打开文件...</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘S">保存</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⇧⌘S">另存为...</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>导出</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </Theme>
    ),
};

// 不同尺寸示例
export const DropdownMenuSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的下拉菜单</div>
                    <Flex gap="4">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button>
                                    尺寸 1 (小)
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content size="1">
                                <DropdownMenu.Item>选项 1</DropdownMenu.Item>
                                <DropdownMenu.Item>选项 2</DropdownMenu.Item>
                                <DropdownMenu.Item>选项 3</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>

                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button>
                                    尺寸 2 (默认)
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content size="2">
                                <DropdownMenu.Item>选项 1</DropdownMenu.Item>
                                <DropdownMenu.Item>选项 2</DropdownMenu.Item>
                                <DropdownMenu.Item>选项 3</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DropdownMenuSizes.storyName = '不同尺寸';

// 带子菜单示例
export const DropdownMenuWithSubmenu = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">带子菜单的下拉菜单</div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button>
                                高级选项 <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>普通操作</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger>
                                    文件操作
                                </DropdownMenu.SubTrigger>
                                <DropdownMenu.SubContent>
                                    <DropdownMenu.Item>新建文件</DropdownMenu.Item>
                                    <DropdownMenu.Item>删除文件</DropdownMenu.Item>
                                    <DropdownMenu.Item>重命名</DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Sub>
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger>
                                    编辑操作
                                </DropdownMenu.SubTrigger>
                                <DropdownMenu.SubContent>
                                    <DropdownMenu.Item shortcut="⌘C">复制</DropdownMenu.Item>
                                    <DropdownMenu.Item shortcut="⌘V">粘贴</DropdownMenu.Item>
                                    <DropdownMenu.Item shortcut="⌘X">剪切</DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Sub>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>退出</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            </div>
        </Theme>
    );
};

DropdownMenuWithSubmenu.storyName = '子菜单';

// 复选框和单选框示例
export const DropdownMenuWithSelections = () => {
    const [checked, setChecked] = useState(true);
    const [fontSize, setFontSize] = useState('medium');

    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">复选框和单选框</div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button>
                                格式选项 <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.CheckboxItem
                                checked={checked}
                                onCheckedChange={setChecked}
                            >
                                粗体
                            </DropdownMenu.CheckboxItem>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Label>字体大小</DropdownMenu.Label>
                            <DropdownMenu.RadioGroup value={fontSize} onValueChange={setFontSize}>
                                <DropdownMenu.RadioItem value="small">
                                    小
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="medium">
                                    中
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="large">
                                    大
                                </DropdownMenu.RadioItem>
                            </DropdownMenu.RadioGroup>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <Box mt="4">
                        <Text>当前选择: 字体大小 = {fontSize}, 粗体 = {checked ? '开启' : '关闭'}</Text>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

DropdownMenuWithSelections.storyName = '复选框和单选框';

// API 文档
export const DropdownMenuAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">DropdownMenu props</div>
                <DropdownMenuPropsComponent />
            </div>
        </Theme>
    );
};

DropdownMenuAPI.storyName = '组件 API';
