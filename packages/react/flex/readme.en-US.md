# `react-flex`

Flex is a container component based on CSS flexbox layout, used to create flexible one-dimensional layouts, whether rows or columns.

## Installation

```sh
pnpm add @sea-lion/react-flex
# or
npm install @sea-lion/react-flex
yarn add @sea-lion/react-flex
```

## Usage

Import the component in your code:

```tsx
import { Flex } from '@sea-lion/react-flex';
```

## Basic Usage

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Flex direction="row" align="center" justify="between" gap="4">
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </Flex>
);
```

## Direction

The Flex component supports four directions:

```jsx
{/* Horizontal (default) */}
<Flex direction="row" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Flex>

{/* Vertical */}
<Flex direction="column" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>

{/* Horizontal reverse */}
<Flex direction="row-reverse" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>

{/* Vertical reverse */}
<Flex direction="column-reverse" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>
```

## Alignment

```jsx
{/* Horizontal alignment (justify) */}
<Flex justify="start" gap="3">{/* Default, left-aligned */}</Flex>
<Flex justify="center" gap="3">{/* Center-aligned */}</Flex>
<Flex justify="end" gap="3">{/* Right-aligned */}</Flex>
<Flex justify="between" gap="3">{/* Space between items */}</Flex>

{/* Vertical alignment (align) */}
<Flex align="start" gap="3">{/* Top-aligned */}</Flex>
<Flex align="center" gap="3">{/* Vertically centered */}</Flex>
<Flex align="end" gap="3">{/* Bottom-aligned */}</Flex>
<Flex align="baseline" gap="3">{/* Baseline-aligned */}</Flex>
<Flex align="stretch" gap="3">{/* Stretched */}</Flex>
```

## Gap

Flex supports gap levels from 1 to 9:

```jsx
<Flex gap="1">{/* Minimum gap */}</Flex>
<Flex gap="3">{/* Small gap */}</Flex>
<Flex gap="5">{/* Medium gap */}</Flex>
<Flex gap="9">{/* Maximum gap */}</Flex>
```

## Wrapping

```jsx
{/* No wrap (default) */}
<Flex wrap="nowrap" gap="3">
  {/* Content overflows when it exceeds width */}
</Flex>

{/* Wrap */}
<Flex wrap="wrap" gap="3">
  {/* Content wraps to next line when it exceeds width */}
</Flex>

{/* Wrap reverse */}
<Flex wrap="wrap-reverse" gap="3">
  {/* Content wraps in reverse direction */}
</Flex>
```

## Responsive Layout

```jsx
{/* Stack vertically on small screens, horizontally on medium screens */}
<Flex
  direction={{ initial: 'column', md: 'row' }}
  gap={{ initial: '2', md: '4' }}
>
  <Box>Vertically on small screens, horizontally on medium screens</Box>
  <Box>With different spacing</Box>
</Flex>
```

## Practical Use Cases

### Navigation Bar

```jsx
<Flex justify="between" align="center" style={{ padding: '16px', backgroundColor: 'var(--gray-3)' }}>
  <Text size="5" weight="bold">Site Name</Text>
  <Flex gap="4">
    <Button variant="soft">Home</Button>
    <Button variant="soft">Products</Button>
    <Button variant="soft">About</Button>
    <Button>Contact Us</Button>
  </Flex>
</Flex>
```

### Card Layout

```jsx
<Flex gap="4" wrap="wrap">
  {cards.map((card, i) => (
    <Box key={i} style={{ flex: '1 1 200px', padding: '16px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Text size="3" weight="bold" mb="2">{card.title}</Text>
      <Text size="2">{card.description}</Text>
    </Box>
  ))}
</Flex>
```

## Props

### Flex

| Prop      | Description                        | Type                                                    | Default  |
| --------- | ---------------------------------- | ------------------------------------------------------- | -------- |
| as        | HTML element to render             | 'div' \| 'span'                                         | 'div'    |
| asChild   | Whether to pass component as child | boolean                                                 | false    |
| display   | CSS display property               | 'none' \| 'inline-flex' \| 'flex'                       | 'flex'   |
| direction | CSS flex-direction property        | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'  | 'row'    |
| align     | CSS align-items property           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch' | 'start'  |
| justify   | CSS justify-content property       | 'start' \| 'center' \| 'end' \| 'between'               | 'start'  |
| wrap      | CSS flex-wrap property             | 'nowrap' \| 'wrap' \| 'wrap-reverse'                    | 'nowrap' |
| gap       | Space between child elements       | '1' - '9'                                               | -        |

The Flex component also supports all standard margin and layout props, such as `m`, `mt`, `width`, `height`, etc.

## When to Use

- Create horizontal or vertical layout structures
- Build UIs that need flexible space distribution
- Align and distribute child elements
- Build responsive layouts
- Implement nav bars, toolbars, and other basic UI components

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/flex) for the full API reference and design guidelines.
