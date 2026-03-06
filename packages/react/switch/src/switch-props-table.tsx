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
            <Text size="3" weight="bold" mt="6" mb="3">{title}</Text>
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

// Switch 组件属性
export const switchProps = [
    { param: 'size', desc: '开关尺寸', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.0' },
    { param: 'variant', desc: '开关变体样式', type: "'classic' | 'surface' | 'soft'", defaultValue: "'surface'", version: '0.2.0' },
    { param: 'color', desc: '开关颜色', type: "string", defaultValue: "'blue'", version: '0.2.0' },
    { param: 'radius', desc: '圆角大小', type: "string", defaultValue: "-", version: '0.2.0' },
    { param: 'highContrast', desc: '是否使用高对比度', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'checked', desc: '当前状态（受控）', type: "boolean", defaultValue: "-", version: '0.2.0' },
    { param: 'defaultChecked', desc: '默认选中状态', type: "boolean", defaultValue: "false", version: '0.2.0' },
    { param: 'onCheckedChange', desc: '状态变化时的回调', type: "(checked: boolean) => void", defaultValue: "-", version: '0.2.0' },
    { param: 'disabled', desc: '是否禁用', type: "boolean", defaultValue: "false", version: '0.2.0' },
];

// API文档组件
export const SwitchPropsComponent: React.FC = () => {
    return (
        <Box style={{ maxWidth: '900px' }}>
            <ApiTable title="Switch 属性" data={switchProps} />
        </Box>
    );
};
