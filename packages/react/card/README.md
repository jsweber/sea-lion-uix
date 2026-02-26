# `react-card`

Card 是一个多功能的容器组件，用于组织和展示内容。支持不同的视觉样式和尺寸，可以用作容器、按钮或链接。

## 安装

```sh
pnpm add @sea-lion/react-card
# 或者
npm install @sea-lion/react-card
yarn add @sea-lion/react-card
```

## 使用

在代码中引入组件：

```tsx
import { Card } from '@sea-lion/react-card';
```

### 基本用法

```jsx
<Card>卡片内容</Card>
<Card variant="surface" size="2">带变体和尺寸</Card>
<Card asChild><a href="/">可点击卡片链接</a></Card>
```

支持尺寸 `"1"` 至 `"5"`，变体 `surface` | `classic` | `ghost`。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
