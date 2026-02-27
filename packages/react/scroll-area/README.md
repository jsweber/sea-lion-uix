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
