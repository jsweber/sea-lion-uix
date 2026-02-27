# `react-box`

Box 是基础的布局容器组件，支持 div/span 渲染及 asChild 等能力。它是布局系统的基础构建块，提供灵活的显示方式和响应式支持。

## 安装

```sh
pnpm add @sea-lion/react-box
# 或者
npm install @sea-lion/react-box
yarn add @sea-lion/react-box
```

## 使用

在代码中引入组件：

```tsx
import { Box } from '@sea-lion/react-box';
```

### 基本用法

```jsx
<Box>块级容器</Box>
<Box as="span">行内容器</Box>
<Box p="4" m="2" style={{ background: '#f0f0f0' }}>带内边距和样式</Box>
```

### 不同显示方式

通过 `display` 属性控制 Box 的显示方式：

```jsx
<Flex direction="column" gap="4">
  <Box display="block" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    block 块级盒子
  </Box>
  <Box display="inline-block" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    inline-block 行内块
  </Box>
  <Box display="inline" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    inline 行内盒子
  </Box>
</Flex>
```

### 不同 HTML 元素

通过 `as` 属性指定渲染的 HTML 元素：

```jsx
<Box as="div" style={{ padding: '20px', border: '1px solid var(--gray-a6)' }}>
  这是一个 div Box
</Box>
<Text>
  这是一段文字，包含一个
  <Box
    as="span"
    style={{
      padding: '0 8px',
      margin: '0 4px',
      backgroundColor: 'var(--accent-a3)',
      borderRadius: 'var(--radius-1)',
    }}
  >
    span Box
  </Box>
  元素
</Text>
```

### 嵌套布局

Box 可以嵌套使用来构建复杂布局：

```jsx
<Box
  style={{
    padding: '20px',
    border: '1px solid var(--gray-a6)',
    borderRadius: 'var(--radius-3)',
  }}
>
  <Box
    style={{
      padding: '16px',
      backgroundColor: 'var(--accent-a3)',
      borderRadius: 'var(--radius-2)',
      marginBottom: '16px',
    }}
  >
    <Text size="5">标题区域</Text>
  </Box>
  <Box
    style={{
      padding: '16px',
      backgroundColor: 'var(--gray-a3)',
      borderRadius: 'var(--radius-2)',
    }}
  >
    <Text>内容区域</Text>
  </Box>
</Box>
```

### 响应式显示

`display` 属性支持响应式对象，可以在不同断点下设置不同值：

```jsx
<Box
  display={{ initial: 'block', sm: 'inline-block', lg: 'inline' }}
  style={{
    padding: '20px',
    border: '1px solid var(--gray-a6)',
    borderRadius: 'var(--radius-3)',
  }}
>
  <Text>
    这个 Box 会根据屏幕尺寸改变显示方式：
    小屏幕时为 block，中等屏幕时为 inline-block，大屏幕时为 inline
  </Text>
</Box>
```

### asChild 样式传递

通过 `asChild` 属性，将 Box 的样式传递给子组件，使子组件成为实际渲染的元素：

```jsx
<Box
  asChild
  style={{
    padding: '16px',
    backgroundColor: 'var(--accent-a3)',
    border: 'none',
    borderRadius: 'var(--radius-2)',
    cursor: 'pointer',
  }}
>
  <button onClick={() => alert('按钮被点击')}>
    可点击的按钮
  </button>
</Box>
```

## Props / API

### Box

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `as` | 渲染的 HTML 元素 | `"div" \| "span"` | `"div"` |
| `asChild` | 是否将样式传递给子组件 | `boolean` | `false` |
| `display` | 显示方式，支持响应式对象 | `"none" \| "inline" \| "inline-block" \| "block"` | `"block"` |
| `p` | 内边距（Radix 间距标记） | `string` | - |
| `m` | 外边距（Radix 间距标记） | `string` | - |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 子节点 | `React.ReactNode` | - |

> Box 还支持所有标准 HTML `div` / `span` 属性。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/box) 获取完整 API 与设计规范。
