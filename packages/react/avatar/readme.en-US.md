# `react-avatar`

Avatar is a component for displaying user or entity avatars. It supports image display with text fallback, and provides multiple size, variant, color, and border-radius options.

## Installation

```sh
pnpm add @sea-lion/react-avatar
# or
npm install @sea-lion/react-avatar
yarn add @sea-lion/react-avatar
```

## Usage

Import the component in your code:

```tsx
import { Avatar } from '@sea-lion/react-avatar';
```

### Basic Usage

```jsx
{/* Image avatar */}
<Avatar
  src="https://example.com/avatar.jpg"
  alt="User avatar"
  fallback="AB"
/>

{/* Text fallback avatar */}
<Avatar fallback="AB" />
```

### Sizes

Supports sizes `"1"` through `"9"`:

```jsx
<Flex align="center" gap="4">
  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
    <Avatar
      key={size}
      size={size}
      src="https://example.com/avatar.jpg"
      fallback="AB"
      alt="User avatar"
    />
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the avatar:

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="4">
    <Text size="2" style={{ width: '80px' }}>solid:</Text>
    <Avatar variant="solid" fallback="AB" alt="User avatar" />
    <Avatar variant="solid" src="https://example.com/avatar.jpg" fallback="AB" alt="User avatar" />
  </Flex>

  <Flex align="center" gap="4">
    <Text size="2" style={{ width: '80px' }}>soft:</Text>
    <Avatar variant="soft" fallback="AB" alt="User avatar" />
    <Avatar variant="soft" src="https://example.com/avatar.jpg" fallback="AB" alt="User avatar" />
  </Flex>
</Flex>
```

### Colors

Use the `color` prop to set the color theme for the fallback avatar:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: '80px' }}>{color}:</Text>
      <Avatar color={color} variant="solid" fallback="AB" alt="User avatar" />
      <Avatar color={color} variant="soft" fallback="AB" alt="User avatar" />
    </Flex>
  ))}
</Flex>
```

### Border Radius

Use the `radius` prop to control the corner radius of the avatar:

```jsx
<Flex gap="4">
  <Avatar radius="none" fallback="AB" alt="User avatar" />
  <Avatar radius="small" fallback="AB" alt="User avatar" />
  <Avatar radius="medium" fallback="AB" alt="User avatar" />
  <Avatar radius="large" fallback="AB" alt="User avatar" />
  <Avatar radius="full" fallback="AB" alt="User avatar" />
</Flex>
```

### Fallback Display

When the image fails to load, the fallback content (text or icon) is shown automatically:

```jsx
{/* Show text when image fails */}
<Avatar
  src="https://broken-url.jpg"
  fallback="AB"
  alt="User avatar"
/>

{/* No src — directly display fallback */}
<Avatar size="5" fallback="User" alt="User avatar" />
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex gap="4">
  <Avatar highContrast variant="solid" fallback="AB" alt="User avatar" />
  <Avatar highContrast variant="soft" fallback="AB" alt="User avatar" />
</Flex>
```

## Props / API

### Avatar

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `src` | Image URL for the avatar | `string` | - |
| `alt` | Alt text for the image (accessibility) | `string` | - |
| `fallback` | Fallback content when image fails to load | `React.ReactNode` | - |
| `size` | Avatar size | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"` |
| `variant` | Visual variant | `"solid" \| "soft"` | `"soft"` |
| `radius` | Border radius | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"full"` |
| `color` | Color theme (affects fallback background) | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"gray"` |
| `highContrast` | Use high contrast color | `boolean` | `false` |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/avatar) for the full API reference and design guidelines.
