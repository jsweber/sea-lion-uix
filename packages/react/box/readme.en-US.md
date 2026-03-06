# `react-box`

Box is a fundamental layout container component that supports div/span rendering and the asChild pattern. It is the basic building block of the layout system, providing flexible display modes and responsive support.

## Installation

```sh
pnpm add @sea-lion/react-box
# or
npm install @sea-lion/react-box
yarn add @sea-lion/react-box
```

## Usage

Import the component in your code:

```tsx
import { Box } from '@sea-lion/react-box';
```

### Basic Usage

```jsx
<Box>Block container</Box>
<Box as="span">Inline container</Box>
<Box p="4" m="2" style={{ background: '#f0f0f0' }}>With padding and styles</Box>
```

### Display Modes

Control the display mode of the Box with the `display` prop:

```jsx
<Flex direction="column" gap="4">
  <Box display="block" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    block — Block-level box
  </Box>
  <Box display="inline-block" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    inline-block — Inline block
  </Box>
  <Box display="inline" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    inline — Inline box
  </Box>
</Flex>
```

### HTML Elements

Use the `as` prop to specify the rendered HTML element:

```jsx
<Box as="div" style={{ padding: '20px', border: '1px solid var(--gray-a6)' }}>
  A div Box
</Box>
<Text>
  This is a sentence that contains a
  <Box
    as="span"
    style={{
      padding: '0 8px',
      margin: '0 4px',
      backgroundColor: 'var(--accent-a3)',
      borderRadius: 'var(--radius-1)',
    }}
  >
    span Box
  </Box>
  element
</Text>
```

### Nested Layout

Box components can be nested to build complex layouts:

```jsx
<Box
  style={{
    padding: '20px',
    border: '1px solid var(--gray-a6)',
    borderRadius: 'var(--radius-3)',
  }}
>
  <Box
    style={{
      padding: '16px',
      backgroundColor: 'var(--accent-a3)',
      borderRadius: 'var(--radius-2)',
      marginBottom: '16px',
    }}
  >
    <Text size="5">Header Area</Text>
  </Box>
  <Box
    style={{
      padding: '16px',
      backgroundColor: 'var(--gray-a3)',
      borderRadius: 'var(--radius-2)',
    }}
  >
    <Text>Content Area</Text>
  </Box>
</Box>
```

### Responsive Display

The `display` prop accepts a responsive object to set different values at different breakpoints:

```jsx
<Box
  display={{ initial: 'block', sm: 'inline-block', lg: 'inline' }}
  style={{
    padding: '20px',
    border: '1px solid var(--gray-a6)',
    borderRadius: 'var(--radius-3)',
  }}
>
  <Text>
    This Box changes its display mode based on screen size:
    block on small screens, inline-block on medium, and inline on large screens.
  </Text>
</Box>
```

### asChild — Style Forwarding

Use `asChild` to forward Box styles to its child element, making the child the actual rendered element:

```jsx
<Box
  asChild
  style={{
    padding: '16px',
    backgroundColor: 'var(--accent-a3)',
    border: 'none',
    borderRadius: 'var(--radius-2)',
    cursor: 'pointer',
  }}
>
  <button onClick={() => alert('Button clicked')}>
    Clickable button
  </button>
</Box>
```

## Props / API

### Box

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `as` | HTML element to render | `"div" \| "span"` | `"div"` |
| `asChild` | Forward styles to the child element | `boolean` | `false` |
| `display` | Display mode, supports responsive object | `"none" \| "inline" \| "inline-block" \| "block"` | `"block"` |
| `p` | Padding (Radix spacing token) | `string` | - |
| `m` | Margin (Radix spacing token) | `string` | - |
| `style` | Inline styles | `React.CSSProperties` | - |
| `className` | Custom CSS class name | `string` | - |
| `children` | Child nodes | `React.ReactNode` | - |

> Box also accepts all standard HTML `div` / `span` attributes.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/box) for the full API reference and design guidelines.
