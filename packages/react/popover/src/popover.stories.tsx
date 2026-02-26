import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';

import * as Popover from '@sea-lion/react-popover';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { Button } from '@sea-lion/react-button';
import { PopoverPropsComponent } from './popover-props-table';

/**
 * ## 介绍
 *
 * Popover 是一个弹出式组件，用于显示与触发元素相关的临时内容，如附加信息、操作菜单等。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-popover
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-popover
 * yarn add @sea-lion/react-popover
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import * as Popover from '@sea-lion/react-popover';
 * ```
 *
 * ## 何时使用
 *
 * - 需要显示额外内容但不希望跳转页面或打开模态框
 * - 需要与特定元素关联的操作菜单
 * - 需要显示与上下文相关的临时信息
 * - 需要在有限空间内显示更多内容
 */
const meta: Meta<typeof Popover.Root> = {
    title: '反馈/Popover',
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
                <Text mb="4">基本的弹出层组件：</Text>
                <Popover.Root>
                    <Popover.Trigger>
                        <Button>点击显示弹出层</Button>
                    </Popover.Trigger>
                    <Popover.Content>
                        <Box p="2">
                            <Heading size="3" mb="2">弹出层标题</Heading>
                            <Text mb="4">这是弹出层的内容。弹出层通常用于显示与触发元素相关的附加信息或操作。</Text>
                            <Popover.Close>
                                <Button size="1">关闭</Button>
                            </Popover.Close>
                        </Box>
                    </Popover.Content>
                </Popover.Root>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const Sizes = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">尺寸</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="1"</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>尺寸 1</Button>
                            </Popover.Trigger>
                            <Popover.Content size="1">
                                <Heading size="2" mb="1">尺寸 1</Heading>
                                <Text size="1">最小的弹出层尺寸，适合简短的提示或操作。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="2"</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>尺寸 2 (默认)</Button>
                            </Popover.Trigger>
                            <Popover.Content size="2">
                                <Heading size="3" mb="2">尺寸 2</Heading>
                                <Text size="2">默认尺寸，适合大多数场景。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="3"</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>尺寸 3</Button>
                            </Popover.Trigger>
                            <Popover.Content size="3">
                                <Heading size="4" mb="2">尺寸 3</Heading>
                                <Text size="2">中等大小的弹出层，适合包含更多内容或详细信息。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="4"</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>尺寸 4</Button>
                            </Popover.Trigger>
                            <Popover.Content size="4">
                                <Heading size="5" mb="3">尺寸 4</Heading>
                                <Text size="3">最大的弹出层尺寸，适合显示详细内容或复杂操作。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Sizes.storyName = '尺寸';

export const WidthControl = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">宽度控制</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>width</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>固定宽度</Button>
                            </Popover.Trigger>
                            <Popover.Content width="300px">
                                <Text>这个弹出层的宽度固定为 300px。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>minWidth</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>最小宽度</Button>
                            </Popover.Trigger>
                            <Popover.Content minWidth="200px">
                                <Text>这个弹出层的最小宽度为 200px，可以根据内容扩展。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>maxWidth</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>最大宽度</Button>
                            </Popover.Trigger>
                            <Popover.Content maxWidth="250px">
                                <Text>这个弹出层的最大宽度为 250px，超出宽度的内容会自动换行。默认的 maxWidth 为 480px。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

WidthControl.storyName = '宽度控制';

export const HeightControl = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">高度控制</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>height</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>固定高度</Button>
                            </Popover.Trigger>
                            <Popover.Content height="100px" width="250px">
                                <Box style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>这个弹出层的高度固定为 100px。</Text>
                                </Box>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>minHeight</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>最小高度</Button>
                            </Popover.Trigger>
                            <Popover.Content minHeight="80px" width="250px">
                                <Text>这个弹出层的最小高度为 80px，可以根据内容扩展。</Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>maxHeight</Text>
                        </Box>
                        <Popover.Root>
                            <Popover.Trigger>
                                <Button>最大高度</Button>
                            </Popover.Trigger>
                            <Popover.Content maxHeight="100px" width="250px" style={{ overflow: 'auto' }}>
                                <Text>
                                    这个弹出层的最大高度为 100px，超出高度的内容会显示滚动条。
                                    <br /><br />
                                    这是额外的内容，用于演示滚动效果。
                                    <br /><br />
                                    这是更多的内容，继续演示滚动效果。
                                    <br /><br />
                                    这是最后一段内容。
                                </Text>
                            </Popover.Content>
                        </Popover.Root>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

HeightControl.storyName = '高度控制';

export const ControlledPopover = () => {
    const [open, setOpen] = useState(false);

    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">受控模式</Text>
                <Flex direction="column" gap="4">
                    <Text>当前状态：{open ? '打开' : '关闭'}</Text>

                    <Flex gap="3">
                        <Button onClick={() => setOpen(true)}>打开弹出层</Button>
                        <Button onClick={() => setOpen(false)} variant="soft">关闭弹出层</Button>
                    </Flex>

                    <Box mt="3">
                        <Popover.Root open={open} onOpenChange={setOpen}>
                            <Popover.Trigger>
                                <Button>触发元素</Button>
                            </Popover.Trigger>
                            <Popover.Content>
                                <Box p="2">
                                    <Heading size="3" mb="2">受控弹出层</Heading>
                                    <Text mb="4">这个弹出层的开关状态由外部 state 控制。</Text>
                                    <Popover.Close>
                                        <Button size="1">关闭</Button>
                                    </Popover.Close>
                                </Box>
                            </Popover.Content>
                        </Popover.Root>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

ControlledPopover.storyName = '受控模式';

export const CustomClose = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">自定义关闭按钮</Text>
                <Popover.Root>
                    <Popover.Trigger>
                        <Button>打开弹出层</Button>
                    </Popover.Trigger>
                    <Popover.Content>
                        <Box p="3">
                            <Flex justify="between" align="center" mb="3">
                                <Heading size="3">自定义标题</Heading>
                                <Popover.Close>
                                    <Button variant="ghost" size="1">X</Button>
                                </Popover.Close>
                            </Flex>
                            <Text mb="3">这个示例展示了如何自定义关闭按钮的位置和样式。</Text>
                            <Flex justify="end" gap="2">
                                <Popover.Close>
                                    <Button variant="soft" size="1">取消</Button>
                                </Popover.Close>
                                <Popover.Close>
                                    <Button size="1">确认</Button>
                                </Popover.Close>
                            </Flex>
                        </Box>
                    </Popover.Content>
                </Popover.Root>
            </Box>
        </Theme>
    );
};

CustomClose.storyName = '自定义关闭';

export const WithAnchor = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">使用锚点</Text>
                <Box style={{ width: '300px', height: '200px', position: 'relative', border: '1px dashed var(--gray-6)', padding: '20px' }}>
                    <Text mb="4">这是一个容器，弹出层将相对于锚点定位。</Text>

                    <Popover.Root>
                        <Popover.Anchor style={{ position: 'absolute', top: '50%', left: '50%', width: '10px', height: '10px', background: 'var(--blue-9)', borderRadius: '50%' }} />
                        <Popover.Trigger>
                            <Button style={{ position: 'absolute', bottom: '20px', left: '20px' }}>点击显示</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Box p="3">
                                <Text>这个弹出层相对于蓝点（锚点）定位，而不是相对于触发按钮。</Text>
                            </Box>
                        </Popover.Content>
                    </Popover.Root>
                </Box>
            </Box>
        </Theme>
    );
};

WithAnchor.storyName = '使用锚点';

export const Modal = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">模态弹出层</Text>
                <Popover.Root modal>
                    <Popover.Trigger>
                        <Button>打开模态弹出层</Button>
                    </Popover.Trigger>
                    <Popover.Content>
                        <Box p="3">
                            <Heading size="3" mb="2">模态弹出层</Heading>
                            <Text mb="4">
                                此弹出层为模态模式，这意味着它会阻止与页面上其他元素的交互，直到弹出层关闭。
                                <br /><br />
                                在普通模式下，点击弹出层外部会自动关闭弹出层，而用户仍然可以与页面其他部分交互。
                            </Text>
                            <Popover.Close>
                                <Button size="1">关闭</Button>
                            </Popover.Close>
                        </Box>
                    </Popover.Content>
                </Popover.Root>
            </Box>
        </Theme>
    );
};

Modal.storyName = '模态模式';

export const UseCases = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">实用案例</Text>
                <Flex direction="column" gap="6">
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">个人资料卡片</Heading>
                        <Flex align="center" gap="3">
                            <Box style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--blue-5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                            >
                                JD
                            </Box>
                            <Popover.Root>
                                <Popover.Trigger>
                                    <Button variant="ghost">张三</Button>
                                </Popover.Trigger>
                                <Popover.Content>
                                    <Box p="3">
                                        <Flex gap="3" mb="3">
                                            <Box style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--blue-5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '1.5rem',
                                            }}
                                            >
                                                JD
                                            </Box>
                                            <Box>
                                                <Heading size="3" mb="1">张三</Heading>
                                                <Text size="1" color="gray">产品经理</Text>
                                            </Box>
                                        </Flex>
                                        <Text size="2" mb="3">负责公司主要产品的规划和设计，与开发团队紧密协作。</Text>
                                        <Flex gap="2">
                                            <Button size="1">发送消息</Button>
                                            <Button size="1" variant="soft">查看详情</Button>
                                        </Flex>
                                    </Box>
                                </Popover.Content>
                            </Popover.Root>
                        </Flex>
                        <Text size="2" mt="4" color="gray">鼠标悬停或点击用户名时显示详细信息</Text>
                    </Box>

                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">帮助提示</Heading>
                        <Flex align="center" gap="3">
                            <Text>每月账单金额</Text>
                            <Popover.Root>
                                <Popover.Trigger>
                                    <Button variant="ghost" size="1" style={{ padding: '0 6px', borderRadius: '50%' }}>?</Button>
                                </Popover.Trigger>
                                <Popover.Content size="1">
                                    <Box p="2">
                                        <Text size="1">每月账单金额是根据您的订阅计划和额外使用情况计算的总费用。</Text>
                                    </Box>
                                </Popover.Content>
                            </Popover.Root>
                            <Box style={{ width: '200px', height: '35px', border: '1px solid var(--gray-5)', borderRadius: '4px', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                                ¥99.00
                            </Box>
                        </Flex>
                        <Text size="2" mt="4" color="gray">点击问号图标显示帮助信息</Text>
                    </Box>

                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">操作菜单</Heading>
                        <Flex align="center" gap="3">
                            <Text>文档.docx</Text>
                            <Popover.Root>
                                <Popover.Trigger>
                                    <Button size="1">操作</Button>
                                </Popover.Trigger>
                                <Popover.Content size="1">
                                    <Box style={{ padding: '5px 0' }}>
                                        <Popover.Close>
                                            <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start', padding: '8px 12px' }}>
                                                查看
                                            </Button>
                                        </Popover.Close>
                                        <Popover.Close>
                                            <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start', padding: '8px 12px' }}>
                                                编辑
                                            </Button>
                                        </Popover.Close>
                                        <Popover.Close>
                                            <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start', padding: '8px 12px' }}>
                                                下载
                                            </Button>
                                        </Popover.Close>
                                        <Popover.Close>
                                            <Button variant="ghost" style={{ width: '100%', justifyContent: 'flex-start', padding: '8px 12px', color: 'var(--red-9)' }}>
                                                删除
                                            </Button>
                                        </Popover.Close>
                                    </Box>
                                </Popover.Content>
                            </Popover.Root>
                        </Flex>
                        <Text size="2" mt="4" color="gray">点击操作按钮显示可执行的操作列表</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const PopoverAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Popover API</div>
                <PopoverPropsComponent />
            </div>
        </Theme>
    );
};

PopoverAPI.storyName = '组件 API';
