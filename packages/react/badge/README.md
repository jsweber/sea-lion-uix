# `react-badge`

Badge 是徽章组件，用于展示标签、计数或状态等短文本。支持多种尺寸、变体、颜色和圆角选项，适用于通知计数、功能标签、版本信息、在线状态等场景。

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
<Badge>新功能</Badge>
<Badge variant="solid" color="red">重要</Badge>
<Badge size="2" color="blue">Beta</Badge>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`：

```jsx
<Flex align="center" gap="4">
  <Badge size="1">Size 1</Badge>
  <Badge size="2">Size 2</Badge>
  <Badge size="3">Size 3</Badge>
</Flex>
```

### 不同变体

通过 `variant` 属性设置徽章的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Badge variant="solid">solid — 实心填充</Badge>
  <Badge variant="soft">soft — 柔和背景</Badge>
  <Badge variant="surface">surface — 半透明面型</Badge>
  <Badge variant="outline">outline — 描边样式</Badge>
</Flex>
```

### 不同颜色

通过 `color` 属性设置徽章颜色，各变体均支持多种颜色：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: '80px' }}>{color}:</Text>
      <Badge color={color} variant="solid">{color}</Badge>
      <Badge color={color} variant="soft">{color}</Badge>
      <Badge color={color} variant="surface">{color}</Badge>
      <Badge color={color} variant="outline">{color}</Badge>
    </Flex>
  ))}
</Flex>
```

### 圆角样式

通过 `radius` 属性控制徽章的圆角：

```jsx
<Flex gap="4">
  <Badge radius="none">none</Badge>
  <Badge radius="small">small</Badge>
  <Badge radius="medium">medium</Badge>
  <Badge radius="large">large</Badge>
  <Badge radius="full">full</Badge>
</Flex>
```

### 常见用例

徽章常用于通知计数、功能标签和状态标识：

```jsx
<Flex direction="column" gap="4">
  {/* 消息通知计数 */}
  <Flex align="center" gap="2">
    <Text>消息通知</Text>
    <Badge color="red" size="1">99+</Badge>
  </Flex>

  {/* 功能标签 */}
  <Flex align="center" gap="2">
    <Text>功能标签</Text>
    <Badge color="blue" variant="soft">Beta</Badge>
  </Flex>

  {/* 在线状态 */}
  <Flex align="center" gap="2">
    <Text>状态标识</Text>
    <Badge color="green" variant="surface">在线</Badge>
    <Badge color="gray" variant="surface">离线</Badge>
  </Flex>

  {/* 版本信息 */}
  <Flex align="center" gap="2">
    <Text>版本信息</Text>
    <Badge color="gold" variant="outline">v2.0.0</Badge>
  </Flex>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex gap="4">
  <Badge highContrast variant="solid">高对比实心</Badge>
  <Badge highContrast variant="soft">高对比柔和</Badge>
  <Badge highContrast variant="surface">高对比面型</Badge>
  <Badge highContrast variant="outline">高对比描边</Badge>
</Flex>
```

## Props / API

### Badge

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 徽章尺寸 | `"1" \| "2" \| "3"` | `"1"` |
| `variant` | 视觉变体 | `"solid" \| "soft" \| "surface" \| "outline"` | `"soft"` |
| `radius` | 圆角大小 | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"full"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | - |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `children` | 徽章内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/badge) 获取完整 API 与设计规范。
