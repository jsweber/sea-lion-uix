import type { Meta, StoryObj } from '@storybook/react';
import * as AlertDialog from './alert-dialog';
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';
import { Theme } from '@sea-lion/react-theme';
import { Text } from '@sea-lion/react-text';

// 更新 AlertDialogProps 类型定义
type AlertDialogProps = React.ComponentProps<typeof AlertDialog.Root> &
  Pick<React.ComponentProps<typeof AlertDialog.Content>,
    'size' | 'align' | 'width' | 'minWidth' | 'maxWidth' |
    'height' | 'minHeight' | 'maxHeight' | 'asChild'
  >;

const meta = {
    title: '反馈/AlertDialog',
    component: AlertDialog.Root,
    tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<AlertDialogProps>;

// AlertDialog 参数配置示例
export const AlertDialogWithProps: Story = {
    name: '基本用法',
    argTypes: {
        asChild: {
            control: 'boolean',
            description: '使用children根元素作为组件元素，并且自身props和children props合并',
        },
        align: {
            control: 'inline-radio',
            options: ['start', 'center'],
            description: '对话框对齐方式："start" | "center"',
        },
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3', '4'],
            description: '对话框尺寸："1" | "2" | "3" | "4"',
        },
        width: {
            control: 'text',
            description: '对话框宽度',
        },
        minWidth: {
            control: 'text',
            description: '对话框最小宽度',
        },
        maxWidth: {
            control: 'text',
            description: '对话框最大宽度',
        },
        height: {
            control: 'text',
            description: '对话框高度',
        },
        minHeight: {
            control: 'text',
            description: '对话框最小高度',
        },
        maxHeight: {
            control: 'text',
            description: '对话框最大高度',
        },
        defaultOpen: {
            control: 'boolean',
            description: '默认是否打开',
        },
        open: {
            control: 'boolean',
            description: '控制对话框的打开状态',
        },
    },
    args: {
        size: '3',
        align: 'center',
        defaultOpen: false,
        open: undefined,
        maxWidth: '600px',
        asChild: false,
    },
    render: (props) => {
        const { size, ...rest } = props;
        return (
            <Theme>
                <div className="story-book-container">
                    <AlertDialog.Root {...rest}>
                        <AlertDialog.Trigger>
                            <Button>
                                <Text size={size}>打开对话框</Text>
                            </Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content {...props}>
                            <AlertDialog.Title>
                                <Text size={size}>确认操作</Text>
                            </AlertDialog.Title>
                            <AlertDialog.Description>
                                <Text size={size}>这是一个可配置的警告对话框示例。您可以通过控制面板调整各种参数。</Text>
                            </AlertDialog.Description>
                            <Flex gap="3" mt="4" justify="end">
                                <AlertDialog.Cancel>
                                    <Button variant="soft" color="gray">
                                        <Text size={size}>取消</Text>
                                    </Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button>
                                        <Text size={size}>确认</Text>
                                    </Button>
                                </AlertDialog.Action>
                            </Flex>
                        </AlertDialog.Content>
                    </AlertDialog.Root>
                </div>
            </Theme>
        );
    },
};

// 不同尺寸示例
export const AlertDialogSizes: Story = {
    name: '对话框尺寸',
    render: () => (
        <Theme>
            <Flex gap="4">
                {['1', '2', '3', '4'].map((size) => (
                    <AlertDialog.Root key={size}>
                        <AlertDialog.Trigger>
                            <Button>
                                <Text>Size {size}</Text>
                            </Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content size={size as any}>
                            <AlertDialog.Title>
                                <Text size="5">尺寸 {size} 的对话框</Text>
                            </AlertDialog.Title>
                            <AlertDialog.Description>
                                <Text size="3">这是一个尺寸为 {size} 的对话框示例。</Text>
                            </AlertDialog.Description>
                            <Flex gap="3" mt="4" justify="end">
                                <AlertDialog.Cancel>
                                    <Button variant="soft" color="gray">
                                        <Text>取消</Text>
                                    </Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button>
                                        <Text>确认</Text>
                                    </Button>
                                </AlertDialog.Action>
                            </Flex>
                        </AlertDialog.Content>
                    </AlertDialog.Root>
                ))}
            </Flex>
        </Theme>
    ),
};

// 不同对齐方式示例
export const AlertDialogAlignments: Story = {
    name: '对话框对齐',
    render: () => (
        <Theme>
            <Flex gap="4">
                {['start', 'center'].map((align) => (
                    <AlertDialog.Root key={align}>
                        <AlertDialog.Trigger>
                            <Button>{align} 对齐</Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content align={align as 'start' | 'center'}>
                            <AlertDialog.Title>{align} 对齐的对话框</AlertDialog.Title>
                            <AlertDialog.Description>
                                这是一个 {align} 对齐的对话框示例。
                            </AlertDialog.Description>
                            <Flex gap="3" mt="4" justify="end">
                                <AlertDialog.Cancel>
                                    <Button variant="soft" color="gray">取消</Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button>确认</Button>
                                </AlertDialog.Action>
                            </Flex>
                        </AlertDialog.Content>
                    </AlertDialog.Root>
                ))}
            </Flex>
        </Theme>
    ),
};

// 不同使用场景示例
export const AlertDialogUseCases: Story = {
    name: '使用场景',
    render: () => (
        <Theme>
            <Flex direction="column" gap="4">
                {/* 删除确认 */}
                <AlertDialog.Root>
                    <AlertDialog.Trigger>
                        <Button color="red">删除数据</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                        <AlertDialog.Title>确认删除？</AlertDialog.Title>
                        <AlertDialog.Description>
                            此操作将永久删除所选数据，且无法恢复。
                        </AlertDialog.Description>
                        <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                                <Button variant="soft" color="gray">取消</Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                                <Button color="red">确认删除</Button>
                            </AlertDialog.Action>
                        </Flex>
                    </AlertDialog.Content>
                </AlertDialog.Root>

                {/* 提交确认 */}
                <AlertDialog.Root>
                    <AlertDialog.Trigger>
                        <Button color="green">提交表单</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                        <AlertDialog.Title>确认提交？</AlertDialog.Title>
                        <AlertDialog.Description>
                            请确认所有信息填写无误后再提交。
                        </AlertDialog.Description>
                        <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                                <Button variant="soft" color="gray">返回修改</Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                                <Button color="green">确认提交</Button>
                            </AlertDialog.Action>
                        </Flex>
                    </AlertDialog.Content>
                </AlertDialog.Root>

                {/* 退出确认 */}
                <AlertDialog.Root>
                    <AlertDialog.Trigger>
                        <Button color="blue">退出系统</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                        <AlertDialog.Title>确认退出？</AlertDialog.Title>
                        <AlertDialog.Description>
                            未保存的更改可能会丢失。
                        </AlertDialog.Description>
                        <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                                <Button variant="soft" color="gray">取消</Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                                <Button color="blue">确认退出</Button>
                            </AlertDialog.Action>
                        </Flex>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </Flex>
        </Theme>
    ),
};
