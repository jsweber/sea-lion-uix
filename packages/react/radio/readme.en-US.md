# `react-radio`

Radio is a component that allows users to select a single option from a set.

## Installation

```sh
$ yarn add @sea-lion/react-radio
# or
$ npm install @sea-lion/react-radio
```

## Basic Usage

```jsx
import { Radio } from "@sea-lion/react-radio";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <div>
      <div>
        <Radio
          value="option1"
          checked={value === "option1"}
          onValueChange={setValue}
          name="radio-group"
        />{" "}
        Option 1
      </div>
      <div>
        <Radio
          value="option2"
          checked={value === "option2"}
          onValueChange={setValue}
          name="radio-group"
        />{" "}
        Option 2
      </div>
    </div>
  );
};
```

## Different Sizes

Radio component offers three sizes:

```jsx
<Radio size="1" /> {/* Small */}
<Radio size="2" /> {/* Default */}
<Radio size="3" /> {/* Large */}
```

## Custom Colors

```jsx
<Radio color="blue" />
<Radio color="green" />
<Radio color="red" />
<Radio color="purple" />
```

## Disabled State

```jsx
<Radio disabled />
<Radio disabled checked />
```

## High Contrast Mode

```jsx
<Radio highContrast />
```

## Grouping

When you need to select one option from a set, group radio buttons with the same `name` attribute:

```jsx
<div>
  <div>
    <Radio name="fruits" value="apple" /> Apple
  </div>
  <div>
    <Radio name="fruits" value="banana" /> Banana
  </div>
  <div>
    <Radio name="fruits" value="orange" /> Orange
  </div>
</div>
```

## Props

| Prop           | Description                 | Type                    | Default | Version |
| -------------- | --------------------------- | ----------------------- | ------- | ------- |
| size           | Radio button size           | '1' \| '2' \| '3'       | '2'     | 0.2.0   |
| color          | Color                       | Standard colors         | -       | 0.2.0   |
| highContrast   | High contrast mode          | boolean                 | false   | 0.2.0   |
| value          | Radio button value          | string                  | -       | 0.2.0   |
| checked        | Whether radio is checked    | boolean                 | false   | 0.2.0   |
| defaultChecked | Default checked state       | boolean                 | false   | 0.2.0   |
| disabled       | Whether radio is disabled   | boolean                 | false   | 0.2.0   |
| name           | Name for grouping radios    | string                  | -       | 0.2.0   |
| onValueChange  | Callback when value changes | (value: string) => void | -       | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
