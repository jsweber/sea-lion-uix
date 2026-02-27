# `react-alert-dialog`

AlertDialog is a confirmation dialog component for scenarios that require user confirmation or cancellation. Unlike a standard Dialog, AlertDialog forces the user to make an explicit response (confirm or cancel) before it can be dismissed — clicking the overlay does not close it.

## Installation

```sh
pnpm add @sea-lion/react-alert-dialog
# or
npm install @sea-lion/react-alert-dialog
yarn add @sea-lion/react-alert-dialog
```

## Usage

Import the component in your code:

```tsx
import * as AlertDialog from '@sea-lion/react-alert-dialog';
```

### Basic Usage

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <button>Open Dialog</button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Action</AlertDialog.Title>
    <AlertDialog.Description>
      Are you sure you want to proceed? This action cannot be undone.
    </AlertDialog.Description>
    <AlertDialog.Action>Confirm</AlertDialog.Action>
    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### With Button Component

Use with `Button` and `Flex` to compose action buttons:

```jsx
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Open Dialog</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="600px">
    <AlertDialog.Title>Confirm Action</AlertDialog.Title>
    <AlertDialog.Description>
      Please confirm before proceeding.
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">Cancel</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>Confirm</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### Sizes

`AlertDialog.Content` supports four sizes via the `size` prop:

```jsx
{/* Size 1 (small) */}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 1</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="1">
    <AlertDialog.Title>Small Dialog</AlertDialog.Title>
    <AlertDialog.Description>This is a size 1 dialog.</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel><Button variant="soft" color="gray">Cancel</Button></AlertDialog.Cancel>
      <AlertDialog.Action><Button>Confirm</Button></AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>

{/* Size 4 (large) */}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 4</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="4">
    <AlertDialog.Title>Large Dialog</AlertDialog.Title>
    <AlertDialog.Description>This is a size 4 dialog.</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel><Button variant="soft" color="gray">Cancel</Button></AlertDialog.Cancel>
      <AlertDialog.Action><Button>Confirm</Button></AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### Alignment

Control the dialog's vertical position in the viewport with `align`:

```jsx
{/* Center aligned (default) */}
<AlertDialog.Content align="center">...</AlertDialog.Content>

{/* Top aligned */}
<AlertDialog.Content align="start">...</AlertDialog.Content>
```

### Custom Width

Use `width`, `maxWidth`, and `minWidth` to control dialog dimensions:

```jsx
<AlertDialog.Content maxWidth="500px">
  ...
</AlertDialog.Content>

<AlertDialog.Content width="400px" maxWidth="90vw">
  ...
</AlertDialog.Content>
```

### Controlled State

Control the open state externally via `open` and `onOpenChange`:

```jsx
const [open, setOpen] = useState(false);

<AlertDialog.Root open={open} onOpenChange={setOpen}>
  <AlertDialog.Trigger>
    <Button onClick={() => setOpen(true)}>Open</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Controlled Dialog</AlertDialog.Title>
    <AlertDialog.Description>...</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">Cancel</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>Confirm</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### Use Case Examples

**Delete confirmation:**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Delete Data</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Delete?</AlertDialog.Title>
    <AlertDialog.Description>
      This will permanently delete the selected data and cannot be undone.
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">Cancel</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="red">Confirm Delete</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

**Submit confirmation:**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="green">Submit Form</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Submit?</AlertDialog.Title>
    <AlertDialog.Description>
      Please verify all information is correct before submitting.
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">Go Back</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="green">Confirm Submit</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

## When to Use

- When user confirmation or cancellation is required for important actions
- Secondary confirmation before irreversible actions such as delete or submit
- When overlay-click-to-dismiss is not acceptable and an explicit response is required

## Props / API

### AlertDialog.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `open` | Controlled open state | `boolean` | — |
| `defaultOpen` | Uncontrolled default open state | `boolean` | `false` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | — |

### AlertDialog.Content

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Dialog size | `"1" \| "2" \| "3" \| "4"` | `"3"` |
| `align` | Vertical alignment in viewport | `"start" \| "center"` | `"center"` |
| `width` | Fixed dialog width | `string` | — |
| `minWidth` | Minimum dialog width | `string` | — |
| `maxWidth` | Maximum dialog width | `string` | — |
| `height` | Dialog height | `string` | — |
| `minHeight` | Minimum dialog height | `string` | — |
| `maxHeight` | Maximum dialog height | `string` | — |
| `asChild` | Merge props onto child element | `boolean` | `false` |

### AlertDialog.Trigger

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `asChild` | Render the child as the trigger element | `boolean` | `false` |

### AlertDialog.Title

Dialog title with proper `aria-labelledby` semantics. Accepts standard HTML attributes.

### AlertDialog.Description

Dialog description with proper `aria-describedby` semantics. Accepts standard HTML attributes.

### AlertDialog.Action

Container for the confirm action button. Closes the dialog when clicked.

### AlertDialog.Cancel

Container for the cancel action button. Closes the dialog when clicked.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/alert-dialog) for the full API reference and design guidelines.
