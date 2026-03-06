# `react-chat`

The Chat component renders a conversation message list with an integrated input area and send button, ideal for AI chat, customer service, and similar scenarios.

## Installation

```sh
pnpm add @sea-lion/react-chat
# or
npm install @sea-lion/react-chat
yarn add @sea-lion/react-chat
```

## Usage

Import the component in your code:

```tsx
import { Chat } from '@sea-lion/react-chat';
```

## When to Use

- When displaying conversation history between a user and an AI / agent
- When you need a combined chat input and send button UI
- When rendering an ordered list of dialog messages

## Basic Usage

```tsx
import { Chat } from '@sea-lion/react-chat';
import { Theme } from '@sea-lion/react-theme';

const messages = [
  {
    id: '1',
    content: 'Hello! How can I help you?',
    sender: 'assistant',
    timestamp: '2024-01-01 12:00',
  },
  {
    id: '2',
    content: 'I want to learn more about this component library.',
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

## Controlled Usage (Handling Send)

The `onSend` callback fires when the user clicks the send button or presses `Enter`. Use it to append new messages to the list:

```tsx
import { useState } from 'react';
import { Chat } from '@sea-lion/react-chat';
import type { ChatMessage } from '@sea-lion/react-chat';

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', content: 'Hello!', sender: 'assistant', timestamp: '' },
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

## ChatMessage Type

| Field | Description | Type | Required |
|-------|-------------|------|----------|
| id | Unique message identifier | `string` | Yes |
| content | Message body text | `string` | Yes |
| sender | Sender identifier (e.g. `'user'` / `'assistant'`) | `string` | Yes |
| timestamp | Display timestamp string | `string` | Yes |

## Chat Props

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| messages | Array of chat messages | `ChatMessage[]` | — |
| onSend | Callback fired when the user sends a message; receives the input text | `(message: string) => void` | — |

## Keyboard Interaction

| Key | Description |
|-----|-------------|
| `Enter` | Send message (no line break) |
| `Shift + Enter` | Insert line break (no send) |

## Learn More

Chat is an experimental built-in component of sea-lion-uix with no corresponding Radix UI documentation. Use it together with `@sea-lion/react-theme` for consistent visual styling.
