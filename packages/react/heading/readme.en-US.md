# `react-heading`

Heading is a component for displaying titles, providing various levels, sizes, and style options to meet different hierarchy requirements.

## Installation

```sh
$ yarn add @sea-lion/react-heading
# or
$ npm install @sea-lion/react-heading
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

## Heading Styles

The Heading component supports various style options:

```jsx
// Different colors
<Heading color="blue">Blue Heading</Heading>
<Heading color="amber">Amber Heading</Heading>

// Different weights
<Heading weight="regular">Regular Weight</Heading>
<Heading weight="medium">Medium Weight</Heading>
<Heading weight="bold">Bold Weight</Heading>

// Text alignment
<Heading align="left">Left Aligned</Heading>
<Heading align="center">Center Aligned</Heading>
<Heading align="right">Right Aligned</Heading>

// Truncate text (add ellipsis)
<Heading truncate>This is a very long heading that will be truncated with an ellipsis when there isn't enough space...</Heading>

// Responsive sizes
<Heading size={{ initial: '3', sm: '5', lg: '7' }}>
  Heading with different sizes on different screen sizes
</Heading>
```

## Props

### Heading

| Prop         | Description                        | Type                                              | Default | Version |
| ------------ | ---------------------------------- | ------------------------------------------------- | ------- | ------- |
| as           | HTML element to render             | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'      | 'h1'    | 0.2.0   |
| asChild      | Whether to pass component as child | boolean                                           | false   | 0.2.0   |
| size         | Heading text size                  | '1' - '9'                                         | '6'     | 0.2.0   |
| weight       | Text weight                        | 'light' \| 'regular' \| 'medium' \| 'bold'        | 'bold'  | 0.2.0   |
| align        | Text alignment                     | 'left' \| 'center' \| 'right'                     | -       | 0.2.0   |
| color        | Text color                         | 'gray' \| 'blue' \| 'green' \| ... (theme colors) | -       | 0.2.0   |
| highContrast | Whether to use high contrast color | boolean                                           | false   | 0.2.0   |
| truncate     | Whether to truncate text           | boolean                                           | false   | 0.2.0   |
| textWrap     | Text wrapping behavior             | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'       | -       | 0.2.0   |

The Heading component also supports all standard margin props, such as `m`, `mt`, `mb`, etc.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
