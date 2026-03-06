# `react-blockquote`

Blockquote is a quote block component for displaying quoted content, supporting multiple sizes, font weights, colors, and text wrapping controls.

## Installation

```sh
pnpm add @sea-lion/react-blockquote
# or
npm install @sea-lion/react-blockquote
yarn add @sea-lion/react-blockquote
```

## Usage

Import the component in your code:

```tsx
import { Blockquote } from '@sea-lion/react-blockquote';
```

### Basic Usage

```jsx
<Blockquote>The Tao that can be named is not the eternal Tao.</Blockquote>
<Blockquote size="3" color="blue">A quote with size and color</Blockquote>
```

### Sizes

Supports sizes `"1"` through `"9"` — larger numbers produce larger text:

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
    <Blockquote key={size} size={size}>
      The Tao that can be named is not the eternal Tao.
    </Blockquote>
  ))}
</Flex>
```

### Font Weights

Use the `weight` prop to control font weight:

```jsx
<Flex direction="column" gap="4">
  <Blockquote weight="light">light — The Tao that can be named is not the eternal Tao.</Blockquote>
  <Blockquote weight="regular">regular — The Tao that can be named is not the eternal Tao.</Blockquote>
  <Blockquote weight="medium">medium — The Tao that can be named is not the eternal Tao.</Blockquote>
  <Blockquote weight="bold">bold — The Tao that can be named is not the eternal Tao.</Blockquote>
</Flex>
```

### Colors

Use the `color` prop to apply a color theme to the quote block:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Blockquote key={color} color={color}>
      The Tao that can be named is not the eternal Tao.
    </Blockquote>
  ))}
</Flex>
```

### Text Wrap Control

Control text wrapping behavior with the `truncate` and `wrap` props:

```jsx
<div style={{ width: '400px' }}>
  {/* Default wrapping */}
  <Blockquote>
    The highest good is like water. Water gives life to ten thousand things and does not strive.
  </Blockquote>

  {/* Single-line truncation */}
  <Blockquote truncate>
    The highest good is like water. Water gives life to ten thousand things and does not strive.
  </Blockquote>

  {/* No wrapping */}
  <Blockquote wrap="nowrap">
    The highest good is like water. Water gives life to ten thousand things and does not strive.
  </Blockquote>
</div>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Blockquote key={color} color={color} highContrast>
      The Tao that can be named is not the eternal Tao.
    </Blockquote>
  ))}
</Flex>
```

## Props / API

### Blockquote

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Text size | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"` |
| `weight` | Font weight | `"light" \| "regular" \| "medium" \| "bold"` | `"regular"` |
| `color` | Color theme | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"gray"` |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `truncate` | Truncate text to a single line | `boolean` | `false` |
| `wrap` | Text wrap mode | `"wrap" \| "nowrap" \| "balance" \| "pretty"` | - |
| `children` | Quote content | `React.ReactNode` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/blockquote) for the full API reference and design guidelines.
