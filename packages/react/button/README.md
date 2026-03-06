# `react-button`

Button 是按钮组件，提供多种尺寸、变体和颜色选项，支持 loading 状态、禁用状态、块状按钮及 asChild 等能力。

## 安装

```sh
pnpm add @sea-lion/react-button
# 或者
npm install @sea-lion/react-button
yarn add @sea-lion/react-button
```

## 使用

在代码中引入组件：

```tsx
import { Button } from '@sea-lion/react-button';
```

### 基本用法

```jsx
<Button>默认按钮</Button>
<Button variant="solid" color="blue">主要按钮</Button>
<Button variant="outline">线框按钮</Button>
<Button variant="ghost">链接按钮</Button>
```

### 不同变体

Button 支持六种视觉变体：

```jsx
<Flex gap="4" wrap="wrap">
  <Button variant="classic">classic 按钮</Button>
  <Button variant="solid">solid 按钮</Button>
  <Button variant="soft">soft 按钮</Button>
  <Button variant="surface">surface 按钮</Button>
  <Button variant="outline">outline 按钮</Button>
  <Button variant="ghost">ghost 按钮</Button>
</Flex>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`、`"4"`：

```jsx
<Flex gap="4" align="center">
  <Button size="1">size 1</Button>
  <Button size="2">size 2</Button>
  <Button size="3">size 3</Button>
  <Button size="4">size 4</Button>
</Flex>
```

### 不同颜色

通过 `color` 属性设置按钮颜色主题：

```jsx
<Flex gap="4">
  <Button color="blue">blue</Button>
  <Button color="cyan">cyan</Button>
  <Button color="pink">pink</Button>
  <Button color="brown">brown</Button>
  <Button color="red">red</Button>
  <Button color="green">green</Button>
</Flex>
```

### 不同圆角

通过 `radius` 属性控制按钮的圆角样式：

```jsx
<Flex gap="4">
  <Button radius="none">none</Button>
  <Button radius="small">small</Button>
  <Button radius="medium">medium</Button>
  <Button radius="large">large</Button>
  <Button radius="full">full</Button>
</Flex>
```

### 禁用状态

```jsx
<Button disabled>禁用按钮</Button>
<Button variant="outline" disabled>禁用线框按钮</Button>
```

### 加载状态

通过 `loading` 属性展示加载中状态：

```jsx
<Flex gap="4">
  <Button variant="solid" loading>加载中...</Button>
  <Button variant="outline" loading>加载中...</Button>
  <Button variant="ghost" loading>加载中...</Button>
</Flex>
```

### 块状按钮

通过 `block` 属性使按钮撑满父容器宽度：

```jsx
<Button variant="solid" block>全宽按钮</Button>
```

### 高对比度

```jsx
<Flex gap="4">
  <Button highContrast>高对比度</Button>
  <Button highContrast variant="outline">高对比度 outline</Button>
</Flex>
```

### asChild — 渲染为其他元素

通过 `asChild` 属性，可以将 Button 的样式应用到任意子元素（如 `<a>` 链接）：

```jsx
<Button asChild>
  <a href="https://example.com">链接按钮</a>
</Button>
```

### 嵌套主题

Button 会继承最近的 Theme 组件的颜色主题：

```jsx
<Theme accentColor="blue">
  <Flex gap="4">
    <Button>继承蓝色主题</Button>
  </Flex>

  <Theme accentColor="yellow">
    <Flex gap="4">
      <Button>继承黄色主题</Button>
    </Flex>
  </Theme>
</Theme>
```

## Props / API

### Button

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 按钮尺寸 | `"1" \| "2" \| "3" \| "4"` | `"2"` |
| `variant` | 视觉变体 | `"classic" \| "solid" \| "soft" \| "surface" \| "outline" \| "ghost"` | `"solid"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "blue" \| "red" \| "green" \| ...` | - |
| `radius` | 圆角大小 | `"none" \| "small" \| "medium" \| "large" \| "full"` | - |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `loading` | 是否显示加载状态 | `boolean` | `false` |
| `block` | 是否撑满父容器宽度 | `boolean` | `false` |
| `asChild` | 将样式传递给子组件 | `boolean` | `false` |
| `onClick` | 点击事件回调 | `React.MouseEventHandler` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/button) 获取完整 API 与设计规范。
