# `react-hover-card`

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

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
