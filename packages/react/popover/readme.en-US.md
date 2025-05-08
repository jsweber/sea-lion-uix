# `react-popover`

Popover is a floating component used to display temporary content related to a trigger element, such as additional information, action menus, etc.

## Installation

```sh
$ yarn add @sea-lion/react-popover
# or
$ npm install @sea-lion/react-popover
```

## Basic Usage

```jsx
import * as Popover from "@sea-lion/react-popover";
import { Button } from "@sea-lion/react-button";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Popover.Root>
    <Popover.Trigger>
      <Button>Click to show</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Text>This is the popover content</Text>
    </Popover.Content>
  </Popover.Root>
);
```

## Different Sizes

Popover.Content component offers four sizes:

```jsx
<Popover.Content size="1">Size 1</Popover.Content>
<Popover.Content size="2">Size 2 (default)</Popover.Content>
<Popover.Content size="3">Size 3</Popover.Content>
<Popover.Content size="4">Size 4</Popover.Content>
```

## Width Control

```jsx
<Popover.Content width="300px">Fixed width</Popover.Content>
<Popover.Content minWidth="200px">Minimum width</Popover.Content>
<Popover.Content maxWidth="400px">Maximum width</Popover.Content>
```

## Height Control

```jsx
<Popover.Content height="200px">Fixed height</Popover.Content>
<Popover.Content minHeight="100px">Minimum height</Popover.Content>
<Popover.Content maxHeight="300px">Maximum height</Popover.Content>
```

## Custom Close Behavior

```jsx
<Popover.Root>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Text>Popover content</Text>
    <Popover.Close>
      <Button>Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>
```

## Using Anchor

```jsx
<Popover.Root>
  <Popover.Anchor>
    <div>Anchor element</div>
  </Popover.Anchor>
  <Popover.Trigger>
    <Button>Click to show</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Text>Popover content</Text>
  </Popover.Content>
</Popover.Root>
```

## Props

### Popover.Root

| Prop         | Description                                                                | Type                    | Default | Version |
| ------------ | -------------------------------------------------------------------------- | ----------------------- | ------- | ------- |
| open         | Controls the open state of the popover                                     | boolean                 | -       | 0.2.1   |
| defaultOpen  | Default open state                                                         | boolean                 | false   | 0.2.1   |
| onOpenChange | Callback when open state changes                                           | (open: boolean) => void | -       | 0.2.1   |
| modal        | Whether the popover is modal, preventing interaction with outside elements | boolean                 | false   | 0.2.1   |

### Popover.Content

| Prop       | Description                                        | Type                     | Default | Version |
| ---------- | -------------------------------------------------- | ------------------------ | ------- | ------- |
| size       | Size of the popover content                        | '1' \| '2' \| '3' \| '4' | '2'     | 0.2.1   |
| width      | Width                                              | string                   | -       | 0.2.1   |
| minWidth   | Minimum width                                      | string                   | -       | 0.2.1   |
| maxWidth   | Maximum width                                      | string                   | '480px' | 0.2.1   |
| height     | Height                                             | string                   | -       | 0.2.1   |
| minHeight  | Minimum height                                     | string                   | -       | 0.2.1   |
| maxHeight  | Maximum height                                     | string                   | -       | 0.2.1   |
| forceMount | Force component mounting                           | boolean                  | -       | 0.2.1   |
| container  | Specify mount container                            | HTMLElement              | -       | 0.2.1   |
| asChild    | Apply the styles and behavior to the child element | boolean                  | false   | 0.2.1   |

### Popover.Trigger

| Prop    | Description                                        | Type    | Default | Version |
| ------- | -------------------------------------------------- | ------- | ------- | ------- |
| asChild | Apply the styles and behavior to the child element | boolean | true    | 0.2.1   |

### Popover.Close

| Prop    | Description                                        | Type    | Default | Version |
| ------- | -------------------------------------------------- | ------- | ------- | ------- |
| asChild | Apply the styles and behavior to the child element | boolean | true    | 0.2.1   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
