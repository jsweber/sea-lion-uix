# `react-data-list`

DataList is a component for displaying key-value lists, commonly used for properties, configuration, and detail information. It supports horizontal/vertical orientation, multiple sizes, custom alignment, label colors, and responsive layouts.

## Installation

```sh
pnpm add @sea-lion/react-data-list
# or
npm install @sea-lion/react-data-list
yarn add @sea-lion/react-data-list
```

## Usage

Import the component in your code:

```tsx
import * as DataList from '@sea-lion/react-data-list';
```

### Basic Usage

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label>Name</DataList.Label>
    <DataList.Value>John Doe</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Email</DataList.Label>
    <DataList.Value>john@example.com</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Phone</DataList.Label>
    <DataList.Value>+1 555-0000</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Address</DataList.Label>
    <DataList.Value>123 Main St, Springfield</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Orientation

Control how labels and values are arranged with the `orientation` prop:

```jsx
{/* Horizontal (default): label and value on the same row */}
<DataList.Root orientation="horizontal">
  <DataList.Item>
    <DataList.Label>Username</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Created At</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Vertical: label stacked above value */}
<DataList.Root orientation="vertical">
  <DataList.Item>
    <DataList.Label>Username</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Created At</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Sizes

Three sizes are supported via the `size` prop:

```jsx
{/* Small */}
<DataList.Root size="1">
  <DataList.Item>
    <DataList.Label>OS</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Medium (default) */}
<DataList.Root size="2">
  <DataList.Item>
    <DataList.Label>OS</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Large */}
<DataList.Root size="3">
  <DataList.Item>
    <DataList.Label>OS</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Item Alignment

Control the vertical alignment of label and value within an item:

```jsx
{/* Top aligned */}
<DataList.Root>
  <DataList.Item align="start">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>A longer description text that wraps across multiple lines...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Center aligned */}
<DataList.Root>
  <DataList.Item align="center">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>A longer description text that wraps across multiple lines...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Bottom aligned */}
<DataList.Root>
  <DataList.Item align="end">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>A longer description text that wraps across multiple lines...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Baseline aligned (default) */}
<DataList.Root>
  <DataList.Item align="baseline">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>A longer description text that wraps across multiple lines...</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Label Colors

Use the `color` prop on `DataList.Label` to apply semantic colors:

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="gray">Gray Label (default)</DataList.Label>
    <DataList.Value>Default label color</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="blue">Blue Label</DataList.Label>
    <DataList.Value>For informational or primary content</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="green">Green Label</DataList.Label>
    <DataList.Value>For success or passing status</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="red">Red Label</DataList.Label>
    <DataList.Value>For errors or warnings</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="amber">Amber Label</DataList.Label>
    <DataList.Value>For caution or pending states</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### High Contrast Labels

Use `highContrast` to increase label visibility:

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="blue" highContrast>Tech Stack</DataList.Label>
    <DataList.Value>React, TypeScript, Node.js</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="crimson" highContrast>Deploy Environment</DataList.Label>
    <DataList.Value>AWS, Docker, Kubernetes</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Custom Label Width

Control the label column width using inline styles or the `width` prop:

```jsx
{/* Fixed minimum width */}
<DataList.Root>
  <DataList.Item>
    <DataList.Label style={{ minWidth: '200px' }}>Long Label Name</DataList.Label>
    <DataList.Value>Corresponding value</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* Percentage width */}
<DataList.Root style={{ width: '100%' }}>
  <DataList.Item>
    <DataList.Label width="30%">Label</DataList.Label>
    <DataList.Value>Value</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Responsive Layout

Both `orientation` and `size` accept responsive objects to adapt to different screen sizes:

```jsx
<DataList.Root
  orientation={{ initial: 'horizontal', xs: 'vertical', md: 'horizontal' }}
  size={{ initial: '1', sm: '2', lg: '3' }}
>
  <DataList.Item>
    <DataList.Label>Product Name</DataList.Label>
    <DataList.Value>Smartphone X10</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Price</DataList.Label>
    <DataList.Value>$599</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Storage</DataList.Label>
    <DataList.Value>128GB</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

## When to Use

- Display object properties or data fields in a structured way
- Show user profiles, product details, configuration items
- Present read-only form data
- When labels and values need to be clearly paired

## Props / API

### DataList.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `orientation` | Arrangement of labels and values | `"horizontal" \| "vertical"` or responsive object | `"horizontal"` |
| `size` | List size | `"1" \| "2" \| "3"` or responsive object | `"2"` |
| `trim` | Trim leading/trailing whitespace | `"normal" \| "start" \| "end" \| "both"` | `"normal"` |

### DataList.Item

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `align` | Vertical alignment of label and value | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"baseline"` |

### DataList.Label

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `color` | Label color | `"gray" \| "blue" \| "green" \| "red" \| "amber" \| ...` | `"gray"` |
| `highContrast` | Use high-contrast color | `boolean` | `false` |
| `width` | Label column width | `string` | — |

### DataList.Value

Accepts standard HTML attributes and can contain any content (links, badges, icons, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/data-list) for the full API reference and design guidelines.
