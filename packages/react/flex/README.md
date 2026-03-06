# `react-flex`

Flex 是一个基于 CSS flexbox 布局的容器组件，用于创建灵活的一维布局，无论是行还是列。

## 安装

```sh
pnpm add @sea-lion/react-flex
# 或者
npm install @sea-lion/react-flex
yarn add @sea-lion/react-flex
```

## 使用

在代码中引入组件：

```tsx
import { Flex } from '@sea-lion/react-flex';
```

## 基本使用

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Flex direction="row" align="center" justify="between" gap="4">
    <Text>项目 1</Text>
    <Text>项目 2</Text>
    <Text>项目 3</Text>
  </Flex>
);
```

## 排列方向

Flex 组件支持四种排列方向：

```jsx
{/* 水平排列（默认） */}
<Flex direction="row" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
  <Box>项目 3</Box>
</Flex>

{/* 垂直排列 */}
<Flex direction="column" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>

{/* 水平反向排列 */}
<Flex direction="row-reverse" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>

{/* 垂直反向排列 */}
<Flex direction="column-reverse" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>
```

## 对齐方式

```jsx
{/* 水平对齐（justify） */}
<Flex justify="start" gap="3">{/* 默认，左对齐 */}</Flex>
<Flex justify="center" gap="3">{/* 居中对齐 */}</Flex>
<Flex justify="end" gap="3">{/* 右对齐 */}</Flex>
<Flex justify="between" gap="3">{/* 两端对齐 */}</Flex>

{/* 垂直对齐（align） */}
<Flex align="start" gap="3">{/* 顶部对齐 */}</Flex>
<Flex align="center" gap="3">{/* 垂直居中 */}</Flex>
<Flex align="end" gap="3">{/* 底部对齐 */}</Flex>
<Flex align="baseline" gap="3">{/* 基线对齐 */}</Flex>
<Flex align="stretch" gap="3">{/* 拉伸对齐 */}</Flex>
```

## 间距

Flex 支持 1-9 级间距：

```jsx
<Flex gap="1">{/* 最小间距 */}</Flex>
<Flex gap="3">{/* 小间距 */}</Flex>
<Flex gap="5">{/* 中等间距 */}</Flex>
<Flex gap="9">{/* 最大间距 */}</Flex>
```

## 换行

```jsx
{/* 不换行（默认） */}
<Flex wrap="nowrap" gap="3">
  {/* 超出宽度时会溢出 */}
</Flex>

{/* 自动换行 */}
<Flex wrap="wrap" gap="3">
  {/* 超出宽度时自动换行 */}
</Flex>

{/* 反向换行 */}
<Flex wrap="wrap-reverse" gap="3">
  {/* 超出宽度时反向换行 */}
</Flex>
```

## 响应式布局

```jsx
{/* 在小屏幕上垂直排列，在中等屏幕上水平排列 */}
<Flex
  direction={{ initial: 'column', md: 'row' }}
  gap={{ initial: '2', md: '4' }}
>
  <Box>在小屏幕上垂直排列，在中等屏幕上水平排列</Box>
  <Box>带有不同的间距</Box>
</Flex>
```

## 实用场景

### 导航栏

```jsx
<Flex justify="between" align="center" style={{ padding: '16px', backgroundColor: 'var(--gray-3)' }}>
  <Text size="5" weight="bold">网站名称</Text>
  <Flex gap="4">
    <Button variant="soft">首页</Button>
    <Button variant="soft">产品</Button>
    <Button variant="soft">关于我们</Button>
    <Button>联系我们</Button>
  </Flex>
</Flex>
```

### 卡片布局

```jsx
<Flex gap="4" wrap="wrap">
  {cards.map((card, i) => (
    <Box key={i} style={{ flex: '1 1 200px', padding: '16px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Text size="3" weight="bold" mb="2">{card.title}</Text>
      <Text size="2">{card.description}</Text>
    </Box>
  ))}
</Flex>
```

## 属性

### Flex

| 参数      | 说明                     | 类型                                                    | 默认值   |
| --------- | ------------------------ | ------------------------------------------------------- | -------- |
| as        | 要渲染的 HTML 元素       | 'div' \| 'span'                                         | 'div'    |
| asChild   | 是否将组件作为子元素传递 | boolean                                                 | false    |
| display   | CSS display 属性         | 'none' \| 'inline-flex' \| 'flex'                       | 'flex'   |
| direction | CSS flex-direction 属性  | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'  | 'row'    |
| align     | CSS align-items 属性     | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch' | 'start'  |
| justify   | CSS justify-content 属性 | 'start' \| 'center' \| 'end' \| 'between'               | 'start'  |
| wrap      | CSS flex-wrap 属性       | 'nowrap' \| 'wrap' \| 'wrap-reverse'                    | 'nowrap' |
| gap       | 子元素之间的间距         | '1' - '9'                                               | -        |

Flex 组件还支持所有标准的 margin 和 layout 属性，如`m`、`mt`、`width`、`height`等。

## 何时使用

- 创建水平或垂直方向的布局结构
- 需要灵活分配空间的用户界面
- 对齐和分布子元素
- 构建响应式布局
- 实现导航栏、工具栏等基础 UI 组件


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/flex) 获取完整 API 与设计规范。
