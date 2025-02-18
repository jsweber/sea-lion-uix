import type { PropDef } from '@sea-lion/react-props';

const chatPropDefs = {} satisfies {};

type Role = 'user' | 'assistant' | 'system' | 'Tool';

interface ChatMessage {
    id: string;
    content: string;
    sender: string;
    timestamp: string;
}

interface ChatProps {
    messages: ChatMessage[];
}

export type {
    ChatMessage,
    ChatProps,
    chatPropDefs,
    Role
}
