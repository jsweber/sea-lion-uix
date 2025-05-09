# `react-segmented-control`

SegmentedControl 是一个分段控制器组件，用于在一组相关选项中进行单选。它提供了一个可视化的指示器，显示当前选中的选项。

## 安装

```sh
$ yarn add @sea-lion/react-segmented-control
# 或者
$ npm install @sea-lion/react-segmented-control
```

## 基本使用

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";

export default () => {
  return (
    <SegmentedControl.Root defaultValue="daily">
      <SegmentedControl.Item value="daily">每日</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">每周</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">每月</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## 尺寸

SegmentedControl 组件支持三种尺寸，控制控件的大小：

```jsx
// 小尺寸
<SegmentedControl.Root size="1">
  {/* 子项 */}
</SegmentedControl.Root>

// 中等尺寸（默认）
<SegmentedControl.Root size="2">
  {/* 子项 */}
</SegmentedControl.Root>

// 大尺寸
<SegmentedControl.Root size="3">
  {/* 子项 */}
</SegmentedControl.Root>
```

## 变体

SegmentedControl 组件提供两种视觉变体：

```jsx
// Surface 变体（默认）
<SegmentedControl.Root variant="surface">
  {/* 子项 */}
</SegmentedControl.Root>

// Classic 变体
<SegmentedControl.Root variant="classic">
  {/* 子项 */}
</SegmentedControl.Root>
```

## 圆角

使用 `radius` 属性控制组件的圆角程度：

```jsx
<SegmentedControl.Root radius="none">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="small">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="medium">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="large">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="full">
  {/* 子项 */}
</SegmentedControl.Root>
```

## 受控模式

SegmentedControl 可以作为受控组件使用，通过 `value` 和 `onValueChange` 属性：

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("daily");

  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="daily">每日</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">每周</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">每月</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## 属性

### Root 属性

| 参数          | 说明           | 类型                                               | 默认值    | 版本  |
| ------------- | -------------- | -------------------------------------------------- | --------- | ----- |
| size          | 控件大小       | '1' \| '2' \| '3'                                  | '2'       | 0.2.0 |
| variant       | 视觉变体       | 'surface' \| 'classic'                             | 'surface' | 0.2.0 |
| radius        | 圆角大小       | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0 |
| value         | 当前选中值     | string                                             | -         | 0.2.0 |
| defaultValue  | 默认选中值     | string                                             | -         | 0.2.0 |
| onValueChange | 值变化回调函数 | (value: string) => void                            | -         | 0.2.0 |

### Item 属性

| 参数  | 说明     | 类型   | 默认值 | 版本  |
| ----- | -------- | ------ | ------ | ----- |
| value | 选项的值 | string | -      | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
