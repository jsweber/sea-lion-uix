# `react-switch`

Switch 是一个开关组件，用于在两种状态间切换。

## 安装

```sh
$ yarn add @sea-lion/react-switch
# 或者
$ npm install @sea-lion/react-switch
```

## 基本使用

```jsx
import { Switch } from "@sea-lion/react-switch";

export default () => (
  <div>
    <Switch />
  </div>
);
```

## 受控组件

```jsx
import { Switch } from "@sea-lion/react-switch";
import { useState } from "react";

export default () => {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onCheckedChange={setChecked} />;
};
```

## 默认选中

```jsx
<Switch defaultChecked />
```

## 不同尺寸

Switch 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Switch size="1" />

// 尺寸 2（默认）
<Switch size="2" />

// 尺寸 3（最大）
<Switch size="3" />
```

## 不同变体

Switch 组件支持多种变体样式：

```jsx
// 经典变体
<Switch variant="classic" />

// 表面变体（默认）
<Switch variant="surface" />

// 柔和变体
<Switch variant="soft" />
```

## 自定义颜色

```jsx
// 蓝色（默认）
<Switch color="blue" />

// 红色
<Switch color="red" />

// 绿色
<Switch color="green" />
```

## 高对比度

```jsx
// 启用高对比度模式
<Switch highContrast />
```

## 禁用状态

```jsx
// 禁用开关
<Switch disabled />
```

## 属性

| 参数            | 说明             | 类型                             | 默认值    | 版本  |
| --------------- | ---------------- | -------------------------------- | --------- | ----- |
| size            | 开关尺寸         | '1' \| '2' \| '3'                | '2'       | 0.2.0 |
| variant         | 开关变体样式     | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0 |
| color           | 开关颜色         | string                           | 'blue'    | 0.2.0 |
| radius          | 圆角大小         | string                           | -         | 0.2.0 |
| highContrast    | 是否使用高对比度 | boolean                          | false     | 0.2.0 |
| checked         | 当前状态（受控） | boolean                          | -         | 0.2.0 |
| defaultChecked  | 默认选中状态     | boolean                          | false     | 0.2.0 |
| onCheckedChange | 状态变化时的回调 | (checked: boolean) => void       | -         | 0.2.0 |
| disabled        | 是否禁用         | boolean                          | false     | 0.2.0 |

同时支持所有标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/switch) 获取完整 API 与设计规范。
