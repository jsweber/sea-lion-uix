# `react-radio-group`

RadioGroup 是一个单选按钮组组件，用于在一组选项中选择一个选项。

## 安装

```sh
pnpm add @sea-lion/react-radio-group
# 或者
npm install @sea-lion/react-radio-group
yarn add @sea-lion/react-radio-group
```

## 使用

在代码中引入组件：

```tsx
import * as RadioGroup from '@sea-lion/react-radio-group';
```

## 何时使用

- 需要在一组互斥选项中选择一个选项时
- 选项数量较少且可以同时显示在界面上
- 需要用户做出明确选择时

## 基本使用

```jsx
import * as RadioGroup from "@sea-lion/react-radio-group";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Item value="option1">选项 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">选项 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">选项 3</RadioGroup.Item>
    </RadioGroup.Root>
  );
};
```

## 不同尺寸

RadioGroup 组件提供了三种尺寸：

```jsx
<RadioGroup.Root size="1">
  <RadioGroup.Item value="small">小尺寸 (size="1")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="2">
  <RadioGroup.Item value="medium">默认尺寸 (size="2")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="3">
  <RadioGroup.Item value="large">大尺寸 (size="3")</RadioGroup.Item>
</RadioGroup.Root>
```

## 不同变体

RadioGroup 组件提供了三种变体样式：

```jsx
<RadioGroup.Root variant="surface">
  <RadioGroup.Item value="surface">surface 变体</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="classic">
  <RadioGroup.Item value="classic">classic 变体</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="soft">
  <RadioGroup.Item value="soft">soft 变体</RadioGroup.Item>
</RadioGroup.Root>
```

## 自定义颜色

```jsx
<RadioGroup.Root color="blue">
  <RadioGroup.Item value="blue">蓝色</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="green">
  <RadioGroup.Item value="green">绿色</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="red">
  <RadioGroup.Item value="red">红色</RadioGroup.Item>
</RadioGroup.Root>
```

## 高对比度模式

```jsx
<RadioGroup.Root highContrast>
  <RadioGroup.Item value="high-contrast">高对比度</RadioGroup.Item>
</RadioGroup.Root>
```

## 禁用状态

```jsx
<RadioGroup.Root>
  <RadioGroup.Item value="enabled">启用状态</RadioGroup.Item>
  <RadioGroup.Item value="disabled" disabled>
    禁用状态
  </RadioGroup.Item>
</RadioGroup.Root>
```

## 自定义布局

RadioGroup 组件默认是垂直布局，但您可以使用样式来创建水平布局：

```jsx
<RadioGroup.Root style={{ flexDirection: "row", gap: "10px" }}>
  <RadioGroup.Item value="option1">选项 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">选项 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">选项 3</RadioGroup.Item>
</RadioGroup.Root>
```

## Root 属性

| 参数          | 说明           | 类型                             | 默认值    | 版本  |
| ------------- | -------------- | -------------------------------- | --------- | ----- |
| size          | 单选按钮尺寸   | '1' \| '2' \| '3'                | '2'       | 0.2.0 |
| variant       | 变体样式       | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0 |
| color         | 颜色           | 标准颜色                         | -         | 0.2.0 |
| highContrast  | 高对比度模式   | boolean                          | false     | 0.2.0 |
| value         | 当前选中的值   | string                           | -         | 0.2.0 |
| defaultValue  | 默认选中的值   | string                           | -         | 0.2.0 |
| onValueChange | 值变化时的回调 | (value: string) => void          | -         | 0.2.0 |

## Item 属性

| 参数     | 说明     | 类型    | 默认值 | 版本  |
| -------- | -------- | ------- | ------ | ----- |
| value    | 选项的值 | string  | -      | 0.2.0 |
| disabled | 是否禁用 | boolean | false  | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
