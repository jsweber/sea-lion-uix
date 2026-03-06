# `react-button`

Button is a button component with multiple sizes, variants, and color options. It supports loading state, disabled state, block layout, and the asChild pattern.

## Installation

```sh
pnpm add @sea-lion/react-button
# or
npm install @sea-lion/react-button
yarn add @sea-lion/react-button
```

## Usage

Import the component in your code:

```tsx
import { Button } from '@sea-lion/react-button';
```

### Basic Usage

```jsx
<Button>Default Button</Button>
<Button variant="solid" color="blue">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Link Button</Button>
```

### Variants

Button supports six visual variants:

```jsx
<Flex gap="4" wrap="wrap">
  <Button variant="classic">classic</Button>
  <Button variant="solid">solid</Button>
  <Button variant="soft">soft</Button>
  <Button variant="surface">surface</Button>
  <Button variant="outline">outline</Button>
  <Button variant="ghost">ghost</Button>
</Flex>
```

### Sizes

Supports sizes `"1"`, `"2"`, `"3"`, and `"4"`:

```jsx
<Flex gap="4" align="center">
  <Button size="1">size 1</Button>
  <Button size="2">size 2</Button>
  <Button size="3">size 3</Button>
  <Button size="4">size 4</Button>
</Flex>
```

### Colors

Use the `color` prop to set the button color theme:

```jsx
<Flex gap="4">
  <Button color="blue">blue</Button>
  <Button color="cyan">cyan</Button>
  <Button color="pink">pink</Button>
  <Button color="brown">brown</Button>
  <Button color="red">red</Button>
  <Button color="green">green</Button>
</Flex>
```

### Border Radius

Use the `radius` prop to control the button's corner radius:

```jsx
<Flex gap="4">
  <Button radius="none">none</Button>
  <Button radius="small">small</Button>
  <Button radius="medium">medium</Button>
  <Button radius="large">large</Button>
  <Button radius="full">full</Button>
</Flex>
```

### Disabled State

```jsx
<Button disabled>Disabled Button</Button>
<Button variant="outline" disabled>Disabled Outline Button</Button>
```

### Loading State

Use the `loading` prop to show a loading spinner:

```jsx
<Flex gap="4">
  <Button variant="solid" loading>Loading...</Button>
  <Button variant="outline" loading>Loading...</Button>
  <Button variant="ghost" loading>Loading...</Button>
</Flex>
```

### Block Button

Use the `block` prop to make the button fill its parent container's width:

```jsx
<Button variant="solid" block>Full-width Button</Button>
```

### High Contrast

```jsx
<Flex gap="4">
  <Button highContrast>High contrast</Button>
  <Button highContrast variant="outline">High contrast outline</Button>
</Flex>
```

### asChild — Render as Another Element

Use `asChild` to apply Button styles to any child element (e.g., an `<a>` link):

```jsx
<Button asChild>
  <a href="https://example.com">Link Button</a>
</Button>
```

### Nested Themes

Button inherits the color theme from the nearest Theme component:

```jsx
<Theme accentColor="blue">
  <Flex gap="4">
    <Button>Inherits blue theme</Button>
  </Flex>

  <Theme accentColor="yellow">
    <Flex gap="4">
      <Button>Inherits yellow theme</Button>
    </Flex>
  </Theme>
</Theme>
```

## Props / API

### Button

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Button size | `"1" \| "2" \| "3" \| "4"` | `"2"` |
| `variant` | Visual variant | `"classic" \| "solid" \| "soft" \| "surface" \| "outline" \| "ghost"` | `"solid"` |
| `color` | Color theme | `"gray" \| "gold" \| "blue" \| "red" \| "green" \| ...` | - |
| `radius` | Border radius | `"none" \| "small" \| "medium" \| "large" \| "full"` | - |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `disabled` | Whether the button is disabled | `boolean` | `false` |
| `loading` | Whether to show a loading state | `boolean` | `false` |
| `block` | Whether to fill the parent container's width | `boolean` | `false` |
| `asChild` | Forward styles to the child element | `boolean` | `false` |
| `onClick` | Click event callback | `React.MouseEventHandler` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/button) for the full API reference and design guidelines.
