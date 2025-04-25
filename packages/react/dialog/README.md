# `react-dialog`

Dialog 是一个模态对话框组件，用于显示需要用户注意或操作的内容，同时阻止与页面其余部分的交互，直到对话框关闭。

## 安装

```sh
$ yarn add @sea-lion/react-dialog
# 或者
$ npm install @sea-lion/react-dialog
```

## 基本使用

```jsx
import * as Dialog from "@sea-lion/react-dialog";
import { Button } from "@sea-lion/react-button";

export default () => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Button>打开对话框</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Title>对话框标题</Dialog.Title>
      <Dialog.Description>
        这是一个简单的对话框示例。对话框用于显示需要用户注意或操作的内容。
      </Dialog.Description>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        <Dialog.Close>
          <Button variant="soft" color="gray">
            取消
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button>确认</Button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Root>
);
```

## 何时使用

- 需要用户确认重要操作
- 显示用户需要立即注意的信息
- 收集用户输入而不离开当前页面
- 显示需要用户决策的警告或错误信息
- 展示详细内容而不导航到新页面

## 特点

- 支持不同尺寸（1-4）的对话框
- 可以设置对齐方式（居中或顶部对齐）
- 可自定义宽度、最大宽度和最小宽度
- 提供受控和非受控使用方式
- 内置标题、描述和关闭按钮组件
- 支持自定义内容和表单

## API

### Dialog.Root

| 参数         | 说明                     | 类型                    | 默认值 | 版本  |
| ------------ | ------------------------ | ----------------------- | ------ | ----- |
| defaultOpen  | 默认是否打开             | boolean                 | false  | 0.2.1 |
| open         | 是否打开（受控）         | boolean                 | -      | 0.2.1 |
| onOpenChange | 打开状态变化时的回调函数 | (open: boolean) => void | -      | 0.2.1 |
| modal        | 是否为模态对话框         | boolean                 | true   | 0.2.1 |
| children     | 子元素                   | ReactNode               | -      | 0.2.1 |

### Dialog.Content

| 参数                 | 说明                       | 类型                                     | 默认值        | 版本  |
| -------------------- | -------------------------- | ---------------------------------------- | ------------- | ----- |
| align                | 对话框对齐方式             | 'start' \| 'center'                      | 'center'      | 0.2.1 |
| size                 | 对话框尺寸                 | '1' \| '2' \| '3' \| '4'                 | '3'           | 0.2.1 |
| width                | 宽度                       | string                                   | -             | 0.2.1 |
| minWidth             | 最小宽度                   | string                                   | -             | 0.2.1 |
| maxWidth             | 最大宽度                   | string                                   | '600px'       | 0.2.1 |
| height               | 高度                       | string                                   | -             | 0.2.1 |
| minHeight            | 最小高度                   | string                                   | -             | 0.2.1 |
| maxHeight            | 最大高度                   | string                                   | -             | 0.2.1 |
| container            | 指定对话框挂载的容器       | HTMLElement                              | document.body | 0.2.1 |
| forceMount           | 是否强制渲染对话框         | boolean                                  | -             | 0.2.1 |
| onOpenAutoFocus      | 对话框打开时自动聚焦的回调 | (event: Event) => void                   | -             | 0.2.1 |
| onCloseAutoFocus     | 对话框关闭时自动聚焦的回调 | (event: Event) => void                   | -             | 0.2.1 |
| onEscapeKeyDown      | 按下 ESC 键时的回调        | (event: KeyboardEvent) => void           | -             | 0.2.1 |
| onPointerDownOutside | 在对话框外点击的回调       | (event: PointerDownOutsideEvent) => void | -             | 0.2.1 |
| onInteractOutside    | 与对话框外部交互的回调     | (event: InteractOutsideEvent) => void    | -             | 0.2.1 |
| overLayerClassname   | 自定义遮罩层的类名         | string                                   | -             | 0.2.1 |

### Dialog.Trigger

| 参数     | 说明                                | 类型         | 默认值 | 版本  |
| -------- | ----------------------------------- | ------------ | ------ | ----- |
| children | 子元素（必须是可渲染的 React 元素） | ReactElement | -      | 0.2.1 |

### Dialog.Close

| 参数     | 说明                                | 类型         | 默认值 | 版本  |
| -------- | ----------------------------------- | ------------ | ------ | ----- |
| children | 子元素（必须是可渲染的 React 元素） | ReactElement | -      | 0.2.1 |

### Dialog.Title

| 参数     | 说明         | 类型                                                        | 默认值 | 版本  |
| -------- | ------------ | ----------------------------------------------------------- | ------ | ----- |
| children | 标题内容     | ReactNode                                                   | -      | 0.2.1 |
| size     | 标题尺寸     | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | '5'    | 0.2.1 |
| weight   | 文本粗细     | 'light' \| 'regular' \| 'medium' \| 'bold'                  | -      | 0.2.1 |
| color    | 文本颜色     | string                                                      | -      | 0.2.1 |
| align    | 文本对齐方式 | 'left' \| 'center' \| 'right'                               | -      | 0.2.1 |

### Dialog.Description

| 参数     | 说明     | 类型                                                        | 默认值 | 版本  |
| -------- | -------- | ----------------------------------------------------------- | ------ | ----- |
| children | 描述内容 | ReactNode                                                   | -      | 0.2.1 |
| size     | 文本尺寸 | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | '3'    | 0.2.1 |
| weight   | 文本粗细 | 'light' \| 'regular' \| 'medium' \| 'bold'                  | -      | 0.2.1 |
| color    | 文本颜色 | string                                                      | -      | 0.2.1 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
