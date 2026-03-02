## alert-dialog (react/alert-dialog)

# `react-alert-dialog`

AlertDialog 是确认对话框组件，用于需要用户确认或取消的操作场景。与普通 Dialog 不同，AlertDialog 强制用户在关闭前必须做出明确响应（确认或取消），不支持点击遮罩层关闭。

## 安装

```sh
pnpm add @sea-lion/react-alert-dialog
# 或者
npm install @sea-lion/react-alert-dialog
yarn add @sea-lion/react-alert-dialog
```

## 使用

在代码中引入组件：

```tsx
import * as AlertDialog from '@sea-lion/react-alert-dialog';
```

### 基本用法

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <button>打开确认框</button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>确认操作</AlertDialog.Title>
    <AlertDialog.Description>
      确定要执行此操作吗？此操作不可撤销。
    </AlertDialog.Description>
    <AlertDialog.Action>确认</AlertDialog.Action>
    <AlertDialog.Cancel>取消</AlertDialog.Cancel>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 配合 Button 使用

结合 `Button` 组件以及 Flex 布局排列操作按钮：

```jsx
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>打开对话框</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="600px">
    <AlertDialog.Title>确认操作</AlertDialog.Title>
    <AlertDialog.Description>
      这是一个警告对话框示例。请确认后操作。
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">取消</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>确认</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 尺寸

AlertDialog.Content 支持四种尺寸，通过 `size` 属性设置：

```jsx
{/* 尺寸 1（小） */}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 1</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="1">
    <AlertDialog.Title>小尺寸对话框</AlertDialog.Title>
    <AlertDialog.Description>这是尺寸为 1 的对话框。</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel><Button variant="soft" color="gray">取消</Button></AlertDialog.Cancel>
      <AlertDialog.Action><Button>确认</Button></AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>

{/* 尺寸 4（大） */}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 4</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="4">
    <AlertDialog.Title>大尺寸对话框</AlertDialog.Title>
    <AlertDialog.Description>这是尺寸为 4 的对话框。</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel><Button variant="soft" color="gray">取消</Button></AlertDialog.Cancel>
      <AlertDialog.Action><Button>确认</Button></AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 对齐方式

通过 `align` 属性控制对话框在视口中的垂直位置：

```jsx
{/* 居中对齐（默认） */}
<AlertDialog.Content align="center">...</AlertDialog.Content>

{/* 顶部对齐 */}
<AlertDialog.Content align="start">...</AlertDialog.Content>
```

### 自定义宽度

通过 `width`、`maxWidth`、`minWidth` 等属性控制对话框尺寸：

```jsx
<AlertDialog.Content maxWidth="500px">
  ...
</AlertDialog.Content>

<AlertDialog.Content width="400px" maxWidth="90vw">
  ...
</AlertDialog.Content>
```

### 受控状态

通过 `open` 和 `onOpenChange` 从外部控制对话框的打开状态：

```jsx
const [open, setOpen] = useState(false);

<AlertDialog.Root open={open} onOpenChange={setOpen}>
  <AlertDialog.Trigger>
    <Button onClick={() => setOpen(true)}>打开</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>受控对话框</AlertDialog.Title>
    <AlertDialog.Description>...</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">取消</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>确认</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 使用场景示例

**删除确认：**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">删除数据</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>确认删除？</AlertDialog.Title>
    <AlertDialog.Description>
      此操作将永久删除所选数据，且无法恢复。
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">取消</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="red">确认删除</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

**提交确认：**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="green">提交表单</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>确认提交？</AlertDialog.Title>
    <AlertDialog.Description>
      请确认所有信息填写无误后再提交。
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">返回修改</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="green">确认提交</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

## 何时使用

- 需要用户确认或取消的重要操作
- 删除、提交等不可逆操作前的二次确认
- 需要强制用户做出明确响应、不允许点击遮罩层关闭的场景

## Props / API 属性

### AlertDialog.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `open` | 受控的打开状态 | `boolean` | — |
| `defaultOpen` | 非受控的默认打开状态 | `boolean` | `false` |
| `onOpenChange` | 打开状态变化时的回调 | `(open: boolean) => void` | — |

### AlertDialog.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 对话框尺寸 | `"1" \| "2" \| "3" \| "4"` | `"3"` |
| `align` | 对话框垂直对齐方式 | `"start" \| "center"` | `"center"` |
| `width` | 对话框固定宽度 | `string` | — |
| `minWidth` | 对话框最小宽度 | `string` | — |
| `maxWidth` | 对话框最大宽度 | `string` | — |
| `height` | 对话框高度 | `string` | — |
| `minHeight` | 对话框最小高度 | `string` | — |
| `maxHeight` | 对话框最大高度 | `string` | — |
| `asChild` | 将子元素合并为根元素渲染 | `boolean` | `false` |

### AlertDialog.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |

### AlertDialog.Title

对话框标题，带有正确的 `aria-labelledby` 语义。接受标准 HTML 属性。

### AlertDialog.Description

对话框描述，带有正确的 `aria-describedby` 语义。接受标准 HTML 属性。

### AlertDialog.Action

确认操作按钮的容器，点击后会关闭对话框。

### AlertDialog.Cancel

取消操作按钮的容器，点击后会关闭对话框。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/alert-dialog) 获取完整 API 与设计规范。

----- split line -----

## aspect-ratio (react/aspect-ratio)

# `react-aspect-ratio`

AspectRatio 是宽高比容器组件，用于保持内容的宽高比显示。无论容器宽度如何变化，内容始终维持指定的宽高比，适用于图片、视频等媒体内容的等比展示。

## 安装

```sh
pnpm add @sea-lion/react-aspect-ratio
# 或者
npm install @sea-lion/react-aspect-ratio
yarn add @sea-lion/react-aspect-ratio
```

## 使用

在代码中引入组件：

```tsx
import * as AspectRatio from '@sea-lion/react-aspect-ratio';
```

### 基本用法

通过 `ratio` 属性设置宽高比，值为数字（宽 / 高）：

```jsx
<div style={{ width: '500px' }}>
  <AspectRatio.Root ratio={16 / 9}>
    <img
      src="https://example.com/image.jpg"
      alt="示例图片"
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  </AspectRatio.Root>
</div>
```

### 不同宽高比

常见宽高比示例：

```jsx
<div style={{ display: 'flex', gap: '20px' }}>
  {[
    { ratio: 16 / 9, name: '16:9 横屏' },
    { ratio: 4 / 3, name: '4:3 标准' },
    { ratio: 1, name: '1:1 正方形' },
    { ratio: 9 / 16, name: '9:16 竖屏' },
  ].map(({ ratio, name }) => (
    <div key={name} style={{ width: '200px' }}>
      <AspectRatio.Root ratio={ratio}>
        <img
          src="https://example.com/image.jpg"
          alt="示例图片"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </AspectRatio.Root>
      <Text size="2" style={{ marginTop: '8px' }}>{name}</Text>
    </div>
  ))}
</div>
```

### 嵌入视频

AspectRatio 非常适合用来嵌入响应式视频：

```jsx
<div style={{ width: '500px' }}>
  <AspectRatio.Root ratio={16 / 9}>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/example"
      title="视频播放器"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio.Root>
</div>
```

### 带背景色的容器

AspectRatio 不仅限于媒体内容，也可以用于任意需要保持比例的布局区域：

```jsx
<div style={{ width: '300px' }}>
  <AspectRatio.Root ratio={1}>
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--accent-9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Text size="5">1:1</Text>
    </div>
  </AspectRatio.Root>
</div>
```

### 响应式媒体画廊

配合 CSS 网格或 Flex 布局，可以构建响应式媒体画廊：

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
  {images.map((src, i) => (
    <AspectRatio.Root key={i} ratio={4 / 3}>
      <img
        src={src}
        alt={`图片 ${i + 1}`}
        style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-2)' }}
      />
    </AspectRatio.Root>
  ))}
</div>
```

## 何时使用

- 图片、视频等媒体内容的响应式展示
- 卡片封面图需要保持固定比例
- 构建等比例的占位区域（骨架屏）
- 嵌入第三方 iframe 内容（视频播放器、地图等）

## Props / API

### AspectRatio.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `ratio` | 宽高比，例如 `16/9`、`4/3`、`1` | `number` | `1` |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 容器内容（通常为图片或视频） | `React.ReactNode` | - |

> 子元素通常需要设置 `width: 100%; height: 100%; object-fit: cover;` 以正确填充容器。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/aspect-ratio) 获取完整 API 与设计规范。

----- split line -----

## avatar (react/avatar)

# `react-avatar`

Avatar 是头像组件，用于展示用户或实体头像，支持图片展示和文字 fallback，提供多种尺寸、变体、颜色和圆角选项。

## 安装

```sh
pnpm add @sea-lion/react-avatar
# 或者
npm install @sea-lion/react-avatar
yarn add @sea-lion/react-avatar
```

## 使用

在代码中引入组件：

```tsx
import { Avatar } from '@sea-lion/react-avatar';
```

### 基本用法

```jsx
{/* 图片头像 */}
<Avatar
  src="https://example.com/avatar.jpg"
  alt="用户头像"
  fallback="AB"
/>

{/* 文字 Fallback 头像 */}
<Avatar fallback="AB" />
```

### 不同尺寸

支持尺寸 `"1"` 至 `"9"`：

```jsx
<Flex align="center" gap="4">
  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
    <Avatar
      key={size}
      size={size}
      src="https://example.com/avatar.jpg"
      fallback="AB"
      alt="用户头像"
    />
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置头像的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="4">
    <Text size="2" style={{ width: '80px' }}>solid:</Text>
    <Avatar variant="solid" fallback="AB" alt="用户头像" />
    <Avatar variant="solid" src="https://example.com/avatar.jpg" fallback="AB" alt="用户头像" />
  </Flex>

  <Flex align="center" gap="4">
    <Text size="2" style={{ width: '80px' }}>soft:</Text>
    <Avatar variant="soft" fallback="AB" alt="用户头像" />
    <Avatar variant="soft" src="https://example.com/avatar.jpg" fallback="AB" alt="用户头像" />
  </Flex>
</Flex>
```

### 不同颜色

通过 `color` 属性设置 fallback 头像的颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: '80px' }}>{color}:</Text>
      <Avatar color={color} variant="solid" fallback="AB" alt="用户头像" />
      <Avatar color={color} variant="soft" fallback="AB" alt="用户头像" />
    </Flex>
  ))}
</Flex>
```

### 圆角样式

通过 `radius` 属性控制头像的圆角：

```jsx
<Flex gap="4">
  <Avatar radius="none" fallback="AB" alt="用户头像" />
  <Avatar radius="small" fallback="AB" alt="用户头像" />
  <Avatar radius="medium" fallback="AB" alt="用户头像" />
  <Avatar radius="large" fallback="AB" alt="用户头像" />
  <Avatar radius="full" fallback="AB" alt="用户头像" />
</Flex>
```

### Fallback 展示

当图片加载失败时，自动显示 fallback 内容（文字或图标）：

```jsx
{/* 图片加载失败时显示文字 */}
<Avatar
  src="https://broken-url.jpg"
  fallback="AB"
  alt="用户头像"
/>

{/* 不传 src，直接展示 fallback */}
<Avatar size="5" fallback="用户" alt="用户头像" />
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex gap="4">
  <Avatar highContrast variant="solid" fallback="AB" alt="用户头像" />
  <Avatar highContrast variant="soft" fallback="AB" alt="用户头像" />
</Flex>
```

## Props / API

### Avatar

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `src` | 头像图片地址 | `string` | - |
| `alt` | 图片替代文本（无障碍） | `string` | - |
| `fallback` | 图片加载失败时的回退内容 | `React.ReactNode` | - |
| `size` | 头像尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"` |
| `variant` | 视觉变体 | `"solid" \| "soft"` | `"soft"` |
| `radius` | 圆角大小 | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"full"` |
| `color` | 颜色主题（影响 fallback 背景色） | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"gray"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/avatar) 获取完整 API 与设计规范。

----- split line -----

## badge (react/badge)

# `react-badge`

Badge 是徽章组件，用于展示标签、计数或状态等短文本。支持多种尺寸、变体、颜色和圆角选项，适用于通知计数、功能标签、版本信息、在线状态等场景。

## 安装

```sh
pnpm add @sea-lion/react-badge
# 或者
npm install @sea-lion/react-badge
yarn add @sea-lion/react-badge
```

## 使用

在代码中引入组件：

```tsx
import { Badge } from '@sea-lion/react-badge';
```

### 基本用法

```jsx
<Badge>新功能</Badge>
<Badge variant="solid" color="red">重要</Badge>
<Badge size="2" color="blue">Beta</Badge>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`：

```jsx
<Flex align="center" gap="4">
  <Badge size="1">Size 1</Badge>
  <Badge size="2">Size 2</Badge>
  <Badge size="3">Size 3</Badge>
</Flex>
```

### 不同变体

通过 `variant` 属性设置徽章的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Badge variant="solid">solid — 实心填充</Badge>
  <Badge variant="soft">soft — 柔和背景</Badge>
  <Badge variant="surface">surface — 半透明面型</Badge>
  <Badge variant="outline">outline — 描边样式</Badge>
</Flex>
```

### 不同颜色

通过 `color` 属性设置徽章颜色，各变体均支持多种颜色：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="4">
      <Text size="2" style={{ width: '80px' }}>{color}:</Text>
      <Badge color={color} variant="solid">{color}</Badge>
      <Badge color={color} variant="soft">{color}</Badge>
      <Badge color={color} variant="surface">{color}</Badge>
      <Badge color={color} variant="outline">{color}</Badge>
    </Flex>
  ))}
</Flex>
```

### 圆角样式

通过 `radius` 属性控制徽章的圆角：

```jsx
<Flex gap="4">
  <Badge radius="none">none</Badge>
  <Badge radius="small">small</Badge>
  <Badge radius="medium">medium</Badge>
  <Badge radius="large">large</Badge>
  <Badge radius="full">full</Badge>
</Flex>
```

### 常见用例

徽章常用于通知计数、功能标签和状态标识：

```jsx
<Flex direction="column" gap="4">
  {/* 消息通知计数 */}
  <Flex align="center" gap="2">
    <Text>消息通知</Text>
    <Badge color="red" size="1">99+</Badge>
  </Flex>

  {/* 功能标签 */}
  <Flex align="center" gap="2">
    <Text>功能标签</Text>
    <Badge color="blue" variant="soft">Beta</Badge>
  </Flex>

  {/* 在线状态 */}
  <Flex align="center" gap="2">
    <Text>状态标识</Text>
    <Badge color="green" variant="surface">在线</Badge>
    <Badge color="gray" variant="surface">离线</Badge>
  </Flex>

  {/* 版本信息 */}
  <Flex align="center" gap="2">
    <Text>版本信息</Text>
    <Badge color="gold" variant="outline">v2.0.0</Badge>
  </Flex>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex gap="4">
  <Badge highContrast variant="solid">高对比实心</Badge>
  <Badge highContrast variant="soft">高对比柔和</Badge>
  <Badge highContrast variant="surface">高对比面型</Badge>
  <Badge highContrast variant="outline">高对比描边</Badge>
</Flex>
```

## Props / API

### Badge

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 徽章尺寸 | `"1" \| "2" \| "3"` | `"1"` |
| `variant` | 视觉变体 | `"solid" \| "soft" \| "surface" \| "outline"` | `"soft"` |
| `radius` | 圆角大小 | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"full"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | - |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `children` | 徽章内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/badge) 获取完整 API 与设计规范。

----- split line -----

## blockquote (react/blockquote)

# `react-blockquote`

Blockquote 是引用块组件，用于展示引用内容，支持多种尺寸、字重、颜色与文本换行控制。

## 安装

```sh
pnpm add @sea-lion/react-blockquote
# 或者
npm install @sea-lion/react-blockquote
yarn add @sea-lion/react-blockquote
```

## 使用

在代码中引入组件：

```tsx
import { Blockquote } from '@sea-lion/react-blockquote';
```

### 基本用法

```jsx
<Blockquote>道可道，非常道。名可名，非常名。</Blockquote>
<Blockquote size="3" color="blue">带尺寸和颜色的引用</Blockquote>
```

### 不同尺寸

支持尺寸 `"1"` 至 `"9"`，尺寸越大文字越大：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((size) => (
    <Blockquote key={size} size={size}>
      道可道，非常道。名可名，非常名。
    </Blockquote>
  ))}
</Flex>
```

### 不同字重

通过 `weight` 属性设置字体粗细：

```jsx
<Flex direction="column" gap="4">
  <Blockquote weight="light">light — 道可道，非常道。</Blockquote>
  <Blockquote weight="regular">regular — 道可道，非常道。</Blockquote>
  <Blockquote weight="medium">medium — 道可道，非常道。</Blockquote>
  <Blockquote weight="bold">bold — 道可道，非常道。</Blockquote>
</Flex>
```

### 不同颜色

通过 `color` 属性设置引用块的颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Blockquote key={color} color={color}>
      道可道，非常道。名可名，非常名。
    </Blockquote>
  ))}
</Flex>
```

### 文本换行控制

通过 `truncate` 和 `wrap` 属性控制文本换行行为：

```jsx
<div style={{ width: '400px' }}>
  {/* 默认换行 */}
  <Blockquote>
    人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。
  </Blockquote>

  {/* 单行省略 */}
  <Blockquote truncate>
    人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。
  </Blockquote>

  {/* 禁止换行 */}
  <Blockquote wrap="nowrap">
    人法地，地法天，天法道，道法自然。上善若水，水善利万物而不争。
  </Blockquote>
</div>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Blockquote key={color} color={color} highContrast>
      道可道，非常道。名可名，非常名。
    </Blockquote>
  ))}
</Flex>
```

## Props / API

### Blockquote

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 文字尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"3"` |
| `weight` | 字体粗细 | `"light" \| "regular" \| "medium" \| "bold"` | `"regular"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"gray"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `truncate` | 是否单行省略 | `boolean` | `false` |
| `wrap` | 文本换行方式 | `"wrap" \| "nowrap" \| "balance" \| "pretty"` | - |
| `children` | 引用内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/blockquote) 获取完整 API 与设计规范。

----- split line -----

## box (react/box)

# `react-box`

Box 是基础的布局容器组件，支持 div/span 渲染及 asChild 等能力。它是布局系统的基础构建块，提供灵活的显示方式和响应式支持。

## 安装

```sh
pnpm add @sea-lion/react-box
# 或者
npm install @sea-lion/react-box
yarn add @sea-lion/react-box
```

## 使用

在代码中引入组件：

```tsx
import { Box } from '@sea-lion/react-box';
```

### 基本用法

```jsx
<Box>块级容器</Box>
<Box as="span">行内容器</Box>
<Box p="4" m="2" style={{ background: '#f0f0f0' }}>带内边距和样式</Box>
```

### 不同显示方式

通过 `display` 属性控制 Box 的显示方式：

```jsx
<Flex direction="column" gap="4">
  <Box display="block" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    block 块级盒子
  </Box>
  <Box display="inline-block" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    inline-block 行内块
  </Box>
  <Box display="inline" style={{ padding: '10px', border: '1px solid var(--gray-a6)' }}>
    inline 行内盒子
  </Box>
</Flex>
```

### 不同 HTML 元素

通过 `as` 属性指定渲染的 HTML 元素：

```jsx
<Box as="div" style={{ padding: '20px', border: '1px solid var(--gray-a6)' }}>
  这是一个 div Box
</Box>
<Text>
  这是一段文字，包含一个
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
  元素
</Text>
```

### 嵌套布局

Box 可以嵌套使用来构建复杂布局：

```jsx
<Box
  style={{
    padding: '20px',
    border: '1px solid var(--gray-a6)',
    borderRadius: 'var(--radius-3)',
  }}
>
  <Box
    style={{
      padding: '16px',
      backgroundColor: 'var(--accent-a3)',
      borderRadius: 'var(--radius-2)',
      marginBottom: '16px',
    }}
  >
    <Text size="5">标题区域</Text>
  </Box>
  <Box
    style={{
      padding: '16px',
      backgroundColor: 'var(--gray-a3)',
      borderRadius: 'var(--radius-2)',
    }}
  >
    <Text>内容区域</Text>
  </Box>
</Box>
```

### 响应式显示

`display` 属性支持响应式对象，可以在不同断点下设置不同值：

```jsx
<Box
  display={{ initial: 'block', sm: 'inline-block', lg: 'inline' }}
  style={{
    padding: '20px',
    border: '1px solid var(--gray-a6)',
    borderRadius: 'var(--radius-3)',
  }}
>
  <Text>
    这个 Box 会根据屏幕尺寸改变显示方式：
    小屏幕时为 block，中等屏幕时为 inline-block，大屏幕时为 inline
  </Text>
</Box>
```

### asChild 样式传递

通过 `asChild` 属性，将 Box 的样式传递给子组件，使子组件成为实际渲染的元素：

```jsx
<Box
  asChild
  style={{
    padding: '16px',
    backgroundColor: 'var(--accent-a3)',
    border: 'none',
    borderRadius: 'var(--radius-2)',
    cursor: 'pointer',
  }}
>
  <button onClick={() => alert('按钮被点击')}>
    可点击的按钮
  </button>
</Box>
```

## Props / API

### Box

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `as` | 渲染的 HTML 元素 | `"div" \| "span"` | `"div"` |
| `asChild` | 是否将样式传递给子组件 | `boolean` | `false` |
| `display` | 显示方式，支持响应式对象 | `"none" \| "inline" \| "inline-block" \| "block"` | `"block"` |
| `p` | 内边距（Radix 间距标记） | `string` | - |
| `m` | 外边距（Radix 间距标记） | `string` | - |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 子节点 | `React.ReactNode` | - |

> Box 还支持所有标准 HTML `div` / `span` 属性。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/box) 获取完整 API 与设计规范。

----- split line -----

## button (react/button)

# `react-button`

Button 是按钮组件，提供多种尺寸、变体和颜色选项，支持 loading 状态、禁用状态、块状按钮及 asChild 等能力。

## 安装

```sh
pnpm add @sea-lion/react-button
# 或者
npm install @sea-lion/react-button
yarn add @sea-lion/react-button
```

## 使用

在代码中引入组件：

```tsx
import { Button } from '@sea-lion/react-button';
```

### 基本用法

```jsx
<Button>默认按钮</Button>
<Button variant="solid" color="blue">主要按钮</Button>
<Button variant="outline">线框按钮</Button>
<Button variant="ghost">链接按钮</Button>
```

### 不同变体

Button 支持六种视觉变体：

```jsx
<Flex gap="4" wrap="wrap">
  <Button variant="classic">classic 按钮</Button>
  <Button variant="solid">solid 按钮</Button>
  <Button variant="soft">soft 按钮</Button>
  <Button variant="surface">surface 按钮</Button>
  <Button variant="outline">outline 按钮</Button>
  <Button variant="ghost">ghost 按钮</Button>
</Flex>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`、`"4"`：

```jsx
<Flex gap="4" align="center">
  <Button size="1">size 1</Button>
  <Button size="2">size 2</Button>
  <Button size="3">size 3</Button>
  <Button size="4">size 4</Button>
</Flex>
```

### 不同颜色

通过 `color` 属性设置按钮颜色主题：

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

### 不同圆角

通过 `radius` 属性控制按钮的圆角样式：

```jsx
<Flex gap="4">
  <Button radius="none">none</Button>
  <Button radius="small">small</Button>
  <Button radius="medium">medium</Button>
  <Button radius="large">large</Button>
  <Button radius="full">full</Button>
</Flex>
```

### 禁用状态

```jsx
<Button disabled>禁用按钮</Button>
<Button variant="outline" disabled>禁用线框按钮</Button>
```

### 加载状态

通过 `loading` 属性展示加载中状态：

```jsx
<Flex gap="4">
  <Button variant="solid" loading>加载中...</Button>
  <Button variant="outline" loading>加载中...</Button>
  <Button variant="ghost" loading>加载中...</Button>
</Flex>
```

### 块状按钮

通过 `block` 属性使按钮撑满父容器宽度：

```jsx
<Button variant="solid" block>全宽按钮</Button>
```

### 高对比度

```jsx
<Flex gap="4">
  <Button highContrast>高对比度</Button>
  <Button highContrast variant="outline">高对比度 outline</Button>
</Flex>
```

### asChild — 渲染为其他元素

通过 `asChild` 属性，可以将 Button 的样式应用到任意子元素（如 `<a>` 链接）：

```jsx
<Button asChild>
  <a href="https://example.com">链接按钮</a>
</Button>
```

### 嵌套主题

Button 会继承最近的 Theme 组件的颜色主题：

```jsx
<Theme accentColor="blue">
  <Flex gap="4">
    <Button>继承蓝色主题</Button>
  </Flex>

  <Theme accentColor="yellow">
    <Flex gap="4">
      <Button>继承黄色主题</Button>
    </Flex>
  </Theme>
</Theme>
```

## Props / API

### Button

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 按钮尺寸 | `"1" \| "2" \| "3" \| "4"` | `"2"` |
| `variant` | 视觉变体 | `"classic" \| "solid" \| "soft" \| "surface" \| "outline" \| "ghost"` | `"solid"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "blue" \| "red" \| "green" \| ...` | - |
| `radius` | 圆角大小 | `"none" \| "small" \| "medium" \| "large" \| "full"` | - |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `loading` | 是否显示加载状态 | `boolean` | `false` |
| `block` | 是否撑满父容器宽度 | `boolean` | `false` |
| `asChild` | 将样式传递给子组件 | `boolean` | `false` |
| `onClick` | 点击事件回调 | `React.MouseEventHandler` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/button) 获取完整 API 与设计规范。

----- split line -----

## callout (react/callout)

# `react-callout`

Callout 是一个用于展示重要信息、提示、警告等内容的组件。包含图标和文本，支持不同的视觉样式、尺寸和颜色主题。

主要特点：

- 支持三种尺寸：1、2、3
- 提供三种视觉变体：soft、surface、outline
- 可自定义颜色主题，支持高对比度模式
- 包含 Icon 和 Text 两个子组件

## 安装

```sh
pnpm add @sea-lion/react-callout
# 或者
npm install @sea-lion/react-callout
yarn add @sea-lion/react-callout
```

## 使用

在代码中引入组件：

```tsx
import * as Callout from '@sea-lion/react-callout';
```

### 基本用法

Callout 由 `Root`、`Icon` 和 `Text` 三个子组件组成：

```jsx
import { InfoCircledIcon } from '@radix-ui/react-icons';

<Callout.Root>
  <Callout.Icon>
    <InfoCircledIcon width="20" height="20" />
  </Callout.Icon>
  <Callout.Text>
    这是一个基础的 Callout 提示框，用于展示重要信息。
  </Callout.Text>
</Callout.Root>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3'].map((size) => (
    <Callout.Root key={size} size={size}>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>
        尺寸 {size} 的 Callout 提示框
      </Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置 Callout 的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Callout.Root variant="soft">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>soft 变体 — 柔和背景</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="surface">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>surface 变体 — 表面样式</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="outline">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>outline 变体 — 描边样式</Callout.Text>
  </Callout.Root>
</Flex>
```

### 不同颜色与使用场景

结合颜色与图标，区分不同的信息类型：

```jsx
import { InfoCircledIcon, CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

<Flex direction="column" gap="4">
  {/* 信息提示 */}
  <Callout.Root color="blue" variant="soft">
    <Callout.Icon>
      <InfoCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      系统将于今晚 24:00 进行例行维护，请提前保存您的工作。
    </Callout.Text>
  </Callout.Root>

  {/* 成功提示 */}
  <Callout.Root color="green" variant="surface">
    <Callout.Icon>
      <CheckCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      您的更改已成功保存，所有设置已生效。
    </Callout.Text>
  </Callout.Root>

  {/* 警告提示 */}
  <Callout.Root color="yellow" variant="outline">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      您的存储空间即将用完，请及时清理不必要的文件。
    </Callout.Text>
  </Callout.Root>

  {/* 错误提示 */}
  <Callout.Root color="red" variant="soft">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      操作失败，请稍后再试或联系管理员。
    </Callout.Text>
  </Callout.Root>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex direction="column" gap="4">
  {['soft', 'surface', 'outline'].map((variant) => (
    <Callout.Root key={variant} variant={variant} highContrast>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>
        高对比度的 {variant} Callout 提示框
      </Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

## Props / API

### Callout.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 提示框尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | 视觉变体 | `"soft" \| "surface" \| "outline"` | `"soft"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| "yellow" \| ...` | `"blue"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `role` | ARIA 角色 | `string` | `"group"` |
| `children` | 子节点（Icon + Text） | `React.ReactNode` | - |

### Callout.Icon

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `children` | 图标内容 | `React.ReactNode` | - |

### Callout.Text

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `children` | 提示文本内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/callout) 获取完整 API 与设计规范。

----- split line -----

## card (react/card)

# `react-card`

Card 是一个多功能的容器组件，用于组织和展示内容。支持不同的视觉样式和尺寸，可以用作容器、按钮或链接。

## 安装

```sh
pnpm add @sea-lion/react-card
# 或者
npm install @sea-lion/react-card
yarn add @sea-lion/react-card
```

## 使用

在代码中引入组件：

```tsx
import { Card } from '@sea-lion/react-card';
```

### 基本用法

```jsx
<Card>
  <Text as="div" size="3" weight="bold" mb="2">卡片标题</Text>
  <Text as="div" color="gray">这是一个基础的卡片示例。</Text>
</Card>
```

### 不同尺寸

支持尺寸 `"1"` 至 `"5"`，数字越大内边距越大：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3', '4', '5'].map((size) => (
    <Card key={size} size={size}>
      <Text as="div" size="3" weight="bold" mb="2">Size {size}</Text>
      <Text as="div" color="gray">尺寸 {size} 的卡片示例</Text>
    </Card>
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置卡片的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Card variant="surface">
    <Text as="div" size="3" weight="bold" mb="2">surface 变体</Text>
    <Text as="div" color="gray">带有半透明背景的表面样式</Text>
  </Card>

  <Card variant="classic">
    <Text as="div" size="3" weight="bold" mb="2">classic 变体</Text>
    <Text as="div" color="gray">带有阴影的经典样式</Text>
  </Card>

  <Card variant="ghost">
    <Text as="div" size="3" weight="bold" mb="2">ghost 变体</Text>
    <Text as="div" color="gray">无背景的幽灵样式</Text>
  </Card>
</Flex>
```

### 可交互卡片

通过 `asChild` 将卡片渲染为按钮或链接，使其可交互：

```jsx
<Flex direction="column" gap="4">
  {/* 按钮卡片 */}
  <Card asChild>
    <button onClick={() => alert('按钮卡片被点击')}>
      <Text as="div" size="3" weight="bold" mb="2">按钮卡片</Text>
      <Text as="div" color="gray">点击此卡片会触发事件</Text>
    </button>
  </Card>

  {/* 链接卡片 */}
  <Card asChild>
    <a href="https://example.com">
      <Text as="div" size="3" weight="bold" mb="2">链接卡片</Text>
      <Text as="div" color="gray">这个卡片是一个链接</Text>
    </a>
  </Card>
</Flex>
```

### 图文卡片

卡片常用于展示图文混排的内容：

```jsx
{/* 垂直布局 */}
<Card size="3">
  <Flex direction="column" gap="3">
    <img
      src="https://example.com/image.jpg"
      alt="示例图片"
      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-3)' }}
    />
    <Text as="div" size="5" weight="bold">标题</Text>
    <Text as="div" color="gray" size="2">描述文字</Text>
  </Flex>
</Card>

{/* 水平布局 */}
<Card size="3">
  <Flex gap="4" align="start">
    <img
      src="https://example.com/image.jpg"
      alt="示例图片"
      style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-2)', flexShrink: 0 }}
    />
    <Flex direction="column" gap="2">
      <Text as="div" size="5" weight="bold">标题</Text>
      <Text as="div" color="gray" size="2">描述文字</Text>
    </Flex>
  </Flex>
</Card>
```

### 卡片内嵌套内容

卡片内可以使用其他组件构建复杂内容：

```jsx
<Card size="3">
  <Flex direction="column" gap="4">
    <Text as="div" size="6" weight="bold">内容布局示例</Text>
    <Text as="div" color="gray">
      卡片可以容纳各种类型的内容，包括标题、文本、图片等。
    </Text>
    <Flex gap="4" align="center">
      <Text size="2" color="gray">标签:</Text>
      <Card variant="ghost" size="1">示例标签</Card>
      <Card variant="ghost" size="1">布局演示</Card>
    </Flex>
  </Flex>
</Card>
```

## Props / API

### Card

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 卡片尺寸（影响内边距） | `"1" \| "2" \| "3" \| "4" \| "5"` | `"1"` |
| `variant` | 视觉变体 | `"surface" \| "classic" \| "ghost"` | `"surface"` |
| `asChild` | 是否将样式传递给子组件 | `boolean` | `false` |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 卡片内容 | `React.ReactNode` | - |

> Card 还支持所有标准 HTML `div` 属性。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/card) 获取完整 API 与设计规范。

----- split line -----

## chat (react/chat)

# `react-chat`

Chat 组件用于展示对话消息列表，并提供消息输入与发送能力，适用于 AI 对话、客服等场景。

## 安装

```sh
pnpm add @sea-lion/react-chat
# 或者
npm install @sea-lion/react-chat
yarn add @sea-lion/react-chat
```

## 使用

在代码中引入组件：

```tsx
import { Chat } from '@sea-lion/react-chat';
```

## 何时使用

- 需要展示用户与 AI / 客服之间的对话记录时
- 实现聊天输入框、发送按钮一体化的 UI 时
- 需要按消息列表顺序渲染多条对话内容时

## 基本用法

```tsx
import { Chat } from '@sea-lion/react-chat';
import { Theme } from '@sea-lion/react-theme';

const messages = [
  {
    id: '1',
    content: '你好，有什么可以帮助你的？',
    sender: 'assistant',
    timestamp: '2024-01-01 12:00',
  },
  {
    id: '2',
    content: '我想了解一下这个组件库。',
    sender: 'user',
    timestamp: '2024-01-01 12:01',
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

## 受控用法（处理发送）

`onSend` 回调在用户点击发送按钮或按下 `Enter` 时触发，可在此更新消息列表：

```tsx
import { useState } from 'react';
import { Chat } from '@sea-lion/react-chat';
import type { ChatMessage } from '@sea-lion/react-chat';

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', content: '你好！', sender: 'assistant', timestamp: '' },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        content: text,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return <Chat messages={messages} onSend={handleSend} />;
}
```

## ChatMessage 类型

| 字段 | 说明 | 类型 | 必填 |
|------|------|------|------|
| id | 消息唯一标识 | `string` | 是 |
| content | 消息正文内容 | `string` | 是 |
| sender | 发送方标识（如 `'user'` / `'assistant'`） | `string` | 是 |
| timestamp | 消息时间戳文本 | `string` | 是 |

## Chat Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| messages | 消息列表 | `ChatMessage[]` | — |
| onSend | 用户发送消息时的回调，参数为输入文本 | `(message: string) => void` | — |

## 键盘交互

| 按键 | 说明 |
|------|------|
| `Enter` | 发送消息（不触发换行） |
| `Shift + Enter` | 换行（不发送） |

## 查看更多

Chat 组件为 sea-lion-uix 内置的实验性组件，无对应 Radix UI 文档。可结合 `@sea-lion/react-theme` 使用以获得一致的视觉风格。

----- split line -----

## checkbox-cards (react/checkbox-cards)

# `react-checkbox-cards`

CheckboxCards 是一个卡片式复选框组件，用于在网格布局中进行多选操作，结合了卡片的视觉效果和复选框的功能。

主要特点：

- 支持三种尺寸：1、2、3
- 提供两种视觉变体：surface、classic
- 支持网格布局与高对比度模式
- 支持受控与非受控使用方式

## 安装

```sh
pnpm add @sea-lion/react-checkbox-cards
# 或者
npm install @sea-lion/react-checkbox-cards
yarn add @sea-lion/react-checkbox-cards
```

## 使用

在代码中引入组件：

```tsx
import * as CheckboxCards from '@sea-lion/react-checkbox-cards';
```

### 基本用法

```jsx
<CheckboxCards.Root>
  <CheckboxCards.Item value="a">选项 A</CheckboxCards.Item>
  <CheckboxCards.Item value="b">选项 B</CheckboxCards.Item>
  <CheckboxCards.Item value="c">选项 C</CheckboxCards.Item>
</CheckboxCards.Root>
```

### 带图标和文字

通常将图标与文字组合使用，丰富卡片内容：

```jsx
import { InfoCircledIcon, RocketIcon, GearIcon } from '@radix-ui/react-icons';

<CheckboxCards.Root color="blue">
  <CheckboxCards.Item value="option1">
    <InfoCircledIcon width="20" height="20" />
    <Text>数据分析</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <RocketIcon width="20" height="20" />
    <Text>自动化处理</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option3">
    <GearIcon width="20" height="20" />
    <Text>系统设置</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3'].map((size) => (
    <CheckboxCards.Root key={size} size={size}>
      <CheckboxCards.Item value="option1">
        <InfoCircledIcon width="20" height="20" />
        <Text>尺寸 {size}</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <RocketIcon width="20" height="20" />
        <Text>示例选项</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置卡片的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <CheckboxCards.Root variant="surface">
    <CheckboxCards.Item value="option1">
      <Text>surface 变体</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>示例选项</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <CheckboxCards.Root variant="classic">
    <CheckboxCards.Item value="option1">
      <Text>classic 变体</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>示例选项</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>
</Flex>
```

### 不同颜色

通过 `color` 属性设置选中状态的颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <CheckboxCards.Root key={color} color={color}>
      <CheckboxCards.Item value="option1">
        <Text>{color} 主题</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <Text>示例选项</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### 受控用法

通过 `value` 和 `onValueChange` 实现受控选择：

```jsx
const [values, setValues] = React.useState([]);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">选择功能模块：</Text>

  <CheckboxCards.Root
    value={values}
    onValueChange={setValues}
    color="blue"
  >
    <CheckboxCards.Item value="analytics">
      <InfoCircledIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">数据分析</Text>
        <Text size="2" color="gray">提供详细的数据分析报告</Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="automation">
      <RocketIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">自动化处理</Text>
        <Text size="2" color="gray">自动执行重复性任务</Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="settings">
      <GearIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">系统设置</Text>
        <Text size="2" color="gray">自定义系统配置选项</Text>
      </Flex>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <Text size="2" color="gray">
    已选择: {values.length ? values.join(', ') : '未选择任何选项'}
  </Text>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<CheckboxCards.Root highContrast>
  <CheckboxCards.Item value="option1">
    <Text>高对比度选项一</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <Text>高对比度选项二</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

## Props / API

### CheckboxCards.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 受控选中值列表 | `string[]` | - |
| `defaultValue` | 默认选中值列表（非受控） | `string[]` | - |
| `onValueChange` | 选中值变化时的回调 | `(value: string[]) => void` | - |
| `size` | 卡片尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | 视觉变体 | `"surface" \| "classic"` | `"surface"` |
| `color` | 选中状态颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"blue"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `columns` | 网格列数 | `string \| object` | - |

### CheckboxCards.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该选项的值（必填） | `string` | - |
| `disabled` | 是否禁用该选项 | `boolean` | `false` |
| `children` | 卡片内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/checkbox-cards) 获取完整 API 与设计规范。

----- split line -----

## checkbox-group (react/checkbox-group)

# `react-checkbox-group`

CheckboxGroup 是一组复选框组件，用于从一组数据中选择多个值。与单独使用的 Checkbox 相比，提供统一的值管理和布局控制，更适合成组使用。

## 安装

```sh
pnpm add @sea-lion/react-checkbox-group
# 或者
npm install @sea-lion/react-checkbox-group
yarn add @sea-lion/react-checkbox-group
```

## 使用

在代码中引入组件：

```tsx
import * as CheckboxGroup from '@sea-lion/react-checkbox-group';
```

### 基本用法

```jsx
<CheckboxGroup.Root value={selected} onValueChange={setSelected}>
  <CheckboxGroup.Item value="1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="2">选项 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 非受控用法（默认值）

使用 `defaultValue` 设置初始选中项，状态由组件内部管理：

```jsx
<CheckboxGroup.Root defaultValue={['apple', 'banana']}>
  <CheckboxGroup.Item value="apple">苹果</CheckboxGroup.Item>
  <CheckboxGroup.Item value="banana">香蕉</CheckboxGroup.Item>
  <CheckboxGroup.Item value="orange">橙子</CheckboxGroup.Item>
  <CheckboxGroup.Item value="pear">梨</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 受控用法

通过 `value` 和 `onValueChange` 完全控制选中状态：

```jsx
const [value, setValue] = useState(['option2']);

<CheckboxGroup.Root value={value} onValueChange={setValue}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>

<p>当前选中值: {value.join(', ') || '无'}</p>
```

### 尺寸

支持三种尺寸：`"1"`（小）、`"2"`（中，默认）、`"3"`（大）：

```jsx
<CheckboxGroup.Root size="1" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="2" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="3" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 变体

支持三种视觉变体：`"classic"`（默认）、`"surface"`、`"soft"`：

```jsx
<CheckboxGroup.Root variant="classic" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Classic 风格</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="surface" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Surface 风格</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="soft" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Soft 风格</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 颜色

通过 `color` 属性设置主题色，支持设计系统中的全部颜色令牌：

```jsx
<CheckboxGroup.Root color="blue" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">蓝色（默认）</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="crimson" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">猩红色</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="grass" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">草绿色</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="amber" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">琥珀色</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 高对比度

使用 `highContrast` 属性增强可见性，适合对可访问性有更高要求的场景：

```jsx
<CheckboxGroup.Root color="blue" highContrast defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">高对比度选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">高对比度选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 排列方向

通过 `orientation` 控制选项的排列方向：

```jsx
{/* 垂直排列（默认） */}
<CheckboxGroup.Root defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

{/* 水平排列 */}
<CheckboxGroup.Root
  orientation="horizontal"
  defaultValue={['option1']}
  style={{ flexDirection: 'row', alignItems: 'center' }}
>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 禁用状态

支持整组禁用或单个选项禁用：

```jsx
{/* 整组禁用 */}
<CheckboxGroup.Root disabled defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

{/* 个别选项禁用 */}
<CheckboxGroup.Root defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2" disabled>选项 2（禁用）</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 表单用法（必选字段）

配合表单使用时，可设置 `name`（字段名）和 `required`（是否必选）：

```jsx
<form>
  <CheckboxGroup.Root required name="required-options" defaultValue={['option1']}>
    <CheckboxGroup.Item value="option1">选项 1（必选）</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
  </CheckboxGroup.Root>
</form>
```

## 何时使用

- 当用户需要从一组数据中选择多个选项时
- 当用户需要在开/关状态之间切换多个选项时
- 需要与表单一起使用，收集多个选项值的情况
- 适用于配置项的选择、多条件筛选、数据列表的批量操作等场景

## Props / API 属性

### CheckboxGroup.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 复选框尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | 视觉变体 | `"classic" \| "soft" \| "surface"` | `"classic"` |
| `color` | 主题颜色 | `"gray" \| "blue" \| "crimson" \| "green" \| ...` | — |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |
| `disabled` | 禁用整个复选框组 | `boolean` | `false` |
| `orientation` | 排列方向 | `"horizontal" \| "vertical"` | `"vertical"` |
| `value` | 受控选中值（数组） | `string[]` | — |
| `defaultValue` | 非受控默认选中值 | `string[]` | `[]` |
| `onValueChange` | 选中值变化时的回调 | `(value: string[]) => void` | — |
| `required` | 是否为必选字段 | `boolean` | `false` |
| `name` | 表单字段名称 | `string` | — |

### CheckboxGroup.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该选项的值（必填） | `string` | — |
| `disabled` | 禁用该选项 | `boolean` | `false` |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/checkbox-group) 获取完整 API 与设计规范。

----- split line -----

## checkbox (react/checkbox)

# `react-checkbox`

Checkbox 是一个复选框组件，用于在表单中进行多选操作。支持选中、未选中、半选状态，多种颜色主题和禁用状态。

## 安装

```sh
pnpm add @sea-lion/react-checkbox
# 或者
npm install @sea-lion/react-checkbox
yarn add @sea-lion/react-checkbox
```

## 使用

在代码中引入组件：

```tsx
import { Checkbox } from '@sea-lion/react-checkbox';
```

### 基本用法

```jsx
<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked={checked} onCheckedChange={setChecked} />
<Checkbox checked="indeterminate" />
```

### 不同状态

Checkbox 支持三种状态：选中、未选中和半选（`indeterminate`）。

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="2">
    <Checkbox defaultChecked />
    <Text>选中状态</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox checked="indeterminate" />
    <Text>半选状态</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled />
    <Text color="gray">禁用状态</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled defaultChecked />
    <Text color="gray">禁用且选中</Text>
  </Flex>
</Flex>
```

### 不同颜色

通过 `color` 属性设置复选框颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} defaultChecked />
      <Text>{color} 主题</Text>
    </Flex>
  ))}
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式，使复选框在深色背景下更清晰：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} highContrast defaultChecked />
      <Text>高对比度 {color}</Text>
    </Flex>
  ))}
</Flex>
```

### 表单应用

在表单中受控使用 Checkbox：

```jsx
const [checked, setChecked] = React.useState(false);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">用户协议</Text>

  <Flex align="start" gap="2">
    <Checkbox
      checked={checked}
      onCheckedChange={() => setChecked(!checked)}
    />
    <Text size="2">我已阅读并同意《用户协议》和《隐私政策》</Text>
  </Flex>

  <button disabled={!checked}>下一步</button>
</Flex>
```

## Props / API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 复选框的选中状态 | `boolean \| "indeterminate"` | - |
| `defaultChecked` | 初始选中状态（非受控） | `boolean` | `false` |
| `onCheckedChange` | 选中状态变化时的回调 | `(checked: boolean \| "indeterminate") => void` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | - |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `size` | 复选框尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `name` | 表单字段名称 | `string` | - |
| `value` | 表单字段值 | `string` | - |
| `required` | 是否必填 | `boolean` | `false` |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/checkbox) 获取完整 API 与设计规范。

----- split line -----

## code (react/code)

# `react-code`

Code 是一个用于展示代码片段的组件，提供了多种风格和尺寸选项，使代码内容与上下文区分、更加醒目。

## 安装

```sh
pnpm add @sea-lion/react-code
# 或者
npm install @sea-lion/react-code
yarn add @sea-lion/react-code
```

## 使用

在代码中引入组件：

```tsx
import { Code } from '@sea-lion/react-code';
```

### 基本用法

在文本中嵌入代码片段：

```jsx
<Text as="p" size="3">
  在React组件中，使用 <Code>useState</Code> 钩子可以创建状态变量。
</Text>
```

### 不同尺寸

支持尺寸 `"1"` 至 `"9"`：

```jsx
<Flex direction="column" gap="4">
  <Code size="1">npm install @sea-lion/react-code</Code>
  <Code size="2">npm install @sea-lion/react-code</Code>
  <Code size="3">npm install @sea-lion/react-code</Code>
  <Code size="4">npm install @sea-lion/react-code</Code>
  <Code size="5">npm install @sea-lion/react-code</Code>
</Flex>
```

### 不同变体

通过 `variant` 属性设置代码片段的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Code variant="soft">{"import { useState } from 'react';"}</Code>
  <Code variant="solid">{"import { useState } from 'react';"}</Code>
  <Code variant="outline">{"import { useState } from 'react';"}</Code>
  <Code variant="ghost">{"import { useState } from 'react';"}</Code>
</Flex>
```

### 不同颜色

通过 `color` 属性设置代码颜色：

```jsx
<Flex direction="column" gap="4">
  <Code color="blue">{"const Component = () => {};"}</Code>
  <Code color="crimson">{"const Component = () => {};"}</Code>
  <Code color="green">{"const Component = () => {};"}</Code>
  <Code color="orange">{"const Component = () => {};"}</Code>
</Flex>
```

### 字重

通过 `weight` 属性控制代码字体粗细：

```jsx
<Flex direction="column" gap="4">
  <Code weight="light">const data = [1, 2, 3, 4];</Code>
  <Code weight="regular">const data = [1, 2, 3, 4];</Code>
  <Code weight="medium">const data = [1, 2, 3, 4];</Code>
  <Code weight="bold">const data = [1, 2, 3, 4];</Code>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex direction="column" gap="4">
  <Code color="blue" variant="soft">{"function example() { return true; }"}</Code>
  <Code color="blue" variant="soft" highContrast>{"function example() { return true; }"}</Code>
</Flex>
```

### 文本截断与换行

通过 `truncate` 和 `textWrap` 属性控制代码的显示方式：

```jsx
<div style={{ width: '300px' }}>
  {/* 文本截断（单行省略） */}
  <Code truncate>{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>

  {/* 不换行 */}
  <div style={{ overflow: 'auto' }}>
    <Code textWrap="nowrap">{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>
  </div>

  {/* 平衡换行 */}
  <Code textWrap="balance">{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>
</div>
```

### 在上下文中使用

Code 组件常用于文档和教程中的代码标注：

```jsx
<Box>
  <Text as="p" size="3">
    在React组件中，使用 <Code>useState</Code> 钩子可以创建状态变量。例如：
  </Text>
  <Box mt="2" p="3" style={{ backgroundColor: 'var(--gray-3)' }}>
    <Code variant="ghost">
      const [count, setCount] = useState(0);
    </Code>
  </Box>
  <Text as="p" size="3" mt="2">
    然后可以通过 <Code>setCount</Code> 更新状态值，并使用 <Code>count</Code> 在渲染中读取状态值。
  </Text>
</Box>
```

## 何时使用

- 在文本中展示代码片段或命令
- 需要突出显示技术名称或变量
- 在文档或教程中标记代码语法
- 展示配置项、参数名称或技术术语

## Props / API

### Code

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 代码字体尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"2"` |
| `variant` | 视觉变体 | `"solid" \| "soft" \| "outline" \| "ghost"` | `"soft"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| ...` | `"blue"` |
| `weight` | 字体粗细 | `"light" \| "regular" \| "medium" \| "bold"` | `"regular"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `truncate` | 是否单行省略 | `boolean` | `false` |
| `textWrap` | 文本换行方式 | `"wrap" \| "nowrap" \| "balance" \| "pretty"` | - |
| `children` | 代码内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/code) 获取完整 API 与设计规范。

----- split line -----

## container (react/container)

# `react-container`

Container 是一个用于限制内容最大宽度并在页面中居中内容的组件。它是构建标准页面布局的基础，确保内容在各种屏幕尺寸下保持适当的宽度和可读性。

## 安装

```sh
pnpm add @sea-lion/react-container
# 或者
npm install @sea-lion/react-container
yarn add @sea-lion/react-container
```

## 使用

在代码中引入组件：

```tsx
import { Container } from '@sea-lion/react-container';
```

### 基本用法

```jsx
<Container size="3">
  <Text>页面主内容区域</Text>
</Container>
```

## 何时使用

- 创建具有标准宽度的页面布局
- 确保长文本内容在大屏幕上保持适当的行长度
- 居中显示内容并保持一致的页边距

### 不同尺寸

Container 支持四种预设尺寸，对应不同的最大宽度：

```jsx
<Flex direction="column" gap="4">
  {/* 尺寸 1 — 最大宽度 448px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 1 (448px)</Text>
    <Container size="1" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 1 的容器，最大宽度为 448px。</Text>
      </Box>
    </Container>
  </Box>

  {/* 尺寸 2 — 最大宽度 688px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 2 (688px)</Text>
    <Container size="2" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 2 的容器，最大宽度为 688px。</Text>
      </Box>
    </Container>
  </Box>

  {/* 尺寸 3 — 最大宽度 880px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 3 (880px)</Text>
    <Container size="3" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 3 的容器，最大宽度为 880px。</Text>
      </Box>
    </Container>
  </Box>

  {/* 尺寸 4 — 最大宽度 1136px */}
  <Box>
    <Text as="p" size="2" weight="bold">尺寸 4 (1136px)</Text>
    <Container size="4" style={{ backgroundColor: 'var(--gray-a3)' }}>
      <Box p="4">
        <Text>这是一个尺寸为 4 的容器，最大宽度为 1136px。</Text>
      </Box>
    </Container>
  </Box>
</Flex>
```

### 对齐方式

通过 `align` 属性控制容器内容的水平对齐：

```jsx
{/* 左对齐 */}
<Container size="3" align="left" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>左对齐的内容</Text>
  </Box>
</Container>

{/* 居中对齐（默认） */}
<Container size="3" align="center" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>居中对齐的内容</Text>
  </Box>
</Container>

{/* 右对齐 */}
<Container size="3" align="right" style={{ backgroundColor: 'var(--gray-a3)' }}>
  <Box p="4" style={{ width: '50%', backgroundColor: 'var(--blue-a3)' }}>
    <Text>右对齐的内容</Text>
  </Box>
</Container>
```

### 响应式容器

`size` 属性支持响应式对象，可以在不同断点下使用不同的尺寸：

```jsx
<Container
  size={{ sm: '1', md: '2', lg: '3', xl: '4' }}
  style={{ backgroundColor: 'var(--gray-a3)' }}
>
  <Box p="4">
    <Text>
      这个容器在不同的断点使用不同的尺寸：
      小屏幕 (sm) — 448px；
      中等屏幕 (md) — 688px；
      大屏幕 (lg) — 880px；
      超大屏幕 (xl) — 1136px
    </Text>
  </Box>
</Container>
```

### 在布局中使用

Container 与 Flex、Box 等组件配合，构建完整的页面布局：

```jsx
<Container size="3">
  <Box p="4">
    <Heading size="5" mb="4">页面标题</Heading>
    <Text as="p" mb="4">
      Container 组件可以用来创建标准的页面布局，限制内容宽度并确保其在各种屏幕尺寸下的可读性。
    </Text>
    <Flex gap="4" wrap="wrap">
      <Box style={{ flex: '1 1 200px', backgroundColor: 'var(--blue-a3)' }} p="4">
        <Text weight="bold" mb="2">侧边栏</Text>
        <Text size="2">这里可以放置导航或相关内容。</Text>
      </Box>
      <Box style={{ flex: '2 1 400px', backgroundColor: 'var(--blue-a2)' }} p="4">
        <Text weight="bold" mb="2">主要内容</Text>
        <Text size="2">在这个区域放置页面的主要内容。</Text>
      </Box>
    </Flex>
  </Box>
</Container>
```

## 尺寸对照表

| size | 最大宽度 |
|------|----------|
| `"1"` | 448px |
| `"2"` | 688px |
| `"3"` | 880px |
| `"4"` | 1136px |

## Props / API

### Container

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 容器尺寸（限制最大宽度），支持响应式对象 | `"1" \| "2" \| "3" \| "4"` | - |
| `align` | 内容的水平对齐方式 | `"left" \| "center" \| "right"` | `"center"` |
| `display` | 显示模式 | `"none" \| "initial"` | `"initial"` |
| `style` | 内联样式 | `React.CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
| `children` | 容器内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/container) 获取完整 API 与设计规范。

----- split line -----

## context-menu (react/context-menu)

# `react-context-menu`

ContextMenu 是在用户右击或长按元素时显示的菜单，提供与该上下文相关的操作选项。支持子菜单、复选框、单选框、分组标签、禁用项等丰富的菜单能力。

## 安装

```sh
pnpm add @sea-lion/react-context-menu
# 或者
npm install @sea-lion/react-context-menu
yarn add @sea-lion/react-context-menu
```

## 使用

在代码中引入组件：

```tsx
import * as ContextMenu from '@sea-lion/react-context-menu';
```

### 基本用法

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>右击此处</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>编辑</ContextMenu.Item>
    <ContextMenu.Item>复制</ContextMenu.Item>
    <ContextMenu.Item>粘贴</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>删除</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### 菜单变体

通过 `variant` 属性切换 Content 的视觉风格：

```jsx
{/* Soft 变体（默认） */}
<ContextMenu.Content variant="soft">
  <ContextMenu.Label>编辑选项</ContextMenu.Label>
  <ContextMenu.Item>剪切</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
  <ContextMenu.Item>粘贴</ContextMenu.Item>
</ContextMenu.Content>

{/* Solid 变体 */}
<ContextMenu.Content variant="solid">
  <ContextMenu.Label>编辑选项</ContextMenu.Label>
  <ContextMenu.Item>剪切</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
  <ContextMenu.Item>粘贴</ContextMenu.Item>
</ContextMenu.Content>

{/* 高对比度 */}
<ContextMenu.Content highContrast>
  <ContextMenu.Label>编辑选项</ContextMenu.Label>
  <ContextMenu.Item>剪切</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
</ContextMenu.Content>
```

### 颜色

通过 `color` 属性为菜单内容设置主题色：

```jsx
<ContextMenu.Content color="blue">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="crimson">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="green">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>
```

### 尺寸

通过 `size` 属性控制菜单的紧凑程度：

```jsx
{/* 尺寸 1（紧凑） */}
<ContextMenu.Content size="1">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>

{/* 尺寸 2（默认） */}
<ContextMenu.Content size="2">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>
```

### 子菜单

使用 `Sub`、`SubTrigger` 和 `SubContent` 创建多级子菜单：

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>右击显示带子菜单的菜单</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>查看</ContextMenu.Item>
    <ContextMenu.Item>刷新</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>更多选项</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>选项 1</ContextMenu.Item>
        <ContextMenu.Item>选项 2</ContextMenu.Item>
        <ContextMenu.Item>选项 3</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>排序方式</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.RadioGroup value="name">
          <ContextMenu.RadioItem value="name">按名称</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="date">按日期</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="size">按大小</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### 复选框和单选框

使用 `CheckboxItem` 实现多选切换，使用 `RadioGroup` + `RadioItem` 实现单选：

```jsx
const [showToolbar, setShowToolbar] = useState(true);
const [theme, setTheme] = useState('light');

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>右击查看</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Label>视图选项</ContextMenu.Label>
    <ContextMenu.CheckboxItem
      checked={showToolbar}
      onCheckedChange={setShowToolbar}
    >
      显示工具栏
    </ContextMenu.CheckboxItem>
    <ContextMenu.CheckboxItem>显示状态栏</ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.Group>
      <ContextMenu.Label>主题</ContextMenu.Label>
      <ContextMenu.RadioGroup value={theme} onValueChange={setTheme}>
        <ContextMenu.RadioItem value="light">浅色</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="dark">深色</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="system">跟随系统</ContextMenu.RadioItem>
      </ContextMenu.RadioGroup>
    </ContextMenu.Group>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### 禁用选项

通过 `disabled` 属性禁用特定菜单项：

```jsx
<ContextMenu.Content>
  <ContextMenu.Item>编辑</ContextMenu.Item>
  <ContextMenu.Item disabled>删除（无权限）</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
  <ContextMenu.Separator />
  <ContextMenu.Sub>
    <ContextMenu.SubTrigger>共享</ContextMenu.SubTrigger>
    <ContextMenu.SubContent>
      <ContextMenu.Item>通过邮件</ContextMenu.Item>
      <ContextMenu.Item disabled>通过信息（不可用）</ContextMenu.Item>
      <ContextMenu.Item>创建链接</ContextMenu.Item>
    </ContextMenu.SubContent>
  </ContextMenu.Sub>
</ContextMenu.Content>
```

## 何时使用

- 需要为用户提供特定元素或区域的附加操作
- 需要减少界面复杂度，隐藏不常用的功能
- 遵循桌面应用的常见交互，让用户通过右键访问功能
- 在移动设备上通过长按提供额外选项

## Props / API 属性

### ContextMenu.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `onOpenChange` | 菜单打开状态变化时的回调 | `(open: boolean) => void` | — |
| `modal` | 是否以模态模式渲染 | `boolean` | `true` |

### ContextMenu.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |
| `disabled` | 禁用触发器 | `boolean` | `false` |

### ContextMenu.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 菜单尺寸 | `"1" \| "2"` | `"2"` |
| `variant` | 视觉变体 | `"soft" \| "solid"` | `"soft"` |
| `color` | 主题颜色 | `string` | — |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |

### ContextMenu.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `disabled` | 禁用该菜单项 | `boolean` | `false` |
| `onSelect` | 选中时的回调 | `(event: Event) => void` | — |
| `color` | 单项颜色 | `string` | — |
| `shortcut` | 显示快捷键提示 | `string` | — |

### ContextMenu.CheckboxItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | — |
| `onCheckedChange` | 选中状态变化回调 | `(checked: boolean) => void` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |

### ContextMenu.RadioGroup

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 当前选中值 | `string` | — |
| `onValueChange` | 选中值变化回调 | `(value: string) => void` | — |

### ContextMenu.RadioItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该项的值（必填） | `string` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |

### ContextMenu.Sub / SubTrigger / SubContent

用于创建子菜单。`Sub` 包裹 `SubTrigger`（触发器）和 `SubContent`（子菜单内容）。

### ContextMenu.Label

分组标签，不可交互，仅用于展示菜单分组名称。

### ContextMenu.Separator

分隔线，用于在视觉上区分菜单项组。

### ContextMenu.Group

对相关菜单项进行逻辑分组。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/context-menu) 获取完整 API 与设计规范。

----- split line -----

## data-list (react/data-list)

# `react-data-list`

DataList 是一个用于展示键值对列表的组件，通常用于展示属性、配置和详细信息。支持水平/垂直方向、多种尺寸、自定义对齐方式、标签颜色，以及响应式布局。

## 安装

```sh
pnpm add @sea-lion/react-data-list
# 或者
npm install @sea-lion/react-data-list
yarn add @sea-lion/react-data-list
```

## 使用

在代码中引入组件：

```tsx
import * as DataList from '@sea-lion/react-data-list';
```

### 基本用法

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label>姓名</DataList.Label>
    <DataList.Value>张三</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>邮箱</DataList.Label>
    <DataList.Value>zhangsan@example.com</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>电话</DataList.Label>
    <DataList.Value>138-0000-0000</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>地址</DataList.Label>
    <DataList.Value>北京市海淀区</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 方向

通过 `orientation` 属性控制标签与值的排列方式：

```jsx
{/* 水平方向（默认）：标签和值在同一行 */}
<DataList.Root orientation="horizontal">
  <DataList.Item>
    <DataList.Label>用户名</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>创建时间</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 垂直方向：标签在值的上方 */}
<DataList.Root orientation="vertical">
  <DataList.Item>
    <DataList.Label>用户名</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>创建时间</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 尺寸

支持三种尺寸，通过 `size` 属性设置：

```jsx
{/* 小尺寸 */}
<DataList.Root size="1">
  <DataList.Item>
    <DataList.Label>操作系统</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>内存</DataList.Label>
    <DataList.Value>16GB</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 中等尺寸（默认） */}
<DataList.Root size="2">
  <DataList.Item>
    <DataList.Label>操作系统</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 大尺寸 */}
<DataList.Root size="3">
  <DataList.Item>
    <DataList.Label>操作系统</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 条目对齐方式

通过 `DataList.Item` 的 `align` 属性控制标签与值之间的垂直对齐：

```jsx
{/* 顶部对齐 */}
<DataList.Root>
  <DataList.Item align="start">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 居中对齐 */}
<DataList.Root>
  <DataList.Item align="center">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 底部对齐 */}
<DataList.Root>
  <DataList.Item align="end">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 基线对齐（默认） */}
<DataList.Root>
  <DataList.Item align="baseline">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 标签颜色

通过 `DataList.Label` 的 `color` 属性为不同标签设置语义化颜色：

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="gray">灰色标签（默认）</DataList.Label>
    <DataList.Value>标签默认为灰色</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="blue">蓝色标签</DataList.Label>
    <DataList.Value>用于表示信息或主要内容</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="green">绿色标签</DataList.Label>
    <DataList.Value>用于表示成功或通过状态</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="red">红色标签</DataList.Label>
    <DataList.Value>用于表示错误或警告</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="amber">琥珀色标签</DataList.Label>
    <DataList.Value>用于表示注意或待处理</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 高对比度标签

使用 `highContrast` 提升标签的可见性：

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="blue" highContrast>技术栈</DataList.Label>
    <DataList.Value>React, TypeScript, Node.js</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="crimson" highContrast>部署环境</DataList.Label>
    <DataList.Value>AWS, Docker, Kubernetes</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 自定义标签宽度

通过内联样式或 `width` 属性控制标签列的宽度：

```jsx
{/* 固定最小宽度 */}
<DataList.Root>
  <DataList.Item>
    <DataList.Label style={{ minWidth: '200px' }}>长标签名称</DataList.Label>
    <DataList.Value>对应的值</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 百分比宽度 */}
<DataList.Root style={{ width: '100%' }}>
  <DataList.Item>
    <DataList.Label width="30%">标签</DataList.Label>
    <DataList.Value>值</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 响应式布局

`orientation` 和 `size` 均支持响应式配置，适配不同屏幕尺寸：

```jsx
<DataList.Root
  orientation={{ initial: 'horizontal', xs: 'vertical', md: 'horizontal' }}
  size={{ initial: '1', sm: '2', lg: '3' }}
>
  <DataList.Item>
    <DataList.Label>产品名称</DataList.Label>
    <DataList.Value>智能手机 X10</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>价格</DataList.Label>
    <DataList.Value>¥3999</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>存储容量</DataList.Label>
    <DataList.Value>128GB</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

## 何时使用

- 需要以结构化方式展示对象属性或数据字段
- 展示用户资料、产品详情、配置项等信息
- 呈现表单数据的只读视图
- 需要清晰标记标签和对应值的场景

## Props / API 属性

### DataList.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `orientation` | 标签与值的排列方向 | `"horizontal" \| "vertical"` 或响应式对象 | `"horizontal"` |
| `size` | 列表尺寸 | `"1" \| "2" \| "3"` 或响应式对象 | `"2"` |
| `trim` | 修剪首尾空白 | `"normal" \| "start" \| "end" \| "both"` | `"normal"` |

### DataList.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `align` | 标签与值的垂直对齐方式 | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"baseline"` |

### DataList.Label

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `color` | 标签颜色 | `"gray" \| "blue" \| "green" \| "red" \| "amber" \| ...` | `"gray"` |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |
| `width` | 标签列宽度 | `string` | — |

### DataList.Value

接受标准 HTML 属性，可内嵌任意内容（如链接、徽章、图标等）。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/data-list) 获取完整 API 与设计规范。

----- split line -----

## dialog (react/dialog)

# `react-dialog`

Dialog 是一个模态对话框组件，用于显示需要用户注意或操作的内容，同时阻止与页面其余部分的交互，直到对话框关闭。支持多种尺寸、对齐方式、自定义宽度以及受控/非受控两种用法。

## 安装

```sh
pnpm add @sea-lion/react-dialog
# 或者
npm install @sea-lion/react-dialog
yarn add @sea-lion/react-dialog
```

## 使用

在代码中引入组件：

```tsx
import * as Dialog from '@sea-lion/react-dialog';
```

### 基本用法

```jsx
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button>打开对话框</button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>标题</Dialog.Title>
    <Dialog.Description>描述内容</Dialog.Description>
    <Dialog.Close asChild>
      <button>关闭</button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog.Root>
```

### 配合 Button 和 Flex 使用

```jsx
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';

<Dialog.Root>
  <Dialog.Trigger>
    <Button>打开对话框</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>对话框标题</Dialog.Title>
    <Dialog.Description>
      这是一个简单的对话框示例。对话框用于显示需要用户注意或操作的内容，
      同时阻止与页面其余部分的交互，直到对话框关闭。
    </Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close>
        <Button variant="soft" color="gray">取消</Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>确认</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### 尺寸

通过 `size` 属性控制对话框的整体尺寸：

```jsx
{/* 小尺寸 */}
<Dialog.Root>
  <Dialog.Trigger><Button>小对话框</Button></Dialog.Trigger>
  <Dialog.Content size="1">
    <Dialog.Title size="3">小尺寸对话框</Dialog.Title>
    <Dialog.Description size="1">适合显示简单的信息或操作。</Dialog.Description>
    <Flex justify="end" gap="2" mt="3">
      <Dialog.Close><Button size="1">确定</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

{/* 默认尺寸 */}
<Dialog.Root>
  <Dialog.Trigger><Button>默认对话框</Button></Dialog.Trigger>
  <Dialog.Content size="3">
    <Dialog.Title size="5">默认尺寸对话框</Dialog.Title>
    <Dialog.Description size="3">适合大多数场景使用。</Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close><Button>确定</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

{/* 大尺寸 */}
<Dialog.Root>
  <Dialog.Trigger><Button>大对话框</Button></Dialog.Trigger>
  <Dialog.Content size="4">
    <Dialog.Title size="6">大尺寸对话框</Dialog.Title>
    <Dialog.Description size="4">适合展示复杂内容或多步骤操作。</Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close><Button size="3">确定</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### 对齐方式

通过 `align` 属性控制对话框在视口中的垂直位置：

```jsx
{/* 居中对齐（默认） */}
<Dialog.Content align="center">
  <Dialog.Title>居中对话框</Dialog.Title>
  <Dialog.Description>对话框出现在屏幕中央，适合大多数场景。</Dialog.Description>
</Dialog.Content>

{/* 顶部对齐 */}
<Dialog.Content align="start">
  <Dialog.Title>顶部对齐对话框</Dialog.Title>
  <Dialog.Description>对话框出现在屏幕顶部，适合展示较长内容。</Dialog.Description>
</Dialog.Content>
```

### 自定义宽度

通过 `maxWidth`、`width`、`minWidth` 精确控制对话框尺寸：

```jsx
{/* 最大宽度 400px */}
<Dialog.Content maxWidth="400px">
  <Dialog.Title>窄对话框</Dialog.Title>
  <Dialog.Description>适合显示简短信息或简单表单。</Dialog.Description>
</Dialog.Content>

{/* 最大宽度 800px */}
<Dialog.Content maxWidth="800px">
  <Dialog.Title>宽对话框</Dialog.Title>
  <Dialog.Description>适合显示更多内容、表格或复杂表单。</Dialog.Description>
</Dialog.Content>

{/* 固定宽度 500px */}
<Dialog.Content width="500px">
  <Dialog.Title>固定宽度对话框</Dialog.Title>
  <Dialog.Description>在所有屏幕尺寸下保持相同宽度。</Dialog.Description>
</Dialog.Content>
```

### 受控对话框

通过 `open` 和 `onOpenChange` 从外部完整控制对话框状态：

```jsx
const [open, setOpen] = useState(false);

<Dialog.Root open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>
    <Button>打开受控对话框</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>受控对话框</Dialog.Title>
    <Dialog.Description>
      此对话框的开关状态由 React 状态控制，适合需要精确控制行为的场景。
    </Dialog.Description>
    <Flex direction="column" gap="3" mt="4">
      <p>当前状态: {open ? '打开' : '关闭'}</p>
      <Flex justify="end" gap="3">
        <Button variant="soft" color="gray" onClick={() => setOpen(false)}>取消</Button>
        <Button onClick={() => {
          console.log('确认操作');
          setOpen(false);
        }}>确认</Button>
      </Flex>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### 带表单的对话框

在对话框内嵌入表单，收集用户输入：

```jsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>打开表单对话框</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>用户信息</Dialog.Title>
    <Dialog.Description>请填写以下信息完成注册。所有字段均为必填。</Dialog.Description>

    <form style={{ marginTop: 'var(--space-4)' }}>
      <Flex direction="column" gap="3">
        <Box>
          <label htmlFor="name">姓名</label>
          <input id="name" placeholder="请输入姓名" />
        </Box>
        <Box>
          <label htmlFor="email">电子邮件</label>
          <input id="email" type="email" placeholder="your.email@example.com" />
        </Box>
        <Box>
          <label htmlFor="bio">自我介绍</label>
          <textarea id="bio" placeholder="请简单介绍一下您自己" />
        </Box>
        <Flex justify="end" gap="3" mt="2">
          <Dialog.Close>
            <Button variant="soft" color="gray">取消</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>提交</Button>
          </Dialog.Close>
        </Flex>
      </Flex>
    </form>
  </Dialog.Content>
</Dialog.Root>
```

### 非受控（默认打开）

```jsx
<Dialog.Root defaultOpen>
  <Dialog.Content>
    <Dialog.Title>默认打开的对话框</Dialog.Title>
    <Dialog.Description>页面加载后此对话框默认处于打开状态。</Dialog.Description>
    <Dialog.Close>
      <Button mt="4">关闭</Button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog.Root>
```

## 何时使用

- 需要用户确认重要操作
- 显示用户需要立即注意的信息
- 收集用户输入而不离开当前页面
- 显示需要用户决策的警告或错误信息
- 展示详细内容而不导航到新页面

## Props / API 属性

### Dialog.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `open` | 受控的打开状态 | `boolean` | — |
| `defaultOpen` | 非受控的默认打开状态 | `boolean` | `false` |
| `onOpenChange` | 打开状态变化时的回调 | `(open: boolean) => void` | — |

### Dialog.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 对话框尺寸 | `"1" \| "2" \| "3" \| "4"` | `"3"` |
| `align` | 对话框在视口中的垂直对齐方式 | `"center" \| "start"` | `"center"` |
| `width` | 固定宽度 | `string` | — |
| `minWidth` | 最小宽度 | `string` | — |
| `maxWidth` | 最大宽度 | `string` | — |
| `height` | 高度 | `string` | — |
| `minHeight` | 最小高度 | `string` | — |
| `maxHeight` | 最大高度 | `string` | — |

### Dialog.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |

### Dialog.Close

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为关闭按钮渲染 | `boolean` | `false` |

### Dialog.Title

对话框标题，带有正确的 `aria-labelledby` 语义。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 字体尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | — |

### Dialog.Description

对话框描述，带有正确的 `aria-describedby` 语义。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 字体尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | — |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/dialog) 获取完整 API 与设计规范。

----- split line -----

## dropdown-menu (react/dropdown-menu)

# `react-dropdown-menu`

DropdownMenu 是一个下拉菜单组件，在用户点击触发器后显示一系列选项，支持多级子菜单、复选框、单选框等功能。

## 安装

```sh
pnpm add @sea-lion/react-dropdown-menu
# 或者
npm install @sea-lion/react-dropdown-menu
yarn add @sea-lion/react-dropdown-menu
```

## 使用

在代码中引入组件：

```tsx
import * as DropdownMenu from '@sea-lion/react-dropdown-menu';
```

### 基本用法

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <button>打开菜单</button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onSelect={() => {}}>选项 1</DropdownMenu.Item>
    <DropdownMenu.Item onSelect={() => {}}>选项 2</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>子菜单</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>子项</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 配合 Button 使用（含快捷键）

使用 `TriggerIcon` 和 `shortcut` 属性增强交互体验：

```jsx
import { Button } from '@sea-lion/react-button';

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      菜单选项 <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>新建文档</DropdownMenu.Item>
    <DropdownMenu.Item>打开文件...</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘S">保存</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⇧⌘S">另存为...</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>导出</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 尺寸

通过 `size` 属性控制下拉菜单内容的紧凑程度：

```jsx
{/* 小尺寸 */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>小菜单</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="1">
    <DropdownMenu.Item>选项 1</DropdownMenu.Item>
    <DropdownMenu.Item>选项 2</DropdownMenu.Item>
    <DropdownMenu.Item>选项 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

{/* 默认尺寸 */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>默认菜单</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="2">
    <DropdownMenu.Item>选项 1</DropdownMenu.Item>
    <DropdownMenu.Item>选项 2</DropdownMenu.Item>
    <DropdownMenu.Item>选项 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 子菜单

使用 `Sub`、`SubTrigger` 和 `SubContent` 创建多级菜单：

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      高级选项 <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>普通操作</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>文件操作</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>新建文件</DropdownMenu.Item>
        <DropdownMenu.Item>删除文件</DropdownMenu.Item>
        <DropdownMenu.Item>重命名</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>编辑操作</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item shortcut="⌘C">复制</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘V">粘贴</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘X">剪切</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>退出</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 复选框和单选框

通过 `CheckboxItem` 实现开关切换，通过 `RadioGroup` + `RadioItem` 实现单选组：

```jsx
const [checked, setChecked] = useState(true);
const [fontSize, setFontSize] = useState('medium');

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      格式选项 <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.CheckboxItem
      checked={checked}
      onCheckedChange={setChecked}
    >
      粗体
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.Separator />
    <DropdownMenu.Label>字体大小</DropdownMenu.Label>
    <DropdownMenu.RadioGroup value={fontSize} onValueChange={setFontSize}>
      <DropdownMenu.RadioItem value="small">小</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="medium">中</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="large">大</DropdownMenu.RadioItem>
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 分组与标签

使用 `Label` 和 `Separator` 对菜单项进行分组展示：

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>账户选项 <DropdownMenu.TriggerIcon /></Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Label>账户管理</DropdownMenu.Label>
    <DropdownMenu.Item>个人资料</DropdownMenu.Item>
    <DropdownMenu.Item>账户设置</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Label>工作区</DropdownMenu.Label>
    <DropdownMenu.Item>切换团队</DropdownMenu.Item>
    <DropdownMenu.Item>创建新团队</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item color="red">退出登录</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 禁用菜单项

通过 `disabled` 属性禁用特定菜单项：

```jsx
<DropdownMenu.Content>
  <DropdownMenu.Item>编辑</DropdownMenu.Item>
  <DropdownMenu.Item disabled>删除（无权限）</DropdownMenu.Item>
  <DropdownMenu.Item>复制</DropdownMenu.Item>
</DropdownMenu.Content>
```

## 何时使用

- 提供一组相关操作的入口
- 节省页面空间，隐藏次要功能
- 显示与某个控件相关的选项列表
- 提供分层级的命令或选项
- 实现选择、切换或分组相关功能

## Props / API 属性

### DropdownMenu.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `open` | 受控的打开状态 | `boolean` | — |
| `defaultOpen` | 非受控的默认打开状态 | `boolean` | `false` |
| `onOpenChange` | 打开状态变化时的回调 | `(open: boolean) => void` | — |
| `modal` | 是否以模态模式渲染 | `boolean` | `true` |
| `dir` | 文本方向 | `"ltr" \| "rtl"` | — |

### DropdownMenu.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |

### DropdownMenu.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 菜单尺寸 | `"1" \| "2"` | `"2"` |
| `variant` | 视觉变体 | `"soft" \| "solid"` | `"soft"` |
| `color` | 主题颜色 | `string` | — |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |

### DropdownMenu.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `disabled` | 禁用该菜单项 | `boolean` | `false` |
| `onSelect` | 选中时的回调 | `(event: Event) => void` | — |
| `color` | 单项颜色 | `string` | — |
| `shortcut` | 显示快捷键提示 | `string` | — |

### DropdownMenu.CheckboxItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | — |
| `onCheckedChange` | 选中状态变化回调 | `(checked: boolean) => void` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |
| `shortcut` | 显示快捷键提示 | `string` | — |

### DropdownMenu.RadioGroup

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 当前选中值 | `string` | — |
| `onValueChange` | 选中值变化回调 | `(value: string) => void` | — |

### DropdownMenu.RadioItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该项的值（必填） | `string` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |
| `shortcut` | 显示快捷键提示 | `string` | — |

### DropdownMenu.Sub / SubTrigger / SubContent

用于创建子菜单。`Sub` 包裹 `SubTrigger`（子菜单触发器）和 `SubContent`（子菜单内容）。

### DropdownMenu.TriggerIcon

显示在触发器内的下拉箭头图标，通常放置于触发器文本后面。

### DropdownMenu.Label

分组标签，不可交互，仅用于展示菜单分组名称。

### DropdownMenu.Separator

分隔线，用于在视觉上区分菜单项组。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/dropdown-menu) 获取完整 API 与设计规范。

----- split line -----

## flex (react/flex)

# `react-flex`

Flex 是一个基于 CSS flexbox 布局的容器组件，用于创建灵活的一维布局，无论是行还是列。

## 安装

```sh
pnpm add @sea-lion/react-flex
# 或者
npm install @sea-lion/react-flex
yarn add @sea-lion/react-flex
```

## 使用

在代码中引入组件：

```tsx
import { Flex } from '@sea-lion/react-flex';
```

## 基本使用

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Flex direction="row" align="center" justify="between" gap="4">
    <Text>项目 1</Text>
    <Text>项目 2</Text>
    <Text>项目 3</Text>
  </Flex>
);
```

## 排列方向

Flex 组件支持四种排列方向：

```jsx
{/* 水平排列（默认） */}
<Flex direction="row" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
  <Box>项目 3</Box>
</Flex>

{/* 垂直排列 */}
<Flex direction="column" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>

{/* 水平反向排列 */}
<Flex direction="row-reverse" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>

{/* 垂直反向排列 */}
<Flex direction="column-reverse" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Flex>
```

## 对齐方式

```jsx
{/* 水平对齐（justify） */}
<Flex justify="start" gap="3">{/* 默认，左对齐 */}</Flex>
<Flex justify="center" gap="3">{/* 居中对齐 */}</Flex>
<Flex justify="end" gap="3">{/* 右对齐 */}</Flex>
<Flex justify="between" gap="3">{/* 两端对齐 */}</Flex>

{/* 垂直对齐（align） */}
<Flex align="start" gap="3">{/* 顶部对齐 */}</Flex>
<Flex align="center" gap="3">{/* 垂直居中 */}</Flex>
<Flex align="end" gap="3">{/* 底部对齐 */}</Flex>
<Flex align="baseline" gap="3">{/* 基线对齐 */}</Flex>
<Flex align="stretch" gap="3">{/* 拉伸对齐 */}</Flex>
```

## 间距

Flex 支持 1-9 级间距：

```jsx
<Flex gap="1">{/* 最小间距 */}</Flex>
<Flex gap="3">{/* 小间距 */}</Flex>
<Flex gap="5">{/* 中等间距 */}</Flex>
<Flex gap="9">{/* 最大间距 */}</Flex>
```

## 换行

```jsx
{/* 不换行（默认） */}
<Flex wrap="nowrap" gap="3">
  {/* 超出宽度时会溢出 */}
</Flex>

{/* 自动换行 */}
<Flex wrap="wrap" gap="3">
  {/* 超出宽度时自动换行 */}
</Flex>

{/* 反向换行 */}
<Flex wrap="wrap-reverse" gap="3">
  {/* 超出宽度时反向换行 */}
</Flex>
```

## 响应式布局

```jsx
{/* 在小屏幕上垂直排列，在中等屏幕上水平排列 */}
<Flex
  direction={{ initial: 'column', md: 'row' }}
  gap={{ initial: '2', md: '4' }}
>
  <Box>在小屏幕上垂直排列，在中等屏幕上水平排列</Box>
  <Box>带有不同的间距</Box>
</Flex>
```

## 实用场景

### 导航栏

```jsx
<Flex justify="between" align="center" style={{ padding: '16px', backgroundColor: 'var(--gray-3)' }}>
  <Text size="5" weight="bold">网站名称</Text>
  <Flex gap="4">
    <Button variant="soft">首页</Button>
    <Button variant="soft">产品</Button>
    <Button variant="soft">关于我们</Button>
    <Button>联系我们</Button>
  </Flex>
</Flex>
```

### 卡片布局

```jsx
<Flex gap="4" wrap="wrap">
  {cards.map((card, i) => (
    <Box key={i} style={{ flex: '1 1 200px', padding: '16px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Text size="3" weight="bold" mb="2">{card.title}</Text>
      <Text size="2">{card.description}</Text>
    </Box>
  ))}
</Flex>
```

## 属性

### Flex

| 参数      | 说明                     | 类型                                                    | 默认值   |
| --------- | ------------------------ | ------------------------------------------------------- | -------- |
| as        | 要渲染的 HTML 元素       | 'div' \| 'span'                                         | 'div'    |
| asChild   | 是否将组件作为子元素传递 | boolean                                                 | false    |
| display   | CSS display 属性         | 'none' \| 'inline-flex' \| 'flex'                       | 'flex'   |
| direction | CSS flex-direction 属性  | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'  | 'row'    |
| align     | CSS align-items 属性     | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch' | 'start'  |
| justify   | CSS justify-content 属性 | 'start' \| 'center' \| 'end' \| 'between'               | 'start'  |
| wrap      | CSS flex-wrap 属性       | 'nowrap' \| 'wrap' \| 'wrap-reverse'                    | 'nowrap' |
| gap       | 子元素之间的间距         | '1' - '9'                                               | -        |

Flex 组件还支持所有标准的 margin 和 layout 属性，如`m`、`mt`、`width`、`height`等。

## 何时使用

- 创建水平或垂直方向的布局结构
- 需要灵活分配空间的用户界面
- 对齐和分布子元素
- 构建响应式布局
- 实现导航栏、工具栏等基础 UI 组件


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/flex) 获取完整 API 与设计规范。

----- split line -----

## grid (react/grid)

# `react-grid`

Grid 是一个基于 CSS Grid 布局的容器组件，用于创建灵活的二维布局，能够同时控制行和列。

## 安装

```sh
$ yarn add @sea-lion/react-grid
# 或者
$ npm install @sea-lion/react-grid
```

## 基本使用

```jsx
import { Grid } from "@sea-lion/react-grid";
import { Box } from "@sea-lion/react-box";

export default () => (
  <Grid columns="3" gap="4">
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 1</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 2</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 3</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>项目 4</Box>
  </Grid>
);
```

## 列数与间距

Grid 支持 1-9 的等宽列数设置，并支持多级间距：

```jsx
{/* 两列网格，小间距 */}
<Grid columns="2" gap="2">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
</Grid>

{/* 三列网格，中等间距 */}
<Grid columns="3" gap="3">
  <Box>项目 1</Box>
  <Box>项目 2</Box>
  <Box>项目 3</Box>
</Grid>

{/* 四列网格，较大间距 */}
<Grid columns="4" gap="4">
  {items.map((item, i) => <Box key={i}>{item}</Box>)}
</Grid>
```

## 自定义列宽

使用 CSS grid-template-columns 语法设置自定义列宽：

```jsx
{/* 固定宽度与弹性宽度混合 */}
<Grid columns="200px 1fr 1fr" gap="3">
  <Box>固定宽度 (200px)</Box>
  <Box>弹性宽度 (1fr)</Box>
  <Box>弹性宽度 (1fr)</Box>
</Grid>

{/* 不同比例的弹性宽度 */}
<Grid columns="1fr 2fr 1fr" gap="3">
  <Box>1 份</Box>
  <Box>2 份</Box>
  <Box>1 份</Box>
</Grid>

{/* 最小最大宽度限制 */}
<Grid columns="minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr)" gap="3">
  <Box>最小 100px，最大 1fr</Box>
  <Box>最小 200px，最大 2fr</Box>
  <Box>最小 100px，最大 1fr</Box>
</Grid>
```

## 网格区域布局

使用 `areas` 属性创建具名网格区域，实现复杂的页面布局：

```jsx
<Grid
  areas={`"header header header"
          "sidebar content content"
          "sidebar footer footer"`}
  columns="200px 1fr 1fr"
  rows="auto 1fr auto"
  gap="3"
  style={{ height: '400px' }}
>
  <Box style={{ gridArea: 'header', backgroundColor: 'var(--blue-5)', padding: '16px', borderRadius: '6px' }}>页头</Box>
  <Box style={{ gridArea: 'sidebar', backgroundColor: 'var(--purple-5)', padding: '16px', borderRadius: '6px' }}>侧边栏</Box>
  <Box style={{ gridArea: 'content', backgroundColor: 'var(--green-5)', padding: '16px', borderRadius: '6px' }}>内容区域</Box>
  <Box style={{ gridArea: 'footer', backgroundColor: 'var(--amber-5)', padding: '16px', borderRadius: '6px' }}>页脚</Box>
</Grid>
```

## 对齐方式

```jsx
{/* 顶部对齐（默认） */}
<Grid columns="3" gap="3" align="start" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>项目 {n}</Box>)}
</Grid>

{/* 垂直居中 */}
<Grid columns="3" gap="3" align="center" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>项目 {n}</Box>)}
</Grid>

{/* 底部对齐 */}
<Grid columns="3" gap="3" align="end" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>项目 {n}</Box>)}
</Grid>
```

## 响应式网格

```jsx
{/* 响应式列数：手机1列，平板2列，桌面3列，大屏4列 */}
<Grid
  columns={{ initial: '1', sm: '2', md: '3', lg: '4' }}
  gap={{ initial: '2', md: '4' }}
>
  {items.map((item, i) => <Box key={i}>{item}</Box>)}
</Grid>
```

## 实用场景

### 产品卡片列表

```jsx
<Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="4">
  {products.map((product, i) => (
    <div key={i} style={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <div style={{ height: '200px', backgroundColor: 'var(--blue-3)' }} />
      <div style={{ padding: '16px' }}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>¥{product.price}</span>
      </div>
    </div>
  ))}
</Grid>
```

### 照片画廊

```jsx
<Grid columns={{ initial: '2', sm: '3', md: '4' }} gap="2">
  {photos.map((photo, i) => (
    <div key={i} style={{ paddingTop: '100%', position: 'relative', backgroundColor: 'var(--gray-5)', borderRadius: '6px' }}>
      <img src={photo.url} alt={photo.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
    </div>
  ))}
</Grid>
```

## 何时使用

- 创建复杂的二维布局结构（同时控制行和列）
- 需要按行和列精确排列元素时
- 构建响应式网格系统（卡片列表、图片画廊等）
- 实现仪表盘、后台管理页面等需要灵活布局的界面

## 属性

### Grid

| 参数    | 说明                           | 类型                                                          | 默认值    |
| ------- | ------------------------------ | ------------------------------------------------------------- | --------- |
| as      | 要渲染的 HTML 元素             | 'div' \| 'span'                                               | 'div'     |
| asChild | 是否将组件作为子元素传递       | boolean                                                       | false     |
| display | CSS display 属性               | 'none' \| 'inline-grid' \| 'grid'                             | 'grid'    |
| areas   | CSS grid-template-areas 属性   | string                                                        | -         |
| columns | CSS grid-template-columns 属性 | '1' - '9' \| string                                           | -         |
| rows    | CSS grid-template-rows 属性    | '1' - '9' \| string                                           | -         |
| flow    | CSS grid-auto-flow 属性        | 'row' \| 'column' \| 'dense' \| 'row-dense' \| 'column-dense' | -         |
| align   | CSS align-items 属性           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'       | 'stretch' |
| justify | CSS justify-content 属性       | 'start' \| 'center' \| 'end' \| 'between'                     | 'start'   |
| gap     | 子元素之间的间距               | '1' - '9'                                                     | -         |

Grid 组件还支持所有标准的 margin 和 layout 属性，如`m`、`mt`、`width`、`height`等。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/grid) 获取完整 API 与设计规范。

----- split line -----

## heading (react/heading)

# `react-heading`

Heading 是一个用于显示标题的组件，提供多种级别、尺寸和样式选项，以满足不同层级的标题需求。

## 安装

```sh
pnpm add @sea-lion/react-heading
# 或者
npm install @sea-lion/react-heading
yarn add @sea-lion/react-heading
```

## 使用

在代码中引入组件：

```tsx
import { Heading } from '@sea-lion/react-heading';
```

## 基本使用

```jsx
import { Heading } from "@sea-lion/react-heading";

export default () => (
  <>
    <Heading as="h1" size="9">
      一级标题
    </Heading>
    <Heading as="h2" size="7">
      二级标题
    </Heading>
    <Heading as="h3" size="5">
      三级标题
    </Heading>
    <Heading as="h4" size="3">
      四级标题
    </Heading>
    <Heading as="h5" size="2">
      五级标题
    </Heading>
    <Heading as="h6" size="1">
      六级标题
    </Heading>
  </>
);
```

## 标题尺寸

Heading 提供从 1 到 9 的尺寸范围：

```jsx
<Heading size="9">尺寸 9（最大）</Heading>
<Heading size="8">尺寸 8</Heading>
<Heading size="7">尺寸 7</Heading>
<Heading size="6">尺寸 6（默认）</Heading>
<Heading size="5">尺寸 5</Heading>
<Heading size="4">尺寸 4</Heading>
<Heading size="3">尺寸 3</Heading>
<Heading size="2">尺寸 2</Heading>
<Heading size="1">尺寸 1（最小）</Heading>
```

## 文本粗细

```jsx
<Heading weight="light">Light 粗细</Heading>
<Heading weight="regular">Regular 粗细</Heading>
<Heading weight="medium">Medium 粗细</Heading>
<Heading weight="bold">Bold 粗细（默认）</Heading>
```

## 颜色

```jsx
<Heading color="blue">蓝色标题</Heading>
<Heading color="green">绿色标题</Heading>
<Heading color="red">红色标题</Heading>
<Heading color="amber">琥珀色标题</Heading>
<Heading color="gray">灰色标题</Heading>
```

## 高对比度

```jsx
<Heading color="blue">普通对比度</Heading>
<Heading color="blue" highContrast>高对比度</Heading>
```

## 文本对齐

```jsx
<Heading align="left">左对齐文本</Heading>
<Heading align="center">居中对齐文本</Heading>
<Heading align="right">右对齐文本</Heading>
```

## 文本截断与换行

```jsx
{/* 截断文本，添加省略号 */}
<div style={{ width: '300px' }}>
  <Heading truncate>这是一个非常长的标题，在空间不足时会被截断并显示省略号...</Heading>
</div>

{/* 文本换行控制 */}
<Heading textWrap="balance">使用 balance 换行的标题文本</Heading>
<Heading textWrap="pretty">使用 pretty 换行的标题文本</Heading>
```

## 响应式尺寸

```jsx
<Heading size={{ initial: '3', sm: '5', md: '7', lg: '9' }}>
  响应式标题大小
</Heading>

<Heading align={{ initial: 'left', md: 'center', lg: 'right' }}>
  响应式对齐方式
</Heading>
```

## 实用场景

### 博客文章布局

```jsx
<article>
  <Heading size="8" mb="3">探索现代前端架构的演进</Heading>
  <Heading as="h2" size="5" mt="5" mb="3">前端架构的历史</Heading>
  <p>前端开发领域在过去的十年中经历了剧烈的变革...</p>
  <Heading as="h3" size="3" mt="4" mb="2">单页应用的兴起</Heading>
  <p>随着Ajax的普及和JavaScript框架的发展...</p>
</article>
```

### 产品落地页

```jsx
<div style={{ textAlign: 'center', padding: '48px', background: 'var(--blue-1)' }}>
  <Heading color="blue" size="9" align="center" mb="3">
    未来就在眼前
  </Heading>
  <Heading color="gray" weight="regular" size="4" align="center">
    我们创新的产品让复杂的任务变得简单，帮助您提高工作效率
  </Heading>
</div>
```

## 属性

### Heading

| 参数         | 说明                     | 类型                                         | 默认值 |
| ------------ | ------------------------ | -------------------------------------------- | ------ |
| as           | 要渲染的 HTML 元素       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' | 'h1'   |
| asChild      | 是否将组件作为子元素传递 | boolean                                      | false  |
| size         | 标题文本尺寸             | '1' - '9'                                    | '6'    |
| weight       | 文本粗细                 | 'light' \| 'regular' \| 'medium' \| 'bold'   | 'bold' |
| align        | 文本对齐方式             | 'left' \| 'center' \| 'right'                | -      |
| color        | 文本颜色                 | 'gray' \| 'blue' \| 'green' \| ... (主题色)  | -      |
| highContrast | 是否使用高对比度颜色     | boolean                                      | false  |
| truncate     | 是否截断文本并显示省略号 | boolean                                      | false  |
| textWrap     | 文本换行行为             | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'  | -      |

Heading 组件还支持所有标准的 margin 属性，如 `m`、`mt`、`mb` 等。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/heading) 获取完整 API 与设计规范。

----- split line -----

## hover-card (react/hover-card)

﻿# `react-hover-card`

HoverCard 是一个在用户悬停在触发元素上时显示的卡片组件，用于展示补充内容，不打断用户的操作流程。

## 安装

```sh
$ yarn add @sea-lion/react-hover-card
# 或者
$ npm install @sea-lion/react-hover-card
```

## 基本使用

```jsx
import { HoverCard } from "@sea-lion/react-hover-card";
import { Text } from "@sea-lion/react-text";
import { Flex } from "@sea-lion/react-flex";
import { Avatar } from "@sea-lion/react-avatar";

export default () => (
  <HoverCard.Root>
    <HoverCard.Trigger>
      <Text style={{ cursor: "pointer" }}>@用户名</Text>
    </HoverCard.Trigger>
    <HoverCard.Content>
      <Flex gap="3">
        <Avatar size="3" src="https://example.com/avatar.jpg" fallback="用户" />
        <div>
          <Text weight="bold">用户全名</Text>
          <Text size="2" color="gray">
            @用户名
          </Text>
          <Text size="2" mt="2">
            用户简介信息，在悬停时显示的补充内容。
          </Text>
        </div>
      </Flex>
    </HoverCard.Content>
  </HoverCard.Root>
);
```

## 不同尺寸

HoverCard 提供了不同的尺寸选项，以适应不同的内容需求：

```jsx
// 小尺寸
<HoverCard.Content size="1">
  简洁的内容
</HoverCard.Content>

// 中等尺寸（默认）
<HoverCard.Content size="2">
  标准大小的内容
</HoverCard.Content>

// 大尺寸
<HoverCard.Content size="3">
  更多详细内容
</HoverCard.Content>
```

## 自定义宽度

您可以控制 HoverCard 内容的宽度：

```jsx
// 固定宽度
<HoverCard.Content width="300px">
  内容
</HoverCard.Content>

// 最小宽度和最大宽度
<HoverCard.Content minWidth="200px" maxWidth="400px">
  内容将根据需要在这个范围内调整
</HoverCard.Content>
```

## 延迟控制

卡片默认在悬停 200ms 后显示，离开触发区域 150ms 后关闭，您可以自定义这些延迟：

```jsx
<HoverCard.Root openDelay={300} closeDelay={200}>
  {/* 触发器和内容 */}
</HoverCard.Root>
```

## 属性

### HoverCard.Root

| 参数       | 说明             | 类型   | 默认值 | 版本  |
| ---------- | ---------------- | ------ | ------ | ----- |
| openDelay  | 显示延迟（毫秒） | number | 200    | 0.2.1 |
| closeDelay | 关闭延迟（毫秒） | number | 150    | 0.2.1 |

### HoverCard.Trigger

| 参数    | 说明                                  | 类型    | 默认值 | 版本  |
| ------- | ------------------------------------- | ------- | ------ | ----- |
| asChild | 是否将组件作为子元素传递（总是 true） | boolean | true   | 0.2.1 |

### HoverCard.Content

| 参数      | 说明                     | 类型                         | 默认值  | 版本  |
| --------- | ------------------------ | ---------------------------- | ------- | ----- |
| size      | 卡片尺寸                 | '1' \| '2' \| '3'            | '2'     | 0.2.1 |
| asChild   | 是否将组件作为子元素传递 | boolean                      | false   | 0.2.1 |
| width     | 卡片宽度                 | string                       | -       | 0.2.1 |
| minWidth  | 最小宽度                 | string                       | -       | 0.2.1 |
| maxWidth  | 最大宽度                 | string                       | '480px' | 0.2.1 |
| align     | 对齐方式                 | 'start' \| 'center' \| 'end' | 'start' | 0.2.1 |
| container | 门户容器                 | HTMLElement                  | -       | 0.2.1 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/hover-card) 获取完整 API 与设计规范。

----- split line -----

## icon-button (react/icon-button)

﻿# `react-icon-button`

IconButton 是一个用于展示图标的按钮组件，提供多种尺寸和样式选项。

## 安装

```sh
$ yarn add @sea-lion/react-icon-button
# 或者
$ npm install @sea-lion/react-icon-button
```

## 基本使用

```jsx
import { IconButton } from "@sea-lion/react-icon-button";

export default () => (
  <>
    <IconButton aria-label="关闭">
      <CloseIcon />
    </IconButton>

    <IconButton variant="solid" color="blue" aria-label="添加">
      <PlusIcon />
    </IconButton>

    <IconButton variant="outline" color="amber" aria-label="收藏">
      <StarIcon />
    </IconButton>

    <IconButton variant="ghost" color="red" aria-label="删除">
      <TrashIcon />
    </IconButton>
  </>
);
```

## 不同变体

IconButton 组件支持多种变体样式：

```jsx
// 实心变体
<IconButton variant="solid" aria-label="实心">
  <Icon />
</IconButton>

// 轮廓变体
<IconButton variant="outline" aria-label="轮廓">
  <Icon />
</IconButton>

// 软变体
<IconButton variant="soft" aria-label="软">
  <Icon />
</IconButton>

// 幽灵变体
<IconButton variant="ghost" aria-label="幽灵">
  <Icon />
</IconButton>
```

## 不同尺寸

IconButton 组件提供不同的尺寸选项：

```jsx
// 小尺寸
<IconButton size="1" aria-label="小">
  <Icon />
</IconButton>

// 中等尺寸（默认）
<IconButton size="2" aria-label="中">
  <Icon />
</IconButton>

// 大尺寸
<IconButton size="3" aria-label="大">
  <Icon />
</IconButton>

// 特大尺寸
<IconButton size="4" aria-label="特大">
  <Icon />
</IconButton>
```

## 自定义颜色和圆角

```jsx
// 自定义颜色
<IconButton color="blue" aria-label="蓝色">
  <Icon />
</IconButton>

<IconButton color="green" aria-label="绿色">
  <Icon />
</IconButton>

// 自定义圆角
<IconButton radius="none" aria-label="无圆角">
  <Icon />
</IconButton>

<IconButton radius="full" aria-label="完全圆形">
  <Icon />
</IconButton>
```

## 属性

### IconButton

| 参数         | 说明                 | 类型                                               | 默认值   | 版本  |
| ------------ | -------------------- | -------------------------------------------------- | -------- | ----- |
| size         | 按钮尺寸             | '1' \| '2' \| '3' \| '4'                           | '2'      | 0.2.0 |
| variant      | 按钮变体样式         | 'solid' \| 'outline' \| 'soft' \| 'ghost'          | 'solid'  | 0.2.0 |
| color        | 按钮颜色             | 'gray' \| 'blue' \| 'green' \| ... (主题色)        | 'gray'   | 0.2.0 |
| radius       | 圆角大小             | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | 'medium' | 0.2.0 |
| highContrast | 是否使用高对比度颜色 | boolean                                            | false    | 0.2.0 |
| disabled     | 是否禁用             | boolean                                            | false    | 0.2.0 |

IconButton 组件继承了标准的按钮属性，如 `onClick`、`onFocus` 等，以及所有标准的 margin 属性（如 `m`、`mt`、`mb` 等）。

## 可访问性

当使用 IconButton 时，总是应该提供 `aria-label` 属性，以确保屏幕阅读器用户能够理解按钮的功能。

```jsx
<IconButton aria-label="关闭对话框">
  <CloseIcon />
</IconButton>
```


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/icon-button) 获取完整 API 与设计规范。

----- split line -----

## input (react/input)

﻿# `react-input`

Input 是一个用于收集用户输入的文本字段组件，提供多种样式和变体选项。

## 安装

```sh
pnpm add @sea-lion/react-input
# 或者
npm install @sea-lion/react-input
yarn add @sea-lion/react-input
```

## 使用

在代码中引入组件：

```tsx
import { Input } from '@sea-lion/react-input';
```

## 基本使用

```jsx
import { Input } from "@sea-lion/react-input";

export default () => (
  <>
    <Input.Root placeholder="请输入内容..." />

    {/* 带图标的输入框 */}
    <Input.Root>
      <Input.Slot side="left">
        <SearchIcon />
      </Input.Slot>
      <Input.Slot side="right">
        <ClearIcon />
      </Input.Slot>
    </Input.Root>

    {/* 不同类型的输入框 */}
    <Input.Root type="password" placeholder="请输入密码" />
    <Input.Root type="number" placeholder="请输入数字" />
    <Input.Root type="email" placeholder="请输入邮箱" />
  </>
);
```

## 不同变体

Input 组件支持多种变体样式：

```jsx
// 默认变体 (surface)
<Input.Root variant="surface" placeholder="Surface 变体" />

// 经典变体
<Input.Root variant="classic" placeholder="Classic 变体" />

// 柔和变体
<Input.Root variant="soft" placeholder="Soft 变体" />
```

## 不同尺寸

Input 组件提供不同的尺寸选项：

```jsx
// 小尺寸
<Input.Root size="1" placeholder="小尺寸" />

// 中等尺寸（默认）
<Input.Root size="2" placeholder="中等尺寸" />

// 大尺寸
<Input.Root size="3" placeholder="大尺寸" />
```

## 自定义颜色和圆角

```jsx
// 自定义颜色
<Input.Root color="blue" placeholder="蓝色输入框" />
<Input.Root color="green" placeholder="绿色输入框" />

// 自定义圆角
<Input.Root radius="full" placeholder="完全圆角" />
<Input.Root radius="none" placeholder="无圆角" />
```

## 带图标或辅助元素

```jsx
// 带前置图标
<Input.Root>
  <Input.Slot side="left">
    <UserIcon />
  </Input.Slot>
  <Input.Slot side="right">
    <InfoIcon />
  </Input.Slot>
</Input.Root>

// 带单位指示器
<Input.Root>
  <Input.Slot side="right">￥</Input.Slot>
</Input.Root>

// 带验证按钮
<Input.Root>
  <Input.Slot side="right">
    <Button>验证</Button>
  </Input.Slot>
</Input.Root>
```

## 属性

### Input.Root

| 参数         | 说明           | 类型                                                       | 默认值    | 版本  |
| ------------ | -------------- | ---------------------------------------------------------- | --------- | ----- |
| size         | 输入框尺寸     | '1' \| '2' \| '3'                                          | '2'       | 0.2.0 |
| variant      | 输入框变体样式 | 'classic' \| 'surface' \| 'soft'                           | 'surface' | 0.2.0 |
| color        | 输入框主题色   | 'gray' \| 'blue' \| 'green' \| ... (主题色)                | -         | 0.2.0 |
| radius       | 圆角大小       | 'none' \| '1' - '6' \| 'full'                              | -         | 0.2.0 |
| type         | 输入框类型     | 'text' \| 'password' \| 'email' \| ... (HTML5 input types) | 'text'    | 0.2.0 |
| value        | 输入框的值     | string \| number                                           | -         | 0.2.0 |
| defaultValue | 输入框的默认值 | string \| number                                           | -         | 0.2.0 |

Input.Root 组件还支持所有标准的 margin 属性（如 `m`、`mt`、`mb` 等）和 HTML input 元素的标准属性（如 `onChange`、`onFocus` 等）。

### Input.Slot

| 参数  | 说明         | 类型              | 默认值 | 版本  |
| ----- | ------------ | ----------------- | ------ | ----- |
| side  | 插槽位置     | 'left' \| 'right' | -      | 0.2.0 |
| color | 插槽内容颜色 | (主题色)          | -      | 0.2.0 |
| gap   | 插槽内部间距 | '1' - '9'         | -      | 0.2.0 |
| px    | 水平内边距   | '1' - '9'         | -      | 0.2.0 |
| pl    | 左内边距     | '1' - '9'         | -      | 0.2.0 |
| pr    | 右内边距     | '1' - '9'         | -      | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/text-field) 获取完整 API 与设计规范。

----- split line -----

## inset (react/inset)

﻿# `react-inset`

Inset 是一个容器组件，用于创建负边距效果，可以将内容向外延伸超出父元素的边界。

## 安装

```sh
$ yarn add @sea-lion/react-inset
# 或者
$ npm install @sea-lion/react-inset
```

## 基本使用

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
      <h3>带有 Inset 的卡片</h3>
      <p>Inset 组件使图片可以扩展到容器边缘，无需额外边距</p>
    </div>
  </div>
);
```

## 不同边的 Inset

Inset 组件可以应用于容器的不同边：

```jsx
// 应用于顶部
<Inset side="top">
  <img src="/banner.jpg" />
</Inset>

// 应用于底部
<Inset side="bottom">
  <div className="footer-content" />
</Inset>

// 应用于左侧
<Inset side="left">
  <div className="sidebar" />
</Inset>

// 应用于右侧
<Inset side="right">
  <div className="right-panel" />
</Inset>

// 应用于水平方向
<Inset side="x">
  <div className="horizontal-content" />
</Inset>

// 应用于垂直方向
<Inset side="y">
  <div className="vertical-content" />
</Inset>
```

## 裁剪方式

Inset 支持不同的裁剪方式：

```jsx
// 边框盒裁剪（默认）
<Inset clip="border-box">
  <img src="/image.jpg" />
</Inset>

// 内边距盒裁剪
<Inset clip="padding-box">
  <img src="/image.jpg" />
</Inset>
```

## 内边距控制

```jsx
// 保持当前内边距
<Inset p="current">
  <div className="content" />
</Inset>

// 移除内边距
<Inset p="0">
  <div className="content" />
</Inset>

// 控制特定方向的内边距
<Inset px="0" py="current">
  <div className="content" />
</Inset>
```

## 属性

### Inset

| 参数 | 说明            | 类型                                                          | 默认值       | 版本  |
| ---- | --------------- | ------------------------------------------------------------- | ------------ | ----- |
| side | 应用 Inset 的边 | 'all' \| 'x' \| 'y' \| 'top' \| 'bottom' \| 'left' \| 'right' | 'all'        | 0.2.0 |
| clip | 裁剪盒模型      | 'border-box' \| 'padding-box'                                 | 'border-box' | 0.2.0 |
| p    | 所有方向内边距  | 'current' \| '0'                                              | -            | 0.2.0 |
| px   | 水平方向内边距  | 'current' \| '0'                                              | -            | 0.2.0 |
| py   | 垂直方向内边距  | 'current' \| '0'                                              | -            | 0.2.0 |
| pt   | 顶部内边距      | 'current' \| '0'                                              | -            | 0.2.0 |
| pr   | 右侧内边距      | 'current' \| '0'                                              | -            | 0.2.0 |
| pb   | 底部内边距      | 'current' \| '0'                                              | -            | 0.2.0 |
| pl   | 左侧内边距      | 'current' \| '0'                                              | -            | 0.2.0 |

Inset 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/inset) 获取完整 API 与设计规范。

----- split line -----

## kbd (react/kbd)

# `react-kbd`

Kbd 是一个用于显示键盘按键或快捷键的组件，适用于教程、帮助文档等场景。

## 安装

```sh
$ yarn add @sea-lion/react-kbd
# 或者
$ npm install @sea-lion/react-kbd
```

## 基本使用

```jsx
import { Kbd } from "@sea-lion/react-kbd";

export default () => (
  <div>
    按下 <Kbd>Tab</Kbd> 键切换焦点，使用 <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> 反向切换焦点。
  </div>
);
```

## 不同尺寸

Kbd 组件提供了多种尺寸选择（1-9）：

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

## 组合键

展示键盘组合键：

```jsx
<div>
  保存文件：<Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
</div>

<div>
  复制内容：<Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>

<div>
  粘贴内容：<Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
</div>

<div>
  全选内容：<Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>
</div>

<div>
  撤销操作：<Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd>
</div>

<div>
  重做操作：<Kbd>Ctrl</Kbd> + <Kbd>Y</Kbd> 或 <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd>
</div>
```

## 编辑器快捷键面板

```jsx
<div style={{ background: 'var(--gray-2)', padding: '12px', borderRadius: '6px', maxWidth: '400px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>保存文件</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>查找文本</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>F</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>替换文本</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>H</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>跳转到行</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>G</Kbd></span>
  </div>
</div>
```

## 游戏控制键示意

```jsx
<div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <Kbd>W</Kbd>
    <div style={{ display: 'flex', gap: '4px' }}>
      <Kbd>A</Kbd><Kbd>S</Kbd><Kbd>D</Kbd>
    </div>
  </div>
  <p>使用 WASD 控制角色移动</p>
</div>
```

## 网页浏览快捷键

```jsx
<p>
  按 <Kbd>Tab</Kbd> 在页面元素间导航
</p>

<p>
  按 <Kbd>Space</Kbd> 或 <Kbd>Page Down</Kbd> 滚动页面
</p>

<p>
  按 <Kbd>Home</Kbd> 返回页面顶部，<Kbd>End</Kbd> 到达页面底部
</p>

<p>
  按 <Kbd>Ctrl</Kbd> + <Kbd>+</Kbd> 放大页面，<Kbd>Ctrl</Kbd> + <Kbd>-</Kbd> 缩小页面
</p>

<p>
  按 <Kbd>F11</Kbd> 切换全屏模式
</p>
```

## 何时使用

- 在文档或教程中展示键盘快捷键
- 在应用界面中提示用户可用的键盘操作
- 在帮助页面中展示键盘导航指令
- 构建快捷键参考面板或帮助中心

## 属性

### Kbd

| 参数    | 说明                           | 类型                                                        | 默认值 |
| ------- | ------------------------------ | ----------------------------------------------------------- | ------ |
| size    | 按键尺寸                       | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -      |
| asChild | 将组件的样式和行为应用于子元素 | boolean                                                     | false  |

Kbd 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/kbd) 获取完整 API 与设计规范。

----- split line -----

## link (react/link)

﻿# `react-link`

Link 是一个链接组件，用于在页面间跳转或打开外部资源，支持自定义样式和各种交互状态。

## 安装

```sh
pnpm add @sea-lion/react-link
# 或者
npm install @sea-lion/react-link
yarn add @sea-lion/react-link
```

## 使用

在代码中引入组件：

```tsx
import { Link } from '@sea-lion/react-link';
```

## 基本使用

```jsx
import { Link } from "@sea-lion/react-link";

export default () => (
  <div>
    <Link href="https://example.com">点击访问示例网站</Link>
  </div>
);
```

## 不同尺寸

Link 组件提供了多种尺寸选择：

```jsx
<Link size="1" href="#">尺寸 1</Link>
<Link size="2" href="#">尺寸 2</Link>
<Link size="3" href="#">尺寸 3</Link>
<Link size="4" href="#">尺寸 4</Link>
<Link size="5" href="#">尺寸 5</Link>
<Link size="6" href="#">尺寸 6</Link>
<Link size="7" href="#">尺寸 7</Link>
<Link size="8" href="#">尺寸 8</Link>
<Link size="9" href="#">尺寸 9</Link>
```

## 下划线样式

Link 组件提供了多种下划线样式：

```jsx
<Link underline="auto" href="#">自动下划线（默认）</Link>
<Link underline="always" href="#">始终显示下划线</Link>
<Link underline="hover" href="#">悬停时显示下划线</Link>
<Link underline="none" href="#">无下划线</Link>
```

## 文本样式

Link 组件继承了 Text 组件的样式属性：

```jsx
<Link weight="bold" href="#">粗体链接</Link>
<Link truncate href="#">这是一个很长的文本，将会被截断...</Link>
<Link textWrap="nowrap" href="#">不换行文本</Link>
```

## 颜色变体

```jsx
<Link color="blue" href="#">蓝色链接</Link>
<Link color="green" href="#">绿色链接</Link>
<Link color="red" href="#">红色链接</Link>
<Link highContrast href="#">高对比度</Link>
```

## 自定义元素

使用 `asChild` 可以将链接样式应用到自定义元素上：

```jsx
<Link asChild>
  <CustomComponent>自定义组件链接</CustomComponent>
</Link>
```

## 与其他组件结合

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

<Flex gap="2" align="center">
  <Text>查看我们的</Text>
  <Link href="/about">关于我们</Link>
  <Text>页面获取更多信息</Text>
</Flex>;
```

## 属性

### Link

| 参数         | 说明                           | 类型                                                        | 默认值    | 版本  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | --------- | ----- |
| size         | 链接尺寸                       | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -         | 0.2.0 |
| weight       | 字重                           | 'light' \| 'regular' \| 'medium' \| 'bold'                  | 'regular' | 0.2.0 |
| underline    | 下划线样式                     | 'auto' \| 'always' \| 'hover' \| 'none'                     | 'auto'    | 0.2.0 |
| color        | 颜色                           | 标准颜色                                                    | -         | 0.2.0 |
| highContrast | 高对比度模式                   | boolean                                                     | false     | 0.2.0 |
| truncate     | 文本截断                       | boolean                                                     | false     | 0.2.0 |
| textWrap     | 文本换行方式                   | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | 'wrap'    | 0.2.0 |
| asChild      | 将组件的样式和行为应用于子元素 | boolean                                                     | false     | 0.2.0 |

Link 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）和 `a` 元素的所有属性（如 `href`、`target` 等）。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/link) 获取完整 API 与设计规范。

----- split line -----

## oss-icon (react/oss-icon)

# `react-oss-icon`

OssIcon (IconFont) 是基于 [iconfont 平台](https://www.iconfont.cn/) 的图标组件，支持通过 **Font-class**（.css）或 **Symbol**（.js）资源地址加载图标。

## 安装

```sh
pnpm add @sea-lion/react-oss-icon
# 或者
npm install @sea-lion/react-oss-icon
yarn add @sea-lion/react-oss-icon
```

## 使用

在代码中引入组件：

```tsx
import { IconFont } from '@sea-lion/react-oss-icon';
```

### 基本用法

```jsx
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.css" icon="icon-xxx" />
<IconFont ossUrl={cssUrl} icon="icon-name" size="2" color="blue" />
```

### 与 iconfont 平台对接

- **Font-class 引用**：`ossUrl` 传入项目生成的 **.css** 链接，使用方式为 `<IconFont icon="icon-图标名" />`。
- **Symbol 引用**：`ossUrl` 传入项目生成的 **.js** 链接，组件会动态注入脚本。
- 支持协议相对地址（`//...`），会自动补全为 `https:`。

## 何时使用

- 需要使用团队 iconfont 项目中的图标时
- 需要与现有 iconfont 图标体系保持一致时
- 需要轻量、可配置颜色与尺寸的图标展示时


----- split line -----

## popover (react/popover)

﻿# `react-popover`

Popover 是一个弹出式组件，用于显示与触发元素相关的临时内容，如附加信息、操作菜单等。

## 安装

```sh
$ yarn add @sea-lion/react-popover
# 或者
$ npm install @sea-lion/react-popover
```

## 基本使用

```jsx
import * as Popover from "@sea-lion/react-popover";
import { Button } from "@sea-lion/react-button";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Popover.Root>
    <Popover.Trigger>
      <Button>点击显示</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Text>这是弹出的内容</Text>
    </Popover.Content>
  </Popover.Root>
);
```

## 不同尺寸

Popover.Content 组件提供了四种尺寸：

```jsx
<Popover.Content size="1">尺寸 1</Popover.Content>
<Popover.Content size="2">尺寸 2（默认）</Popover.Content>
<Popover.Content size="3">尺寸 3</Popover.Content>
<Popover.Content size="4">尺寸 4</Popover.Content>
```

## 宽度控制

```jsx
<Popover.Content width="300px">固定宽度</Popover.Content>
<Popover.Content minWidth="200px">最小宽度</Popover.Content>
<Popover.Content maxWidth="400px">最大宽度</Popover.Content>
```

## 高度控制

```jsx
<Popover.Content height="200px">固定高度</Popover.Content>
<Popover.Content minHeight="100px">最小高度</Popover.Content>
<Popover.Content maxHeight="300px">最大高度</Popover.Content>
```

## 自定义关闭行为

```jsx
<Popover.Root>
  <Popover.Trigger>
    <Button>打开</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Text>弹出内容</Text>
    <Popover.Close>
      <Button>关闭</Button>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>
```

## 使用锚点

```jsx
<Popover.Root>
  <Popover.Anchor>
    <div>锚点元素</div>
  </Popover.Anchor>
  <Popover.Trigger>
    <Button>点击显示</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Text>弹出内容</Text>
  </Popover.Content>
</Popover.Root>
```

## 属性

### Popover.Root

| 参数         | 说明                         | 类型                    | 默认值 | 版本  |
| ------------ | ---------------------------- | ----------------------- | ------ | ----- |
| open         | 控制弹出的打开状态           | boolean                 | -      | 0.2.1 |
| defaultOpen  | 默认的打开状态               | boolean                 | false  | 0.2.1 |
| onOpenChange | 开关状态改变时的回调         | (open: boolean) => void | -      | 0.2.1 |
| modal        | 是否为模态，阻止与外部的交互 | boolean                 | false  | 0.2.1 |

### Popover.Content

| 参数       | 说明                           | 类型                     | 默认值  | 版本  |
| ---------- | ------------------------------ | ------------------------ | ------- | ----- |
| size       | 弹出内容的尺寸                 | '1' \| '2' \| '3' \| '4' | '2'     | 0.2.1 |
| width      | 宽度                           | string                   | -       | 0.2.1 |
| minWidth   | 最小宽度                       | string                   | -       | 0.2.1 |
| maxWidth   | 最大宽度                       | string                   | '480px' | 0.2.1 |
| height     | 高度                           | string                   | -       | 0.2.1 |
| minHeight  | 最小高度                       | string                   | -       | 0.2.1 |
| maxHeight  | 最大高度                       | string                   | -       | 0.2.1 |
| forceMount | 强制加载组件                   | boolean                  | -       | 0.2.1 |
| container  | 指定挂载容器                   | HTMLElement              | -       | 0.2.1 |
| asChild    | 将组件的样式和行为应用于子元素 | boolean                  | false   | 0.2.1 |

### Popover.Trigger

| 参数    | 说明                           | 类型    | 默认值 | 版本  |
| ------- | ------------------------------ | ------- | ------ | ----- |
| asChild | 将组件的样式和行为应用于子元素 | boolean | true   | 0.2.1 |

### Popover.Close

| 参数    | 说明                           | 类型    | 默认值 | 版本  |
| ------- | ------------------------------ | ------- | ------ | ----- |
| asChild | 将组件的样式和行为应用于子元素 | boolean | true   | 0.2.1 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/popover) 获取完整 API 与设计规范。

----- split line -----

## progress (react/progress)

# `react-progress`

Progress 是一个进度指示器组件，用于显示操作完成的进度或加载状态。

## 安装

```sh
$ yarn add @sea-lion/react-progress
# 或者
$ npm install @sea-lion/react-progress
```

## 基本使用

```jsx
import { Progress } from "@sea-lion/react-progress";

export default () => <Progress value={40} />;
```

## 不同尺寸

Progress 组件提供了三种尺寸：

```jsx
<Progress size="1" value={60} />
<Progress size="2" value={60} /> {/* 默认尺寸 */}
<Progress size="3" value={60} />
```

## 不同变体

Progress 组件提供了三种变体样式：

```jsx
<Progress variant="classic" value={60} />
<Progress variant="surface" value={60} /> {/* 默认样式 */}
<Progress variant="soft" value={60} />
```

## 自定义颜色

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="green" />
<Progress value={60} color="red" />
<Progress value={60} color="purple" />
<Progress value={60} color="orange" />
<Progress value={60} color="amber" />
```

## 圆角设置

使用 `radius` 属性自定义进度条的圆角样式：

```jsx
<Progress value={60} radius="none" />
<Progress value={60} radius="small" />
<Progress value={60} radius="medium" />
<Progress value={60} radius="large" />
<Progress value={60} radius="full" />
```

## 不确定状态

当不提供 `value` 属性时，Progress 会展示为不确定状态的加载指示器：

```jsx
<Progress />
<Progress color="blue" />
<Progress color="green" />
```

## 自定义动画持续时间

```jsx
<Progress duration="2s" />   {/* 快速 */}
<Progress duration="5s" />   {/* 默认 */}
<Progress duration="10s" />  {/* 缓慢 */}
```

## 高对比度模式

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="blue" highContrast />
```

## 动态进度条

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
          if (prev >= 100) { setIsRunning(false); return 100; }
          return prev + 5;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <Progress value={progress} />
      <button onClick={() => { setProgress(0); setIsRunning(true); }}>
        开始
      </button>
      <span>{progress}%</span>
    </div>
  );
};
```

## 实用场景

### 文件上传进度

```jsx
<div>
  <Progress value={uploadProgress} color="blue" size="2" />
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>正在上传...</span>
    <span>{uploadProgress}%</span>
  </div>
</div>
```

### 加载状态

```jsx
<div>
  <p>正在加载数据，请稍候...</p>
  <Progress color="purple" variant="surface" size="2" />
</div>
```

## 何时使用

- 需要显示任务或操作的完成进度时
- 需要表示加载状态或处理过程时
- 展示文件上传、下载进度时
- 需要给用户提供视觉反馈，表明任务正在进行中时

## 属性

| 参数         | 说明         | 类型                                               | 默认值    |
| ------------ | ------------ | -------------------------------------------------- | --------- |
| size         | 进度条尺寸   | '1' \| '2' \| '3'                                  | '2'       |
| variant      | 变体样式     | 'classic' \| 'surface' \| 'soft'                   | 'surface' |
| color        | 颜色         | 标准颜色值                                         | -         |
| highContrast | 高对比度模式 | boolean                                            | false     |
| radius       | 圆角半径     | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         |
| duration     | 动画持续时间 | `${number}s` \| `${number}ms`                      | '5s'      |
| value        | 当前进度值   | number                                             | -         |
| max          | 最大进度值   | number                                             | 100       |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/progress) 获取完整 API 与设计规范。

----- split line -----

## radio-card (react/radio-card)

﻿# `react-radio-card`

RadioCard 是一个卡片式单选按钮组件，用于在一组选项中以卡片的形式选择一个选项。

## 安装

```sh
$ yarn add @sea-lion/react-radio-card
# 或者
$ npm install @sea-lion/react-radio-card
```

## 基本使用

```jsx
import * as RadioCards from "@sea-lion/react-radio-card";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioCards.Root value={value} onValueChange={setValue}>
      <RadioCards.Item value="option1">选项 1</RadioCards.Item>
      <RadioCards.Item value="option2">选项 2</RadioCards.Item>
      <RadioCards.Item value="option3">选项 3</RadioCards.Item>
    </RadioCards.Root>
  );
};
```

## 不同尺寸

RadioCards 组件提供了三种尺寸：

```jsx
<RadioCards.Root size="1">
  {/* 小尺寸 */}
</RadioCards.Root>

<RadioCards.Root size="2">
  {/* 默认尺寸 */}
</RadioCards.Root>

<RadioCards.Root size="3">
  {/* 大尺寸 */}
</RadioCards.Root>
```

## 不同变体

RadioCards 组件提供了两种变体样式：

```jsx
<RadioCards.Root variant="surface">
  {/* 默认样式 */}
</RadioCards.Root>

<RadioCards.Root variant="classic">
  {/* 经典样式 */}
</RadioCards.Root>
```

## 自定义颜色

```jsx
<RadioCards.Root color="blue">
  {/* 蓝色主题 */}
</RadioCards.Root>

<RadioCards.Root color="green">
  {/* 绿色主题 */}
</RadioCards.Root>

<RadioCards.Root color="red">
  {/* 红色主题 */}
</RadioCards.Root>
```

## 高对比度模式

```jsx
<RadioCards.Root highContrast>{/* 高对比度模式 */}</RadioCards.Root>
```

## 自定义网格布局

RadioCards 组件支持自定义列布局和间距：

```jsx
<RadioCards.Root columns="2" gap="3">
  {/* 两列布局，间距为3 */}
</RadioCards.Root>

<RadioCards.Root columns="3" gap="4">
  {/* 三列布局，间距为4 */}
</RadioCards.Root>

<RadioCards.Root columns="repeat(auto-fit, minmax(200px, 1fr))" gap="5">
  {/* 响应式布局 */}
</RadioCards.Root>
```

## 带图标的选项

```jsx
import { PersonIcon, GearIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@sea-lion/react-flex";

<RadioCards.Root>
  <RadioCards.Item value="profile">
    <Flex gap="2" align="center">
      <PersonIcon />
      <Text>个人资料</Text>
    </Flex>
  </RadioCards.Item>
  <RadioCards.Item value="settings">
    <Flex gap="2" align="center">
      <GearIcon />
      <Text>设置</Text>
    </Flex>
  </RadioCards.Item>
</RadioCards.Root>;
```

## 禁用状态

```jsx
<RadioCards.Root>
  <RadioCards.Item value="option1">选项 1</RadioCards.Item>
  <RadioCards.Item value="option2" disabled>
    选项 2 (禁用)
  </RadioCards.Item>
  <RadioCards.Item value="option3">选项 3</RadioCards.Item>
</RadioCards.Root>
```

## Root 属性

| 参数          | 说明               | 类型                    | 默认值                               | 版本  |
| ------------- | ------------------ | ----------------------- | ------------------------------------ | ----- |
| size          | 卡片尺寸           | '1' \| '2' \| '3'       | '2'                                  | 0.2.0 |
| variant       | 变体样式           | 'surface' \| 'classic'  | 'surface'                            | 0.2.0 |
| color         | 颜色               | 标准颜色                | -                                    | 0.2.0 |
| highContrast  | 高对比度模式       | boolean                 | false                                | 0.2.0 |
| columns       | 网格列布局         | string                  | repeat(auto-fit, minmax(160px, 1fr)) | 0.2.0 |
| gap           | 网格间距           | string                  | '4'                                  | 0.2.0 |
| value         | 选中的值           | string                  | -                                    | 0.2.0 |
| defaultValue  | 默认选中的值       | string                  | -                                    | 0.2.0 |
| onValueChange | 值变化时的回调函数 | (value: string) => void | -                                    | 0.2.0 |

## Item 属性

| 参数     | 说明     | 类型    | 默认值 | 版本  |
| -------- | -------- | ------- | ------ | ----- |
| value    | 选项的值 | string  | -      | 0.2.0 |
| disabled | 是否禁用 | boolean | false  | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/radio-cards) 获取完整 API 与设计规范。

----- split line -----

## radio-group (react/radio-group)

﻿# `react-radio-group`

RadioGroup 是一个单选按钮组组件，用于在一组选项中选择一个选项。

## 安装

```sh
pnpm add @sea-lion/react-radio-group
# 或者
npm install @sea-lion/react-radio-group
yarn add @sea-lion/react-radio-group
```

## 使用

在代码中引入组件：

```tsx
import * as RadioGroup from '@sea-lion/react-radio-group';
```

## 何时使用

- 需要在一组互斥选项中选择一个选项时
- 选项数量较少且可以同时显示在界面上
- 需要用户做出明确选择时

## 基本使用

```jsx
import * as RadioGroup from "@sea-lion/react-radio-group";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Item value="option1">选项 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">选项 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">选项 3</RadioGroup.Item>
    </RadioGroup.Root>
  );
};
```

## 不同尺寸

RadioGroup 组件提供了三种尺寸：

```jsx
<RadioGroup.Root size="1">
  <RadioGroup.Item value="small">小尺寸 (size="1")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="2">
  <RadioGroup.Item value="medium">默认尺寸 (size="2")</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root size="3">
  <RadioGroup.Item value="large">大尺寸 (size="3")</RadioGroup.Item>
</RadioGroup.Root>
```

## 不同变体

RadioGroup 组件提供了三种变体样式：

```jsx
<RadioGroup.Root variant="surface">
  <RadioGroup.Item value="surface">surface 变体</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="classic">
  <RadioGroup.Item value="classic">classic 变体</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root variant="soft">
  <RadioGroup.Item value="soft">soft 变体</RadioGroup.Item>
</RadioGroup.Root>
```

## 自定义颜色

```jsx
<RadioGroup.Root color="blue">
  <RadioGroup.Item value="blue">蓝色</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="green">
  <RadioGroup.Item value="green">绿色</RadioGroup.Item>
</RadioGroup.Root>

<RadioGroup.Root color="red">
  <RadioGroup.Item value="red">红色</RadioGroup.Item>
</RadioGroup.Root>
```

## 高对比度模式

```jsx
<RadioGroup.Root highContrast>
  <RadioGroup.Item value="high-contrast">高对比度</RadioGroup.Item>
</RadioGroup.Root>
```

## 禁用状态

```jsx
<RadioGroup.Root>
  <RadioGroup.Item value="enabled">启用状态</RadioGroup.Item>
  <RadioGroup.Item value="disabled" disabled>
    禁用状态
  </RadioGroup.Item>
</RadioGroup.Root>
```

## 自定义布局

RadioGroup 组件默认是垂直布局，但您可以使用样式来创建水平布局：

```jsx
<RadioGroup.Root style={{ flexDirection: "row", gap: "10px" }}>
  <RadioGroup.Item value="option1">选项 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">选项 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">选项 3</RadioGroup.Item>
</RadioGroup.Root>
```

## Root 属性

| 参数          | 说明           | 类型                             | 默认值    | 版本  |
| ------------- | -------------- | -------------------------------- | --------- | ----- |
| size          | 单选按钮尺寸   | '1' \| '2' \| '3'                | '2'       | 0.2.0 |
| variant       | 变体样式       | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0 |
| color         | 颜色           | 标准颜色                         | -         | 0.2.0 |
| highContrast  | 高对比度模式   | boolean                          | false     | 0.2.0 |
| value         | 当前选中的值   | string                           | -         | 0.2.0 |
| defaultValue  | 默认选中的值   | string                           | -         | 0.2.0 |
| onValueChange | 值变化时的回调 | (value: string) => void          | -         | 0.2.0 |

## Item 属性

| 参数     | 说明     | 类型    | 默认值 | 版本  |
| -------- | -------- | ------- | ------ | ----- |
| value    | 选项的值 | string  | -      | 0.2.0 |
| disabled | 是否禁用 | boolean | false  | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/radio-group) 获取完整 API 与设计规范。

----- split line -----

## radio (react/radio)

# `react-radio`

Radio 是一个单选按钮组件，用于在一组选项中选择一个选项。

## 安装

```sh
$ yarn add @sea-lion/react-radio
# 或者
$ npm install @sea-lion/react-radio
```

## 基本使用

```jsx
import { Radio } from "@sea-lion/react-radio";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("选项1");

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          value="选项1"
          checked={value === "选项1"}
          onValueChange={setValue}
          name="radio-group"
        />
        选项1
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          value="选项2"
          checked={value === "选项2"}
          onValueChange={setValue}
          name="radio-group"
        />
        选项2
      </div>
    </div>
  );
};
```

## 不同尺寸

Radio 组件提供了三种尺寸：

```jsx
<Radio size="1" value="s1" defaultChecked name="s1" /> {/* 小尺寸 */}
<Radio size="2" value="s2" defaultChecked name="s2" /> {/* 默认尺寸 */}
<Radio size="3" value="s3" defaultChecked name="s3" /> {/* 大尺寸 */}
```

## 自定义颜色

```jsx
<Radio value="default" defaultChecked name="c1" />           {/* 默认颜色 */}
<Radio value="blue" color="blue" defaultChecked name="c2" /> {/* 蓝色 */}
<Radio value="green" color="green" defaultChecked name="c3" /> {/* 绿色 */}
<Radio value="red" color="red" defaultChecked name="c4" /> {/* 红色 */}
<Radio value="purple" color="purple" defaultChecked name="c5" /> {/* 紫色 */}
<Radio value="orange" color="orange" defaultChecked name="c6" /> {/* 橙色 */}
```

## 禁用状态

```jsx
<Radio disabled value="d1" name="d1" />             {/* 禁用未选中 */}
<Radio disabled defaultChecked value="d2" name="d2" /> {/* 禁用已选中 */}
```

## 高对比度模式

```jsx
<Radio value="c1" defaultChecked name="contrast1" />                    {/* 普通对比度 */}
<Radio value="c2" highContrast defaultChecked name="contrast2" />        {/* 高对比度 */}
<Radio value="c3" color="blue" defaultChecked name="contrast3" />        {/* 普通对比度（蓝色）*/}
<Radio value="c4" color="blue" highContrast defaultChecked name="contrast4" /> {/* 高对比度（蓝色） */}
```

## 分组使用

当需要在一组选项中选择一个时，可以使用相同的 `name` 属性将它们分组：

```jsx
const [fruit, setFruit] = useState("apple");

<div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="apple" checked={fruit === "apple"} onValueChange={setFruit} />
    苹果
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="banana" checked={fruit === "banana"} onValueChange={setFruit} />
    香蕉
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="orange" checked={fruit === "orange"} onValueChange={setFruit} />
    橙子
  </div>
</div>
```

## 实用场景

### 个人信息表单

```jsx
const [gender, setGender] = useState("male");
const [education, setEducation] = useState("bachelor");

<form>
  <div>
    <p>性别</p>
    <div style={{ display: 'flex', gap: '16px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio name="gender" value="male" checked={gender === "male"} onValueChange={setGender} />
        男
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio name="gender" value="female" checked={gender === "female"} onValueChange={setGender} />
        女
      </label>
    </div>
  </div>

  <div>
    <p>最高学历</p>
    {['高中', '本科', '硕士', '博士'].map((level, i) => (
      <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <Radio name="education" value={level} checked={education === level} onValueChange={setEducation} />
        {level}
      </label>
    ))}
  </div>
</form>
```

### 选项偏好切换

```jsx
const [preference, setPreference] = useState("option1");

<div>
  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
    {['选项一', '选项二', '选项三'].map((opt, i) => (
      <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
  <div style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: '4px' }}>
    当前选中：{preference}
  </div>
</div>
```

## 何时使用

- 用户需要在一组互斥选项中做单选时
- 选项数量较少且可全部显示时（通常不超过 7 个）
- 需要立即提交选择结果，无需确认操作时
- 相比下拉框，需要让用户直观地看到所有可选项时

## 属性

| 参数           | 说明                     | 类型                    | 默认值 |
| -------------- | ------------------------ | ----------------------- | ------ |
| size           | 单选按钮尺寸             | '1' \| '2' \| '3'       | '2'    |
| color          | 颜色                     | 标准颜色                | -      |
| highContrast   | 高对比度模式             | boolean                 | false  |
| value          | 单选按钮的值             | string                  | -      |
| checked        | 是否选中                 | boolean                 | false  |
| defaultChecked | 默认是否选中             | boolean                 | false  |
| disabled       | 是否禁用                 | boolean                 | false  |
| name           | 单选按钮名称（用于分组） | string                  | -      |
| onValueChange  | 值变化时的回调函数       | (value: string) => void | -      |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/radio) 获取完整 API 与设计规范。

----- split line -----

## reset (react/reset)

# `react-reset`

Reset 是一个样式重置组件，用于清除 HTML 元素的默认样式，确保在不同浏览器中的一致外观。

## 安装

```sh
$ yarn add @sea-lion/react-reset
# 或者
$ npm install @sea-lion/react-reset
```

## 基本使用

```jsx
import { Reset } from "@sea-lion/react-reset";

export default () => {
  return (
    <Reset>
      <button>这是一个没有默认样式的按钮</button>
    </Reset>
  );
};
```

## HTML 元素重置

Reset 组件可以应用于各种 HTML 元素，清除其默认样式：

```jsx
{/* 重置输入框 */}
<Reset>
  <input type="text" placeholder="无默认样式的输入框" />
</Reset>

{/* 重置列表 */}
<Reset>
  <ul>
    <li>无默认样式的列表项 1</li>
    <li>无默认样式的列表项 2</li>
  </ul>
</Reset>

{/* 重置链接 */}
<Reset>
  <a href="#">无默认样式的链接</a>
</Reset>

{/* 重置单选按钮 */}
<Reset>
  <input type="radio" />
</Reset>

{/* 重置复选框 */}
<Reset>
  <input type="checkbox" />
</Reset>
```

## 组合使用

Reset 组件通常作为其他组件的基础，可以与其他样式组件结合使用：

```jsx
import { Reset } from "@sea-lion/react-reset";
import { Box } from "@sea-lion/react-box";

export default () => {
  return (
    <Reset>
      <Box padding="4" background="gray-3" borderRadius="3">
        <button>组合样式的按钮</button>
      </Box>
    </Reset>
  );
};
```

## 构建自定义表单

利用 Reset 组件可以构建完全自定义样式的表单，避免浏览器默认样式的干扰：

```jsx
<Reset>
  <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
    <input
      type="text"
      placeholder="用户名"
      style={{ padding: '10px', border: '1px solid var(--gray-7)', borderRadius: '4px' }}
    />
    <input
      type="password"
      placeholder="密码"
      style={{ padding: '10px', border: '1px solid var(--gray-7)', borderRadius: '4px' }}
    />
    <button
      style={{
        padding: '10px',
        background: 'var(--blue-9)',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      登录
    </button>
  </form>
</Reset>
```

## 自定义按钮示例

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
    确认
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
    取消
  </button>
</Reset>
```

## 何时使用

- 需要从零开始构建自定义样式的 HTML 元素时
- 作为自定义 UI 组件的基础，确保跨浏览器样式一致性
- 需要覆盖浏览器的 User-Agent Stylesheet 时
- 构建高度定制化的表单元素（输入框、按钮、下拉选择等）
- 需要移除链接、列表等元素的默认装饰样式时

## 属性

| 参数     | 说明               | 类型            | 默认值 |
| -------- | ------------------ | --------------- | ------ |
| children | 需要重置样式的内容 | React.ReactNode | -      |
| asChild  | 是否作为子元素渲染 | boolean         | false  |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/reset) 获取完整 API 与设计规范。

----- split line -----

## scroll-area (react/scroll-area)

# `react-scroll-area`

ScrollArea 是一个自定义滚动区域组件，提供优雅的跨浏览器滚动体验，具有可自定义的滚动条。

## 安装

```sh
$ yarn add @sea-lion/react-scroll-area
# 或者
$ npm install @sea-lion/react-scroll-area
```

## 基本使用

```jsx
import { ScrollArea } from "@sea-lion/react-scroll-area";

export default () => {
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <ScrollArea>
        <div style={{ padding: "15px" }}>
          <p>这是一段长文本内容，当内容超出容器大小时，会显示自定义滚动条。</p>
          <p>自定义滚动条样式美观，可以根据需要设置大小、样式和显示方向。</p>
          {/* 更多内容... */}
        </div>
      </ScrollArea>
    </div>
  );
};
```

## 尺寸

ScrollArea 组件支持三种滚动条尺寸：

```jsx
<ScrollArea size="1">{/* 内容 */}</ScrollArea>
<ScrollArea size="2">{/* 内容 */}</ScrollArea>
<ScrollArea size="3">{/* 内容 */}</ScrollArea>
```

## 滚动条方向

你可以控制显示的滚动条方向：

```jsx
{/* 只显示垂直滚动条 */}
<ScrollArea scrollbars="vertical">{/* 内容 */}</ScrollArea>

{/* 只显示水平滚动条 */}
<ScrollArea scrollbars="horizontal">{/* 内容 */}</ScrollArea>

{/* 同时显示垂直和水平滚动条 */}
<ScrollArea scrollbars="both">{/* 内容 */}</ScrollArea>
```

## 滚动条类型

使用 `type` 属性控制滚动条的显示行为：

```jsx
{/* 自动：有溢出内容时才显示滚动条 */}
<ScrollArea type="auto">{/* 内容 */}</ScrollArea>

{/* 始终显示：无论是否有溢出内容，始终显示滚动条 */}
<ScrollArea type="always">{/* 内容 */}</ScrollArea>

{/* 滚动时显示：只在用户滚动时显示滚动条 */}
<ScrollArea type="scroll">{/* 内容 */}</ScrollArea>

{/* 悬停时显示（默认）：鼠标悬停在容器上时显示滚动条 */}
<ScrollArea type="hover">{/* 内容 */}</ScrollArea>
```

## 圆角

使用 `radius` 属性为滚动条设置圆角，支持以下值：

```jsx
<ScrollArea radius="none">{/* 无圆角 */}</ScrollArea>
<ScrollArea radius="small">{/* 小圆角 */}</ScrollArea>
<ScrollArea radius="medium">{/* 中等圆角 */}</ScrollArea>
<ScrollArea radius="large">{/* 大圆角 */}</ScrollArea>
<ScrollArea radius="full">{/* 完全圆角 */}</ScrollArea>
```

## 实用场景

### 内容卡片

```jsx
<div style={{ width: "350px", height: "400px", border: "1px solid var(--gray-6)", borderRadius: "8px", overflow: "hidden" }}>
  <div style={{ padding: "16px", borderBottom: "1px solid var(--gray-4)" }}>
    <h3>文章标题</h3>
  </div>
  <div style={{ height: "calc(400px - 61px)" }}>
    <ScrollArea>
      <div style={{ padding: "16px" }}>
        {/* 长文章内容 */}
      </div>
    </ScrollArea>
  </div>
</div>
```

### 侧边菜单

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

## 何时使用

- 需要自定义滚动条样式时
- 需要在不同浏览器中保持一致的滚动体验
- 需要控制滚动条的显示和隐藏行为
- 固定高度容器内包含长内容时（如侧边菜单、文章列表等）

## 属性

| 参数            | 说明                   | 类型                                        | 默认值   |
| --------------- | ---------------------- | ------------------------------------------- | -------- |
| size            | 滚动条大小             | '1' \| '2' \| '3'                           | '1'      |
| radius          | 滚动条圆角             | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -  |
| scrollbars      | 显示的滚动条方向       | 'vertical' \| 'horizontal' \| 'both'        | 'both'   |
| type            | 滚动条类型             | 'auto' \| 'always' \| 'scroll' \| 'hover'   | 'hover'  |
| scrollHideDelay | 滚动条隐藏延迟（毫秒） | number                                      | -        |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/scroll-area) 获取完整 API 与设计规范。

----- split line -----

## section (react/section)

# `react-section`

Section 是一个布局组件，用于创建具有预设垂直内边距的区域，帮助组织页面内容的层次结构。

## 安装

```sh
$ yarn add @sea-lion/react-section
# 或者
$ npm install @sea-lion/react-section
```

## 基本使用

```jsx
import { Section } from "@sea-lion/react-section";

export default () => {
  return (
    <Section>
      <h2>区域标题</h2>
      <p>这是一个具有预设垂直内边距的区域，用于组织内容。</p>
    </Section>
  );
};
```

## 尺寸

Section 组件支持四种尺寸，控制垂直内边距的大小：

```jsx
{/* 小尺寸 (24px 内边距) */}
<Section size="1">{/* 内容 */}</Section>

{/* 中等尺寸 (40px 内边距) */}
<Section size="2">{/* 内容 */}</Section>

{/* 大尺寸 (64px 内边距，默认) */}
<Section size="3">{/* 内容 */}</Section>

{/* 超大尺寸 (80px 内边距) */}
<Section size="4">{/* 内容 */}</Section>
```

## 显示控制

使用 `display` 属性控制区域的显示状态：

```jsx
{/* 隐藏区域 */}
<Section display="none">{/* 内容 */}</Section>

{/* 显示区域（默认） */}
<Section display="initial">{/* 内容 */}</Section>
```

## 响应式设计

Section 组件支持响应式属性，可以根据屏幕尺寸调整内边距和显示状态：

```jsx
{/* 在小屏幕上使用较小的内边距，在大屏幕上使用较大的内边距 */}
<Section size={{ initial: '1', sm: '2', md: '3' }}>{/* 内容 */}</Section>

{/* 在小屏幕上隐藏，在大屏幕上显示 */}
<Section display={{ initial: 'none', md: 'initial' }}>{/* 内容 */}</Section>
```

## 实用场景

### 页面布局

使用不同尺寸的 Section 来构建具有层次感的页面结构：

```jsx
{/* 头部区域 */}
<Section size="2">
  <h1>网站标题</h1>
</Section>

{/* 主要内容区 */}
<Section size="3">
  <h2>欢迎使用</h2>
  <p>这是主要内容区域。</p>
</Section>

{/* 特性展示区（带背景色） */}
<Section size="3" style={{ backgroundColor: 'var(--gray-2)' }}>
  <h2>产品特性</h2>
  <div style={{ display: 'flex', gap: '24px' }}>
    <div>特性一</div>
    <div>特性二</div>
    <div>特性三</div>
  </div>
</Section>
```

### 卡片内容容器

Section 可以作为卡片内容的容器，提供统一的内边距：

```jsx
<div style={{ width: '300px', border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
  <div style={{ height: '150px', backgroundColor: 'var(--blue-5)' }} />
  <Section size="1">
    <h3>产品标题</h3>
    <p>这是产品的简要描述。</p>
    <a href="#">了解更多</a>
  </Section>
</div>
```

## 何时使用

- 需要在页面上划分不同的内容区域时
- 需要为内容区域添加统一的垂直内边距时
- 构建具有层次感的落地页、文档页面等布局时
- 需要在不同屏幕尺寸下控制区域显示或内边距大小时

## 属性

| 参数    | 说明                 | 类型                     | 默认值 |
| ------- | -------------------- | ------------------------ | ------ |
| size    | 区域的垂直内边距大小 | '1' \| '2' \| '3' \| '4' | '3'    |
| display | 区域的显示状态       | 'none' \| 'initial'      | -      |
| asChild | 是否作为子元素渲染   | boolean                  | false  |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/section) 获取完整 API 与设计规范。

----- split line -----

## segmented-control (react/segmented-control)

﻿# `react-segmented-control`

SegmentedControl 是一个分段控制器组件，用于在一组相关选项中进行单选。它提供了一个可视化的指示器，显示当前选中的选项。

## 安装

```sh
$ yarn add @sea-lion/react-segmented-control
# 或者
$ npm install @sea-lion/react-segmented-control
```

## 基本使用

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";

export default () => {
  return (
    <SegmentedControl.Root defaultValue="daily">
      <SegmentedControl.Item value="daily">每日</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">每周</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">每月</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## 尺寸

SegmentedControl 组件支持三种尺寸，控制控件的大小：

```jsx
// 小尺寸
<SegmentedControl.Root size="1">
  {/* 子项 */}
</SegmentedControl.Root>

// 中等尺寸（默认）
<SegmentedControl.Root size="2">
  {/* 子项 */}
</SegmentedControl.Root>

// 大尺寸
<SegmentedControl.Root size="3">
  {/* 子项 */}
</SegmentedControl.Root>
```

## 变体

SegmentedControl 组件提供两种视觉变体：

```jsx
// Surface 变体（默认）
<SegmentedControl.Root variant="surface">
  {/* 子项 */}
</SegmentedControl.Root>

// Classic 变体
<SegmentedControl.Root variant="classic">
  {/* 子项 */}
</SegmentedControl.Root>
```

## 圆角

使用 `radius` 属性控制组件的圆角程度：

```jsx
<SegmentedControl.Root radius="none">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="small">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="medium">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="large">
  {/* 子项 */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="full">
  {/* 子项 */}
</SegmentedControl.Root>
```

## 受控模式

SegmentedControl 可以作为受控组件使用，通过 `value` 和 `onValueChange` 属性：

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("daily");

  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="daily">每日</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">每周</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">每月</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## 属性

### Root 属性

| 参数          | 说明           | 类型                                               | 默认值    | 版本  |
| ------------- | -------------- | -------------------------------------------------- | --------- | ----- |
| size          | 控件大小       | '1' \| '2' \| '3'                                  | '2'       | 0.2.0 |
| variant       | 视觉变体       | 'surface' \| 'classic'                             | 'surface' | 0.2.0 |
| radius        | 圆角大小       | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0 |
| value         | 当前选中值     | string                                             | -         | 0.2.0 |
| defaultValue  | 默认选中值     | string                                             | -         | 0.2.0 |
| onValueChange | 值变化回调函数 | (value: string) => void                            | -         | 0.2.0 |

### Item 属性

| 参数  | 说明     | 类型   | 默认值 | 版本  |
| ----- | -------- | ------ | ------ | ----- |
| value | 选项的值 | string | -      | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/segmented-control) 获取完整 API 与设计规范。

----- split line -----

## select (react/select)

﻿# `react-select`

Select 是一个下拉选择组件，允许用户从预定义的选项列表中选择一个值。组件支持选项分组、禁用选项和自定义占位符。

## 安装

```sh
$ yarn add @sea-lion/react-select
# 或者
$ npm install @sea-lion/react-select
```

## 基本使用

```jsx
import * as Select from "@sea-lion/react-select";

export default () => {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">苹果</Select.Item>
        <Select.Item value="orange">橙子</Select.Item>
        <Select.Item value="grape">葡萄</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## 尺寸

Select 组件支持三种尺寸：

```jsx
// 小尺寸
<Select.Root size="1">
  {/* 子项 */}
</Select.Root>

// 中等尺寸（默认）
<Select.Root size="2">
  {/* 子项 */}
</Select.Root>

// 大尺寸
<Select.Root size="3">
  {/* 子项 */}
</Select.Root>
```

## 触发器变体

Select.Trigger 组件支持四种视觉变体：

```jsx
// Surface 变体（默认）
<Select.Trigger variant="surface" />

// Classic 变体
<Select.Trigger variant="classic" />

// Soft 变体
<Select.Trigger variant="soft" />

// Ghost 变体
<Select.Trigger variant="ghost" />
```

## 内容变体

Select.Content 组件支持两种视觉变体：

```jsx
// Solid 变体（默认）
<Select.Content variant="solid" />

// Soft 变体
<Select.Content variant="soft" />
```

## 选项分组

您可以使用 Group 和 Label 组件将选项分组：

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.Label>水果</Select.Label>
      <Select.Item value="apple">苹果</Select.Item>
      <Select.Item value="orange">橙子</Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.Label>蔬菜</Select.Label>
      <Select.Item value="carrot">胡萝卜</Select.Item>
      <Select.Item value="potato">土豆</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

## 占位符

```jsx
<Select.Root>
  <Select.Trigger placeholder="请选择..." />
  <Select.Content>{/* 选项 */}</Select.Content>
</Select.Root>
```

## 禁用选项

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="apple">苹果</Select.Item>
    <Select.Item value="orange">橙子</Select.Item>
    <Select.Item value="grape" disabled>
      葡萄
    </Select.Item>
  </Select.Content>
</Select.Root>
```

## 受控模式

```jsx
import * as Select from "@sea-lion/react-select";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("apple");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">苹果</Select.Item>
        <Select.Item value="orange">橙子</Select.Item>
        <Select.Item value="grape">葡萄</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## 属性

### Root 属性

| 参数          | 说明                 | 类型                    | 默认值 | 版本  |
| ------------- | -------------------- | ----------------------- | ------ | ----- |
| size          | 组件大小             | '1' \| '2' \| '3'       | '2'    | 0.2.4 |
| value         | 当前选中值           | string                  | -      | 0.2.4 |
| defaultValue  | 默认选中值           | string                  | -      | 0.2.4 |
| onValueChange | 值变化回调函数       | (value: string) => void | -      | 0.2.4 |
| open          | 控制下拉菜单是否打开 | boolean                 | -      | 0.2.4 |
| defaultOpen   | 默认下拉菜单是否打开 | boolean                 | -      | 0.2.4 |
| onOpenChange  | 打开状态变化回调     | (open: boolean) => void | -      | 0.2.4 |
| disabled      | 是否禁用             | boolean                 | false  | 0.2.4 |

### Trigger 属性

| 参数        | 说明       | 类型                                               | 默认值    | 版本  |
| ----------- | ---------- | -------------------------------------------------- | --------- | ----- |
| variant     | 视觉变体   | 'classic' \| 'surface' \| 'soft' \| 'ghost'        | 'surface' | 0.2.4 |
| color       | 颜色       | string                                             | -         | 0.2.4 |
| radius      | 圆角大小   | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.4 |
| placeholder | 占位符文本 | string                                             | -         | 0.2.4 |

### Content 属性

| 参数         | 说明         | 类型              | 默认值  | 版本  |
| ------------ | ------------ | ----------------- | ------- | ----- |
| variant      | 视觉变体     | 'solid' \| 'soft' | 'solid' | 0.2.4 |
| color        | 颜色         | string            | -       | 0.2.4 |
| highContrast | 是否高对比度 | boolean           | false   | 0.2.4 |

### Item 属性

| 参数     | 说明     | 类型    | 默认值 | 版本  |
| -------- | -------- | ------- | ------ | ----- |
| value    | 选项值   | string  | -      | 0.2.4 |
| disabled | 是否禁用 | boolean | false  | 0.2.4 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/select) 获取完整 API 与设计规范。

----- split line -----

## separator (react/separator)

# `react-separator`

Separator 是一个分隔线组件，用于在视觉上分隔不同的内容区域。

## 安装

```sh
$ yarn add @sea-lion/react-separator
# 或者
$ npm install @sea-lion/react-separator
```

## 基本使用

```jsx
import { Separator } from "@sea-lion/react-separator";

export default () => (
  <div>
    <h2>第一部分</h2>
    <p>这是一些内容。</p>

    <Separator my="4" size="4" />

    <h2>第二部分</h2>
    <p>这是另一些内容。</p>
  </div>
);
```

## 方向

Separator 组件支持水平和垂直两种方向：

```jsx
{/* 水平分隔线（默认） */}
<Separator orientation="horizontal" size="4" />

{/* 垂直分隔线 */}
<Separator orientation="vertical" size="3" mx="3" />
```

## 尺寸

Separator 组件提供了四种尺寸：

```jsx
{/* 尺寸 1（最小） */}
<Separator size="1" />

{/* 尺寸 2 */}
<Separator size="2" />

{/* 尺寸 3（中大） */}
<Separator size="3" />

{/* 尺寸 4（占满容器） */}
<Separator size="4" />
```

## 颜色

Separator 组件支持自定义颜色：

```jsx
{/* 灰色（默认） */}
<Separator color="gray" size="4" />

{/* 蓝色 */}
<Separator color="blue" size="4" />

{/* 红色 */}
<Separator color="red" size="4" />

{/* 绿色 */}
<Separator color="green" size="4" />
```

## 垂直分隔线示例

要使用垂直分隔线，需要设置容器的高度：

```jsx
<div style={{ display: "flex", alignItems: "center", height: "40px" }}>
  <span>左侧内容</span>
  <Separator orientation="vertical" size="3" mx="2" />
  <span>右侧内容</span>
</div>
```

## 装饰性

默认情况下，Separator 组件被视为装饰性元素。如果分隔线在语义上分隔内容，可以将其设置为非装饰性：

```jsx
<Separator decorative={false} />
```

## 实用场景

### 内容分节

```jsx
<div style={{ maxWidth: '500px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
  <h3>公司简介</h3>
  <p>我们是一家专注于用户体验和设计系统的科技公司...</p>

  <Separator size="4" my="4" />

  <h3>我们的使命</h3>
  <p>为开发者提供易用、高效、美观的组件库，提升开发效率...</p>

  <Separator size="4" my="4" />

  <h3>联系我们</h3>
  <p>电子邮件: contact@example.com</p>
</div>
```

### 导航菜单分隔

```jsx
<div style={{ maxWidth: '250px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
  <div style={{ padding: '8px 0' }}>首页</div>
  <Separator size="4" />
  <div style={{ padding: '8px 0' }}>产品</div>
  <Separator size="4" />
  <div style={{ padding: '8px 0' }}>服务</div>
  <Separator size="4" />
  <div style={{ padding: '8px 0' }}>关于我们</div>
</div>
```

### 侧边栏与内容区布局

```jsx
<div style={{ display: 'flex', maxWidth: '600px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
  <div style={{ width: '200px' }}>
    <p>侧边导航</p>
    <ul>
      <li>菜单项 1</li>
      <li>菜单项 2</li>
      <li>菜单项 3</li>
    </ul>
  </div>

  <Separator orientation="vertical" size="4" mx="4" />

  <div style={{ flex: 1 }}>
    <p>主要内容区域</p>
    <p>这里是主要内容区域...</p>
  </div>
</div>
```

## 何时使用

- 需要在不同内容块之间创建视觉分隔时
- 需要在布局中添加水平或垂直分隔线时
- 在导航菜单、列表等场景中分隔不同的菜单项时
- 在文章、卡片等内容中划分不同的内容区域时

## 属性

| 参数        | 说明         | 类型                       | 默认值       |
| ----------- | ------------ | -------------------------- | ------------ |
| orientation | 分隔线方向   | 'horizontal' \| 'vertical' | 'horizontal' |
| size        | 分隔线尺寸   | '1' \| '2' \| '3' \| '4'   | '1'          |
| color       | 颜色         | 标准颜色                   | 'gray'       |
| decorative  | 是否为装饰性 | boolean                    | true         |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/separator) 获取完整 API 与设计规范。

----- split line -----

## skeleton (react/skeleton)

﻿# `react-skeleton`

Skeleton 是一个加载占位符组件，用于在数据加载时显示内容的轮廓，提升用户体验。

## 安装

```sh
$ yarn add @sea-lion/react-skeleton
# 或者
$ npm install @sea-lion/react-skeleton
```

## 基本使用

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

## 包裹现有内容

Skeleton 可以包裹现有内容，在加载时显示占位符，加载完成后显示内容：

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Skeleton loading={loading}>
        <h2>数据已加载完成</h2>
        <p>这是加载完成后显示的内容。</p>
      </Skeleton>
    </div>
  );
};
```

## 自定义宽度和高度

```jsx
// 固定宽度
<Skeleton width="200px" height="24px" />

// 响应式宽度
<Skeleton width={{ initial: "100%", sm: "80%", lg: "50%" }} height="24px" />

// 使用预设尺寸
<Skeleton width="full" height="5" />
```

## 文本占位符

当作为空元素使用时，Skeleton 默认为块级元素，高度为 `--space-3`：

```jsx
// 空的骨架加载器用作文本占位符
<Skeleton />
<Skeleton width="80%" my="2" />
<Skeleton width="60%" />
```

## 列表占位符

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

## 卡片占位符

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

## 属性

| 参数      | 说明                   | 类型                       | 默认值 | 版本  |
| --------- | ---------------------- | -------------------------- | ------ | ----- |
| loading   | 是否显示加载占位符     | boolean                    | true   | 0.2.0 |
| width     | 宽度（支持响应式）     | CSSProperties['width']     | -      | 0.2.0 |
| minWidth  | 最小宽度（支持响应式） | CSSProperties['minWidth']  | -      | 0.2.0 |
| maxWidth  | 最大宽度（支持响应式） | CSSProperties['maxWidth']  | -      | 0.2.0 |
| height    | 高度（支持响应式）     | CSSProperties['height']    | -      | 0.2.0 |
| minHeight | 最小高度（支持响应式） | CSSProperties['minHeight'] | -      | 0.2.0 |
| maxHeight | 最大高度（支持响应式） | CSSProperties['maxHeight'] | -      | 0.2.0 |
| children  | 加载完成后显示的内容   | React.ReactNode            | -      | 0.2.0 |

同时支持所有标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/skeleton) 获取完整 API 与设计规范。

----- split line -----

## slider (react/slider)

﻿# `react-slider`

Slider 是一个滑动输入控件，允许用户在一个范围内选择值。

## 安装

```sh
$ yarn add @sea-lion/react-slider
# 或者
$ npm install @sea-lion/react-slider
```

## 基本使用

```jsx
import { Slider } from "@sea-lion/react-slider";

export default () => (
  <div style={{ width: "300px" }}>
    <Slider defaultValue={[50]} />
  </div>
);
```

## 设置范围

```jsx
// 设置最小值、最大值和步长
<Slider defaultValue={[30]} min={0} max={100} step={10} />

// 使用自定义范围
<Slider defaultValue={[2]} min={-5} max={5} step={1} />
```

## 多个滑块

```jsx
// 使用多个滑块创建一个范围选择器
<Slider defaultValue={[20, 80]} />

// 设置三个或更多滑块
<Slider defaultValue={[10, 50, 90]} />
```

## 垂直方向

```jsx
<div style={{ height: "200px" }}>
  <Slider orientation="vertical" defaultValue={[50]} />
</div>
```

## 不同尺寸

Slider 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Slider size="1" defaultValue={[50]} />

// 尺寸 2（默认）
<Slider size="2" defaultValue={[50]} />

// 尺寸 3（最大）
<Slider size="3" defaultValue={[50]} />
```

## 不同变体

Slider 组件支持多种变体样式：

```jsx
// 经典变体
<Slider variant="classic" defaultValue={[50]} />

// 表面变体（默认）
<Slider variant="surface" defaultValue={[50]} />

// 柔和变体
<Slider variant="soft" defaultValue={[50]} />
```

## 自定义颜色

```jsx
// 蓝色（默认）
<Slider color="blue" defaultValue={[50]} />

// 红色
<Slider color="red" defaultValue={[50]} />

// 绿色
<Slider color="green" defaultValue={[50]} />
```

## 高对比度

```jsx
// 启用高对比度模式
<Slider highContrast defaultValue={[50]} />
```

## 禁用状态

```jsx
// 禁用滑块
<Slider disabled defaultValue={[50]} />
```

## 受控组件

```jsx
import { useState } from "react";

export default () => {
  const [value, setValue] = useState([50]);

  return (
    <Slider value={value} onValueChange={(newValue) => setValue(newValue)} />
  );
};
```

## 属性

| 参数          | 说明               | 类型                             | 默认值       | 版本  |
| ------------- | ------------------ | -------------------------------- | ------------ | ----- |
| size          | 滑块尺寸           | '1' \| '2' \| '3'                | '2'          | 0.2.0 |
| variant       | 滑块变体样式       | 'classic' \| 'surface' \| 'soft' | 'surface'    | 0.2.0 |
| color         | 滑块颜色           | string                           | 'blue'       | 0.2.0 |
| radius        | 圆角大小           | string                           | -            | 0.2.0 |
| highContrast  | 是否使用高对比度   | boolean                          | false        | 0.2.0 |
| min           | 最小值             | number                           | 0            | 0.2.0 |
| max           | 最大值             | number                           | 100          | 0.2.0 |
| step          | 步长               | number                           | 1            | 0.2.0 |
| orientation   | 方向               | 'horizontal' \| 'vertical'       | 'horizontal' | 0.2.0 |
| disabled      | 是否禁用           | boolean                          | false        | 0.2.0 |
| value         | 当前值（受控模式） | number[]                         | -            | 0.2.0 |
| defaultValue  | 默认值             | number[]                         | -            | 0.2.0 |
| onValueChange | 值变化时的回调     | (value: number[]) => void        | -            | 0.2.0 |
| onValueCommit | 值提交时的回调     | (value: number[]) => void        | -            | 0.2.0 |

同时支持所有标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/slider) 获取完整 API 与设计规范。

----- split line -----

## spinner (react/spinner)

# `react-spinner`

Spinner 是一个加载指示器组件，用于表示内容正在加载中。

## 安装

```sh
$ yarn add @sea-lion/react-spinner
# 或者
$ npm install @sea-lion/react-spinner
```

## 基本使用

```jsx
import { Spinner } from "@sea-lion/react-spinner";

export default () => (
  <div>
    <Spinner />
    <span>加载中...</span>
  </div>
);
```

## 不同尺寸

Spinner 组件提供三种尺寸：

```jsx
{/* 尺寸 1（最小） */}
<Spinner size="1" />

{/* 尺寸 2（默认） */}
<Spinner size="2" />

{/* 尺寸 3（最大） */}
<Spinner size="3" />
```

## 自定义颜色

通过设置父元素的颜色来自定义 Spinner 颜色：

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

## 包裹内容

Spinner 可以包裹其他内容，在加载时显示加载动画，加载完成后显示内容：

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Spinner loading={loading}>
      <div>加载完成后显示的内容</div>
    </Spinner>
  );
};
```

## 与按钮组合

Spinner 可以与按钮组合，用于表示提交或处理状态：

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { Button } from "@sea-lion/react-button";

{/* 加载状态的按钮 */}
<Button disabled>
  <Spinner size="1" />
  提交中
</Button>

{/* 正常状态 */}
<Button>提交</Button>
```

## 加载卡片

```jsx
<div style={{ border: '1px solid var(--gray-5)', borderRadius: '6px', padding: '16px', width: '300px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
    <Spinner size="1" />
    <span>正在加载数据...</span>
  </div>
</div>
```

## 自定义样式

```jsx
{/* 添加外边距 */}
<Spinner mt="4" mb="4" />

{/* 自定义颜色（通过父元素） */}
<div style={{ color: "var(--blue-9)" }}>
  <Spinner />
</div>
```

## 何时使用

- 页面或组件正在加载数据时
- 操作需要一段时间才能完成时（如表单提交、文件上传）
- 需要告知用户等待过程，避免误操作时
- 与按钮配合使用，表示操作正在进行中

## 属性

| 参数    | 说明           | 类型              | 默认值 |
| ------- | -------------- | ----------------- | ------ |
| size    | 尺寸           | '1' \| '2' \| '3' | '2'    |
| loading | 是否显示加载中 | boolean           | true   |

同时支持所有标准的外边距（margin）属性，如 `m`、`mt`、`mb` 等。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/spinner) 获取完整 API 与设计规范。

----- split line -----

## switch (react/switch)

﻿# `react-switch`

Switch 是一个开关组件，用于在两种状态间切换。

## 安装

```sh
$ yarn add @sea-lion/react-switch
# 或者
$ npm install @sea-lion/react-switch
```

## 基本使用

```jsx
import { Switch } from "@sea-lion/react-switch";

export default () => (
  <div>
    <Switch />
  </div>
);
```

## 受控组件

```jsx
import { Switch } from "@sea-lion/react-switch";
import { useState } from "react";

export default () => {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onCheckedChange={setChecked} />;
};
```

## 默认选中

```jsx
<Switch defaultChecked />
```

## 不同尺寸

Switch 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Switch size="1" />

// 尺寸 2（默认）
<Switch size="2" />

// 尺寸 3（最大）
<Switch size="3" />
```

## 不同变体

Switch 组件支持多种变体样式：

```jsx
// 经典变体
<Switch variant="classic" />

// 表面变体（默认）
<Switch variant="surface" />

// 柔和变体
<Switch variant="soft" />
```

## 自定义颜色

```jsx
// 蓝色（默认）
<Switch color="blue" />

// 红色
<Switch color="red" />

// 绿色
<Switch color="green" />
```

## 高对比度

```jsx
// 启用高对比度模式
<Switch highContrast />
```

## 禁用状态

```jsx
// 禁用开关
<Switch disabled />
```

## 属性

| 参数            | 说明             | 类型                             | 默认值    | 版本  |
| --------------- | ---------------- | -------------------------------- | --------- | ----- |
| size            | 开关尺寸         | '1' \| '2' \| '3'                | '2'       | 0.2.0 |
| variant         | 开关变体样式     | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0 |
| color           | 开关颜色         | string                           | 'blue'    | 0.2.0 |
| radius          | 圆角大小         | string                           | -         | 0.2.0 |
| highContrast    | 是否使用高对比度 | boolean                          | false     | 0.2.0 |
| checked         | 当前状态（受控） | boolean                          | -         | 0.2.0 |
| defaultChecked  | 默认选中状态     | boolean                          | false     | 0.2.0 |
| onCheckedChange | 状态变化时的回调 | (checked: boolean) => void       | -         | 0.2.0 |
| disabled        | 是否禁用         | boolean                          | false     | 0.2.0 |

同时支持所有标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/switch) 获取完整 API 与设计规范。

----- split line -----

## tab-nav (react/tab-nav)

﻿# `react-tab-nav`

TabNav 是一个导航菜单组件，用于创建导航栏和标签式导航。

## 安装

```sh
$ yarn add @sea-lion/react-tab-nav
# 或者
$ npm install @sea-lion/react-tab-nav
```

## 基本使用

```jsx
import * as TabNav from "@sea-lion/react-tab-nav";

export default () => (
  <TabNav.Root>
    <TabNav.Link href="/">首页</TabNav.Link>
    <TabNav.Link href="/products">产品</TabNav.Link>
    <TabNav.Link href="/docs">文档</TabNav.Link>
    <TabNav.Link href="/about">关于我们</TabNav.Link>
  </TabNav.Root>
);
```

## 激活状态

你可以通过 `active` 属性指定当前激活的链接：

```jsx
<TabNav.Root>
  <TabNav.Link href="/" active>
    首页
  </TabNav.Link>
  <TabNav.Link href="/products">产品</TabNav.Link>
  <TabNav.Link href="/docs">文档</TabNav.Link>
</TabNav.Root>
```

## 不同尺寸

TabNav 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<TabNav.Root size="1">...</TabNav.Root>

// 尺寸 2（默认）
<TabNav.Root size="2">...</TabNav.Root>

// 尺寸 3（最大）
<TabNav.Root size="3">...</TabNav.Root>
```

## 不同变体

TabNav.Root 组件支持多种变体样式：

```jsx
// 默认变体
<TabNav.Root>...</TabNav.Root>

// 带下划线变体
<TabNav.Root variant="underline">...</TabNav.Root>
```

## 自定义颜色

```jsx
// 蓝色（默认）
<TabNav.Root color="blue">...</TabNav.Root>

// 红色
<TabNav.Root color="red">...</TabNav.Root>

// 绿色
<TabNav.Root color="green">...</TabNav.Root>
```

## 高对比度

```jsx
// 启用高对比度模式
<TabNav.Root highContrast>...</TabNav.Root>
```

## 排列方式

可以控制导航项的排列方式：

```jsx
// 从左到右排列（默认）
<TabNav.Root justify="start">...</TabNav.Root>

// 居中排列
<TabNav.Root justify="center">...</TabNav.Root>

// 从右到左排列
<TabNav.Root justify="end">...</TabNav.Root>
```

## 换行处理

当空间不足时，您可以控制项目的换行行为：

```jsx
// 不换行（默认）
<TabNav.Root wrap="nowrap">...</TabNav.Root>

// 允许换行
<TabNav.Root wrap="wrap">...</TabNav.Root>

// 反向换行
<TabNav.Root wrap="wrap-reverse">...</TabNav.Root>
```

## 与路由结合使用

可以与 React Router 等路由库结合使用：

```jsx
import { Link } from "react-router-dom";

<TabNav.Root>
  <TabNav.Link asChild active={location.pathname === "/"}>
    <Link to="/">首页</Link>
  </TabNav.Link>
  <TabNav.Link asChild active={location.pathname === "/products"}>
    <Link to="/products">产品</Link>
  </TabNav.Link>
</TabNav.Root>;
```

## 属性

### TabNav.Root 属性

| 参数         | 说明             | 类型                                 | 默认值    | 版本  |
| ------------ | ---------------- | ------------------------------------ | --------- | ----- |
| size         | 尺寸             | '1' \| '2' \| '3'                    | '2'       | 0.2.0 |
| color        | 颜色             | string                               | 'blue'    | 0.2.0 |
| highContrast | 是否使用高对比度 | boolean                              | false     | 0.2.0 |
| variant      | 变体样式         | 'surface' \| 'underline'             | 'surface' | 0.2.0 |
| wrap         | 换行模式         | 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap'  | 0.2.0 |
| justify      | 对齐方式         | 'start' \| 'center' \| 'end'         | 'start'   | 0.2.0 |

### TabNav.Link 属性

| 参数    | 说明                   | 类型    | 默认值 | 版本  |
| ------- | ---------------------- | ------- | ------ | ----- |
| active  | 是否激活状态           | boolean | false  | 0.2.0 |
| href    | 链接地址               | string  | -      | 0.2.0 |
| asChild | 是否将子元素作为根节点 | boolean | false  | 0.2.0 |

所有组件同时支持标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/tab-nav) 获取完整 API 与设计规范。

----- split line -----

## tab (react/tab)

﻿# `react-tab`

Tab 是一个选项卡组件，用于在同一个区域内切换不同内容。

## 安装

```sh
$ yarn add @sea-lion/react-tab
# 或者
$ npm install @sea-lion/react-tab
```

## 基本使用

```jsx
import * as Tabs from "@sea-lion/react-tab";

export default () => (
  <Tabs.Root defaultValue="tab1">
    <Tabs.List>
      <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">选项卡 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <p>选项卡 1 的内容</p>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <p>选项卡 2 的内容</p>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <p>选项卡 3 的内容</p>
    </Tabs.Content>
  </Tabs.Root>
);
```

## 受控组件

```jsx
import * as Tabs from "@sea-lion/react-tab";
import { useState } from "react";

export default () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p>当前激活的选项卡: {activeTab}</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>当前激活的选项卡: {activeTab}</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};
```

## 不同尺寸

Tab.List 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Tabs.List size="1">...</Tabs.List>

// 尺寸 2（默认）
<Tabs.List size="2">...</Tabs.List>

// 尺寸 3（最大）
<Tabs.List size="3">...</Tabs.List>
```

## 自定义颜色

```jsx
// 蓝色（默认）
<Tabs.List color="blue">...</Tabs.List>

// 红色
<Tabs.List color="red">...</Tabs.List>

// 绿色
<Tabs.List color="green">...</Tabs.List>
```

## 高对比度

```jsx
// 启用高对比度模式
<Tabs.List highContrast>...</Tabs.List>
```

## 不同变体

Tab.List 组件支持多种变体样式：

```jsx
// 默认变体
<Tabs.List>...</Tabs.List>

// 带下划线变体
<Tabs.List variant="underline">...</Tabs.List>
```

## 禁用状态

可以禁用特定的选项卡：

```jsx
<Tabs.Trigger value="tab1" disabled>
  禁用的选项卡
</Tabs.Trigger>
```

## 属性

### Tabs.Root 属性

| 参数          | 说明                   | 类型                    | 默认值 | 版本  |
| ------------- | ---------------------- | ----------------------- | ------ | ----- |
| defaultValue  | 默认选中的选项卡       | string                  | -      | 0.2.1 |
| value         | 当前选中的选项卡(受控) | string                  | -      | 0.2.1 |
| onValueChange | 选项卡切换时的回调     | (value: string) => void | -      | 0.2.1 |
| asChild       | 是否将子元素作为根节点 | boolean                 | false  | 0.2.1 |

### Tabs.List 属性

| 参数         | 说明             | 类型                     | 默认值    | 版本  |
| ------------ | ---------------- | ------------------------ | --------- | ----- |
| size         | 尺寸             | '1' \| '2' \| '3'        | '2'       | 0.2.1 |
| color        | 颜色             | string                   | 'blue'    | 0.2.1 |
| highContrast | 是否使用高对比度 | boolean                  | false     | 0.2.1 |
| variant      | 变体样式         | 'surface' \| 'underline' | 'surface' | 0.2.1 |

### Tabs.Trigger 属性

| 参数     | 说明       | 类型    | 默认值 | 版本  |
| -------- | ---------- | ------- | ------ | ----- |
| value    | 选项卡的值 | string  | -      | 0.2.1 |
| disabled | 是否禁用   | boolean | false  | 0.2.1 |

### Tabs.Content 属性

| 参数    | 说明                   | 类型    | 默认值 | 版本  |
| ------- | ---------------------- | ------- | ------ | ----- |
| value   | 对应的选项卡值         | string  | -      | 0.2.1 |
| asChild | 是否将子元素作为根节点 | boolean | false  | 0.2.1 |

所有组件同时支持标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/tabs) 获取完整 API 与设计规范。

----- split line -----

## table (react/table)

﻿# `react-table`

Table 是一个表格组件，用于以行和列的形式展示数据。组件支持不同尺寸、变体样式、自定义布局以及单元格对齐方式。

## 安装

```sh
$ yarn add @sea-lion/react-table
# 或者
$ npm install @sea-lion/react-table
```

## 基本使用

```jsx
import * as Table from "@sea-lion/react-table";

export default () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>姓名</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>年龄</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>职业</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>张三</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>工程师</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>李四</Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>设计师</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
```

## 不同尺寸

Table 组件支持三种尺寸：

```jsx
// 小尺寸
<Table.Root size="1">
  {/* 表格内容 */}
</Table.Root>

// 中等尺寸（默认）
<Table.Root size="2">
  {/* 表格内容 */}
</Table.Root>

// 大尺寸
<Table.Root size="3">
  {/* 表格内容 */}
</Table.Root>
```

## 不同变体

Table 组件支持两种视觉变体：

```jsx
// Ghost 变体（默认）- 无边框
<Table.Root variant="ghost">
  {/* 表格内容 */}
</Table.Root>

// Surface 变体 - 带边框和背景
<Table.Root variant="surface">
  {/* 表格内容 */}
</Table.Root>
```

## 表格布局

```jsx
// 自动布局（默认）- 根据内容调整列宽
<Table.Root layout="auto">
  {/* 表格内容 */}
</Table.Root>

// 固定布局 - 等宽列或可以通过 width 属性设置列宽
<Table.Root layout="fixed">
  {/* 表格内容 */}
</Table.Root>
```

## 单元格对齐

```jsx
// 水平对齐
<Table.Cell justify="start">左对齐（默认）</Table.Cell>
<Table.Cell justify="center">居中对齐</Table.Cell>
<Table.Cell justify="end">右对齐</Table.Cell>

// 垂直对齐
<Table.Row align="start">顶部对齐</Table.Row>
<Table.Row align="center">居中对齐</Table.Row>
<Table.Row align="end">底部对齐</Table.Row>
<Table.Row align="baseline">基线对齐</Table.Row>
```

## 行标题和列标题

```jsx
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>产品</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>价格</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>库存</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>产品A</Table.RowHeaderCell>
      <Table.Cell>¥100</Table.Cell>
      <Table.Cell>50</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.RowHeaderCell>产品B</Table.RowHeaderCell>
      <Table.Cell>¥200</Table.Cell>
      <Table.Cell>25</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

## 属性

### Root 属性

| 参数    | 说明         | 类型                 | 默认值  | 版本  |
| ------- | ------------ | -------------------- | ------- | ----- |
| size    | 表格尺寸     | '1' \| '2' \| '3'    | '2'     | 0.2.1 |
| variant | 视觉变体     | 'surface' \| 'ghost' | 'ghost' | 0.2.1 |
| layout  | 表格布局方式 | 'auto' \| 'fixed'    | 'auto'  | 0.2.1 |

### Row 属性

| 参数  | 说明           | 类型                                       | 默认值 | 版本  |
| ----- | -------------- | ------------------------------------------ | ------ | ----- |
| align | 行内容垂直对齐 | 'start' \| 'center' \| 'end' \| 'baseline' | -      | 0.2.1 |

### Cell 属性

| 参数    | 说明           | 类型                         | 默认值  | 版本  |
| ------- | -------------- | ---------------------------- | ------- | ----- |
| justify | 单元格内容对齐 | 'start' \| 'center' \| 'end' | 'start' | 0.2.1 |
| width   | 单元格宽度     | string                       | -       | 0.2.1 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/table) 获取完整 API 与设计规范。

----- split line -----

## text-area (react/text-area)

﻿# `react-text-area`

TextArea 是一个多行文本输入组件，用于用户输入较长的文本内容。组件支持多种尺寸、变体样式以及自定义调整大小方式。

## 安装

```sh
$ yarn add @sea-lion/react-text-area
# 或者
$ npm install @sea-lion/react-text-area
```

## 基本使用

```jsx
import { TextArea } from "@sea-lion/react-text-area";

export default () => {
  return (
    <>
      <TextArea placeholder="请输入描述..." />
    </>
  );
};
```

## 不同尺寸

TextArea 组件支持三种尺寸：

```jsx
<TextArea size="1" placeholder="小尺寸文本框" />
<TextArea size="2" placeholder="中等尺寸文本框（默认）" />
<TextArea size="3" placeholder="大尺寸文本框" />
```

## 不同变体

TextArea 组件支持三种视觉变体：

```jsx
<TextArea variant="surface" placeholder="Surface 变体（默认）" />
<TextArea variant="classic" placeholder="Classic 变体" />
<TextArea variant="soft" placeholder="Soft 变体" color="blue" />
```

## 调整大小方式

您可以控制文本框的调整大小方式：

```jsx
<TextArea resize="none" placeholder="不可调整大小" />
<TextArea resize="vertical" placeholder="可垂直调整大小" />
<TextArea resize="horizontal" placeholder="可水平调整大小" />
<TextArea resize="both" placeholder="可自由调整大小" />
```

## 颜色

TextArea 组件支持多种颜色，尤其是 soft 变体能很好地展示颜色：

```jsx
<TextArea variant="soft" color="blue" placeholder="蓝色文本框" />
<TextArea variant="soft" color="green" placeholder="绿色文本框" />
<TextArea variant="soft" color="red" placeholder="红色文本框" />
<TextArea variant="soft" color="purple" placeholder="紫色文本框" />
```

## 禁用和只读状态

```jsx
<TextArea disabled placeholder="禁用状态" />
<TextArea readOnly value="只读内容" />
```

## 自定义圆角

您可以自定义文本框的圆角大小：

```jsx
<TextArea radius="none" placeholder="无圆角" />
<TextArea radius="small" placeholder="小圆角" />
<TextArea radius="medium" placeholder="中等圆角" />
<TextArea radius="large" placeholder="大圆角" />
<TextArea radius="full" placeholder="完全圆角" />
```

## 默认值和受控组件

```jsx
// 非受控组件（使用默认值）
<TextArea defaultValue="默认文本内容" />;

// 受控组件
const [value, setValue] = React.useState("");
<TextArea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="请输入..."
/>;
```

## 属性

| 参数         | 说明           | 类型                                               | 默认值    | 版本  |
| ------------ | -------------- | -------------------------------------------------- | --------- | ----- |
| size         | 文本框尺寸     | '1' \| '2' \| '3'                                  | '2'       | 0.2.0 |
| variant      | 视觉变体       | 'classic' \| 'surface' \| 'soft'                   | 'surface' | 0.2.0 |
| resize       | 调整大小方式   | 'none' \| 'vertical' \| 'horizontal' \| 'both'     | -         | 0.2.0 |
| color        | 文本框颜色     | string                                             | -         | 0.2.0 |
| radius       | 圆角大小       | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0 |
| defaultValue | 默认值         | string                                             | -         | 0.2.0 |
| value        | 当前值（受控） | string                                             | -         | 0.2.0 |
| disabled     | 是否禁用       | boolean                                            | false     | 0.2.0 |
| readOnly     | 是否只读       | boolean                                            | false     | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/text-area) 获取完整 API 与设计规范。

----- split line -----

## text (react/text)

﻿# `react-text`

Text 是一个文本组件，用于显示不同样式和尺寸的文本内容。组件支持多种尺寸、字重、对齐方式和颜色选项。

## 安装

```sh
$ yarn add @sea-lion/react-text
# 或者
$ npm install @sea-lion/react-text
```

## 基本使用

```jsx
import { Text } from "@sea-lion/react-text";

export default () => {
  return (
    <>
      <Text>这是默认文本样式</Text>
      <Text size="3" weight="medium">
        这是中等大小中等字重的文本
      </Text>
      <Text color="blue">这是蓝色文本</Text>
      <Text color="red" highContrast>
        这是高对比度红色文本
      </Text>
    </>
  );
};
```

## 不同尺寸

Text 组件支持九种尺寸：

```jsx
<Text size="1">文本尺寸 1 (最小)</Text>
<Text size="2">文本尺寸 2</Text>
<Text size="3">文本尺寸 3</Text>
<Text size="4">文本尺寸 4</Text>
<Text size="5">文本尺寸 5</Text>
<Text size="6">文本尺寸 6</Text>
<Text size="7">文本尺寸 7</Text>
<Text size="8">文本尺寸 8</Text>
<Text size="9">文本尺寸 9 (最大)</Text>
```

## 不同字重

Text 组件支持四种字重：

```jsx
<Text weight="light">轻量字重 (Light)</Text>
<Text weight="regular">常规字重 (Regular)</Text>
<Text weight="medium">中等字重 (Medium)</Text>
<Text weight="bold">粗体字重 (Bold)</Text>
```

## 文本对齐

可以控制文本的对齐方式：

```jsx
<Text textAlign="left">左对齐文本</Text>
<Text textAlign="center">居中对齐文本</Text>
<Text textAlign="right">右对齐文本</Text>
```

## 文本颜色

Text 组件支持多种颜色：

```jsx
<Text color="gray">灰色文本</Text>
<Text color="blue">蓝色文本</Text>
<Text color="green">绿色文本</Text>
<Text color="red">红色文本</Text>
<Text color="purple">紫色文本</Text>
<Text color="orange">橙色文本</Text>
<!-- 更多颜色选项 -->
```

## 高对比度文本

使用 `highContrast` 属性可以增加文本颜色与背景的对比度：

```jsx
<Text color="gray" highContrast>高对比度灰色</Text>
<Text color="blue" highContrast>高对比度蓝色</Text>
<Text color="green" highContrast>高对比度绿色</Text>
<Text color="red" highContrast>高对比度红色</Text>
```

## 文本截断

当文本内容过长时，可以使用 `truncate` 属性进行截断：

```jsx
<Text truncate>
  这是一段很长的文本，将被截断显示省略号，因为设置了 truncate 属性
</Text>
```

## 不同元素类型

Text 组件可以渲染为不同的 HTML 元素：

```jsx
<Text as="span">这是一个 span 元素 (默认)</Text>
<Text as="div">这是一个 div 元素</Text>
<Text as="label">这是一个 label 元素</Text>
<Text as="p">这是一个段落 (p) 元素</Text>
```

## 属性

| 参数         | 说明         | 类型                                                        | 默认值 | 版本  |
| ------------ | ------------ | ----------------------------------------------------------- | ------ | ----- |
| as           | 渲染元素类型 | 'span' \| 'div' \| 'label' \| 'p'                           | 'span' | 0.2.0 |
| size         | 文本尺寸     | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -      | 0.2.0 |
| weight       | 字重         | 'light' \| 'regular' \| 'medium' \| 'bold'                  | -      | 0.2.0 |
| textAlign    | 文本对齐方式 | 'left' \| 'center' \| 'right'                               | -      | 0.2.0 |
| color        | 文本颜色     | string                                                      | -      | 0.2.0 |
| highContrast | 是否高对比度 | boolean                                                     | false  | 0.2.0 |
| truncate     | 是否截断文本 | boolean                                                     | false  | 0.2.0 |
| textWrap     | 文本换行方式 | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | -      | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/text) 获取完整 API 与设计规范。

----- split line -----

## theme (react/theme)

# `react-theme`

Theme 组件是一个提供统一设计系统的主题提供者，用于向应用程序提供颜色、字体、尺寸等设计变量。将应用内容包裹在 `<Theme>` 中，即可统一应用设计令牌，并支持明暗模式切换和局部主题覆盖。

## 安装

```sh
pnpm add @sea-lion/react-theme
# 或者
npm install @sea-lion/react-theme
yarn add @sea-lion/react-theme
```

## 使用

在代码中引入组件：

```tsx
import { Theme } from '@sea-lion/react-theme';
```

### 基本用法

将整个应用或某个页面包裹在 `<Theme>` 中，提供统一的设计令牌：

```jsx
<Theme>
  <App />
</Theme>
```

### 明暗主题

通过 `appearance` 属性在明亮和暗黑主题之间切换：

```jsx
{/* 明亮主题 */}
<Theme appearance="light">
  <App />
</Theme>

{/* 暗黑主题 */}
<Theme appearance="dark">
  <App />
</Theme>
```

### 强调色

通过 `accentColor` 设置全局强调色，影响按钮、链接、选中状态等元素：

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

可用强调色：`blue`、`red`、`green`、`purple`、`orange`、`gray` 等。

### 灰度色

通过 `grayColor` 调整全局灰度调色板，影响边框、背景、辅助文字等：

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

### 圆角样式

通过 `radius` 设置全局圆角风格：

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

### 全局缩放比例

通过 `scaling` 统一调整所有组件的字体和间距比例：

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

### 嵌套主题

`Theme` 支持嵌套使用，子 `Theme` 会覆盖父 `Theme` 的属性，实现局部主题：

```jsx
<Theme appearance="light" accentColor="blue">
  {/* 此处使用全局蓝色主题 */}
  <Button>蓝色按钮</Button>

  <Theme accentColor="red">
    {/* 此处仅强调色被覆盖为红色 */}
    <Button>红色按钮</Button>
  </Theme>

  <Theme accentColor="green">
    {/* 此处强调色被覆盖为绿色 */}
    <Button>绿色按钮</Button>
  </Theme>
</Theme>
```

### 组合配置

可以同时设置多个属性，创建完整的视觉风格：

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

### 实用示例：页面级主题

```jsx
import { Theme } from '@sea-lion/react-theme';

function App() {
  return (
    <Theme appearance="light" accentColor="blue" radius="medium">
      <main>
        {/* 整个应用自动应用统一的设计令牌 */}
        <Header />
        <Content />
        <Footer />
      </main>
    </Theme>
  );
}
```

## 何时使用

- 需要在应用程序中应用一致的设计系统时
- 实现主题切换功能（如明暗模式）时
- 需要自定义应用程序视觉风格时
- 需要对局部区域应用不同主题（通过嵌套 Theme）时

## Props / API 属性

### Theme

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `appearance` | 主题外观（明暗模式） | `"light" \| "dark"` | `"light"` |
| `accentColor` | 全局强调色 | `"blue" \| "red" \| "green" \| "purple" \| "orange" \| "gray" \| ...` | `"blue"` |
| `grayColor` | 全局灰度色调 | `"gray" \| "slate" \| "mauve"` | `"gray"` |
| `radius` | 全局圆角样式 | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"medium"` |
| `scaling` | 全局缩放比例 | `"90%" \| "95%" \| "100%" \| "105%" \| "110%"` | `"100%"` |
| `children` | 子节点内容 | `React.ReactNode` | — |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/theme/overview) 获取完整 API 与设计规范。

----- split line -----

## tooltip (react/tooltip)

﻿# `react-tooltip`

Tooltip 是一个提示组件，当用户将鼠标悬停在元素上时显示简短的说明文本。组件支持自定义内容、宽度和位置等属性。

## 安装

```sh
pnpm add @sea-lion/react-tooltip
# 或者
npm install @sea-lion/react-tooltip
yarn add @sea-lion/react-tooltip
```

## 使用

在代码中引入组件：

```tsx
import * as Tooltip from '@sea-lion/react-tooltip';
```

## 基本使用

```jsx
import { Tooltip } from "@sea-lion/react-tooltip";
import { Button } from "@sea-lion/react-button";

export default () => {
  return (
    <Tooltip content="这是一个提示文本">
      <Button>悬停查看提示</Button>
    </Tooltip>
  );
};
```

## 不同位置

Tooltip 可以显示在目标元素的不同位置：

```jsx
<Tooltip content="顶部提示" side="top">
  <Button>顶部</Button>
</Tooltip>

<Tooltip content="右侧提示" side="right">
  <Button>右侧</Button>
</Tooltip>

<Tooltip content="底部提示" side="bottom">
  <Button>底部</Button>
</Tooltip>

<Tooltip content="左侧提示" side="left">
  <Button>左侧</Button>
</Tooltip>
```

## 自定义延迟

您可以设置显示提示前的延迟时间：

```jsx
<Tooltip content="立即显示" delayDuration={0}>
  <Button>无延迟</Button>
</Tooltip>

<Tooltip content="短延迟显示" delayDuration={300}>
  <Button>短延迟</Button>
</Tooltip>

<Tooltip content="长延迟显示" delayDuration={800}>
  <Button>长延迟</Button>
</Tooltip>
```

## 自定义宽度

可以通过 width、minWidth 和 maxWidth 属性设置提示框的宽度：

```jsx
<Tooltip
  content="固定宽度的提示文本"
  width="200px"
>
  <Button>固定宽度</Button>
</Tooltip>

<Tooltip
  content="这是一个较长的提示文本，设置了最大宽度，内容会自动换行显示"
  maxWidth="250px"
>
  <Button>最大宽度</Button>
</Tooltip>
```

## 可悬停内容

默认情况下，当鼠标离开触发元素时提示会关闭。您可以启用可悬停内容，允许用户将鼠标移动到提示上而不关闭它：

```jsx
<Tooltip content="这个提示可以悬停" disableHoverableContent={false}>
  <Button>可悬停提示</Button>
</Tooltip>
```

## 控制开关状态

Tooltip 可以通过 open 和 onOpenChange 属性来控制其开关状态：

```jsx
const [open, setOpen] = React.useState(false);

<Tooltip content="受控提示" open={open} onOpenChange={setOpen}>
  <Button onClick={() => setOpen(!open)}>
    {open ? "关闭提示" : "打开提示"}
  </Button>
</Tooltip>;
```

## 属性

| 参数                    | 说明                     | 类型                                   | 默认值   | 版本  |
| ----------------------- | ------------------------ | -------------------------------------- | -------- | ----- |
| content                 | 提示内容                 | ReactNode                              | -        | 0.2.3 |
| width                   | 提示框宽度               | string                                 | -        | 0.2.3 |
| minWidth                | 提示框最小宽度           | string                                 | -        | 0.2.3 |
| maxWidth                | 提示框最大宽度           | string                                 | '360px'  | 0.2.3 |
| open                    | 是否显示提示             | boolean                                | -        | 0.2.3 |
| defaultOpen             | 默认是否显示提示         | boolean                                | false    | 0.2.3 |
| onOpenChange            | 提示显示状态变化时的回调 | (open: boolean) => void                | -        | 0.2.3 |
| delayDuration           | 显示延迟时间(毫秒)       | number                                 | 700      | 0.2.3 |
| disableHoverableContent | 是否禁用内容悬停         | boolean                                | true     | 0.2.3 |
| side                    | 提示显示位置             | 'top' \| 'right' \| 'bottom' \| 'left' | 'top'    | 0.2.3 |
| sideOffset              | 提示与目标元素的偏移量   | number                                 | 4        | 0.2.3 |
| align                   | 提示与目标元素的对齐方式 | 'start' \| 'center' \| 'end'           | 'center' | 0.2.3 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/tooltip) 获取完整 API 与设计规范。

## skill (skill)

# Cursor Skills

本目录存放供**业务项目**使用的 Cursor Skill，随仓库通过 git 提交管理。业务方可将需要的 skill 复制到各自项目的 `.cursor/skills/` 下使用。

## 当前包含

| Skill | 说明 |
|-------|------|
| [use-sea-lion-components](./use-sea-lion-components/) | 在业务项目中正确安装、引入和使用 `@sea-lion/react-*` 组件 |

## 使用方式

在业务项目根目录执行（路径按实际情况替换）：

```bash
# 引入「使用 Sea-Lion 组件库」skill
cp -r /path/to/sea-lion-uix/packages/skill/use-sea-lion-components .cursor/skills/
```