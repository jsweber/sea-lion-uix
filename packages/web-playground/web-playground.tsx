import { FC, useState } from 'react';
import {
    FaceIcon,
    SunIcon,
    StarIcon,
    HeartIcon,
    MoonIcon,
    MagicWandIcon,
    RocketIcon,
    PaperPlaneIcon,
    InfoCircledIcon,
    MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { ThemePanel } from '@sea-lion/react-theme-panel';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Badge } from '@sea-lion/react-badge';
import { Button } from '@sea-lion/react-button';
import { Blockquote } from '@sea-lion/react-blockquote';
import { Container } from '@sea-lion/react-container';
import { Code } from '@sea-lion/react-code';
import { Checkbox } from '@sea-lion/react-checkbox';
import { Heading } from '@sea-lion/react-heading';
import { Text } from '@sea-lion/react-text';
import * as Table from '@sea-lion/react-table';
import { Kbd } from '@sea-lion/react-kbd';
import { Progress } from '@sea-lion/react-progress';
import { Separator } from '@sea-lion/react-separator';
import * as Callout from '@sea-lion/react-callout';
import { Link } from '@sea-lion/react-link';
import { Spinner } from '@sea-lion/react-spinner';
import { Skeleton } from '@sea-lion/react-skeleton';
import { Tooltip } from '@sea-lion/react-tooltip';
import * as Popover from '@sea-lion/react-popover';
import { ScrollArea } from '@sea-lion/react-scroll-area';
import * as SegmentedControl from '@sea-lion/react-segmented-control';
import { Box } from '@sea-lion/react-box';
import { Grid } from '@sea-lion/react-grid';
import { Switch } from '@sea-lion/react-switch';
import * as Input from '@sea-lion/react-input';
import { TextArea } from '@sea-lion/react-text-area';
import * as Tabs from '@sea-lion/react-tab';
import { Card } from '@sea-lion/react-card';
import { Avatar } from '@sea-lion/react-avatar';
import * as DropdownMenu from '@sea-lion/react-dropdown-menu';
import { Radio } from '@sea-lion/react-radio';
import { Slider } from '@sea-lion/react-slider';
import { IconButton } from '@sea-lion/react-icon-button';
import { ComponentsDemo } from './components-demo';
import AntdImage from './images/antd.jpg';
import ArcoImage from './images/arco.jpg';
import radixImage from './images/radix.jpg';
import varleftImage from './images/varleft.jpg';
import logoImage from './images/logo.svg';
import logoStaticImage from './images/logo-static.svg';

import "./index.less";

interface WebPlaygroundProps {
    mode?: 'development' | 'production';
}

const WebPlayground: FC<WebPlaygroundProps> = ({ mode }) => {
    const [open, setOpen] = useState(false);

    return (
        <Theme>
            <div className="wp-root">
                <ThemePanel
                    open={open}
                    setOpen={setOpen}
                />
                <Container>
                    <header className="wp-header">
                        <Heading>
                            <div>
                                <img src={logoImage} width="380" />
                            </div>
                        </Heading>

                        <Flex gap="3" justify="center" className="wp-bage-wrapper">
                            <Badge color="orange">独立组件包</Badge>
                            <Badge color="blue">Theme & headless</Badge>
                            <Badge color="green">Theme面板</Badge>
                            <Badge color="sky">组件使用灵活</Badge>
                            <Badge color="red">符合团队技术栈</Badge>
                        </Flex>
                        <div className="wp-theme-float">
                            <Button
                                onClick={() => {
                                    setOpen(true);
                                }}
                            ><MagicWandIcon />
                            </Button>
                        </div>
                    </header>

                    <div>
                        <Blockquote size="5">
                            介绍
                        </Blockquote>
                        <div className="block-section">
                            <Text as="p" className="wp-descr-item">
                                <Badge color="amber"><SunIcon /></Badge><strong>Sea-lion-uix</strong>是sea-lion-ui的下一个版本，由于基于<Code color="gray" variant="soft">Radix/primitives</Code>无样式组件库进行重构，
                                所以新版本在原名后增加“x”，以下简称 <strong>x</strong>。
                            </Text>
                            <Text as="p" className="wp-descr-item">
                                <Badge color="yellow"><StarIcon /></Badge><strong>在组件数量上</strong>，力求在有限的开发时间内提供更多的组件，组件数量从一代的19个增加到 <strong>49</strong>。
                            </Text>
                            <Text as="p" className="wp-descr-item">
                                <Badge color="red"><HeartIcon /></Badge><strong>在全局功能上</strong>，x在使用上会更灵活，组件支持 主题样式 和 headless 两种使用模式，并且每个组件开放更多参数，尽量避免产生难以更改的情况。
                            </Text>
                            <Text as="p" className="wp-descr-item">
                                <Badge color="bronze"><FaceIcon /></Badge><strong>每个组件都是独立的包</strong>，在使用时避免和其他组件库同时使用产生大量冗余代码，在开发和维护时可以进行单独的升级和发布。
                            </Text>
                            <Text as="p" className="wp-descr-item">
                                <Badge color="sky"><MoonIcon /></Badge><strong>在组件自定义上有天然优势</strong>，基于Radix优秀的样式系统和无头组件思想，大量使用where作为css选择器，提供独特的asChild和Slot功能，开放state。
                            </Text>
                            <Text as="p" className="wp-descr-item">
                                <Badge color="grass"><RocketIcon /></Badge><strong>在规范和技术栈上和团队习惯保持一致</strong>，选择<Code color="gray" variant="soft">Less + css</Code>自定义属性开发样式系统，并集成<Code color="gray" variant="soft">eslint-config-ali</Code>和<Code color="gray" variant="soft">iconfont</Code>。
                            </Text>

                        </div>
                    </div>
                    {/* <IconFont icon="icon-CompassionOutlined" />
                    <IconFont className="spin" style={{ fontSize: 32, color: 'grey' }} icon="icon-RefreshOutlined" />
                    <IconFont icon="icon-cuowu1" style={{ fontSize: '16px', lineHeight: 1, color: '#464A53' }} /> */}
                    <div>
                        <Blockquote size="5">
                            交流
                        </Blockquote>
                        <div className="block-section">
                            <Text as="p" className="wp-descr-item">
                                <Badge color="blue"><PaperPlaneIcon /></Badge>如果对组件有任何疑问和建议，欢迎联系，<Kbd>飞书@杜晓卿。</Kbd>
                            </Text>
                        </div>
                    </div>
                    <div>
                        <Blockquote size="5">
                            同行对比
                        </Blockquote>
                        <div className="block-section">
                            <Table.Root variant="surface">
                                <Table.Header>
                                    <Table.Row className="wp-table-row">
                                        <Table.ColumnHeaderCell>组件库名称</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>全量安装</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>独立组件包</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>theme</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>headless</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>覆盖场景</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>组件修改难度</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell><Badge color="amber" size="3">优势项</Badge></Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={AntdImage} alt="antd-logo" className="wp-ui-logo" />
                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell>全面</Table.Cell>
                                        <Table.Cell>困难</Table.Cell>
                                        <Table.Cell>3</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={ArcoImage} alt="Arco-logo" className="wp-ui-logo" />
                                        </Table.RowHeaderCell>

                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell>全面</Table.Cell>
                                        <Table.Cell>困难</Table.Cell>
                                        <Table.Cell>3</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={varleftImage} alt="varleft-logo" className="wp-ui-logo" />

                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell>较好</Table.Cell>
                                        <Table.Cell>一般</Table.Cell>
                                        <Table.Cell>3</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={radixImage} alt="radix-logo" className="wp-ui-logo" />
                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell>一般</Table.Cell>
                                        <Table.Cell>容易</Table.Cell>
                                        <Table.Cell>3</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={logoStaticImage} alt="sealion-logo" className="wp-ui-logo" width="300" />
                                        </Table.RowHeaderCell>
                                        <Table.Cell className="wp-cell"><Checkbox /></Table.Cell>
                                        <Table.Cell className="wp-cell"><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell className="wp-cell"><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell className="wp-cell"><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell className="wp-cell">一般</Table.Cell>
                                        <Table.Cell className="wp-cell">容易</Table.Cell>
                                        <Table.Cell className="wp-cell">4</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </div>
                    </div>
                    <div>
                        <Blockquote size="5">
                            使用
                        </Blockquote>
                        <div className="block-section">
                            <div className="sub-block-section">
                                <Heading as="h5">安装</Heading>
                                <div>
                                    x目前不支持全量安装，仅支持按需安装，即安装自己需要的组件，
                                    例如安装Button组件：<Code variant="soft">pnpm install @sea-lion/react-button</Code>
                                </div>
                                <div>
                                    x目前支持带主题和headless两种模式，当使用theme组件时直接使用Button组件是没有样式的，
                                </div>
                                <div>
                                    安装theme组件：<Code variant="soft">pnpm install @sea-lion/react-theme</Code>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Blockquote size="5">
                            开发
                        </Blockquote>
                        <div className="block-section">
                            <Heading as="h5">安装依赖</Heading>
                            <div>
                                x为了同时支持主题和和headless两种模式，开发环境比一般组件库复杂，
                            </div>
                            <div>
                                为了可以有效管理组件的本地和外部依赖，强制使用pnpm进行管理。
                            </div>
                            <div>
                                <Code variant="soft">git clone</Code>代码仓库后进入项目根目录；
                            </div>
                            <div>
                                执行<Code variant="soft">pnpm install</Code>进行安装；
                            </div>
                            <div>
                                执行<Code variant="soft">pnpm dev</Code>运行开发环境（如Theme组件样式更改，需要重新运行命名）；
                            </div>
                            <div>
                                执行<Code variant="soft">pnpm build</Code>进行打包；
                            </div>
                            <div>
                                执行<Code variant="soft">pnpm publish-stable</Code>进行发布。
                            </div>
                        </div>
                    </div>

                    <div>
                        <Blockquote size="5">
                            主题调试示例
                        </Blockquote>
                        <div className="block-section wp-theme-debug-section">
                            <Grid
                                className="wp-theme-debug-grid"
                                columns={{ initial: '1', sm: '2', lg: '3' }}
                                gap="5"
                            >
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Progress 进度条</Text>
                                    <Flex direction="column" gap="3">
                                        <Progress value={30} />
                                        <Progress value={60} color="cyan" />
                                        <Progress value={90} color="orange" size="3" />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Separator 分割线</Text>
                                    <Flex direction="column" gap="2">
                                        <Text size="1">上方内容</Text>
                                        <Separator size="4" />
                                        <Text size="1">下方内容</Text>
                                        <Flex align="center" gap="2">
                                            <span>左</span>
                                            <Separator orientation="vertical" size="4" style={{ height: 20 }} />
                                            <span>右</span>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Callout 提示框</Text>
                                    <Flex direction="column" gap="3">
                                        <Callout.Root size="2" color="blue" variant="soft">
                                            <Callout.Icon><InfoCircledIcon width="20" height="20" /></Callout.Icon>
                                            <Callout.Text>Callout 用于展示提示，随主题色变化。</Callout.Text>
                                        </Callout.Root>
                                        <Callout.Root size="2" color="green" variant="surface">
                                            <Callout.Icon><InfoCircledIcon width="20" height="20" /></Callout.Icon>
                                            <Callout.Text>Surface 变体。</Callout.Text>
                                        </Callout.Root>
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Link 链接</Text>
                                    <Flex gap="3" wrap="wrap">
                                        <Link href="#">默认</Link>
                                        <Link color="blue" href="#">蓝色</Link>
                                        <Link color="crimson" href="#">红色</Link>
                                        <Link highContrast href="#">高对比</Link>
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Spinner 加载</Text>
                                    <Flex align="center" gap="4">
                                        <Spinner size="1" />
                                        <Spinner size="2" />
                                        <Spinner size="3" />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Skeleton 骨架屏</Text>
                                    <Flex direction="column" gap="2">
                                        <Skeleton loading>
                                            <Text>loading 时骨架替代</Text>
                                        </Skeleton>
                                        <Skeleton loading width="100%" height="24px" />
                                        <Skeleton loading width="80%" height="24px" />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Tooltip 气泡</Text>
                                    <Flex gap="3">
                                        <Tooltip content="悬停查看 Tooltip 样式">
                                            <Button variant="soft">悬停我</Button>
                                        </Tooltip>
                                        <Tooltip content="底部提示" side="bottom">
                                            <Button variant="outline">底部</Button>
                                        </Tooltip>
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Popover 弹出层</Text>
                                    <Popover.Root>
                                        <Popover.Trigger>
                                            <Button variant="soft">打开 Popover</Button>
                                        </Popover.Trigger>
                                        <Popover.Content>
                                            <Box p="3">
                                                <Heading size="2" mb="2">主题调试</Heading>
                                                <Text as="p" size="2" color="gray">继承主题圆角、阴影与背景。</Text>
                                            </Box>
                                        </Popover.Content>
                                    </Popover.Root>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">ScrollArea 滚动区域</Text>
                                    <ScrollArea type="scroll" style={{ height: 100 }}>
                                        <Box p="3">
                                            <Text as="p" size="2">第一行</Text>
                                            <Text as="p" size="2">第二行</Text>
                                            <Text as="p" size="2">第三行（可滚动）</Text>
                                            <Text as="p" size="2">第四行</Text>
                                            <Text as="p" size="2">第五行</Text>
                                        </Box>
                                    </ScrollArea>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">SegmentedControl</Text>
                                    <SegmentedControl.Root defaultValue="a">
                                        <SegmentedControl.Item value="a">A</SegmentedControl.Item>
                                        <SegmentedControl.Item value="b">B</SegmentedControl.Item>
                                        <SegmentedControl.Item value="c">C</SegmentedControl.Item>
                                    </SegmentedControl.Root>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Switch 开关</Text>
                                    <Flex align="center" gap="3" wrap="wrap">
                                        <Switch defaultChecked />
                                        <Switch color="cyan" defaultChecked />
                                        <Switch color="orange" defaultChecked />
                                        <Text as="label" size="2">
                                            <Flex gap="2" align="center">
                                                <Switch size="2" defaultChecked /> 跟随主题
                                            </Flex>
                                        </Text>
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Input 输入框</Text>
                                    <Flex direction="column" gap="2">
                                        <Input.Root size="1" placeholder="小号输入" />
                                        <Input.Root size="2" placeholder="默认输入" />
                                        <Input.Root color="indigo" variant="soft" placeholder="soft 变体" />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">TextArea 多行</Text>
                                    <Flex direction="column" gap="2">
                                        <TextArea size="1" placeholder="小号多行" rows={2} />
                                        <TextArea size="2" placeholder="默认多行" rows={2} />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Tabs 标签页</Text>
                                    <Tabs.Root defaultValue="1">
                                        <Tabs.List>
                                            <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
                                            <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
                                        </Tabs.List>
                                        <Box pt="2">
                                            <Tabs.Content value="1">
                                                <Text size="2">第一个标签内容，随主题样式。</Text>
                                            </Tabs.Content>
                                            <Tabs.Content value="2">
                                                <Text size="2">第二个标签内容。</Text>
                                            </Tabs.Content>
                                        </Box>
                                    </Tabs.Root>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Card 卡片</Text>
                                    <Card size="2">
                                        <Flex gap="2" align="center">
                                            <Avatar size="2" fallback="U" radius="full" />
                                            <Box>
                                                <Text as="div" size="2" weight="bold">卡片标题</Text>
                                                <Text as="div" size="1" color="gray">副标题随主题</Text>
                                            </Box>
                                        </Flex>
                                    </Card>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Avatar 头像</Text>
                                    <Flex gap="3" align="center" wrap="wrap">
                                        <Avatar size="1" fallback="A" />
                                        <Avatar size="2" fallback="B" />
                                        <Avatar size="3" fallback="C" />
                                        <Avatar size="2" color="cyan" fallback="D" />
                                        <Avatar size="2" color="orange" fallback="E" />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">DropdownMenu 下拉</Text>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="soft">菜单 <DropdownMenu.TriggerIcon /></Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content>
                                            <DropdownMenu.Item shortcut="⌘ E">编辑</DropdownMenu.Item>
                                            <DropdownMenu.Item shortcut="⌘ D">复制</DropdownMenu.Item>
                                            <DropdownMenu.Separator />
                                            <DropdownMenu.Item>更多</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Radio 单选</Text>
                                    <Flex direction="column" gap="2">
                                        <Text as="label" size="2">
                                            <Flex gap="2" align="center">
                                                <Radio name="demo" value="1" defaultChecked /> 选项一
                                            </Flex>
                                        </Text>
                                        <Text as="label" size="2">
                                            <Flex gap="2" align="center">
                                                <Radio name="demo" value="2" /> 选项二
                                            </Flex>
                                        </Text>
                                        <Flex gap="2">
                                            <Radio color="cyan" name="c" value="1" />
                                            <Radio color="orange" name="c" value="2" />
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">Slider 滑块</Text>
                                    <Flex direction="column" gap="3">
                                        <Slider defaultValue={[30]} />
                                        <Slider defaultValue={[60]} color="cyan" />
                                        <Slider defaultValue={[25, 75]} />
                                    </Flex>
                                </Box>
                                <Box className="wp-theme-debug-cell">
                                    <Text as="p" size="2" weight="medium" mb="2">IconButton 图标按钮</Text>
                                    <Flex gap="2" align="center" wrap="wrap">
                                        <IconButton size="1" variant="soft">
                                            <MagnifyingGlassIcon width="14" height="14" />
                                        </IconButton>
                                        <IconButton size="2" variant="soft">
                                            <MagnifyingGlassIcon width="18" height="18" />
                                        </IconButton>
                                        <IconButton color="cyan" variant="soft">
                                            <MagnifyingGlassIcon width="18" height="18" />
                                        </IconButton>
                                        <IconButton color="crimson" variant="solid">
                                            <MagnifyingGlassIcon width="18" height="18" />
                                        </IconButton>
                                    </Flex>
                                </Box>
                            </Grid>
                        </div>
                    </div>

                    <div>
                        <Blockquote size="5">
                            组件示例
                        </Blockquote>
                        <div className="block-section">
                            <ComponentsDemo mode={mode} />
                        </div>
                    </div>
                </Container>
            </div>
        </Theme>
    );
}

export {
    WebPlayground,
}

export type {
    WebPlaygroundProps,
}
