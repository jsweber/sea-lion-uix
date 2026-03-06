# `react-callout`

Callout is a component for displaying important information, tips, warnings, and other messages. It includes an icon and text, and supports different visual styles, sizes, and color themes.

Key features:

- Supports three sizes: 1, 2, 3
- Provides three visual variants: soft, surface, outline
- Customizable color themes with high contrast mode support
- Includes Icon and Text subcomponents

## Installation

```sh
pnpm add @sea-lion/react-callout
# or
npm install @sea-lion/react-callout
yarn add @sea-lion/react-callout
```

## Usage

Import the component in your code:

```tsx
import * as Callout from '@sea-lion/react-callout';
```

### Basic Usage

Callout is composed of three subcomponents: `Root`, `Icon`, and `Text`:

```jsx
import { InfoCircledIcon } from '@radix-ui/react-icons';

<Callout.Root>
  <Callout.Icon>
    <InfoCircledIcon width="20" height="20" />
  </Callout.Icon>
  <Callout.Text>
    This is a basic Callout for displaying important information.
  </Callout.Text>
</Callout.Root>
```

### Sizes

Supports sizes `"1"`, `"2"`, and `"3"`:

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3'].map((size) => (
    <Callout.Root key={size} size={size}>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>
        Callout at size {size}
      </Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the Callout:

```jsx
<Flex direction="column" gap="4">
  <Callout.Root variant="soft">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>soft variant — Soft background</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="surface">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>surface variant — Surface style</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="outline">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>outline variant — Outlined style</Callout.Text>
  </Callout.Root>
</Flex>
```

### Colors and Use Cases

Combine colors and icons to distinguish different types of messages:

```jsx
import { InfoCircledIcon, CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

<Flex direction="column" gap="4">
  {/* Info message */}
  <Callout.Root color="blue" variant="soft">
    <Callout.Icon>
      <InfoCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      The system will undergo scheduled maintenance at midnight. Please save your work in advance.
    </Callout.Text>
  </Callout.Root>

  {/* Success message */}
  <Callout.Root color="green" variant="surface">
    <Callout.Icon>
      <CheckCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      Your changes have been saved successfully. All settings are now in effect.
    </Callout.Text>
  </Callout.Root>

  {/* Warning message */}
  <Callout.Root color="yellow" variant="outline">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      Your storage space is running low. Please clean up unnecessary files.
    </Callout.Text>
  </Callout.Root>

  {/* Error message */}
  <Callout.Root color="red" variant="soft">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      Operation failed. Please try again later or contact an administrator.
    </Callout.Text>
  </Callout.Root>
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex direction="column" gap="4">
  {['soft', 'surface', 'outline'].map((variant) => (
    <Callout.Root key={variant} variant={variant} highContrast>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>
        High contrast {variant} Callout
      </Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

## Props / API

### Callout.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Callout size | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | Visual variant | `"soft" \| "surface" \| "outline"` | `"soft"` |
| `color` | Color theme | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| "yellow" \| ...` | `"blue"` |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `role` | ARIA role | `string` | `"group"` |
| `children` | Child nodes (Icon + Text) | `React.ReactNode` | - |

### Callout.Icon

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `children` | Icon content | `React.ReactNode` | - |

### Callout.Text

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `children` | Message text content | `React.ReactNode` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/callout) for the full API reference and design guidelines.
