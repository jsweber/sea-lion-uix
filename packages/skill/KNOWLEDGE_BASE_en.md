## alert-dialog (react/alert-dialog)

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
import * as AlertDialog from "@sea-lion/react-alert-dialog";
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
import { Button } from "@sea-lion/react-button";
import { Flex } from "@sea-lion/react-flex";

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
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>Confirm</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>;
```

### Sizes

`AlertDialog.Content` supports four sizes via the `size` prop:

```jsx
{
  /* Size 1 (small) */
}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 1</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="1">
    <AlertDialog.Title>Small Dialog</AlertDialog.Title>
    <AlertDialog.Description>This is a size 1 dialog.</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>Confirm</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>;

{
  /* Size 4 (large) */
}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 4</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="4">
    <AlertDialog.Title>Large Dialog</AlertDialog.Title>
    <AlertDialog.Description>This is a size 4 dialog.</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>Confirm</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>;
```

### Alignment

Control the dialog's vertical position in the viewport with `align`:

```jsx
{
  /* Center aligned (default) */
}
<AlertDialog.Content align="center">...</AlertDialog.Content>;

{
  /* Top aligned */
}
<AlertDialog.Content align="start">...</AlertDialog.Content>;
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
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>Confirm</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>;
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
        <Button variant="soft" color="gray">
          Cancel
        </Button>
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
        <Button variant="soft" color="gray">
          Go Back
        </Button>
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

| Prop           | Description                      | Type                      | Default |
| -------------- | -------------------------------- | ------------------------- | ------- |
| `open`         | Controlled open state            | `boolean`                 | —       |
| `defaultOpen`  | Uncontrolled default open state  | `boolean`                 | `false` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | —       |

### AlertDialog.Content

| Prop        | Description                    | Type                       | Default    |
| ----------- | ------------------------------ | -------------------------- | ---------- |
| `size`      | Dialog size                    | `"1" \| "2" \| "3" \| "4"` | `"3"`      |
| `align`     | Vertical alignment in viewport | `"start" \| "center"`      | `"center"` |
| `width`     | Fixed dialog width             | `string`                   | —          |
| `minWidth`  | Minimum dialog width           | `string`                   | —          |
| `maxWidth`  | Maximum dialog width           | `string`                   | —          |
| `height`    | Dialog height                  | `string`                   | —          |
| `minHeight` | Minimum dialog height          | `string`                   | —          |
| `maxHeight` | Maximum dialog height          | `string`                   | —          |
| `asChild`   | Merge props onto child element | `boolean`                  | `false`    |

### AlertDialog.Trigger

| Prop      | Description                             | Type      | Default |
| --------- | --------------------------------------- | --------- | ------- |
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

----- split line -----

## aspect-ratio (react/aspect-ratio)

# `react-aspect-ratio`

AspectRatio is a container component that maintains a fixed aspect ratio for its content. Regardless of how the container width changes, the content always preserves the specified aspect ratio. It is ideal for displaying media content like images and videos at a consistent proportion.

## Installation

```sh
pnpm add @sea-lion/react-aspect-ratio
# or
npm install @sea-lion/react-aspect-ratio
yarn add @sea-lion/react-aspect-ratio
```

## Usage

Import the component in your code:

```tsx
import * as AspectRatio from "@sea-lion/react-aspect-ratio";
```

### Basic Usage

Set the aspect ratio with the `ratio` prop (value = width / height):

```jsx
<div style={{ width: "500px" }}>
  <AspectRatio.Root ratio={16 / 9}>
    <img
      src="https://example.com/image.jpg"
      alt="Example image"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  </AspectRatio.Root>
</div>
```

### Different Aspect Ratios

Common aspect ratio examples:

```jsx
<div style={{ display: "flex", gap: "20px" }}>
  {[
    { ratio: 16 / 9, name: "16:9 Widescreen" },
    { ratio: 4 / 3, name: "4:3 Standard" },
    { ratio: 1, name: "1:1 Square" },
    { ratio: 9 / 16, name: "9:16 Portrait" },
  ].map(({ ratio, name }) => (
    <div key={name} style={{ width: "200px" }}>
      <AspectRatio.Root ratio={ratio}>
        <img
          src="https://example.com/image.jpg"
          alt="Example image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </AspectRatio.Root>
      <Text size="2" style={{ marginTop: "8px" }}>
        {name}
      </Text>
    </div>
  ))}
</div>
```

### Embedded Video

AspectRatio is perfect for embedding responsive videos:

```jsx
<div style={{ width: "500px" }}>
  <AspectRatio.Root ratio={16 / 9}>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/example"
      title="Video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio.Root>
</div>
```

### Colored Background Container

AspectRatio is not limited to media — it can be used for any layout area that needs to maintain a fixed proportion:

```jsx
<div style={{ width: "300px" }}>
  <AspectRatio.Root ratio={1}>
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--accent-9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Text size="5">1:1</Text>
    </div>
  </AspectRatio.Root>
</div>
```

### Responsive Media Gallery

Combine with CSS Grid or Flex layouts to build a responsive media gallery:

```jsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  }}
>
  {images.map((src, i) => (
    <AspectRatio.Root key={i} ratio={4 / 3}>
      <img
        src={src}
        alt={`Image ${i + 1}`}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius-2)",
        }}
      />
    </AspectRatio.Root>
  ))}
</div>
```

## When to Use

- Responsive display of images, videos, and other media content
- Card cover images that need to maintain a fixed aspect ratio
- Creating proportional placeholder areas (skeleton screens)
- Embedding third-party iframe content (video players, maps, etc.)

## Props / API

### AspectRatio.Root

| Prop        | Description                                   | Type                  | Default |
| ----------- | --------------------------------------------- | --------------------- | ------- |
| `ratio`     | Aspect ratio, e.g. `16/9`, `4/3`, `1`         | `number`              | `1`     |
| `style`     | Inline styles                                 | `React.CSSProperties` | -       |
| `className` | Custom CSS class name                         | `string`              | -       |
| `children`  | Container content (usually an image or video) | `React.ReactNode`     | -       |

> Child elements typically need `width: 100%; height: 100%; object-fit: cover;` to correctly fill the container.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/aspect-ratio) for the full API reference and design guidelines.

----- split line -----

## avatar (react/avatar)

# `react-avatar`

Avatar is a component for displaying user or entity avatars. It supports image display with text fallback, and provides multiple size, variant, color, and border-radius options.

## Installation

```sh
pnpm add @sea-lion/react-avatar
# or
npm install @sea-lion/react-avatar
yarn add @sea-lion/react-avatar
```

## Usage

Import the component in your code:

```tsx
import { Avatar } from "@sea-lion/react-avatar";
```

### Basic Usage

```jsx
{
  /* Image avatar */
}
<Avatar src="https://example.com/avatar.jpg" alt="User avatar" fallback="AB" />;

{
  /* Text fallback avatar */
}
<Avatar fallback="AB" />;
```

### Sizes

Supports sizes `"1"` through `"9"`:

```jsx
<Flex align="center" gap="4">
  {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((size) => (
    <Avatar
      key={size}
      size={size}
      src="https://example.com/avatar.jpg"
      fallback="AB"
      alt="User avatar"
    />
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the avatar:

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="4">
    <Text size="2" style={{ width: "80px" }}>
      solid:
    </Text>
    <Avatar variant="solid" fallback="AB" alt="User avatar" />
    <Avatar
      variant="solid"
      src="https://example.com/avatar.jpg"
      fallback="AB"
      alt="User avatar"
    />
  </Flex>

  <Flex align="center" gap="4">
    <Text size="2" style={{ width: "80px" }}>
      soft:
    </Text>
    <Avatar variant="soft" fallback="AB" alt="User avatar" />
    <Avatar
      variant="soft"
      src="https://example.com/avatar.jpg"
      fallback="AB"
      alt="User avatar"
    />
  </Flex>
</Flex>
```

### Colors

Use the `color` prop to set the color theme for the fallback avatar:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: "80px" }}>
        {color}:
      </Text>
      <Avatar color={color} variant="solid" fallback="AB" alt="User avatar" />
      <Avatar color={color} variant="soft" fallback="AB" alt="User avatar" />
    </Flex>
  ))}
</Flex>
```

### Border Radius

Use the `radius` prop to control the corner radius of the avatar:

```jsx
<Flex gap="4">
  <Avatar radius="none" fallback="AB" alt="User avatar" />
  <Avatar radius="small" fallback="AB" alt="User avatar" />
  <Avatar radius="medium" fallback="AB" alt="User avatar" />
  <Avatar radius="large" fallback="AB" alt="User avatar" />
  <Avatar radius="full" fallback="AB" alt="User avatar" />
</Flex>
```

### Fallback Display

When the image fails to load, the fallback content (text or icon) is shown automatically:

```jsx
{
  /* Show text when image fails */
}
<Avatar src="https://broken-url.jpg" fallback="AB" alt="User avatar" />;

{
  /* No src — directly display fallback */
}
<Avatar size="5" fallback="User" alt="User avatar" />;
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex gap="4">
  <Avatar highContrast variant="solid" fallback="AB" alt="User avatar" />
  <Avatar highContrast variant="soft" fallback="AB" alt="User avatar" />
</Flex>
```

## Props / API

### Avatar

| Prop           | Description                               | Type                                                          | Default  |
| -------------- | ----------------------------------------- | ------------------------------------------------------------- | -------- |
| `src`          | Image URL for the avatar                  | `string`                                                      | -        |
| `alt`          | Alt text for the image (accessibility)    | `string`                                                      | -        |
| `fallback`     | Fallback content when image fails to load | `React.ReactNode`                                             | -        |
| `size`         | Avatar size                               | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"`    |
| `variant`      | Visual variant                            | `"solid" \| "soft"`                                           | `"soft"` |
| `radius`       | Border radius                             | `"none" \| "small" \| "medium" \| "large" \| "full"`          | `"full"` |
| `color`        | Color theme (affects fallback background) | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"`  | `"gray"` |
| `highContrast` | Use high contrast color                   | `boolean`                                                     | `false`  |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/avatar) for the full API reference and design guidelines.

----- split line -----

## badge (react/badge)

# `react-badge`

Badge is a component for displaying labels, counts, or status as short text. It supports multiple sizes, variants, colors, and border-radius options, suitable for notification counts, feature labels, version information, and online status indicators.

## Installation

```sh
pnpm add @sea-lion/react-badge
# or
npm install @sea-lion/react-badge
yarn add @sea-lion/react-badge
```

## Usage

Import the component in your code:

```tsx
import { Badge } from "@sea-lion/react-badge";
```

### Basic Usage

```jsx
<Badge>New Feature</Badge>
<Badge variant="solid" color="red">Important</Badge>
<Badge size="2" color="blue">Beta</Badge>
```

### Sizes

Supports sizes `"1"`, `"2"`, and `"3"`:

```jsx
<Flex align="center" gap="4">
  <Badge size="1">Size 1</Badge>
  <Badge size="2">Size 2</Badge>
  <Badge size="3">Size 3</Badge>
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the badge:

```jsx
<Flex direction="column" gap="4">
  <Badge variant="solid">solid — Solid fill</Badge>
  <Badge variant="soft">soft — Soft background</Badge>
  <Badge variant="surface">surface — Semi-transparent surface</Badge>
  <Badge variant="outline">outline — Outlined style</Badge>
</Flex>
```

### Colors

Use the `color` prop to set the badge color — all variants support multiple colors:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: "80px" }}>
        {color}:
      </Text>
      <Badge color={color} variant="solid">
        {color}
      </Badge>
      <Badge color={color} variant="soft">
        {color}
      </Badge>
      <Badge color={color} variant="surface">
        {color}
      </Badge>
      <Badge color={color} variant="outline">
        {color}
      </Badge>
    </Flex>
  ))}
</Flex>
```

### Border Radius

Use the `radius` prop to control the corner radius of the badge:

```jsx
<Flex gap="4">
  <Badge radius="none">none</Badge>
  <Badge radius="small">small</Badge>
  <Badge radius="medium">medium</Badge>
  <Badge radius="large">large</Badge>
  <Badge radius="full">full</Badge>
</Flex>
```

### Common Use Cases

Badges are commonly used for notification counts, feature labels, and status indicators:

```jsx
<Flex direction="column" gap="4">
  {/* Notification count */}
  <Flex align="center" gap="2">
    <Text>Notifications</Text>
    <Badge color="red" size="1">
      99+
    </Badge>
  </Flex>

  {/* Feature label */}
  <Flex align="center" gap="2">
    <Text>Feature Label</Text>
    <Badge color="blue" variant="soft">
      Beta
    </Badge>
  </Flex>

  {/* Online status */}
  <Flex align="center" gap="2">
    <Text>Status</Text>
    <Badge color="green" variant="surface">
      Online
    </Badge>
    <Badge color="gray" variant="surface">
      Offline
    </Badge>
  </Flex>

  {/* Version info */}
  <Flex align="center" gap="2">
    <Text>Version</Text>
    <Badge color="gold" variant="outline">
      v2.0.0
    </Badge>
  </Flex>
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex gap="4">
  <Badge highContrast variant="solid">
    High contrast solid
  </Badge>
  <Badge highContrast variant="soft">
    High contrast soft
  </Badge>
  <Badge highContrast variant="surface">
    High contrast surface
  </Badge>
  <Badge highContrast variant="outline">
    High contrast outline
  </Badge>
</Flex>
```

## Props / API

### Badge

| Prop           | Description             | Type                                                         | Default  |
| -------------- | ----------------------- | ------------------------------------------------------------ | -------- |
| `size`         | Badge size              | `"1" \| "2" \| "3"`                                          | `"1"`    |
| `variant`      | Visual variant          | `"solid" \| "soft" \| "surface" \| "outline"`                | `"soft"` |
| `radius`       | Border radius           | `"none" \| "small" \| "medium" \| "large" \| "full"`         | `"full"` |
| `color`        | Color theme             | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | -        |
| `highContrast` | Use high contrast color | `boolean`                                                    | `false`  |
| `children`     | Badge content           | `React.ReactNode`                                            | -        |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/badge) for the full API reference and design guidelines.

----- split line -----

## blockquote (react/blockquote)

# `react-blockquote`

Blockquote is a quote block component for displaying quoted content, supporting multiple sizes, font weights, colors, and text wrapping controls.

## Installation

```sh
pnpm add @sea-lion/react-blockquote
# or
npm install @sea-lion/react-blockquote
yarn add @sea-lion/react-blockquote
```

## Usage

Import the component in your code:

```tsx
import { Blockquote } from "@sea-lion/react-blockquote";
```

### Basic Usage

```jsx
<Blockquote>The Tao that can be named is not the eternal Tao.</Blockquote>
<Blockquote size="3" color="blue">A quote with size and color</Blockquote>
```

### Sizes

Supports sizes `"1"` through `"9"` — larger numbers produce larger text:

```jsx
<Flex direction="column" gap="4">
  {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((size) => (
    <Blockquote key={size} size={size}>
      The Tao that can be named is not the eternal Tao.
    </Blockquote>
  ))}
</Flex>
```

### Font Weights

Use the `weight` prop to control font weight:

```jsx
<Flex direction="column" gap="4">
  <Blockquote weight="light">
    light — The Tao that can be named is not the eternal Tao.
  </Blockquote>
  <Blockquote weight="regular">
    regular — The Tao that can be named is not the eternal Tao.
  </Blockquote>
  <Blockquote weight="medium">
    medium — The Tao that can be named is not the eternal Tao.
  </Blockquote>
  <Blockquote weight="bold">
    bold — The Tao that can be named is not the eternal Tao.
  </Blockquote>
</Flex>
```

### Colors

Use the `color` prop to apply a color theme to the quote block:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <Blockquote key={color} color={color}>
      The Tao that can be named is not the eternal Tao.
    </Blockquote>
  ))}
</Flex>
```

### Text Wrap Control

Control text wrapping behavior with the `truncate` and `wrap` props:

```jsx
<div style={{ width: "400px" }}>
  {/* Default wrapping */}
  <Blockquote>
    The highest good is like water. Water gives life to ten thousand things and
    does not strive.
  </Blockquote>

  {/* Single-line truncation */}
  <Blockquote truncate>
    The highest good is like water. Water gives life to ten thousand things and
    does not strive.
  </Blockquote>

  {/* No wrapping */}
  <Blockquote wrap="nowrap">
    The highest good is like water. Water gives life to ten thousand things and
    does not strive.
  </Blockquote>
</div>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <Blockquote key={color} color={color} highContrast>
      The Tao that can be named is not the eternal Tao.
    </Blockquote>
  ))}
</Flex>
```

## Props / API

### Blockquote

| Prop           | Description                    | Type                                                          | Default     |
| -------------- | ------------------------------ | ------------------------------------------------------------- | ----------- |
| `size`         | Text size                      | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"`       |
| `weight`       | Font weight                    | `"light" \| "regular" \| "medium" \| "bold"`                  | `"regular"` |
| `color`        | Color theme                    | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"`  | `"gray"`    |
| `highContrast` | Use high contrast color        | `boolean`                                                     | `false`     |
| `truncate`     | Truncate text to a single line | `boolean`                                                     | `false`     |
| `wrap`         | Text wrap mode                 | `"wrap" \| "nowrap" \| "balance" \| "pretty"`                 | -           |
| `children`     | Quote content                  | `React.ReactNode`                                             | -           |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/blockquote) for the full API reference and design guidelines.

----- split line -----

## box (react/box)

# `react-box`

Box is a fundamental layout container component that supports div/span rendering and the asChild pattern. It is the basic building block of the layout system, providing flexible display modes and responsive support.

## Installation

```sh
pnpm add @sea-lion/react-box
# or
npm install @sea-lion/react-box
yarn add @sea-lion/react-box
```

## Usage

Import the component in your code:

```tsx
import { Box } from "@sea-lion/react-box";
```

### Basic Usage

```jsx
<Box>Block container</Box>
<Box as="span">Inline container</Box>
<Box p="4" m="2" style={{ background: '#f0f0f0' }}>With padding and styles</Box>
```

### Display Modes

Control the display mode of the Box with the `display` prop:

```jsx
<Flex direction="column" gap="4">
  <Box
    display="block"
    style={{ padding: "10px", border: "1px solid var(--gray-a6)" }}
  >
    block — Block-level box
  </Box>
  <Box
    display="inline-block"
    style={{ padding: "10px", border: "1px solid var(--gray-a6)" }}
  >
    inline-block — Inline block
  </Box>
  <Box
    display="inline"
    style={{ padding: "10px", border: "1px solid var(--gray-a6)" }}
  >
    inline — Inline box
  </Box>
</Flex>
```

### HTML Elements

Use the `as` prop to specify the rendered HTML element:

```jsx
<Box as="div" style={{ padding: '20px', border: '1px solid var(--gray-a6)' }}>
  A div Box
</Box>
<Text>
  This is a sentence that contains a
  <Box
    as="span"
    style={{
      padding: '0 8px',
      margin: '0 4px',
      backgroundColor: 'var(--accent-a3)',
      borderRadius: 'var(--radius-1)',
    }}
  >
    span Box
  </Box>
  element
</Text>
```

### Nested Layout

Box components can be nested to build complex layouts:

```jsx
<Box
  style={{
    padding: "20px",
    border: "1px solid var(--gray-a6)",
    borderRadius: "var(--radius-3)",
  }}
>
  <Box
    style={{
      padding: "16px",
      backgroundColor: "var(--accent-a3)",
      borderRadius: "var(--radius-2)",
      marginBottom: "16px",
    }}
  >
    <Text size="5">Header Area</Text>
  </Box>
  <Box
    style={{
      padding: "16px",
      backgroundColor: "var(--gray-a3)",
      borderRadius: "var(--radius-2)",
    }}
  >
    <Text>Content Area</Text>
  </Box>
</Box>
```

### Responsive Display

The `display` prop accepts a responsive object to set different values at different breakpoints:

```jsx
<Box
  display={{ initial: "block", sm: "inline-block", lg: "inline" }}
  style={{
    padding: "20px",
    border: "1px solid var(--gray-a6)",
    borderRadius: "var(--radius-3)",
  }}
>
  <Text>
    This Box changes its display mode based on screen size: block on small
    screens, inline-block on medium, and inline on large screens.
  </Text>
</Box>
```

### asChild — Style Forwarding

Use `asChild` to forward Box styles to its child element, making the child the actual rendered element:

```jsx
<Box
  asChild
  style={{
    padding: "16px",
    backgroundColor: "var(--accent-a3)",
    border: "none",
    borderRadius: "var(--radius-2)",
    cursor: "pointer",
  }}
>
  <button onClick={() => alert("Button clicked")}>Clickable button</button>
</Box>
```

## Props / API

### Box

| Prop        | Description                              | Type                                              | Default   |
| ----------- | ---------------------------------------- | ------------------------------------------------- | --------- |
| `as`        | HTML element to render                   | `"div" \| "span"`                                 | `"div"`   |
| `asChild`   | Forward styles to the child element      | `boolean`                                         | `false`   |
| `display`   | Display mode, supports responsive object | `"none" \| "inline" \| "inline-block" \| "block"` | `"block"` |
| `p`         | Padding (Radix spacing token)            | `string`                                          | -         |
| `m`         | Margin (Radix spacing token)             | `string`                                          | -         |
| `style`     | Inline styles                            | `React.CSSProperties`                             | -         |
| `className` | Custom CSS class name                    | `string`                                          | -         |
| `children`  | Child nodes                              | `React.ReactNode`                                 | -         |

> Box also accepts all standard HTML `div` / `span` attributes.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/box) for the full API reference and design guidelines.

----- split line -----

## button (react/button)

# `react-button`

Button is a button component with multiple sizes, variants, and color options. It supports loading state, disabled state, block layout, and the asChild pattern.

## Installation

```sh
pnpm add @sea-lion/react-button
# or
npm install @sea-lion/react-button
yarn add @sea-lion/react-button
```

## Usage

Import the component in your code:

```tsx
import { Button } from "@sea-lion/react-button";
```

### Basic Usage

```jsx
<Button>Default Button</Button>
<Button variant="solid" color="blue">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Link Button</Button>
```

### Variants

Button supports six visual variants:

```jsx
<Flex gap="4" wrap="wrap">
  <Button variant="classic">classic</Button>
  <Button variant="solid">solid</Button>
  <Button variant="soft">soft</Button>
  <Button variant="surface">surface</Button>
  <Button variant="outline">outline</Button>
  <Button variant="ghost">ghost</Button>
</Flex>
```

### Sizes

Supports sizes `"1"`, `"2"`, `"3"`, and `"4"`:

```jsx
<Flex gap="4" align="center">
  <Button size="1">size 1</Button>
  <Button size="2">size 2</Button>
  <Button size="3">size 3</Button>
  <Button size="4">size 4</Button>
</Flex>
```

### Colors

Use the `color` prop to set the button color theme:

```jsx
<Flex gap="4">
  <Button color="blue">blue</Button>
  <Button color="cyan">cyan</Button>
  <Button color="pink">pink</Button>
  <Button color="brown">brown</Button>
  <Button color="red">red</Button>
  <Button color="green">green</Button>
</Flex>
```

### Border Radius

Use the `radius` prop to control the button's corner radius:

```jsx
<Flex gap="4">
  <Button radius="none">none</Button>
  <Button radius="small">small</Button>
  <Button radius="medium">medium</Button>
  <Button radius="large">large</Button>
  <Button radius="full">full</Button>
</Flex>
```

### Disabled State

```jsx
<Button disabled>Disabled Button</Button>
<Button variant="outline" disabled>Disabled Outline Button</Button>
```

### Loading State

Use the `loading` prop to show a loading spinner:

```jsx
<Flex gap="4">
  <Button variant="solid" loading>
    Loading...
  </Button>
  <Button variant="outline" loading>
    Loading...
  </Button>
  <Button variant="ghost" loading>
    Loading...
  </Button>
</Flex>
```

### Block Button

Use the `block` prop to make the button fill its parent container's width:

```jsx
<Button variant="solid" block>
  Full-width Button
</Button>
```

### High Contrast

```jsx
<Flex gap="4">
  <Button highContrast>High contrast</Button>
  <Button highContrast variant="outline">
    High contrast outline
  </Button>
</Flex>
```

### asChild — Render as Another Element

Use `asChild` to apply Button styles to any child element (e.g., an `<a>` link):

```jsx
<Button asChild>
  <a href="https://example.com">Link Button</a>
</Button>
```

### Nested Themes

Button inherits the color theme from the nearest Theme component:

```jsx
<Theme accentColor="blue">
  <Flex gap="4">
    <Button>Inherits blue theme</Button>
  </Flex>

  <Theme accentColor="yellow">
    <Flex gap="4">
      <Button>Inherits yellow theme</Button>
    </Flex>
  </Theme>
</Theme>
```

## Props / API

### Button

| Prop           | Description                                  | Type                                                                  | Default   |
| -------------- | -------------------------------------------- | --------------------------------------------------------------------- | --------- |
| `size`         | Button size                                  | `"1" \| "2" \| "3" \| "4"`                                            | `"2"`     |
| `variant`      | Visual variant                               | `"classic" \| "solid" \| "soft" \| "surface" \| "outline" \| "ghost"` | `"solid"` |
| `color`        | Color theme                                  | `"gray" \| "gold" \| "blue" \| "red" \| "green" \| ...`               | -         |
| `radius`       | Border radius                                | `"none" \| "small" \| "medium" \| "large" \| "full"`                  | -         |
| `highContrast` | Use high contrast color                      | `boolean`                                                             | `false`   |
| `disabled`     | Whether the button is disabled               | `boolean`                                                             | `false`   |
| `loading`      | Whether to show a loading state              | `boolean`                                                             | `false`   |
| `block`        | Whether to fill the parent container's width | `boolean`                                                             | `false`   |
| `asChild`      | Forward styles to the child element          | `boolean`                                                             | `false`   |
| `onClick`      | Click event callback                         | `React.MouseEventHandler`                                             | -         |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/button) for the full API reference and design guidelines.

----- split line -----

## callout (react/callout)

# `react-callout`

Callout is a component for displaying important information, tips, warnings, and other messages. It includes an icon and text, and supports different visual styles, sizes, and color themes.

Key features:

- Supports three sizes: 1, 2, 3
- Provides three visual variants: soft, surface, outline
- Customizable color themes with high contrast mode support
- Includes Icon and Text subcomponents

## Installation

```sh
pnpm add @sea-lion/react-callout
# or
npm install @sea-lion/react-callout
yarn add @sea-lion/react-callout
```

## Usage

Import the component in your code:

```tsx
import * as Callout from "@sea-lion/react-callout";
```

### Basic Usage

Callout is composed of three subcomponents: `Root`, `Icon`, and `Text`:

```jsx
import { InfoCircledIcon } from "@radix-ui/react-icons";

<Callout.Root>
  <Callout.Icon>
    <InfoCircledIcon width="20" height="20" />
  </Callout.Icon>
  <Callout.Text>
    This is a basic Callout for displaying important information.
  </Callout.Text>
</Callout.Root>;
```

### Sizes

Supports sizes `"1"`, `"2"`, and `"3"`:

```jsx
<Flex direction="column" gap="4">
  {["1", "2", "3"].map((size) => (
    <Callout.Root key={size} size={size}>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>Callout at size {size}</Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the Callout:

```jsx
<Flex direction="column" gap="4">
  <Callout.Root variant="soft">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>soft variant — Soft background</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="surface">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>surface variant — Surface style</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="outline">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>outline variant — Outlined style</Callout.Text>
  </Callout.Root>
</Flex>
```

### Colors and Use Cases

Combine colors and icons to distinguish different types of messages:

```jsx
import {
  InfoCircledIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

<Flex direction="column" gap="4">
  {/* Info message */}
  <Callout.Root color="blue" variant="soft">
    <Callout.Icon>
      <InfoCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      The system will undergo scheduled maintenance at midnight. Please save
      your work in advance.
    </Callout.Text>
  </Callout.Root>

  {/* Success message */}
  <Callout.Root color="green" variant="surface">
    <Callout.Icon>
      <CheckCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      Your changes have been saved successfully. All settings are now in effect.
    </Callout.Text>
  </Callout.Root>

  {/* Warning message */}
  <Callout.Root color="yellow" variant="outline">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      Your storage space is running low. Please clean up unnecessary files.
    </Callout.Text>
  </Callout.Root>

  {/* Error message */}
  <Callout.Root color="red" variant="soft">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      Operation failed. Please try again later or contact an administrator.
    </Callout.Text>
  </Callout.Root>
</Flex>;
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex direction="column" gap="4">
  {["soft", "surface", "outline"].map((variant) => (
    <Callout.Root key={variant} variant={variant} highContrast>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>High contrast {variant} Callout</Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

## Props / API

### Callout.Root

| Prop           | Description               | Type                                                                | Default   |
| -------------- | ------------------------- | ------------------------------------------------------------------- | --------- |
| `size`         | Callout size              | `"1" \| "2" \| "3"`                                                 | `"2"`     |
| `variant`      | Visual variant            | `"soft" \| "surface" \| "outline"`                                  | `"soft"`  |
| `color`        | Color theme               | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| "yellow" \| ...` | `"blue"`  |
| `highContrast` | Use high contrast color   | `boolean`                                                           | `false`   |
| `role`         | ARIA role                 | `string`                                                            | `"group"` |
| `children`     | Child nodes (Icon + Text) | `React.ReactNode`                                                   | -         |

### Callout.Icon

| Prop       | Description  | Type              | Default |
| ---------- | ------------ | ----------------- | ------- |
| `children` | Icon content | `React.ReactNode` | -       |

### Callout.Text

| Prop       | Description          | Type              | Default |
| ---------- | -------------------- | ----------------- | ------- |
| `children` | Message text content | `React.ReactNode` | -       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/callout) for the full API reference and design guidelines.

----- split line -----

## card (react/card)

# `react-card`

Card is a versatile container component for organizing and displaying content. It supports different visual styles and sizes, and can be used as a container, button, or link.

## Installation

```sh
pnpm add @sea-lion/react-card
# or
npm install @sea-lion/react-card
yarn add @sea-lion/react-card
```

## Usage

Import the component in your code:

```tsx
import { Card } from "@sea-lion/react-card";
```

### Basic Usage

```jsx
<Card>
  <Text as="div" size="3" weight="bold" mb="2">
    Card Title
  </Text>
  <Text as="div" color="gray">
    This is a basic card example.
  </Text>
</Card>
```

### Sizes

Supports sizes `"1"` through `"5"` — larger numbers produce more padding:

```jsx
<Flex direction="column" gap="4">
  {["1", "2", "3", "4", "5"].map((size) => (
    <Card key={size} size={size}>
      <Text as="div" size="3" weight="bold" mb="2">
        Size {size}
      </Text>
      <Text as="div" color="gray">
        Card example at size {size}
      </Text>
    </Card>
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the card:

```jsx
<Flex direction="column" gap="4">
  <Card variant="surface">
    <Text as="div" size="3" weight="bold" mb="2">
      surface variant
    </Text>
    <Text as="div" color="gray">
      A surface style with a semi-transparent background
    </Text>
  </Card>

  <Card variant="classic">
    <Text as="div" size="3" weight="bold" mb="2">
      classic variant
    </Text>
    <Text as="div" color="gray">
      A classic style with a shadow
    </Text>
  </Card>

  <Card variant="ghost">
    <Text as="div" size="3" weight="bold" mb="2">
      ghost variant
    </Text>
    <Text as="div" color="gray">
      A ghost style with no background
    </Text>
  </Card>
</Flex>
```

### Interactive Cards

Use `asChild` to render the card as a button or link, making it interactive:

```jsx
<Flex direction="column" gap="4">
  {/* Button card */}
  <Card asChild>
    <button onClick={() => alert("Button card clicked")}>
      <Text as="div" size="3" weight="bold" mb="2">
        Button Card
      </Text>
      <Text as="div" color="gray">
        Clicking this card triggers an event
      </Text>
    </button>
  </Card>

  {/* Link card */}
  <Card asChild>
    <a href="https://example.com">
      <Text as="div" size="3" weight="bold" mb="2">
        Link Card
      </Text>
      <Text as="div" color="gray">
        This card is a link
      </Text>
    </a>
  </Card>
</Flex>
```

### Image Cards

Cards are commonly used to display image and text content together:

```jsx
{
  /* Vertical layout */
}
<Card size="3">
  <Flex direction="column" gap="3">
    <img
      src="https://example.com/image.jpg"
      alt="Example image"
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "var(--radius-3)",
      }}
    />
    <Text as="div" size="5" weight="bold">
      Title
    </Text>
    <Text as="div" color="gray" size="2">
      Description text
    </Text>
  </Flex>
</Card>;

{
  /* Horizontal layout */
}
<Card size="3">
  <Flex gap="4" align="start">
    <img
      src="https://example.com/image.jpg"
      alt="Example image"
      style={{
        width: "120px",
        height: "120px",
        objectFit: "cover",
        borderRadius: "var(--radius-2)",
        flexShrink: 0,
      }}
    />
    <Flex direction="column" gap="2">
      <Text as="div" size="5" weight="bold">
        Title
      </Text>
      <Text as="div" color="gray" size="2">
        Description text
      </Text>
    </Flex>
  </Flex>
</Card>;
```

### Rich Content Layout

Cards can host complex content built with other components:

```jsx
<Card size="3">
  <Flex direction="column" gap="4">
    <Text as="div" size="6" weight="bold">
      Content Layout Example
    </Text>
    <Text as="div" color="gray">
      Cards can accommodate all kinds of content, including headings, text,
      images, and more.
    </Text>
    <Flex gap="4" align="center">
      <Text size="2" color="gray">
        Tags:
      </Text>
      <Card variant="ghost" size="1">
        Example Tag
      </Card>
      <Card variant="ghost" size="1">
        Layout Demo
      </Card>
    </Flex>
  </Flex>
</Card>
```

## Props / API

### Card

| Prop        | Description                         | Type                                | Default     |
| ----------- | ----------------------------------- | ----------------------------------- | ----------- |
| `size`      | Card size (affects padding)         | `"1" \| "2" \| "3" \| "4" \| "5"`   | `"1"`       |
| `variant`   | Visual variant                      | `"surface" \| "classic" \| "ghost"` | `"surface"` |
| `asChild`   | Forward styles to the child element | `boolean`                           | `false`     |
| `style`     | Inline styles                       | `React.CSSProperties`               | -           |
| `className` | Custom CSS class name               | `string`                            | -           |
| `children`  | Card content                        | `React.ReactNode`                   | -           |

> Card also accepts all standard HTML `div` attributes.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/card) for the full API reference and design guidelines.

----- split line -----

## chat (react/chat)

# `react-chat`

The Chat component renders a conversation message list with an integrated input area and send button, ideal for AI chat, customer service, and similar scenarios.

## Installation

```sh
pnpm add @sea-lion/react-chat
# or
npm install @sea-lion/react-chat
yarn add @sea-lion/react-chat
```

## Usage

Import the component in your code:

```tsx
import { Chat } from "@sea-lion/react-chat";
```

## When to Use

- When displaying conversation history between a user and an AI / agent
- When you need a combined chat input and send button UI
- When rendering an ordered list of dialog messages

## Basic Usage

```tsx
import { Chat } from "@sea-lion/react-chat";
import { Theme } from "@sea-lion/react-theme";

const messages = [
  {
    id: "1",
    content: "Hello! How can I help you?",
    sender: "assistant",
    timestamp: "2024-01-01 12:00",
  },
  {
    id: "2",
    content: "I want to learn more about this component library.",
    sender: "user",
    timestamp: "2024-01-01 12:01",
  },
];

export default function App() {
  return (
    <Theme>
      <Chat messages={messages} />
    </Theme>
  );
}
```

## Controlled Usage (Handling Send)

The `onSend` callback fires when the user clicks the send button or presses `Enter`. Use it to append new messages to the list:

```tsx
import { useState } from "react";
import { Chat } from "@sea-lion/react-chat";
import type { ChatMessage } from "@sea-lion/react-chat";

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", content: "Hello!", sender: "assistant", timestamp: "" },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        content: text,
        sender: "user",
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return <Chat messages={messages} onSend={handleSend} />;
}
```

## ChatMessage Type

| Field     | Description                                       | Type     | Required |
| --------- | ------------------------------------------------- | -------- | -------- |
| id        | Unique message identifier                         | `string` | Yes      |
| content   | Message body text                                 | `string` | Yes      |
| sender    | Sender identifier (e.g. `'user'` / `'assistant'`) | `string` | Yes      |
| timestamp | Display timestamp string                          | `string` | Yes      |

## Chat Props

| Prop     | Description                                                           | Type                        | Default |
| -------- | --------------------------------------------------------------------- | --------------------------- | ------- |
| messages | Array of chat messages                                                | `ChatMessage[]`             | —       |
| onSend   | Callback fired when the user sends a message; receives the input text | `(message: string) => void` | —       |

## Keyboard Interaction

| Key             | Description                  |
| --------------- | ---------------------------- |
| `Enter`         | Send message (no line break) |
| `Shift + Enter` | Insert line break (no send)  |

## Learn More

Chat is an experimental built-in component of sea-lion-uix with no corresponding Radix UI documentation. Use it together with `@sea-lion/react-theme` for consistent visual styling.

----- split line -----

## checkbox-cards (react/checkbox-cards)

# `react-checkbox-cards`

CheckboxCards is a card-style checkbox component for multi-selection in a grid layout. It combines the visual design of cards with the functionality of checkboxes.

Key features:

- Supports three sizes: 1, 2, 3
- Provides two visual variants: surface, classic
- Supports grid layout and high contrast mode
- Supports both controlled and uncontrolled usage

## Installation

```sh
pnpm add @sea-lion/react-checkbox-cards
# or
npm install @sea-lion/react-checkbox-cards
yarn add @sea-lion/react-checkbox-cards
```

## Usage

Import the component in your code:

```tsx
import * as CheckboxCards from "@sea-lion/react-checkbox-cards";
```

### Basic Usage

```jsx
<CheckboxCards.Root>
  <CheckboxCards.Item value="a">Option A</CheckboxCards.Item>
  <CheckboxCards.Item value="b">Option B</CheckboxCards.Item>
  <CheckboxCards.Item value="c">Option C</CheckboxCards.Item>
</CheckboxCards.Root>
```

### With Icons and Text

Combine icons and text for richer card content:

```jsx
import { InfoCircledIcon, RocketIcon, GearIcon } from "@radix-ui/react-icons";

<CheckboxCards.Root color="blue">
  <CheckboxCards.Item value="option1">
    <InfoCircledIcon width="20" height="20" />
    <Text>Data Analytics</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <RocketIcon width="20" height="20" />
    <Text>Automation</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option3">
    <GearIcon width="20" height="20" />
    <Text>System Settings</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>;
```

### Sizes

Supports sizes `"1"`, `"2"`, and `"3"`:

```jsx
<Flex direction="column" gap="4">
  {["1", "2", "3"].map((size) => (
    <CheckboxCards.Root key={size} size={size}>
      <CheckboxCards.Item value="option1">
        <InfoCircledIcon width="20" height="20" />
        <Text>Size {size}</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <RocketIcon width="20" height="20" />
        <Text>Example option</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the cards:

```jsx
<Flex direction="column" gap="4">
  <CheckboxCards.Root variant="surface">
    <CheckboxCards.Item value="option1">
      <Text>surface variant</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>Example option</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <CheckboxCards.Root variant="classic">
    <CheckboxCards.Item value="option1">
      <Text>classic variant</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>Example option</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>
</Flex>
```

### Colors

Use the `color` prop to set the color theme for the selected state:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <CheckboxCards.Root key={color} color={color}>
      <CheckboxCards.Item value="option1">
        <Text>{color} theme</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <Text>Example option</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### Controlled Usage

Use `value` and `onValueChange` for controlled selection:

```jsx
const [values, setValues] = React.useState([]);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">
    Select feature modules:
  </Text>

  <CheckboxCards.Root value={values} onValueChange={setValues} color="blue">
    <CheckboxCards.Item value="analytics">
      <InfoCircledIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">Data Analytics</Text>
        <Text size="2" color="gray">
          Provides detailed analytics reports
        </Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="automation">
      <RocketIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">Automation</Text>
        <Text size="2" color="gray">
          Automatically executes repetitive tasks
        </Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="settings">
      <GearIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">System Settings</Text>
        <Text size="2" color="gray">
          Customize system configuration options
        </Text>
      </Flex>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <Text size="2" color="gray">
    Selected: {values.length ? values.join(", ") : "None selected"}
  </Text>
</Flex>;
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<CheckboxCards.Root highContrast>
  <CheckboxCards.Item value="option1">
    <Text>High contrast option 1</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <Text>High contrast option 2</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

## Props / API

### CheckboxCards.Root

| Prop            | Description                            | Type                                                         | Default     |
| --------------- | -------------------------------------- | ------------------------------------------------------------ | ----------- |
| `value`         | Controlled list of selected values     | `string[]`                                                   | -           |
| `defaultValue`  | Default selected values (uncontrolled) | `string[]`                                                   | -           |
| `onValueChange` | Callback when selected values change   | `(value: string[]) => void`                                  | -           |
| `size`          | Card size                              | `"1" \| "2" \| "3"`                                          | `"2"`       |
| `variant`       | Visual variant                         | `"surface" \| "classic"`                                     | `"surface"` |
| `color`         | Color theme for selected state         | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"blue"`    |
| `highContrast`  | Use high contrast color                | `boolean`                                                    | `false`     |
| `columns`       | Grid column count                      | `string \| object`                                           | -           |

### CheckboxCards.Item

| Prop       | Description                          | Type              | Default |
| ---------- | ------------------------------------ | ----------------- | ------- |
| `value`    | The value for this option (required) | `string`          | -       |
| `disabled` | Whether this option is disabled      | `boolean`         | `false` |
| `children` | Card content                         | `React.ReactNode` | -       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/checkbox-cards) for the full API reference and design guidelines.

----- split line -----

## checkbox-group (react/checkbox-group)

# `react-checkbox-group`

CheckboxGroup is a set of checkboxes for selecting multiple values from a group. Compared to a single Checkbox, it provides unified value management and layout control, and is better for group usage.

## Installation

```sh
pnpm add @sea-lion/react-checkbox-group
# or
npm install @sea-lion/react-checkbox-group
yarn add @sea-lion/react-checkbox-group
```

## Usage

Import the component in your code:

```tsx
import * as CheckboxGroup from "@sea-lion/react-checkbox-group";
```

### Basic Usage

```jsx
<CheckboxGroup.Root value={selected} onValueChange={setSelected}>
  <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Uncontrolled (Default Value)

Use `defaultValue` to set initial checked items; state is managed internally:

```jsx
<CheckboxGroup.Root defaultValue={["apple", "banana"]}>
  <CheckboxGroup.Item value="apple">Apple</CheckboxGroup.Item>
  <CheckboxGroup.Item value="banana">Banana</CheckboxGroup.Item>
  <CheckboxGroup.Item value="orange">Orange</CheckboxGroup.Item>
  <CheckboxGroup.Item value="pear">Pear</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Controlled

Fully control the checked state via `value` and `onValueChange`:

```jsx
const [value, setValue] = useState(['option2']);

<CheckboxGroup.Root value={value} onValueChange={setValue}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>

<p>Selected: {value.join(', ') || 'none'}</p>
```

### Sizes

Three sizes are supported: `"1"` (small), `"2"` (medium, default), `"3"` (large):

```jsx
<CheckboxGroup.Root size="1" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="2" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="3" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Variants

Three visual variants are available: `"classic"` (default), `"surface"`, `"soft"`:

```jsx
<CheckboxGroup.Root variant="classic" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Classic</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="surface" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Surface</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="soft" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Soft</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Colors

Use the `color` prop to apply a theme color from the design system token palette:

```jsx
<CheckboxGroup.Root color="blue" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Blue (default)</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="crimson" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Crimson</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="grass" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Grass</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="amber" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">Amber</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### High Contrast

Use `highContrast` for improved visibility in accessibility-sensitive scenarios:

```jsx
<CheckboxGroup.Root color="blue" highContrast defaultValue={["option1"]}>
  <CheckboxGroup.Item value="option1">
    High contrast option 1
  </CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">
    High contrast option 2
  </CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### Orientation

Control the layout direction with `orientation`:

```jsx
{
  /* Vertical (default) */
}
<CheckboxGroup.Root defaultValue={["option1"]}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>;

{
  /* Horizontal */
}
<CheckboxGroup.Root
  orientation="horizontal"
  defaultValue={["option1"]}
  style={{ flexDirection: "row", alignItems: "center" }}
>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>;
```

### Disabled State

Supports disabling the whole group or individual items:

```jsx
{
  /* Whole group disabled */
}
<CheckboxGroup.Root disabled defaultValue={["option1"]}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
</CheckboxGroup.Root>;

{
  /* Individual item disabled */
}
<CheckboxGroup.Root defaultValue={["option1"]}>
  <CheckboxGroup.Item value="option1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2" disabled>
    Option 2 (disabled)
  </CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>;
```

### Form Usage (Required Field)

Use `name` and `required` when integrating with HTML forms:

```jsx
<form>
  <CheckboxGroup.Root
    required
    name="required-options"
    defaultValue={["option1"]}
  >
    <CheckboxGroup.Item value="option1">Option 1 (required)</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option2">Option 2</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option3">Option 3</CheckboxGroup.Item>
  </CheckboxGroup.Root>
</form>
```

## When to Use

- When users need to select multiple options from a set
- When users need to toggle multiple on/off options
- When used with forms to collect multiple option values
- For config selection, multi-criteria filtering, batch operations on lists, etc.

## Props / API

### CheckboxGroup.Root

| Prop            | Description                         | Type                                              | Default      |
| --------------- | ----------------------------------- | ------------------------------------------------- | ------------ |
| `size`          | Checkbox size                       | `"1" \| "2" \| "3"`                               | `"2"`        |
| `variant`       | Visual variant                      | `"classic" \| "soft" \| "surface"`                | `"classic"`  |
| `color`         | Theme color                         | `"gray" \| "blue" \| "crimson" \| "green" \| ...` | —            |
| `highContrast`  | Use high-contrast color             | `boolean`                                         | `false`      |
| `disabled`      | Disable the entire group            | `boolean`                                         | `false`      |
| `orientation`   | Layout direction                    | `"horizontal" \| "vertical"`                      | `"vertical"` |
| `value`         | Controlled checked values           | `string[]`                                        | —            |
| `defaultValue`  | Uncontrolled default checked values | `string[]`                                        | `[]`         |
| `onValueChange` | Callback when selection changes     | `(value: string[]) => void`                       | —            |
| `required`      | Whether a selection is required     | `boolean`                                         | `false`      |
| `name`          | Form field name                     | `string`                                          | —            |

### CheckboxGroup.Item

| Prop       | Description                       | Type      | Default |
| ---------- | --------------------------------- | --------- | ------- |
| `value`    | The value of this item (required) | `string`  | —       |
| `disabled` | Disable this item                 | `boolean` | `false` |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/checkbox-group) for the full API reference and design guidelines.

----- split line -----

## checkbox (react/checkbox)

# `react-checkbox`

Checkbox is a component for multiple selection in forms. It supports checked, unchecked, and indeterminate states, multiple color themes, and disabled state.

## Installation

```sh
pnpm add @sea-lion/react-checkbox
# or
npm install @sea-lion/react-checkbox
yarn add @sea-lion/react-checkbox
```

## Usage

Import the component in your code:

```tsx
import { Checkbox } from "@sea-lion/react-checkbox";
```

### Basic Usage

```jsx
<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked={checked} onCheckedChange={setChecked} />
<Checkbox checked="indeterminate" />
```

### States

Checkbox supports three states: checked, unchecked, and indeterminate.

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="2">
    <Checkbox defaultChecked />
    <Text>Checked</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox checked="indeterminate" />
    <Text>Indeterminate</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled />
    <Text color="gray">Disabled</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled defaultChecked />
    <Text color="gray">Disabled & Checked</Text>
  </Flex>
</Flex>
```

### Colors

Use the `color` prop to set the color theme of the checkbox:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} defaultChecked />
      <Text>{color} theme</Text>
    </Flex>
  ))}
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop for better visibility on dark backgrounds:

```jsx
<Flex direction="column" gap="4">
  {["gray", "gold", "bronze", "red", "blue", "green"].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} highContrast defaultChecked />
      <Text>High contrast {color}</Text>
    </Flex>
  ))}
</Flex>
```

### Form Usage

Using Checkbox as a controlled input within a form:

```jsx
const [checked, setChecked] = React.useState(false);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">
    Terms of Service
  </Text>

  <Flex align="start" gap="2">
    <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)} />
    <Text size="2">
      I have read and agree to the Terms of Service and Privacy Policy
    </Text>
  </Flex>

  <button disabled={!checked}>Next Step</button>
</Flex>;
```

## Props / API

### Checkbox

| Prop              | Description                             | Type                                                         | Default |
| ----------------- | --------------------------------------- | ------------------------------------------------------------ | ------- |
| `checked`         | Controlled checked state                | `boolean \| "indeterminate"`                                 | -       |
| `defaultChecked`  | Initial checked state (uncontrolled)    | `boolean`                                                    | `false` |
| `onCheckedChange` | Callback when the checked state changes | `(checked: boolean \| "indeterminate") => void`              | -       |
| `disabled`        | Whether the checkbox is disabled        | `boolean`                                                    | `false` |
| `color`           | Color theme                             | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | -       |
| `highContrast`    | Use high contrast color                 | `boolean`                                                    | `false` |
| `size`            | Checkbox size                           | `"1" \| "2" \| "3"`                                          | `"2"`   |
| `name`            | Form field name                         | `string`                                                     | -       |
| `value`           | Form field value                        | `string`                                                     | -       |
| `required`        | Whether the field is required           | `boolean`                                                    | `false` |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/checkbox) for the full API reference and design guidelines.

----- split line -----

## code (react/code)

# `react-code`

Code is a component for displaying code snippets. It provides multiple styles and size options, making code content visually distinct from surrounding text.

## Installation

```sh
pnpm add @sea-lion/react-code
# or
npm install @sea-lion/react-code
yarn add @sea-lion/react-code
```

## Usage

Import the component in your code:

```tsx
import { Code } from "@sea-lion/react-code";
```

### Basic Usage

Embed a code snippet inside text:

```jsx
<Text as="p" size="3">
  In a React component, the <Code>useState</Code> hook is used to create state
  variables.
</Text>
```

### Sizes

Supports sizes `"1"` through `"9"`:

```jsx
<Flex direction="column" gap="4">
  <Code size="1">npm install @sea-lion/react-code</Code>
  <Code size="2">npm install @sea-lion/react-code</Code>
  <Code size="3">npm install @sea-lion/react-code</Code>
  <Code size="4">npm install @sea-lion/react-code</Code>
  <Code size="5">npm install @sea-lion/react-code</Code>
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the code snippet:

```jsx
<Flex direction="column" gap="4">
  <Code variant="soft">{"import { useState } from 'react';"}</Code>
  <Code variant="solid">{"import { useState } from 'react';"}</Code>
  <Code variant="outline">{"import { useState } from 'react';"}</Code>
  <Code variant="ghost">{"import { useState } from 'react';"}</Code>
</Flex>
```

### Colors

Use the `color` prop to set the code color:

```jsx
<Flex direction="column" gap="4">
  <Code color="blue">{"const Component = () => {};"}</Code>
  <Code color="crimson">{"const Component = () => {};"}</Code>
  <Code color="green">{"const Component = () => {};"}</Code>
  <Code color="orange">{"const Component = () => {};"}</Code>
</Flex>
```

### Font Weight

Use the `weight` prop to control font weight:

```jsx
<Flex direction="column" gap="4">
  <Code weight="light">const data = [1, 2, 3, 4];</Code>
  <Code weight="regular">const data = [1, 2, 3, 4];</Code>
  <Code weight="medium">const data = [1, 2, 3, 4];</Code>
  <Code weight="bold">const data = [1, 2, 3, 4];</Code>
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex direction="column" gap="4">
  <Code color="blue" variant="soft">
    {"function example() { return true; }"}
  </Code>
  <Code color="blue" variant="soft" highContrast>
    {"function example() { return true; }"}
  </Code>
</Flex>
```

### Text Truncation and Wrapping

Use the `truncate` and `textWrap` props to control how code text is displayed:

```jsx
<div style={{ width: "300px" }}>
  {/* Single-line truncation */}
  <Code truncate>
    {
      "function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"
    }
  </Code>

  {/* No wrapping */}
  <div style={{ overflow: "auto" }}>
    <Code textWrap="nowrap">
      {
        "function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"
      }
    </Code>
  </div>

  {/* Balanced wrapping */}
  <Code textWrap="balance">
    {
      "function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"
    }
  </Code>
</div>
```

### In-context Usage

Code is commonly used for inline code annotations in documentation and tutorials:

```jsx
<Box>
  <Text as="p" size="3">
    In a React component, the <Code>useState</Code> hook creates state
    variables. For example:
  </Text>
  <Box mt="2" p="3" style={{ backgroundColor: "var(--gray-3)" }}>
    <Code variant="ghost">const [count, setCount] = useState(0);</Code>
  </Box>
  <Text as="p" size="3" mt="2">
    You can then update the state with <Code>setCount</Code> and read it with{" "}
    <Code>count</Code>.
  </Text>
</Box>
```

## When to Use

- Display code snippets or commands inline within text
- Highlight technical names or variable names
- Mark code syntax in documentation or tutorials
- Display configuration keys, parameter names, or technical terms

## Props / API

### Code

| Prop           | Description                    | Type                                                          | Default     |
| -------------- | ------------------------------ | ------------------------------------------------------------- | ----------- |
| `size`         | Font size of the code          | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"2"`       |
| `variant`      | Visual variant                 | `"solid" \| "soft" \| "outline" \| "ghost"`                   | `"soft"`    |
| `color`        | Color theme                    | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| ...`       | `"blue"`    |
| `weight`       | Font weight                    | `"light" \| "regular" \| "medium" \| "bold"`                  | `"regular"` |
| `highContrast` | Use high contrast color        | `boolean`                                                     | `false`     |
| `truncate`     | Truncate text to a single line | `boolean`                                                     | `false`     |
| `textWrap`     | Text wrap mode                 | `"wrap" \| "nowrap" \| "balance" \| "pretty"`                 | -           |
| `children`     | Code content                   | `React.ReactNode`                                             | -           |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/code) for the full API reference and design guidelines.

----- split line -----

## container (react/container)

# `react-container`

Container is a component for constraining content to a maximum width and centering it on the page. It is the foundation for building standard page layouts, ensuring content maintains appropriate width and readability across various screen sizes.

## Installation

```sh
pnpm add @sea-lion/react-container
# or
npm install @sea-lion/react-container
yarn add @sea-lion/react-container
```

## Usage

Import the component in your code:

```tsx
import { Container } from "@sea-lion/react-container";
```

### Basic Usage

```jsx
<Container size="3">
  <Text>Main content area</Text>
</Container>
```

## When to Use

- Create page layouts with standard widths
- Ensure long text content maintains appropriate line length on large screens
- Center content with consistent margins

### Sizes

Container supports four preset sizes corresponding to different maximum widths:

```jsx
<Flex direction="column" gap="4">
  {/* Size 1 — max-width 448px */}
  <Box>
    <Text as="p" size="2" weight="bold">
      Size 1 (448px)
    </Text>
    <Container size="1" style={{ backgroundColor: "var(--gray-a3)" }}>
      <Box p="4">
        <Text>This is a size 1 container with a max-width of 448px.</Text>
      </Box>
    </Container>
  </Box>

  {/* Size 2 — max-width 688px */}
  <Box>
    <Text as="p" size="2" weight="bold">
      Size 2 (688px)
    </Text>
    <Container size="2" style={{ backgroundColor: "var(--gray-a3)" }}>
      <Box p="4">
        <Text>This is a size 2 container with a max-width of 688px.</Text>
      </Box>
    </Container>
  </Box>

  {/* Size 3 — max-width 880px */}
  <Box>
    <Text as="p" size="2" weight="bold">
      Size 3 (880px)
    </Text>
    <Container size="3" style={{ backgroundColor: "var(--gray-a3)" }}>
      <Box p="4">
        <Text>This is a size 3 container with a max-width of 880px.</Text>
      </Box>
    </Container>
  </Box>

  {/* Size 4 — max-width 1136px */}
  <Box>
    <Text as="p" size="2" weight="bold">
      Size 4 (1136px)
    </Text>
    <Container size="4" style={{ backgroundColor: "var(--gray-a3)" }}>
      <Box p="4">
        <Text>This is a size 4 container with a max-width of 1136px.</Text>
      </Box>
    </Container>
  </Box>
</Flex>
```

### Alignment

Use the `align` prop to control the horizontal alignment of content within the container:

```jsx
{
  /* Left-aligned */
}
<Container size="3" align="left" style={{ backgroundColor: "var(--gray-a3)" }}>
  <Box p="4" style={{ width: "50%", backgroundColor: "var(--blue-a3)" }}>
    <Text>Left-aligned content</Text>
  </Box>
</Container>;

{
  /* Center-aligned (default) */
}
<Container
  size="3"
  align="center"
  style={{ backgroundColor: "var(--gray-a3)" }}
>
  <Box p="4" style={{ width: "50%", backgroundColor: "var(--blue-a3)" }}>
    <Text>Center-aligned content</Text>
  </Box>
</Container>;

{
  /* Right-aligned */
}
<Container size="3" align="right" style={{ backgroundColor: "var(--gray-a3)" }}>
  <Box p="4" style={{ width: "50%", backgroundColor: "var(--blue-a3)" }}>
    <Text>Right-aligned content</Text>
  </Box>
</Container>;
```

### Responsive Container

The `size` prop accepts a responsive object, allowing different sizes at different breakpoints:

```jsx
<Container
  size={{ sm: "1", md: "2", lg: "3", xl: "4" }}
  style={{ backgroundColor: "var(--gray-a3)" }}
>
  <Box p="4">
    <Text>
      This container uses different sizes at different breakpoints: small (sm) —
      448px; medium (md) — 688px; large (lg) — 880px; extra-large (xl) — 1136px
    </Text>
  </Box>
</Container>
```

### Use in Layouts

Container works well with Flex, Box, and other components to build complete page layouts:

```jsx
<Container size="3">
  <Box p="4">
    <Heading size="5" mb="4">
      Page Title
    </Heading>
    <Text as="p" mb="4">
      The Container component can be used to create standard page layouts,
      constraining content width and ensuring readability across screen sizes.
    </Text>
    <Flex gap="4" wrap="wrap">
      <Box
        style={{ flex: "1 1 200px", backgroundColor: "var(--blue-a3)" }}
        p="4"
      >
        <Text weight="bold" mb="2">
          Sidebar
        </Text>
        <Text size="2">Navigation or related content goes here.</Text>
      </Box>
      <Box
        style={{ flex: "2 1 400px", backgroundColor: "var(--blue-a2)" }}
        p="4"
      >
        <Text weight="bold" mb="2">
          Main Content
        </Text>
        <Text size="2">Place the main content of the page here.</Text>
      </Box>
    </Flex>
  </Box>
</Container>
```

## Size Reference

| size  | Max Width |
| ----- | --------- |
| `"1"` | 448px     |
| `"2"` | 688px     |
| `"3"` | 880px     |
| `"4"` | 1136px    |

## Props / API

### Container

| Prop        | Description                                            | Type                            | Default     |
| ----------- | ------------------------------------------------------ | ------------------------------- | ----------- |
| `size`      | Container size (max-width), supports responsive object | `"1" \| "2" \| "3" \| "4"`      | -           |
| `align`     | Horizontal alignment of content                        | `"left" \| "center" \| "right"` | `"center"`  |
| `display`   | Display mode                                           | `"none" \| "initial"`           | `"initial"` |
| `style`     | Inline styles                                          | `React.CSSProperties`           | -           |
| `className` | Custom CSS class name                                  | `string`                        | -           |
| `children`  | Container content                                      | `React.ReactNode`               | -           |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/container) for the full API reference and design guidelines.

----- split line -----

## context-menu (react/context-menu)

# `react-context-menu`

ContextMenu is a menu that appears when the user right-clicks or long-presses an element, providing context-related actions. It supports submenus, checkboxes, radio items, group labels, disabled items, and more.

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
import * as ContextMenu from "@sea-lion/react-context-menu";
```

### Basic Usage

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>Right-click here</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>Edit</ContextMenu.Item>
    <ContextMenu.Item>Copy</ContextMenu.Item>
    <ContextMenu.Item>Paste</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### Variants

Switch the visual style of the menu content with the `variant` prop:

```jsx
{
  /* Soft variant (default) */
}
<ContextMenu.Content variant="soft">
  <ContextMenu.Label>Edit Options</ContextMenu.Label>
  <ContextMenu.Item>Cut</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
  <ContextMenu.Item>Paste</ContextMenu.Item>
</ContextMenu.Content>;

{
  /* Solid variant */
}
<ContextMenu.Content variant="solid">
  <ContextMenu.Label>Edit Options</ContextMenu.Label>
  <ContextMenu.Item>Cut</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
  <ContextMenu.Item>Paste</ContextMenu.Item>
</ContextMenu.Content>;

{
  /* High contrast */
}
<ContextMenu.Content highContrast>
  <ContextMenu.Label>Edit Options</ContextMenu.Label>
  <ContextMenu.Item>Cut</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
</ContextMenu.Content>;
```

### Colors

Apply a theme color to the menu content via the `color` prop:

```jsx
<ContextMenu.Content color="blue">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="crimson">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="green">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>
```

### Sizes

Control menu density with the `size` prop:

```jsx
{
  /* Size 1 (compact) */
}
<ContextMenu.Content size="1">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>;

{
  /* Size 2 (default) */
}
<ContextMenu.Content size="2">
  <ContextMenu.Item>Option 1</ContextMenu.Item>
  <ContextMenu.Item>Option 2</ContextMenu.Item>
</ContextMenu.Content>;
```

### Submenus

Use `Sub`, `SubTrigger`, and `SubContent` to build nested submenus:

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>Right-click for nested menu</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>View</ContextMenu.Item>
    <ContextMenu.Item>Refresh</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>More Options</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>Option 1</ContextMenu.Item>
        <ContextMenu.Item>Option 2</ContextMenu.Item>
        <ContextMenu.Item>Option 3</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>Sort By</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.RadioGroup value="name">
          <ContextMenu.RadioItem value="name">Name</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="date">Date</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="size">Size</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### Checkboxes and Radio Items

Use `CheckboxItem` for toggle items and `RadioGroup` + `RadioItem` for single-selection:

```jsx
const [showToolbar, setShowToolbar] = useState(true);
const [theme, setTheme] = useState("light");

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>Right-click to view</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Label>View Options</ContextMenu.Label>
    <ContextMenu.CheckboxItem
      checked={showToolbar}
      onCheckedChange={setShowToolbar}
    >
      Show Toolbar
    </ContextMenu.CheckboxItem>
    <ContextMenu.CheckboxItem>Show Status Bar</ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.Group>
      <ContextMenu.Label>Theme</ContextMenu.Label>
      <ContextMenu.RadioGroup value={theme} onValueChange={setTheme}>
        <ContextMenu.RadioItem value="light">Light</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="dark">Dark</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="system">System</ContextMenu.RadioItem>
      </ContextMenu.RadioGroup>
    </ContextMenu.Group>
  </ContextMenu.Content>
</ContextMenu.Root>;
```

### Disabled Items

Use the `disabled` prop to disable specific menu items:

```jsx
<ContextMenu.Content>
  <ContextMenu.Item>Edit</ContextMenu.Item>
  <ContextMenu.Item disabled>Delete (no permission)</ContextMenu.Item>
  <ContextMenu.Item>Copy</ContextMenu.Item>
  <ContextMenu.Separator />
  <ContextMenu.Sub>
    <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
    <ContextMenu.SubContent>
      <ContextMenu.Item>Via Email</ContextMenu.Item>
      <ContextMenu.Item disabled>Via Message (unavailable)</ContextMenu.Item>
      <ContextMenu.Item>Create Link</ContextMenu.Item>
    </ContextMenu.SubContent>
  </ContextMenu.Sub>
</ContextMenu.Content>
```

## When to Use

- Expose additional actions for a specific element or area
- Reduce UI complexity by hiding less common actions
- Follow desktop patterns where users access actions via right-click
- Provide extra options on mobile via long-press

## Props / API

### ContextMenu.Root

| Prop           | Description                           | Type                      | Default |
| -------------- | ------------------------------------- | ------------------------- | ------- |
| `onOpenChange` | Callback when menu open state changes | `(open: boolean) => void` | —       |
| `modal`        | Render in modal mode                  | `boolean`                 | `true`  |

### ContextMenu.Trigger

| Prop       | Description                         | Type      | Default |
| ---------- | ----------------------------------- | --------- | ------- |
| `asChild`  | Render child as the trigger element | `boolean` | `false` |
| `disabled` | Disable the trigger                 | `boolean` | `false` |

### ContextMenu.Content

| Prop           | Description             | Type                | Default  |
| -------------- | ----------------------- | ------------------- | -------- |
| `size`         | Menu size               | `"1" \| "2"`        | `"2"`    |
| `variant`      | Visual variant          | `"soft" \| "solid"` | `"soft"` |
| `color`        | Theme color             | `string`            | —        |
| `highContrast` | Use high-contrast color | `boolean`           | `false`  |

### ContextMenu.Item

| Prop       | Description                    | Type                     | Default |
| ---------- | ------------------------------ | ------------------------ | ------- |
| `disabled` | Disable this item              | `boolean`                | `false` |
| `onSelect` | Callback when item is selected | `(event: Event) => void` | —       |
| `color`    | Per-item color                 | `string`                 | —       |
| `shortcut` | Keyboard shortcut hint         | `string`                 | —       |

### ContextMenu.CheckboxItem

| Prop              | Description                         | Type                         | Default |
| ----------------- | ----------------------------------- | ---------------------------- | ------- |
| `checked`         | Checked state                       | `boolean`                    | —       |
| `onCheckedChange` | Callback when checked state changes | `(checked: boolean) => void` | —       |
| `disabled`        | Disable this item                   | `boolean`                    | `false` |

### ContextMenu.RadioGroup

| Prop            | Description                 | Type                      | Default |
| --------------- | --------------------------- | ------------------------- | ------- |
| `value`         | Current selected value      | `string`                  | —       |
| `onValueChange` | Callback when value changes | `(value: string) => void` | —       |

### ContextMenu.RadioItem

| Prop       | Description           | Type      | Default |
| ---------- | --------------------- | --------- | ------- |
| `value`    | Item value (required) | `string`  | —       |
| `disabled` | Disable this item     | `boolean` | `false` |

### ContextMenu.Sub / SubTrigger / SubContent

Used to build nested submenus. `Sub` wraps `SubTrigger` (the trigger) and `SubContent` (the submenu).

### ContextMenu.Label

A non-interactive group label for displaying section names within the menu.

### ContextMenu.Separator

A visual divider for separating groups of menu items.

### ContextMenu.Group

Logically groups related menu items together.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/context-menu) for the full API reference and design guidelines.

----- split line -----

## data-list (react/data-list)

# `react-data-list`

DataList is a component for displaying key-value lists, commonly used for properties, configuration, and detail information. It supports horizontal/vertical orientation, multiple sizes, custom alignment, label colors, and responsive layouts.

## Installation

```sh
pnpm add @sea-lion/react-data-list
# or
npm install @sea-lion/react-data-list
yarn add @sea-lion/react-data-list
```

## Usage

Import the component in your code:

```tsx
import * as DataList from "@sea-lion/react-data-list";
```

### Basic Usage

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label>Name</DataList.Label>
    <DataList.Value>John Doe</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Email</DataList.Label>
    <DataList.Value>john@example.com</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Phone</DataList.Label>
    <DataList.Value>+1 555-0000</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Address</DataList.Label>
    <DataList.Value>123 Main St, Springfield</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Orientation

Control how labels and values are arranged with the `orientation` prop:

```jsx
{
  /* Horizontal (default): label and value on the same row */
}
<DataList.Root orientation="horizontal">
  <DataList.Item>
    <DataList.Label>Username</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Created At</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Vertical: label stacked above value */
}
<DataList.Root orientation="vertical">
  <DataList.Item>
    <DataList.Label>Username</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Created At</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>;
```

### Sizes

Three sizes are supported via the `size` prop:

```jsx
{
  /* Small */
}
<DataList.Root size="1">
  <DataList.Item>
    <DataList.Label>OS</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Medium (default) */
}
<DataList.Root size="2">
  <DataList.Item>
    <DataList.Label>OS</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Large */
}
<DataList.Root size="3">
  <DataList.Item>
    <DataList.Label>OS</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>;
```

### Item Alignment

Control the vertical alignment of label and value within an item:

```jsx
{
  /* Top aligned */
}
<DataList.Root>
  <DataList.Item align="start">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>
      A longer description text that wraps across multiple lines...
    </DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Center aligned */
}
<DataList.Root>
  <DataList.Item align="center">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>
      A longer description text that wraps across multiple lines...
    </DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Bottom aligned */
}
<DataList.Root>
  <DataList.Item align="end">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>
      A longer description text that wraps across multiple lines...
    </DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Baseline aligned (default) */
}
<DataList.Root>
  <DataList.Item align="baseline">
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>
      A longer description text that wraps across multiple lines...
    </DataList.Value>
  </DataList.Item>
</DataList.Root>;
```

### Label Colors

Use the `color` prop on `DataList.Label` to apply semantic colors:

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="gray">Gray Label (default)</DataList.Label>
    <DataList.Value>Default label color</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="blue">Blue Label</DataList.Label>
    <DataList.Value>For informational or primary content</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="green">Green Label</DataList.Label>
    <DataList.Value>For success or passing status</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="red">Red Label</DataList.Label>
    <DataList.Value>For errors or warnings</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="amber">Amber Label</DataList.Label>
    <DataList.Value>For caution or pending states</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### High Contrast Labels

Use `highContrast` to increase label visibility:

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="blue" highContrast>
      Tech Stack
    </DataList.Label>
    <DataList.Value>React, TypeScript, Node.js</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="crimson" highContrast>
      Deploy Environment
    </DataList.Label>
    <DataList.Value>AWS, Docker, Kubernetes</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Custom Label Width

Control the label column width using inline styles or the `width` prop:

```jsx
{
  /* Fixed minimum width */
}
<DataList.Root>
  <DataList.Item>
    <DataList.Label style={{ minWidth: "200px" }}>
      Long Label Name
    </DataList.Label>
    <DataList.Value>Corresponding value</DataList.Value>
  </DataList.Item>
</DataList.Root>;

{
  /* Percentage width */
}
<DataList.Root style={{ width: "100%" }}>
  <DataList.Item>
    <DataList.Label width="30%">Label</DataList.Label>
    <DataList.Value>Value</DataList.Value>
  </DataList.Item>
</DataList.Root>;
```

### Responsive Layout

Both `orientation` and `size` accept responsive objects to adapt to different screen sizes:

```jsx
<DataList.Root
  orientation={{ initial: "horizontal", xs: "vertical", md: "horizontal" }}
  size={{ initial: "1", sm: "2", lg: "3" }}
>
  <DataList.Item>
    <DataList.Label>Product Name</DataList.Label>
    <DataList.Value>Smartphone X10</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Price</DataList.Label>
    <DataList.Value>$599</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Storage</DataList.Label>
    <DataList.Value>128GB</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

## When to Use

- Display object properties or data fields in a structured way
- Show user profiles, product details, configuration items
- Present read-only form data
- When labels and values need to be clearly paired

## Props / API

### DataList.Root

| Prop          | Description                      | Type                                              | Default        |
| ------------- | -------------------------------- | ------------------------------------------------- | -------------- |
| `orientation` | Arrangement of labels and values | `"horizontal" \| "vertical"` or responsive object | `"horizontal"` |
| `size`        | List size                        | `"1" \| "2" \| "3"` or responsive object          | `"2"`          |
| `trim`        | Trim leading/trailing whitespace | `"normal" \| "start" \| "end" \| "both"`          | `"normal"`     |

### DataList.Item

| Prop    | Description                           | Type                                                      | Default      |
| ------- | ------------------------------------- | --------------------------------------------------------- | ------------ |
| `align` | Vertical alignment of label and value | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"baseline"` |

### DataList.Label

| Prop           | Description             | Type                                                     | Default  |
| -------------- | ----------------------- | -------------------------------------------------------- | -------- |
| `color`        | Label color             | `"gray" \| "blue" \| "green" \| "red" \| "amber" \| ...` | `"gray"` |
| `highContrast` | Use high-contrast color | `boolean`                                                | `false`  |
| `width`        | Label column width      | `string`                                                 | —        |

### DataList.Value

Accepts standard HTML attributes and can contain any content (links, badges, icons, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/data-list) for the full API reference and design guidelines.

----- split line -----

## dialog (react/dialog)

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
import * as Dialog from "@sea-lion/react-dialog";
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
import { Button } from "@sea-lion/react-button";
import { Flex } from "@sea-lion/react-flex";

<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Dialog Title</Dialog.Title>
    <Dialog.Description>
      This is a simple dialog example. Dialogs are used to display content that
      requires user attention or action while blocking interaction with the rest
      of the page.
    </Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Confirm</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>;
```

### Sizes

Control the overall dialog size with the `size` prop:

```jsx
{
  /* Small */
}
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Small</Button>
  </Dialog.Trigger>
  <Dialog.Content size="1">
    <Dialog.Title size="3">Small Dialog</Dialog.Title>
    <Dialog.Description size="1">
      Good for simple messages or actions.
    </Dialog.Description>
    <Flex justify="end" gap="2" mt="3">
      <Dialog.Close>
        <Button size="1">OK</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>;

{
  /* Default */
}
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Default</Button>
  </Dialog.Trigger>
  <Dialog.Content size="3">
    <Dialog.Title size="5">Default Dialog</Dialog.Title>
    <Dialog.Description size="3">
      Suitable for most use cases.
    </Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close>
        <Button>OK</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>;

{
  /* Large */
}
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Large</Button>
  </Dialog.Trigger>
  <Dialog.Content size="4">
    <Dialog.Title size="6">Large Dialog</Dialog.Title>
    <Dialog.Description size="4">
      For complex content or multi-step flows.
    </Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close>
        <Button size="3">OK</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>;
```

### Alignment

Control the dialog's vertical position in the viewport with `align`:

```jsx
{
  /* Center aligned (default) */
}
<Dialog.Content align="center">
  <Dialog.Title>Centered Dialog</Dialog.Title>
  <Dialog.Description>
    Appears in the center of the screen. Works for most scenarios.
  </Dialog.Description>
</Dialog.Content>;

{
  /* Top aligned */
}
<Dialog.Content align="start">
  <Dialog.Title>Top-aligned Dialog</Dialog.Title>
  <Dialog.Description>
    Appears at the top of the screen. Better for longer content.
  </Dialog.Description>
</Dialog.Content>;
```

### Custom Width

Precisely control dialog dimensions with `maxWidth`, `width`, and `minWidth`:

```jsx
{
  /* Max width 400px */
}
<Dialog.Content maxWidth="400px">
  <Dialog.Title>Narrow Dialog</Dialog.Title>
  <Dialog.Description>For short messages or simple forms.</Dialog.Description>
</Dialog.Content>;

{
  /* Max width 800px */
}
<Dialog.Content maxWidth="800px">
  <Dialog.Title>Wide Dialog</Dialog.Title>
  <Dialog.Description>
    For more content, tables, or complex forms.
  </Dialog.Description>
</Dialog.Content>;

{
  /* Fixed width 500px */
}
<Dialog.Content width="500px">
  <Dialog.Title>Fixed Width Dialog</Dialog.Title>
  <Dialog.Description>Same width on all screen sizes.</Dialog.Description>
</Dialog.Content>;
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
      This dialog's open state is managed by React state, useful for precise
      behavioral control.
    </Dialog.Description>
    <Flex direction="column" gap="3" mt="4">
      <p>Current state: {open ? "open" : "closed"}</p>
      <Flex justify="end" gap="3">
        <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            console.log("Confirmed");
            setOpen(false);
          }}
        >
          Confirm
        </Button>
      </Flex>
    </Flex>
  </Dialog.Content>
</Dialog.Root>;
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
    <Dialog.Description>
      Please fill in the following fields to complete registration.
    </Dialog.Description>

    <form style={{ marginTop: "var(--space-4)" }}>
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
            <Button variant="soft" color="gray">
              Cancel
            </Button>
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
    <Dialog.Description>
      This dialog is open by default when the page loads.
    </Dialog.Description>
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

| Prop           | Description                      | Type                      | Default |
| -------------- | -------------------------------- | ------------------------- | ------- |
| `open`         | Controlled open state            | `boolean`                 | —       |
| `defaultOpen`  | Uncontrolled default open state  | `boolean`                 | `false` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | —       |

### Dialog.Content

| Prop        | Description                    | Type                       | Default    |
| ----------- | ------------------------------ | -------------------------- | ---------- |
| `size`      | Dialog size                    | `"1" \| "2" \| "3" \| "4"` | `"3"`      |
| `align`     | Vertical alignment in viewport | `"center" \| "start"`      | `"center"` |
| `width`     | Fixed width                    | `string`                   | —          |
| `minWidth`  | Minimum width                  | `string`                   | —          |
| `maxWidth`  | Maximum width                  | `string`                   | —          |
| `height`    | Height                         | `string`                   | —          |
| `minHeight` | Minimum height                 | `string`                   | —          |
| `maxHeight` | Maximum height                 | `string`                   | —          |

### Dialog.Trigger

| Prop      | Description                         | Type      | Default |
| --------- | ----------------------------------- | --------- | ------- |
| `asChild` | Render child as the trigger element | `boolean` | `false` |

### Dialog.Close

| Prop      | Description                      | Type      | Default |
| --------- | -------------------------------- | --------- | ------- |
| `asChild` | Render child as the close button | `boolean` | `false` |

### Dialog.Title

Dialog title with proper `aria-labelledby` semantics.

| Prop   | Description | Type                                                          | Default |
| ------ | ----------- | ------------------------------------------------------------- | ------- |
| `size` | Font size   | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | —       |

### Dialog.Description

Dialog description with proper `aria-describedby` semantics.

| Prop   | Description | Type                                                          | Default |
| ------ | ----------- | ------------------------------------------------------------- | ------- |
| `size` | Font size   | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | —       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/dialog) for the full API reference and design guidelines.

----- split line -----

## dropdown-menu (react/dropdown-menu)

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
import * as DropdownMenu from "@sea-lion/react-dropdown-menu";
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
import { Button } from "@sea-lion/react-button";

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
</DropdownMenu.Root>;
```

### Sizes

Control menu density with the `size` prop on `DropdownMenu.Content`:

```jsx
{
  /* Small */
}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Small Menu</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="1">
    <DropdownMenu.Item>Option 1</DropdownMenu.Item>
    <DropdownMenu.Item>Option 2</DropdownMenu.Item>
    <DropdownMenu.Item>Option 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>;

{
  /* Default */
}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Default Menu</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="2">
    <DropdownMenu.Item>Option 1</DropdownMenu.Item>
    <DropdownMenu.Item>Option 2</DropdownMenu.Item>
    <DropdownMenu.Item>Option 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>;
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
const [fontSize, setFontSize] = useState("medium");

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      Format Options <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.CheckboxItem checked={checked} onCheckedChange={setChecked}>
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
</DropdownMenu.Root>;
```

### Groups and Labels

Use `Label` and `Separator` to visually group related menu items:

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      Account <DropdownMenu.TriggerIcon />
    </Button>
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

| Prop           | Description                      | Type                      | Default |
| -------------- | -------------------------------- | ------------------------- | ------- |
| `open`         | Controlled open state            | `boolean`                 | —       |
| `defaultOpen`  | Uncontrolled default open state  | `boolean`                 | `false` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | —       |
| `modal`        | Render in modal mode             | `boolean`                 | `true`  |
| `dir`          | Text direction                   | `"ltr" \| "rtl"`          | —       |

### DropdownMenu.Trigger

| Prop      | Description                         | Type      | Default |
| --------- | ----------------------------------- | --------- | ------- |
| `asChild` | Render child as the trigger element | `boolean` | `false` |

### DropdownMenu.Content

| Prop           | Description             | Type                | Default  |
| -------------- | ----------------------- | ------------------- | -------- |
| `size`         | Menu size               | `"1" \| "2"`        | `"2"`    |
| `variant`      | Visual variant          | `"soft" \| "solid"` | `"soft"` |
| `color`        | Theme color             | `string`            | —        |
| `highContrast` | Use high-contrast color | `boolean`           | `false`  |

### DropdownMenu.Item

| Prop       | Description                    | Type                     | Default |
| ---------- | ------------------------------ | ------------------------ | ------- |
| `disabled` | Disable this item              | `boolean`                | `false` |
| `onSelect` | Callback when item is selected | `(event: Event) => void` | —       |
| `color`    | Per-item color                 | `string`                 | —       |
| `shortcut` | Keyboard shortcut hint         | `string`                 | —       |

### DropdownMenu.CheckboxItem

| Prop              | Description                         | Type                         | Default |
| ----------------- | ----------------------------------- | ---------------------------- | ------- |
| `checked`         | Checked state                       | `boolean`                    | —       |
| `onCheckedChange` | Callback when checked state changes | `(checked: boolean) => void` | —       |
| `disabled`        | Disable this item                   | `boolean`                    | `false` |
| `shortcut`        | Keyboard shortcut hint              | `string`                     | —       |

### DropdownMenu.RadioGroup

| Prop            | Description                 | Type                      | Default |
| --------------- | --------------------------- | ------------------------- | ------- |
| `value`         | Current selected value      | `string`                  | —       |
| `onValueChange` | Callback when value changes | `(value: string) => void` | —       |

### DropdownMenu.RadioItem

| Prop       | Description            | Type      | Default |
| ---------- | ---------------------- | --------- | ------- |
| `value`    | Item value (required)  | `string`  | —       |
| `disabled` | Disable this item      | `boolean` | `false` |
| `shortcut` | Keyboard shortcut hint | `string`  | —       |

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

----- split line -----

## flex (react/flex)

# `react-flex`

Flex is a container component based on CSS flexbox layout, used to create flexible one-dimensional layouts, whether rows or columns.

## Installation

```sh
pnpm add @sea-lion/react-flex
# or
npm install @sea-lion/react-flex
yarn add @sea-lion/react-flex
```

## Usage

Import the component in your code:

```tsx
import { Flex } from "@sea-lion/react-flex";
```

## Basic Usage

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Flex direction="row" align="center" justify="between" gap="4">
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </Flex>
);
```

## Direction

The Flex component supports four directions:

```jsx
{
  /* Horizontal (default) */
}
<Flex direction="row" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Flex>;

{
  /* Vertical */
}
<Flex direction="column" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>;

{
  /* Horizontal reverse */
}
<Flex direction="row-reverse" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>;

{
  /* Vertical reverse */
}
<Flex direction="column-reverse" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>;
```

## Alignment

```jsx
{/* Horizontal alignment (justify) */}
<Flex justify="start" gap="3">{/* Default, left-aligned */}</Flex>
<Flex justify="center" gap="3">{/* Center-aligned */}</Flex>
<Flex justify="end" gap="3">{/* Right-aligned */}</Flex>
<Flex justify="between" gap="3">{/* Space between items */}</Flex>

{/* Vertical alignment (align) */}
<Flex align="start" gap="3">{/* Top-aligned */}</Flex>
<Flex align="center" gap="3">{/* Vertically centered */}</Flex>
<Flex align="end" gap="3">{/* Bottom-aligned */}</Flex>
<Flex align="baseline" gap="3">{/* Baseline-aligned */}</Flex>
<Flex align="stretch" gap="3">{/* Stretched */}</Flex>
```

## Gap

Flex supports gap levels from 1 to 9:

```jsx
<Flex gap="1">{/* Minimum gap */}</Flex>
<Flex gap="3">{/* Small gap */}</Flex>
<Flex gap="5">{/* Medium gap */}</Flex>
<Flex gap="9">{/* Maximum gap */}</Flex>
```

## Wrapping

```jsx
{
  /* No wrap (default) */
}
<Flex wrap="nowrap" gap="3">
  {/* Content overflows when it exceeds width */}
</Flex>;

{
  /* Wrap */
}
<Flex wrap="wrap" gap="3">
  {/* Content wraps to next line when it exceeds width */}
</Flex>;

{
  /* Wrap reverse */
}
<Flex wrap="wrap-reverse" gap="3">
  {/* Content wraps in reverse direction */}
</Flex>;
```

## Responsive Layout

```jsx
{
  /* Stack vertically on small screens, horizontally on medium screens */
}
<Flex
  direction={{ initial: "column", md: "row" }}
  gap={{ initial: "2", md: "4" }}
>
  <Box>Vertically on small screens, horizontally on medium screens</Box>
  <Box>With different spacing</Box>
</Flex>;
```

## Practical Use Cases

### Navigation Bar

```jsx
<Flex
  justify="between"
  align="center"
  style={{ padding: "16px", backgroundColor: "var(--gray-3)" }}
>
  <Text size="5" weight="bold">
    Site Name
  </Text>
  <Flex gap="4">
    <Button variant="soft">Home</Button>
    <Button variant="soft">Products</Button>
    <Button variant="soft">About</Button>
    <Button>Contact Us</Button>
  </Flex>
</Flex>
```

### Card Layout

```jsx
<Flex gap="4" wrap="wrap">
  {cards.map((card, i) => (
    <Box
      key={i}
      style={{
        flex: "1 1 200px",
        padding: "16px",
        borderRadius: "6px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Text size="3" weight="bold" mb="2">
        {card.title}
      </Text>
      <Text size="2">{card.description}</Text>
    </Box>
  ))}
</Flex>
```

## Props

### Flex

| Prop      | Description                        | Type                                                    | Default  |
| --------- | ---------------------------------- | ------------------------------------------------------- | -------- |
| as        | HTML element to render             | 'div' \| 'span'                                         | 'div'    |
| asChild   | Whether to pass component as child | boolean                                                 | false    |
| display   | CSS display property               | 'none' \| 'inline-flex' \| 'flex'                       | 'flex'   |
| direction | CSS flex-direction property        | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'  | 'row'    |
| align     | CSS align-items property           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch' | 'start'  |
| justify   | CSS justify-content property       | 'start' \| 'center' \| 'end' \| 'between'               | 'start'  |
| wrap      | CSS flex-wrap property             | 'nowrap' \| 'wrap' \| 'wrap-reverse'                    | 'nowrap' |
| gap       | Space between child elements       | '1' - '9'                                               | -        |

The Flex component also supports all standard margin and layout props, such as `m`, `mt`, `width`, `height`, etc.

## When to Use

- Create horizontal or vertical layout structures
- Build UIs that need flexible space distribution
- Align and distribute child elements
- Build responsive layouts
- Implement nav bars, toolbars, and other basic UI components

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/flex) for the full API reference and design guidelines.

----- split line -----

## grid (react/grid)

# `react-grid`

Grid is a container component based on CSS Grid layout, used to create flexible two-dimensional layouts, controlling both rows and columns simultaneously.

## Installation

```sh
$ yarn add @sea-lion/react-grid
# or
$ npm install @sea-lion/react-grid
```

## Basic Usage

```jsx
import { Grid } from "@sea-lion/react-grid";
import { Box } from "@sea-lion/react-box";

export default () => (
  <Grid columns="3" gap="4">
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      Item 1
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      Item 2
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      Item 3
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      Item 4
    </Box>
  </Grid>
);
```

## Columns and Gap

Grid supports equal-width column counts from 1 to 9, with multiple gap levels:

```jsx
{
  /* Two-column grid with small gap */
}
<Grid columns="2" gap="2">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Grid>;

{
  /* Three-column grid with medium gap */
}
<Grid columns="3" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>;

{
  /* Four-column grid with larger gap */
}
<Grid columns="4" gap="4">
  {items.map((item, i) => (
    <Box key={i}>{item}</Box>
  ))}
</Grid>;
```

## Custom Column Widths

Use CSS grid-template-columns syntax to set custom column widths:

```jsx
{
  /* Mix of fixed and flexible widths */
}
<Grid columns="200px 1fr 1fr" gap="3">
  <Box>Fixed width (200px)</Box>
  <Box>Flexible width (1fr)</Box>
  <Box>Flexible width (1fr)</Box>
</Grid>;

{
  /* Different proportional flexible widths */
}
<Grid columns="1fr 2fr 1fr" gap="3">
  <Box>1 part</Box>
  <Box>2 parts</Box>
  <Box>1 part</Box>
</Grid>;

{
  /* Min/max width constraints */
}
<Grid
  columns="minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr)"
  gap="3"
>
  <Box>Min 100px, max 1fr</Box>
  <Box>Min 200px, max 2fr</Box>
  <Box>Min 100px, max 1fr</Box>
</Grid>;
```

## Grid Area Layout

Use the `areas` prop to create named grid areas for complex page layouts:

```jsx
<Grid
  areas={`"header header header"
          "sidebar content content"
          "sidebar footer footer"`}
  columns="200px 1fr 1fr"
  rows="auto 1fr auto"
  gap="3"
  style={{ height: "400px" }}
>
  <Box
    style={{
      gridArea: "header",
      backgroundColor: "var(--blue-5)",
      padding: "16px",
      borderRadius: "6px",
    }}
  >
    Header
  </Box>
  <Box
    style={{
      gridArea: "sidebar",
      backgroundColor: "var(--purple-5)",
      padding: "16px",
      borderRadius: "6px",
    }}
  >
    Sidebar
  </Box>
  <Box
    style={{
      gridArea: "content",
      backgroundColor: "var(--green-5)",
      padding: "16px",
      borderRadius: "6px",
    }}
  >
    Content
  </Box>
  <Box
    style={{
      gridArea: "footer",
      backgroundColor: "var(--amber-5)",
      padding: "16px",
      borderRadius: "6px",
    }}
  >
    Footer
  </Box>
</Grid>
```

## Alignment

```jsx
{
  /* Top-aligned (default) */
}
<Grid
  columns="3"
  gap="3"
  align="start"
  style={{ height: "150px", backgroundColor: "var(--gray-3)" }}
>
  {[1, 2, 3].map((n) => (
    <Box
      key={n}
      style={{ height: `${n * 30}px`, backgroundColor: "var(--blue-5)" }}
    >
      Item {n}
    </Box>
  ))}
</Grid>;

{
  /* Vertically centered */
}
<Grid
  columns="3"
  gap="3"
  align="center"
  style={{ height: "150px", backgroundColor: "var(--gray-3)" }}
>
  {[1, 2, 3].map((n) => (
    <Box
      key={n}
      style={{ height: `${n * 30}px`, backgroundColor: "var(--blue-5)" }}
    >
      Item {n}
    </Box>
  ))}
</Grid>;

{
  /* Bottom-aligned */
}
<Grid
  columns="3"
  gap="3"
  align="end"
  style={{ height: "150px", backgroundColor: "var(--gray-3)" }}
>
  {[1, 2, 3].map((n) => (
    <Box
      key={n}
      style={{ height: `${n * 30}px`, backgroundColor: "var(--blue-5)" }}
    >
      Item {n}
    </Box>
  ))}
</Grid>;
```

## Responsive Grid

```jsx
{
  /* Responsive columns: 1 on mobile, 2 on tablet, 3 on desktop, 4 on large screens */
}
<Grid
  columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
  gap={{ initial: "2", md: "4" }}
>
  {items.map((item, i) => (
    <Box key={i}>{item}</Box>
  ))}
</Grid>;
```

## Practical Use Cases

### Product Card Grid

```jsx
<Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
  {products.map((product, i) => (
    <div
      key={i}
      style={{
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "200px", backgroundColor: "var(--blue-3)" }} />
      <div style={{ padding: "16px" }}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
    </div>
  ))}
</Grid>
```

### Photo Gallery

```jsx
<Grid columns={{ initial: "2", sm: "3", md: "4" }} gap="2">
  {photos.map((photo, i) => (
    <div
      key={i}
      style={{
        paddingTop: "100%",
        position: "relative",
        backgroundColor: "var(--gray-5)",
        borderRadius: "6px",
      }}
    >
      <img
        src={photo.url}
        alt={photo.alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
    </div>
  ))}
</Grid>
```

## When to Use

- Creating complex two-dimensional layout structures (controlling both rows and columns)
- When you need to precisely arrange elements in rows and columns
- Building responsive grid systems (card lists, photo galleries, etc.)
- Implementing dashboards, admin panels, and other interfaces needing flexible layouts

## Props

### Grid

| Prop    | Description                        | Type                                                          | Default   |
| ------- | ---------------------------------- | ------------------------------------------------------------- | --------- |
| as      | HTML element to render             | 'div' \| 'span'                                               | 'div'     |
| asChild | Whether to pass component as child | boolean                                                       | false     |
| display | CSS display property               | 'none' \| 'inline-grid' \| 'grid'                             | 'grid'    |
| areas   | CSS grid-template-areas property   | string                                                        | -         |
| columns | CSS grid-template-columns property | '1' - '9' \| string                                           | -         |
| rows    | CSS grid-template-rows property    | '1' - '9' \| string                                           | -         |
| flow    | CSS grid-auto-flow property        | 'row' \| 'column' \| 'dense' \| 'row-dense' \| 'column-dense' | -         |
| align   | CSS align-items property           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'       | 'stretch' |
| justify | CSS justify-content property       | 'start' \| 'center' \| 'end' \| 'between'                     | 'start'   |
| gap     | Space between grid items           | '1' - '9'                                                     | -         |

The Grid component also supports all standard margin and layout props, such as `m`, `mt`, `width`, `height`, etc.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/grid) for the full API reference and design guidelines.

----- split line -----

## heading (react/heading)

# `react-heading`

Heading is a component for displaying titles, providing various levels, sizes, and style options to meet different hierarchy requirements.

## Installation

```sh
pnpm add @sea-lion/react-heading
# or
npm install @sea-lion/react-heading
yarn add @sea-lion/react-heading
```

## Usage

Import the component in your code:

```tsx
import { Heading } from "@sea-lion/react-heading";
```

## Basic Usage

```jsx
import { Heading } from "@sea-lion/react-heading";

export default () => (
  <>
    <Heading as="h1" size="9">
      Heading Level 1
    </Heading>
    <Heading as="h2" size="7">
      Heading Level 2
    </Heading>
    <Heading as="h3" size="5">
      Heading Level 3
    </Heading>
    <Heading as="h4" size="3">
      Heading Level 4
    </Heading>
    <Heading as="h5" size="2">
      Heading Level 5
    </Heading>
    <Heading as="h6" size="1">
      Heading Level 6
    </Heading>
  </>
);
```

## Sizes

Heading provides size options from 1 to 9:

```jsx
<Heading size="9">Size 9 (Largest)</Heading>
<Heading size="8">Size 8</Heading>
<Heading size="7">Size 7</Heading>
<Heading size="6">Size 6 (Default)</Heading>
<Heading size="5">Size 5</Heading>
<Heading size="4">Size 4</Heading>
<Heading size="3">Size 3</Heading>
<Heading size="2">Size 2</Heading>
<Heading size="1">Size 1 (Smallest)</Heading>
```

## Font Weight

```jsx
<Heading weight="light">Light Weight</Heading>
<Heading weight="regular">Regular Weight</Heading>
<Heading weight="medium">Medium Weight</Heading>
<Heading weight="bold">Bold Weight (Default)</Heading>
```

## Colors

```jsx
<Heading color="blue">Blue Heading</Heading>
<Heading color="green">Green Heading</Heading>
<Heading color="red">Red Heading</Heading>
<Heading color="amber">Amber Heading</Heading>
<Heading color="gray">Gray Heading</Heading>
```

## High Contrast

```jsx
<Heading color="blue">Normal Contrast</Heading>
<Heading color="blue" highContrast>High Contrast</Heading>
```

## Text Alignment

```jsx
<Heading align="left">Left Aligned</Heading>
<Heading align="center">Center Aligned</Heading>
<Heading align="right">Right Aligned</Heading>
```

## Truncation and Text Wrap

```jsx
{/* Truncate text with ellipsis */}
<div style={{ width: '300px' }}>
  <Heading truncate>This is a very long heading that will be truncated with an ellipsis when there isn't enough space...</Heading>
</div>

{/* Text wrapping control */}
<Heading textWrap="balance">Heading with balance text wrapping</Heading>
<Heading textWrap="pretty">Heading with pretty text wrapping</Heading>
```

## Responsive Sizes

```jsx
<Heading size={{ initial: '3', sm: '5', md: '7', lg: '9' }}>
  Responsive heading size
</Heading>

<Heading align={{ initial: 'left', md: 'center', lg: 'right' }}>
  Responsive text alignment
</Heading>
```

## Practical Use Cases

### Blog Article Layout

```jsx
<article>
  <Heading size="8" mb="3">
    Exploring the Evolution of Modern Frontend Architecture
  </Heading>
  <Heading as="h2" size="5" mt="5" mb="3">
    History of Frontend Architecture
  </Heading>
  <p>
    The frontend development field has undergone dramatic changes over the past
    decade...
  </p>
  <Heading as="h3" size="3" mt="4" mb="2">
    The Rise of Single Page Applications
  </Heading>
  <p>
    With the popularity of Ajax and the development of JavaScript frameworks...
  </p>
</article>
```

### Product Landing Page

```jsx
<div
  style={{ textAlign: "center", padding: "48px", background: "var(--blue-1)" }}
>
  <Heading color="blue" size="9" align="center" mb="3">
    The Future is Now
  </Heading>
  <Heading color="gray" weight="regular" size="4" align="center">
    Our innovative products make complex tasks simple, helping you boost
    productivity
  </Heading>
</div>
```

## Props

### Heading

| Prop         | Description                        | Type                                              | Default |
| ------------ | ---------------------------------- | ------------------------------------------------- | ------- |
| as           | HTML element to render             | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'      | 'h1'    |
| asChild      | Whether to pass component as child | boolean                                           | false   |
| size         | Heading text size                  | '1' - '9'                                         | '6'     |
| weight       | Text weight                        | 'light' \| 'regular' \| 'medium' \| 'bold'        | 'bold'  |
| align        | Text alignment                     | 'left' \| 'center' \| 'right'                     | -       |
| color        | Text color                         | 'gray' \| 'blue' \| 'green' \| ... (theme colors) | -       |
| highContrast | Whether to use high contrast color | boolean                                           | false   |
| truncate     | Whether to truncate text           | boolean                                           | false   |
| textWrap     | Text wrapping behavior             | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'       | -       |

The Heading component also supports all standard margin props, such as `m`, `mt`, `mb`, etc.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/heading) for the full API reference and design guidelines.

----- split line -----

## hover-card (react/hover-card)

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

----- split line -----

## icon-button (react/icon-button)

# `react-icon-button`

IconButton is a button component for displaying icons, offering various size and style options.

## Installation

```sh
$ yarn add @sea-lion/react-icon-button
# or
$ npm install @sea-lion/react-icon-button
```

## Basic Usage

```jsx
import { IconButton } from "@sea-lion/react-icon-button";

export default () => (
  <>
    <IconButton aria-label="Close">
      <CloseIcon />
    </IconButton>

    <IconButton variant="solid" color="blue" aria-label="Add">
      <PlusIcon />
    </IconButton>

    <IconButton variant="outline" color="amber" aria-label="Favorite">
      <StarIcon />
    </IconButton>

    <IconButton variant="ghost" color="red" aria-label="Delete">
      <TrashIcon />
    </IconButton>
  </>
);
```

## Different Variants

IconButton component supports multiple variant styles:

```jsx
// Solid variant
<IconButton variant="solid" aria-label="Solid">
  <Icon />
</IconButton>

// Outline variant
<IconButton variant="outline" aria-label="Outline">
  <Icon />
</IconButton>

// Soft variant
<IconButton variant="soft" aria-label="Soft">
  <Icon />
</IconButton>

// Ghost variant
<IconButton variant="ghost" aria-label="Ghost">
  <Icon />
</IconButton>
```

## Different Sizes

IconButton component offers different size options:

```jsx
// Small size
<IconButton size="1" aria-label="Small">
  <Icon />
</IconButton>

// Medium size (default)
<IconButton size="2" aria-label="Medium">
  <Icon />
</IconButton>

// Large size
<IconButton size="3" aria-label="Large">
  <Icon />
</IconButton>

// Extra large size
<IconButton size="4" aria-label="Extra Large">
  <Icon />
</IconButton>
```

## Custom Colors and Radius

```jsx
// Custom colors
<IconButton color="blue" aria-label="Blue">
  <Icon />
</IconButton>

<IconButton color="green" aria-label="Green">
  <Icon />
</IconButton>

// Custom radius
<IconButton radius="none" aria-label="No radius">
  <Icon />
</IconButton>

<IconButton radius="full" aria-label="Fully rounded">
  <Icon />
</IconButton>
```

## Props

### IconButton

| Prop         | Description              | Type                                               | Default  | Version |
| ------------ | ------------------------ | -------------------------------------------------- | -------- | ------- |
| size         | Button size              | '1' \| '2' \| '3' \| '4'                           | '2'      | 0.2.0   |
| variant      | Button variant style     | 'solid' \| 'outline' \| 'soft' \| 'ghost'          | 'solid'  | 0.2.0   |
| color        | Button color             | 'gray' \| 'blue' \| 'green' \| ... (theme colors)  | 'gray'   | 0.2.0   |
| radius       | Border radius size       | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | 'medium' | 0.2.0   |
| highContrast | Use high contrast colors | boolean                                            | false    | 0.2.0   |
| disabled     | Disable the button       | boolean                                            | false    | 0.2.0   |

IconButton component inherits standard button attributes like `onClick`, `onFocus`, etc., and all standard margin properties (like `m`, `mt`, `mb`, etc.).

## Accessibility

When using IconButton, always provide an `aria-label` attribute to ensure screen reader users can understand the button's function.

```jsx
<IconButton aria-label="Close dialog">
  <CloseIcon />
</IconButton>
```

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/icon-button) for the full API reference and design guidelines.

----- split line -----

## input (react/input)

# `react-input`

Input is a text field component for collecting user input, providing multiple style and variant options.

## Installation

```sh
pnpm add @sea-lion/react-input
# or
npm install @sea-lion/react-input
yarn add @sea-lion/react-input
```

## Usage

Import the component in your code:

```tsx
import { Input } from "@sea-lion/react-input";
```

## Basic Usage

```jsx
import { Input } from "@sea-lion/react-input";

export default () => (
  <>
    <Input.Root placeholder="Enter text..." />

    {/* Input with icons */}
    <Input.Root>
      <Input.Slot side="left">
        <SearchIcon />
      </Input.Slot>
      <Input.Slot side="right">
        <ClearIcon />
      </Input.Slot>
    </Input.Root>

    {/* Different input types */}
    <Input.Root type="password" placeholder="Enter password" />
    <Input.Root type="number" placeholder="Enter number" />
    <Input.Root type="email" placeholder="Enter email" />
  </>
);
```

## Different Variants

Input component supports multiple variant styles:

```jsx
// Default variant (surface)
<Input.Root variant="surface" placeholder="Surface variant" />

// Classic variant
<Input.Root variant="classic" placeholder="Classic variant" />

// Soft variant
<Input.Root variant="soft" placeholder="Soft variant" />
```

## Different Sizes

Input component offers different size options:

```jsx
// Small size
<Input.Root size="1" placeholder="Small size" />

// Medium size (default)
<Input.Root size="2" placeholder="Medium size" />

// Large size
<Input.Root size="3" placeholder="Large size" />
```

## Custom Colors and Radius

```jsx
// Custom colors
<Input.Root color="blue" placeholder="Blue input" />
<Input.Root color="green" placeholder="Green input" />

// Custom radius
<Input.Root radius="full" placeholder="Full radius" />
<Input.Root radius="none" placeholder="No radius" />
```

## With Icons or Auxiliary Elements

```jsx
// With leading icon
<Input.Root>
  <Input.Slot side="left">
    <UserIcon />
  </Input.Slot>
  <Input.Slot side="right">
    <InfoIcon />
  </Input.Slot>
</Input.Root>

// With unit indicator
<Input.Root>
  <Input.Slot side="right">$</Input.Slot>
</Input.Root>

// With verification button
<Input.Root>
  <Input.Slot side="right">
    <Button>Verify</Button>
  </Input.Slot>
</Input.Root>
```

## Props

### Input.Root

| Prop         | Description         | Type                                                       | Default   | Version |
| ------------ | ------------------- | ---------------------------------------------------------- | --------- | ------- |
| size         | Input size          | '1' \| '2' \| '3'                                          | '2'       | 0.2.0   |
| variant      | Input variant style | 'classic' \| 'surface' \| 'soft'                           | 'surface' | 0.2.0   |
| color        | Input theme color   | 'gray' \| 'blue' \| 'green' \| ... (theme colors)          | -         | 0.2.0   |
| radius       | Border radius size  | 'none' \| '1' - '6' \| 'full'                              | -         | 0.2.0   |
| type         | Input type          | 'text' \| 'password' \| 'email' \| ... (HTML5 input types) | 'text'    | 0.2.0   |
| value        | Input value         | string \| number                                           | -         | 0.2.0   |
| defaultValue | Input default value | string \| number                                           | -         | 0.2.0   |

Input.Root component also supports all standard margin properties (like `m`, `mt`, `mb`, etc.) and standard HTML input element properties (like `onChange`, `onFocus`, etc.).

### Input.Slot

| Prop  | Description        | Type              | Default | Version |
| ----- | ------------------ | ----------------- | ------- | ------- |
| side  | Slot position      | 'left' \| 'right' | -       | 0.2.0   |
| color | Slot content color | (theme colors)    | -       | 0.2.0   |
| gap   | Internal gap       | '1' - '9'         | -       | 0.2.0   |
| px    | Horizontal padding | '1' - '9'         | -       | 0.2.0   |
| pl    | Left padding       | '1' - '9'         | -       | 0.2.0   |
| pr    | Right padding      | '1' - '9'         | -       | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/text-field) for the full API reference and design guidelines.

----- split line -----

## inset (react/inset)

# `react-inset`

Inset is a container component used to create negative margin effects, allowing content to extend beyond the boundaries of its parent element.

## Installation

```sh
$ yarn add @sea-lion/react-inset
# or
$ npm install @sea-lion/react-inset
```

## Basic Usage

```jsx
import { Inset } from "@sea-lion/react-inset";

export default () => (
  <div style={{ padding: "20px", border: "1px solid", borderRadius: "8px" }}>
    <Inset>
      <img
        src="/example-image.jpg"
        style={{ display: "block", width: "100%" }}
      />
    </Inset>
    <div style={{ padding: "20px" }}>
      <h3>Card with Inset</h3>
      <p>
        The Inset component allows the image to extend to the container edges
        without additional margins
      </p>
    </div>
  </div>
);
```

## Different Sides of Inset

The Inset component can be applied to different sides of a container:

```jsx
// Apply to top
<Inset side="top">
  <img src="/banner.jpg" />
</Inset>

// Apply to bottom
<Inset side="bottom">
  <div className="footer-content" />
</Inset>

// Apply to left
<Inset side="left">
  <div className="sidebar" />
</Inset>

// Apply to right
<Inset side="right">
  <div className="right-panel" />
</Inset>

// Apply horizontally
<Inset side="x">
  <div className="horizontal-content" />
</Inset>

// Apply vertically
<Inset side="y">
  <div className="vertical-content" />
</Inset>
```

## Clipping Methods

Inset supports different clipping methods:

```jsx
// Border box clipping (default)
<Inset clip="border-box">
  <img src="/image.jpg" />
</Inset>

// Padding box clipping
<Inset clip="padding-box">
  <img src="/image.jpg" />
</Inset>
```

## Padding Control

```jsx
// Maintain current padding
<Inset p="current">
  <div className="content" />
</Inset>

// Remove padding
<Inset p="0">
  <div className="content" />
</Inset>

// Control padding in specific directions
<Inset px="0" py="current">
  <div className="content" />
</Inset>
```

## Props

### Inset

| Prop | Description           | Type                                                          | Default      | Version |
| ---- | --------------------- | ------------------------------------------------------------- | ------------ | ------- |
| side | Side to apply inset   | 'all' \| 'x' \| 'y' \| 'top' \| 'bottom' \| 'left' \| 'right' | 'all'        | 0.2.0   |
| clip | Clipping box model    | 'border-box' \| 'padding-box'                                 | 'border-box' | 0.2.0   |
| p    | All direction padding | 'current' \| '0'                                              | -            | 0.2.0   |
| px   | Horizontal padding    | 'current' \| '0'                                              | -            | 0.2.0   |
| py   | Vertical padding      | 'current' \| '0'                                              | -            | 0.2.0   |
| pt   | Top padding           | 'current' \| '0'                                              | -            | 0.2.0   |
| pr   | Right padding         | 'current' \| '0'                                              | -            | 0.2.0   |
| pb   | Bottom padding        | 'current' \| '0'                                              | -            | 0.2.0   |
| pl   | Left padding          | 'current' \| '0'                                              | -            | 0.2.0   |

The Inset component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/inset) for the full API reference and design guidelines.

----- split line -----

## kbd (react/kbd)

# `react-kbd`

Kbd is a component for displaying keyboard keys or shortcuts, useful for tutorials, help documentation, and similar contexts.

## Installation

```sh
$ yarn add @sea-lion/react-kbd
# or
$ npm install @sea-lion/react-kbd
```

## Basic Usage

```jsx
import { Kbd } from "@sea-lion/react-kbd";

export default () => (
  <div>
    Press <Kbd>Tab</Kbd> to switch focus, use <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd>{" "}
    to switch focus in reverse.
  </div>
);
```

## Different Sizes

The Kbd component offers various size options (1-9):

```jsx
<Kbd size="1">Esc</Kbd>
<Kbd size="2">Tab</Kbd>
<Kbd size="3">Shift</Kbd>
<Kbd size="4">Enter</Kbd>
<Kbd size="5">Space</Kbd>
<Kbd size="6">Backspace</Kbd>
<Kbd size="7">Delete</Kbd>
<Kbd size="8">⌘</Kbd>
<Kbd size="9">F11</Kbd>
```

## Key Combinations

Display keyboard key combinations:

```jsx
<div>
  Save file: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
</div>

<div>
  Copy: <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>

<div>
  Paste: <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
</div>

<div>
  Select all: <Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>
</div>

<div>
  Undo: <Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd>
</div>

<div>
  Redo: <Kbd>Ctrl</Kbd> + <Kbd>Y</Kbd> or <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd>
</div>
```

## Editor Shortcut Panel

```jsx
<div
  style={{
    background: "var(--gray-2)",
    padding: "12px",
    borderRadius: "6px",
    maxWidth: "400px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
    }}
  >
    <span>Save file</span>
    <span>
      <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
    </span>
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
    }}
  >
    <span>Find text</span>
    <span>
      <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd>
    </span>
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
    }}
  >
    <span>Replace text</span>
    <span>
      <Kbd>Ctrl</Kbd> + <Kbd>H</Kbd>
    </span>
  </div>
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <span>Go to line</span>
    <span>
      <Kbd>Ctrl</Kbd> + <Kbd>G</Kbd>
    </span>
  </div>
</div>
```

## Game Control Keys

```jsx
<div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    }}
  >
    <Kbd>W</Kbd>
    <div style={{ display: "flex", gap: "4px" }}>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
    </div>
  </div>
  <p>Use WASD to control character movement</p>
</div>
```

## Web Browsing Shortcuts

```jsx
<p>
  Press <Kbd>Tab</Kbd> to navigate between page elements
</p>

<p>
  Press <Kbd>Space</Kbd> or <Kbd>Page Down</Kbd> to scroll the page
</p>

<p>
  Press <Kbd>Home</Kbd> to go to the top, <Kbd>End</Kbd> to go to the bottom
</p>

<p>
  Press <Kbd>Ctrl</Kbd> + <Kbd>+</Kbd> to zoom in, <Kbd>Ctrl</Kbd> + <Kbd>-</Kbd> to zoom out
</p>

<p>
  Press <Kbd>F11</Kbd> to toggle fullscreen mode
</p>
```

## When to Use

- Displaying keyboard shortcuts in documentation or tutorials
- Hinting available keyboard operations in application UIs
- Showing keyboard navigation instructions in help pages
- Building shortcut reference panels or help centers

## Props

### Kbd

| Prop    | Description                                        | Type                                                        | Default |
| ------- | -------------------------------------------------- | ----------------------------------------------------------- | ------- |
| size    | Key size                                           | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -       |
| asChild | Apply the styles and behavior to the child element | boolean                                                     | false   |

The Kbd component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/kbd) for the full API reference and design guidelines.

----- split line -----

## link (react/link)

# `react-link`

Link is a component for navigation between pages or opening external resources, supporting custom styles and various interaction states.

## Installation

```sh
pnpm add @sea-lion/react-link
# or
npm install @sea-lion/react-link
yarn add @sea-lion/react-link
```

## Usage

Import the component in your code:

```tsx
import { Link } from "@sea-lion/react-link";
```

## Basic Usage

```jsx
import { Link } from "@sea-lion/react-link";

export default () => (
  <div>
    <Link href="https://example.com">Click to visit example website</Link>
  </div>
);
```

## Different Sizes

The Link component offers various size options:

```jsx
<Link size="1" href="#">Size 1</Link>
<Link size="2" href="#">Size 2</Link>
<Link size="3" href="#">Size 3</Link>
<Link size="4" href="#">Size 4</Link>
<Link size="5" href="#">Size 5</Link>
<Link size="6" href="#">Size 6</Link>
<Link size="7" href="#">Size 7</Link>
<Link size="8" href="#">Size 8</Link>
<Link size="9" href="#">Size 9</Link>
```

## Underline Styles

The Link component provides multiple underline styles:

```jsx
<Link underline="auto" href="#">Auto underline (default)</Link>
<Link underline="always" href="#">Always show underline</Link>
<Link underline="hover" href="#">Show underline on hover</Link>
<Link underline="none" href="#">No underline</Link>
```

## Text Styles

The Link component inherits the style properties from the Text component:

```jsx
<Link weight="bold" href="#">Bold link</Link>
<Link truncate href="#">This is a very long text that will be truncated...</Link>
<Link textWrap="nowrap" href="#">No wrapping text</Link>
```

## Color Variants

```jsx
<Link color="blue" href="#">Blue link</Link>
<Link color="green" href="#">Green link</Link>
<Link color="red" href="#">Red link</Link>
<Link highContrast href="#">High contrast</Link>
```

## Custom Elements

Use `asChild` to apply link styles to custom elements:

```jsx
<Link asChild>
  <CustomComponent>Custom component link</CustomComponent>
</Link>
```

## With Other Components

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

<Flex gap="2" align="center">
  <Text>Check out our</Text>
  <Link href="/about">About Us</Link>
  <Text>page for more information</Text>
</Flex>;
```

## Props

### Link

| Prop         | Description                                        | Type                                                        | Default   | Version |
| ------------ | -------------------------------------------------- | ----------------------------------------------------------- | --------- | ------- |
| size         | Link size                                          | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -         | 0.2.0   |
| weight       | Font weight                                        | 'light' \| 'regular' \| 'medium' \| 'bold'                  | 'regular' | 0.2.0   |
| underline    | Underline style                                    | 'auto' \| 'always' \| 'hover' \| 'none'                     | 'auto'    | 0.2.0   |
| color        | Color                                              | standard colors                                             | -         | 0.2.0   |
| highContrast | High contrast mode                                 | boolean                                                     | false     | 0.2.0   |
| truncate     | Text truncation                                    | boolean                                                     | false     | 0.2.0   |
| textWrap     | Text wrapping                                      | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | 'wrap'    | 0.2.0   |
| asChild      | Apply the styles and behavior to the child element | boolean                                                     | false     | 0.2.0   |

The Link component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.) and all properties of the `a` element (such as `href`, `target`, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/link) for the full API reference and design guidelines.

----- split line -----

## oss-icon (react/oss-icon)

# `react-oss-icon`

OssIcon (IconFont) is an icon component based on the [iconfont platform](https://www.iconfont.cn/). It loads icons via **Font-class** (.css) or **Symbol** (.js) resource URLs. When no URL is provided, it uses built-in default links and you can switch between single-color and multicolor modes with `useSymbol`.

## Installation

```sh
pnpm add @sea-lion/react-oss-icon
# or
npm install @sea-lion/react-oss-icon
yarn add @sea-lion/react-oss-icon
```

## Usage

Import the component in your code:

```tsx
import { IconFont, defaultOssIconCssUrl, defaultOssIconJsUrl } from "@sea-lion/react-oss-icon";
```

### Basic usage (built-in links)

When `ossUrl` is not passed, the component uses the built-in Font-class (single-color) or Symbol (multicolor) link, controlled by `useSymbol`. Default is `useSymbol: false`.

```jsx
<IconFont icon="icon-xxx" />
<IconFont icon="icon-xxx" color="#1890ff" fontSize="24px" />
<IconFont icon="icon-guanjianzhen" useSymbol style={{ fontSize: 28 }} />
```

### Custom resource URL

When `ossUrl` is provided, the component infers the mode from the URL: `.js` → Symbol (multicolor), `.css` → Font-class (single-color). In this case `useSymbol` is ignored.

```jsx
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.css" icon="icon-xxx" />
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.js" icon="icon-xxx" />
```

### Integrating with iconfont

- **Built-in links**: Without `ossUrl`, uses `defaultOssIconCssUrl` (Font-class) or `defaultOssIconJsUrl` (Symbol), toggled by **useSymbol** (default `false`).
- **Font-class**: Single-color; set `color` and `fontSize`.
- **Symbol**: Multicolor; component renders with SVG `<use>`. Use `<IconFont icon="icon-xxx" useSymbol />`.
- **Custom ossUrl**: When set, mode is inferred from URL suffix (.js → Symbol, otherwise → Font-class).
- Protocol-relative URLs (`//...`) are supported and completed with `https:`.

## API

| Prop       | Type      | Default       | Description |
|------------|-----------|---------------|-------------|
| icon       | string    | —             | Icon name, e.g. icon-xxx |
| ossUrl     | string    | see above     | Resource URL; when omitted, built-in link is used (see useSymbol) |
| useSymbol  | boolean   | false         | Use Symbol multicolor; only when ossUrl is not set |
| color      | string    | currentColor  | Icon color (Font-class) |
| fontSize   | string    | 1em           | Icon size |
| style / className | —     | —             | Style |

Exported constants: `defaultOssIconCssUrl`, `defaultOssIconJsUrl`, `defaultOssIconUrl` (deprecated), `isSymbolOssUrl(url)`.

## When to Use

- When using icons from your team's iconfont project
- When staying consistent with an existing iconfont setup
- When you need lightweight, color- and size-configurable icons
- When you need multicolor icons: use `useSymbol` or pass a .js `ossUrl`

----- split line -----

## popover (react/popover)

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

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/popover) for the full API reference and design guidelines.

----- split line -----

## progress (react/progress)

# `react-progress`

Progress is a component that indicates the completion status of an operation or task.

## Installation

```sh
$ yarn add @sea-lion/react-progress
# or
$ npm install @sea-lion/react-progress
```

## Basic Usage

```jsx
import { Progress } from "@sea-lion/react-progress";

export default () => <Progress value={40} />;
```

## Different Sizes

Progress component offers three sizes:

```jsx
<Progress size="1" value={60} />
<Progress size="2" value={60} /> {/* Default size */}
<Progress size="3" value={60} />
```

## Different Variants

Progress component offers three variants:

```jsx
<Progress variant="classic" value={60} />
<Progress variant="surface" value={60} /> {/* Default variant */}
<Progress variant="soft" value={60} />
```

## Custom Colors

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="green" />
<Progress value={60} color="red" />
<Progress value={60} color="purple" />
<Progress value={60} color="orange" />
<Progress value={60} color="amber" />
```

## Border Radius

Use the `radius` prop to customize the progress bar's border radius:

```jsx
<Progress value={60} radius="none" />
<Progress value={60} radius="small" />
<Progress value={60} radius="medium" />
<Progress value={60} radius="large" />
<Progress value={60} radius="full" />
```

## Indeterminate State

When no `value` prop is provided, Progress shows an indeterminate loading indicator:

```jsx
<Progress />
<Progress color="blue" />
<Progress color="green" />
```

## Custom Animation Duration

```jsx
<Progress duration="2s" />   {/* Fast */}
<Progress duration="5s" />   {/* Default */}
<Progress duration="10s" />  {/* Slow */}
```

## High Contrast Mode

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="blue" highContrast />
```

## Dynamic Progress Bar

```jsx
import { useState, useEffect } from "react";
import { Progress } from "@sea-lion/react-progress";

export default () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 5;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <Progress value={progress} />
      <button
        onClick={() => {
          setProgress(0);
          setIsRunning(true);
        }}
      >
        Start
      </button>
      <span>{progress}%</span>
    </div>
  );
};
```

## Practical Use Cases

### File Upload Progress

```jsx
<div>
  <Progress value={uploadProgress} color="blue" size="2" />
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <span>Uploading...</span>
    <span>{uploadProgress}%</span>
  </div>
</div>
```

### Loading State

```jsx
<div>
  <p>Loading data, please wait...</p>
  <Progress color="purple" variant="surface" size="2" />
</div>
```

## When to Use

- When you need to display the completion progress of a task or operation
- When you need to indicate a loading state or processing workflow
- For showing file upload or download progress
- When you need to provide visual feedback to users that a task is in progress

## Props

| Prop         | Description              | Type                                               | Default   |
| ------------ | ------------------------ | -------------------------------------------------- | --------- |
| size         | Size of the progress bar | '1' \| '2' \| '3'                                  | '2'       |
| variant      | Variant style            | 'classic' \| 'surface' \| 'soft'                   | 'surface' |
| color        | Color                    | Standard colors                                    | -         |
| highContrast | High contrast mode       | boolean                                            | false     |
| radius       | Border radius            | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         |
| duration     | Animation duration       | `${number}s` \| `${number}ms`                      | '5s'      |
| value        | Current progress value   | number                                             | -         |
| max          | Maximum progress value   | number                                             | 100       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/progress) for the full API reference and design guidelines.

----- split line -----

## radio-card (react/radio-card)

# `react-radio-card`

RadioCard is a card-style radio button component for selecting one option from a set of options in card format.

## Installation

```sh
$ yarn add @sea-lion/react-radio-card
# or
$ npm install @sea-lion/react-radio-card
```

## Basic Usage

```jsx
import * as RadioCards from "@sea-lion/react-radio-card";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioCards.Root value={value} onValueChange={setValue}>
      <RadioCards.Item value="option1">Option 1</RadioCards.Item>
      <RadioCards.Item value="option2">Option 2</RadioCards.Item>
      <RadioCards.Item value="option3">Option 3</RadioCards.Item>
    </RadioCards.Root>
  );
};
```

## Different Sizes

RadioCards component offers three sizes:

```jsx
<RadioCards.Root size="1">
  {/* Small size */}
</RadioCards.Root>

<RadioCards.Root size="2">
  {/* Default size */}
</RadioCards.Root>

<RadioCards.Root size="3">
  {/* Large size */}
</RadioCards.Root>
```

## Different Variants

RadioCards component offers two variant styles:

```jsx
<RadioCards.Root variant="surface">
  {/* Default style */}
</RadioCards.Root>

<RadioCards.Root variant="classic">
  {/* Classic style */}
</RadioCards.Root>
```

## Custom Colors

```jsx
<RadioCards.Root color="blue">
  {/* Blue theme */}
</RadioCards.Root>

<RadioCards.Root color="green">
  {/* Green theme */}
</RadioCards.Root>

<RadioCards.Root color="red">
  {/* Red theme */}
</RadioCards.Root>
```

## High Contrast Mode

```jsx
<RadioCards.Root highContrast>{/* High contrast mode */}</RadioCards.Root>
```

## Custom Grid Layout

RadioCards component supports custom column layout and gap:

```jsx
<RadioCards.Root columns="2" gap="3">
  {/* Two columns with gap 3 */}
</RadioCards.Root>

<RadioCards.Root columns="3" gap="4">
  {/* Three columns with gap 4 */}
</RadioCards.Root>

<RadioCards.Root columns="repeat(auto-fit, minmax(200px, 1fr))" gap="5">
  {/* Responsive layout */}
</RadioCards.Root>
```

## Cards with Icons

```jsx
import { PersonIcon, GearIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@sea-lion/react-flex";

<RadioCards.Root>
  <RadioCards.Item value="profile">
    <Flex gap="2" align="center">
      <PersonIcon />
      <Text>Profile</Text>
    </Flex>
  </RadioCards.Item>
  <RadioCards.Item value="settings">
    <Flex gap="2" align="center">
      <GearIcon />
      <Text>Settings</Text>
    </Flex>
  </RadioCards.Item>
</RadioCards.Root>;
```

## Disabled State

```jsx
<RadioCards.Root>
  <RadioCards.Item value="option1">Option 1</RadioCards.Item>
  <RadioCards.Item value="option2" disabled>
    Option 2 (Disabled)
  </RadioCards.Item>
  <RadioCards.Item value="option3">Option 3</RadioCards.Item>
</RadioCards.Root>
```

## Root Props

| Prop          | Description                 | Type                    | Default                              | Version |
| ------------- | --------------------------- | ----------------------- | ------------------------------------ | ------- |
| size          | Card size                   | '1' \| '2' \| '3'       | '2'                                  | 0.2.0   |
| variant       | Variant style               | 'surface' \| 'classic'  | 'surface'                            | 0.2.0   |
| color         | Color                       | Standard colors         | -                                    | 0.2.0   |
| highContrast  | High contrast mode          | boolean                 | false                                | 0.2.0   |
| columns       | Grid column layout          | string                  | repeat(auto-fit, minmax(160px, 1fr)) | 0.2.0   |
| gap           | Grid gap                    | string                  | '4'                                  | 0.2.0   |
| value         | Selected value              | string                  | -                                    | 0.2.0   |
| defaultValue  | Default selected value      | string                  | -                                    | 0.2.0   |
| onValueChange | Callback when value changes | (value: string) => void | -                                    | 0.2.0   |

## Item Props

| Prop     | Description              | Type    | Default | Version |
| -------- | ------------------------ | ------- | ------- | ------- |
| value    | Item value               | string  | -       | 0.2.0   |
| disabled | Whether item is disabled | boolean | false   | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/radio-cards) for the full API reference and design guidelines.

----- split line -----

## radio-group (react/radio-group)

# `react-radio-group`

RadioGroup is a component that allows users to select a single option from a list of options.

## Installation

```sh
pnpm add @sea-lion/react-radio-group
# or
npm install @sea-lion/react-radio-group
yarn add @sea-lion/react-radio-group
```

## Usage

Import the component in your code:

```tsx
import * as RadioGroup from "@sea-lion/react-radio-group";
```

## When to Use

- When the user must select one option from a set of mutually exclusive options
- When there are few options and they can all be shown at once
- When the user needs to make an explicit choice

## Basic Usage

```jsx
import * as RadioGroup from "@sea-lion/react-radio-group";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
    </RadioGroup.Root>
  );
};
```

## Different Sizes

RadioGroup component offers three sizes:

```jsx
<RadioGroup.Root size="1">
  <RadioGroup.Item value="small">Small size (size="1")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="2">
  <RadioGroup.Item value="medium">Default size (size="2")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="3">
  <RadioGroup.Item value="large">Large size (size="3")</RadioGroup.Item>
</RadioGroup.Root>
```

## Different Variants

RadioGroup component offers three variant styles:

```jsx
<RadioGroup.Root variant="surface">
  <RadioGroup.Item value="surface">Surface variant</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="classic">
  <RadioGroup.Item value="classic">Classic variant</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="soft">
  <RadioGroup.Item value="soft">Soft variant</RadioGroup.Item>
</RadioGroup.Root>
```

## Custom Colors

```jsx
<RadioGroup.Root color="blue">
  <RadioGroup.Item value="blue">Blue</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="green">
  <RadioGroup.Item value="green">Green</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="red">
  <RadioGroup.Item value="red">Red</RadioGroup.Item>
</RadioGroup.Root>
```

## High Contrast Mode

```jsx
<RadioGroup.Root highContrast>
  <RadioGroup.Item value="high-contrast">High contrast</RadioGroup.Item>
</RadioGroup.Root>
```

## Disabled State

```jsx
<RadioGroup.Root>
  <RadioGroup.Item value="enabled">Enabled state</RadioGroup.Item>
  <RadioGroup.Item value="disabled" disabled>
    Disabled state
  </RadioGroup.Item>
</RadioGroup.Root>
```

## Custom Layout

RadioGroup component is vertically arranged by default, but you can use styles to create a horizontal layout:

```jsx
<RadioGroup.Root style={{ flexDirection: "row", gap: "10px" }}>
  <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
</RadioGroup.Root>
```

## Root Props

| Prop          | Description           | Type                             | Default   | Version |
| ------------- | --------------------- | -------------------------------- | --------- | ------- |
| size          | Radio button size     | '1' \| '2' \| '3'                | '2'       | 0.2.0   |
| variant       | Variant style         | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0   |
| color         | Color                 | Standard colors                  | -         | 0.2.0   |
| highContrast  | High contrast mode    | boolean                          | false     | 0.2.0   |
| value         | Selected value        | string                           | -         | 0.2.0   |
| defaultValue  | Default value         | string                           | -         | 0.2.0   |
| onValueChange | Value change callback | (value: string) => void          | -         | 0.2.0   |

## Item Props

| Prop     | Description              | Type    | Default | Version |
| -------- | ------------------------ | ------- | ------- | ------- |
| value    | Item value               | string  | -       | 0.2.0   |
| disabled | Whether item is disabled | boolean | false   | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/radio-group) for the full API reference and design guidelines.

----- split line -----

## radio (react/radio)

# `react-radio`

Radio is a component that allows users to select a single option from a set.

## Installation

```sh
$ yarn add @sea-lion/react-radio
# or
$ npm install @sea-lion/react-radio
```

## Basic Usage

```jsx
import { Radio } from "@sea-lion/react-radio";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Radio
          value="option1"
          checked={value === "option1"}
          onValueChange={setValue}
          name="radio-group"
        />
        Option 1
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Radio
          value="option2"
          checked={value === "option2"}
          onValueChange={setValue}
          name="radio-group"
        />
        Option 2
      </div>
    </div>
  );
};
```

## Different Sizes

Radio component offers three sizes:

```jsx
<Radio size="1" value="s1" defaultChecked name="s1" /> {/* Small */}
<Radio size="2" value="s2" defaultChecked name="s2" /> {/* Default */}
<Radio size="3" value="s3" defaultChecked name="s3" /> {/* Large */}
```

## Custom Colors

```jsx
<Radio value="default" defaultChecked name="c1" />              {/* Default color */}
<Radio value="blue" color="blue" defaultChecked name="c2" />    {/* Blue */}
<Radio value="green" color="green" defaultChecked name="c3" />  {/* Green */}
<Radio value="red" color="red" defaultChecked name="c4" />      {/* Red */}
<Radio value="purple" color="purple" defaultChecked name="c5" /> {/* Purple */}
<Radio value="orange" color="orange" defaultChecked name="c6" /> {/* Orange */}
```

## Disabled State

```jsx
<Radio disabled value="d1" name="d1" />              {/* Disabled, unchecked */}
<Radio disabled defaultChecked value="d2" name="d2" /> {/* Disabled, checked */}
```

## High Contrast Mode

```jsx
<Radio value="c1" defaultChecked name="contrast1" />                    {/* Normal contrast */}
<Radio value="c2" highContrast defaultChecked name="contrast2" />        {/* High contrast */}
<Radio value="c3" color="blue" defaultChecked name="contrast3" />        {/* Normal contrast (blue) */}
<Radio value="c4" color="blue" highContrast defaultChecked name="contrast4" /> {/* High contrast (blue) */}
```

## Grouping

When you need to select one option from a set, group radio buttons with the same `name` attribute:

```jsx
const [fruit, setFruit] = useState("apple");

<div>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <Radio
      name="fruits"
      value="apple"
      checked={fruit === "apple"}
      onValueChange={setFruit}
    />
    Apple
  </div>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <Radio
      name="fruits"
      value="banana"
      checked={fruit === "banana"}
      onValueChange={setFruit}
    />
    Banana
  </div>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <Radio
      name="fruits"
      value="orange"
      checked={fruit === "orange"}
      onValueChange={setFruit}
    />
    Orange
  </div>
</div>;
```

## Practical Use Cases

### Personal Information Form

```jsx
const [gender, setGender] = useState("male");
const [education, setEducation] = useState("bachelor");

<form>
  <div>
    <p>Gender</p>
    <div style={{ display: "flex", gap: "16px" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Radio
          name="gender"
          value="male"
          checked={gender === "male"}
          onValueChange={setGender}
        />
        Male
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Radio
          name="gender"
          value="female"
          checked={gender === "female"}
          onValueChange={setGender}
        />
        Female
      </label>
    </div>
  </div>

  <div>
    <p>Highest Education</p>
    {["High School", "Bachelor", "Master", "PhD"].map((level, i) => (
      <label
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <Radio
          name="education"
          value={level}
          checked={education === level}
          onValueChange={setEducation}
        />
        {level}
      </label>
    ))}
  </div>
</form>;
```

### Preference Toggle

```jsx
const [preference, setPreference] = useState("option1");

<div>
  <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
    {["Option 1", "Option 2", "Option 3"].map((opt, i) => (
      <label
        key={i}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <Radio
          size="3"
          color="purple"
          name="preference"
          value={`option${i + 1}`}
          checked={preference === `option${i + 1}`}
          onValueChange={setPreference}
        />
        {opt}
      </label>
    ))}
  </div>
  <div
    style={{
      padding: "12px",
      background: "var(--gray-2)",
      borderRadius: "4px",
    }}
  >
    Selected: {preference}
  </div>
</div>;
```

## When to Use

- When users need to select a single option from a mutually exclusive set
- When there are few options that can all be displayed (typically no more than 7)
- When the selection should be immediately submitted without a confirmation step
- When users should be able to see all available options at a glance (vs. a dropdown)

## Props

| Prop           | Description                 | Type                    | Default |
| -------------- | --------------------------- | ----------------------- | ------- |
| size           | Radio button size           | '1' \| '2' \| '3'       | '2'     |
| color          | Color                       | Standard colors         | -       |
| highContrast   | High contrast mode          | boolean                 | false   |
| value          | Radio button value          | string                  | -       |
| checked        | Whether radio is checked    | boolean                 | false   |
| defaultChecked | Default checked state       | boolean                 | false   |
| disabled       | Whether radio is disabled   | boolean                 | false   |
| name           | Name for grouping radios    | string                  | -       |
| onValueChange  | Callback when value changes | (value: string) => void | -       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/radio) for the full API reference and design guidelines.

----- split line -----

## reset (react/reset)

# `react-reset`

Reset is a style reset component used to clear default styles of HTML elements, ensuring consistent appearance across different browsers.

## Installation

```sh
$ yarn add @sea-lion/react-reset
# or
$ npm install @sea-lion/react-reset
```

## Basic Usage

```jsx
import { Reset } from "@sea-lion/react-reset";

export default () => {
  return (
    <Reset>
      <button>This is a button without default styles</button>
    </Reset>
  );
};
```

## HTML Element Reset

The Reset component can be applied to various HTML elements to clear their default styles:

```jsx
{
  /* Reset an input */
}
<Reset>
  <input type="text" placeholder="Input without default styles" />
</Reset>;

{
  /* Reset a list */
}
<Reset>
  <ul>
    <li>List item 1 without default styles</li>
    <li>List item 2 without default styles</li>
  </ul>
</Reset>;

{
  /* Reset a link */
}
<Reset>
  <a href="#">Link without default styles</a>
</Reset>;

{
  /* Reset a radio button */
}
<Reset>
  <input type="radio" />
</Reset>;

{
  /* Reset a checkbox */
}
<Reset>
  <input type="checkbox" />
</Reset>;
```

## Combined Usage

The Reset component often serves as a foundation for other components and can be combined with other style components:

```jsx
import { Reset } from "@sea-lion/react-reset";
import { Box } from "@sea-lion/react-box";

export default () => {
  return (
    <Reset>
      <Box padding="4" background="gray-3" borderRadius="3">
        <button>Button with combined styles</button>
      </Box>
    </Reset>
  );
};
```

## Building Custom Forms

Use the Reset component to build forms with fully custom styles, free from browser default styling:

```jsx
<Reset>
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "300px",
    }}
  >
    <input
      type="text"
      placeholder="Username"
      style={{
        padding: "10px",
        border: "1px solid var(--gray-7)",
        borderRadius: "4px",
      }}
    />
    <input
      type="password"
      placeholder="Password"
      style={{
        padding: "10px",
        border: "1px solid var(--gray-7)",
        borderRadius: "4px",
      }}
    />
    <button
      style={{
        padding: "10px",
        background: "var(--blue-9)",
        color: "white",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Login
    </button>
  </form>
</Reset>
```

## Custom Button Example

```jsx
<Reset>
  <button
    style={{
      padding: '8px 16px',
      background: 'var(--blue-9)',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Confirm
  </button>
</Reset>

<Reset>
  <button
    style={{
      padding: '8px 16px',
      background: 'transparent',
      color: 'var(--gray-11)',
      border: '1px solid var(--gray-7)',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Cancel
  </button>
</Reset>
```

## When to Use

- When you need to build HTML elements with fully custom styles from scratch
- As a foundation for custom UI components, ensuring cross-browser style consistency
- When you need to override the browser's User-Agent Stylesheet
- Building highly customized form elements (inputs, buttons, selects, etc.)
- When you need to remove default decorative styles from links, lists, and other elements

## Props

| Prop     | Description                        | Type            | Default |
| -------- | ---------------------------------- | --------------- | ------- |
| children | Content to reset styles            | React.ReactNode | -       |
| asChild  | Whether to render as child element | boolean         | false   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/reset) for the full API reference and design guidelines.

----- split line -----

## scroll-area (react/scroll-area)

# `react-scroll-area`

ScrollArea is a custom scrollable area component that provides an elegant cross-browser scrolling experience with customizable scrollbars.

## Installation

```sh
$ yarn add @sea-lion/react-scroll-area
# or
$ npm install @sea-lion/react-scroll-area
```

## Basic Usage

```jsx
import { ScrollArea } from "@sea-lion/react-scroll-area";

export default () => {
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <ScrollArea>
        <div style={{ padding: "15px" }}>
          <p>
            This is a long text content. When the content exceeds the container
            size, custom scrollbars will be displayed.
          </p>
          <p>
            The custom scrollbars are aesthetically pleasing and can be
            configured in size, style, and direction.
          </p>
          {/* More content... */}
        </div>
      </ScrollArea>
    </div>
  );
};
```

## Sizes

ScrollArea supports three scrollbar sizes:

```jsx
<ScrollArea size="1">{/* Content */}</ScrollArea>
<ScrollArea size="2">{/* Content */}</ScrollArea>
<ScrollArea size="3">{/* Content */}</ScrollArea>
```

## Scrollbar Direction

You can control which scrollbars to display:

```jsx
{
  /* Vertical scrollbar only */
}
<ScrollArea scrollbars="vertical">{/* Content */}</ScrollArea>;

{
  /* Horizontal scrollbar only */
}
<ScrollArea scrollbars="horizontal">{/* Content */}</ScrollArea>;

{
  /* Both vertical and horizontal scrollbars */
}
<ScrollArea scrollbars="both">{/* Content */}</ScrollArea>;
```

## Scrollbar Type

Use the `type` prop to control when scrollbars are visible:

```jsx
{
  /* Auto: scrollbars appear only when content overflows */
}
<ScrollArea type="auto">{/* Content */}</ScrollArea>;

{
  /* Always: scrollbars are always visible regardless of content overflow */
}
<ScrollArea type="always">{/* Content */}</ScrollArea>;

{
  /* Scroll: scrollbars appear only while scrolling */
}
<ScrollArea type="scroll">{/* Content */}</ScrollArea>;

{
  /* Hover (default): scrollbars appear when hovering over the container */
}
<ScrollArea type="hover">{/* Content */}</ScrollArea>;
```

## Border Radius

Use the `radius` prop to set the scrollbar border radius. Supported values:

```jsx
<ScrollArea radius="none">{/* No border radius */}</ScrollArea>
<ScrollArea radius="small">{/* Small border radius */}</ScrollArea>
<ScrollArea radius="medium">{/* Medium border radius */}</ScrollArea>
<ScrollArea radius="large">{/* Large border radius */}</ScrollArea>
<ScrollArea radius="full">{/* Fully rounded */}</ScrollArea>
```

## Practical Use Cases

### Content Card

```jsx
<div
  style={{
    width: "350px",
    height: "400px",
    border: "1px solid var(--gray-6)",
    borderRadius: "8px",
    overflow: "hidden",
  }}
>
  <div style={{ padding: "16px", borderBottom: "1px solid var(--gray-4)" }}>
    <h3>Article Title</h3>
  </div>
  <div style={{ height: "calc(400px - 61px)" }}>
    <ScrollArea>
      <div style={{ padding: "16px" }}>{/* Long article content */}</div>
    </ScrollArea>
  </div>
</div>
```

### Sidebar Menu

```jsx
<div style={{ width: "200px", height: "400px" }}>
  <ScrollArea>
    <div style={{ padding: "16px" }}>
      {menuItems.map((item, i) => (
        <div key={i} style={{ padding: "8px 12px", marginBottom: "4px" }}>
          {item}
        </div>
      ))}
    </div>
  </ScrollArea>
</div>
```

## When to Use

- When you need custom scrollbar styles
- When you need a consistent scrolling experience across different browsers
- When you need to control scrollbar visibility behavior
- In fixed-height containers with long content (sidebar menus, article lists, etc.)

## Props

| Prop            | Description               | Type                                               | Default |
| --------------- | ------------------------- | -------------------------------------------------- | ------- |
| size            | Scrollbar size            | '1' \| '2' \| '3'                                  | '1'     |
| radius          | Scrollbar border radius   | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -       |
| scrollbars      | Scrollbars to display     | 'vertical' \| 'horizontal' \| 'both'               | 'both'  |
| type            | Scrollbar type            | 'auto' \| 'always' \| 'scroll' \| 'hover'          | 'hover' |
| scrollHideDelay | Scrollbar hide delay (ms) | number                                             | -       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/scroll-area) for the full API reference and design guidelines.

----- split line -----

## section (react/section)

# `react-section`

Section is a layout component that creates areas with preset vertical padding, helping to organize page content hierarchy.

## Installation

```sh
$ yarn add @sea-lion/react-section
# or
$ npm install @sea-lion/react-section
```

## Basic Usage

```jsx
import { Section } from "@sea-lion/react-section";

export default () => {
  return (
    <Section>
      <h2>Section Title</h2>
      <p>
        This is an area with preset vertical padding, used to organize content.
      </p>
    </Section>
  );
};
```

## Sizes

Section component supports four sizes that control the vertical padding:

```jsx
{
  /* Small size (24px padding) */
}
<Section size="1">{/* Content */}</Section>;

{
  /* Medium size (40px padding) */
}
<Section size="2">{/* Content */}</Section>;

{
  /* Large size (64px padding, default) */
}
<Section size="3">{/* Content */}</Section>;

{
  /* Extra large size (80px padding) */
}
<Section size="4">{/* Content */}</Section>;
```

## Display Control

Use the `display` prop to control the section's visibility:

```jsx
{
  /* Hide section */
}
<Section display="none">{/* Content */}</Section>;

{
  /* Show section (default) */
}
<Section display="initial">{/* Content */}</Section>;
```

## Responsive Design

Section component supports responsive props, allowing you to adjust padding and visibility based on screen size:

```jsx
{
  /* Use smaller padding on small screens, larger padding on large screens */
}
<Section size={{ initial: "1", sm: "2", md: "3" }}>{/* Content */}</Section>;

{
  /* Hide on small screens, show on medium screens and above */
}
<Section display={{ initial: "none", md: "initial" }}>{/* Content */}</Section>;
```

## Practical Use Cases

### Page Layout

Use different sized Sections to build a hierarchical page structure:

```jsx
{
  /* Header area */
}
<Section size="2">
  <h1>Website Title</h1>
</Section>;

{
  /* Main content area */
}
<Section size="3">
  <h2>Welcome</h2>
  <p>This is the main content area.</p>
</Section>;

{
  /* Features section (with background) */
}
<Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
  <h2>Product Features</h2>
  <div style={{ display: "flex", gap: "24px" }}>
    <div>Feature One</div>
    <div>Feature Two</div>
    <div>Feature Three</div>
  </div>
</Section>;
```

### Card Content Container

Section can be used as a container for card content to provide consistent padding:

```jsx
<div
  style={{
    width: "300px",
    border: "1px solid var(--gray-5)",
    borderRadius: "8px",
    overflow: "hidden",
  }}
>
  <div style={{ height: "150px", backgroundColor: "var(--blue-5)" }} />
  <Section size="1">
    <h3>Product Title</h3>
    <p>A brief description of the product.</p>
    <a href="#">Learn more</a>
  </Section>
</div>
```

## When to Use

- When you need to divide different content areas on a page
- When you need to add consistent vertical padding to content regions
- Building hierarchical layouts such as landing pages and documentation pages
- When you need to control section visibility or padding based on screen size

## Props

| Prop    | Description             | Type                     | Default |
| ------- | ----------------------- | ------------------------ | ------- |
| size    | Vertical padding size   | '1' \| '2' \| '3' \| '4' | '3'     |
| display | Section visibility      | 'none' \| 'initial'      | -       |
| asChild | Render as child element | boolean                  | false   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/section) for the full API reference and design guidelines.

----- split line -----

## segmented-control (react/segmented-control)

# `react-segmented-control`

SegmentedControl is a component that allows users to select a single option from a group of related options. It provides a visual indicator showing the currently selected option.

## Installation

```sh
$ yarn add @sea-lion/react-segmented-control
# or
$ npm install @sea-lion/react-segmented-control
```

## Basic Usage

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";

export default () => {
  return (
    <SegmentedControl.Root defaultValue="daily">
      <SegmentedControl.Item value="daily">Daily</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">Weekly</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## Sizes

SegmentedControl component supports three sizes that control the control's dimensions:

```jsx
// Small size
<SegmentedControl.Root size="1">
  {/* items */}
</SegmentedControl.Root>

// Medium size (default)
<SegmentedControl.Root size="2">
  {/* items */}
</SegmentedControl.Root>

// Large size
<SegmentedControl.Root size="3">
  {/* items */}
</SegmentedControl.Root>
```

## Variants

SegmentedControl component provides two visual variants:

```jsx
// Surface variant (default)
<SegmentedControl.Root variant="surface">
  {/* items */}
</SegmentedControl.Root>

// Classic variant
<SegmentedControl.Root variant="classic">
  {/* items */}
</SegmentedControl.Root>
```

## Radius

Use the `radius` prop to control the component's border radius:

```jsx
<SegmentedControl.Root radius="none">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="small">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="medium">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="large">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="full">
  {/* items */}
</SegmentedControl.Root>
```

## Controlled Mode

SegmentedControl can be used as a controlled component using the `value` and `onValueChange` props:

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("daily");

  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="daily">Daily</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">Weekly</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## Props

### Root Props

| Prop          | Description            | Type                                               | Default   | Version |
| ------------- | ---------------------- | -------------------------------------------------- | --------- | ------- |
| size          | Control size           | '1' \| '2' \| '3'                                  | '2'       | 0.2.0   |
| variant       | Visual variant         | 'surface' \| 'classic'                             | 'surface' | 0.2.0   |
| radius        | Border radius          | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0   |
| value         | Current selected value | string                                             | -         | 0.2.0   |
| defaultValue  | Default selected value | string                                             | -         | 0.2.0   |
| onValueChange | Value change callback  | (value: string) => void                            | -         | 0.2.0   |

### Item Props

| Prop  | Description  | Type   | Default | Version |
| ----- | ------------ | ------ | ------- | ------- |
| value | Option value | string | -       | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/segmented-control) for the full API reference and design guidelines.

----- split line -----

## select (react/select)

# `react-select`

Select is a dropdown component that allows users to choose a value from a predefined list of options. The component supports grouping options, disabling options, and custom placeholders.

## Installation

```sh
$ yarn add @sea-lion/react-select
# or
$ npm install @sea-lion/react-select
```

## Basic Usage

```jsx
import * as Select from "@sea-lion/react-select";

export default () => {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## Sizes

The Select component supports three sizes:

```jsx
// Small size
<Select.Root size="1">
  {/* items */}
</Select.Root>

// Medium size (default)
<Select.Root size="2">
  {/* items */}
</Select.Root>

// Large size
<Select.Root size="3">
  {/* items */}
</Select.Root>
```

## Trigger Variants

The Select.Trigger component supports four visual variants:

```jsx
// Surface variant (default)
<Select.Trigger variant="surface" />

// Classic variant
<Select.Trigger variant="classic" />

// Soft variant
<Select.Trigger variant="soft" />

// Ghost variant
<Select.Trigger variant="ghost" />
```

## Content Variants

The Select.Content component supports two visual variants:

```jsx
// Solid variant (default)
<Select.Content variant="solid" />

// Soft variant
<Select.Content variant="soft" />
```

## Grouping Options

You can group options using Group and Label components:

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="orange">Orange</Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.Label>Vegetables</Select.Label>
      <Select.Item value="carrot">Carrot</Select.Item>
      <Select.Item value="potato">Potato</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

## Placeholder

```jsx
<Select.Root>
  <Select.Trigger placeholder="Please select..." />
  <Select.Content>{/* options */}</Select.Content>
</Select.Root>
```

## Disabled Options

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="orange">Orange</Select.Item>
    <Select.Item value="grape" disabled>
      Grape
    </Select.Item>
  </Select.Content>
</Select.Root>
```

## Controlled Mode

```jsx
import * as Select from "@sea-lion/react-select";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("apple");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## Props

### Root Props

| Prop          | Description                 | Type                    | Default | Version |
| ------------- | --------------------------- | ----------------------- | ------- | ------- |
| size          | Component size              | '1' \| '2' \| '3'       | '2'     | 0.2.4   |
| value         | Current selected value      | string                  | -       | 0.2.4   |
| defaultValue  | Default selected value      | string                  | -       | 0.2.4   |
| onValueChange | Value change callback       | (value: string) => void | -       | 0.2.4   |
| open          | Control dropdown open state | boolean                 | -       | 0.2.4   |
| defaultOpen   | Default open state          | boolean                 | -       | 0.2.4   |
| onOpenChange  | Open state change callback  | (open: boolean) => void | -       | 0.2.4   |
| disabled      | Disable the select          | boolean                 | false   | 0.2.4   |

### Trigger Props

| Prop        | Description      | Type                                               | Default   | Version |
| ----------- | ---------------- | -------------------------------------------------- | --------- | ------- |
| variant     | Visual variant   | 'classic' \| 'surface' \| 'soft' \| 'ghost'        | 'surface' | 0.2.4   |
| color       | Color            | string                                             | -         | 0.2.4   |
| radius      | Border radius    | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.4   |
| placeholder | Placeholder text | string                                             | -         | 0.2.4   |

### Content Props

| Prop         | Description        | Type              | Default | Version |
| ------------ | ------------------ | ----------------- | ------- | ------- |
| variant      | Visual variant     | 'solid' \| 'soft' | 'solid' | 0.2.4   |
| color        | Color              | string            | -       | 0.2.4   |
| highContrast | High contrast mode | boolean           | false   | 0.2.4   |

### Item Props

| Prop     | Description        | Type    | Default | Version |
| -------- | ------------------ | ------- | ------- | ------- |
| value    | Option value       | string  | -       | 0.2.4   |
| disabled | Disable the option | boolean | false   | 0.2.4   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/select) for the full API reference and design guidelines.

----- split line -----

## separator (react/separator)

# `react-separator`

Separator is a component that visually separates different content areas.

## Installation

```sh
$ yarn add @sea-lion/react-separator
# or
$ npm install @sea-lion/react-separator
```

## Basic Usage

```jsx
import { Separator } from "@sea-lion/react-separator";

export default () => (
  <div>
    <h2>First Section</h2>
    <p>Here is some content.</p>

    <Separator my="4" size="4" />

    <h2>Second Section</h2>
    <p>Here is some more content.</p>
  </div>
);
```

## Orientation

Separator supports both horizontal and vertical orientations:

```jsx
{
  /* Horizontal separator (default) */
}
<Separator orientation="horizontal" size="4" />;

{
  /* Vertical separator */
}
<Separator orientation="vertical" size="3" mx="3" />;
```

## Sizes

Separator comes in four sizes:

```jsx
{
  /* Size 1 (smallest) */
}
<Separator size="1" />;

{
  /* Size 2 */
}
<Separator size="2" />;

{
  /* Size 3 (medium-large) */
}
<Separator size="3" />;

{
  /* Size 4 (full container) */
}
<Separator size="4" />;
```

## Colors

Separator supports custom colors:

```jsx
{
  /* Gray (default) */
}
<Separator color="gray" size="4" />;

{
  /* Blue */
}
<Separator color="blue" size="4" />;

{
  /* Red */
}
<Separator color="red" size="4" />;

{
  /* Green */
}
<Separator color="green" size="4" />;
```

## Vertical Separator Example

To use a vertical separator, make sure to set a height on the container:

```jsx
<div style={{ display: "flex", alignItems: "center", height: "40px" }}>
  <span>Left content</span>
  <Separator orientation="vertical" size="3" mx="2" />
  <span>Right content</span>
</div>
```

## Decorative

By default, Separator is treated as a decorative element. If the separator semantically separates content, you can set it as non-decorative:

```jsx
<Separator decorative={false} />
```

## Practical Use Cases

### Content Sections

```jsx
<div
  style={{
    maxWidth: "500px",
    padding: "16px",
    border: "1px solid var(--gray-5)",
    borderRadius: "8px",
  }}
>
  <h3>Company Overview</h3>
  <p>We are a tech company focused on user experience and design systems...</p>

  <Separator size="4" my="4" />

  <h3>Our Mission</h3>
  <p>
    To provide developers with easy-to-use, efficient, and beautiful component
    libraries...
  </p>

  <Separator size="4" my="4" />

  <h3>Contact Us</h3>
  <p>Email: contact@example.com</p>
</div>
```

### Navigation Menu Dividers

```jsx
<div
  style={{
    maxWidth: "250px",
    padding: "16px",
    border: "1px solid var(--gray-5)",
    borderRadius: "8px",
  }}
>
  <div style={{ padding: "8px 0" }}>Home</div>
  <Separator size="4" />
  <div style={{ padding: "8px 0" }}>Products</div>
  <Separator size="4" />
  <div style={{ padding: "8px 0" }}>Services</div>
  <Separator size="4" />
  <div style={{ padding: "8px 0" }}>About Us</div>
</div>
```

### Sidebar and Content Area Layout

```jsx
<div
  style={{
    display: "flex",
    maxWidth: "600px",
    padding: "16px",
    border: "1px solid var(--gray-5)",
    borderRadius: "8px",
  }}
>
  <div style={{ width: "200px" }}>
    <p>Sidebar Navigation</p>
    <ul>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
    </ul>
  </div>

  <Separator orientation="vertical" size="4" mx="4" />

  <div style={{ flex: 1 }}>
    <p>Main Content Area</p>
    <p>This is the main content area...</p>
  </div>
</div>
```

## When to Use

- When you need to create a visual separation between different content blocks
- When adding horizontal or vertical dividers to a layout
- Separating different menu items in navigation menus or lists
- Dividing different content sections in articles, cards, and similar content

## Props

| Prop        | Description   | Type                       | Default      |
| ----------- | ------------- | -------------------------- | ------------ |
| orientation | Direction     | 'horizontal' \| 'vertical' | 'horizontal' |
| size        | Size          | '1' \| '2' \| '3' \| '4'   | '1'          |
| color       | Color         | Standard colors            | 'gray'       |
| decorative  | Is decorative | boolean                    | true         |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/separator) for the full API reference and design guidelines.

----- split line -----

## skeleton (react/skeleton)

# `react-skeleton`

Skeleton is a loading placeholder component used to display content outlines during data loading to improve user experience.

## Installation

```sh
$ yarn add @sea-lion/react-skeleton
# or
$ npm install @sea-lion/react-skeleton
```

## Basic Usage

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";

export default () => (
  <div>
    <Skeleton width="200px" height="20px" />
    <Skeleton width="100%" height="20px" my="2" />
    <Skeleton width="80%" height="20px" />
  </div>
);
```

## Wrapping Existing Content

Skeleton can wrap existing content, showing a placeholder during loading and displaying the content when loading is complete:

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Skeleton loading={loading}>
        <h2>Data Loaded Successfully</h2>
        <p>This content is displayed after loading is complete.</p>
      </Skeleton>
    </div>
  );
};
```

## Custom Width and Height

```jsx
// Fixed width
<Skeleton width="200px" height="24px" />

// Responsive width
<Skeleton width={{ initial: "100%", sm: "80%", lg: "50%" }} height="24px" />

// Using preset sizes
<Skeleton width="full" height="5" />
```

## Text Placeholder

When used as an empty element, Skeleton defaults to a block-level element with a height of `--space-3`:

```jsx
// Empty skeleton loaders as text placeholders
<Skeleton />
<Skeleton width="80%" my="2" />
<Skeleton width="60%" />
```

## List Placeholder

```jsx
<div>
  {Array(5)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
      >
        <Skeleton width="40px" height="40px" style={{ borderRadius: "50%" }} />
        <div style={{ marginLeft: "12px", flex: 1 }}>
          <Skeleton height="14px" mb="2" />
          <Skeleton width="60%" height="14px" />
        </div>
      </div>
    ))}
</div>
```

## Card Placeholder

```jsx
<div
  style={{
    width: "300px",
    padding: "16px",
    border: "1px solid #eee",
    borderRadius: "8px",
  }}
>
  <Skeleton width="100%" height="180px" mb="3" />
  <Skeleton width="70%" height="24px" mb="2" />
  <Skeleton width="100%" height="16px" mb="1" />
  <Skeleton width="100%" height="16px" mb="1" />
  <Skeleton width="40%" height="16px" />
</div>
```

## Props

| Prop      | Description                          | Type                       | Default | Version |
| --------- | ------------------------------------ | -------------------------- | ------- | ------- |
| loading   | Whether to show loading placeholder  | boolean                    | true    | 0.2.0   |
| width     | Width (supports responsive)          | CSSProperties['width']     | -       | 0.2.0   |
| minWidth  | Minimum width (supports responsive)  | CSSProperties['minWidth']  | -       | 0.2.0   |
| maxWidth  | Maximum width (supports responsive)  | CSSProperties['maxWidth']  | -       | 0.2.0   |
| height    | Height (supports responsive)         | CSSProperties['height']    | -       | 0.2.0   |
| minHeight | Minimum height (supports responsive) | CSSProperties['minHeight'] | -       | 0.2.0   |
| maxHeight | Maximum height (supports responsive) | CSSProperties['maxHeight'] | -       | 0.2.0   |
| children  | Content to display when loaded       | React.ReactNode            | -       | 0.2.0   |

Also supports all standard margin properties.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/skeleton) for the full API reference and design guidelines.

----- split line -----

## slider (react/slider)

# `react-slider`

Slider is a sliding input control that allows users to select a value from a range.

## Installation

```sh
$ yarn add @sea-lion/react-slider
# or
$ npm install @sea-lion/react-slider
```

## Basic Usage

```jsx
import { Slider } from "@sea-lion/react-slider";

export default () => (
  <div style={{ width: "300px" }}>
    <Slider defaultValue={[50]} />
  </div>
);
```

## Setting Range

```jsx
// Set min, max and step
<Slider defaultValue={[30]} min={0} max={100} step={10} />

// Use custom range
<Slider defaultValue={[2]} min={-5} max={5} step={1} />
```

## Multiple Thumbs

```jsx
// Use multiple thumbs to create a range selector
<Slider defaultValue={[20, 80]} />

// Set three or more thumbs
<Slider defaultValue={[10, 50, 90]} />
```

## Vertical Orientation

```jsx
<div style={{ height: "200px" }}>
  <Slider orientation="vertical" defaultValue={[50]} />
</div>
```

## Different Sizes

Slider component comes in three sizes:

```jsx
// Size 1 (smallest)
<Slider size="1" defaultValue={[50]} />

// Size 2 (default)
<Slider size="2" defaultValue={[50]} />

// Size 3 (largest)
<Slider size="3" defaultValue={[50]} />
```

## Different Variants

Slider component supports multiple style variants:

```jsx
// Classic variant
<Slider variant="classic" defaultValue={[50]} />

// Surface variant (default)
<Slider variant="surface" defaultValue={[50]} />

// Soft variant
<Slider variant="soft" defaultValue={[50]} />
```

## Custom Colors

```jsx
// Blue (default)
<Slider color="blue" defaultValue={[50]} />

// Red
<Slider color="red" defaultValue={[50]} />

// Green
<Slider color="green" defaultValue={[50]} />
```

## High Contrast

```jsx
// Enable high contrast mode
<Slider highContrast defaultValue={[50]} />
```

## Disabled State

```jsx
// Disable the slider
<Slider disabled defaultValue={[50]} />
```

## Controlled Component

```jsx
import { useState } from "react";

export default () => {
  const [value, setValue] = useState([50]);

  return (
    <Slider value={value} onValueChange={(newValue) => setValue(newValue)} />
  );
};
```

## Props

| Prop          | Description                | Type                             | Default      | Version |
| ------------- | -------------------------- | -------------------------------- | ------------ | ------- |
| size          | Slider size                | '1' \| '2' \| '3'                | '2'          | 0.2.0   |
| variant       | Slider variant style       | 'classic' \| 'surface' \| 'soft' | 'surface'    | 0.2.0   |
| color         | Slider color               | string                           | 'blue'       | 0.2.0   |
| radius        | Border radius              | string                           | -            | 0.2.0   |
| highContrast  | Use high contrast          | boolean                          | false        | 0.2.0   |
| min           | Minimum value              | number                           | 0            | 0.2.0   |
| max           | Maximum value              | number                           | 100          | 0.2.0   |
| step          | Step increment             | number                           | 1            | 0.2.0   |
| orientation   | Orientation                | 'horizontal' \| 'vertical'       | 'horizontal' | 0.2.0   |
| disabled      | Whether disabled           | boolean                          | false        | 0.2.0   |
| value         | Current value (controlled) | number[]                         | -            | 0.2.0   |
| defaultValue  | Default value              | number[]                         | -            | 0.2.0   |
| onValueChange | Value change callback      | (value: number[]) => void        | -            | 0.2.0   |
| onValueCommit | Value commit callback      | (value: number[]) => void        | -            | 0.2.0   |

Also supports all standard margin properties.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/slider) for the full API reference and design guidelines.

----- split line -----

## spinner (react/spinner)

# `react-spinner`

Spinner is a loading indicator component used to indicate that content is loading.

## Installation

```sh
$ yarn add @sea-lion/react-spinner
# or
$ npm install @sea-lion/react-spinner
```

## Basic Usage

```jsx
import { Spinner } from "@sea-lion/react-spinner";

export default () => (
  <div>
    <Spinner />
    <span>Loading...</span>
  </div>
);
```

## Different Sizes

Spinner component comes in three sizes:

```jsx
{
  /* Size 1 (smallest) */
}
<Spinner size="1" />;

{
  /* Size 2 (default) */
}
<Spinner size="2" />;

{
  /* Size 3 (largest) */
}
<Spinner size="3" />;
```

## Custom Colors

Customize the Spinner color by setting the color on the parent element:

```jsx
<div style={{ color: 'var(--blue-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--red-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--green-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--purple-9)' }}>
  <Spinner />
</div>
```

## Wrapping Content

Spinner can wrap other content, showing a loading animation during loading and displaying the content when loading is complete:

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Spinner loading={loading}>
      <div>Content to display when loading is complete</div>
    </Spinner>
  );
};
```

## Combined with Button

Spinner can be combined with a button to indicate submission or processing state:

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { Button } from "@sea-lion/react-button";

{
  /* Button in loading state */
}
<Button disabled>
  <Spinner size="1" />
  Submitting
</Button>;

{
  /* Normal state */
}
<Button>Submit</Button>;
```

## Loading Card

```jsx
<div
  style={{
    border: "1px solid var(--gray-5)",
    borderRadius: "6px",
    padding: "16px",
    width: "300px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <Spinner size="1" />
    <span>Loading data...</span>
  </div>
</div>
```

## Custom Styling

```jsx
{
  /* Add margins */
}
<Spinner mt="4" mb="4" />;

{
  /* Custom color (via parent element) */
}
<div style={{ color: "var(--blue-9)" }}>
  <Spinner />
</div>;
```

## When to Use

- When a page or component is loading data
- When an operation takes time to complete (e.g., form submission, file upload)
- When you need to inform users to wait and prevent accidental interactions
- Combined with buttons to indicate that an operation is in progress

## Props

| Prop    | Description   | Type              | Default |
| ------- | ------------- | ----------------- | ------- |
| size    | Size          | '1' \| '2' \| '3' | '2'     |
| loading | Loading state | boolean           | true    |

Also supports all standard margin properties such as `m`, `mt`, `mb`, etc.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/spinner) for the full API reference and design guidelines.

----- split line -----

## switch (react/switch)

# `react-switch`

Switch is a toggle component used to switch between two states.

## Installation

```sh
$ yarn add @sea-lion/react-switch
# or
$ npm install @sea-lion/react-switch
```

## Basic Usage

```jsx
import { Switch } from "@sea-lion/react-switch";

export default () => (
  <div>
    <Switch />
  </div>
);
```

## Controlled Component

```jsx
import { Switch } from "@sea-lion/react-switch";
import { useState } from "react";

export default () => {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onCheckedChange={setChecked} />;
};
```

## Default Checked

```jsx
<Switch defaultChecked />
```

## Different Sizes

Switch component comes in three sizes:

```jsx
// Size 1 (smallest)
<Switch size="1" />

// Size 2 (default)
<Switch size="2" />

// Size 3 (largest)
<Switch size="3" />
```

## Different Variants

Switch component supports multiple style variants:

```jsx
// Classic variant
<Switch variant="classic" />

// Surface variant (default)
<Switch variant="surface" />

// Soft variant
<Switch variant="soft" />
```

## Custom Colors

```jsx
// Blue (default)
<Switch color="blue" />

// Red
<Switch color="red" />

// Green
<Switch color="green" />
```

## High Contrast

```jsx
// Enable high contrast mode
<Switch highContrast />
```

## Disabled State

```jsx
// Disable the switch
<Switch disabled />
```

## Props

| Prop            | Description                | Type                             | Default   | Version |
| --------------- | -------------------------- | -------------------------------- | --------- | ------- |
| size            | Switch size                | '1' \| '2' \| '3'                | '2'       | 0.2.0   |
| variant         | Switch variant style       | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0   |
| color           | Switch color               | string                           | 'blue'    | 0.2.0   |
| radius          | Border radius              | string                           | -         | 0.2.0   |
| highContrast    | Use high contrast          | boolean                          | false     | 0.2.0   |
| checked         | Current state (controlled) | boolean                          | -         | 0.2.0   |
| defaultChecked  | Default checked state      | boolean                          | false     | 0.2.0   |
| onCheckedChange | State change callback      | (checked: boolean) => void       | -         | 0.2.0   |
| disabled        | Whether disabled           | boolean                          | false     | 0.2.0   |

Also supports all standard margin properties.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/switch) for the full API reference and design guidelines.

----- split line -----

## tab-nav (react/tab-nav)

# `react-tab-nav`

TabNav is a navigation menu component used to create navigation bars and tab-based navigation.

## Installation

```sh
$ yarn add @sea-lion/react-tab-nav
# or
$ npm install @sea-lion/react-tab-nav
```

## Basic Usage

```jsx
import * as TabNav from "@sea-lion/react-tab-nav";

export default () => (
  <TabNav.Root>
    <TabNav.Link href="/">Home</TabNav.Link>
    <TabNav.Link href="/products">Products</TabNav.Link>
    <TabNav.Link href="/docs">Documentation</TabNav.Link>
    <TabNav.Link href="/about">About Us</TabNav.Link>
  </TabNav.Root>
);
```

## Active State

You can specify the currently active link using the `active` prop:

```jsx
<TabNav.Root>
  <TabNav.Link href="/" active>
    Home
  </TabNav.Link>
  <TabNav.Link href="/products">Products</TabNav.Link>
  <TabNav.Link href="/docs">Documentation</TabNav.Link>
</TabNav.Root>
```

## Different Sizes

TabNav component comes in three sizes:

```jsx
// Size 1 (smallest)
<TabNav.Root size="1">...</TabNav.Root>

// Size 2 (default)
<TabNav.Root size="2">...</TabNav.Root>

// Size 3 (largest)
<TabNav.Root size="3">...</TabNav.Root>
```

## Different Variants

TabNav.Root component supports multiple style variants:

```jsx
// Default variant
<TabNav.Root>...</TabNav.Root>

// Underline variant
<TabNav.Root variant="underline">...</TabNav.Root>
```

## Custom Colors

```jsx
// Blue (default)
<TabNav.Root color="blue">...</TabNav.Root>

// Red
<TabNav.Root color="red">...</TabNav.Root>

// Green
<TabNav.Root color="green">...</TabNav.Root>
```

## High Contrast

```jsx
// Enable high contrast mode
<TabNav.Root highContrast>...</TabNav.Root>
```

## Justification

Control how navigation items are aligned:

```jsx
// Left aligned (default)
<TabNav.Root justify="start">...</TabNav.Root>

// Center aligned
<TabNav.Root justify="center">...</TabNav.Root>

// Right aligned
<TabNav.Root justify="end">...</TabNav.Root>
```

## Wrapping

Control how items wrap when there is not enough space:

```jsx
// No wrapping (default)
<TabNav.Root wrap="nowrap">...</TabNav.Root>

// Allow wrapping
<TabNav.Root wrap="wrap">...</TabNav.Root>

// Reverse wrapping
<TabNav.Root wrap="wrap-reverse">...</TabNav.Root>
```

## Usage with Routing

Can be used with routing libraries like React Router:

```jsx
import { Link } from "react-router-dom";

<TabNav.Root>
  <TabNav.Link asChild active={location.pathname === "/"}>
    <Link to="/">Home</Link>
  </TabNav.Link>
  <TabNav.Link asChild active={location.pathname === "/products"}>
    <Link to="/products">Products</Link>
  </TabNav.Link>
</TabNav.Root>;
```

## Props

### TabNav.Root Props

| Prop         | Description       | Type                                 | Default   | Version |
| ------------ | ----------------- | ------------------------------------ | --------- | ------- |
| size         | Size              | '1' \| '2' \| '3'                    | '2'       | 0.2.0   |
| color        | Color             | string                               | 'blue'    | 0.2.0   |
| highContrast | Use high contrast | boolean                              | false     | 0.2.0   |
| variant      | Variant style     | 'surface' \| 'underline'             | 'surface' | 0.2.0   |
| wrap         | Wrapping mode     | 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap'  | 0.2.0   |
| justify      | Alignment         | 'start' \| 'center' \| 'end'         | 'start'   | 0.2.0   |

### TabNav.Link Props

| Prop    | Description               | Type    | Default | Version |
| ------- | ------------------------- | ------- | ------- | ------- |
| active  | Whether link is active    | boolean | false   | 0.2.0   |
| href    | Link URL                  | string  | -       | 0.2.0   |
| asChild | Use child as root element | boolean | false   | 0.2.0   |

All components also support standard margin properties.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/tab-nav) for the full API reference and design guidelines.

----- split line -----

## tab (react/tab)

# `react-tab`

Tab is a component that allows users to switch between different content views within the same area.

## Installation

```sh
$ yarn add @sea-lion/react-tab
# or
$ npm install @sea-lion/react-tab
```

## Basic Usage

```jsx
import * as Tabs from "@sea-lion/react-tab";

export default () => (
  <Tabs.Root defaultValue="tab1">
    <Tabs.List>
      <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <p>Content of tab 1</p>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <p>Content of tab 2</p>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <p>Content of tab 3</p>
    </Tabs.Content>
  </Tabs.Root>
);
```

## Controlled Component

```jsx
import * as Tabs from "@sea-lion/react-tab";
import { useState } from "react";

export default () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p>Current active tab: {activeTab}</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>Current active tab: {activeTab}</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};
```

## Different Sizes

Tabs.List component comes in three sizes:

```jsx
// Size 1 (smallest)
<Tabs.List size="1">...</Tabs.List>

// Size 2 (default)
<Tabs.List size="2">...</Tabs.List>

// Size 3 (largest)
<Tabs.List size="3">...</Tabs.List>
```

## Custom Colors

```jsx
// Blue (default)
<Tabs.List color="blue">...</Tabs.List>

// Red
<Tabs.List color="red">...</Tabs.List>

// Green
<Tabs.List color="green">...</Tabs.List>
```

## High Contrast

```jsx
// Enable high contrast mode
<Tabs.List highContrast>...</Tabs.List>
```

## Different Variants

Tabs.List component supports multiple style variants:

```jsx
// Default variant
<Tabs.List>...</Tabs.List>

// Underline variant
<Tabs.List variant="underline">...</Tabs.List>
```

## Disabled State

You can disable specific tabs:

```jsx
<Tabs.Trigger value="tab1" disabled>
  Disabled Tab
</Tabs.Trigger>
```

## Props

### Tabs.Root Props

| Prop          | Description                       | Type                    | Default | Version |
| ------------- | --------------------------------- | ----------------------- | ------- | ------- |
| defaultValue  | Default selected tab              | string                  | -       | 0.2.1   |
| value         | Current selected tab (controlled) | string                  | -       | 0.2.1   |
| onValueChange | Tab change callback               | (value: string) => void | -       | 0.2.1   |
| asChild       | Use child as root element         | boolean                 | false   | 0.2.1   |

### Tabs.List Props

| Prop         | Description       | Type                     | Default   | Version |
| ------------ | ----------------- | ------------------------ | --------- | ------- |
| size         | Size              | '1' \| '2' \| '3'        | '2'       | 0.2.1   |
| color        | Color             | string                   | 'blue'    | 0.2.1   |
| highContrast | Use high contrast | boolean                  | false     | 0.2.1   |
| variant      | Variant style     | 'surface' \| 'underline' | 'surface' | 0.2.1   |

### Tabs.Trigger Props

| Prop     | Description      | Type    | Default | Version |
| -------- | ---------------- | ------- | ------- | ------- |
| value    | Tab value        | string  | -       | 0.2.1   |
| disabled | Whether disabled | boolean | false   | 0.2.1   |

### Tabs.Content Props

| Prop    | Description               | Type    | Default | Version |
| ------- | ------------------------- | ------- | ------- | ------- |
| value   | Corresponding tab value   | string  | -       | 0.2.1   |
| asChild | Use child as root element | boolean | false   | 0.2.1   |

All components also support standard margin properties.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/tabs) for the full API reference and design guidelines.

----- split line -----

## table (react/table)

# `react-table`

Table is a component for displaying data in rows and columns. The component supports different sizes, variant styles, custom layouts, and cell alignment options.

## Installation

```sh
$ yarn add @sea-lion/react-table
# or
$ npm install @sea-lion/react-table
```

## Basic Usage

```jsx
import * as Table from "@sea-lion/react-table";

export default () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Occupation</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Engineer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
```

## Different Sizes

Table component supports three sizes:

```jsx
// Small size
<Table.Root size="1">
  {/* Table content */}
</Table.Root>

// Medium size (default)
<Table.Root size="2">
  {/* Table content */}
</Table.Root>

// Large size
<Table.Root size="3">
  {/* Table content */}
</Table.Root>
```

## Different Variants

Table component supports two visual variants:

```jsx
// Ghost variant (default) - no borders
<Table.Root variant="ghost">
  {/* Table content */}
</Table.Root>

// Surface variant - with borders and background
<Table.Root variant="surface">
  {/* Table content */}
</Table.Root>
```

## Table Layout

```jsx
// Auto layout (default) - column width adjusts to content
<Table.Root layout="auto">
  {/* Table content */}
</Table.Root>

// Fixed layout - equal column width or can be set with width prop
<Table.Root layout="fixed">
  {/* Table content */}
</Table.Root>
```

## Cell Alignment

```jsx
// Horizontal alignment
<Table.Cell justify="start">Left aligned (default)</Table.Cell>
<Table.Cell justify="center">Center aligned</Table.Cell>
<Table.Cell justify="end">Right aligned</Table.Cell>

// Vertical alignment
<Table.Row align="start">Top aligned</Table.Row>
<Table.Row align="center">Center aligned</Table.Row>
<Table.Row align="end">Bottom aligned</Table.Row>
<Table.Row align="baseline">Baseline aligned</Table.Row>
```

## Row and Column Headers

```jsx
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Stock</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Product A</Table.RowHeaderCell>
      <Table.Cell>$100</Table.Cell>
      <Table.Cell>50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.RowHeaderCell>Product B</Table.RowHeaderCell>
      <Table.Cell>$200</Table.Cell>
      <Table.Cell>25</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

## Props

### Root Props

| Prop    | Description    | Type                 | Default | Version |
| ------- | -------------- | -------------------- | ------- | ------- |
| size    | Table size     | '1' \| '2' \| '3'    | '2'     | 0.2.1   |
| variant | Visual variant | 'surface' \| 'ghost' | 'ghost' | 0.2.1   |
| layout  | Table layout   | 'auto' \| 'fixed'    | 'auto'  | 0.2.1   |

### Row Props

| Prop  | Description        | Type                                       | Default | Version |
| ----- | ------------------ | ------------------------------------------ | ------- | ------- |
| align | Vertical alignment | 'start' \| 'center' \| 'end' \| 'baseline' | -       | 0.2.1   |

### Cell Props

| Prop    | Description       | Type                         | Default | Version |
| ------- | ----------------- | ---------------------------- | ------- | ------- |
| justify | Content alignment | 'start' \| 'center' \| 'end' | 'start' | 0.2.1   |
| width   | Cell width        | string                       | -       | 0.2.1   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/table) for the full API reference and design guidelines.

----- split line -----

## text-area (react/text-area)

# `react-text-area`

TextArea is a multi-line text input component for users to enter longer text content. The component supports multiple sizes, visual variants, and custom resize options.

## Installation

```sh
$ yarn add @sea-lion/react-text-area
# or
$ npm install @sea-lion/react-text-area
```

## Basic Usage

```jsx
import { TextArea } from "@sea-lion/react-text-area";

export default () => {
  return (
    <>
      <TextArea placeholder="Enter description..." />
    </>
  );
};
```

## Different Sizes

TextArea component supports three sizes:

```jsx
<TextArea size="1" placeholder="Small text area" />
<TextArea size="2" placeholder="Medium text area (default)" />
<TextArea size="3" placeholder="Large text area" />
```

## Different Variants

TextArea component supports three visual variants:

```jsx
<TextArea variant="surface" placeholder="Surface variant (default)" />
<TextArea variant="classic" placeholder="Classic variant" />
<TextArea variant="soft" placeholder="Soft variant" color="blue" />
```

## Resize Options

You can control how the text area can be resized:

```jsx
<TextArea resize="none" placeholder="Cannot be resized" />
<TextArea resize="vertical" placeholder="Can be resized vertically" />
<TextArea resize="horizontal" placeholder="Can be resized horizontally" />
<TextArea resize="both" placeholder="Can be resized freely" />
```

## Colors

TextArea component supports multiple colors, especially with the soft variant:

```jsx
<TextArea variant="soft" color="blue" placeholder="Blue text area" />
<TextArea variant="soft" color="green" placeholder="Green text area" />
<TextArea variant="soft" color="red" placeholder="Red text area" />
<TextArea variant="soft" color="purple" placeholder="Purple text area" />
```

## Disabled and Read-Only States

```jsx
<TextArea disabled placeholder="Disabled state" />
<TextArea readOnly value="Read-only content" />
```

## Custom Radius

You can customize the border radius of the text area:

```jsx
<TextArea radius="none" placeholder="No radius" />
<TextArea radius="small" placeholder="Small radius" />
<TextArea radius="medium" placeholder="Medium radius" />
<TextArea radius="large" placeholder="Large radius" />
<TextArea radius="full" placeholder="Full radius" />
```

## Default Value and Controlled Component

```jsx
// Uncontrolled component (with default value)
<TextArea defaultValue="Default text content" />;

// Controlled component
const [value, setValue] = React.useState("");
<TextArea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
/>;
```

## Props

| Prop         | Description     | Type                                               | Default   | Version |
| ------------ | --------------- | -------------------------------------------------- | --------- | ------- |
| size         | TextArea size   | '1' \| '2' \| '3'                                  | '2'       | 0.2.0   |
| variant      | Visual variant  | 'classic' \| 'surface' \| 'soft'                   | 'surface' | 0.2.0   |
| resize       | Resize behavior | 'none' \| 'vertical' \| 'horizontal' \| 'both'     | -         | 0.2.0   |
| color        | TextArea color  | string                                             | -         | 0.2.0   |
| radius       | Border radius   | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0   |
| defaultValue | Default value   | string                                             | -         | 0.2.0   |
| value        | Current value   | string                                             | -         | 0.2.0   |
| disabled     | Disabled state  | boolean                                            | false     | 0.2.0   |
| readOnly     | Read-only state | boolean                                            | false     | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/text-area) for the full API reference and design guidelines.

----- split line -----

## text (react/text)

# `react-text`

Text is a component for displaying text content in different styles and sizes. The component supports multiple sizes, weights, alignment options, and colors.

## Installation

```sh
$ yarn add @sea-lion/react-text
# or
$ npm install @sea-lion/react-text
```

## Basic Usage

```jsx
import { Text } from "@sea-lion/react-text";

export default () => {
  return (
    <>
      <Text>This is default text style</Text>
      <Text size="3" weight="medium">
        This is medium size and medium weight text
      </Text>
      <Text color="blue">This is blue text</Text>
      <Text color="red" highContrast>
        This is high contrast red text
      </Text>
    </>
  );
};
```

## Different Sizes

Text component supports nine sizes:

```jsx
<Text size="1">Text size 1 (smallest)</Text>
<Text size="2">Text size 2</Text>
<Text size="3">Text size 3</Text>
<Text size="4">Text size 4</Text>
<Text size="5">Text size 5</Text>
<Text size="6">Text size 6</Text>
<Text size="7">Text size 7</Text>
<Text size="8">Text size 8</Text>
<Text size="9">Text size 9 (largest)</Text>
```

## Different Weights

Text component supports four font weights:

```jsx
<Text weight="light">Light weight</Text>
<Text weight="regular">Regular weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="bold">Bold weight</Text>
```

## Text Alignment

You can control text alignment:

```jsx
<Text textAlign="left">Left aligned text</Text>
<Text textAlign="center">Center aligned text</Text>
<Text textAlign="right">Right aligned text</Text>
```

## Text Colors

Text component supports multiple colors:

```jsx
<Text color="gray">Gray text</Text>
<Text color="blue">Blue text</Text>
<Text color="green">Green text</Text>
<Text color="red">Red text</Text>
<Text color="purple">Purple text</Text>
<Text color="orange">Orange text</Text>
<!-- More color options -->
```

## High Contrast Text

Use the `highContrast` prop to increase the contrast between text color and background:

```jsx
<Text color="gray" highContrast>High contrast gray</Text>
<Text color="blue" highContrast>High contrast blue</Text>
<Text color="green" highContrast>High contrast green</Text>
<Text color="red" highContrast>High contrast red</Text>
```

## Text Truncation

When text content is too long, you can use the `truncate` prop to truncate it:

```jsx
<Text truncate>
  This is a very long text that will be truncated with an ellipsis because the
  truncate prop is set
</Text>
```

## Different Element Types

Text component can be rendered as different HTML elements:

```jsx
<Text as="span">This is a span element (default)</Text>
<Text as="div">This is a div element</Text>
<Text as="label">This is a label element</Text>
<Text as="p">This is a paragraph (p) element</Text>
```

## Props

| Prop         | Description                  | Type                                                        | Default | Version |
| ------------ | ---------------------------- | ----------------------------------------------------------- | ------- | ------- |
| as           | Rendered element type        | 'span' \| 'div' \| 'label' \| 'p'                           | 'span'  | 0.2.0   |
| size         | Text size                    | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -       | 0.2.0   |
| weight       | Font weight                  | 'light' \| 'regular' \| 'medium' \| 'bold'                  | -       | 0.2.0   |
| textAlign    | Text alignment               | 'left' \| 'center' \| 'right'                               | -       | 0.2.0   |
| color        | Text color                   | string                                                      | -       | 0.2.0   |
| highContrast | Whether to use high contrast | boolean                                                     | false   | 0.2.0   |
| truncate     | Whether to truncate text     | boolean                                                     | false   | 0.2.0   |
| textWrap     | Text wrapping mode           | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | -       | 0.2.0   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/text) for the full API reference and design guidelines.

----- split line -----

## theme (react/theme)

# `react-theme`

Theme is a provider that supplies a unified design system to the app, including colors, typography, spacing, and other design tokens. Wrap your application or a section of it in `<Theme>` to apply design tokens consistently, with support for light/dark mode and nested theme overrides.

## Installation

```sh
pnpm add @sea-lion/react-theme
# or
npm install @sea-lion/react-theme
yarn add @sea-lion/react-theme
```

## Usage

Import the component in your code:

```tsx
import { Theme } from "@sea-lion/react-theme";
```

### Basic Usage

Wrap your entire app or a page section in `<Theme>` to apply design tokens globally:

```jsx
<Theme>
  <App />
</Theme>
```

### Light / Dark Appearance

Switch between light and dark themes using the `appearance` prop:

```jsx
{
  /* Light theme */
}
<Theme appearance="light">
  <App />
</Theme>;

{
  /* Dark theme */
}
<Theme appearance="dark">
  <App />
</Theme>;
```

### Accent Color

Set a global accent color with `accentColor`, affecting buttons, links, selected states, and more:

```jsx
<Theme accentColor="blue">
  <App />
</Theme>

<Theme accentColor="purple">
  <App />
</Theme>

<Theme accentColor="green">
  <App />
</Theme>
```

Available accent colors include: `blue`, `red`, `green`, `purple`, `orange`, `gray`, and more.

### Gray Color

Adjust the global gray palette with `grayColor`, affecting borders, backgrounds, and secondary text:

```jsx
<Theme grayColor="gray">
  <App />
</Theme>

<Theme grayColor="slate">
  <App />
</Theme>

<Theme grayColor="mauve">
  <App />
</Theme>
```

### Radius

Set the global border-radius style with `radius`:

```jsx
<Theme radius="none">
  <App />
</Theme>

<Theme radius="small">
  <App />
</Theme>

<Theme radius="medium">
  <App />
</Theme>

<Theme radius="large">
  <App />
</Theme>

<Theme radius="full">
  <App />
</Theme>
```

### Scaling

Uniformly scale all component sizes and spacing with `scaling`:

```jsx
<Theme scaling="90%">
  <App />
</Theme>

<Theme scaling="100%">
  <App />
</Theme>

<Theme scaling="110%">
  <App />
</Theme>
```

### Nested Themes

`Theme` can be nested — a child `Theme` overrides the parent's props for its subtree:

```jsx
<Theme appearance="light" accentColor="blue">
  {/* Uses global blue accent */}
  <Button>Blue Button</Button>

  <Theme accentColor="red">
    {/* Only the accent color is overridden to red */}
    <Button>Red Button</Button>
  </Theme>

  <Theme accentColor="green">
    {/* Accent color overridden to green */}
    <Button>Green Button</Button>
  </Theme>
</Theme>
```

### Combined Configuration

Set multiple props together to create a complete visual style:

```jsx
<Theme
  appearance="dark"
  accentColor="purple"
  grayColor="mauve"
  radius="large"
  scaling="100%"
>
  <App />
</Theme>
```

### Practical Example: App-level Theme

```jsx
import { Theme } from "@sea-lion/react-theme";

function App() {
  return (
    <Theme appearance="light" accentColor="blue" radius="medium">
      <main>
        {/* The entire app automatically uses the unified design tokens */}
        <Header />
        <Content />
        <Footer />
      </main>
    </Theme>
  );
}
```

## When to Use

- When applying a consistent design system across the app
- When implementing theme switching (e.g. light/dark mode)
- When customizing the app's visual style
- When applying a different theme to a specific section (via nested Theme)

## Props / API

### Theme

| Prop          | Description                   | Type                                                                  | Default    |
| ------------- | ----------------------------- | --------------------------------------------------------------------- | ---------- |
| `appearance`  | Theme appearance (light/dark) | `"light" \| "dark"`                                                   | `"light"`  |
| `accentColor` | Global accent color           | `"blue" \| "red" \| "green" \| "purple" \| "orange" \| "gray" \| ...` | `"blue"`   |
| `grayColor`   | Global gray palette           | `"gray" \| "slate" \| "mauve"`                                        | `"gray"`   |
| `radius`      | Global border-radius style    | `"none" \| "small" \| "medium" \| "large" \| "full"`                  | `"medium"` |
| `scaling`     | Global scale factor           | `"90%" \| "95%" \| "100%" \| "105%" \| "110%"`                        | `"100%"`   |
| `children`    | Child content                 | `React.ReactNode`                                                     | —          |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/theme/overview) for the full API reference and design guidelines.

----- split line -----

## tooltip (react/tooltip)

# `react-tooltip`

Tooltip is a component that displays informative text when a user hovers over an element. The component supports custom content, width, and positioning options.

## Installation

```sh
$ yarn add @sea-lion/react-tooltip
# or
$ npm install @sea-lion/react-tooltip
```

## Basic Usage

```jsx
import { Tooltip } from "@sea-lion/react-tooltip";
import { Button } from "@sea-lion/react-button";

export default () => {
  return (
    <Tooltip content="This is a tooltip text">
      <Button>Hover to see tooltip</Button>
    </Tooltip>
  );
};
```

## Different Positions

Tooltip can be displayed in different positions relative to the target element:

```jsx
<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>
```

## Custom Delay

You can set a delay before showing the tooltip:

```jsx
<Tooltip content="Shows immediately" delayDuration={0}>
  <Button>No delay</Button>
</Tooltip>

<Tooltip content="Shows after a short delay" delayDuration={300}>
  <Button>Short delay</Button>
</Tooltip>

<Tooltip content="Shows after a longer delay" delayDuration={800}>
  <Button>Long delay</Button>
</Tooltip>
```

## Custom Width

You can set the tooltip width using width, minWidth, and maxWidth props:

```jsx
<Tooltip
  content="Tooltip with fixed width"
  width="200px"
>
  <Button>Fixed width</Button>
</Tooltip>

<Tooltip
  content="This is a longer tooltip text with a maximum width, the content will wrap to multiple lines"
  maxWidth="250px"
>
  <Button>Max width</Button>
</Tooltip>
```

## Hoverable Content

By default, tooltips close when the mouse leaves the trigger element. You can enable hoverable content to allow users to move their mouse onto the tooltip without it closing:

```jsx
<Tooltip content="This tooltip can be hovered" disableHoverableContent={false}>
  <Button>Hoverable tooltip</Button>
</Tooltip>
```

## Controlled State

You can control the open state of the tooltip using the open and onOpenChange props:

```jsx
const [open, setOpen] = React.useState(false);

<Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
  <Button onClick={() => setOpen(!open)}>
    {open ? "Close tooltip" : "Open tooltip"}
  </Button>
</Tooltip>;
```

## Props

| Prop                    | Description                      | Type                                   | Default  | Version |
| ----------------------- | -------------------------------- | -------------------------------------- | -------- | ------- |
| content                 | Tooltip content                  | ReactNode                              | -        | 0.2.3   |
| width                   | Tooltip width                    | string                                 | -        | 0.2.3   |
| minWidth                | Minimum tooltip width            | string                                 | -        | 0.2.3   |
| maxWidth                | Maximum tooltip width            | string                                 | '360px'  | 0.2.3   |
| open                    | Whether tooltip is shown         | boolean                                | -        | 0.2.3   |
| defaultOpen             | Default open state               | boolean                                | false    | 0.2.3   |
| onOpenChange            | Callback when open state changes | (open: boolean) => void                | -        | 0.2.3   |
| delayDuration           | Show delay in milliseconds       | number                                 | 700      | 0.2.3   |
| disableHoverableContent | Disable hoverable content        | boolean                                | true     | 0.2.3   |
| side                    | Preferred tooltip position       | 'top' \| 'right' \| 'bottom' \| 'left' | 'top'    | 0.2.3   |
| sideOffset              | Offset from trigger element      | number                                 | 4        | 0.2.3   |
| align                   | Alignment with trigger element   | 'start' \| 'center' \| 'end'           | 'center' | 0.2.3   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/tooltip) for the full API reference and design guidelines.
