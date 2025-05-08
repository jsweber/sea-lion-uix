# `react-input`

Input is a text field component for collecting user input, providing multiple style and variant options.

## Installation

```sh
$ yarn add @sea-lion/react-input
# or
$ npm install @sea-lion/react-input
```

## Basic Usage

```jsx
import { Input } from "@sea-lion/react-input";

export default () => (
  <>
    <Input.Root placeholder="Enter text..." />

    {/* Input with icons */}
    <Input.Root>
      <Input.Slot side="left">
        <SearchIcon />
      </Input.Slot>
      <Input.Slot side="right">
        <ClearIcon />
      </Input.Slot>
    </Input.Root>

    {/* Different input types */}
    <Input.Root type="password" placeholder="Enter password" />
    <Input.Root type="number" placeholder="Enter number" />
    <Input.Root type="email" placeholder="Enter email" />
  </>
);
```

## Different Variants

Input component supports multiple variant styles:

```jsx
// Default variant (surface)
<Input.Root variant="surface" placeholder="Surface variant" />

// Classic variant
<Input.Root variant="classic" placeholder="Classic variant" />

// Soft variant
<Input.Root variant="soft" placeholder="Soft variant" />
```

## Different Sizes

Input component offers different size options:

```jsx
// Small size
<Input.Root size="1" placeholder="Small size" />

// Medium size (default)
<Input.Root size="2" placeholder="Medium size" />

// Large size
<Input.Root size="3" placeholder="Large size" />
```

## Custom Colors and Radius

```jsx
// Custom colors
<Input.Root color="blue" placeholder="Blue input" />
<Input.Root color="green" placeholder="Green input" />

// Custom radius
<Input.Root radius="full" placeholder="Full radius" />
<Input.Root radius="none" placeholder="No radius" />
```

## With Icons or Auxiliary Elements

```jsx
// With leading icon
<Input.Root>
  <Input.Slot side="left">
    <UserIcon />
  </Input.Slot>
  <Input.Slot side="right">
    <InfoIcon />
  </Input.Slot>
</Input.Root>

// With unit indicator
<Input.Root>
  <Input.Slot side="right">$</Input.Slot>
</Input.Root>

// With verification button
<Input.Root>
  <Input.Slot side="right">
    <Button>Verify</Button>
  </Input.Slot>
</Input.Root>
```

## Props

### Input.Root

| Prop         | Description         | Type                                                       | Default   | Version |
| ------------ | ------------------- | ---------------------------------------------------------- | --------- | ------- |
| size         | Input size          | '1' \| '2' \| '3'                                          | '2'       | 0.2.0   |
| variant      | Input variant style | 'classic' \| 'surface' \| 'soft'                           | 'surface' | 0.2.0   |
| color        | Input theme color   | 'gray' \| 'blue' \| 'green' \| ... (theme colors)          | -         | 0.2.0   |
| radius       | Border radius size  | 'none' \| '1' - '6' \| 'full'                              | -         | 0.2.0   |
| type         | Input type          | 'text' \| 'password' \| 'email' \| ... (HTML5 input types) | 'text'    | 0.2.0   |
| value        | Input value         | string \| number                                           | -         | 0.2.0   |
| defaultValue | Input default value | string \| number                                           | -         | 0.2.0   |

Input.Root component also supports all standard margin properties (like `m`, `mt`, `mb`, etc.) and standard HTML input element properties (like `onChange`, `onFocus`, etc.).

### Input.Slot

| Prop  | Description        | Type              | Default | Version |
| ----- | ------------------ | ----------------- | ------- | ------- |
| side  | Slot position      | 'left' \| 'right' | -       | 0.2.0   |
| color | Slot content color | (theme colors)    | -       | 0.2.0   |
| gap   | Internal gap       | '1' - '9'         | -       | 0.2.0   |
| px    | Horizontal padding | '1' - '9'         | -       | 0.2.0   |
| pl    | Left padding       | '1' - '9'         | -       | 0.2.0   |
| pr    | Right padding      | '1' - '9'         | -       | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
