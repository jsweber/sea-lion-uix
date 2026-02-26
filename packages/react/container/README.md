# `react-container`

Container 是一个用于限制内容最大宽度并在页面中居中内容的组件。

## 安装

```sh
pnpm add @sea-lion/react-container
# 或者
npm install @sea-lion/react-container
yarn add @sea-lion/react-container
```

## 使用

在代码中引入组件：

```tsx
import { Container } from '@sea-lion/react-container';
```

### 基本用法

```jsx
<Container size="3">页面主内容区域</Container>
```

支持 `size` 等属性控制最大宽度。

## 何时使用

- 创建具有标准宽度的页面布局
- 确保长文本内容在大屏幕上保持适当的行长度
- 居中显示内容并保持一致的页边距

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
