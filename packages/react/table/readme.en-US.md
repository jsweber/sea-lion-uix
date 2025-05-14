# `react-table`

Table is a component for displaying data in rows and columns. The component supports different sizes, variant styles, custom layouts, and cell alignment options.

## Installation

```sh
$ yarn add @sea-lion/react-table
# or
$ npm install @sea-lion/react-table
```

## Basic Usage

```jsx
import * as Table from "@sea-lion/react-table";

export default () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Occupation</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Engineer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
```

## Different Sizes

Table component supports three sizes:

```jsx
// Small size
<Table.Root size="1">
  {/* Table content */}
</Table.Root>

// Medium size (default)
<Table.Root size="2">
  {/* Table content */}
</Table.Root>

// Large size
<Table.Root size="3">
  {/* Table content */}
</Table.Root>
```

## Different Variants

Table component supports two visual variants:

```jsx
// Ghost variant (default) - no borders
<Table.Root variant="ghost">
  {/* Table content */}
</Table.Root>

// Surface variant - with borders and background
<Table.Root variant="surface">
  {/* Table content */}
</Table.Root>
```

## Table Layout

```jsx
// Auto layout (default) - column width adjusts to content
<Table.Root layout="auto">
  {/* Table content */}
</Table.Root>

// Fixed layout - equal column width or can be set with width prop
<Table.Root layout="fixed">
  {/* Table content */}
</Table.Root>
```

## Cell Alignment

```jsx
// Horizontal alignment
<Table.Cell justify="start">Left aligned (default)</Table.Cell>
<Table.Cell justify="center">Center aligned</Table.Cell>
<Table.Cell justify="end">Right aligned</Table.Cell>

// Vertical alignment
<Table.Row align="start">Top aligned</Table.Row>
<Table.Row align="center">Center aligned</Table.Row>
<Table.Row align="end">Bottom aligned</Table.Row>
<Table.Row align="baseline">Baseline aligned</Table.Row>
```

## Row and Column Headers

```jsx
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Stock</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Product A</Table.RowHeaderCell>
      <Table.Cell>$100</Table.Cell>
      <Table.Cell>50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.RowHeaderCell>Product B</Table.RowHeaderCell>
      <Table.Cell>$200</Table.Cell>
      <Table.Cell>25</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

## Props

### Root Props

| Prop    | Description    | Type                 | Default | Version |
| ------- | -------------- | -------------------- | ------- | ------- |
| size    | Table size     | '1' \| '2' \| '3'    | '2'     | 0.2.1   |
| variant | Visual variant | 'surface' \| 'ghost' | 'ghost' | 0.2.1   |
| layout  | Table layout   | 'auto' \| 'fixed'    | 'auto'  | 0.2.1   |

### Row Props

| Prop  | Description        | Type                                       | Default | Version |
| ----- | ------------------ | ------------------------------------------ | ------- | ------- |
| align | Vertical alignment | 'start' \| 'center' \| 'end' \| 'baseline' | -       | 0.2.1   |

### Cell Props

| Prop    | Description       | Type                         | Default | Version |
| ------- | ----------------- | ---------------------------- | ------- | ------- |
| justify | Content alignment | 'start' \| 'center' \| 'end' | 'start' | 0.2.1   |
| width   | Cell width        | string                       | -       | 0.2.1   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
