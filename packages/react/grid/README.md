# `react-grid`

Grid 是一个基于 CSS Grid 布局的容器组件，用于创建灵活的二维布局，能够同时控制行和列。

## 安装

```sh
$ yarn add @sea-lion/react-grid
# 或者
$ npm install @sea-lion/react-grid
```

## 基本使用

```jsx
import { Grid } from "@sea-lion/react-grid";
import { Box } from "@sea-lion/react-box";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Grid columns="3" gap="4">
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>项目 1</Text>
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>项目 2</Text>
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>项目 3</Text>
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>项目 4</Text>
    </Box>
  </Grid>
);
```

## 网格布局

Grid 组件支持所有主要的 CSS Grid 布局选项：

```jsx
// 基础网格，3列等宽
<Grid columns="3" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
  <Box>项目 3</Box>
</Grid>

// 自定义列宽
<Grid columns="100px 1fr 2fr" gap="3">
  <Box>固定宽度</Box>
  <Box>1份空间</Box>
  <Box>2份空间</Box>
</Grid>

// 使用网格区域
<Grid
  areas={`"header header"
          "sidebar content"
          "footer footer"`}
  columns="200px 1fr"
  rows="auto 1fr auto"
  gap="3"
>
  <Box style={{ gridArea: 'header' }}>头部</Box>
  <Box style={{ gridArea: 'sidebar' }}>侧边栏</Box>
  <Box style={{ gridArea: 'content' }}>内容区域</Box>
  <Box style={{ gridArea: 'footer' }}>底部</Box>
</Grid>

// 响应式网格
<Grid
  columns={{ base: '1', md: '2', lg: '3' }}
  gap={{ base: '2', md: '4' }}
>
  <Box>在小屏幕上单列，中等屏幕上两列，大屏幕上三列显示</Box>
  <Box>带有不同的间距</Box>
</Grid>
```

## 属性

### Grid

| 参数    | 说明                           | 类型                                                          | 默认值    | 版本  |
| ------- | ------------------------------ | ------------------------------------------------------------- | --------- | ----- |
| as      | 要渲染的 HTML 元素             | 'div' \| 'span'                                               | 'div'     | 0.2.0 |
| asChild | 是否将组件作为子元素传递       | boolean                                                       | false     | 0.2.0 |
| display | CSS display 属性               | 'none' \| 'inline-grid' \| 'grid'                             | 'grid'    | 0.2.0 |
| areas   | CSS grid-template-areas 属性   | string                                                        | -         | 0.2.0 |
| columns | CSS grid-template-columns 属性 | '1' - '9' \| string                                           | -         | 0.2.0 |
| rows    | CSS grid-template-rows 属性    | '1' - '9' \| string                                           | -         | 0.2.0 |
| flow    | CSS grid-auto-flow 属性        | 'row' \| 'column' \| 'dense' \| 'row-dense' \| 'column-dense' | -         | 0.2.0 |
| align   | CSS align-items 属性           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'       | 'stretch' | 0.2.0 |
| justify | CSS justify-content 属性       | 'start' \| 'center' \| 'end' \| 'between'                     | 'start'   | 0.2.0 |
| gap     | 子元素之间的间距               | '1' - '9'                                                     | -         | 0.2.0 |

Grid 组件还支持所有标准的 margin 和 layout 属性，如`m`、`mt`、`width`、`height`等。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
