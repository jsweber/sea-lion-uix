# `react-checkbox-cards`

CheckboxCards 是一个卡片式复选框组件，用于在网格布局中进行多选操作，结合了卡片的视觉效果和复选框的功能。

主要特点：

- 支持三种尺寸：1、2、3
- 提供两种视觉变体：surface、classic
- 支持网格布局与高对比度模式

## 安装

```sh
pnpm add @sea-lion/react-checkbox-cards
# 或者
npm install @sea-lion/react-checkbox-cards
yarn add @sea-lion/react-checkbox-cards
```

## 使用

在代码中引入组件：

```tsx
import * as CheckboxCards from '@sea-lion/react-checkbox-cards';
```

### 基本用法

```jsx
<CheckboxCards.Root>
  <CheckboxCards.Item value="a">选项 A</CheckboxCards.Item>
  <CheckboxCards.Item value="b">选项 B</CheckboxCards.Item>
</CheckboxCards.Root>
```

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
