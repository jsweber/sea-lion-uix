# `react-popover`

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
