# `react-context-menu`

ContextMenu is a menu that appears when the user right-clicks or long-presses an element, providing context-related actions.

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
    <ContextMenu.Item onSelect={() => {}}>Copy</ContextMenu.Item>
    <ContextMenu.Item onSelect={() => {}}>Paste</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item onSelect={() => {}}>Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

## When to Use

- Expose additional actions for a specific element or area
- Reduce UI complexity by hiding less common actions
- Follow desktop patterns where users access actions via right-click
- Provide extra options on mobile via long-press

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
