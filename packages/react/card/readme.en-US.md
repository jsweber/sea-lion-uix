# `react-card`

Card is a versatile container component for organizing and displaying content. It supports different visual styles and sizes, and can be used as a container, button, or link.

## Installation

```sh
pnpm add @sea-lion/react-card
# or
npm install @sea-lion/react-card
yarn add @sea-lion/react-card
```

## Usage

Import the component in your code:

```tsx
import { Card } from '@sea-lion/react-card';
```

### Basic Usage

```jsx
<Card>
  <Text as="div" size="3" weight="bold" mb="2">Card Title</Text>
  <Text as="div" color="gray">This is a basic card example.</Text>
</Card>
```

### Sizes

Supports sizes `"1"` through `"5"` — larger numbers produce more padding:

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3', '4', '5'].map((size) => (
    <Card key={size} size={size}>
      <Text as="div" size="3" weight="bold" mb="2">Size {size}</Text>
      <Text as="div" color="gray">Card example at size {size}</Text>
    </Card>
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the card:

```jsx
<Flex direction="column" gap="4">
  <Card variant="surface">
    <Text as="div" size="3" weight="bold" mb="2">surface variant</Text>
    <Text as="div" color="gray">A surface style with a semi-transparent background</Text>
  </Card>

  <Card variant="classic">
    <Text as="div" size="3" weight="bold" mb="2">classic variant</Text>
    <Text as="div" color="gray">A classic style with a shadow</Text>
  </Card>

  <Card variant="ghost">
    <Text as="div" size="3" weight="bold" mb="2">ghost variant</Text>
    <Text as="div" color="gray">A ghost style with no background</Text>
  </Card>
</Flex>
```

### Interactive Cards

Use `asChild` to render the card as a button or link, making it interactive:

```jsx
<Flex direction="column" gap="4">
  {/* Button card */}
  <Card asChild>
    <button onClick={() => alert('Button card clicked')}>
      <Text as="div" size="3" weight="bold" mb="2">Button Card</Text>
      <Text as="div" color="gray">Clicking this card triggers an event</Text>
    </button>
  </Card>

  {/* Link card */}
  <Card asChild>
    <a href="https://example.com">
      <Text as="div" size="3" weight="bold" mb="2">Link Card</Text>
      <Text as="div" color="gray">This card is a link</Text>
    </a>
  </Card>
</Flex>
```

### Image Cards

Cards are commonly used to display image and text content together:

```jsx
{/* Vertical layout */}
<Card size="3">
  <Flex direction="column" gap="3">
    <img
      src="https://example.com/image.jpg"
      alt="Example image"
      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-3)' }}
    />
    <Text as="div" size="5" weight="bold">Title</Text>
    <Text as="div" color="gray" size="2">Description text</Text>
  </Flex>
</Card>

{/* Horizontal layout */}
<Card size="3">
  <Flex gap="4" align="start">
    <img
      src="https://example.com/image.jpg"
      alt="Example image"
      style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-2)', flexShrink: 0 }}
    />
    <Flex direction="column" gap="2">
      <Text as="div" size="5" weight="bold">Title</Text>
      <Text as="div" color="gray" size="2">Description text</Text>
    </Flex>
  </Flex>
</Card>
```

### Rich Content Layout

Cards can host complex content built with other components:

```jsx
<Card size="3">
  <Flex direction="column" gap="4">
    <Text as="div" size="6" weight="bold">Content Layout Example</Text>
    <Text as="div" color="gray">
      Cards can accommodate all kinds of content, including headings, text, images, and more.
    </Text>
    <Flex gap="4" align="center">
      <Text size="2" color="gray">Tags:</Text>
      <Card variant="ghost" size="1">Example Tag</Card>
      <Card variant="ghost" size="1">Layout Demo</Card>
    </Flex>
  </Flex>
</Card>
```

## Props / API

### Card

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Card size (affects padding) | `"1" \| "2" \| "3" \| "4" \| "5"` | `"1"` |
| `variant` | Visual variant | `"surface" \| "classic" \| "ghost"` | `"surface"` |
| `asChild` | Forward styles to the child element | `boolean` | `false` |
| `style` | Inline styles | `React.CSSProperties` | - |
| `className` | Custom CSS class name | `string` | - |
| `children` | Card content | `React.ReactNode` | - |

> Card also accepts all standard HTML `div` attributes.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/card) for the full API reference and design guidelines.
