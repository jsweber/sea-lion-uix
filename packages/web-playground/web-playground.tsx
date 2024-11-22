import { FC, useState } from 'react';
import { FaceIcon, SunIcon, StarIcon, HeartIcon, MoonIcon, MagicWandIcon, RocketIcon } from "@radix-ui/react-icons";
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
import { ComponentsDemo } from './components-demo';
import { App } from './v0-dev/preview';
import { TextArea } from '@sea-lion/react-text-area';

import AntdImage from './images/antd.jpg';
import ArcoImage from './images/arco.jpg';
import radixImage from './images/radix.jpg';
import varleftImage from './images/varleft.jpg';
import v0Image from './images/v0.jpg';

import "./index.less";

console.log(App);

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
                            <Badge color="orange">独立组件包</Badge>
                            <Badge color="blue">Theme & headless</Badge>
                            <Badge color="green">Theme面板</Badge>
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
                            <Text as="p" className="wp-descr-item">
                                <Badge color="amber"><SunIcon /></Badge><strong>Sea-lion-uix</strong>是sea-lion-ui的下一个版本，由于基于<Code color="gray" variant="soft">Radix/primitives</Code>无样式组件库进行重构，
                                所以新版本在原名后增加“x”，以下简称 <strong>x</strong>。
                            </Text>
                            <Text as="p" className="wp-descr-item">
                                <Badge color="yellow"><StarIcon /></Badge><strong>在组件数量上</strong>，力求在有限的开发时间内提供更多的组件，组件数量从一代的19个增加到 <strong>40</strong>（<i>截止2024.11月末为33</i>）。
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
                                            Sea-lion-uix
                                        </Table.RowHeaderCell>
                                        <Table.Cell><Checkbox /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
                                        <Table.Cell>一般</Table.Cell>
                                        <Table.Cell>容易</Table.Cell>
                                        <Table.Cell>4</Table.Cell>
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
                            组件示例
                        </Blockquote>
                        <div className="block-section">
                            <ComponentsDemo mode={mode} />
                        </div>
                    </div>
                    <div style={{
                        height: 300,
                        paddingBottom: 100
                    }}>
                        <Heading align="center">V0.dev</Heading>
                        <Container>
                            <App />
                            <TextArea rows={30} value={
                                `
    <div className="cascader-container">
      <h2 className="cascader-title">Cascader Component</h2>
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger className="cascader-trigger">
          {selectedOptions.length > 0
            ? selectedOptions.map(opt => opt.label).join(' > ')
            : 'Select options'}
          <ChevronDownIcon />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="cascader-content" sideOffset={5}>
            {renderLevels().map((levelOptions, index) => (
              <div key={index} className="cascader-level">
                {levelOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSelect(option, index)}
                  >
                    {option.label}
                    {option.children && <ChevronRightIcon />}
                  </div>
                ))}
              </div>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
                                `
                            } />
                            <img src={v0Image} width="100%" />
                        </Container>
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
