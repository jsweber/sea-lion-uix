import { FC } from 'react';
import { Box } from '@sea-lion/react-box';
import * as Tabs from '@sea-lion/react-tab';
import { Flex } from '@sea-lion/react-flex';
import { Avatar } from '@sea-lion/react-avatar';
import { Button } from '@sea-lion/react-button';
import * as DropdownMenu from '@sea-lion/react-dropdown-menu';
import { Text } from '@sea-lion/react-text';
import { Card } from '@sea-lion/react-card';
import { Inset } from '@sea-lion/react-inset';
import { Checkbox } from '@sea-lion/react-checkbox';
import { Switch } from '@sea-lion/react-switch';
import { TextArea } from '@sea-lion/react-text-area';

import AvatarImage from './images/avatar.jpg';
import NazaImage from './images/naza.jpg';

interface ComponentsDemoProps {
    mode?: 'development' | 'production';
}

const ComponentsDemo: FC<ComponentsDemoProps> = ({ mode }) => {


    return (
        <>
            <div className="wp-comp-section">
                <Tabs.Root defaultValue="1">
                    <Tabs.List>
                        <Tabs.Trigger value="1">不同尺寸的头像</Tabs.Trigger>
                        <Tabs.Trigger value="2">不同颜色主题的头像</Tabs.Trigger>
                        <Tabs.Trigger value="3">不同圆角的头像</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="1">
                            <Flex gap="20px">
                                <Avatar
                                    size="1"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="2"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="3"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="4"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="5"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="6"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="7"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                                <Avatar
                                    size="8"
                                    src={AvatarImage}
                                    fallback="A"
                                />
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="2">
                            <Flex gap="20px">
                                <Avatar variant="solid" color="indigo" fallback="A" />
                                <Avatar variant="solid" color="cyan" fallback="A" />
                                <Avatar variant="solid" color="orange" fallback="A" />
                                <Avatar variant="solid" color="crimson" fallback="A" />
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="3">
                            <Flex gap="20px">
                                <Avatar radius="none" fallback="A" />
                                <Avatar radius="large" fallback="A" />
                                <Avatar radius="full" fallback="A" />
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </div>
            <div className="wp-comp-section">
                <Tabs.Root defaultValue="1">
                    <Tabs.List>
                        <Tabs.Trigger value="1">不同尺寸的按钮</Tabs.Trigger>
                        <Tabs.Trigger value="2">不同尺寸的按钮</Tabs.Trigger>
                        <Tabs.Trigger value="3">不同圆角的按钮</Tabs.Trigger>
                        <Tabs.Trigger value="4">disabled按钮</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="1">
                            <Flex gap="20px">
                                <Button size="1" color="pink">size 1</Button>
                                <Button size="2">size 2</Button>
                                <Button size="3">size 3</Button>
                                <Button size="4">size 4</Button>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="2">
                            <Flex gap="20px">
                                <Button>default</Button>
                                <Button color="cyan">cyan</Button>
                                <Button color="pink">pink</Button>
                                <Button color="brown">brown</Button>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="3">
                            <Flex gap="20px">
                                <Button radius="none" size="2">none</Button>
                                <Button radius="small" size="2">small</Button>
                                <Button radius="medium" size="2">medium</Button>
                                <Button radius="large" size="2">large</Button>
                                <Button radius="full" size="2">full</Button>
                            </Flex>
                        </Tabs.Content>
                        <Tabs.Content value="4">
                            <Flex gap="20px">
                                <Button disabled onClick={() => { alert('click'); }}>disabled</Button>
                                <Button disabled variant="classic">
                                    disabled classic
                                </Button>
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </div>
            <div className="wp-comp-section">
                <div className="wp-comp-section-title">
                    <Text>Card 使用</Text>
                </div>
                <Flex gap="5" align="center" >
                    <Box maxWidth="240px">
                        <Card>
                            <Flex gap="3" align="center">
                                <Avatar
                                    size="3"
                                    src={NazaImage}
                                    radius="full"
                                    fallback="T"
                                />
                                <Box>
                                    <Text as="div" size="2" weight="bold">
                                        哪吒
                                    </Text>
                                    <Text as="div" size="2" color="gray">
                                        一个狠人
                                    </Text>
                                </Box>
                            </Flex>
                        </Card>
                    </Box>
                    <Box maxWidth="240px">
                        <Card size="2">
                            <Inset clip="padding-box" side="top" pb="current">
                                <img
                                    src={NazaImage}
                                    alt="Bold typography"
                                    style={{
                                        display: "block",
                                        objectFit: "cover",
                                        width: "100%",
                                        height: 140,
                                        backgroundColor: "var(--gray-5)",
                                    }}
                                />
                            </Inset>
                            <Text as="p" size="3">
                                <strong>哪吒</strong> 生性善良，行侠仗义，见义勇为。
                                他勇敢善良，真诚友好，热心快肠，重情重义，爱恨分明，顽强正义。
                                同时，他也具有不屈不挠的精神，面对邪恶势力时毫不畏惧，坚决斗争.
                            </Text>
                        </Card>
                    </Box>
                </Flex>
            </div>
            <div className="wp-comp-section">
                <Tabs.Root defaultValue="1">
                    <Tabs.List>
                        <Tabs.Trigger value="1">不同颜色的Switch</Tabs.Trigger>
                        <Tabs.Trigger value="2">不同圆角的Switch</Tabs.Trigger>
                        <Tabs.Trigger value="3">Switch & Text</Tabs.Trigger>
                        <Tabs.Trigger value="4">disabled Switch</Tabs.Trigger>
                        <Tabs.Trigger value="5">不同大小的Switch</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="1">
                            <Flex align="center" gap="2">
                                <Switch color="indigo" defaultChecked />
                                <Switch color="indigo" defaultChecked highContrast />
                                <Switch color="cyan" defaultChecked />
                                <Switch color="cyan" defaultChecked highContrast />
                                <Switch color="orange" defaultChecked />
                                <Switch color="orange" defaultChecked highContrast />
                                <Switch color="crimson" defaultChecked />
                                <Switch color="crimson" defaultChecked highContrast />
                                <Switch color="gray" defaultChecked />
                                <Switch color="gray" defaultChecked highContrast />
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="2">
                            <Flex gap="20px">
                                <Switch radius="none" defaultChecked />
                                <Switch radius="small" defaultChecked />
                                <Switch radius="full" defaultChecked />
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="3">
                            <Flex gap="20px">
                                <Text as="label" size="2">
                                    <Flex gap="2">
                                        <Switch size="1" defaultChecked /> Sync settings
                                    </Flex>
                                </Text>

                                <Text as="label" size="3">
                                    <Flex gap="2">
                                        <Switch size="2" defaultChecked /> Sync settings
                                    </Flex>
                                </Text>

                                <Text as="label" size="4">
                                    <Flex gap="2">
                                        <Switch size="3" defaultChecked /> Sync settings
                                    </Flex>
                                </Text>
                            </Flex>
                        </Tabs.Content>
                        <Tabs.Content value="4">
                            <Flex gap="20px">
                                <Text as="label" size="2">
                                    <Flex gap="2">
                                        <Switch size="1" />
                                        Off
                                    </Flex>
                                </Text>

                                <Text as="label" size="2">
                                    <Flex gap="2">
                                        <Switch size="1" defaultChecked />
                                        On
                                    </Flex>
                                </Text>

                                <Text as="label" size="2" color="gray">
                                    <Flex gap="2">
                                        <Switch size="1" disabled />
                                        On
                                    </Flex>
                                </Text>

                                <Text as="label" size="2" color="gray">
                                    <Flex gap="2">
                                        <Switch size="1" disabled defaultChecked />
                                        Off
                                    </Flex>
                                </Text>
                            </Flex>
                        </Tabs.Content>
                        <Tabs.Content value="5">
                            <Flex gap="20px">
                                <Switch size="1" defaultChecked />
                                <Switch size="2" defaultChecked />
                                <Switch size="3" defaultChecked />
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </div>
            <div className="wp-comp-section">
                <Tabs.Root defaultValue="1">
                    <Tabs.List>
                        <Tabs.Trigger value="1">不同尺寸的Checkbox&Text</Tabs.Trigger>
                        <Tabs.Trigger value="2">不同风格的Checkbox</Tabs.Trigger>
                        <Tabs.Trigger value="3">不同颜色的Checkbox</Tabs.Trigger>
                        <Tabs.Trigger value="4">不同尺寸的Checkbox</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="1">
                            <Flex direction="column" gap="3">
                                <Text as="label" size="2">
                                    <Flex as="span" gap="2">
                                        <Checkbox size="1" defaultChecked /> Agree to Terms and Conditions
                                    </Flex>
                                </Text>

                                <Text as="label" size="3">
                                    <Flex as="span" gap="2">
                                        <Checkbox size="2" defaultChecked /> Agree to Terms and Conditions
                                    </Flex>
                                </Text>

                                <Text as="label" size="4">
                                    <Flex as="span" gap="2">
                                        <Checkbox size="3" defaultChecked /> Agree to Terms and Conditions
                                    </Flex>
                                </Text>
                            </Flex>
                        </Tabs.Content>


                        <Tabs.Content value="2">
                            <Flex align="center" gap="4">
                                <Flex gap="2">
                                    <Checkbox variant="surface" defaultChecked />
                                    <Checkbox variant="surface" />
                                </Flex>

                                <Flex gap="2">
                                    <Checkbox variant="classic" defaultChecked />
                                    <Checkbox variant="classic" />
                                </Flex>

                                <Flex gap="2">
                                    <Checkbox variant="soft" defaultChecked />
                                    <Checkbox variant="soft" />
                                </Flex>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="3">
                            <Flex gap="2">
                                <Checkbox color="indigo" defaultChecked />
                                <Checkbox color="cyan" defaultChecked />
                                <Checkbox color="orange" defaultChecked />
                                <Checkbox color="crimson" defaultChecked />
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="4">
                            <Flex align="center" gap="2">
                                <Checkbox size="1" defaultChecked />
                                <Checkbox size="2" defaultChecked />
                                <Checkbox size="3" defaultChecked />
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </div>
            <div className="wp-comp-section">
                <div className="wp-comp-section-title">
                    <Text>Dropdown Menu 使用</Text>
                </div>
                <Flex gap="3" align="center" >
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft">
                                嵌套使用
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                                <DropdownMenu.SubContent>
                                    <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Sub>

                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Share</DropdownMenu.Item>
                            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                                Delete
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="indigo">
                                indigo color
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft" color="indigo">
                            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="cyan">
                                cyan color
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft" color="cyan">
                            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="orange">
                                orange color
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft" color="orange">
                            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="crimson">
                                crimson color
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft" color="crimson">
                            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </div>
            <div className="wp-comp-section">
                <Tabs.Root defaultValue="1">
                    <Tabs.List>
                        <Tabs.Trigger value="1">不同大小的Switch</Tabs.Trigger>
                        <Tabs.Trigger value="2">不同颜色的TextArea</Tabs.Trigger>
                        <Tabs.Trigger value="3">不同圆角的TextArea</Tabs.Trigger>
                        <Tabs.Trigger value="4">可拖拽大小的TextArea</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="1">
                            <Flex direction="column" gap="3">
                                <Box maxWidth="200px">
                                    <TextArea size="1" placeholder="Reply to comment…" />
                                </Box>
                                <Box maxWidth="250px">
                                    <TextArea size="2" placeholder="Reply to comment…" />
                                </Box>
                                <Box maxWidth="300px">
                                    <TextArea size="3" placeholder="Reply to comment…" />
                                </Box>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="2">
                            <Flex direction="column" gap="3" maxWidth="250px">
                                <TextArea color="blue" variant="soft" placeholder="Reply to comment…" />
                                <TextArea color="green" variant="soft" placeholder="Reply to comment…" />
                                <TextArea color="red" variant="soft" placeholder="Reply to comment…" />
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="3">
                            <Flex direction="column" gap="3" maxWidth="250px">
                                <TextArea radius="none" placeholder="Search the docs…" />
                                <TextArea radius="large" placeholder="Search the docs…" />
                                <TextArea radius="full" placeholder="Search the docs…" />
                            </Flex>
                        </Tabs.Content>
                        <Tabs.Content value="4">
                            <Flex direction="column" gap="3" maxWidth="250px">
                                <TextArea resize="none" placeholder="Search the docs…" />
                                <TextArea resize="vertical" placeholder="Search the docs…" />
                                <TextArea resize="horizontal" placeholder="Search the docs…" />
                                <TextArea resize="both" placeholder="Search the docs…" />
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </div>
        </>
    );
}

export {
    ComponentsDemo
}

export type {
    ComponentsDemoProps
}
