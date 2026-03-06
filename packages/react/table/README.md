# `react-table`

Table 是一个表格组件，用于以行和列的形式展示数据。组件支持不同尺寸、变体样式、自定义布局以及单元格对齐方式。

## 安装

```sh
$ yarn add @sea-lion/react-table
# 或者
$ npm install @sea-lion/react-table
```

## 基本使用

```jsx
import * as Table from "@sea-lion/react-table";

export default () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>姓名</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>年龄</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>职业</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>张三</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>工程师</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>李四</Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>设计师</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
```

## 不同尺寸

Table 组件支持三种尺寸：

```jsx
// 小尺寸
<Table.Root size="1">
  {/* 表格内容 */}
</Table.Root>

// 中等尺寸（默认）
<Table.Root size="2">
  {/* 表格内容 */}
</Table.Root>

// 大尺寸
<Table.Root size="3">
  {/* 表格内容 */}
</Table.Root>
```

## 不同变体

Table 组件支持两种视觉变体：

```jsx
// Ghost 变体（默认）- 无边框
<Table.Root variant="ghost">
  {/* 表格内容 */}
</Table.Root>

// Surface 变体 - 带边框和背景
<Table.Root variant="surface">
  {/* 表格内容 */}
</Table.Root>
```

## 表格布局

```jsx
// 自动布局（默认）- 根据内容调整列宽
<Table.Root layout="auto">
  {/* 表格内容 */}
</Table.Root>

// 固定布局 - 等宽列或可以通过 width 属性设置列宽
<Table.Root layout="fixed">
  {/* 表格内容 */}
</Table.Root>
```

## 单元格对齐

```jsx
// 水平对齐
<Table.Cell justify="start">左对齐（默认）</Table.Cell>
<Table.Cell justify="center">居中对齐</Table.Cell>
<Table.Cell justify="end">右对齐</Table.Cell>

// 垂直对齐
<Table.Row align="start">顶部对齐</Table.Row>
<Table.Row align="center">居中对齐</Table.Row>
<Table.Row align="end">底部对齐</Table.Row>
<Table.Row align="baseline">基线对齐</Table.Row>
```

## 行标题和列标题

```jsx
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>产品</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>价格</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>库存</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>产品A</Table.RowHeaderCell>
      <Table.Cell>¥100</Table.Cell>
      <Table.Cell>50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.RowHeaderCell>产品B</Table.RowHeaderCell>
      <Table.Cell>¥200</Table.Cell>
      <Table.Cell>25</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

## 属性

### Root 属性

| 参数    | 说明         | 类型                 | 默认值  | 版本  |
| ------- | ------------ | -------------------- | ------- | ----- |
| size    | 表格尺寸     | '1' \| '2' \| '3'    | '2'     | 0.2.1 |
| variant | 视觉变体     | 'surface' \| 'ghost' | 'ghost' | 0.2.1 |
| layout  | 表格布局方式 | 'auto' \| 'fixed'    | 'auto'  | 0.2.1 |

### Row 属性

| 参数  | 说明           | 类型                                       | 默认值 | 版本  |
| ----- | -------------- | ------------------------------------------ | ------ | ----- |
| align | 行内容垂直对齐 | 'start' \| 'center' \| 'end' \| 'baseline' | -      | 0.2.1 |

### Cell 属性

| 参数    | 说明           | 类型                         | 默认值  | 版本  |
| ------- | -------------- | ---------------------------- | ------- | ----- |
| justify | 单元格内容对齐 | 'start' \| 'center' \| 'end' | 'start' | 0.2.1 |
| width   | 单元格宽度     | string                       | -       | 0.2.1 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/table) 获取完整 API 与设计规范。
