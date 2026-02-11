import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as Dialog from '@sea-lion/react-dialog';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
import { Button } from '@sea-lion/react-button';
import { useState, useEffect } from 'react';
import { DialogPropsComponent } from './dialog-props-table';

/**
 * ## 介绍
 *
 * Dialog 是一个模态对话框组件，用于显示需要用户注意或操作的内容，同时阻止与页面其余部分的交互，直到对话框关闭。
 *
 * ## 何时使用
 *
 * - 需要用户确认重要操作
 * - 显示用户需要立即注意的信息
 * - 收集用户输入而不离开当前页面
 * - 显示需要用户决策的警告或错误信息
 * - 展示详细内容而不导航到新页面
 */
const meta: Meta<typeof Dialog.Root> = {
    component: Dialog.Root,
    title: '反馈/Dialog',
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: null, // 使用默认文档页而不是自动生成的文档
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

type Story = StoryObj<typeof Dialog.Root>;

export const DialogBasic: Story = {
    name: '基本用法',
    args: {
        defaultOpen: false,
        children: (
            <>
                <Dialog.Trigger>
                    <Button>打开对话框</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Title>对话框标题</Dialog.Title>
                    <Dialog.Description>
                        这是一个简单的对话框示例。对话框用于显示需要用户注意或操作的内容，
                        同时阻止与页面其余部分的交互，直到对话框关闭。
                    </Dialog.Description>
                    <Flex justify="end" gap="3" mt="4">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">取消</Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button>确认</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </>
        ),
    },
};

export const DialogSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的对话框</div>
                    <Flex gap="3">
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>尺寸 1 (小)</Button>
                            </Dialog.Trigger>
                            <Dialog.Content size="1">
                                <Dialog.Title size="3">小尺寸对话框</Dialog.Title>
                                <Dialog.Description size="1">
                                    这是尺寸为 1 的对话框，适合显示简单的信息或操作。
                                </Dialog.Description>
                                <Flex justify="end" gap="2" mt="3">
                                    <Dialog.Close>
                                        <Button size="1">确定</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>尺寸 2 (中小)</Button>
                            </Dialog.Trigger>
                            <Dialog.Content size="2">
                                <Dialog.Title size="4">中小尺寸对话框</Dialog.Title>
                                <Dialog.Description size="2">
                                    这是尺寸为 2 的对话框，适合一般的信息展示和表单。
                                </Dialog.Description>
                                <Flex justify="end" gap="2" mt="3">
                                    <Dialog.Close>
                                        <Button size="2">确定</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>尺寸 3 (默认)</Button>
                            </Dialog.Trigger>
                            <Dialog.Content size="3">
                                <Dialog.Title size="5">默认尺寸对话框</Dialog.Title>
                                <Dialog.Description size="3">
                                    这是尺寸为 3 的对话框，是默认尺寸，适合大多数场景。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button>确定</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>尺寸 4 (大)</Button>
                            </Dialog.Trigger>
                            <Dialog.Content size="4">
                                <Dialog.Title size="6">大尺寸对话框</Dialog.Title>
                                <Dialog.Description size="4">
                                    这是尺寸为 4 的对话框，适合展示复杂内容或多步骤操作界面。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button size="3">确定</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DialogSizes.storyName = '对话框尺寸';

export const DialogAlignment = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同对齐方式的对话框</div>
                    <Flex gap="4">
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>居中对齐 (默认)</Button>
                            </Dialog.Trigger>
                            <Dialog.Content align="center">
                                <Dialog.Title>居中对话框</Dialog.Title>
                                <Dialog.Description>
                                    这是一个居中对齐的对话框，是默认的对齐方式。
                                    居中对话框在视觉上更平衡，适合大多数场景。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">取消</Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button>确认</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>顶部对齐</Button>
                            </Dialog.Trigger>
                            <Dialog.Content align="start">
                                <Dialog.Title>顶部对齐对话框</Dialog.Title>
                                <Dialog.Description>
                                    这是一个顶部对齐的对话框。顶部对齐对话框适合展示较长的内容，
                                    因为它们不会在用户滚动时将标题移出视图。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">取消</Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button>确认</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DialogAlignment.storyName = '对话框对齐方式';

export const DialogCustomWidth = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">自定义宽度的对话框</div>
                    <Flex gap="4">
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>窄对话框</Button>
                            </Dialog.Trigger>
                            <Dialog.Content maxWidth="400px">
                                <Dialog.Title>窄对话框</Dialog.Title>
                                <Dialog.Description>
                                    这是一个最大宽度为 400px 的窄对话框。窄对话框适合显示简短的信息或简单的表单。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">取消</Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button>确认</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>宽对话框</Button>
                            </Dialog.Trigger>
                            <Dialog.Content maxWidth="800px">
                                <Dialog.Title>宽对话框</Dialog.Title>
                                <Dialog.Description>
                                    这是一个最大宽度为 800px 的宽对话框。宽对话框适合显示更多内容、表格或复杂表单。
                                    但要注意，对话框不应占据屏幕的全部宽度，以保持良好的用户体验。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">取消</Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button>确认</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>固定宽度</Button>
                            </Dialog.Trigger>
                            <Dialog.Content width="500px">
                                <Dialog.Title>固定宽度对话框</Dialog.Title>
                                <Dialog.Description>
                                    这是一个宽度为 500px 的固定宽度对话框。与最大宽度不同，固定宽度对话框在所有屏幕尺寸下都保持相同宽度。
                                    在小屏幕设备上，可能需要水平滚动才能查看全部内容。
                                </Dialog.Description>
                                <Flex justify="end" gap="3" mt="4">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">取消</Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button>确认</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DialogCustomWidth.storyName = '自定义宽度';

export const ControlledDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">受控对话框</div>
                    <Box>
                        <Dialog.Root open={open} onOpenChange={setOpen}>
                            <Dialog.Trigger>
                                <Button>打开受控对话框</Button>
                            </Dialog.Trigger>
                            <Dialog.Content>
                                <Dialog.Title>受控对话框</Dialog.Title>
                                <Dialog.Description>
                                    这是一个受控对话框，其开关状态由 React 状态控制。
                                    这种方式允许您根据应用程序逻辑精确控制对话框的行为。
                                </Dialog.Description>
                                <Flex direction="column" gap="3" mt="4">
                                    <Text>当前状态: {open ? '打开' : '关闭'}</Text>
                                    <Flex justify="end" gap="3">
                                        <Button variant="soft" color="gray" onClick={() => setOpen(false)}>取消</Button>
                                        <Button onClick={() => {
                                            console.log('确认操作');
                                            setOpen(false);
                                        }}
                                        >确认
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

ControlledDialog.storyName = '受控对话框';

export const DialogWithForm = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">带表单的对话框</div>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button>打开表单对话框</Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Title>用户信息</Dialog.Title>
                            <Dialog.Description>
                                请填写以下信息完成注册。所有字段均为必填。
                            </Dialog.Description>

                            <form style={{ marginTop: 'var(--space-4)' }}>
                                <Box mt="4">
                                    <Flex direction="column" gap="3">
                                        <Box>
                                            <Text as="label" size="2" weight="bold" htmlFor="name">
                                                姓名
                                            </Text>
                                            <Box mt="1">
                                                <input
                                                    id="name"
                                                    className="rt-reset rt-TextFieldInput"
                                                    style={{ width: '100%' }}
                                                    placeholder="请输入姓名"
                                                />
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Text as="label" size="2" weight="bold" htmlFor="email">
                                                电子邮件
                                            </Text>
                                            <Box mt="1">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="rt-reset rt-TextFieldInput"
                                                    style={{ width: '100%' }}
                                                    placeholder="your.email@example.com"
                                                />
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Text as="label" size="2" weight="bold" htmlFor="message">
                                                自我介绍
                                            </Text>
                                            <Box mt="1">
                                                <textarea
                                                    id="message"
                                                    className="rt-reset rt-TextAreaInput"
                                                    style={{ width: '100%', minHeight: '80px' }}
                                                    placeholder="请简单介绍一下您自己"
                                                />
                                            </Box>
                                        </Box>

                                        <Flex justify="end" gap="3" mt="2">
                                            <Dialog.Close>
                                                <Button variant="soft" color="gray">取消</Button>
                                            </Dialog.Close>
                                            <Dialog.Close>
                                                <Button>提交</Button>
                                            </Dialog.Close>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </form>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </div>
        </Theme>
    );
};

DialogWithForm.storyName = '带表单的对话框';

export const DialogWithCustomContent = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">自定义内容对话框</div>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button>打开自定义对话框</Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Box style={{
                                position: 'relative',
                                marginTop: '-24px',
                                marginLeft: '-24px',
                                marginRight: '-24px',
                            }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                                    alt="Banner"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderTopLeftRadius: 'var(--radius-4)',
                                        borderTopRightRadius: 'var(--radius-4)',
                                    }}
                                />
                                <Dialog.Close>
                                    <Button
                                        variant="ghost"
                                        style={{
                                            position: 'absolute',
                                            top: '12px',
                                            right: '12px',
                                            borderRadius: '9999px',
                                            width: '28px',
                                            height: '28px',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgba(0,0,0,0.3)',
                                            color: 'white',
                                        }}
                                    >
                                        ✕
                                    </Button>
                                </Dialog.Close>
                            </Box>

                            <Box p="4">
                                <Dialog.Title>订阅我们的通讯</Dialog.Title>
                                <Dialog.Description>
                                    获取最新的产品更新、行业新闻和专家提示直接发送到您的收件箱。
                                </Dialog.Description>

                                <Box mt="4">
                                    <Flex gap="2">
                                        <input
                                            className="rt-reset rt-TextFieldInput"
                                            style={{ flex: 1 }}
                                            placeholder="your.email@example.com"
                                        />
                                        <Dialog.Close>
                                            <Button>订阅</Button>
                                        </Dialog.Close>
                                    </Flex>
                                    <Text size="1" color="gray" mt="2">
                                        我们重视您的隐私，不会与第三方共享您的信息。
                                    </Text>
                                </Box>
                            </Box>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </div>
        </Theme>
    );
};

DialogWithCustomContent.storyName = '自定义内容对话框';

export const DialogAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Dialog props</div>
                <DialogPropsComponent />
            </div>
        </Theme>
    );
};

DialogAPI.storyName = '组件 API';
