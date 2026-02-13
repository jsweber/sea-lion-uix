import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Kbd } from '@sea-lion/react-kbd';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { KbdPropsComponent } from './kbd-props-table';

/**
 * ## 介绍
 *
 * Kbd 是一个用于显示键盘按键或快捷键的组件，适用于教程、帮助文档等场景。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-kbd
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-kbd
 * yarn add @sea-lion/react-kbd
 * ```
 *
 * ## 何时使用
 *
 * - 在文档或教程中展示键盘快捷键
 * - 在应用界面中提示用户可用的键盘操作
 * - 在帮助页面中展示键盘导航指令
 */
const meta: Meta<typeof Kbd> = {
    component: Kbd,
    title: '排版/Kbd',
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
                <Text mb="4">基本的 Kbd 组件示例：</Text>
                <Text>
                    按下 <Kbd>Tab</Kbd> 键切换焦点，使用 <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> 反向切换焦点。
                </Text>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const Sizes = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">不同尺寸</Text>

                <Flex direction="column" gap="5">
                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 1</Text>
                        <Kbd size="1">Esc</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 2</Text>
                        <Kbd size="2">Tab</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 3</Text>
                        <Kbd size="3">Shift</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 4</Text>
                        <Kbd size="4">Enter</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 5</Text>
                        <Kbd size="5">Space</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 6</Text>
                        <Kbd size="6">Backspace</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 7</Text>
                        <Kbd size="7">Delete</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 8</Text>
                        <Kbd size="8">⌘</Kbd>
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2">Size 9</Text>
                        <Kbd size="9">F11</Kbd>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

Sizes.storyName = '不同尺寸';

export const Combinations = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">组合键</Text>

                <Flex direction="column" gap="3">
                    <Text>
                        保存文件: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
                    </Text>

                    <Text>
                        复制内容: <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
                    </Text>

                    <Text>
                        粘贴内容: <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
                    </Text>

                    <Text>
                        全选内容: <Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>
                    </Text>

                    <Text>
                        撤销操作: <Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd>
                    </Text>

                    <Text>
                        重做操作: <Kbd>Ctrl</Kbd> + <Kbd>Y</Kbd> 或 <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd>
                    </Text>

                    <Text>
                        打开搜索: <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd>
                    </Text>

                    <Text>
                        刷新页面: <Kbd>F5</Kbd> 或 <Kbd>Ctrl</Kbd> + <Kbd>R</Kbd>
                    </Text>
                </Flex>
            </Box>
        </Theme>
    );
};

Combinations.storyName = '组合键';

export const UseCases = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">实用案例</Text>

                <Flex direction="column" gap="6">
                    <Box style={{ maxWidth: '600px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="2">编辑器快捷键</Heading>
                        <Box style={{ background: 'var(--gray-2)', padding: '12px', borderRadius: '6px' }}>
                            <Flex direction="column" gap="2">
                                <Flex align="center" justify="between">
                                    <Text>保存文件</Text>
                                    <Flex gap="1">
                                        <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
                                    </Flex>
                                </Flex>
                                <Flex align="center" justify="between">
                                    <Text>查找文本</Text>
                                    <Flex gap="1">
                                        <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd>
                                    </Flex>
                                </Flex>
                                <Flex align="center" justify="between">
                                    <Text>替换文本</Text>
                                    <Flex gap="1">
                                        <Kbd>Ctrl</Kbd> + <Kbd>H</Kbd>
                                    </Flex>
                                </Flex>
                                <Flex align="center" justify="between">
                                    <Text>跳转到行</Text>
                                    <Flex gap="1">
                                        <Kbd>Ctrl</Kbd> + <Kbd>G</Kbd>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>

                    <Box style={{ maxWidth: '600px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="2">游戏控制</Heading>
                        <Flex align="center" mb="3" gap="4">
                            <Flex direction="column" align="center" gap="1">
                                <Kbd>W</Kbd>
                                <Flex gap="1">
                                    <Kbd>A</Kbd><Kbd>S</Kbd><Kbd>D</Kbd>
                                </Flex>
                            </Flex>
                            <Text>使用 WASD 控制角色移动</Text>
                        </Flex>
                        <Flex align="center" mb="3" gap="4">
                            <Flex gap="1">
                                <Kbd>Shift</Kbd> + <Kbd>W</Kbd>
                            </Flex>
                            <Text>按住 Shift 奔跑</Text>
                        </Flex>
                        <Flex align="center" gap="4">
                            <Kbd>Space</Kbd>
                            <Text>跳跃</Text>
                        </Flex>
                    </Box>

                    <Box style={{ maxWidth: '600px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="2">网页浏览</Heading>
                        <Flex direction="column" gap="2">
                            <Text>
                                按 <Kbd>Tab</Kbd> 在页面元素间导航
                            </Text>
                            <Text>
                                按 <Kbd>Space</Kbd> 或 <Kbd>Page Down</Kbd> 滚动页面
                            </Text>
                            <Text>
                                按 <Kbd>Home</Kbd> 返回页面顶部，<Kbd>End</Kbd> 到达页面底部
                            </Text>
                            <Text>
                                按 <Kbd>Ctrl</Kbd> + <Kbd>+</Kbd> 放大页面，<Kbd>Ctrl</Kbd> + <Kbd>-</Kbd> 缩小页面
                            </Text>
                            <Text>
                                按 <Kbd>F11</Kbd> 切换全屏模式
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const KbdAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Kbd props</div>
                <KbdPropsComponent />
            </div>
        </Theme>
    );
};

KbdAPI.storyName = '组件 API';
