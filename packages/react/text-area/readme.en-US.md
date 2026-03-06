# `react-text-area`

TextArea is a multi-line text input component for users to enter longer text content. The component supports multiple sizes, visual variants, and custom resize options.

## Installation

```sh
$ yarn add @sea-lion/react-text-area
# or
$ npm install @sea-lion/react-text-area
```

## Basic Usage

```jsx
import { TextArea } from "@sea-lion/react-text-area";

export default () => {
  return (
    <>
      <TextArea placeholder="Enter description..." />
    </>
  );
};
```

## Different Sizes

TextArea component supports three sizes:

```jsx
<TextArea size="1" placeholder="Small text area" />
<TextArea size="2" placeholder="Medium text area (default)" />
<TextArea size="3" placeholder="Large text area" />
```

## Different Variants

TextArea component supports three visual variants:

```jsx
<TextArea variant="surface" placeholder="Surface variant (default)" />
<TextArea variant="classic" placeholder="Classic variant" />
<TextArea variant="soft" placeholder="Soft variant" color="blue" />
```

## Resize Options

You can control how the text area can be resized:

```jsx
<TextArea resize="none" placeholder="Cannot be resized" />
<TextArea resize="vertical" placeholder="Can be resized vertically" />
<TextArea resize="horizontal" placeholder="Can be resized horizontally" />
<TextArea resize="both" placeholder="Can be resized freely" />
```

## Colors

TextArea component supports multiple colors, especially with the soft variant:

```jsx
<TextArea variant="soft" color="blue" placeholder="Blue text area" />
<TextArea variant="soft" color="green" placeholder="Green text area" />
<TextArea variant="soft" color="red" placeholder="Red text area" />
<TextArea variant="soft" color="purple" placeholder="Purple text area" />
```

## Disabled and Read-Only States

```jsx
<TextArea disabled placeholder="Disabled state" />
<TextArea readOnly value="Read-only content" />
```

## Custom Radius

You can customize the border radius of the text area:

```jsx
<TextArea radius="none" placeholder="No radius" />
<TextArea radius="small" placeholder="Small radius" />
<TextArea radius="medium" placeholder="Medium radius" />
<TextArea radius="large" placeholder="Large radius" />
<TextArea radius="full" placeholder="Full radius" />
```

## Default Value and Controlled Component

```jsx
// Uncontrolled component (with default value)
<TextArea defaultValue="Default text content" />;

// Controlled component
const [value, setValue] = React.useState("");
<TextArea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
/>;
```

## Props

| Prop         | Description     | Type                                               | Default   | Version |
| ------------ | --------------- | -------------------------------------------------- | --------- | ------- |
| size         | TextArea size   | '1' \| '2' \| '3'                                  | '2'       | 0.2.0   |
| variant      | Visual variant  | 'classic' \| 'surface' \| 'soft'                   | 'surface' | 0.2.0   |
| resize       | Resize behavior | 'none' \| 'vertical' \| 'horizontal' \| 'both'     | -         | 0.2.0   |
| color        | TextArea color  | string                                             | -         | 0.2.0   |
| radius       | Border radius   | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0   |
| defaultValue | Default value   | string                                             | -         | 0.2.0   |
| value        | Current value   | string                                             | -         | 0.2.0   |
| disabled     | Disabled state  | boolean                                            | false     | 0.2.0   |
| readOnly     | Read-only state | boolean                                            | false     | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/text-area) for the full API reference and design guidelines.
