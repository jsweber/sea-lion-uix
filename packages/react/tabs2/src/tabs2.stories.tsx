import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@sea-lion/react-theme';
import { Text } from '@sea-lion/react-text';
import { Flex } from '@sea-lion/react-flex';
import Tabs2 from './tabs2';

import './style/tabs2.less';

const meta: Meta<typeof Tabs2> = {
    component: Tabs2,
    title: '实验/Tabs2',
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Tabs2>;

export const Basic: Story = {
    name: 'Tabs2 Props',
    argTypes: {
        size: {
            control: 'radio',
            options: ['1', '2', '3'],
            description: '标签页大小',
        },
        variant: {
            control: 'radio',
            options: ['surface', 'ghost'],
            description: '变体样式',
        },
        color: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'yellow', 'pink'],
            description: '主题颜色',
        },
        highContrast: {
            control: 'boolean',
            description: '是否高对比度',
        },
        animationDuration: {
            control: { type: 'number', min: 0, max: 1000, step: 50 },
            description: '指示器滑动动画时长（毫秒）',
        },
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: '标签页方向',
        }
    },
    args: {
        size: '2',
        variant: 'surface',
        color: 'blue',
        highContrast: false,
        animationDuration: 150,
        orientation: 'horizontal'
    },
    render: (props) => (
        <Theme>
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">基础示例</div>
                    <Tabs2 {...props} defaultActiveKey="1">
                        <Tabs2.TabPane tab="标签1" tabKey="1">
                            <Text size="3">标签1内容区域</Text>
                        </Tabs2.TabPane>
                        <Tabs2.TabPane tab="标签2" tabKey="2">
                            <Text size="3">标签2内容区域</Text>
                        </Tabs2.TabPane>
                        <Tabs2.TabPane tab="禁用标签" tabKey="3" disabled>
                            <Text size="3">禁用标签内容</Text>
                        </Tabs2.TabPane>
                    </Tabs2>
                </div>

                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸</div>
                    <Flex direction="column" gap="4">
                        <Tabs2 size="1" defaultActiveKey="1">
                            <Tabs2.TabPane tab="小尺寸" tabKey="1">
                                <Text size="2">小尺寸内容</Text>
                            </Tabs2.TabPane>
                            <Tabs2.TabPane tab="标签2" tabKey="2">
                                <Text size="2">内容2</Text>
                            </Tabs2.TabPane>
                        </Tabs2>

                        <Tabs2 size="3" defaultActiveKey="1">
                            <Tabs2.TabPane tab="大尺寸" tabKey="1">
                                <Text size="4">大尺寸内容</Text>
                            </Tabs2.TabPane>
                            <Tabs2.TabPane tab="标签2" tabKey="2">
                                <Text size="4">内容2</Text>
                            </Tabs2.TabPane>
                        </Tabs2>
                    </Flex>
                </div>

                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同动画速度示例</div>
                    <Flex direction="column" gap="4">
                        <Tabs2 animationDuration={100} defaultActiveKey="1">
                            <Tabs2.TabPane tab="快速动画" tabKey="1">
                                <Text size="3">动画时长：100ms</Text>
                            </Tabs2.TabPane>
                            <Tabs2.TabPane tab="标签2" tabKey="2">
                                <Text size="3">内容2</Text>
                            </Tabs2.TabPane>
                        </Tabs2>

                        <Tabs2 animationDuration={300} defaultActiveKey="1">
                            <Tabs2.TabPane tab="慢速动画" tabKey="1">
                                <Text size="3">动画时长：300ms</Text>
                            </Tabs2.TabPane>
                            <Tabs2.TabPane tab="标签2" tabKey="2">
                                <Text size="3">内容2</Text>
                            </Tabs2.TabPane>
                        </Tabs2>
                    </Flex>
                </div>

                <div className="story-book-margin-top-20">
                    <div className="story-book-label">垂直布局示例</div>
                    <Tabs2 orientation="vertical" defaultActiveKey="1">
                        <Tabs2.TabPane tab="垂直标签1" tabKey="1">
                            <Text size="3">垂直布局的内容区域1</Text>
                        </Tabs2.TabPane>
                        <Tabs2.TabPane tab="垂直标签2" tabKey="2">
                            <Text size="3">垂直布局的内容区域2</Text>
                        </Tabs2.TabPane>
                        <Tabs2.TabPane tab="垂直标签3" tabKey="3">
                            <Text size="3">垂直布局的内容区域3</Text>
                        </Tabs2.TabPane>
                    </Tabs2>
                </div>
            </div>
        </Theme>
    )
}; 