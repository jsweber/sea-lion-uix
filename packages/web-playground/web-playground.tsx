import { FC, useState } from 'react';
import { FaceIcon, SunIcon, StarIcon, HeartIcon, MoonIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { ThemePanel } from '@ui-lib-monorepo-template/react-theme-panel';
import { Theme } from '@ui-lib-monorepo-template/react-theme';
import { Flex } from '@ui-lib-monorepo-template/react-flex';
import { Avatar } from '@ui-lib-monorepo-template/react-avatar';
import { Badge } from '@ui-lib-monorepo-template/react-badge';
import { Box } from '@ui-lib-monorepo-template/react-box';
import { Button } from '@ui-lib-monorepo-template/react-button';
import { Blockquote } from '@ui-lib-monorepo-template/react-blockquote';
import { Container } from '@ui-lib-monorepo-template/react-container';
import { Code } from '@ui-lib-monorepo-template/react-code';
import { Card } from '@ui-lib-monorepo-template/react-card';
import { Grid } from '@ui-lib-monorepo-template/react-grid';
import { Checkbox } from '@ui-lib-monorepo-template/react-checkbox';
import { Heading } from '@ui-lib-monorepo-template/react-heading';
import { Text } from '@ui-lib-monorepo-template/react-text';
import * as Table from '@ui-lib-monorepo-template/react-table';
import * as Tabs from '@ui-lib-monorepo-template/react-tab';
import { ComponentsDemo } from './components-demo';

import AntdImage from './images/antd.jpg';
import ArcoImage from './images/arco.jpg';
import shadeImage from './images/shadecn.jpg';
import radixImage from './images/radix.jpg';
import varleftImage from './images/varleft.jpg';
import logoImage from './images/logo.svg';

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
                        <Heading>Sea-lion-uix</Heading>

                        <Flex gap="3" justify="center" className="wp-bage-wrapper">
                            <Badge color="orange">单一组件安装</Badge>
                            <Badge color="blue">Theme & headless</Badge>
                            <Badge color="green">提供主题编辑器</Badge>
                            <Badge color="sky">组件易于修改</Badge>
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
                            <Text as="p">
                                <Badge color="amber"><SunIcon /></Badge><strong>Sea-lion-uix</strong>是sea-lion-ui的下一个版本，由于基于Radix/primitives无样式组件库进行重构，
                                所以新版本在原名后增加“x”，以下简称x。
                            </Text>
                            <Text as="p">
                                <Badge color="yellow"><StarIcon /></Badge><strong>在组件数量上</strong>，力求在有限的开发时间内提供更多的组件，组件数量从一代的19个增加到目前的40+（<i>截止2024.12月为41</i>）。
                            </Text>
                            <Text as="p">
                                <Badge color="red"><HeartIcon /></Badge><strong>在全局功能上</strong>，x在使用上会更灵活，组件支持无样式和有样式两种使用模式，并且每个组件对使用开放更多参数，尽量避免产生难以更改的情况。
                            </Text>
                            <Text as="p">
                                <Badge color="bronze"><FaceIcon /></Badge><strong>每个组件都是独立的包</strong>，在使用时避免和其他组件库同时使用产生大量冗余代码，在开发和维护时可以进行单独的升级和发布。
                            </Text>
                            <Text as="p">
                                <Badge color="sky"><MoonIcon /></Badge><strong>在组件自定义上有天然优势</strong>，基于Radix优秀的样式系统和无头组件思想，大量使用where作为css选择器，在React层面选择把状态交给开发者。
                            </Text>
                            <Text as="p">
                                <Badge color="sky"><MoonIcon /></Badge><strong>在规范和技术栈上和团队习惯保持一致</strong>，选择Less+css自定义属性开发样式系统，并集成eslint-config-ali和iconfont。
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
                                        <Table.ColumnHeaderCell>单独安装组件</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>theme</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>headless</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>覆盖场景</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>组价修改难度</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell><Badge color="gold" size="3">综合评分</Badge></Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={AntdImage} alt="antd-logo" className="wp-ui-logo" />
                                        </Table.RowHeaderCell>
                                        <Table.Cell>
                                            <Checkbox defaultChecked />
                                        </Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell>全面</Table.Cell>
                                        <Table.Cell>困难</Table.Cell>
                                        <Table.Cell>6</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={ArcoImage} alt="Arco-logo" className="wp-ui-logo" />
                                        </Table.RowHeaderCell>

                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell>全面</Table.Cell>
                                        <Table.Cell>困难</Table.Cell>
                                        <Table.Cell>6</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={varleftImage} alt="varleft-logo" className="wp-ui-logo" />

                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell>较好</Table.Cell>
                                        <Table.Cell>一般</Table.Cell>
                                        <Table.Cell>6</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <img src={radixImage} alt="radix-logo" className="wp-ui-logo" />
                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell>一般</Table.Cell>
                                        <Table.Cell>容易</Table.Cell>
                                        <Table.Cell>6</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            Sea-lion-uix
                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell>一般</Table.Cell>
                                        <Table.Cell>容易</Table.Cell>
                                        <Table.Cell>6</Table.Cell>
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
                                    x目前不支持全量安装，仅支持按需安装，即选择自己需要的组件安装，
                                    例如安装Button组件：<Code variant="soft">pnpm install @sealion/react-button</Code>
                                </div>
                                <div>
                                    x目前支持带主题和headless两种模式，当使用theme组件时直接使用Button组件是没有样式的，
                                </div>
                                <div>
                                    安装theme组件：<Code variant="soft">pnpm install @sealion/react-theme</Code>
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
    WebPlayground
}

export type {
    WebPlaygroundProps
}
