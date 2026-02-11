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
export const textAreaProps = [
    { param: 'size', desc: '文本框尺寸', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.0' },
    { param: 'variant', desc: '文本框变体样式', type: "'classic' | 'surface' | 'soft'", defaultValue: "'classic'", version: '0.2.0' },
    { param: 'color', desc: '文本框颜色', type: "ColorProp", defaultValue: "'gray'", version: '0.2.0' },
    { param: 'placeholder', desc: '占位符文本', type: "string", defaultValue: "-", version: '0.2.0' },
    { param: 'resize', desc: '调整大小方式', type: "'none' | 'vertical' | 'horizontal' | 'both'", defaultValue: "'vertical'", version: '0.2.0' },
    { param: 'radius', desc: '圆角样式', type: "'none' | 'small' | 'medium' | 'large' | 'full'", defaultValue: "'medium'", version: '0.2.0' },
    { param: 'disabled', desc: '是否禁用', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'readOnly', desc: '是否只读', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'value', desc: '文本框的值', type: "string", defaultValue: "-", version: '0.2.0' },
    { param: 'defaultValue', desc: '默认文本值', type: "string", defaultValue: "-", version: '0.2.0' },
    { param: 'onChange', desc: '值变化时的回调函数', type: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void", defaultValue: "-", version: '0.2.0' },
    { param: 'rows', desc: '文本框的行数', type: "number", defaultValue: "-", version: '0.2.0' },
    { param: 'cols', desc: '文本框的列数', type: "number", defaultValue: "-", version: '0.2.0' },
    { param: 'minRows', desc: '最小行数', type: "number", defaultValue: "-", version: '0.2.0' },
    { param: 'maxRows', desc: '最大行数', type: "number", defaultValue: "-", version: '0.2.0' },
    { param: 'autoFocus', desc: '是否自动获取焦点', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'name', desc: '表单字段名称', type: "string", defaultValue: "-", version: '0.2.0' },
    { param: 'form', desc: '关联的表单ID', type: "string", defaultValue: "-", version: '0.2.0' },
    { param: 'required', desc: '是否必填', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'wrap', desc: '文本换行方式', type: "'soft' | 'hard'", defaultValue: "'soft'", version: '0.2.0' },
];

// API文档组件
export const TextAreaPropsComponent: React.FC = () => {
    return (
        <Box p="5" style={{ maxWidth: '900px' }}>
            <ApiTable title="TextArea Props" data={textAreaProps} />
        </Box>
    );
};
