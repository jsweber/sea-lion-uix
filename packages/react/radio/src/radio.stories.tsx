import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';

import { Radio } from '@sea-lion/react-radio';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { RadioPropsComponent } from './radio-props-table';

/**
 * ## 介绍
 *
 * Radio 是一个单选按钮组件，用于在一组选项中选择一个选项。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-radio
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-radio
 * yarn add @sea-lion/react-radio
 * ```
 *
 * ## 何时使用
 *
 * - 用户需要在一组互斥选项中做单选时
 * - 选项数量较少且可见时
 * - 需要立即提交选择结果时
 */
const meta: Meta<typeof Radio> = {
    component: Radio,
    title: '数据录入/Radio',
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
    const [value, setValue] = useState("选项1");

    return (
        <Box>
            <Heading size="3" mb="4">基础用法</Heading>
            <Text mb="3">最基本的单选按钮用法，通常成组出现。</Text>
            <Flex direction="column" gap="3">
                <Flex gap="2" align="center">
                    <Radio
                        value="选项1"
                        checked={value === "选项1"}
                        onValueChange={setValue}
                        name="basic-radio-group"
                    />
                    <Text>选项1</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio
                        value="选项2"
                        checked={value === "选项2"}
                        onValueChange={setValue}
                        name="basic-radio-group"
                    />
                    <Text>选项2</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio
                        value="选项3"
                        checked={value === "选项3"}
                        onValueChange={setValue}
                        name="basic-radio-group"
                    />
                    <Text>选项3</Text>
                </Flex>
            </Flex>
            <Text size="2" mt="2" color="gray">当前选中：{value}</Text>
        </Box>
    );
};

export const Sizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同尺寸</Heading>
            <Text mb="3">Radio 组件提供了三种尺寸可供选择。</Text>
            <Flex direction="column" gap="5">
                <Flex gap="2" align="center">
                    <Radio size="1" value="size-1" defaultChecked name="size-1" />
                    <Text>小尺寸 (size="1")</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio size="2" value="size-2" defaultChecked name="size-2" />
                    <Text>默认尺寸 (size="2")</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio size="3" value="size-3" defaultChecked name="size-3" />
                    <Text>大尺寸 (size="3")</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export const Colors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同颜色</Heading>
            <Text mb="3">Radio 组件可以使用不同的颜色来表达不同的状态或类别。</Text>
            <Flex direction="column" gap="3">
                <Flex gap="2" align="center">
                    <Radio value="default" defaultChecked name="color-1" />
                    <Text>默认颜色</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="blue" color="blue" defaultChecked name="color-2" />
                    <Text>蓝色</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="green" color="green" defaultChecked name="color-3" />
                    <Text>绿色</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="red" color="red" defaultChecked name="color-4" />
                    <Text>红色</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="purple" color="purple" defaultChecked name="color-5" />
                    <Text>紫色</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="orange" color="orange" defaultChecked name="color-6" />
                    <Text>橙色</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export const Disabled = () => {
    return (
        <Box>
            <Heading size="3" mb="4">禁用状态</Heading>
            <Text mb="3">Radio 组件可以设置为禁用状态，表示用户不可交互。</Text>
            <Flex direction="column" gap="4">
                <Flex gap="2" align="center">
                    <Radio value="disabled-1" disabled name="disabled-1" />
                    <Text>禁用状态（未选中）</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="disabled-2" disabled defaultChecked name="disabled-2" />
                    <Text>禁用状态（已选中）</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export const HighContrast = () => {
    return (
        <Box>
            <Heading size="3" mb="4">高对比度</Heading>
            <Text mb="3">Radio 组件可以使用高对比度模式，提高视觉可访问性。</Text>
            <Flex direction="column" gap="3">
                <Flex gap="2" align="center">
                    <Radio value="contrast-1" defaultChecked name="contrast-1" />
                    <Text>普通对比度</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="contrast-2" highContrast defaultChecked name="contrast-2" />
                    <Text>高对比度</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="contrast-3" color="blue" defaultChecked name="contrast-3" />
                    <Text>普通对比度（蓝色）</Text>
                </Flex>
                <Flex gap="2" align="center">
                    <Radio value="contrast-4" color="blue" highContrast defaultChecked name="contrast-4" />
                    <Text>高对比度（蓝色）</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export const RadioGroup = () => {
    const [fruit, setFruit] = useState("apple");
    const [transportation, setTransportation] = useState("car");

    return (
        <Box>
            <Heading size="3" mb="4">分组使用</Heading>
            <Text mb="3">Radio 组件可以通过相同的 name 属性分组，每组只能选择一个选项。</Text>

            <Box mb="6">
                <Heading size="2" mb="2">水果选择</Heading>
                <Flex direction="column" gap="2">
                    <Flex gap="2" align="center">
                        <Radio
                            name="fruits"
                            value="apple"
                            checked={fruit === "apple"}
                            onValueChange={setFruit}
                        />
                        <Text>苹果</Text>
                    </Flex>
                    <Flex gap="2" align="center">
                        <Radio
                            name="fruits"
                            value="banana"
                            checked={fruit === "banana"}
                            onValueChange={setFruit}
                        />
                        <Text>香蕉</Text>
                    </Flex>
                    <Flex gap="2" align="center">
                        <Radio
                            name="fruits"
                            value="orange"
                            checked={fruit === "orange"}
                            onValueChange={setFruit}
                        />
                        <Text>橙子</Text>
                    </Flex>
                </Flex>
                <Text size="2" mt="2" color="gray">当前选择：{fruit === "apple" ? "苹果" : fruit === "banana" ? "香蕉" : "橙子"}</Text>
            </Box>

            <Box>
                <Heading size="2" mb="2">交通工具</Heading>
                <Flex direction="column" gap="2">
                    <Flex gap="2" align="center">
                        <Radio
                            color="blue"
                            name="transportation"
                            value="car"
                            checked={transportation === "car"}
                            onValueChange={setTransportation}
                        />
                        <Text>汽车</Text>
                    </Flex>
                    <Flex gap="2" align="center">
                        <Radio
                            color="blue"
                            name="transportation"
                            value="bus"
                            checked={transportation === "bus"}
                            onValueChange={setTransportation}
                        />
                        <Text>公交车</Text>
                    </Flex>
                    <Flex gap="2" align="center">
                        <Radio
                            color="blue"
                            name="transportation"
                            value="subway"
                            checked={transportation === "subway"}
                            onValueChange={setTransportation}
                        />
                        <Text>地铁</Text>
                    </Flex>
                    <Flex gap="2" align="center">
                        <Radio
                            color="blue"
                            name="transportation"
                            value="bike"
                            checked={transportation === "bike"}
                            onValueChange={setTransportation}
                        />
                        <Text>自行车</Text>
                    </Flex>
                </Flex>
                <Text size="2" mt="2" color="gray">当前选择：
                    {transportation === "car" ? "汽车" :
                        transportation === "bus" ? "公交车" :
                            transportation === "subway" ? "地铁" : "自行车"}
                </Text>
            </Box>
        </Box>
    );
};

export const UseCases = () => {
    const [gender, setGender] = useState("male");
    const [education, setEducation] = useState("bachelor");
    const [preference, setPreference] = useState("option1");

    return (
        <Theme>
            <Box p="5">
                <Heading size="4" mb="5">实用案例</Heading>
                <Flex direction="column" gap="6">

                    {/* 个人信息表单案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">个人信息</Heading>
                        <Flex direction="column" gap="4">
                            <Box>
                                <Text weight="medium" mb="2">性别</Text>
                                <Flex gap="4">
                                    <Flex gap="2" align="center">
                                        <Radio
                                            name="gender"
                                            value="male"
                                            checked={gender === "male"}
                                            onValueChange={setGender}
                                        />
                                        <Text>男</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Radio
                                            name="gender"
                                            value="female"
                                            checked={gender === "female"}
                                            onValueChange={setGender}
                                        />
                                        <Text>女</Text>
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box>
                                <Text weight="medium" mb="2">最高学历</Text>
                                <Flex direction="column" gap="2">
                                    <Flex gap="2" align="center">
                                        <Radio
                                            name="education"
                                            value="highschool"
                                            checked={education === "highschool"}
                                            onValueChange={setEducation}
                                        />
                                        <Text>高中</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Radio
                                            name="education"
                                            value="bachelor"
                                            checked={education === "bachelor"}
                                            onValueChange={setEducation}
                                        />
                                        <Text>本科</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Radio
                                            name="education"
                                            value="master"
                                            checked={education === "master"}
                                            onValueChange={setEducation}
                                        />
                                        <Text>硕士</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Radio
                                            name="education"
                                            value="doctor"
                                            checked={education === "doctor"}
                                            onValueChange={setEducation}
                                        />
                                        <Text>博士</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                        <Text size="2" mt="4" color="gray">个人基本信息收集表单中的单选按钮使用</Text>
                    </Box>

                    {/* 选项卡案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">选项偏好</Heading>
                        <Flex gap="4" mb="4">
                            <Flex gap="2" align="center">
                                <Radio
                                    size="3"
                                    color="purple"
                                    name="preference"
                                    value="option1"
                                    checked={preference === "option1"}
                                    onValueChange={setPreference}
                                />
                                <Text>选项一</Text>
                            </Flex>
                            <Flex gap="2" align="center">
                                <Radio
                                    size="3"
                                    color="purple"
                                    name="preference"
                                    value="option2"
                                    checked={preference === "option2"}
                                    onValueChange={setPreference}
                                />
                                <Text>选项二</Text>
                            </Flex>
                            <Flex gap="2" align="center">
                                <Radio
                                    size="3"
                                    color="purple"
                                    name="preference"
                                    value="option3"
                                    checked={preference === "option3"}
                                    onValueChange={setPreference}
                                />
                                <Text>选项三</Text>
                            </Flex>
                        </Flex>
                        <Box p="3" style={{ background: 'var(--gray-2)', borderRadius: '4px' }}>
                            <Text>
                                {preference === "option1" ? "这是选项一的内容。您选择了选项一。" :
                                    preference === "option2" ? "这是选项二的内容。您选择了选项二。" :
                                        "这是选项三的内容。您选择了选项三。"}
                            </Text>
                        </Box>
                        <Text size="2" mt="4" color="gray">使用单选按钮实现简单的选项卡功能</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const RadioAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Radio API</div>
                <RadioPropsComponent />
            </div>
        </Theme>
    );
};

RadioAPI.storyName = '组件 API';
