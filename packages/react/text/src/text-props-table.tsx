import React from 'react';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';

interface TableProps {
  title: string;
  data: Array<{
    param: string;
    desc: string;
    type: string;
    defaultValue: string;
    version: string;
  }>;
}

const ApiTable: React.FC<TableProps> = ({ title, data }) => {
    return (
        <>
            <Text size="4" weight="bold" mt="6" mb="3">{title}</Text>
            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--gray-3)' }}>
                            <th style={{ textAlign: 'left', padding: '12px 16px', width: '15%', borderBottom: '2px solid var(--gray-5)' }}>参数</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', width: '35%', borderBottom: '2px solid var(--gray-5)' }}>说明</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', width: '30%', borderBottom: '2px solid var(--gray-5)' }}>类型</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>默认值</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>版本</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--gray-1)' : undefined }}>
                                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.param}</td>
                                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.desc}</td>
                                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.type}</td>
                                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.defaultValue}</td>
                                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.version}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

// 完整的属性列表
export const textProps = [
    { param: 'as', desc: '渲染的HTML元素', type: "'span' | 'div' | 'label' | 'p'", defaultValue: "'span'", version: '0.2.0' },
    { param: 'size', desc: '文本尺寸', type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'", defaultValue: "-", version: '0.2.0' },
    { param: 'weight', desc: '文本字重', type: "'light' | 'regular' | 'medium' | 'bold'", defaultValue: "'regular'", version: '0.2.0' },
    { param: 'color', desc: '文本颜色', type: "ColorProp", defaultValue: "-", version: '0.2.0' },
    { param: 'textAlign', desc: '文本对齐方式', type: "'left' | 'center' | 'right'", defaultValue: "-", version: '0.2.0' },
    { param: 'truncate', desc: '是否截断溢出的文本', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'asChild', desc: '是否将样式应用于子元素', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'highContrast', desc: '是否使用高对比度模式', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'trim', desc: '文本修剪', type: "'normal' | 'start' | 'end' | 'both'", defaultValue: "'normal'", version: '0.2.0' },
    { param: 'lineHeight', desc: '行高', type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'", defaultValue: "-", version: '0.2.0' },
    { param: 'fontFamily', desc: '字体族', type: "'sans' | 'mono'", defaultValue: "'sans'", version: '0.2.0' },
    { param: 'fontVariantNumeric', desc: '数字字体变体', type: "'normal' | 'numeric' | 'tabular' | 'proportional'", defaultValue: "-", version: '0.2.0' },
    { param: 'letterSpacing', desc: '字母间距', type: "'normal' | 'tight' | 'tighter' | 'wide' | 'wider'", defaultValue: "'normal'", version: '0.2.0' },
    { param: 'textDecorationLine', desc: '文本装饰线', type: "'none' | 'underline' | 'line-through'", defaultValue: "'none'", version: '0.2.0' },
];

// API文档组件
export const TextPropsComponent: React.FC = () => {
    return (
        <Box p="5" style={{ maxWidth: '900px' }}>
            <ApiTable title="Text Props" data={textProps} />
        </Box>
    );
};
