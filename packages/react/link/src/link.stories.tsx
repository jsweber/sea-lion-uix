import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Link } from '@sea-lion/react-link';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { LinkPropsComponent } from './link-props-table';

interface ExtendedLinkProps extends React.ComponentProps<typeof Link> {
  textWrap?: string;
}

const meta: Meta<typeof Link> = {
    component: Link,
    title: '排版/Link',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: [
                    '## 介绍',
                    '',
                    'Link 是一个链接组件，用于在页面间跳转或打开外部资源，支持自定义样式和各种交互状态。',
                    '',
                    '## 安装',
                    '',
                    '```bash',
                    'pnpm add @sea-lion/react-link',
                    '```',
                    '',
                    '或使用 npm / yarn：',
                    '',
                    '```bash',
                    'npm install @sea-lion/react-link',
                    'yarn add @sea-lion/react-link',
                    '```',
                    '',
                    '## 何时使用',
                    '',
                    '- 需要页面导航或跳转到其他路由',
                    '- 需要在应用内部或外部建立超链接',
                    '- 需要创建自定义样式的链接',
                    '- 需要实现各种交互状态的链接（如悬停、点击等）',
                ].join('\n'),
            },
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
                <Text mb="4">基本的链接组件：</Text>
                <Link href="https://example.com">链接到示例网站</Link>
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
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 1</Text>
                        </Box>
                        <Link size="1" href="#">很小的链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 2</Text>
                        </Box>
                        <Link size="2" href="#">小链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 3</Text>
                        </Box>
                        <Link size="3" href="#">中小链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 4</Text>
                        </Box>
                        <Link size="4" href="#">中等链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 5</Text>
                        </Box>
                        <Link size="5" href="#">中大链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 6</Text>
                        </Box>
                        <Link size="6" href="#">大链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 7</Text>
                        </Box>
                        <Link size="7" href="#">较大链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 8</Text>
                        </Box>
                        <Link size="8" href="#">很大链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>Size 9</Text>
                        </Box>
                        <Link size="9" href="#">超大链接</Link>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Sizes.storyName = '尺寸';

export const UnderlineStyles = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">下划线样式</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>auto（默认）</Text>
                        </Box>
                        <Link underline="auto" href="#">自动下划线</Link>
                        <Text size="2" color="gray">在高对比度模式下或鼠标悬停时显示下划线</Text>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>always</Text>
                        </Box>
                        <Link underline="always" href="#">始终显示下划线</Link>
                        <Text size="2" color="gray">始终显示下划线，无论状态如何</Text>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>hover</Text>
                        </Box>
                        <Link underline="hover" href="#">悬停时显示下划线</Link>
                        <Text size="2" color="gray">仅在鼠标悬停时显示下划线</Text>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>none</Text>
                        </Box>
                        <Link underline="none" href="#">无下划线</Link>
                        <Text size="2" color="gray">始终不显示下划线</Text>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

UnderlineStyles.storyName = '下划线样式';

export const FontWeights = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">字重</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>light</Text>
                        </Box>
                        <Link weight="light" href="#">细体链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>regular</Text>
                        </Box>
                        <Link weight="regular" href="#">常规链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>medium</Text>
                        </Box>
                        <Link weight="medium" href="#">中粗链接</Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>bold</Text>
                        </Box>
                        <Link weight="bold" href="#">粗体链接</Link>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

FontWeights.storyName = '字重';

export const Colors = () => {
    const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">颜色</Text>
                <Flex direction="column" gap="4">
                    {colors.map((color) => (
                        <Flex key={color} align="center" gap="4">
                            <Box style={{ width: '100px' }}>
                                <Text>{color}</Text>
                            </Box>
                            <Link color={color as any} href="#">{color} 颜色链接</Link>
                            <Link color={color as any} highContrast href="#">{color} 高对比度</Link>
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Theme>
    );
};

Colors.storyName = '颜色';

export const TextStyles = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">文本样式</Text>
                <Flex direction="column" gap="4">
                    <Box>
                        <Text mb="2">截断文本（truncate）：</Text>
                        <Box style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '10px' }}>
                            <Link truncate href="#">这是一个非常长的文本内容，当超出容器宽度时会被截断并显示省略号，这样用户就能看到部分内容而不会出现溢出</Link>
                        </Box>
                    </Box>
                    <Box>
                        <Text mb="2">文本换行方式（textWrap）：</Text>
                        <Flex direction="column" gap="3">
                            <Box style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '10px' }}>
                                <Text size="2" mb="1">wrap（默认）：</Text>
                                <Link {...{ textWrap: "wrap", href: "#" } as ExtendedLinkProps}>这是一个较长的文本内容，使用默认的换行方式，可以在任何地方自动换行</Link>
                            </Box>
                            <Box style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '10px', overflow: 'hidden' }}>
                                <Text size="2" mb="1">nowrap：</Text>
                                <Link {...{ textWrap: "nowrap", href: "#" } as ExtendedLinkProps}>这是一个较长的文本内容，使用nowrap不会换行，可能会导致文本溢出容器</Link>
                            </Box>
                            <Box style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '10px' }}>
                                <Text size="2" mb="1">balance：</Text>
                                <Link {...{ textWrap: "balance", href: "#" } as ExtendedLinkProps}>这是一个较长的文本内容，使用balance将尝试平衡每行的长度，使文本看起来更整齐</Link>
                            </Box>
                            <Box style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '10px' }}>
                                <Text size="2" mb="1">pretty：</Text>
                                <Link {...{ textWrap: "pretty", href: "#" } as ExtendedLinkProps}>这是一个较长的文本内容，使用pretty可以防止单词、标点符号等出现在行首或行尾的不美观情况</Link>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

TextStyles.storyName = '文本样式';

export const UseCases = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">实用案例</Text>

                <Flex direction="column" gap="6">
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">导航链接</Heading>
                        <Flex gap="4" mb="4">
                            <Link href="#" color="blue">首页</Link>
                            <Link href="#" color="blue">产品</Link>
                            <Link href="#" color="blue">服务</Link>
                            <Link href="#" color="blue">博客</Link>
                            <Link href="#" color="blue">关于我们</Link>
                            <Link href="#" color="blue">联系我们</Link>
                        </Flex>
                        <Text size="2" color="gray">常见的网站导航栏链接</Text>
                    </Box>

                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">内容中的链接</Heading>
                        <Text mb="2">
                            我们的新产品已经发布，请查看<Link href="#" color="blue">详细说明</Link>了解更多信息。如果您有任何问题，请随时<Link href="#" color="blue">联系我们</Link>。
                        </Text>
                        <Text mb="4">
                            您也可以查看我们的<Link href="#" color="blue">常见问题</Link>或<Link href="#" color="blue">使用指南</Link>获取帮助。
                        </Text>
                        <Text size="2" color="gray">在文本段落中使用链接指向相关内容</Text>
                    </Box>

                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">社交媒体链接</Heading>
                        <Flex gap="3">
                            <Link href="#" underline="none" color="blue">Twitter</Link>
                            <Link href="#" underline="none" color="blue">Facebook</Link>
                            <Link href="#" underline="none" color="blue">Instagram</Link>
                            <Link href="#" underline="none" color="blue">LinkedIn</Link>
                            <Link href="#" underline="none" color="blue">GitHub</Link>
                        </Flex>
                        <Text size="2" mt="4" color="gray">网站底部常见的社交媒体链接</Text>
                    </Box>

                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">操作链接</Heading>
                        <Flex direction="column" gap="2">
                            <Link href="#" color="blue">查看详情</Link>
                            <Link href="#" color="green">编辑资料</Link>
                            <Link href="#" color="red">删除账户</Link>
                            <Link href="#" color="purple">下载报告</Link>
                        </Flex>
                        <Text size="2" mt="4" color="gray">不同颜色表示不同类型的操作</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const LinkAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Link props</div>
                <LinkPropsComponent />
            </div>
        </Theme>
    );
};

LinkAPI.storyName = '组件 API';
