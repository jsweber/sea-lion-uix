# `react-dialog`

Dialog is a modal component for content that requires user attention or action, blocking interaction with the rest of the page until the dialog is closed.

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

## When to Use

- User confirmation for important actions
- Display information that requires immediate attention
- Collect user input without leaving the current page
- Show warnings or errors that need user decisions
- Show detailed content without navigating to a new page

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
