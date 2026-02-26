# `react-box`

Box 是基础的布局容器组件，支持 div/span 渲染及 asChild 等能力。

## 安装

```sh
pnpm add @sea-lion/react-box
# 或者
npm install @sea-lion/react-box
yarn add @sea-lion/react-box
```

## 使用

在代码中引入组件：

```tsx
import { Box } from '@sea-lion/react-box';
```

### 基本用法

```jsx
<Box>块级容器</Box>
<Box as="span">行内容器</Box>
<Box p="4" m="2" style={{ background: '#f0f0f0' }}>带内边距和样式</Box>
```

支持通过 `as` 指定渲染元素，以及 margin、padding、尺寸等布局属性。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
