# `react-code`

Code 是一个用于展示代码片段的组件，提供了多种风格和尺寸选项，使代码内容与上下文区分、更加醒目。

## 安装

```sh
pnpm add @sea-lion/react-code
# 或者
npm install @sea-lion/react-code
yarn add @sea-lion/react-code
```

## 使用

在代码中引入组件：

```tsx
import { Code } from '@sea-lion/react-code';
```

### 基本用法

在文本中嵌入代码片段：

```jsx
<Text as="p" size="3">
  在React组件中，使用 <Code>useState</Code> 钩子可以创建状态变量。
</Text>
```

### 不同尺寸

支持尺寸 `"1"` 至 `"9"`：

```jsx
<Flex direction="column" gap="4">
  <Code size="1">npm install @sea-lion/react-code</Code>
  <Code size="2">npm install @sea-lion/react-code</Code>
  <Code size="3">npm install @sea-lion/react-code</Code>
  <Code size="4">npm install @sea-lion/react-code</Code>
  <Code size="5">npm install @sea-lion/react-code</Code>
</Flex>
```

### 不同变体

通过 `variant` 属性设置代码片段的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Code variant="soft">{"import { useState } from 'react';"}</Code>
  <Code variant="solid">{"import { useState } from 'react';"}</Code>
  <Code variant="outline">{"import { useState } from 'react';"}</Code>
  <Code variant="ghost">{"import { useState } from 'react';"}</Code>
</Flex>
```

### 不同颜色

通过 `color` 属性设置代码颜色：

```jsx
<Flex direction="column" gap="4">
  <Code color="blue">{"const Component = () => {};"}</Code>
  <Code color="crimson">{"const Component = () => {};"}</Code>
  <Code color="green">{"const Component = () => {};"}</Code>
  <Code color="orange">{"const Component = () => {};"}</Code>
</Flex>
```

### 字重

通过 `weight` 属性控制代码字体粗细：

```jsx
<Flex direction="column" gap="4">
  <Code weight="light">const data = [1, 2, 3, 4];</Code>
  <Code weight="regular">const data = [1, 2, 3, 4];</Code>
  <Code weight="medium">const data = [1, 2, 3, 4];</Code>
  <Code weight="bold">const data = [1, 2, 3, 4];</Code>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex direction="column" gap="4">
  <Code color="blue" variant="soft">{"function example() { return true; }"}</Code>
  <Code color="blue" variant="soft" highContrast>{"function example() { return true; }"}</Code>
</Flex>
```

### 文本截断与换行

通过 `truncate` 和 `textWrap` 属性控制代码的显示方式：

```jsx
<div style={{ width: '300px' }}>
  {/* 文本截断（单行省略） */}
  <Code truncate>{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>

  {/* 不换行 */}
  <div style={{ overflow: 'auto' }}>
    <Code textWrap="nowrap">{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>
  </div>

  {/* 平衡换行 */}
  <Code textWrap="balance">{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>
</div>
```

### 在上下文中使用

Code 组件常用于文档和教程中的代码标注：

```jsx
<Box>
  <Text as="p" size="3">
    在React组件中，使用 <Code>useState</Code> 钩子可以创建状态变量。例如：
  </Text>
  <Box mt="2" p="3" style={{ backgroundColor: 'var(--gray-3)' }}>
    <Code variant="ghost">
      const [count, setCount] = useState(0);
    </Code>
  </Box>
  <Text as="p" size="3" mt="2">
    然后可以通过 <Code>setCount</Code> 更新状态值，并使用 <Code>count</Code> 在渲染中读取状态值。
  </Text>
</Box>
```

## 何时使用

- 在文本中展示代码片段或命令
- 需要突出显示技术名称或变量
- 在文档或教程中标记代码语法
- 展示配置项、参数名称或技术术语

## Props / API

### Code

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 代码字体尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"2"` |
| `variant` | 视觉变体 | `"solid" \| "soft" \| "outline" \| "ghost"` | `"soft"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| ...` | `"blue"` |
| `weight` | 字体粗细 | `"light" \| "regular" \| "medium" \| "bold"` | `"regular"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `truncate` | 是否单行省略 | `boolean` | `false` |
| `textWrap` | 文本换行方式 | `"wrap" \| "nowrap" \| "balance" \| "pretty"` | - |
| `children` | 代码内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/code) 获取完整 API 与设计规范。
