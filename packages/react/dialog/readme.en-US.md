# `react-dialog`

Dialog is a modal component for content that requires user attention or action, blocking interaction with the rest of the page until the dialog is closed. It supports multiple sizes, alignment options, custom widths, and both controlled and uncontrolled usage.

## Installation

```sh
pnpm add @sea-lion/react-dialog
# or
npm install @sea-lion/react-dialog
yarn add @sea-lion/react-dialog
```

## Usage

Import the component in your code:

```tsx
import * as Dialog from '@sea-lion/react-dialog';
```

### Basic Usage

```jsx
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button>Open Dialog</button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Title</Dialog.Title>
    <Dialog.Description>Description</Dialog.Description>
    <Dialog.Close asChild>
      <button>Close</button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog.Root>
```

### With Button and Flex

```jsx
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';

<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Dialog Title</Dialog.Title>
    <Dialog.Description>
      This is a simple dialog example. Dialogs are used to display content that
      requires user attention or action while blocking interaction with the rest of the page.
    </Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close>
        <Button variant="soft" color="gray">Cancel</Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Confirm</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### Sizes

Control the overall dialog size with the `size` prop:

```jsx
{/* Small */}
<Dialog.Root>
  <Dialog.Trigger><Button>Small</Button></Dialog.Trigger>
  <Dialog.Content size="1">
    <Dialog.Title size="3">Small Dialog</Dialog.Title>
    <Dialog.Description size="1">Good for simple messages or actions.</Dialog.Description>
    <Flex justify="end" gap="2" mt="3">
      <Dialog.Close><Button size="1">OK</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

{/* Default */}
<Dialog.Root>
  <Dialog.Trigger><Button>Default</Button></Dialog.Trigger>
  <Dialog.Content size="3">
    <Dialog.Title size="5">Default Dialog</Dialog.Title>
    <Dialog.Description size="3">Suitable for most use cases.</Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close><Button>OK</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

{/* Large */}
<Dialog.Root>
  <Dialog.Trigger><Button>Large</Button></Dialog.Trigger>
  <Dialog.Content size="4">
    <Dialog.Title size="6">Large Dialog</Dialog.Title>
    <Dialog.Description size="4">For complex content or multi-step flows.</Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close><Button size="3">OK</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### Alignment

Control the dialog's vertical position in the viewport with `align`:

```jsx
{/* Center aligned (default) */}
<Dialog.Content align="center">
  <Dialog.Title>Centered Dialog</Dialog.Title>
  <Dialog.Description>Appears in the center of the screen. Works for most scenarios.</Dialog.Description>
</Dialog.Content>

{/* Top aligned */}
<Dialog.Content align="start">
  <Dialog.Title>Top-aligned Dialog</Dialog.Title>
  <Dialog.Description>Appears at the top of the screen. Better for longer content.</Dialog.Description>
</Dialog.Content>
```

### Custom Width

Precisely control dialog dimensions with `maxWidth`, `width`, and `minWidth`:

```jsx
{/* Max width 400px */}
<Dialog.Content maxWidth="400px">
  <Dialog.Title>Narrow Dialog</Dialog.Title>
  <Dialog.Description>For short messages or simple forms.</Dialog.Description>
</Dialog.Content>

{/* Max width 800px */}
<Dialog.Content maxWidth="800px">
  <Dialog.Title>Wide Dialog</Dialog.Title>
  <Dialog.Description>For more content, tables, or complex forms.</Dialog.Description>
</Dialog.Content>

{/* Fixed width 500px */}
<Dialog.Content width="500px">
  <Dialog.Title>Fixed Width Dialog</Dialog.Title>
  <Dialog.Description>Same width on all screen sizes.</Dialog.Description>
</Dialog.Content>
```

### Controlled Dialog

Fully control dialog state from outside via `open` and `onOpenChange`:

```jsx
const [open, setOpen] = useState(false);

<Dialog.Root open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>
    <Button>Open Controlled Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Controlled Dialog</Dialog.Title>
    <Dialog.Description>
      This dialog's open state is managed by React state, useful for precise behavioral control.
    </Dialog.Description>
    <Flex direction="column" gap="3" mt="4">
      <p>Current state: {open ? 'open' : 'closed'}</p>
      <Flex justify="end" gap="3">
        <Button variant="soft" color="gray" onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => {
          console.log('Confirmed');
          setOpen(false);
        }}>Confirm</Button>
      </Flex>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### Dialog with Form

Embed a form inside a dialog to collect user input:

```jsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Form Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>User Information</Dialog.Title>
    <Dialog.Description>Please fill in the following fields to complete registration.</Dialog.Description>

    <form style={{ marginTop: 'var(--space-4)' }}>
      <Flex direction="column" gap="3">
        <Box>
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Enter your name" />
        </Box>
        <Box>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="your.email@example.com" />
        </Box>
        <Box>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" placeholder="Tell us a bit about yourself" />
        </Box>
        <Flex justify="end" gap="3" mt="2">
          <Dialog.Close>
            <Button variant="soft" color="gray">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Submit</Button>
          </Dialog.Close>
        </Flex>
      </Flex>
    </form>
  </Dialog.Content>
</Dialog.Root>
```

### Default Open (Uncontrolled)

```jsx
<Dialog.Root defaultOpen>
  <Dialog.Content>
    <Dialog.Title>Default Open Dialog</Dialog.Title>
    <Dialog.Description>This dialog is open by default when the page loads.</Dialog.Description>
    <Dialog.Close>
      <Button mt="4">Close</Button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog.Root>
```

## When to Use

- User confirmation for important actions
- Display information that requires immediate attention
- Collect user input without leaving the current page
- Show warnings or errors that need user decisions
- Show detailed content without navigating to a new page

## Props / API

### Dialog.Root

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `open` | Controlled open state | `boolean` | — |
| `defaultOpen` | Uncontrolled default open state | `boolean` | `false` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | — |

### Dialog.Content

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Dialog size | `"1" \| "2" \| "3" \| "4"` | `"3"` |
| `align` | Vertical alignment in viewport | `"center" \| "start"` | `"center"` |
| `width` | Fixed width | `string` | — |
| `minWidth` | Minimum width | `string` | — |
| `maxWidth` | Maximum width | `string` | — |
| `height` | Height | `string` | — |
| `minHeight` | Minimum height | `string` | — |
| `maxHeight` | Maximum height | `string` | — |

### Dialog.Trigger

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `asChild` | Render child as the trigger element | `boolean` | `false` |

### Dialog.Close

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `asChild` | Render child as the close button | `boolean` | `false` |

### Dialog.Title

Dialog title with proper `aria-labelledby` semantics.

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Font size | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | — |

### Dialog.Description

Dialog description with proper `aria-describedby` semantics.

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Font size | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | — |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/dialog) for the full API reference and design guidelines.
