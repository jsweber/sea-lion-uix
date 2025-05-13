# `react-text`

Text is a component for displaying text content in different styles and sizes. The component supports multiple sizes, weights, alignment options, and colors.

## Installation

```sh
$ yarn add @sea-lion/react-text
# or
$ npm install @sea-lion/react-text
```

## Basic Usage

```jsx
import { Text } from "@sea-lion/react-text";

export default () => {
  return (
    <>
      <Text>This is default text style</Text>
      <Text size="3" weight="medium">
        This is medium size and medium weight text
      </Text>
      <Text color="blue">This is blue text</Text>
      <Text color="red" highContrast>
        This is high contrast red text
      </Text>
    </>
  );
};
```

## Different Sizes

Text component supports nine sizes:

```jsx
<Text size="1">Text size 1 (smallest)</Text>
<Text size="2">Text size 2</Text>
<Text size="3">Text size 3</Text>
<Text size="4">Text size 4</Text>
<Text size="5">Text size 5</Text>
<Text size="6">Text size 6</Text>
<Text size="7">Text size 7</Text>
<Text size="8">Text size 8</Text>
<Text size="9">Text size 9 (largest)</Text>
```

## Different Weights

Text component supports four font weights:

```jsx
<Text weight="light">Light weight</Text>
<Text weight="regular">Regular weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="bold">Bold weight</Text>
```

## Text Alignment

You can control text alignment:

```jsx
<Text textAlign="left">Left aligned text</Text>
<Text textAlign="center">Center aligned text</Text>
<Text textAlign="right">Right aligned text</Text>
```

## Text Colors

Text component supports multiple colors:

```jsx
<Text color="gray">Gray text</Text>
<Text color="blue">Blue text</Text>
<Text color="green">Green text</Text>
<Text color="red">Red text</Text>
<Text color="purple">Purple text</Text>
<Text color="orange">Orange text</Text>
<!-- More color options -->
```

## High Contrast Text

Use the `highContrast` prop to increase the contrast between text color and background:

```jsx
<Text color="gray" highContrast>High contrast gray</Text>
<Text color="blue" highContrast>High contrast blue</Text>
<Text color="green" highContrast>High contrast green</Text>
<Text color="red" highContrast>High contrast red</Text>
```

## Text Truncation

When text content is too long, you can use the `truncate` prop to truncate it:

```jsx
<Text truncate>
  This is a very long text that will be truncated with an ellipsis because the
  truncate prop is set
</Text>
```

## Different Element Types

Text component can be rendered as different HTML elements:

```jsx
<Text as="span">This is a span element (default)</Text>
<Text as="div">This is a div element</Text>
<Text as="label">This is a label element</Text>
<Text as="p">This is a paragraph (p) element</Text>
```

## Props

| Prop         | Description                  | Type                                                        | Default | Version |
| ------------ | ---------------------------- | ----------------------------------------------------------- | ------- | ------- |
| as           | Rendered element type        | 'span' \| 'div' \| 'label' \| 'p'                           | 'span'  | 0.2.0   |
| size         | Text size                    | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -       | 0.2.0   |
| weight       | Font weight                  | 'light' \| 'regular' \| 'medium' \| 'bold'                  | -       | 0.2.0   |
| textAlign    | Text alignment               | 'left' \| 'center' \| 'right'                               | -       | 0.2.0   |
| color        | Text color                   | string                                                      | -       | 0.2.0   |
| highContrast | Whether to use high contrast | boolean                                                     | false   | 0.2.0   |
| truncate     | Whether to truncate text     | boolean                                                     | false   | 0.2.0   |
| textWrap     | Text wrapping mode           | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | -       | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
