import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import KNOWLEDGE_BASE_zh from './KNOWLEDGE_BASE_zh.md';
import KNOWLEDGE_BASE_en from './KNOWLEDGE_BASE_en.md';

function KnowledgeBaseCopyButton({ content, label }: { content: string; label: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(
            () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            },
            () => {},
        );
    };

    const btnStyle: React.CSSProperties = {
        padding: '8px 16px',
        fontSize: '13px',
        borderRadius: '6px',
        border: '1px solid #e5e7eb',
        background: copied ? '#22c55e' : '#fff',
        color: copied ? '#fff' : '#374151',
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontWeight: 500,
    };

    return (
        <button onClick={handleCopy} style={btnStyle}>
            {copied ? '已复制' : label}
        </button>
    );
}

function KnowledgeBaseDocs() {
    const wrapStyle: React.CSSProperties = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '32px 24px',
        fontFamily: 'system-ui, sans-serif',
    };

    const h1Style: React.CSSProperties = {
        fontSize: '24px',
        fontWeight: 700,
        color: '#0f172a',
        marginBottom: '12px',
    };

    const leadStyle: React.CSSProperties = {
        color: '#475569',
        fontSize: '14px',
        marginBottom: '24px',
        lineHeight: '1.7',
    };

    const boxStyle: React.CSSProperties = {
        background: '#fefce8',
        border: '1px solid #fef08a',
        borderRadius: '8px',
        padding: '20px 24px',
    };

    return (
        <div style={wrapStyle}>
            <h1 style={h1Style}>知识库</h1>
            <p style={leadStyle}>
                聚合各组件 readme 的中英文文档，可用于 RAG、向量库或本地查阅。点击下方按钮将全文复制到剪贴板后，粘贴到本地文件或知识库系统中使用。
            </p>
            <div style={boxStyle}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <KnowledgeBaseCopyButton content={KNOWLEDGE_BASE_zh} label="复制中文知识库 (KNOWLEDGE_BASE_zh.md)" />
                    <KnowledgeBaseCopyButton content={KNOWLEDGE_BASE_en} label="复制英文知识库 (KNOWLEDGE_BASE_en.md)" />
                </div>
            </div>
        </div>
    );
}

const meta: Meta<typeof KnowledgeBaseDocs> = {
    title: 'Agent/知识库',
    component: KnowledgeBaseDocs,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof KnowledgeBaseDocs>;

export const Default: Story = {
    name: '知识库文档',
    render: () => <KnowledgeBaseDocs />,
};
