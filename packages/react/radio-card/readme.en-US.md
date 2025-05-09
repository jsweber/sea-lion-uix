# `react-radio-card`

RadioCard is a card-style radio button component for selecting one option from a set of options in card format.

## Installation

```sh
$ yarn add @sea-lion/react-radio-card
# or
$ npm install @sea-lion/react-radio-card
```

## Basic Usage

```jsx
import * as RadioCards from "@sea-lion/react-radio-card";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioCards.Root value={value} onValueChange={setValue}>
      <RadioCards.Item value="option1">Option 1</RadioCards.Item>
      <RadioCards.Item value="option2">Option 2</RadioCards.Item>
      <RadioCards.Item value="option3">Option 3</RadioCards.Item>
    </RadioCards.Root>
  );
};
```

## Different Sizes

RadioCards component offers three sizes:

```jsx
<RadioCards.Root size="1">
  {/* Small size */}
</RadioCards.Root>

<RadioCards.Root size="2">
  {/* Default size */}
</RadioCards.Root>

<RadioCards.Root size="3">
  {/* Large size */}
</RadioCards.Root>
```

## Different Variants

RadioCards component offers two variant styles:

```jsx
<RadioCards.Root variant="surface">
  {/* Default style */}
</RadioCards.Root>

<RadioCards.Root variant="classic">
  {/* Classic style */}
</RadioCards.Root>
```

## Custom Colors

```jsx
<RadioCards.Root color="blue">
  {/* Blue theme */}
</RadioCards.Root>

<RadioCards.Root color="green">
  {/* Green theme */}
</RadioCards.Root>

<RadioCards.Root color="red">
  {/* Red theme */}
</RadioCards.Root>
```

## High Contrast Mode

```jsx
<RadioCards.Root highContrast>{/* High contrast mode */}</RadioCards.Root>
```

## Custom Grid Layout

RadioCards component supports custom column layout and gap:

```jsx
<RadioCards.Root columns="2" gap="3">
  {/* Two columns with gap 3 */}
</RadioCards.Root>

<RadioCards.Root columns="3" gap="4">
  {/* Three columns with gap 4 */}
</RadioCards.Root>

<RadioCards.Root columns="repeat(auto-fit, minmax(200px, 1fr))" gap="5">
  {/* Responsive layout */}
</RadioCards.Root>
```

## Cards with Icons

```jsx
import { PersonIcon, GearIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@sea-lion/react-flex";

<RadioCards.Root>
  <RadioCards.Item value="profile">
    <Flex gap="2" align="center">
      <PersonIcon />
      <Text>Profile</Text>
    </Flex>
  </RadioCards.Item>
  <RadioCards.Item value="settings">
    <Flex gap="2" align="center">
      <GearIcon />
      <Text>Settings</Text>
    </Flex>
  </RadioCards.Item>
</RadioCards.Root>;
```

## Disabled State

```jsx
<RadioCards.Root>
  <RadioCards.Item value="option1">Option 1</RadioCards.Item>
  <RadioCards.Item value="option2" disabled>
    Option 2 (Disabled)
  </RadioCards.Item>
  <RadioCards.Item value="option3">Option 3</RadioCards.Item>
</RadioCards.Root>
```

## Root Props

| Prop          | Description                 | Type                    | Default                              | Version |
| ------------- | --------------------------- | ----------------------- | ------------------------------------ | ------- |
| size          | Card size                   | '1' \| '2' \| '3'       | '2'                                  | 0.2.0   |
| variant       | Variant style               | 'surface' \| 'classic'  | 'surface'                            | 0.2.0   |
| color         | Color                       | Standard colors         | -                                    | 0.2.0   |
| highContrast  | High contrast mode          | boolean                 | false                                | 0.2.0   |
| columns       | Grid column layout          | string                  | repeat(auto-fit, minmax(160px, 1fr)) | 0.2.0   |
| gap           | Grid gap                    | string                  | '4'                                  | 0.2.0   |
| value         | Selected value              | string                  | -                                    | 0.2.0   |
| defaultValue  | Default selected value      | string                  | -                                    | 0.2.0   |
| onValueChange | Callback when value changes | (value: string) => void | -                                    | 0.2.0   |

## Item Props

| Prop     | Description              | Type    | Default | Version |
| -------- | ------------------------ | ------- | ------- | ------- |
| value    | Item value               | string  | -       | 0.2.0   |
| disabled | Whether item is disabled | boolean | false   | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
