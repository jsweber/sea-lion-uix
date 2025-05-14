# `react-tab-nav`

TabNav is a navigation menu component used to create navigation bars and tab-based navigation.

## Installation

```sh
$ yarn add @sea-lion/react-tab-nav
# or
$ npm install @sea-lion/react-tab-nav
```

## Basic Usage

```jsx
import * as TabNav from "@sea-lion/react-tab-nav";

export default () => (
  <TabNav.Root>
    <TabNav.Link href="/">Home</TabNav.Link>
    <TabNav.Link href="/products">Products</TabNav.Link>
    <TabNav.Link href="/docs">Documentation</TabNav.Link>
    <TabNav.Link href="/about">About Us</TabNav.Link>
  </TabNav.Root>
);
```

## Active State

You can specify the currently active link using the `active` prop:

```jsx
<TabNav.Root>
  <TabNav.Link href="/" active>
    Home
  </TabNav.Link>
  <TabNav.Link href="/products">Products</TabNav.Link>
  <TabNav.Link href="/docs">Documentation</TabNav.Link>
</TabNav.Root>
```

## Different Sizes

TabNav component comes in three sizes:

```jsx
// Size 1 (smallest)
<TabNav.Root size="1">...</TabNav.Root>

// Size 2 (default)
<TabNav.Root size="2">...</TabNav.Root>

// Size 3 (largest)
<TabNav.Root size="3">...</TabNav.Root>
```

## Different Variants

TabNav.Root component supports multiple style variants:

```jsx
// Default variant
<TabNav.Root>...</TabNav.Root>

// Underline variant
<TabNav.Root variant="underline">...</TabNav.Root>
```

## Custom Colors

```jsx
// Blue (default)
<TabNav.Root color="blue">...</TabNav.Root>

// Red
<TabNav.Root color="red">...</TabNav.Root>

// Green
<TabNav.Root color="green">...</TabNav.Root>
```

## High Contrast

```jsx
// Enable high contrast mode
<TabNav.Root highContrast>...</TabNav.Root>
```

## Justification

Control how navigation items are aligned:

```jsx
// Left aligned (default)
<TabNav.Root justify="start">...</TabNav.Root>

// Center aligned
<TabNav.Root justify="center">...</TabNav.Root>

// Right aligned
<TabNav.Root justify="end">...</TabNav.Root>
```

## Wrapping

Control how items wrap when there is not enough space:

```jsx
// No wrapping (default)
<TabNav.Root wrap="nowrap">...</TabNav.Root>

// Allow wrapping
<TabNav.Root wrap="wrap">...</TabNav.Root>

// Reverse wrapping
<TabNav.Root wrap="wrap-reverse">...</TabNav.Root>
```

## Usage with Routing

Can be used with routing libraries like React Router:

```jsx
import { Link } from "react-router-dom";

<TabNav.Root>
  <TabNav.Link asChild active={location.pathname === "/"}>
    <Link to="/">Home</Link>
  </TabNav.Link>
  <TabNav.Link asChild active={location.pathname === "/products"}>
    <Link to="/products">Products</Link>
  </TabNav.Link>
</TabNav.Root>;
```

## Props

### TabNav.Root Props

| Prop         | Description       | Type                                 | Default   | Version |
| ------------ | ----------------- | ------------------------------------ | --------- | ------- |
| size         | Size              | '1' \| '2' \| '3'                    | '2'       | 0.2.0   |
| color        | Color             | string                               | 'blue'    | 0.2.0   |
| highContrast | Use high contrast | boolean                              | false     | 0.2.0   |
| variant      | Variant style     | 'surface' \| 'underline'             | 'surface' | 0.2.0   |
| wrap         | Wrapping mode     | 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap'  | 0.2.0   |
| justify      | Alignment         | 'start' \| 'center' \| 'end'         | 'start'   | 0.2.0   |

### TabNav.Link Props

| Prop    | Description               | Type    | Default | Version |
| ------- | ------------------------- | ------- | ------- | ------- |
| active  | Whether link is active    | boolean | false   | 0.2.0   |
| href    | Link URL                  | string  | -       | 0.2.0   |
| asChild | Use child as root element | boolean | false   | 0.2.0   |

All components also support standard margin properties.

## Learn More

View the [documentation](https://www.radix-ui.com/themes/docs/theme/overview) for more information.
