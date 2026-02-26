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

## 灵活的布局

Flex 组件支持所有主要的 flexbox 布局选项：

```jsx
// 垂直排列
<Flex direction="column" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>

// 水平居中对齐
<Flex justify="center" align="center">
  <Box>居中内容</Box>
</Flex>

// 两端对齐
<Flex justify="between">
  <Box>左侧</Box>
  <Box>右侧</Box>
</Flex>

// 响应式布局
<Flex
  direction={{ base: 'column', md: 'row' }}
  gap={{ base: '2', md: '4' }}
>
  <Box>在小屏幕上垂直排列，在中等屏幕上水平排列</Box>
  <Box>带有不同的间距</Box>
</Flex>
```

## 属性

### Flex

| 参数      | 说明                     | 类型                                                    | 默认值   | 版本  |
| --------- | ------------------------ | ------------------------------------------------------- | -------- | ----- |
| as        | 要渲染的 HTML 元素       | 'div' \| 'span'                                         | 'div'    | 0.2.0 |
| asChild   | 是否将组件作为子元素传递 | boolean                                                 | false    | 0.2.0 |
| display   | CSS display 属性         | 'none' \| 'inline-flex' \| 'flex'                       | 'flex'   | 0.2.0 |
| direction | CSS flex-direction 属性  | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'  | 'row'    | 0.2.0 |
| align     | CSS align-items 属性     | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch' | 'start'  | 0.2.0 |
| justify   | CSS justify-content 属性 | 'start' \| 'center' \| 'end' \| 'between'               | 'start'  | 0.2.0 |
| wrap      | CSS flex-wrap 属性       | 'nowrap' \| 'wrap' \| 'wrap-reverse'                    | 'nowrap' | 0.2.0 |
| gap       | 子元素之间的间距         | '1' - '9'                                               | -        | 0.2.0 |

Flex 组件还支持所有标准的 margin 和 layout 属性，如`m`、`mt`、`width`、`height`等。

## 何时使用

- 创建水平或垂直方向的布局结构
- 需要灵活分配空间的用户界面
- 对齐和分布子元素
- 构建响应式布局
- 实现导航栏、工具栏等基础 UI 组件

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
