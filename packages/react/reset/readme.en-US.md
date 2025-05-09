# `react-reset`

Reset is a style reset component used to clear default styles of HTML elements, ensuring consistent appearance across different browsers.

## Installation

```sh
$ yarn add @sea-lion/react-reset
# or
$ npm install @sea-lion/react-reset
```

## Basic Usage

```jsx
import { Reset } from "@sea-lion/react-reset";

export default () => {
  return (
    <Reset>
      <button>This is a button without default styles</button>
    </Reset>
  );
};
```

## Use Cases

Reset component can be applied to any HTML element to clear its default styling:

```jsx
<Reset>
  <input type="text" placeholder="Input with no default styles" />
</Reset>

<Reset>
  <ul>
    <li>List item 1 with no default styles</li>
    <li>List item 2 with no default styles</li>
  </ul>
</Reset>

<Reset>
  <a href="#">Link with no default styles</a>
</Reset>
```

## Combined Usage

Reset component often serves as a foundation for other components and can be combined with other style components:

```jsx
import { Reset } from "@sea-lion/react-reset";
import { Box } from "@sea-lion/react-box";

export default () => {
  return (
    <Reset>
      <Box padding="4" background="gray-3" borderRadius="3">
        <button>Button with combined styles</button>
      </Box>
    </Reset>
  );
};
```

## Props

| Prop     | Description                        | Type            | Default | Version |
| -------- | ---------------------------------- | --------------- | ------- | ------- |
| children | Content to reset styles            | React.ReactNode | -       | 0.2.0   |
| asChild  | Whether to render as child element | boolean         | false   | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
