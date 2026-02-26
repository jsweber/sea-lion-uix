# `react-checkbox`

Checkbox 是一个复选框组件，用于在表单中进行多选操作。支持选中、未选中、半选状态，多种颜色主题和禁用状态。

## 安装

```sh
pnpm add @sea-lion/react-checkbox
# 或者
npm install @sea-lion/react-checkbox
yarn add @sea-lion/react-checkbox
```

## 使用

在代码中引入组件：

```tsx
import { Checkbox } from '@sea-lion/react-checkbox';
```

### 基本用法

```jsx
<Checkbox />
<Checkbox checked={checked} onCheckedChange={setChecked} />
<Checkbox checked="indeterminate" /> // 半选
```

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
