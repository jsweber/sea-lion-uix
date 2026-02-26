# `react-badge`

Badge 是徽章组件，用于展示标签、计数或状态等短文本。

## 安装

```sh
pnpm add @sea-lion/react-badge
# 或者
npm install @sea-lion/react-badge
yarn add @sea-lion/react-badge
```

## 使用

在代码中引入组件：

```tsx
import { Badge } from '@sea-lion/react-badge';
```

### 基本用法

```jsx
<Badge>标签</Badge>
<Badge variant="solid" color="red">重要</Badge>
<Badge size="2">计数</Badge>
```

### 尺寸与变体

支持尺寸 `"1"` | `"2"` | `"3"`，变体 `solid` | `soft` | `surface` | `outline`。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
