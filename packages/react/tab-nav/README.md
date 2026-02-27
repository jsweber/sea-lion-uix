# `react-tab-nav`

TabNav 是一个导航菜单组件，用于创建导航栏和标签式导航。

## 安装

```sh
$ yarn add @sea-lion/react-tab-nav
# 或者
$ npm install @sea-lion/react-tab-nav
```

## 基本使用

```jsx
import * as TabNav from "@sea-lion/react-tab-nav";

export default () => (
  <TabNav.Root>
    <TabNav.Link href="/">首页</TabNav.Link>
    <TabNav.Link href="/products">产品</TabNav.Link>
    <TabNav.Link href="/docs">文档</TabNav.Link>
    <TabNav.Link href="/about">关于我们</TabNav.Link>
  </TabNav.Root>
);
```

## 激活状态

你可以通过 `active` 属性指定当前激活的链接：

```jsx
<TabNav.Root>
  <TabNav.Link href="/" active>
    首页
  </TabNav.Link>
  <TabNav.Link href="/products">产品</TabNav.Link>
  <TabNav.Link href="/docs">文档</TabNav.Link>
</TabNav.Root>
```

## 不同尺寸

TabNav 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<TabNav.Root size="1">...</TabNav.Root>

// 尺寸 2（默认）
<TabNav.Root size="2">...</TabNav.Root>

// 尺寸 3（最大）
<TabNav.Root size="3">...</TabNav.Root>
```

## 不同变体

TabNav.Root 组件支持多种变体样式：

```jsx
// 默认变体
<TabNav.Root>...</TabNav.Root>

// 带下划线变体
<TabNav.Root variant="underline">...</TabNav.Root>
```

## 自定义颜色

```jsx
// 蓝色（默认）
<TabNav.Root color="blue">...</TabNav.Root>

// 红色
<TabNav.Root color="red">...</TabNav.Root>

// 绿色
<TabNav.Root color="green">...</TabNav.Root>
```

## 高对比度

```jsx
// 启用高对比度模式
<TabNav.Root highContrast>...</TabNav.Root>
```

## 排列方式

可以控制导航项的排列方式：

```jsx
// 从左到右排列（默认）
<TabNav.Root justify="start">...</TabNav.Root>

// 居中排列
<TabNav.Root justify="center">...</TabNav.Root>

// 从右到左排列
<TabNav.Root justify="end">...</TabNav.Root>
```

## 换行处理

当空间不足时，您可以控制项目的换行行为：

```jsx
// 不换行（默认）
<TabNav.Root wrap="nowrap">...</TabNav.Root>

// 允许换行
<TabNav.Root wrap="wrap">...</TabNav.Root>

// 反向换行
<TabNav.Root wrap="wrap-reverse">...</TabNav.Root>
```

## 与路由结合使用

可以与 React Router 等路由库结合使用：

```jsx
import { Link } from "react-router-dom";

<TabNav.Root>
  <TabNav.Link asChild active={location.pathname === "/"}>
    <Link to="/">首页</Link>
  </TabNav.Link>
  <TabNav.Link asChild active={location.pathname === "/products"}>
    <Link to="/products">产品</Link>
  </TabNav.Link>
</TabNav.Root>;
```

## 属性

### TabNav.Root 属性

| 参数         | 说明             | 类型                                 | 默认值    | 版本  |
| ------------ | ---------------- | ------------------------------------ | --------- | ----- |
| size         | 尺寸             | '1' \| '2' \| '3'                    | '2'       | 0.2.0 |
| color        | 颜色             | string                               | 'blue'    | 0.2.0 |
| highContrast | 是否使用高对比度 | boolean                              | false     | 0.2.0 |
| variant      | 变体样式         | 'surface' \| 'underline'             | 'surface' | 0.2.0 |
| wrap         | 换行模式         | 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap'  | 0.2.0 |
| justify      | 对齐方式         | 'start' \| 'center' \| 'end'         | 'start'   | 0.2.0 |

### TabNav.Link 属性

| 参数    | 说明                   | 类型    | 默认值 | 版本  |
| ------- | ---------------------- | ------- | ------ | ----- |
| active  | 是否激活状态           | boolean | false  | 0.2.0 |
| href    | 链接地址               | string  | -      | 0.2.0 |
| asChild | 是否将子元素作为根节点 | boolean | false  | 0.2.0 |

所有组件同时支持标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/tab-nav) 获取完整 API 与设计规范。
