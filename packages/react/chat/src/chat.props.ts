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
    onSend?: (message: string) => void;
}

export type {
    ChatMessage,
    ChatProps,
    chatPropDefs,
    Role
}
