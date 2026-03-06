# `react-context-menu`

ContextMenu is a menu that appears when the user right-clicks or long-presses an element, providing context-related actions. It supports submenus, checkboxes, radio items, group labels, disabled items, and more.

## Installation

```sh
pnpm add @sea-lion/react-context-menu
# or
npm install @sea-lion/react-context-menu
yarn add @sea-lion/react-context-menu
```

## Usage

Import the component in your code:

```tsx
import * as ContextMenu from '@sea-lion/react-context-menu';
```

### Basic Usage

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>Right-click here</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>Edit</ContextMenu.Item>
    <ContextMenu.Item>Copy</ContextMenu.Item>
    <ContextMenu.Item>Paste</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### Variants

Switch the visual style of the menu content with the `variant` prop:

```jsx
{/* Soft variant (default) */}
<ContextMenu.Content variant="soft">
  <ContextMenu.Label>Edit Options</ContextMenu.Label>
  <ContextMenu.Item>Cut</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
  <ContextMenu.Item>Paste</ContextMenu.Item>
</ContextMenu.Content>

{/* Solid variant */}
<ContextMenu.Content variant="solid">
  <ContextMenu.Label>Edit Options</ContextMenu.Label>
  <ContextMenu.Item>Cut</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
  <ContextMenu.Item>Paste</ContextMenu.Item>
</ContextMenu.Content>

{/* High contrast */}
<ContextMenu.Content highContrast>
  <ContextMenu.Label>Edit Options</ContextMenu.Label>
  <ContextMenu.Item>Cut</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
</ContextMenu.Content>
```

### Colors

Apply a theme color to the menu content via the `color` prop:

```jsx
<ContextMenu.Content color="blue">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="crimson">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="green">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>
```

### Sizes

Control menu density with the `size` prop:

```jsx
{/* Size 1 (compact) */}
<ContextMenu.Content size="1">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>

{/* Size 2 (default) */}
<ContextMenu.Content size="2">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>
```

### Submenus

Use `Sub`, `SubTrigger`, and `SubContent` to build nested submenus:

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>Right-click for nested menu</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>View</ContextMenu.Item>
    <ContextMenu.Item>Refresh</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>More Options</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>Option 1</ContextMenu.Item>
        <ContextMenu.Item>Option 2</ContextMenu.Item>
        <ContextMenu.Item>Option 3</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>Sort By</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.RadioGroup value="name">
          <ContextMenu.RadioItem value="name">Name</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="date">Date</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="size">Size</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### Checkboxes and Radio Items

Use `CheckboxItem` for toggle items and `RadioGroup` + `RadioItem` for single-selection:

```jsx
const [showToolbar, setShowToolbar] = useState(true);
const [theme, setTheme] = useState('light');

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>Right-click to view</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Label>View Options</ContextMenu.Label>
    <ContextMenu.CheckboxItem
      checked={showToolbar}
      onCheckedChange={setShowToolbar}
    >
      Show Toolbar
    </ContextMenu.CheckboxItem>
    <ContextMenu.CheckboxItem>Show Status Bar</ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.Group>
      <ContextMenu.Label>Theme</ContextMenu.Label>
      <ContextMenu.RadioGroup value={theme} onValueChange={setTheme}>
        <ContextMenu.RadioItem value="light">Light</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="dark">Dark</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="system">System</ContextMenu.RadioItem>
      </ContextMenu.RadioGroup>
    </ContextMenu.Group>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### Disabled Items

Use the `disabled` prop to disable specific menu items:

```jsx
<ContextMenu.Content>
  <ContextMenu.Item>Edit</ContextMenu.Item>
  <ContextMenu.Item disabled>Delete (no permission)</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
  <ContextMenu.Separator />
  <ContextMenu.Sub>
    <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
    <ContextMenu.SubContent>
      <ContextMenu.Item>Via Email</ContextMenu.Item>
      <ContextMenu.Item disabled>Via Message (unavailable)</ContextMenu.Item>
      <ContextMenu.Item>Create Link</ContextMenu.Item>
    </ContextMenu.SubContent>
  </ContextMenu.Sub>
</ContextMenu.Content>
```

## When to Use

- Expose additional actions for a specific element or area
- Reduce UI complexity by hiding less common actions
- Follow desktop patterns where users access actions via right-click
- Provide extra options on mobile via long-press

## Props / API

### ContextMenu.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `onOpenChange` | Callback when menu open state changes | `(open: boolean) => void` | — |
| `modal` | Render in modal mode | `boolean` | `true` |

### ContextMenu.Trigger

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `asChild` | Render child as the trigger element | `boolean` | `false` |
| `disabled` | Disable the trigger | `boolean` | `false` |

### ContextMenu.Content

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Menu size | `"1" \| "2"` | `"2"` |
| `variant` | Visual variant | `"soft" \| "solid"` | `"soft"` |
| `color` | Theme color | `string` | — |
| `highContrast` | Use high-contrast color | `boolean` | `false` |

### ContextMenu.Item

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | Disable this item | `boolean` | `false` |
| `onSelect` | Callback when item is selected | `(event: Event) => void` | — |
| `color` | Per-item color | `string` | — |
| `shortcut` | Keyboard shortcut hint | `string` | — |

### ContextMenu.CheckboxItem

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `checked` | Checked state | `boolean` | — |
| `onCheckedChange` | Callback when checked state changes | `(checked: boolean) => void` | — |
| `disabled` | Disable this item | `boolean` | `false` |

### ContextMenu.RadioGroup

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | Current selected value | `string` | — |
| `onValueChange` | Callback when value changes | `(value: string) => void` | — |

### ContextMenu.RadioItem

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | Item value (required) | `string` | — |
| `disabled` | Disable this item | `boolean` | `false` |

### ContextMenu.Sub / SubTrigger / SubContent

Used to build nested submenus. `Sub` wraps `SubTrigger` (the trigger) and `SubContent` (the submenu).

### ContextMenu.Label

A non-interactive group label for displaying section names within the menu.

### ContextMenu.Separator

A visual divider for separating groups of menu items.

### ContextMenu.Group

Logically groups related menu items together.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/context-menu) for the full API reference and design guidelines.
