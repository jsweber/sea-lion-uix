import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Flex } from '@ui-lib-monorepo-template/react-flex';
import { Button } from '@ui-lib-monorepo-template/react-button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button', // 不加title就会出现文件夹，如src
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonWithProps: Story = {
    name: 'Button Props',
    args: {
        children: 'click',
        size: '3',
        color: 'ruby',
        radius: 'large',
        disabled: false,
        onClick: () => alert('click')
    },
    render: (props) => {
        return (
            <div>
                <Theme>
                    <div>
                        <div className="story-book-label">通过controls面板，调整props查看效果</div>
                        <Flex>
                            <Button {...props} />
                        </Flex>
                    </div>
                </Theme>
                <div>
                    <div className="story-book-label">不加主题</div>
                    <Flex>
                        <Button>click</Button>
                    </Flex>
                </div>
            </div>
        );
    }
}

export const ButtonStyle = () => {
    return (
        <Theme >
            <div className="story-book-container">
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的按钮</div>
                    <Flex gap="20px">
                        <Button size="1" color="pink">size 1</Button>
                        <Button size="2">size 2</Button>
                        <Button size="3">size 3</Button>
                        <Button size="4">size 4</Button>
                    </Flex>
                </div>
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同尺寸的按钮</div>
                    <Flex gap="20px">
                        <Button>default</Button>
                        <Button color="cyan">cyan</Button>
                        <Button color="pink">pink</Button>
                        <Button color="brown">brown</Button>
                    </Flex>
                </div>
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">不同圆角的按钮</div>
                    <Flex gap="20px">
                        <Button radius="none" size="2">none</Button>
                        <Button radius="small" size="2">small</Button>
                        <Button radius="medium" size="2">medium</Button>
                        <Button radius="large" size="2">large</Button>
                        <Button radius="full" size="2">full</Button>
                    </Flex>
                </div>
                <div className="story-book-margin-top-20">
                    <div className="story-book-label">disabled按钮</div>
                    <Flex gap="20px">
                        <Button radius="none" size="2" disabled onClick={() => { alert('click'); }}>disabled</Button>
                    </Flex>
                </div>
            </div>

        </Theme>
    );
}

ButtonStyle.storyName = '按钮样式';

export const nestingThemeButton = () => {
    return (
        <Theme accentColor="blue" >
            <div className="story-book-container story-book-border">
                <div>
                    <div className="story-book-label">主题来自外层主题</div>
                    <Flex gap="20px">
                        <Button size="1">size 1</Button>
                        <Button size="2">size 2</Button>
                    </Flex>
                </div>
                <div className="story-book-border">
                    <div className="story-book-label">主题来自内部主题</div>
                    <Theme accentColor="yellow">
                        <Flex gap="20px">

                            <Button size="3">size 3</Button>
                            <Button size="4">size 4</Button>

                        </Flex>
                    </Theme>
                </div>
            </div>
        </Theme>
    );
}

nestingThemeButton.storyName = '嵌套使用Theme'

