import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';
import { useState } from 'react';

import * as ContextMenu from '@sea-lion/react-context-menu';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

/**
 * ## 介绍
 *
 * ContextMenu 是在用户右击或长按元素时显示的菜单，提供与该上下文相关的操作选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-context-menu
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-context-menu
 * yarn add @sea-lion/react-context-menu
 * ```
 *
 * ## 何时使用
 *
 * - 需要为用户提供特定元素或区域的附加操作
 * - 需要减少界面复杂度，隐藏不常用的功能
 * - 遵循桌面应用程序的常见交互模式，让用户通过右键访问功能
 * - 需要在移动设备上通过长按提供额外选项
 */
const meta: Meta<typeof ContextMenu.Root> = {
    component: ContextMenu.Root,
    title: '数据展示/ContextMenu',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContextMenu.Root>;

export const ContextMenuBasic: Story = {
    name: '基本用法',
    render: () => (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">基本上下文菜单</div>
                    <Box style={{ height: '200px', textAlign: 'center', padding: '20px' }}>
                        <ContextMenu.Root>
                            <ContextMenu.Trigger>
                                <Box
                                    style={{
                                        backgroundColor: 'var(--gray-a3)',
                                        padding: '40px',
                                        cursor: 'context-menu',
                                        userSelect: 'none',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Text>右击此区域打开上下文菜单</Text>
                                </Box>
                            </ContextMenu.Trigger>
                            <ContextMenu.Content>
                                <ContextMenu.Item>编辑</ContextMenu.Item>
                                <ContextMenu.Item>复制</ContextMenu.Item>
                                <ContextMenu.Item>粘贴</ContextMenu.Item>
                                <ContextMenu.Separator />
                                <ContextMenu.Item>刷新</ContextMenu.Item>
                            </ContextMenu.Content>
                        </ContextMenu.Root>
                    </Box>
                </div>
            </div>
        </Theme>
    ),
};

export const ContextMenuWithVariants = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同变体的上下文菜单</div>
                    <Flex gap="24px" wrap="wrap">
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--gray-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">默认变体 (soft)</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content variant="soft">
                                    <ContextMenu.Label>编辑选项</ContextMenu.Label>
                                    <ContextMenu.Item>剪切</ContextMenu.Item>
                                    <ContextMenu.Item>复制</ContextMenu.Item>
                                    <ContextMenu.Item>粘贴</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--gray-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">Solid 变体</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content variant="solid">
                                    <ContextMenu.Label>编辑选项</ContextMenu.Label>
                                    <ContextMenu.Item>剪切</ContextMenu.Item>
                                    <ContextMenu.Item>复制</ContextMenu.Item>
                                    <ContextMenu.Item>粘贴</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--gray-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">高对比度</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content highContrast>
                                    <ContextMenu.Label>编辑选项</ContextMenu.Label>
                                    <ContextMenu.Item>剪切</ContextMenu.Item>
                                    <ContextMenu.Item>复制</ContextMenu.Item>
                                    <ContextMenu.Item>粘贴</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

ContextMenuWithVariants.storyName = '菜单变体';

export const ContextMenuWithSubmenus = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">带子菜单的上下文菜单</div>
                    <Box style={{ height: '300px', textAlign: 'center', padding: '20px' }}>
                        <ContextMenu.Root>
                            <ContextMenu.Trigger>
                                <Box
                                    style={{
                                        backgroundColor: 'var(--gray-a3)',
                                        padding: '40px',
                                        cursor: 'context-menu',
                                        userSelect: 'none',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Text>右击显示带子菜单的上下文菜单</Text>
                                </Box>
                            </ContextMenu.Trigger>
                            <ContextMenu.Content>
                                <ContextMenu.Item>查看</ContextMenu.Item>
                                <ContextMenu.Item>刷新</ContextMenu.Item>
                                <ContextMenu.Separator />
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>更多选项</ContextMenu.SubTrigger>
                                    <ContextMenu.SubContent>
                                        <ContextMenu.Item>选项 1</ContextMenu.Item>
                                        <ContextMenu.Item>选项 2</ContextMenu.Item>
                                        <ContextMenu.Item>选项 3</ContextMenu.Item>
                                    </ContextMenu.SubContent>
                                </ContextMenu.Sub>
                                <ContextMenu.Separator />
                                <ContextMenu.Item>新建</ContextMenu.Item>
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>排序方式</ContextMenu.SubTrigger>
                                    <ContextMenu.SubContent>
                                        <ContextMenu.RadioGroup value="name">
                                            <ContextMenu.RadioItem value="name">按名称</ContextMenu.RadioItem>
                                            <ContextMenu.RadioItem value="date">按日期</ContextMenu.RadioItem>
                                            <ContextMenu.RadioItem value="size">按大小</ContextMenu.RadioItem>
                                        </ContextMenu.RadioGroup>
                                    </ContextMenu.SubContent>
                                </ContextMenu.Sub>
                            </ContextMenu.Content>
                        </ContextMenu.Root>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

ContextMenuWithSubmenus.storyName = '子菜单';

export const ContextMenuWithCheckboxes = () => {
    const [sortValue, setSortValue] = useState('name');
    const [showToolbar, setShowToolbar] = useState(true);

    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">带复选框的上下文菜单</div>
                    <Box style={{ height: '300px', textAlign: 'center', padding: '20px' }}>
                        <ContextMenu.Root>
                            <ContextMenu.Trigger>
                                <Box
                                    style={{
                                        backgroundColor: 'var(--gray-a3)',
                                        padding: '40px',
                                        cursor: 'context-menu',
                                        userSelect: 'none',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Text>右击显示带复选框的上下文菜单</Text>
                                </Box>
                            </ContextMenu.Trigger>
                            <ContextMenu.Content>
                                <ContextMenu.Label>视图选项</ContextMenu.Label>
                                <ContextMenu.CheckboxItem
                                    checked={showToolbar}
                                    onCheckedChange={setShowToolbar}
                                >
                                    显示工具栏
                                </ContextMenu.CheckboxItem>
                                <ContextMenu.CheckboxItem>显示状态栏</ContextMenu.CheckboxItem>
                                <ContextMenu.CheckboxItem>显示路径栏</ContextMenu.CheckboxItem>
                                <ContextMenu.Separator />
                                <ContextMenu.Group>
                                    <ContextMenu.Label>主题</ContextMenu.Label>
                                    <ContextMenu.RadioGroup value={sortValue} onValueChange={setSortValue}>
                                        <ContextMenu.RadioItem value="light">浅色</ContextMenu.RadioItem>
                                        <ContextMenu.RadioItem value="dark">深色</ContextMenu.RadioItem>
                                        <ContextMenu.RadioItem value="system">跟随系统</ContextMenu.RadioItem>
                                    </ContextMenu.RadioGroup>
                                </ContextMenu.Group>
                            </ContextMenu.Content>
                        </ContextMenu.Root>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

ContextMenuWithCheckboxes.storyName = '复选框和单选框';

export const ContextMenuWithColors = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同颜色的上下文菜单</div>
                    <Flex gap="24px" wrap="wrap">
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--blue-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">蓝色菜单</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content color="blue">
                                    <ContextMenu.Item>选项 1</ContextMenu.Item>
                                    <ContextMenu.Item>选项 2</ContextMenu.Item>
                                    <ContextMenu.Item>选项 3</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--crimson-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">猩红色菜单</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content color="crimson">
                                    <ContextMenu.Item>选项 1</ContextMenu.Item>
                                    <ContextMenu.Item>选项 2</ContextMenu.Item>
                                    <ContextMenu.Item>选项 3</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--green-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">绿色菜单</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content color="green">
                                    <ContextMenu.Item>选项 1</ContextMenu.Item>
                                    <ContextMenu.Item>选项 2</ContextMenu.Item>
                                    <ContextMenu.Item>选项 3</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

ContextMenuWithColors.storyName = '不同颜色的菜单';

export const ContextMenuWithDisabledItems = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">带禁用选项的上下文菜单</div>
                    <Box style={{ height: '200px', textAlign: 'center', padding: '20px' }}>
                        <ContextMenu.Root>
                            <ContextMenu.Trigger>
                                <Box
                                    style={{
                                        backgroundColor: 'var(--gray-a3)',
                                        padding: '40px',
                                        cursor: 'context-menu',
                                        userSelect: 'none',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Text>右击显示带禁用选项的菜单</Text>
                                </Box>
                            </ContextMenu.Trigger>
                            <ContextMenu.Content>
                                <ContextMenu.Item>编辑</ContextMenu.Item>
                                <ContextMenu.Item disabled>删除 (无权限)</ContextMenu.Item>
                                <ContextMenu.Item>复制</ContextMenu.Item>
                                <ContextMenu.Separator />
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>共享</ContextMenu.SubTrigger>
                                    <ContextMenu.SubContent>
                                        <ContextMenu.Item>通过邮件</ContextMenu.Item>
                                        <ContextMenu.Item disabled>通过信息 (不可用)</ContextMenu.Item>
                                        <ContextMenu.Item>创建链接</ContextMenu.Item>
                                    </ContextMenu.SubContent>
                                </ContextMenu.Sub>
                            </ContextMenu.Content>
                        </ContextMenu.Root>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

ContextMenuWithDisabledItems.storyName = '禁用选项';

export const ContextMenuWithSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的上下文菜单</div>
                    <Flex gap="24px" wrap="wrap">
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--gray-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">尺寸 1 (小)</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content size="1">
                                    <ContextMenu.Item>选项 1</ContextMenu.Item>
                                    <ContextMenu.Item>选项 2</ContextMenu.Item>
                                    <ContextMenu.Item>选项 3</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                        <Box style={{ height: '200px' }}>
                            <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                    <Box
                                        style={{
                                            backgroundColor: 'var(--gray-a3)',
                                            padding: '40px',
                                            cursor: 'context-menu',
                                            userSelect: 'none',
                                        }}
                                    >
                                        <Text weight="bold">尺寸 2 (中，高对比度)</Text>
                                    </Box>
                                </ContextMenu.Trigger>
                                <ContextMenu.Content size="2" highContrast>
                                    <ContextMenu.Item>选项 1</ContextMenu.Item>
                                    <ContextMenu.Item>选项 2</ContextMenu.Item>
                                    <ContextMenu.Item>选项 3</ContextMenu.Item>
                                </ContextMenu.Content>
                            </ContextMenu.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

ContextMenuWithSizes.storyName = '不同尺寸';
