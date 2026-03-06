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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          value="option1"
          checked={value === "option1"}
          onValueChange={setValue}
          name="radio-group"
        />
        Option 1
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          value="option2"
          checked={value === "option2"}
          onValueChange={setValue}
          name="radio-group"
        />
        Option 2
      </div>
    </div>
  );
};
```

## Different Sizes

Radio component offers three sizes:

```jsx
<Radio size="1" value="s1" defaultChecked name="s1" /> {/* Small */}
<Radio size="2" value="s2" defaultChecked name="s2" /> {/* Default */}
<Radio size="3" value="s3" defaultChecked name="s3" /> {/* Large */}
```

## Custom Colors

```jsx
<Radio value="default" defaultChecked name="c1" />              {/* Default color */}
<Radio value="blue" color="blue" defaultChecked name="c2" />    {/* Blue */}
<Radio value="green" color="green" defaultChecked name="c3" />  {/* Green */}
<Radio value="red" color="red" defaultChecked name="c4" />      {/* Red */}
<Radio value="purple" color="purple" defaultChecked name="c5" /> {/* Purple */}
<Radio value="orange" color="orange" defaultChecked name="c6" /> {/* Orange */}
```

## Disabled State

```jsx
<Radio disabled value="d1" name="d1" />              {/* Disabled, unchecked */}
<Radio disabled defaultChecked value="d2" name="d2" /> {/* Disabled, checked */}
```

## High Contrast Mode

```jsx
<Radio value="c1" defaultChecked name="contrast1" />                    {/* Normal contrast */}
<Radio value="c2" highContrast defaultChecked name="contrast2" />        {/* High contrast */}
<Radio value="c3" color="blue" defaultChecked name="contrast3" />        {/* Normal contrast (blue) */}
<Radio value="c4" color="blue" highContrast defaultChecked name="contrast4" /> {/* High contrast (blue) */}
```

## Grouping

When you need to select one option from a set, group radio buttons with the same `name` attribute:

```jsx
const [fruit, setFruit] = useState("apple");

<div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="apple" checked={fruit === "apple"} onValueChange={setFruit} />
    Apple
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="banana" checked={fruit === "banana"} onValueChange={setFruit} />
    Banana
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="orange" checked={fruit === "orange"} onValueChange={setFruit} />
    Orange
  </div>
</div>
```

## Practical Use Cases

### Personal Information Form

```jsx
const [gender, setGender] = useState("male");
const [education, setEducation] = useState("bachelor");

<form>
  <div>
    <p>Gender</p>
    <div style={{ display: 'flex', gap: '16px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio name="gender" value="male" checked={gender === "male"} onValueChange={setGender} />
        Male
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio name="gender" value="female" checked={gender === "female"} onValueChange={setGender} />
        Female
      </label>
    </div>
  </div>

  <div>
    <p>Highest Education</p>
    {['High School', 'Bachelor', 'Master', 'PhD'].map((level, i) => (
      <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <Radio name="education" value={level} checked={education === level} onValueChange={setEducation} />
        {level}
      </label>
    ))}
  </div>
</form>
```

### Preference Toggle

```jsx
const [preference, setPreference] = useState("option1");

<div>
  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
    {['Option 1', 'Option 2', 'Option 3'].map((opt, i) => (
      <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          size="3"
          color="purple"
          name="preference"
          value={`option${i + 1}`}
          checked={preference === `option${i + 1}`}
          onValueChange={setPreference}
        />
        {opt}
      </label>
    ))}
  </div>
  <div style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: '4px' }}>
    Selected: {preference}
  </div>
</div>
```

## When to Use

- When users need to select a single option from a mutually exclusive set
- When there are few options that can all be displayed (typically no more than 7)
- When the selection should be immediately submitted without a confirmation step
- When users should be able to see all available options at a glance (vs. a dropdown)

## Props

| Prop           | Description                 | Type                    | Default |
| -------------- | --------------------------- | ----------------------- | ------- |
| size           | Radio button size           | '1' \| '2' \| '3'       | '2'     |
| color          | Color                       | Standard colors         | -       |
| highContrast   | High contrast mode          | boolean                 | false   |
| value          | Radio button value          | string                  | -       |
| checked        | Whether radio is checked    | boolean                 | false   |
| defaultChecked | Default checked state       | boolean                 | false   |
| disabled       | Whether radio is disabled   | boolean                 | false   |
| name           | Name for grouping radios    | string                  | -       |
| onValueChange  | Callback when value changes | (value: string) => void | -       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/radio) for the full API reference and design guidelines.
