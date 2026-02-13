import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as DataList from '@sea-lion/react-data-list';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';

/**
 * ## 介绍
 *
 * DataList 是一个用于展示键值对列表的组件，通常用于展示属性、配置和详细信息。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-data-list
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-data-list
 * yarn add @sea-lion/react-data-list
 * ```
 *
 * ## 何时使用
 *
 * - 需要以结构化方式展示对象属性或数据字段
 * - 展示用户资料、产品详情、配置项等信息
 * - 呈现表单数据的只读视图
 * - 需要清晰标记标签和对应值的场景
 */
const meta: Meta<typeof DataList.Root> = {
    component: DataList.Root,
    title: '数据展示/DataList',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DataList.Root>;

export const DataListWithProps: Story = {
    name: 'DataList 属性',
    argTypes: {
        orientation: {
            control: 'inline-radio',
            options: ['horizontal', 'vertical'],
            description: '方向："horizontal" | "vertical"',
        },
        size: {
            control: 'inline-radio',
            options: ['1', '2', '3'],
            description: '尺寸："1" | "2" | "3"',
        },
        trim: {
            control: 'inline-radio',
            options: ['normal', 'start', 'end', 'both'],
            description: '修剪前后空间："normal" | "start" | "end" | "both"',
        },
    },
    args: {
        orientation: 'horizontal',
        size: '2',
        children: (
            <>
                <DataList.Item>
                    <DataList.Label>姓名</DataList.Label>
                    <DataList.Value>张三</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>年龄</DataList.Label>
                    <DataList.Value>28</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>职业</DataList.Label>
                    <DataList.Value>软件工程师</DataList.Value>
                </DataList.Item>
            </>
        ),
    },
};

export const DataListBasic = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">基本用法</div>
                    <Box>
                        <DataList.Root>
                            <DataList.Item>
                                <DataList.Label>姓名</DataList.Label>
                                <DataList.Value>张三</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label>电子邮件</DataList.Label>
                                <DataList.Value>zhangsan@example.com</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label>电话</DataList.Label>
                                <DataList.Value>138-0000-0000</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label>地址</DataList.Label>
                                <DataList.Value>北京市海淀区</DataList.Value>
                            </DataList.Item>
                        </DataList.Root>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

DataListBasic.storyName = '基本用法';

export const DataListOrientation = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同方向的数据列表</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">水平方向 (默认)</Text>
                            <DataList.Root orientation="horizontal">
                                <DataList.Item>
                                    <DataList.Label>用户名</DataList.Label>
                                    <DataList.Value>admin</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>创建时间</DataList.Label>
                                    <DataList.Value>2023-01-01</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>状态</DataList.Label>
                                    <DataList.Value>活跃</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">垂直方向</Text>
                            <DataList.Root orientation="vertical">
                                <DataList.Item>
                                    <DataList.Label>用户名</DataList.Label>
                                    <DataList.Value>admin</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>创建时间</DataList.Label>
                                    <DataList.Value>2023-01-01</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>状态</DataList.Label>
                                    <DataList.Value>活跃</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DataListOrientation.storyName = '方向';

export const DataListSizes = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的数据列表</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 1 (小)</Text>
                            <DataList.Root size="1">
                                <DataList.Item>
                                    <DataList.Label>操作系统</DataList.Label>
                                    <DataList.Value>Windows 11</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>内存</DataList.Label>
                                    <DataList.Value>16GB</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 2 (中，默认)</Text>
                            <DataList.Root size="2">
                                <DataList.Item>
                                    <DataList.Label>操作系统</DataList.Label>
                                    <DataList.Value>Windows 11</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>内存</DataList.Label>
                                    <DataList.Value>16GB</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">尺寸 3 (大)</Text>
                            <DataList.Root size="3">
                                <DataList.Item>
                                    <DataList.Label>操作系统</DataList.Label>
                                    <DataList.Value>Windows 11</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>内存</DataList.Label>
                                    <DataList.Value>16GB</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DataListSizes.storyName = '尺寸';

export const DataListAlignment = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同对齐方式的数据列表项</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">起始对齐 (start)</Text>
                            <DataList.Root>
                                <DataList.Item align="start">
                                    <DataList.Label>项目描述</DataList.Label>
                                    <DataList.Value>这是一段较长的项目描述，用于展示多行内容时的对齐效果。这段文本会自动换行，以展示对齐方式的差异。</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">居中对齐 (center)</Text>
                            <DataList.Root>
                                <DataList.Item align="center">
                                    <DataList.Label>项目描述</DataList.Label>
                                    <DataList.Value>这是一段较长的项目描述，用于展示多行内容时的对齐效果。这段文本会自动换行，以展示对齐方式的差异。</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">末尾对齐 (end)</Text>
                            <DataList.Root>
                                <DataList.Item align="end">
                                    <DataList.Label>项目描述</DataList.Label>
                                    <DataList.Value>这是一段较长的项目描述，用于展示多行内容时的对齐效果。这段文本会自动换行，以展示对齐方式的差异。</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">基线对齐 (baseline，默认)</Text>
                            <DataList.Root>
                                <DataList.Item align="baseline">
                                    <DataList.Label>项目描述</DataList.Label>
                                    <DataList.Value>这是一段较长的项目描述，用于展示多行内容时的对齐效果。这段文本会自动换行，以展示对齐方式的差异。</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">拉伸对齐 (stretch)</Text>
                            <DataList.Root>
                                <DataList.Item align="stretch">
                                    <DataList.Label>项目描述</DataList.Label>
                                    <DataList.Value>这是一段较长的项目描述，用于展示多行内容时的对齐效果。这段文本会自动换行，以展示对齐方式的差异。</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DataListAlignment.storyName = '对齐方式';

export const DataListLabelColors = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同颜色的标签</div>
                    <Flex direction="column" gap="20px">
                        <DataList.Root>
                            <DataList.Item>
                                <DataList.Label color="gray">灰色标签</DataList.Label>
                                <DataList.Value>标签默认为灰色</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label color="blue">蓝色标签</DataList.Label>
                                <DataList.Value>蓝色可用于表示信息或主题</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label color="green">绿色标签</DataList.Label>
                                <DataList.Value>绿色可用于表示成功或通过</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label color="red">红色标签</DataList.Label>
                                <DataList.Value>红色可用于表示错误或警告</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label color="amber">琥珀色标签</DataList.Label>
                                <DataList.Value>琥珀色可用于表示警告或注意</DataList.Value>
                            </DataList.Item>
                        </DataList.Root>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DataListLabelColors.storyName = '标签颜色';

export const DataListHighContrast = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">高对比度标签</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">普通对比度</Text>
                            <DataList.Root>
                                <DataList.Item>
                                    <DataList.Label color="blue">技术栈</DataList.Label>
                                    <DataList.Value>React, TypeScript, Node.js</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label color="crimson">部署环境</DataList.Label>
                                    <DataList.Value>AWS, Docker, Kubernetes</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">高对比度</Text>
                            <DataList.Root>
                                <DataList.Item>
                                    <DataList.Label color="blue" highContrast>技术栈</DataList.Label>
                                    <DataList.Value>React, TypeScript, Node.js</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label color="crimson" highContrast>部署环境</DataList.Label>
                                    <DataList.Value>AWS, Docker, Kubernetes</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DataListHighContrast.storyName = '高对比度';

export const DataListWidthControl = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">自定义标签宽度</div>
                    <Flex direction="column" gap="20px">
                        <Box>
                            <Text as="p" size="2" weight="bold">默认宽度 (120px)</Text>
                            <DataList.Root>
                                <DataList.Item>
                                    <DataList.Label>短标签</DataList.Label>
                                    <DataList.Value>这是一个值</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label>这是一个很长的标签名称</DataList.Label>
                                    <DataList.Value>这是一个值</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">自定义宽度 (200px)</Text>
                            <DataList.Root>
                                <DataList.Item>
                                    <DataList.Label style={{ minWidth: '200px' }}>短标签</DataList.Label>
                                    <DataList.Value>这是一个值</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label style={{ minWidth: '200px' }}>这是一个很长的标签名称</DataList.Label>
                                    <DataList.Value>这是一个值</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                        <Box>
                            <Text as="p" size="2" weight="bold">百分比宽度 (30%)</Text>
                            <DataList.Root style={{ width: '100%' }}>
                                <DataList.Item>
                                    <DataList.Label width="30%">短标签</DataList.Label>
                                    <DataList.Value>这是一个值</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label width="30%">这是一个很长的标签名称</DataList.Label>
                                    <DataList.Value>这是一个值</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                </div>
            </div>
        </Theme>
    );
};

DataListWidthControl.storyName = '标签宽度控制';

export const DataListResponsive = () => {
    return (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">响应式数据列表</div>
                    <Box>
                        <DataList.Root
                            orientation={{ initial: 'horizontal', xs: 'vertical', md: 'horizontal' }}
                            size={{ initial: '1', sm: '2', lg: '3' }}
                        >
                            <DataList.Item>
                                <DataList.Label>产品名称</DataList.Label>
                                <DataList.Value>智能手机 X10</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label>价格</DataList.Label>
                                <DataList.Value>¥3999</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label>存储容量</DataList.Label>
                                <DataList.Value>128GB</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label>颜色</DataList.Label>
                                <DataList.Value>午夜蓝</DataList.Value>
                            </DataList.Item>
                        </DataList.Root>
                        <Text as="p" size="2" style={{ marginTop: '10px' }}>
                            尝试调整浏览器窗口大小，观察数据列表的布局和尺寸变化。
                        </Text>
                    </Box>
                </div>
            </div>
        </Theme>
    );
};

DataListResponsive.storyName = '响应式';
