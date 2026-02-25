import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';
import * as RadixIcons from '@radix-ui/react-icons';

import { IconButton } from '@sea-lion/react-icon-button';
import { IconFont } from '@sea-lion/react-oss-icon';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { IconButtonPropsComponent } from './icon-button-props-table';

const {
    PlusIcon,
    Cross1Icon,
    HeartFilledIcon,
    MagnifyingGlassIcon,
    TrashIcon,
    StarFilledIcon,
    GearIcon,
    BellIcon,
    EnvelopeClosedIcon,
    CheckIcon,
    MoonIcon,
    SunIcon,
    DownloadIcon,
    ClipboardIcon,
    ScissorsIcon,
    ClipboardCopyIcon,
    EyeOpenIcon,
    EyeNoneIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    Share1Icon,
    Pencil1Icon,
} = RadixIcons;

/**
 * ## 介绍
 *
 * IconButton 是一个用于展示图标的按钮组件，提供多种尺寸和样式选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-icon-button
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-icon-button
 * yarn add @sea-lion/react-icon-button
 * ```
 *
 * ## 何时使用
 *
 * - 需要节省空间但仍需提供交互功能时
 * - 工具栏、导航栏中的图标按钮
 * - 表单或列表项中的操作按钮
 * - 需要强调图标而非文字的场景
 */
const meta: Meta<typeof IconButton> = {
    component: IconButton,
    title: '通用/IconButton',
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
                <Text mb="4">基本的图标按钮：</Text>
                <Flex gap="4" align="center">
                    <IconButton aria-label="添加">
                        <PlusIcon />
                    </IconButton>
                    <IconButton aria-label="关闭">
                        <Cross1Icon />
                    </IconButton>
                    <IconButton aria-label="喜欢">
                        <HeartFilledIcon />
                    </IconButton>
                    <IconButton aria-label="搜索">
                        <MagnifyingGlassIcon />
                    </IconButton>
                </Flex>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const WithOssIcon = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">配合 OssIcon (IconFont) 使用 iconfont 图标：</Text>
                <Flex gap="4" align="center" wrap="wrap">
                    <IconButton aria-label="刷新">
                        <IconFont icon="icon-RefreshOutlined" />
                    </IconButton>
                    <IconButton variant="solid" color="blue" aria-label="喜欢">
                        <IconFont icon="icon-CompassionFilled" />
                    </IconButton>
                    <IconButton variant="outline" aria-label="设置">
                        <IconFont icon="icon-SettingsOutlined" />
                    </IconButton>
                    <IconButton variant="soft" color="green" aria-label="正确">
                        <IconFont icon="icon-CorrectOutlined" />
                    </IconButton>
                    <IconButton variant="ghost" aria-label="搜索">
                        <IconFont icon="icon-SearchOutlined" />
                    </IconButton>
                </Flex>
                <Text mt="4" size="1" color="gray">
                    需安装 @sea-lion/react-oss-icon；IconFont 未传 color/fontSize 时会继承按钮颜色与尺寸。
                </Text>
            </Box>
        </Theme>
    );
};

WithOssIcon.storyName = '配合 OssIcon';

export const Variants = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">不同变体的图标按钮：</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>实心：</Text>
                        </Box>
                        <IconButton variant="solid" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>轮廓：</Text>
                        </Box>
                        <IconButton variant="outline" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>软：</Text>
                        </Box>
                        <IconButton variant="soft" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>幽灵：</Text>
                        </Box>
                        <IconButton variant="ghost" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
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
                <Text mb="4">不同尺寸的图标按钮：</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>小尺寸：</Text>
                        </Box>
                        <IconButton size="1" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>中等尺寸：</Text>
                        </Box>
                        <IconButton size="2" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>大尺寸：</Text>
                        </Box>
                        <IconButton size="3" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '80px' }}>
                            <Text>特大尺寸：</Text>
                        </Box>
                        <IconButton size="4" aria-label="添加">
                            <PlusIcon />
                        </IconButton>
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
                <Text mb="4">不同颜色的图标按钮：</Text>
                <Flex direction="column" gap="4" style={{ maxWidth: '480px' }}>
                    <Flex gap="4" wrap="wrap">
                        <IconButton color="gray" aria-label="灰色">
                            <GearIcon />
                        </IconButton>
                        <IconButton color="blue" aria-label="蓝色">
                            <GearIcon />
                        </IconButton>
                        <IconButton color="green" aria-label="绿色">
                            <GearIcon />
                        </IconButton>
                        <IconButton color="red" aria-label="红色">
                            <GearIcon />
                        </IconButton>
                        <IconButton color="amber" aria-label="琥珀色">
                            <GearIcon />
                        </IconButton>
                        <IconButton color="purple" aria-label="紫色">
                            <GearIcon />
                        </IconButton>
                    </Flex>

                    <Text mt="2">软变体：</Text>
                    <Flex gap="4" wrap="wrap">
                        <IconButton variant="soft" color="gray" aria-label="灰色">
                            <BellIcon />
                        </IconButton>
                        <IconButton variant="soft" color="blue" aria-label="蓝色">
                            <BellIcon />
                        </IconButton>
                        <IconButton variant="soft" color="green" aria-label="绿色">
                            <BellIcon />
                        </IconButton>
                        <IconButton variant="soft" color="red" aria-label="红色">
                            <BellIcon />
                        </IconButton>
                        <IconButton variant="soft" color="amber" aria-label="琥珀色">
                            <BellIcon />
                        </IconButton>
                        <IconButton variant="soft" color="purple" aria-label="紫色">
                            <BellIcon />
                        </IconButton>
                    </Flex>

                    <Text mt="2">轮廓变体：</Text>
                    <Flex gap="4" wrap="wrap">
                        <IconButton variant="outline" color="gray" aria-label="灰色">
                            <EnvelopeClosedIcon />
                        </IconButton>
                        <IconButton variant="outline" color="blue" aria-label="蓝色">
                            <EnvelopeClosedIcon />
                        </IconButton>
                        <IconButton variant="outline" color="green" aria-label="绿色">
                            <EnvelopeClosedIcon />
                        </IconButton>
                        <IconButton variant="outline" color="red" aria-label="红色">
                            <EnvelopeClosedIcon />
                        </IconButton>
                        <IconButton variant="outline" color="amber" aria-label="琥珀色">
                            <EnvelopeClosedIcon />
                        </IconButton>
                        <IconButton variant="outline" color="purple" aria-label="紫色">
                            <EnvelopeClosedIcon />
                        </IconButton>
                    </Flex>
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
                <Text mb="4">不同圆角的图标按钮：</Text>
                <Flex gap="4">
                    <IconButton radius="none" aria-label="无圆角">
                        <CheckIcon />
                    </IconButton>
                    <IconButton radius="small" aria-label="小圆角">
                        <CheckIcon />
                    </IconButton>
                    <IconButton radius="medium" aria-label="中等圆角">
                        <CheckIcon />
                    </IconButton>
                    <IconButton radius="large" aria-label="大圆角">
                        <CheckIcon />
                    </IconButton>
                    <IconButton radius="full" aria-label="完全圆形">
                        <CheckIcon />
                    </IconButton>
                </Flex>
            </Box>
        </Theme>
    );
};

Radius.storyName = '不同圆角';

export const HighContrast = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">高对比度与普通对比度对比：</Text>
                <Flex direction="column" gap="4">
                    <Flex gap="4">
                        <IconButton color="gray" aria-label="普通对比度">
                            <SunIcon />
                        </IconButton>
                        <IconButton color="gray" highContrast aria-label="高对比度">
                            <SunIcon />
                        </IconButton>
                    </Flex>

                    <Flex gap="4">
                        <IconButton variant="soft" color="blue" aria-label="普通对比度">
                            <MoonIcon />
                        </IconButton>
                        <IconButton variant="soft" color="blue" highContrast aria-label="高对比度">
                            <MoonIcon />
                        </IconButton>
                    </Flex>

                    <Flex gap="4">
                        <IconButton variant="outline" color="amber" aria-label="普通对比度">
                            <StarFilledIcon />
                        </IconButton>
                        <IconButton variant="outline" color="amber" highContrast aria-label="高对比度">
                            <StarFilledIcon />
                        </IconButton>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

HighContrast.storyName = '高对比度';

export const Disabled = () => {
    return (
        <Theme>
            <Box p="5">
                <Text mb="4">禁用状态的图标按钮：</Text>
                <Flex gap="4">
                    <IconButton disabled aria-label="禁用的实心按钮">
                        <PlusIcon />
                    </IconButton>
                    <IconButton variant="outline" disabled aria-label="禁用的轮廓按钮">
                        <PlusIcon />
                    </IconButton>
                    <IconButton variant="soft" disabled aria-label="禁用的软按钮">
                        <PlusIcon />
                    </IconButton>
                    <IconButton variant="ghost" disabled aria-label="禁用的幽灵按钮">
                        <PlusIcon />
                    </IconButton>
                </Flex>
            </Box>
        </Theme>
    );
};

Disabled.storyName = '禁用状态';

export const UseCases = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="5" weight="bold" mb="5">实用案例</Text>

                <Box mb="6">
                    <Text size="2" weight="bold" mb="2">工具栏</Text>
                    <Box style={{ padding: '10px', background: 'var(--gray-3)', borderRadius: '6px', display: 'inline-flex', gap: '8px' }}>
                        <IconButton variant="ghost" aria-label="复制">
                            <ClipboardCopyIcon />
                        </IconButton>
                        <IconButton variant="ghost" aria-label="剪切">
                            <ScissorsIcon />
                        </IconButton>
                        <IconButton variant="ghost" aria-label="粘贴">
                            <ClipboardIcon />
                        </IconButton>
                        <div style={{ width: '1px', background: 'var(--gray-6)', margin: '0 4px' }} />
                        <IconButton variant="ghost" aria-label="显示">
                            <EyeOpenIcon />
                        </IconButton>
                        <IconButton variant="ghost" aria-label="隐藏">
                            <EyeNoneIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box mb="6">
                    <Text size="2" weight="bold" mb="2">卡片操作</Text>
                    <Box style={{ padding: '16px', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', maxWidth: '300px' }}>
                        <Flex justify="between" align="center" mb="2">
                            <Text size="4" weight="bold">卡片标题</Text>
                            <Flex gap="1">
                                <IconButton variant="ghost" size="1" aria-label="编辑">
                                    <Pencil1Icon />
                                </IconButton>
                                <IconButton variant="ghost" size="1" aria-label="删除">
                                    <TrashIcon />
                                </IconButton>
                            </Flex>
                        </Flex>
                        <Text size="2" mb="3">这是一个示例卡片，演示如何使用图标按钮作为卡片的操作元素。</Text>
                        <Flex justify="end" gap="2">
                            <IconButton variant="soft" color="blue" aria-label="喜欢">
                                <HeartFilledIcon />
                            </IconButton>
                            <IconButton variant="soft" color="gray" aria-label="分享">
                                <Share1Icon />
                            </IconButton>
                        </Flex>
                    </Box>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="2">媒体播放器</Text>
                    <Box style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: '8px', maxWidth: '300px' }}>
                        <Text size="2" mb="3" weight="bold">正在播放</Text>
                        <Flex justify="center" gap="3">
                            <IconButton variant="soft" color="gray" size="3" aria-label="上一曲">
                                <ArrowLeftIcon />
                            </IconButton>
                            <IconButton variant="solid" color="blue" size="3" aria-label="播放/暂停">
                                <CheckIcon />
                            </IconButton>
                            <IconButton variant="soft" color="gray" size="3" aria-label="下一曲">
                                <ArrowRightIcon />
                            </IconButton>
                        </Flex>
                        <Flex justify="between" mt="3">
                            <IconButton variant="ghost" size="1" aria-label="下载">
                                <DownloadIcon />
                            </IconButton>
                            <IconButton variant="ghost" size="1" aria-label="分享">
                                <Share1Icon />
                            </IconButton>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const IconButtonAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">IconButton props</div>
                <IconButtonPropsComponent />
            </div>
        </Theme>
    );
};

IconButtonAPI.storyName = '组件 API';
