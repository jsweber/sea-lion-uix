# `react-hover-card`

HoverCard is a component displayed when users hover over a trigger element, showing supplementary content without interrupting the user's flow.

## Installation

```sh
$ yarn add @sea-lion/react-hover-card
# or
$ npm install @sea-lion/react-hover-card
```

## Basic Usage

```jsx
import { HoverCard } from "@sea-lion/react-hover-card";
import { Text } from "@sea-lion/react-text";
import { Flex } from "@sea-lion/react-flex";
import { Avatar } from "@sea-lion/react-avatar";

export default () => (
  <HoverCard.Root>
    <HoverCard.Trigger>
      <Text style={{ cursor: "pointer" }}>@username</Text>
    </HoverCard.Trigger>
    <HoverCard.Content>
      <Flex gap="3">
        <Avatar size="3" src="https://example.com/avatar.jpg" fallback="User" />
        <div>
          <Text weight="bold">Full Name</Text>
          <Text size="2" color="gray">
            @username
          </Text>
          <Text size="2" mt="2">
            User bio information, supplementary content shown on hover.
          </Text>
        </div>
      </Flex>
    </HoverCard.Content>
  </HoverCard.Root>
);
```

## Different Sizes

HoverCard offers different size options to accommodate various content needs:

```jsx
// Small size
<HoverCard.Content size="1">
  Concise content
</HoverCard.Content>

// Medium size (default)
<HoverCard.Content size="2">
  Standard size content
</HoverCard.Content>

// Large size
<HoverCard.Content size="3">
  More detailed content
</HoverCard.Content>
```

## Custom Width

You can control the width of the HoverCard content:

```jsx
// Fixed width
<HoverCard.Content width="300px">
  Content
</HoverCard.Content>

// Minimum and maximum width
<HoverCard.Content minWidth="200px" maxWidth="400px">
  Content will adjust within this range as needed
</HoverCard.Content>
```

## Delay Control

The card displays after hovering for 200ms by default and closes 150ms after leaving the trigger area. You can customize these delays:

```jsx
<HoverCard.Root openDelay={300} closeDelay={200}>
  {/* Trigger and content */}
</HoverCard.Root>
```

## Props

### HoverCard.Root

| Prop       | Description        | Type   | Default | Version |
| ---------- | ------------------ | ------ | ------- | ------- |
| openDelay  | Display delay (ms) | number | 200     | 0.2.1   |
| closeDelay | Close delay (ms)   | number | 150     | 0.2.1   |

### HoverCard.Trigger

| Prop    | Description                                      | Type    | Default | Version |
| ------- | ------------------------------------------------ | ------- | ------- | ------- |
| asChild | Whether to pass component as child (always true) | boolean | true    | 0.2.1   |

### HoverCard.Content

| Prop      | Description                        | Type                         | Default | Version |
| --------- | ---------------------------------- | ---------------------------- | ------- | ------- |
| size      | Card size                          | '1' \| '2' \| '3'            | '2'     | 0.2.1   |
| asChild   | Whether to pass component as child | boolean                      | false   | 0.2.1   |
| width     | Card width                         | string                       | -       | 0.2.1   |
| minWidth  | Minimum width                      | string                       | -       | 0.2.1   |
| maxWidth  | Maximum width                      | string                       | '480px' | 0.2.1   |
| align     | Alignment                          | 'start' \| 'center' \| 'end' | 'start' | 0.2.1   |
| container | Portal container                   | HTMLElement                  | -       | 0.2.1   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/hover-card) for the full API reference and design guidelines.
