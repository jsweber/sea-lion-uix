# `react-callout`

Callout 是一个用于展示重要信息、提示、警告等内容的组件。包含图标和文本，支持不同的视觉样式、尺寸和颜色主题。

主要特点：

- 支持三种尺寸：1、2、3
- 提供三种视觉变体：soft、surface、outline
- 可自定义颜色主题，支持高对比度模式
- 包含 Icon 和 Text 两个子组件

## 安装

```sh
pnpm add @sea-lion/react-callout
# 或者
npm install @sea-lion/react-callout
yarn add @sea-lion/react-callout
```

## 使用

在代码中引入组件：

```tsx
import * as Callout from '@sea-lion/react-callout';
```

### 基本用法

```jsx
<Callout.Root size="2" variant="soft">
  <Callout.Icon />
  <Callout.Text>这是一条提示信息。</Callout.Text>
</Callout.Root>
```

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
