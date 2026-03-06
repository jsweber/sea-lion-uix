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
