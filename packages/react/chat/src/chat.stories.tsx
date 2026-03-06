import type { Meta, StoryObj } from '@storybook/react';
import { Chat } from './chat';
import { Theme } from '@sea-lion/react-theme';

const meta = {
    title: '实验/Chat',
    component: Chat,
    tags: ['autodocs'],
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof Chat>;

const sampleMessages = [
    {
        id: '1',
        content: '你好！',
        sender: 'user',
        timestamp: '2024-01-01 12:00',
    },
];

export const Basic: Story = {
    name: '基本用法',
    render: () => (
        <Theme>
            <Chat messages={sampleMessages} />
        </Theme>
    ),
};
