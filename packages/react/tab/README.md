# `react-tab`

Tab 是一个选项卡组件，用于在同一个区域内切换不同内容。

## 安装

```sh
$ yarn add @sea-lion/react-tab
# 或者
$ npm install @sea-lion/react-tab
```

## 基本使用

```jsx
import * as Tabs from "@sea-lion/react-tab";

export default () => (
  <Tabs.Root defaultValue="tab1">
    <Tabs.List>
      <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">选项卡 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <p>选项卡 1 的内容</p>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <p>选项卡 2 的内容</p>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <p>选项卡 3 的内容</p>
    </Tabs.Content>
  </Tabs.Root>
);
```

## 受控组件

```jsx
import * as Tabs from "@sea-lion/react-tab";
import { useState } from "react";

export default () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p>当前激活的选项卡: {activeTab}</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>当前激活的选项卡: {activeTab}</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};
```

## 不同尺寸

Tab.List 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Tabs.List size="1">...</Tabs.List>

// 尺寸 2（默认）
<Tabs.List size="2">...</Tabs.List>

// 尺寸 3（最大）
<Tabs.List size="3">...</Tabs.List>
```

## 自定义颜色

```jsx
// 蓝色（默认）
<Tabs.List color="blue">...</Tabs.List>

// 红色
<Tabs.List color="red">...</Tabs.List>

// 绿色
<Tabs.List color="green">...</Tabs.List>
```

## 高对比度

```jsx
// 启用高对比度模式
<Tabs.List highContrast>...</Tabs.List>
```

## 不同变体

Tab.List 组件支持多种变体样式：

```jsx
// 默认变体
<Tabs.List>...</Tabs.List>

// 带下划线变体
<Tabs.List variant="underline">...</Tabs.List>
```

## 禁用状态

可以禁用特定的选项卡：

```jsx
<Tabs.Trigger value="tab1" disabled>
  禁用的选项卡
</Tabs.Trigger>
```

## 属性

### Tabs.Root 属性

| 参数          | 说明                   | 类型                    | 默认值 | 版本  |
| ------------- | ---------------------- | ----------------------- | ------ | ----- |
| defaultValue  | 默认选中的选项卡       | string                  | -      | 0.2.1 |
| value         | 当前选中的选项卡(受控) | string                  | -      | 0.2.1 |
| onValueChange | 选项卡切换时的回调     | (value: string) => void | -      | 0.2.1 |
| asChild       | 是否将子元素作为根节点 | boolean                 | false  | 0.2.1 |

### Tabs.List 属性

| 参数         | 说明             | 类型                     | 默认值    | 版本  |
| ------------ | ---------------- | ------------------------ | --------- | ----- |
| size         | 尺寸             | '1' \| '2' \| '3'        | '2'       | 0.2.1 |
| color        | 颜色             | string                   | 'blue'    | 0.2.1 |
| highContrast | 是否使用高对比度 | boolean                  | false     | 0.2.1 |
| variant      | 变体样式         | 'surface' \| 'underline' | 'surface' | 0.2.1 |

### Tabs.Trigger 属性

| 参数     | 说明       | 类型    | 默认值 | 版本  |
| -------- | ---------- | ------- | ------ | ----- |
| value    | 选项卡的值 | string  | -      | 0.2.1 |
| disabled | 是否禁用   | boolean | false  | 0.2.1 |

### Tabs.Content 属性

| 参数    | 说明                   | 类型    | 默认值 | 版本  |
| ------- | ---------------------- | ------- | ------ | ----- |
| value   | 对应的选项卡值         | string  | -      | 0.2.1 |
| asChild | 是否将子元素作为根节点 | boolean | false  | 0.2.1 |

所有组件同时支持标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/tabs) 获取完整 API 与设计规范。
