# `react-link`

Link is a component for navigation between pages or opening external resources, supporting custom styles and various interaction states.

## Installation

```sh
pnpm add @sea-lion/react-link
# or
npm install @sea-lion/react-link
yarn add @sea-lion/react-link
```

## Usage

Import the component in your code:

```tsx
import { Link } from '@sea-lion/react-link';
```

## Basic Usage

```jsx
import { Link } from "@sea-lion/react-link";

export default () => (
  <div>
    <Link href="https://example.com">Click to visit example website</Link>
  </div>
);
```

## Different Sizes

The Link component offers various size options:

```jsx
<Link size="1" href="#">Size 1</Link>
<Link size="2" href="#">Size 2</Link>
<Link size="3" href="#">Size 3</Link>
<Link size="4" href="#">Size 4</Link>
<Link size="5" href="#">Size 5</Link>
<Link size="6" href="#">Size 6</Link>
<Link size="7" href="#">Size 7</Link>
<Link size="8" href="#">Size 8</Link>
<Link size="9" href="#">Size 9</Link>
```

## Underline Styles

The Link component provides multiple underline styles:

```jsx
<Link underline="auto" href="#">Auto underline (default)</Link>
<Link underline="always" href="#">Always show underline</Link>
<Link underline="hover" href="#">Show underline on hover</Link>
<Link underline="none" href="#">No underline</Link>
```

## Text Styles

The Link component inherits the style properties from the Text component:

```jsx
<Link weight="bold" href="#">Bold link</Link>
<Link truncate href="#">This is a very long text that will be truncated...</Link>
<Link textWrap="nowrap" href="#">No wrapping text</Link>
```

## Color Variants

```jsx
<Link color="blue" href="#">Blue link</Link>
<Link color="green" href="#">Green link</Link>
<Link color="red" href="#">Red link</Link>
<Link highContrast href="#">High contrast</Link>
```

## Custom Elements

Use `asChild` to apply link styles to custom elements:

```jsx
<Link asChild>
  <CustomComponent>Custom component link</CustomComponent>
</Link>
```

## With Other Components

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

<Flex gap="2" align="center">
  <Text>Check out our</Text>
  <Link href="/about">About Us</Link>
  <Text>page for more information</Text>
</Flex>;
```

## Props

### Link

| Prop         | Description                                        | Type                                                        | Default   | Version |
| ------------ | -------------------------------------------------- | ----------------------------------------------------------- | --------- | ------- |
| size         | Link size                                          | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -         | 0.2.0   |
| weight       | Font weight                                        | 'light' \| 'regular' \| 'medium' \| 'bold'                  | 'regular' | 0.2.0   |
| underline    | Underline style                                    | 'auto' \| 'always' \| 'hover' \| 'none'                     | 'auto'    | 0.2.0   |
| color        | Color                                              | standard colors                                             | -         | 0.2.0   |
| highContrast | High contrast mode                                 | boolean                                                     | false     | 0.2.0   |
| truncate     | Text truncation                                    | boolean                                                     | false     | 0.2.0   |
| textWrap     | Text wrapping                                      | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | 'wrap'    | 0.2.0   |
| asChild      | Apply the styles and behavior to the child element | boolean                                                     | false     | 0.2.0   |

The Link component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.) and all properties of the `a` element (such as `href`, `target`, etc.).

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
