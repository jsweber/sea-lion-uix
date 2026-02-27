# `react-aspect-ratio`

AspectRatio is a container component that maintains a fixed aspect ratio for its content. Regardless of how the container width changes, the content always preserves the specified aspect ratio. It is ideal for displaying media content like images and videos at a consistent proportion.

## Installation

```sh
pnpm add @sea-lion/react-aspect-ratio
# or
npm install @sea-lion/react-aspect-ratio
yarn add @sea-lion/react-aspect-ratio
```

## Usage

Import the component in your code:

```tsx
import * as AspectRatio from '@sea-lion/react-aspect-ratio';
```

### Basic Usage

Set the aspect ratio with the `ratio` prop (value = width / height):

```jsx
<div style={{ width: '500px' }}>
  <AspectRatio.Root ratio={16 / 9}>
    <img
      src="https://example.com/image.jpg"
      alt="Example image"
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  </AspectRatio.Root>
</div>
```

### Different Aspect Ratios

Common aspect ratio examples:

```jsx
<div style={{ display: 'flex', gap: '20px' }}>
  {[
    { ratio: 16 / 9, name: '16:9 Widescreen' },
    { ratio: 4 / 3, name: '4:3 Standard' },
    { ratio: 1, name: '1:1 Square' },
    { ratio: 9 / 16, name: '9:16 Portrait' },
  ].map(({ ratio, name }) => (
    <div key={name} style={{ width: '200px' }}>
      <AspectRatio.Root ratio={ratio}>
        <img
          src="https://example.com/image.jpg"
          alt="Example image"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </AspectRatio.Root>
      <Text size="2" style={{ marginTop: '8px' }}>{name}</Text>
    </div>
  ))}
</div>
```

### Embedded Video

AspectRatio is perfect for embedding responsive videos:

```jsx
<div style={{ width: '500px' }}>
  <AspectRatio.Root ratio={16 / 9}>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/example"
      title="Video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio.Root>
</div>
```

### Colored Background Container

AspectRatio is not limited to media — it can be used for any layout area that needs to maintain a fixed proportion:

```jsx
<div style={{ width: '300px' }}>
  <AspectRatio.Root ratio={1}>
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--accent-9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Text size="5">1:1</Text>
    </div>
  </AspectRatio.Root>
</div>
```

### Responsive Media Gallery

Combine with CSS Grid or Flex layouts to build a responsive media gallery:

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
  {images.map((src, i) => (
    <AspectRatio.Root key={i} ratio={4 / 3}>
      <img
        src={src}
        alt={`Image ${i + 1}`}
        style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-2)' }}
      />
    </AspectRatio.Root>
  ))}
</div>
```

## When to Use

- Responsive display of images, videos, and other media content
- Card cover images that need to maintain a fixed aspect ratio
- Creating proportional placeholder areas (skeleton screens)
- Embedding third-party iframe content (video players, maps, etc.)

## Props / API

### AspectRatio.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `ratio` | Aspect ratio, e.g. `16/9`, `4/3`, `1` | `number` | `1` |
| `style` | Inline styles | `React.CSSProperties` | - |
| `className` | Custom CSS class name | `string` | - |
| `children` | Container content (usually an image or video) | `React.ReactNode` | - |

> Child elements typically need `width: 100%; height: 100%; object-fit: cover;` to correctly fill the container.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/aspect-ratio) for the full API reference and design guidelines.
