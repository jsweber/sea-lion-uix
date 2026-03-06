# `react-heading`

Heading is a component for displaying titles, providing various levels, sizes, and style options to meet different hierarchy requirements.

## Installation

```sh
pnpm add @sea-lion/react-heading
# or
npm install @sea-lion/react-heading
yarn add @sea-lion/react-heading
```

## Usage

Import the component in your code:

```tsx
import { Heading } from '@sea-lion/react-heading';
```

## Basic Usage

```jsx
import { Heading } from "@sea-lion/react-heading";

export default () => (
  <>
    <Heading as="h1" size="9">
      Heading Level 1
    </Heading>
    <Heading as="h2" size="7">
      Heading Level 2
    </Heading>
    <Heading as="h3" size="5">
      Heading Level 3
    </Heading>
    <Heading as="h4" size="3">
      Heading Level 4
    </Heading>
    <Heading as="h5" size="2">
      Heading Level 5
    </Heading>
    <Heading as="h6" size="1">
      Heading Level 6
    </Heading>
  </>
);
```

## Sizes

Heading provides size options from 1 to 9:

```jsx
<Heading size="9">Size 9 (Largest)</Heading>
<Heading size="8">Size 8</Heading>
<Heading size="7">Size 7</Heading>
<Heading size="6">Size 6 (Default)</Heading>
<Heading size="5">Size 5</Heading>
<Heading size="4">Size 4</Heading>
<Heading size="3">Size 3</Heading>
<Heading size="2">Size 2</Heading>
<Heading size="1">Size 1 (Smallest)</Heading>
```

## Font Weight

```jsx
<Heading weight="light">Light Weight</Heading>
<Heading weight="regular">Regular Weight</Heading>
<Heading weight="medium">Medium Weight</Heading>
<Heading weight="bold">Bold Weight (Default)</Heading>
```

## Colors

```jsx
<Heading color="blue">Blue Heading</Heading>
<Heading color="green">Green Heading</Heading>
<Heading color="red">Red Heading</Heading>
<Heading color="amber">Amber Heading</Heading>
<Heading color="gray">Gray Heading</Heading>
```

## High Contrast

```jsx
<Heading color="blue">Normal Contrast</Heading>
<Heading color="blue" highContrast>High Contrast</Heading>
```

## Text Alignment

```jsx
<Heading align="left">Left Aligned</Heading>
<Heading align="center">Center Aligned</Heading>
<Heading align="right">Right Aligned</Heading>
```

## Truncation and Text Wrap

```jsx
{/* Truncate text with ellipsis */}
<div style={{ width: '300px' }}>
  <Heading truncate>This is a very long heading that will be truncated with an ellipsis when there isn't enough space...</Heading>
</div>

{/* Text wrapping control */}
<Heading textWrap="balance">Heading with balance text wrapping</Heading>
<Heading textWrap="pretty">Heading with pretty text wrapping</Heading>
```

## Responsive Sizes

```jsx
<Heading size={{ initial: '3', sm: '5', md: '7', lg: '9' }}>
  Responsive heading size
</Heading>

<Heading align={{ initial: 'left', md: 'center', lg: 'right' }}>
  Responsive text alignment
</Heading>
```

## Practical Use Cases

### Blog Article Layout

```jsx
<article>
  <Heading size="8" mb="3">Exploring the Evolution of Modern Frontend Architecture</Heading>
  <Heading as="h2" size="5" mt="5" mb="3">History of Frontend Architecture</Heading>
  <p>The frontend development field has undergone dramatic changes over the past decade...</p>
  <Heading as="h3" size="3" mt="4" mb="2">The Rise of Single Page Applications</Heading>
  <p>With the popularity of Ajax and the development of JavaScript frameworks...</p>
</article>
```

### Product Landing Page

```jsx
<div style={{ textAlign: 'center', padding: '48px', background: 'var(--blue-1)' }}>
  <Heading color="blue" size="9" align="center" mb="3">
    The Future is Now
  </Heading>
  <Heading color="gray" weight="regular" size="4" align="center">
    Our innovative products make complex tasks simple, helping you boost productivity
  </Heading>
</div>
```

## Props

### Heading

| Prop         | Description                        | Type                                              | Default |
| ------------ | ---------------------------------- | ------------------------------------------------- | ------- |
| as           | HTML element to render             | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'      | 'h1'    |
| asChild      | Whether to pass component as child | boolean                                           | false   |
| size         | Heading text size                  | '1' - '9'                                         | '6'     |
| weight       | Text weight                        | 'light' \| 'regular' \| 'medium' \| 'bold'        | 'bold'  |
| align        | Text alignment                     | 'left' \| 'center' \| 'right'                     | -       |
| color        | Text color                         | 'gray' \| 'blue' \| 'green' \| ... (theme colors) | -       |
| highContrast | Whether to use high contrast color | boolean                                           | false   |
| truncate     | Whether to truncate text           | boolean                                           | false   |
| textWrap     | Text wrapping behavior             | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'       | -       |

The Heading component also supports all standard margin props, such as `m`, `mt`, `mb`, etc.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/heading) for the full API reference and design guidelines.
