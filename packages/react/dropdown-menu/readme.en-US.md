# `react-dropdown-menu`

DropdownMenu is a dropdown that shows a list of options when the user clicks a trigger. It supports nested submenus, checkboxes, and radio items.

## Installation

```sh
pnpm add @sea-lion/react-dropdown-menu
# or
npm install @sea-lion/react-dropdown-menu
yarn add @sea-lion/react-dropdown-menu
```

## Usage

Import the component in your code:

```tsx
import * as DropdownMenu from '@sea-lion/react-dropdown-menu';
```

### Basic Usage

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <button>Open menu</button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onSelect={() => {}}>Option 1</DropdownMenu.Item>
    <DropdownMenu.Item onSelect={() => {}}>Option 2</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>Submenu</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>Sub item</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### With Button (and Shortcuts)

Use `TriggerIcon` and the `shortcut` prop to enhance the user experience:

```jsx
import { Button } from '@sea-lion/react-button';

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      Menu Options <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>New Document</DropdownMenu.Item>
    <DropdownMenu.Item>Open File...</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘S">Save</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⇧⌘S">Save As...</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Export</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Sizes

Control menu density with the `size` prop on `DropdownMenu.Content`:

```jsx
{/* Small */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Small Menu</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="1">
    <DropdownMenu.Item>Option 1</DropdownMenu.Item>
    <DropdownMenu.Item>Option 2</DropdownMenu.Item>
    <DropdownMenu.Item>Option 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

{/* Default */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Default Menu</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="2">
    <DropdownMenu.Item>Option 1</DropdownMenu.Item>
    <DropdownMenu.Item>Option 2</DropdownMenu.Item>
    <DropdownMenu.Item>Option 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Submenus

Use `Sub`, `SubTrigger`, and `SubContent` to build nested menus:

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      Advanced Options <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Simple Action</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>File Operations</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>New File</DropdownMenu.Item>
        <DropdownMenu.Item>Delete File</DropdownMenu.Item>
        <DropdownMenu.Item>Rename</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>Edit Operations</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item shortcut="⌘C">Copy</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘V">Paste</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘X">Cut</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Exit</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Checkboxes and Radio Items

Use `CheckboxItem` for toggles and `RadioGroup` + `RadioItem` for single-selection:

```jsx
const [checked, setChecked] = useState(true);
const [fontSize, setFontSize] = useState('medium');

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      Format Options <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.CheckboxItem
      checked={checked}
      onCheckedChange={setChecked}
    >
      Bold
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.Separator />
    <DropdownMenu.Label>Font Size</DropdownMenu.Label>
    <DropdownMenu.RadioGroup value={fontSize} onValueChange={setFontSize}>
      <DropdownMenu.RadioItem value="small">Small</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="medium">Medium</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="large">Large</DropdownMenu.RadioItem>
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Groups and Labels

Use `Label` and `Separator` to visually group related menu items:

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Account <DropdownMenu.TriggerIcon /></Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Label>Account</DropdownMenu.Label>
    <DropdownMenu.Item>Profile</DropdownMenu.Item>
    <DropdownMenu.Item>Settings</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Label>Workspace</DropdownMenu.Label>
    <DropdownMenu.Item>Switch Team</DropdownMenu.Item>
    <DropdownMenu.Item>Create New Team</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item color="red">Sign Out</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Disabled Items

Use the `disabled` prop to disable specific menu items:

```jsx
<DropdownMenu.Content>
  <DropdownMenu.Item>Edit</DropdownMenu.Item>
  <DropdownMenu.Item disabled>Delete (no permission)</DropdownMenu.Item>
  <DropdownMenu.Item>Copy</DropdownMenu.Item>
</DropdownMenu.Content>
```

## When to Use

- Expose a set of related actions
- Save space by hiding secondary actions
- Show options related to a control
- Provide hierarchical commands or options
- Implement selection, toggles, or grouped features

## Props / API

### DropdownMenu.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `open` | Controlled open state | `boolean` | — |
| `defaultOpen` | Uncontrolled default open state | `boolean` | `false` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | — |
| `modal` | Render in modal mode | `boolean` | `true` |
| `dir` | Text direction | `"ltr" \| "rtl"` | — |

### DropdownMenu.Trigger

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `asChild` | Render child as the trigger element | `boolean` | `false` |

### DropdownMenu.Content

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Menu size | `"1" \| "2"` | `"2"` |
| `variant` | Visual variant | `"soft" \| "solid"` | `"soft"` |
| `color` | Theme color | `string` | — |
| `highContrast` | Use high-contrast color | `boolean` | `false` |

### DropdownMenu.Item

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | Disable this item | `boolean` | `false` |
| `onSelect` | Callback when item is selected | `(event: Event) => void` | — |
| `color` | Per-item color | `string` | — |
| `shortcut` | Keyboard shortcut hint | `string` | — |

### DropdownMenu.CheckboxItem

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `checked` | Checked state | `boolean` | — |
| `onCheckedChange` | Callback when checked state changes | `(checked: boolean) => void` | — |
| `disabled` | Disable this item | `boolean` | `false` |
| `shortcut` | Keyboard shortcut hint | `string` | — |

### DropdownMenu.RadioGroup

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | Current selected value | `string` | — |
| `onValueChange` | Callback when value changes | `(value: string) => void` | — |

### DropdownMenu.RadioItem

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `value` | Item value (required) | `string` | — |
| `disabled` | Disable this item | `boolean` | `false` |
| `shortcut` | Keyboard shortcut hint | `string` | — |

### DropdownMenu.Sub / SubTrigger / SubContent

Used to build nested submenus. `Sub` wraps `SubTrigger` (the submenu trigger) and `SubContent` (the submenu content).

### DropdownMenu.TriggerIcon

A dropdown chevron icon to display inside the trigger, typically placed after the trigger text.

### DropdownMenu.Label

A non-interactive label for naming a group of menu items.

### DropdownMenu.Separator

A visual divider for separating groups of menu items.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/dropdown-menu) for the full API reference and design guidelines.
