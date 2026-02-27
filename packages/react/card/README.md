# `react-card`

Card 是一个多功能的容器组件，用于组织和展示内容。支持不同的视觉样式和尺寸，可以用作容器、按钮或链接。

## 安装

```sh
pnpm add @sea-lion/react-card
# 或者
npm install @sea-lion/react-card
yarn add @sea-lion/react-card
```

## 使用

在代码中引入组件：

```tsx
import { Card } from '@sea-lion/react-card';
```

### 基本用法

```jsx
<Card>
  <Text as="div" size="3" weight="bold" mb="2">卡片标题</Text>
  <Text as="div" color="gray">这是一个基础的卡片示例。</Text>
</Card>
```

### 不同尺寸

支持尺寸 `"1"` 至 `"5"`，数字越大内边距越大：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3', '4', '5'].map((size) => (
    <Card key={size} size={size}>
      <Text as="div" size="3" weight="bold" mb="2">Size {size}</Text>
      <Text as="div" color="gray">尺寸 {size} 的卡片示例</Text>
    </Card>
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置卡片的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Card variant="surface">
    <Text as="div" size="3" weight="bold" mb="2">surface 变体</Text>
    <Text as="div" color="gray">带有半透明背景的表面样式</Text>
  </Card>

  <Card variant="classic">
    <Text as="div" size="3" weight="bold" mb="2">classic 变体</Text>
    <Text as="div" color="gray">带有阴影的经典样式</Text>
  </Card>

  <Card variant="ghost">
    <Text as="div" size="3" weight="bold" mb="2">ghost 变体</Text>
    <Text as="div" color="gray">无背景的幽灵样式</Text>
  </Card>
</Flex>
```

### 可交互卡片

通过 `asChild` 将卡片渲染为按钮或链接，使其可交互：

```jsx
<Flex direction="column" gap="4">
  {/* 按钮卡片 */}
  <Card asChild>
    <button onClick={() => alert('按钮卡片被点击')}>
      <Text as="div" size="3" weight="bold" mb="2">按钮卡片</Text>
      <Text as="div" color="gray">点击此卡片会触发事件</Text>
    </button>
  </Card>

  {/* 链接卡片 */}
  <Card asChild>
    <a href="https://example.com">
      <Text as="div" size="3" weight="bold" mb="2">链接卡片</Text>
      <Text as="div" color="gray">这个卡片是一个链接</Text>
    </a>
  </Card>
</Flex>
```

### 图文卡片

卡片常用于展示图文混排的内容：

```jsx
{/* 垂直布局 */}
<Card size="3">
  <Flex direction="column" gap="3">
    <img
      src="https://example.com/image.jpg"
      alt="示例图片"
      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-3)' }}
    />
    <Text as="div" size="5" weight="bold">标题</Text>
    <Text as="div" color="gray" size="2">描述文字</Text>
  </Flex>
</Card>

{/* 水平布局 */}
<Card size="3">
  <Flex gap="4" align="start">
    <img
      src="https://example.com/image.jpg"
      alt="示例图片"
      style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-2)', flexShrink: 0 }}
    />
    <Flex direction="column" gap="2">
      <Text as="div" size="5" weight="bold">标题</Text>
      <Text as="div" color="gray" size="2">描述文字</Text>
    </Flex>
  </Flex>
</Card>
```

### 卡片内嵌套内容

卡片内可以使用其他组件构建复杂内容：

```jsx
<Card size="3">
  <Flex direction="column" gap="4">
    <Text as="div" size="6" weight="bold">内容布局示例</Text>
    <Text as="div" color="gray">
      卡片可以容纳各种类型的内容，包括标题、文本、图片等。
    </Text>
    <Flex gap="4" align="center">
      <Text size="2" color="gray">标签:</Text>
      <Card variant="ghost" size="1">示例标签</Card>
      <Card variant="ghost" size="1">布局演示</Card>
    </Flex>
  </Flex>
</Card>
```

## Props / API

### Card

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 卡片尺寸（影响内边距） | `"1" \| "2" \| "3" \| "4" \| "5"` | `"1"` |
| `variant` | 视觉变体 | `"surface" \| "classic" \| "ghost"` | `"surface"` |
| `asChild` | 是否将样式传递给子组件 | `boolean` | `false` |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 卡片内容 | `React.ReactNode` | - |

> Card 还支持所有标准 HTML `div` 属性。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/card) 获取完整 API 与设计规范。
