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
