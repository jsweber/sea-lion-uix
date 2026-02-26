# `react-avatar`

Avatar 是头像组件，用于展示用户或实体头像，支持多种尺寸与样式。

## 安装

```sh
pnpm add @sea-lion/react-avatar
# 或者
npm install @sea-lion/react-avatar
yarn add @sea-lion/react-avatar
```

## 使用

在代码中引入组件：

```tsx
import { Avatar } from '@sea-lion/react-avatar';
```

### 基本用法

```jsx
<Avatar src="https://example.com/avatar.jpg" alt="用户头像" />
<Avatar fallback="AB" />
```

### 尺寸与样式

支持尺寸 `"1"` 至 `"9"`，变体 `solid` | `soft`，圆角 `none` | `small` | `medium` | `large` | `full`，以及多种颜色主题。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
