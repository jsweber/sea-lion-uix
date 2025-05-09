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
// 只显示垂直滚动条
<ScrollArea scrollbars="vertical">{/* 内容 */}</ScrollArea>

// 只显示水平滚动条
<ScrollArea scrollbars="horizontal">{/* 内容 */}</ScrollArea>

// 同时显示垂直和水平滚动条
<ScrollArea scrollbars="both">{/* 内容 */}</ScrollArea>
```

## 圆角

使用 `radius` 属性为滚动条设置圆角：

```jsx
<ScrollArea radius="full">{/* 内容 */}</ScrollArea>
<ScrollArea radius="large">{/* 内容 */}</ScrollArea>
```

## 属性

| 参数            | 说明                   | 类型                                      | 默认值  | 版本  |
| --------------- | ---------------------- | ----------------------------------------- | ------- | ----- |
| size            | 滚动条大小             | '1' \| '2' \| '3'                         | '1'     | 0.2.0 |
| radius          | 滚动条圆角             | 标准圆角值                                | -       | 0.2.0 |
| scrollbars      | 显示的滚动条方向       | 'vertical' \| 'horizontal' \| 'both'      | 'both'  | 0.2.0 |
| type            | 滚动条类型             | 'auto' \| 'always' \| 'scroll' \| 'hover' | 'hover' | 0.2.0 |
| scrollHideDelay | 滚动条隐藏延迟（毫秒） | number                                    | -       | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
