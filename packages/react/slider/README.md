# `react-slider`

Slider 是一个滑动输入控件，允许用户在一个范围内选择值。

## 安装

```sh
$ yarn add @sea-lion/react-slider
# 或者
$ npm install @sea-lion/react-slider
```

## 基本使用

```jsx
import { Slider } from "@sea-lion/react-slider";

export default () => (
  <div style={{ width: "300px" }}>
    <Slider defaultValue={[50]} />
  </div>
);
```

## 设置范围

```jsx
// 设置最小值、最大值和步长
<Slider defaultValue={[30]} min={0} max={100} step={10} />

// 使用自定义范围
<Slider defaultValue={[2]} min={-5} max={5} step={1} />
```

## 多个滑块

```jsx
// 使用多个滑块创建一个范围选择器
<Slider defaultValue={[20, 80]} />

// 设置三个或更多滑块
<Slider defaultValue={[10, 50, 90]} />
```

## 垂直方向

```jsx
<div style={{ height: "200px" }}>
  <Slider orientation="vertical" defaultValue={[50]} />
</div>
```

## 不同尺寸

Slider 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Slider size="1" defaultValue={[50]} />

// 尺寸 2（默认）
<Slider size="2" defaultValue={[50]} />

// 尺寸 3（最大）
<Slider size="3" defaultValue={[50]} />
```

## 不同变体

Slider 组件支持多种变体样式：

```jsx
// 经典变体
<Slider variant="classic" defaultValue={[50]} />

// 表面变体（默认）
<Slider variant="surface" defaultValue={[50]} />

// 柔和变体
<Slider variant="soft" defaultValue={[50]} />
```

## 自定义颜色

```jsx
// 蓝色（默认）
<Slider color="blue" defaultValue={[50]} />

// 红色
<Slider color="red" defaultValue={[50]} />

// 绿色
<Slider color="green" defaultValue={[50]} />
```

## 高对比度

```jsx
// 启用高对比度模式
<Slider highContrast defaultValue={[50]} />
```

## 禁用状态

```jsx
// 禁用滑块
<Slider disabled defaultValue={[50]} />
```

## 受控组件

```jsx
import { useState } from "react";

export default () => {
  const [value, setValue] = useState([50]);

  return (
    <Slider value={value} onValueChange={(newValue) => setValue(newValue)} />
  );
};
```

## 属性

| 参数          | 说明               | 类型                             | 默认值       | 版本  |
| ------------- | ------------------ | -------------------------------- | ------------ | ----- |
| size          | 滑块尺寸           | '1' \| '2' \| '3'                | '2'          | 0.2.0 |
| variant       | 滑块变体样式       | 'classic' \| 'surface' \| 'soft' | 'surface'    | 0.2.0 |
| color         | 滑块颜色           | string                           | 'blue'       | 0.2.0 |
| radius        | 圆角大小           | string                           | -            | 0.2.0 |
| highContrast  | 是否使用高对比度   | boolean                          | false        | 0.2.0 |
| min           | 最小值             | number                           | 0            | 0.2.0 |
| max           | 最大值             | number                           | 100          | 0.2.0 |
| step          | 步长               | number                           | 1            | 0.2.0 |
| orientation   | 方向               | 'horizontal' \| 'vertical'       | 'horizontal' | 0.2.0 |
| disabled      | 是否禁用           | boolean                          | false        | 0.2.0 |
| value         | 当前值（受控模式） | number[]                         | -            | 0.2.0 |
| defaultValue  | 默认值             | number[]                         | -            | 0.2.0 |
| onValueChange | 值变化时的回调     | (value: number[]) => void        | -            | 0.2.0 |
| onValueCommit | 值提交时的回调     | (value: number[]) => void        | -            | 0.2.0 |

同时支持所有标准的外边距（margin）属性。

## 查看更多

查看[文档](https://www.radix-ui.com/themes/docs/theme/overview)获取更多信息。
