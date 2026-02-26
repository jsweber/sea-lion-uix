# `react-box`

Box is a basic layout container component that supports div/span rendering and asChild behavior.

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

Supports specifying the rendered element via `as`, plus margin, padding, and other layout props.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
