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
