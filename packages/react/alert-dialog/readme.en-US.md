# `react-alert-dialog`

AlertDialog is a confirmation dialog component for scenarios that require user confirmation or cancellation.

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

## When to Use

- When user confirmation or cancellation is required for important actions
- Secondary confirmation before irreversible actions such as delete or submit

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
