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

## When to Use

- Expose a set of related actions
- Save space by hiding secondary actions
- Show options related to a control
- Provide hierarchical commands or options
- Implement selection, toggles, or grouped features

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
