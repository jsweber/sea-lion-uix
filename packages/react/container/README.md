# `react-container`

Container 是一个用于限制内容最大宽度并在页面中居中内容的组件。它是构建标准页面布局的基础，确保内容在各种屏幕尺寸下保持适当的宽度和可读性。

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
<Container size="3">
  <Text>页面主内容区域</Text>
</Container>
```

## 何时使用

- 创建具有标准宽度的页面布局
- 确保长文本内容在大屏幕上保持适当的行长度
- 居中显示内容并保持一致的页边距

### 不同尺寸

Container 支持四种预设尺寸，对应不同的最大宽度：

```jsx
<Flex direction="column" gap="4">
  {/* 尺寸 1 — 最大宽度 448px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 1 (448px)</Text>
    <Container size="1" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 1 的容器，最大宽度为 448px。</Text>
      </Box>
    </Container>
  </Box>

  {/* 尺寸 2 — 最大宽度 688px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 2 (688px)</Text>
    <Container size="2" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 2 的容器，最大宽度为 688px。</Text>
      </Box>
    </Container>
  </Box>

  {/* 尺寸 3 — 最大宽度 880px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 3 (880px)</Text>
    <Container size="3" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 3 的容器，最大宽度为 880px。</Text>
      </Box>
    </Container>
  </Box>

  {/* 尺寸 4 — 最大宽度 1136px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 4 (1136px)</Text>
    <Container size="4" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 4 的容器，最大宽度为 1136px。</Text>
      </Box>
    </Container>
  </Box>
</Flex>
```

### 对齐方式

通过 `align` 属性控制容器内容的水平对齐：

```jsx
{/* 左对齐 */}
<Container size="3" align="left" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>左对齐的内容</Text>
  </Box>
</Container>

{/* 居中对齐（默认） */}
<Container size="3" align="center" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>居中对齐的内容</Text>
  </Box>
</Container>

{/* 右对齐 */}
<Container size="3" align="right" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>右对齐的内容</Text>
  </Box>
</Container>
```

### 响应式容器

`size` 属性支持响应式对象，可以在不同断点下使用不同的尺寸：

```jsx
<Container
  size={{ sm: '1', md: '2', lg: '3', xl: '4' }}
  style={{ backgroundColor: 'var(--gray-a3)' }}
>
  <Box p="4">
    <Text>
      这个容器在不同的断点使用不同的尺寸：
      小屏幕 (sm) — 448px；
      中等屏幕 (md) — 688px；
      大屏幕 (lg) — 880px；
      超大屏幕 (xl) — 1136px
    </Text>
  </Box>
</Container>
```

### 在布局中使用

Container 与 Flex、Box 等组件配合，构建完整的页面布局：

```jsx
<Container size="3">
  <Box p="4">
    <Heading size="5" mb="4">页面标题</Heading>
    <Text as="p" mb="4">
      Container 组件可以用来创建标准的页面布局，限制内容宽度并确保其在各种屏幕尺寸下的可读性。
    </Text>
    <Flex gap="4" wrap="wrap">
      <Box style={{ flex: '1 1 200px', backgroundColor: 'var(--blue-a3)' }} p="4">
        <Text weight="bold" mb="2">侧边栏</Text>
        <Text size="2">这里可以放置导航或相关内容。</Text>
      </Box>
      <Box style={{ flex: '2 1 400px', backgroundColor: 'var(--blue-a2)' }} p="4">
        <Text weight="bold" mb="2">主要内容</Text>
        <Text size="2">在这个区域放置页面的主要内容。</Text>
      </Box>
    </Flex>
  </Box>
</Container>
```

## 尺寸对照表

| size | 最大宽度 |
|------|----------|
| `"1"` | 448px |
| `"2"` | 688px |
| `"3"` | 880px |
| `"4"` | 1136px |

## Props / API

### Container

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 容器尺寸（限制最大宽度），支持响应式对象 | `"1" \| "2" \| "3" \| "4"` | - |
| `align` | 内容的水平对齐方式 | `"left" \| "center" \| "right"` | `"center"` |
| `display` | 显示模式 | `"none" \| "initial"` | `"initial"` |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 容器内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/container) 获取完整 API 与设计规范。
