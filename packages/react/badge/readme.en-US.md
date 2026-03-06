# `react-badge`

Badge is a component for displaying labels, counts, or status as short text. It supports multiple sizes, variants, colors, and border-radius options, suitable for notification counts, feature labels, version information, and online status indicators.

## Installation

```sh
pnpm add @sea-lion/react-badge
# or
npm install @sea-lion/react-badge
yarn add @sea-lion/react-badge
```

## Usage

Import the component in your code:

```tsx
import { Badge } from '@sea-lion/react-badge';
```

### Basic Usage

```jsx
<Badge>New Feature</Badge>
<Badge variant="solid" color="red">Important</Badge>
<Badge size="2" color="blue">Beta</Badge>
```

### Sizes

Supports sizes `"1"`, `"2"`, and `"3"`:

```jsx
<Flex align="center" gap="4">
  <Badge size="1">Size 1</Badge>
  <Badge size="2">Size 2</Badge>
  <Badge size="3">Size 3</Badge>
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the badge:

```jsx
<Flex direction="column" gap="4">
  <Badge variant="solid">solid — Solid fill</Badge>
  <Badge variant="soft">soft — Soft background</Badge>
  <Badge variant="surface">surface — Semi-transparent surface</Badge>
  <Badge variant="outline">outline — Outlined style</Badge>
</Flex>
```

### Colors

Use the `color` prop to set the badge color — all variants support multiple colors:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: '80px' }}>{color}:</Text>
      <Badge color={color} variant="solid">{color}</Badge>
      <Badge color={color} variant="soft">{color}</Badge>
      <Badge color={color} variant="surface">{color}</Badge>
      <Badge color={color} variant="outline">{color}</Badge>
    </Flex>
  ))}
</Flex>
```

### Border Radius

Use the `radius` prop to control the corner radius of the badge:

```jsx
<Flex gap="4">
  <Badge radius="none">none</Badge>
  <Badge radius="small">small</Badge>
  <Badge radius="medium">medium</Badge>
  <Badge radius="large">large</Badge>
  <Badge radius="full">full</Badge>
</Flex>
```

### Common Use Cases

Badges are commonly used for notification counts, feature labels, and status indicators:

```jsx
<Flex direction="column" gap="4">
  {/* Notification count */}
  <Flex align="center" gap="2">
    <Text>Notifications</Text>
    <Badge color="red" size="1">99+</Badge>
  </Flex>

  {/* Feature label */}
  <Flex align="center" gap="2">
    <Text>Feature Label</Text>
    <Badge color="blue" variant="soft">Beta</Badge>
  </Flex>

  {/* Online status */}
  <Flex align="center" gap="2">
    <Text>Status</Text>
    <Badge color="green" variant="surface">Online</Badge>
    <Badge color="gray" variant="surface">Offline</Badge>
  </Flex>

  {/* Version info */}
  <Flex align="center" gap="2">
    <Text>Version</Text>
    <Badge color="gold" variant="outline">v2.0.0</Badge>
  </Flex>
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex gap="4">
  <Badge highContrast variant="solid">High contrast solid</Badge>
  <Badge highContrast variant="soft">High contrast soft</Badge>
  <Badge highContrast variant="surface">High contrast surface</Badge>
  <Badge highContrast variant="outline">High contrast outline</Badge>
</Flex>
```

## Props / API

### Badge

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Badge size | `"1" \| "2" \| "3"` | `"1"` |
| `variant` | Visual variant | `"solid" \| "soft" \| "surface" \| "outline"` | `"soft"` |
| `radius` | Border radius | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"full"` |
| `color` | Color theme | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | - |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `children` | Badge content | `React.ReactNode` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/badge) for the full API reference and design guidelines.
