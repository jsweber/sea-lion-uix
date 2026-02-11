'use client';

import { useState } from 'react';
import type { ChatProps } from './chat.props';
import './style/index.less';

const Chat = ({ messages, ...props }: ChatProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            // 处理发送消息的逻辑
            setInputValue('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="rt-ChatContainer">
            <div className="rt-ChatWrapper">
                <div className="rt-ChatContent">
                    {messages.map((message) => (
                        <div key={message.id} className="rt-Message">
                            {message.content}
                        </div>
                    ))}
                </div>
                <div className="rt-ChatInputArea">
                    <input
                        type="text"
                        className="rt-ChatInput"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="请输入消息..."
                    />
                    <button className="rt-ChatSendButton" onClick={handleSend}>
                        发送
                    </button>
                </div>
            </div>
        </div>
    );
};

Chat.displayName = 'SealLionChat';

export { Chat };
