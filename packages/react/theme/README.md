# `react-theme`

Theme 组件是一个提供统一设计系统的主题提供者，用于向应用程序提供颜色、字体、尺寸等设计变量。

## 安装

```sh
pnpm add @sea-lion/react-theme
# 或者
npm install @sea-lion/react-theme
yarn add @sea-lion/react-theme
```

## 使用

在代码中引入组件：

```tsx
import { Theme } from '@sea-lion/react-theme';
```

### 基本用法

```jsx
<Theme appearance="light">
  <App />
</Theme>
<Theme appearance="dark">
  <App />
</Theme>
```

## 何时使用

- 需要在应用程序中应用一致的设计系统时
- 实现主题切换功能（如明暗模式）时
- 需要自定义应用程序视觉风格时

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
