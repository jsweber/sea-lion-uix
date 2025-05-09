# `react-radio-group`

RadioGroup is a component that allows users to select a single option from a list of options.

## Installation

```sh
$ yarn add @sea-lion/react-radio-group
# or
$ npm install @sea-lion/react-radio-group
```

## Basic Usage

```jsx
import * as RadioGroup from "@sea-lion/react-radio-group";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
    </RadioGroup.Root>
  );
};
```

## Different Sizes

RadioGroup component offers three sizes:

```jsx
<RadioGroup.Root size="1">
  <RadioGroup.Item value="small">Small size (size="1")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="2">
  <RadioGroup.Item value="medium">Default size (size="2")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="3">
  <RadioGroup.Item value="large">Large size (size="3")</RadioGroup.Item>
</RadioGroup.Root>
```

## Different Variants

RadioGroup component offers three variant styles:

```jsx
<RadioGroup.Root variant="surface">
  <RadioGroup.Item value="surface">Surface variant</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="classic">
  <RadioGroup.Item value="classic">Classic variant</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="soft">
  <RadioGroup.Item value="soft">Soft variant</RadioGroup.Item>
</RadioGroup.Root>
```

## Custom Colors

```jsx
<RadioGroup.Root color="blue">
  <RadioGroup.Item value="blue">Blue</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="green">
  <RadioGroup.Item value="green">Green</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="red">
  <RadioGroup.Item value="red">Red</RadioGroup.Item>
</RadioGroup.Root>
```

## High Contrast Mode

```jsx
<RadioGroup.Root highContrast>
  <RadioGroup.Item value="high-contrast">High contrast</RadioGroup.Item>
</RadioGroup.Root>
```

## Disabled State

```jsx
<RadioGroup.Root>
  <RadioGroup.Item value="enabled">Enabled state</RadioGroup.Item>
  <RadioGroup.Item value="disabled" disabled>
    Disabled state
  </RadioGroup.Item>
</RadioGroup.Root>
```

## Custom Layout

RadioGroup component is vertically arranged by default, but you can use styles to create a horizontal layout:

```jsx
<RadioGroup.Root style={{ flexDirection: "row", gap: "10px" }}>
  <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
</RadioGroup.Root>
```

## Root Props

| Prop          | Description           | Type                             | Default   | Version |
| ------------- | --------------------- | -------------------------------- | --------- | ------- |
| size          | Radio button size     | '1' \| '2' \| '3'                | '2'       | 0.2.0   |
| variant       | Variant style         | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0   |
| color         | Color                 | Standard colors                  | -         | 0.2.0   |
| highContrast  | High contrast mode    | boolean                          | false     | 0.2.0   |
| value         | Selected value        | string                           | -         | 0.2.0   |
| defaultValue  | Default value         | string                           | -         | 0.2.0   |
| onValueChange | Value change callback | (value: string) => void          | -         | 0.2.0   |

## Item Props

| Prop     | Description              | Type    | Default | Version |
| -------- | ------------------------ | ------- | ------- | ------- |
| value    | Item value               | string  | -       | 0.2.0   |
| disabled | Whether item is disabled | boolean | false   | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
