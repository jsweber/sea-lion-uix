# `react-dropdown-menu`

DropdownMenu is a component that displays a menu when a trigger element is clicked, supporting multi-level submenus, checkboxes, radio buttons, and more.

## Installation

```sh
$ yarn add @sea-lion/react-dropdown-menu
# or
$ npm install @sea-lion/react-dropdown-menu
```

## Basic Usage

```jsx
import * as DropdownMenu from "@sea-lion/react-dropdown-menu";
import { Button } from "@sea-lion/react-button";

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Button>
        Options <DropdownMenu.TriggerIcon />
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
);
```

## When to Use

- Provide entry points for a set of related actions
- Save screen space by hiding secondary functionality
- Display a list of options related to a control
- Implement hierarchical commands or options
- Enable selection, toggling, or grouping functionality

## Features

- Supports different menu sizes (1-4)
- Provides high contrast mode and various color options
- Supports keyboard navigation and shortcut display
- Built-in submenu, grouping, and separator functionality
- Supports checkbox and radio button options
- Automatically handles overflow and scrolling

## API

### DropdownMenu.Root

| Property     | Description                      | Type                    | Default | Version |
| ------------ | -------------------------------- | ----------------------- | ------- | ------- |
| defaultOpen  | Whether open by default          | boolean                 | false   | 0.2.1   |
| open         | Controlled open state            | boolean                 | -       | 0.2.1   |
| onOpenChange | Callback when open state changes | (open: boolean) => void | -       | 0.2.1   |
| modal        | Whether it's a modal dropdown    | boolean                 | true    | 0.2.1   |
| children     | Child elements                   | ReactNode               | -       | 0.2.1   |

### DropdownMenu.Content

| Property     | Description               | Type                                   | Default  | Version |
| ------------ | ------------------------- | -------------------------------------- | -------- | ------- |
| size         | Menu size                 | '1' \| '2' \| '3' \| '4'               | '2'      | 0.2.1   |
| variant      | Menu style variant        | 'solid' \| 'soft'                      | 'solid'  | 0.2.1   |
| color        | Menu theme color          | string                                 | 'gray'   | 0.2.1   |
| highContrast | Whether high contrast     | boolean                                | false    | 0.2.1   |
| align        | Alignment                 | 'start' \| 'center' \| 'end'           | 'start'  | 0.2.1   |
| side         | Menu position             | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | 0.2.1   |
| sideOffset   | Side offset               | number                                 | 4        | 0.2.1   |
| alignOffset  | Alignment offset          | number                                 | 0        | 0.2.1   |
| container    | Specify container element | HTMLElement                            | -        | 0.2.1   |

### DropdownMenu.Item

| Property | Description            | Type                   | Default | Version |
| -------- | ---------------------- | ---------------------- | ------- | ------- |
| color    | Item color             | string                 | 'gray'  | 0.2.1   |
| shortcut | Keyboard shortcut hint | ReactNode              | -       | 0.2.1   |
| disabled | Whether disabled       | boolean                | false   | 0.2.1   |
| onSelect | Selection callback     | (event: Event) => void | -       | 0.2.1   |
| children | Child elements         | ReactNode              | -       | 0.2.1   |

### DropdownMenu.CheckboxItem

| Property        | Description                   | Type                       | Default | Version |
| --------------- | ----------------------------- | -------------------------- | ------- | ------- |
| checked         | Whether checked               | boolean                    | -       | 0.2.1   |
| onCheckedChange | Callback when checked changes | (checked: boolean) => void | -       | 0.2.1   |
| color           | Item color                    | string                     | 'gray'  | 0.2.1   |
| shortcut        | Keyboard shortcut hint        | ReactNode                  | -       | 0.2.1   |
| disabled        | Whether disabled              | boolean                    | false   | 0.2.1   |
| children        | Child elements                | ReactNode                  | -       | 0.2.1   |

### DropdownMenu.RadioGroup & DropdownMenu.RadioItem

| Property      | Description                 | Type                    | Default | Version |
| ------------- | --------------------------- | ----------------------- | ------- | ------- |
| value         | Selected value              | string                  | -       | 0.2.1   |
| onValueChange | Callback when value changes | (value: string) => void | -       | 0.2.1   |
| color         | Item color                  | string                  | 'gray'  | 0.2.1   |
| shortcut      | Keyboard shortcut hint      | ReactNode               | -       | 0.2.1   |
| disabled      | Whether disabled            | boolean                 | false   | 0.2.1   |
| children      | Child elements              | ReactNode               | -       | 0.2.1   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
