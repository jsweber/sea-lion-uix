# `react-select`

Select 是一个下拉选择组件，允许用户从预定义的选项列表中选择一个值。组件支持选项分组、禁用选项和自定义占位符。

## 安装

```sh
$ yarn add @sea-lion/react-select
# 或者
$ npm install @sea-lion/react-select
```

## 基本使用

```jsx
import * as Select from "@sea-lion/react-select";

export default () => {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">苹果</Select.Item>
        <Select.Item value="orange">橙子</Select.Item>
        <Select.Item value="grape">葡萄</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## 尺寸

Select 组件支持三种尺寸：

```jsx
// 小尺寸
<Select.Root size="1">
  {/* 子项 */}
</Select.Root>

// 中等尺寸（默认）
<Select.Root size="2">
  {/* 子项 */}
</Select.Root>

// 大尺寸
<Select.Root size="3">
  {/* 子项 */}
</Select.Root>
```

## 触发器变体

Select.Trigger 组件支持四种视觉变体：

```jsx
// Surface 变体（默认）
<Select.Trigger variant="surface" />

// Classic 变体
<Select.Trigger variant="classic" />

// Soft 变体
<Select.Trigger variant="soft" />

// Ghost 变体
<Select.Trigger variant="ghost" />
```

## 内容变体

Select.Content 组件支持两种视觉变体：

```jsx
// Solid 变体（默认）
<Select.Content variant="solid" />

// Soft 变体
<Select.Content variant="soft" />
```

## 选项分组

您可以使用 Group 和 Label 组件将选项分组：

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.Label>水果</Select.Label>
      <Select.Item value="apple">苹果</Select.Item>
      <Select.Item value="orange">橙子</Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.Label>蔬菜</Select.Label>
      <Select.Item value="carrot">胡萝卜</Select.Item>
      <Select.Item value="potato">土豆</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

## 占位符

```jsx
<Select.Root>
  <Select.Trigger placeholder="请选择..." />
  <Select.Content>{/* 选项 */}</Select.Content>
</Select.Root>
```

## 禁用选项

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="apple">苹果</Select.Item>
    <Select.Item value="orange">橙子</Select.Item>
    <Select.Item value="grape" disabled>
      葡萄
    </Select.Item>
  </Select.Content>
</Select.Root>
```

## 受控模式

```jsx
import * as Select from "@sea-lion/react-select";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("apple");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">苹果</Select.Item>
        <Select.Item value="orange">橙子</Select.Item>
        <Select.Item value="grape">葡萄</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## 属性

### Root 属性

| 参数          | 说明                 | 类型                    | 默认值 | 版本  |
| ------------- | -------------------- | ----------------------- | ------ | ----- |
| size          | 组件大小             | '1' \| '2' \| '3'       | '2'    | 0.2.4 |
| value         | 当前选中值           | string                  | -      | 0.2.4 |
| defaultValue  | 默认选中值           | string                  | -      | 0.2.4 |
| onValueChange | 值变化回调函数       | (value: string) => void | -      | 0.2.4 |
| open          | 控制下拉菜单是否打开 | boolean                 | -      | 0.2.4 |
| defaultOpen   | 默认下拉菜单是否打开 | boolean                 | -      | 0.2.4 |
| onOpenChange  | 打开状态变化回调     | (open: boolean) => void | -      | 0.2.4 |
| disabled      | 是否禁用             | boolean                 | false  | 0.2.4 |

### Trigger 属性

| 参数        | 说明       | 类型                                               | 默认值    | 版本  |
| ----------- | ---------- | -------------------------------------------------- | --------- | ----- |
| variant     | 视觉变体   | 'classic' \| 'surface' \| 'soft' \| 'ghost'        | 'surface' | 0.2.4 |
| color       | 颜色       | string                                             | -         | 0.2.4 |
| radius      | 圆角大小   | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.4 |
| placeholder | 占位符文本 | string                                             | -         | 0.2.4 |

### Content 属性

| 参数         | 说明         | 类型              | 默认值  | 版本  |
| ------------ | ------------ | ----------------- | ------- | ----- |
| variant      | 视觉变体     | 'solid' \| 'soft' | 'solid' | 0.2.4 |
| color        | 颜色         | string            | -       | 0.2.4 |
| highContrast | 是否高对比度 | boolean           | false   | 0.2.4 |

### Item 属性

| 参数     | 说明     | 类型    | 默认值 | 版本  |
| -------- | -------- | ------- | ------ | ----- |
| value    | 选项值   | string  | -      | 0.2.4 |
| disabled | 是否禁用 | boolean | false  | 0.2.4 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/select) 获取完整 API 与设计规范。
