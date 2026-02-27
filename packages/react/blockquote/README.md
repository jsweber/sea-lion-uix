# `react-blockquote`

Blockquote 是引用块组件，用于展示引用内容，支持多种尺寸、字重、颜色与文本换行控制。

## 安装

```sh
pnpm add @sea-lion/react-blockquote
# 或者
npm install @sea-lion/react-blockquote
yarn add @sea-lion/react-blockquote
```

## 使用

在代码中引入组件：

```tsx
import { Blockquote } from '@sea-lion/react-blockquote';
```

### 基本用法

```jsx
<Blockquote>道可道，非常道。名可名，非常名。</Blockquote>
<Blockquote size="3" color="blue">带尺寸和颜色的引用</Blockquote>
```

### 不同尺寸

支持尺寸 `"1"` 至 `"9"`，尺寸越大文字越大：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
    <Blockquote key={size} size={size}>
      道可道，非常道。名可名，非常名。
    </Blockquote>
  ))}
</Flex>
```

### 不同字重

通过 `weight` 属性设置字体粗细：

```jsx
<Flex direction="column" gap="4">
  <Blockquote weight="light">light — 道可道，非常道。</Blockquote>
  <Blockquote weight="regular">regular — 道可道，非常道。</Blockquote>
  <Blockquote weight="medium">medium — 道可道，非常道。</Blockquote>
  <Blockquote weight="bold">bold — 道可道，非常道。</Blockquote>
</Flex>
```

### 不同颜色

通过 `color` 属性设置引用块的颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Blockquote key={color} color={color}>
      道可道，非常道。名可名，非常名。
    </Blockquote>
  ))}
</Flex>
```

### 文本换行控制

通过 `truncate` 和 `wrap` 属性控制文本换行行为：

```jsx
<div style={{ width: '400px' }}>
  {/* 默认换行 */}
  <Blockquote>
    人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。
  </Blockquote>

  {/* 单行省略 */}
  <Blockquote truncate>
    人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。
  </Blockquote>

  {/* 禁止换行 */}
  <Blockquote wrap="nowrap">
    人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。
  </Blockquote>
</div>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Blockquote key={color} color={color} highContrast>
      道可道，非常道。名可名，非常名。
    </Blockquote>
  ))}
</Flex>
```

## Props / API

### Blockquote

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 文字尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"` |
| `weight` | 字体粗细 | `"light" \| "regular" \| "medium" \| "bold"` | `"regular"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"gray"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `truncate` | 是否单行省略 | `boolean` | `false` |
| `wrap` | 文本换行方式 | `"wrap" \| "nowrap" \| "balance" \| "pretty"` | - |
| `children` | 引用内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/blockquote) 获取完整 API 与设计规范。
