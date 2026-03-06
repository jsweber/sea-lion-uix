# `react-avatar`

Avatar 是头像组件，用于展示用户或实体头像，支持图片展示和文字 fallback，提供多种尺寸、变体、颜色和圆角选项。

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
{/* 图片头像 */}
<Avatar
  src="https://example.com/avatar.jpg"
  alt="用户头像"
  fallback="AB"
/>

{/* 文字 Fallback 头像 */}
<Avatar fallback="AB" />
```

### 不同尺寸

支持尺寸 `"1"` 至 `"9"`：

```jsx
<Flex align="center" gap="4">
  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
    <Avatar
      key={size}
      size={size}
      src="https://example.com/avatar.jpg"
      fallback="AB"
      alt="用户头像"
    />
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置头像的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="4">
    <Text size="2" style={{ width: '80px' }}>solid:</Text>
    <Avatar variant="solid" fallback="AB" alt="用户头像" />
    <Avatar variant="solid" src="https://example.com/avatar.jpg" fallback="AB" alt="用户头像" />
  </Flex>

  <Flex align="center" gap="4">
    <Text size="2" style={{ width: '80px' }}>soft:</Text>
    <Avatar variant="soft" fallback="AB" alt="用户头像" />
    <Avatar variant="soft" src="https://example.com/avatar.jpg" fallback="AB" alt="用户头像" />
  </Flex>
</Flex>
```

### 不同颜色

通过 `color` 属性设置 fallback 头像的颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: '80px' }}>{color}:</Text>
      <Avatar color={color} variant="solid" fallback="AB" alt="用户头像" />
      <Avatar color={color} variant="soft" fallback="AB" alt="用户头像" />
    </Flex>
  ))}
</Flex>
```

### 圆角样式

通过 `radius` 属性控制头像的圆角：

```jsx
<Flex gap="4">
  <Avatar radius="none" fallback="AB" alt="用户头像" />
  <Avatar radius="small" fallback="AB" alt="用户头像" />
  <Avatar radius="medium" fallback="AB" alt="用户头像" />
  <Avatar radius="large" fallback="AB" alt="用户头像" />
  <Avatar radius="full" fallback="AB" alt="用户头像" />
</Flex>
```

### Fallback 展示

当图片加载失败时，自动显示 fallback 内容（文字或图标）：

```jsx
{/* 图片加载失败时显示文字 */}
<Avatar
  src="https://broken-url.jpg"
  fallback="AB"
  alt="用户头像"
/>

{/* 不传 src，直接展示 fallback */}
<Avatar size="5" fallback="用户" alt="用户头像" />
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex gap="4">
  <Avatar highContrast variant="solid" fallback="AB" alt="用户头像" />
  <Avatar highContrast variant="soft" fallback="AB" alt="用户头像" />
</Flex>
```

## Props / API

### Avatar

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `src` | 头像图片地址 | `string` | - |
| `alt` | 图片替代文本（无障碍） | `string` | - |
| `fallback` | 图片加载失败时的回退内容 | `React.ReactNode` | - |
| `size` | 头像尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"` |
| `variant` | 视觉变体 | `"solid" \| "soft"` | `"soft"` |
| `radius` | 圆角大小 | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"full"` |
| `color` | 颜色主题（影响 fallback 背景色） | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"gray"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/avatar) 获取完整 API 与设计规范。
