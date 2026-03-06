import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { TextArea } from '@sea-lion/react-text-area';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { TextAreaPropsComponent } from './text-area-props-table';

/**
 * ## 介绍
 *
 * TextArea 是一个多行文本输入组件，用于用户输入较长的文本内容。组件支持多种尺寸、变体样式以及自定义调整大小方式。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-text-area
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-text-area
 * yarn add @sea-lion/react-text-area
 * ```
 *
 * ## 使用
 *
 * 在代码中引入组件：
 *
 * ```tsx
 * import * as TextArea from '@sea-lion/react-text-area';
 * ```
 *
 * ## 何时使用
 *
 * - 需要用户输入多行文本时
 * - 需要收集用户反馈、意见或描述时
 * - 表单需要输入较长文本内容时
 * - 需要可调整大小的文本输入区域时
 */
const meta: Meta<typeof TextArea> = {
    title: '数据录入/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['1', '2', '3'],
            control: { type: 'select' },
        },
        variant: {
            options: ['classic', 'surface', 'soft'],
            control: { type: 'select' },
        },
        resize: {
            options: ['none', 'vertical', 'horizontal', 'both'],
            control: { type: 'select' },
        },
        color: {
            options: [
                'gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange',
                'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple',
                'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade',
                'green', 'grass', 'lime',
            ],
            control: { type: 'select' },
        },
        radius: {
            options: ['none', 'small', 'medium', 'large', 'full'],
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readOnly: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Default = () => {
    return (
        <Theme>
            <Box style={{ maxWidth: '400px' }}>
                <TextArea placeholder="请输入文本..." />
            </Box>
        </Theme>
    );
};

Default.storyName = '默认';

export const Sizes = () => {
    return (
        <Theme>
            <Flex direction="column" gap="4">
                <Box>
                    <Text size="2" weight="bold" mb="2">小尺寸 (Size 1)</Text>
                    <TextArea size="1" placeholder="小尺寸文本框..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">中等尺寸 (Size 2 - 默认)</Text>
                    <TextArea size="2" placeholder="中等尺寸文本框..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">大尺寸 (Size 3)</Text>
                    <TextArea size="3" placeholder="大尺寸文本框..." />
                </Box>
            </Flex>
        </Theme>
    );
};

Sizes.storyName = '尺寸';

export const Variants = () => {
    return (
        <Theme>
            <Flex direction="column" gap="4">
                <Box>
                    <Text size="2" weight="bold" mb="2">Surface 变体 (默认)</Text>
                    <TextArea variant="surface" placeholder="Surface 变体..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">Classic 变体</Text>
                    <TextArea variant="classic" placeholder="Classic 变体..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">Soft 变体</Text>
                    <TextArea variant="soft" color="blue" placeholder="Soft 变体..." />
                </Box>
            </Flex>
        </Theme>
    );
};

Variants.storyName = '变体';

export const ResizeOptions = () => {
    return (
        <Theme>
            <Flex direction="column" gap="4">
                <Box>
                    <Text size="2" weight="bold" mb="2">无法调整大小 (resize=&quot;none&quot;)</Text>
                    <TextArea resize="none" placeholder="不可调整大小..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">垂直调整大小 (resize=&quot;vertical&quot;)</Text>
                    <TextArea resize="vertical" placeholder="可垂直调整大小..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">水平调整大小 (resize=&quot;horizontal&quot;)</Text>
                    <TextArea resize="horizontal" placeholder="可水平调整大小..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">自由调整大小 (resize=&quot;both&quot;)</Text>
                    <TextArea resize="both" placeholder="可自由调整大小..." />
                </Box>
            </Flex>
        </Theme>
    );
};

ResizeOptions.storyName = '调整大小';

export const Colors = () => {
    return (
        <Theme>
            <Flex direction="column" gap="4">
                <Box>
                    <Text size="2" weight="bold" mb="2">默认颜色</Text>
                    <TextArea variant="soft" placeholder="默认颜色..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">蓝色</Text>
                    <TextArea variant="soft" color="blue" placeholder="蓝色文本框..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">绿色</Text>
                    <TextArea variant="soft" color="green" placeholder="绿色文本框..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">红色</Text>
                    <TextArea variant="soft" color="red" placeholder="红色文本框..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">紫色</Text>
                    <TextArea variant="soft" color="purple" placeholder="紫色文本框..." />
                </Box>
            </Flex>
        </Theme>
    );
};

Colors.storyName = '颜色';

export const States = () => {
    return (
        <Theme>
            <Flex direction="column" gap="4">
                <Box>
                    <Text size="2" weight="bold" mb="2">正常状态</Text>
                    <TextArea placeholder="正常状态..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">禁用状态</Text>
                    <TextArea disabled placeholder="禁用状态..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">只读状态</Text>
                    <TextArea readOnly value="这是只读内容，不可编辑" />
                </Box>
            </Flex>
        </Theme>
    );
};

States.storyName = '状态';

export const Radius = () => {
    return (
        <Theme>
            <Flex direction="column" gap="4">
                <Box>
                    <Text size="2" weight="bold" mb="2">无圆角 (radius=&quot;none&quot;)</Text>
                    <TextArea radius="none" placeholder="无圆角..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">小圆角 (radius=&quot;small&quot;)</Text>
                    <TextArea radius="small" placeholder="小圆角..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">中等圆角 (radius=&quot;medium&quot;)</Text>
                    <TextArea radius="medium" placeholder="中等圆角..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">大圆角 (radius=&quot;large&quot;)</Text>
                    <TextArea radius="large" placeholder="大圆角..." />
                </Box>
                <Box>
                    <Text size="2" weight="bold" mb="2">完全圆角 (radius=&quot;full&quot;)</Text>
                    <TextArea radius="full" placeholder="完全圆角..." />
                </Box>
            </Flex>
        </Theme>
    );
};

Radius.storyName = '圆角';

export const UseCases = () => {
    return (
        <Theme>
            <Box p="4">
                <Heading as="h1" size="5" mb="5">实用案例</Heading>

                <Box mb="6">
                    <Heading as="h2" size="4" mb="4">反馈表单</Heading>
                    <Box style={{ maxWidth: '500px', padding: '24px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                        <Text size="4" weight="bold" mb="4">产品反馈</Text>
                        <Flex direction="column" gap="4">
                            <Box>
                                <Text size="2" weight="medium" mb="2">您对我们的产品满意度如何？</Text>
                                <TextArea placeholder="请分享您的使用体验..." rows={3} />
                            </Box>
                            <Box>
                                <Text size="2" weight="medium" mb="2">您希望我们改进哪些功能？</Text>
                                <TextArea variant="soft" color="blue" placeholder="请提供具体建议..." rows={3} />
                            </Box>
                            <Box>
                                <Text size="2" weight="medium" mb="2">其他意见</Text>
                                <TextArea variant="classic" placeholder="其他意见或建议..." rows={3} />
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box mb="6">
                    <Heading as="h2" size="4" mb="4">设置描述</Heading>
                    <Box style={{ maxWidth: '500px', padding: '24px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
                        <Text size="4" weight="bold" mb="4">个人简介设置</Text>
                        <Flex direction="column" gap="3">
                            <Text size="2" color="gray">请编写您的个人简介，将显示在您的个人资料页面。</Text>
                            <TextArea
                                size="2"
                                placeholder="介绍一下自己..."
                                resize="vertical"
                                rows={5}
                                defaultValue="我是一名软件工程师，专注于前端开发和用户体验设计。喜欢创造直观、美观且易用的界面。"
                            />
                            <Text size="1" color="gray">最多 500 字符</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const API = () => {
    return (
        <Theme>
            <Box p="4">
                <Heading as="h1" size="5" mb="5">API 参考</Heading>
                <TextAreaPropsComponent />
            </Box>
        </Theme>
    );
};

API.storyName = '组件 API';

// TextAreaAPI 部分将在 text-area-props-table.tsx 中创建
