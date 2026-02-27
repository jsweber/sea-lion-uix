# `react-checkbox-cards`

CheckboxCards is a card-style checkbox component for multi-selection in a grid layout. It combines the visual design of cards with the functionality of checkboxes.

Key features:

- Supports three sizes: 1, 2, 3
- Provides two visual variants: surface, classic
- Supports grid layout and high contrast mode
- Supports both controlled and uncontrolled usage

## Installation

```sh
pnpm add @sea-lion/react-checkbox-cards
# or
npm install @sea-lion/react-checkbox-cards
yarn add @sea-lion/react-checkbox-cards
```

## Usage

Import the component in your code:

```tsx
import * as CheckboxCards from '@sea-lion/react-checkbox-cards';
```

### Basic Usage

```jsx
<CheckboxCards.Root>
  <CheckboxCards.Item value="a">Option A</CheckboxCards.Item>
  <CheckboxCards.Item value="b">Option B</CheckboxCards.Item>
  <CheckboxCards.Item value="c">Option C</CheckboxCards.Item>
</CheckboxCards.Root>
```

### With Icons and Text

Combine icons and text for richer card content:

```jsx
import { InfoCircledIcon, RocketIcon, GearIcon } from '@radix-ui/react-icons';

<CheckboxCards.Root color="blue">
  <CheckboxCards.Item value="option1">
    <InfoCircledIcon width="20" height="20" />
    <Text>Data Analytics</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <RocketIcon width="20" height="20" />
    <Text>Automation</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option3">
    <GearIcon width="20" height="20" />
    <Text>System Settings</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

### Sizes

Supports sizes `"1"`, `"2"`, and `"3"`:

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3'].map((size) => (
    <CheckboxCards.Root key={size} size={size}>
      <CheckboxCards.Item value="option1">
        <InfoCircledIcon width="20" height="20" />
        <Text>Size {size}</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <RocketIcon width="20" height="20" />
        <Text>Example option</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the cards:

```jsx
<Flex direction="column" gap="4">
  <CheckboxCards.Root variant="surface">
    <CheckboxCards.Item value="option1">
      <Text>surface variant</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>Example option</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <CheckboxCards.Root variant="classic">
    <CheckboxCards.Item value="option1">
      <Text>classic variant</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>Example option</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>
</Flex>
```

### Colors

Use the `color` prop to set the color theme for the selected state:

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <CheckboxCards.Root key={color} color={color}>
      <CheckboxCards.Item value="option1">
        <Text>{color} theme</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <Text>Example option</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### Controlled Usage

Use `value` and `onValueChange` for controlled selection:

```jsx
const [values, setValues] = React.useState([]);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">Select feature modules:</Text>

  <CheckboxCards.Root
    value={values}
    onValueChange={setValues}
    color="blue"
  >
    <CheckboxCards.Item value="analytics">
      <InfoCircledIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">Data Analytics</Text>
        <Text size="2" color="gray">Provides detailed analytics reports</Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="automation">
      <RocketIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">Automation</Text>
        <Text size="2" color="gray">Automatically executes repetitive tasks</Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="settings">
      <GearIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">System Settings</Text>
        <Text size="2" color="gray">Customize system configuration options</Text>
      </Flex>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <Text size="2" color="gray">
    Selected: {values.length ? values.join(', ') : 'None selected'}
  </Text>
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<CheckboxCards.Root highContrast>
  <CheckboxCards.Item value="option1">
    <Text>High contrast option 1</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <Text>High contrast option 2</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

## Props / API

### CheckboxCards.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | Controlled list of selected values | `string[]` | - |
| `defaultValue` | Default selected values (uncontrolled) | `string[]` | - |
| `onValueChange` | Callback when selected values change | `(value: string[]) => void` | - |
| `size` | Card size | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | Visual variant | `"surface" \| "classic"` | `"surface"` |
| `color` | Color theme for selected state | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"blue"` |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `columns` | Grid column count | `string \| object` | - |

### CheckboxCards.Item

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | The value for this option (required) | `string` | - |
| `disabled` | Whether this option is disabled | `boolean` | `false` |
| `children` | Card content | `React.ReactNode` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/checkbox-cards) for the full API reference and design guidelines.
