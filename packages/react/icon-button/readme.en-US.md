# `react-icon-button`

IconButton is a button component for displaying icons, offering various size and style options.

## Installation

```sh
$ yarn add @sea-lion/react-icon-button
# or
$ npm install @sea-lion/react-icon-button
```

## Basic Usage

```jsx
import { IconButton } from "@sea-lion/react-icon-button";

export default () => (
  <>
    <IconButton aria-label="Close">
      <CloseIcon />
    </IconButton>

    <IconButton variant="solid" color="blue" aria-label="Add">
      <PlusIcon />
    </IconButton>

    <IconButton variant="outline" color="amber" aria-label="Favorite">
      <StarIcon />
    </IconButton>

    <IconButton variant="ghost" color="red" aria-label="Delete">
      <TrashIcon />
    </IconButton>
  </>
);
```

## Different Variants

IconButton component supports multiple variant styles:

```jsx
// Solid variant
<IconButton variant="solid" aria-label="Solid">
  <Icon />
</IconButton>

// Outline variant
<IconButton variant="outline" aria-label="Outline">
  <Icon />
</IconButton>

// Soft variant
<IconButton variant="soft" aria-label="Soft">
  <Icon />
</IconButton>

// Ghost variant
<IconButton variant="ghost" aria-label="Ghost">
  <Icon />
</IconButton>
```

## Different Sizes

IconButton component offers different size options:

```jsx
// Small size
<IconButton size="1" aria-label="Small">
  <Icon />
</IconButton>

// Medium size (default)
<IconButton size="2" aria-label="Medium">
  <Icon />
</IconButton>

// Large size
<IconButton size="3" aria-label="Large">
  <Icon />
</IconButton>

// Extra large size
<IconButton size="4" aria-label="Extra Large">
  <Icon />
</IconButton>
```

## Custom Colors and Radius

```jsx
// Custom colors
<IconButton color="blue" aria-label="Blue">
  <Icon />
</IconButton>

<IconButton color="green" aria-label="Green">
  <Icon />
</IconButton>

// Custom radius
<IconButton radius="none" aria-label="No radius">
  <Icon />
</IconButton>

<IconButton radius="full" aria-label="Fully rounded">
  <Icon />
</IconButton>
```

## Props

### IconButton

| Prop         | Description              | Type                                               | Default  | Version |
| ------------ | ------------------------ | -------------------------------------------------- | -------- | ------- |
| size         | Button size              | '1' \| '2' \| '3' \| '4'                           | '2'      | 0.2.0   |
| variant      | Button variant style     | 'solid' \| 'outline' \| 'soft' \| 'ghost'          | 'solid'  | 0.2.0   |
| color        | Button color             | 'gray' \| 'blue' \| 'green' \| ... (theme colors)  | 'gray'   | 0.2.0   |
| radius       | Border radius size       | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | 'medium' | 0.2.0   |
| highContrast | Use high contrast colors | boolean                                            | false    | 0.2.0   |
| disabled     | Disable the button       | boolean                                            | false    | 0.2.0   |

IconButton component inherits standard button attributes like `onClick`, `onFocus`, etc., and all standard margin properties (like `m`, `mt`, `mb`, etc.).

## Accessibility

When using IconButton, always provide an `aria-label` attribute to ensure screen reader users can understand the button's function.

```jsx
<IconButton aria-label="Close dialog">
  <CloseIcon />
</IconButton>
```

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
