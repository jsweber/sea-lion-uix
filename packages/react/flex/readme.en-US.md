# `react-flex`

Flex is a container component based on CSS flexbox layout, used to create flexible one-dimensional layouts, whether rows or columns.

## Installation

```sh
$ yarn add @sea-lion/react-flex
# or
$ npm install @sea-lion/react-flex
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

## Flexible Layouts

The Flex component supports all major flexbox layout options:

```jsx
// Vertical arrangement
<Flex direction="column" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>

// Horizontally centered
<Flex justify="center" align="center">
  <Box>Centered content</Box>
</Flex>

// Space between items
<Flex justify="between">
  <Box>Left side</Box>
  <Box>Right side</Box>
</Flex>

// Responsive layout
<Flex
  direction={{ base: 'column', md: 'row' }}
  gap={{ base: '2', md: '4' }}
>
  <Box>Vertically on small screens, horizontally on medium screens</Box>
  <Box>With different spacing</Box>
</Flex>
```

## Props

### Flex

| Prop      | Description                        | Type                                                    | Default  | Version |
| --------- | ---------------------------------- | ------------------------------------------------------- | -------- | ------- |
| as        | HTML element to render             | 'div' \| 'span'                                         | 'div'    | 0.2.0   |
| asChild   | Whether to pass component as child | boolean                                                 | false    | 0.2.0   |
| display   | CSS display property               | 'none' \| 'inline-flex' \| 'flex'                       | 'flex'   | 0.2.0   |
| direction | CSS flex-direction property        | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'  | 'row'    | 0.2.0   |
| align     | CSS align-items property           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch' | 'start'  | 0.2.0   |
| justify   | CSS justify-content property       | 'start' \| 'center' \| 'end' \| 'between'               | 'start'  | 0.2.0   |
| wrap      | CSS flex-wrap property             | 'nowrap' \| 'wrap' \| 'wrap-reverse'                    | 'nowrap' | 0.2.0   |
| gap       | Space between child elements       | '1' - '9'                                               | -        | 0.2.0   |

The Flex component also supports all standard margin and layout props, such as `m`, `mt`, `width`, `height`, etc.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
