# `react-tooltip`

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

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
