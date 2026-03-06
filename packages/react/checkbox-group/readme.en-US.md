# `react-checkbox-group`

CheckboxGroup is a set of checkboxes for selecting multiple values from a group. Compared to a single Checkbox, it provides unified value management and layout control, and is better for group usage.

## Installation

```sh
pnpm add @sea-lion/react-checkbox-group
# or
npm install @sea-lion/react-checkbox-group
yarn add @sea-lion/react-checkbox-group
```

## Usage

Import the component in your code:

```tsx
import * as CheckboxGroup from '@sea-lion/react-checkbox-group';
```

### Basic Usage

```jsx
<CheckboxGroup.Root value={selected} onValueChange={setSelected}>
  <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Uncontrolled (Default Value)

Use `defaultValue` to set initial checked items; state is managed internally:

```jsx
<CheckboxGroup.Root defaultValue={['apple', 'banana']}>
  <CheckboxGroup.Item value="apple">Apple</CheckboxGroup.Item>
  <CheckboxGroup.Item value="banana">Banana</CheckboxGroup.Item>
  <CheckboxGroup.Item value="orange">Orange</CheckboxGroup.Item>
  <CheckboxGroup.Item value="pear">Pear</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Controlled

Fully control the checked state via `value` and `onValueChange`:

```jsx
const [value, setValue] = useState(['option2']);

<CheckboxGroup.Root value={value} onValueChange={setValue}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>

<p>Selected: {value.join(', ') || 'none'}</p>
```

### Sizes

Three sizes are supported: `"1"` (small), `"2"` (medium, default), `"3"` (large):

```jsx
<CheckboxGroup.Root size="1" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="2" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="3" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Variants

Three visual variants are available: `"classic"` (default), `"surface"`, `"soft"`:

```jsx
<CheckboxGroup.Root variant="classic" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Classic</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="surface" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Surface</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="soft" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Soft</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Colors

Use the `color` prop to apply a theme color from the design system token palette:

```jsx
<CheckboxGroup.Root color="blue" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Blue (default)</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="crimson" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Crimson</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="grass" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Grass</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="amber" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Amber</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### High Contrast

Use `highContrast` for improved visibility in accessibility-sensitive scenarios:

```jsx
<CheckboxGroup.Root color="blue" highContrast defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">High contrast option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">High contrast option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Orientation

Control the layout direction with `orientation`:

```jsx
{/* Vertical (default) */}
<CheckboxGroup.Root defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

{/* Horizontal */}
<CheckboxGroup.Root
  orientation="horizontal"
  defaultValue={['option1']}
  style={{ flexDirection: 'row', alignItems: 'center' }}
>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Disabled State

Supports disabling the whole group or individual items:

```jsx
{/* Whole group disabled */}
<CheckboxGroup.Root disabled defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

{/* Individual item disabled */}
<CheckboxGroup.Root defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2" disabled>Option 2 (disabled)</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Form Usage (Required Field)

Use `name` and `required` when integrating with HTML forms:

```jsx
<form>
  <CheckboxGroup.Root required name="required-options" defaultValue={['option1']}>
    <CheckboxGroup.Item value="option1">Option 1 (required)</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option3">Option 3</CheckboxGroup.Item>
  </CheckboxGroup.Root>
</form>
```

## When to Use

- When users need to select multiple options from a set
- When users need to toggle multiple on/off options
- When used with forms to collect multiple option values
- For config selection, multi-criteria filtering, batch operations on lists, etc.

## Props / API

### CheckboxGroup.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Checkbox size | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | Visual variant | `"classic" \| "soft" \| "surface"` | `"classic"` |
| `color` | Theme color | `"gray" \| "blue" \| "crimson" \| "green" \| ...` | — |
| `highContrast` | Use high-contrast color | `boolean` | `false` |
| `disabled` | Disable the entire group | `boolean` | `false` |
| `orientation` | Layout direction | `"horizontal" \| "vertical"` | `"vertical"` |
| `value` | Controlled checked values | `string[]` | — |
| `defaultValue` | Uncontrolled default checked values | `string[]` | `[]` |
| `onValueChange` | Callback when selection changes | `(value: string[]) => void` | — |
| `required` | Whether a selection is required | `boolean` | `false` |
| `name` | Form field name | `string` | — |

### CheckboxGroup.Item

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | The value of this item (required) | `string` | — |
| `disabled` | Disable this item | `boolean` | `false` |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/checkbox-group) for the full API reference and design guidelines.
