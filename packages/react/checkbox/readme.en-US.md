# `react-checkbox`

Checkbox is a component for multiple selection in forms. It supports checked, unchecked, and indeterminate states, multiple color themes, and disabled state.

## Installation

```sh
pnpm add @sea-lion/react-checkbox
# or
npm install @sea-lion/react-checkbox
yarn add @sea-lion/react-checkbox
```

## Usage

Import the component in your code:

```tsx
import { Checkbox } from '@sea-lion/react-checkbox';
```

### Basic Usage

```jsx
<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked={checked} onCheckedChange={setChecked} />
<Checkbox checked="indeterminate" />
```

### States

Checkbox supports three states: checked, unchecked, and indeterminate.

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="2">
    <Checkbox defaultChecked />
    <Text>Checked</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox checked="indeterminate" />
    <Text>Indeterminate</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled />
    <Text color="gray">Disabled</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled defaultChecked />
    <Text color="gray">Disabled & Checked</Text>
  </Flex>
</Flex>
```

### Colors

Use the `color` prop to set the color theme of the checkbox:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} defaultChecked />
      <Text>{color} theme</Text>
    </Flex>
  ))}
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop for better visibility on dark backgrounds:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} highContrast defaultChecked />
      <Text>High contrast {color}</Text>
    </Flex>
  ))}
</Flex>
```

### Form Usage

Using Checkbox as a controlled input within a form:

```jsx
const [checked, setChecked] = React.useState(false);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">Terms of Service</Text>

  <Flex align="start" gap="2">
    <Checkbox
      checked={checked}
      onCheckedChange={() => setChecked(!checked)}
    />
    <Text size="2">I have read and agree to the Terms of Service and Privacy Policy</Text>
  </Flex>

  <button disabled={!checked}>Next Step</button>
</Flex>
```

## Props / API

### Checkbox

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `checked` | Controlled checked state | `boolean \| "indeterminate"` | - |
| `defaultChecked` | Initial checked state (uncontrolled) | `boolean` | `false` |
| `onCheckedChange` | Callback when the checked state changes | `(checked: boolean \| "indeterminate") => void` | - |
| `disabled` | Whether the checkbox is disabled | `boolean` | `false` |
| `color` | Color theme | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | - |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `size` | Checkbox size | `"1" \| "2" \| "3"` | `"2"` |
| `name` | Form field name | `string` | - |
| `value` | Form field value | `string` | - |
| `required` | Whether the field is required | `boolean` | `false` |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/checkbox) for the full API reference and design guidelines.
