# `react-aspect-ratio`

AspectRatio is a container component that maintains a fixed aspect ratio for its content.

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

```jsx
<AspectRatio.Root ratio={16 / 9}>
  <img
    src="https://example.com/image.jpg"
    alt="Example"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
</AspectRatio.Root>
```

### Different Ratios

Set the aspect ratio via the `ratio` prop, e.g. `16/9`, `4/3`, `1`.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
