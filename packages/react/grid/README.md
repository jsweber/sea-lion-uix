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

export default () => (
  <Grid columns="3" gap="4">
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 1</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 2</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 3</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 4</Box>
  </Grid>
);
```

## 列数与间距

Grid 支持 1-9 的等宽列数设置，并支持多级间距：

```jsx
{/* 两列网格，小间距 */}
<Grid columns="2" gap="2">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Grid>

{/* 三列网格，中等间距 */}
<Grid columns="3" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
  <Box>项目 3</Box>
</Grid>

{/* 四列网格，较大间距 */}
<Grid columns="4" gap="4">
  {items.map((item, i) => <Box key={i}>{item}</Box>)}
</Grid>
```

## 自定义列宽

使用 CSS grid-template-columns 语法设置自定义列宽：

```jsx
{/* 固定宽度与弹性宽度混合 */}
<Grid columns="200px 1fr 1fr" gap="3">
  <Box>固定宽度 (200px)</Box>
  <Box>弹性宽度 (1fr)</Box>
  <Box>弹性宽度 (1fr)</Box>
</Grid>

{/* 不同比例的弹性宽度 */}
<Grid columns="1fr 2fr 1fr" gap="3">
  <Box>1 份</Box>
  <Box>2 份</Box>
  <Box>1 份</Box>
</Grid>

{/* 最小最大宽度限制 */}
<Grid columns="minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr)" gap="3">
  <Box>最小 100px，最大 1fr</Box>
  <Box>最小 200px，最大 2fr</Box>
  <Box>最小 100px，最大 1fr</Box>
</Grid>
```

## 网格区域布局

使用 `areas` 属性创建具名网格区域，实现复杂的页面布局：

```jsx
<Grid
  areas={`"header header header"
          "sidebar content content"
          "sidebar footer footer"`}
  columns="200px 1fr 1fr"
  rows="auto 1fr auto"
  gap="3"
  style={{ height: '400px' }}
>
  <Box style={{ gridArea: 'header', backgroundColor: 'var(--blue-5)', padding: '16px', borderRadius: '6px' }}>页头</Box>
  <Box style={{ gridArea: 'sidebar', backgroundColor: 'var(--purple-5)', padding: '16px', borderRadius: '6px' }}>侧边栏</Box>
  <Box style={{ gridArea: 'content', backgroundColor: 'var(--green-5)', padding: '16px', borderRadius: '6px' }}>内容区域</Box>
  <Box style={{ gridArea: 'footer', backgroundColor: 'var(--amber-5)', padding: '16px', borderRadius: '6px' }}>页脚</Box>
</Grid>
```

## 对齐方式

```jsx
{/* 顶部对齐（默认） */}
<Grid columns="3" gap="3" align="start" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>项目 {n}</Box>)}
</Grid>

{/* 垂直居中 */}
<Grid columns="3" gap="3" align="center" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>项目 {n}</Box>)}
</Grid>

{/* 底部对齐 */}
<Grid columns="3" gap="3" align="end" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>项目 {n}</Box>)}
</Grid>
```

## 响应式网格

```jsx
{/* 响应式列数：手机1列，平板2列，桌面3列，大屏4列 */}
<Grid
  columns={{ initial: '1', sm: '2', md: '3', lg: '4' }}
  gap={{ initial: '2', md: '4' }}
>
  {items.map((item, i) => <Box key={i}>{item}</Box>)}
</Grid>
```

## 实用场景

### 产品卡片列表

```jsx
<Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="4">
  {products.map((product, i) => (
    <div key={i} style={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <div style={{ height: '200px', backgroundColor: 'var(--blue-3)' }} />
      <div style={{ padding: '16px' }}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>¥{product.price}</span>
      </div>
    </div>
  ))}
</Grid>
```

### 照片画廊

```jsx
<Grid columns={{ initial: '2', sm: '3', md: '4' }} gap="2">
  {photos.map((photo, i) => (
    <div key={i} style={{ paddingTop: '100%', position: 'relative', backgroundColor: 'var(--gray-5)', borderRadius: '6px' }}>
      <img src={photo.url} alt={photo.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
    </div>
  ))}
</Grid>
```

## 何时使用

- 创建复杂的二维布局结构（同时控制行和列）
- 需要按行和列精确排列元素时
- 构建响应式网格系统（卡片列表、图片画廊等）
- 实现仪表盘、后台管理页面等需要灵活布局的界面

## 属性

### Grid

| 参数    | 说明                           | 类型                                                          | 默认值    |
| ------- | ------------------------------ | ------------------------------------------------------------- | --------- |
| as      | 要渲染的 HTML 元素             | 'div' \| 'span'                                               | 'div'     |
| asChild | 是否将组件作为子元素传递       | boolean                                                       | false     |
| display | CSS display 属性               | 'none' \| 'inline-grid' \| 'grid'                             | 'grid'    |
| areas   | CSS grid-template-areas 属性   | string                                                        | -         |
| columns | CSS grid-template-columns 属性 | '1' - '9' \| string                                           | -         |
| rows    | CSS grid-template-rows 属性    | '1' - '9' \| string                                           | -         |
| flow    | CSS grid-auto-flow 属性        | 'row' \| 'column' \| 'dense' \| 'row-dense' \| 'column-dense' | -         |
| align   | CSS align-items 属性           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'       | 'stretch' |
| justify | CSS justify-content 属性       | 'start' \| 'center' \| 'end' \| 'between'                     | 'start'   |
| gap     | 子元素之间的间距               | '1' - '9'                                                     | -         |

Grid 组件还支持所有标准的 margin 和 layout 属性，如`m`、`mt`、`width`、`height`等。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/grid) 获取完整 API 与设计规范。
