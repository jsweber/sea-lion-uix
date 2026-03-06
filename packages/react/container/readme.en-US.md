# `react-container`

Container is a component for constraining content to a maximum width and centering it on the page. It is the foundation for building standard page layouts, ensuring content maintains appropriate width and readability across various screen sizes.

## Installation

```sh
pnpm add @sea-lion/react-container
# or
npm install @sea-lion/react-container
yarn add @sea-lion/react-container
```

## Usage

Import the component in your code:

```tsx
import { Container } from '@sea-lion/react-container';
```

### Basic Usage

```jsx
<Container size="3">
  <Text>Main content area</Text>
</Container>
```

## When to Use

- Create page layouts with standard widths
- Ensure long text content maintains appropriate line length on large screens
- Center content with consistent margins

### Sizes

Container supports four preset sizes corresponding to different maximum widths:

```jsx
<Flex direction="column" gap="4">
  {/* Size 1 — max-width 448px */}
  <Box>
    <Text as="p" size="2" weight="bold">Size 1 (448px)</Text>
    <Container size="1" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>This is a size 1 container with a max-width of 448px.</Text>
      </Box>
    </Container>
  </Box>

  {/* Size 2 — max-width 688px */}
  <Box>
    <Text as="p" size="2" weight="bold">Size 2 (688px)</Text>
    <Container size="2" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>This is a size 2 container with a max-width of 688px.</Text>
      </Box>
    </Container>
  </Box>

  {/* Size 3 — max-width 880px */}
  <Box>
    <Text as="p" size="2" weight="bold">Size 3 (880px)</Text>
    <Container size="3" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>This is a size 3 container with a max-width of 880px.</Text>
      </Box>
    </Container>
  </Box>

  {/* Size 4 — max-width 1136px */}
  <Box>
    <Text as="p" size="2" weight="bold">Size 4 (1136px)</Text>
    <Container size="4" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>This is a size 4 container with a max-width of 1136px.</Text>
      </Box>
    </Container>
  </Box>
</Flex>
```

### Alignment

Use the `align` prop to control the horizontal alignment of content within the container:

```jsx
{/* Left-aligned */}
<Container size="3" align="left" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>Left-aligned content</Text>
  </Box>
</Container>

{/* Center-aligned (default) */}
<Container size="3" align="center" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>Center-aligned content</Text>
  </Box>
</Container>

{/* Right-aligned */}
<Container size="3" align="right" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>Right-aligned content</Text>
  </Box>
</Container>
```

### Responsive Container

The `size` prop accepts a responsive object, allowing different sizes at different breakpoints:

```jsx
<Container
  size={{ sm: '1', md: '2', lg: '3', xl: '4' }}
  style={{ backgroundColor: 'var(--gray-a3)' }}
>
  <Box p="4">
    <Text>
      This container uses different sizes at different breakpoints:
      small (sm) — 448px;
      medium (md) — 688px;
      large (lg) — 880px;
      extra-large (xl) — 1136px
    </Text>
  </Box>
</Container>
```

### Use in Layouts

Container works well with Flex, Box, and other components to build complete page layouts:

```jsx
<Container size="3">
  <Box p="4">
    <Heading size="5" mb="4">Page Title</Heading>
    <Text as="p" mb="4">
      The Container component can be used to create standard page layouts,
      constraining content width and ensuring readability across screen sizes.
    </Text>
    <Flex gap="4" wrap="wrap">
      <Box style={{ flex: '1 1 200px', backgroundColor: 'var(--blue-a3)' }} p="4">
        <Text weight="bold" mb="2">Sidebar</Text>
        <Text size="2">Navigation or related content goes here.</Text>
      </Box>
      <Box style={{ flex: '2 1 400px', backgroundColor: 'var(--blue-a2)' }} p="4">
        <Text weight="bold" mb="2">Main Content</Text>
        <Text size="2">Place the main content of the page here.</Text>
      </Box>
    </Flex>
  </Box>
</Container>
```

## Size Reference

| size | Max Width |
|------|-----------|
| `"1"` | 448px |
| `"2"` | 688px |
| `"3"` | 880px |
| `"4"` | 1136px |

## Props / API

### Container

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Container size (max-width), supports responsive object | `"1" \| "2" \| "3" \| "4"` | - |
| `align` | Horizontal alignment of content | `"left" \| "center" \| "right"` | `"center"` |
| `display` | Display mode | `"none" \| "initial"` | `"initial"` |
| `style` | Inline styles | `React.CSSProperties` | - |
| `className` | Custom CSS class name | `string` | - |
| `children` | Container content | `React.ReactNode` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/container) for the full API reference and design guidelines.
