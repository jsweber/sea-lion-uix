# `react-theme`

Theme 组件是一个提供统一设计系统的主题提供者，用于向应用程序提供颜色、字体、尺寸等设计变量。将应用内容包裹在 `<Theme>` 中，即可统一应用设计令牌，并支持明暗模式切换和局部主题覆盖。

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

将整个应用或某个页面包裹在 `<Theme>` 中，提供统一的设计令牌：

```jsx
<Theme>
  <App />
</Theme>
```

### 明暗主题

通过 `appearance` 属性在明亮和暗黑主题之间切换：

```jsx
{/* 明亮主题 */}
<Theme appearance="light">
  <App />
</Theme>

{/* 暗黑主题 */}
<Theme appearance="dark">
  <App />
</Theme>
```

### 强调色

通过 `accentColor` 设置全局强调色，影响按钮、链接、选中状态等元素：

```jsx
<Theme accentColor="blue">
  <App />
</Theme>

<Theme accentColor="purple">
  <App />
</Theme>

<Theme accentColor="green">
  <App />
</Theme>
```

可用强调色：`blue`、`red`、`green`、`purple`、`orange`、`gray` 等。

### 灰度色

通过 `grayColor` 调整全局灰度调色板，影响边框、背景、辅助文字等：

```jsx
<Theme grayColor="gray">
  <App />
</Theme>

<Theme grayColor="slate">
  <App />
</Theme>

<Theme grayColor="mauve">
  <App />
</Theme>
```

### 圆角样式

通过 `radius` 设置全局圆角风格：

```jsx
<Theme radius="none">
  <App />
</Theme>

<Theme radius="small">
  <App />
</Theme>

<Theme radius="medium">
  <App />
</Theme>

<Theme radius="large">
  <App />
</Theme>

<Theme radius="full">
  <App />
</Theme>
```

### 全局缩放比例

通过 `scaling` 统一调整所有组件的字体和间距比例：

```jsx
<Theme scaling="90%">
  <App />
</Theme>

<Theme scaling="100%">
  <App />
</Theme>

<Theme scaling="110%">
  <App />
</Theme>
```

### 嵌套主题

`Theme` 支持嵌套使用，子 `Theme` 会覆盖父 `Theme` 的属性，实现局部主题：

```jsx
<Theme appearance="light" accentColor="blue">
  {/* 此处使用全局蓝色主题 */}
  <Button>蓝色按钮</Button>

  <Theme accentColor="red">
    {/* 此处仅强调色被覆盖为红色 */}
    <Button>红色按钮</Button>
  </Theme>

  <Theme accentColor="green">
    {/* 此处强调色被覆盖为绿色 */}
    <Button>绿色按钮</Button>
  </Theme>
</Theme>
```

### 组合配置

可以同时设置多个属性，创建完整的视觉风格：

```jsx
<Theme
  appearance="dark"
  accentColor="purple"
  grayColor="mauve"
  radius="large"
  scaling="100%"
>
  <App />
</Theme>
```

### 实用示例：页面级主题

```jsx
import { Theme } from '@sea-lion/react-theme';

function App() {
  return (
    <Theme appearance="light" accentColor="blue" radius="medium">
      <main>
        {/* 整个应用自动应用统一的设计令牌 */}
        <Header />
        <Content />
        <Footer />
      </main>
    </Theme>
  );
}
```

## 何时使用

- 需要在应用程序中应用一致的设计系统时
- 实现主题切换功能（如明暗模式）时
- 需要自定义应用程序视觉风格时
- 需要对局部区域应用不同主题（通过嵌套 Theme）时

## Props / API 属性

### Theme

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `appearance` | 主题外观（明暗模式） | `"light" \| "dark"` | `"light"` |
| `accentColor` | 全局强调色 | `"blue" \| "red" \| "green" \| "purple" \| "orange" \| "gray" \| ...` | `"blue"` |
| `grayColor` | 全局灰度色调 | `"gray" \| "slate" \| "mauve"` | `"gray"` |
| `radius` | 全局圆角样式 | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"medium"` |
| `scaling` | 全局缩放比例 | `"90%" \| "95%" \| "100%" \| "105%" \| "110%"` | `"100%"` |
| `children` | 子节点内容 | `React.ReactNode` | — |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/theme/overview) 获取完整 API 与设计规范。
