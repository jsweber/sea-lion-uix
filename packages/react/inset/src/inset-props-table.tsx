import React from 'react';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';

interface TableProps {
  title: string;
  data: {
    param: string;
    desc: string;
    type: string;
    defaultValue: string;
    version: string;
  }[];
}

const ApiTable: React.FC<TableProps> = ({ title, data }) => {
  return (
    <>
      <Text size="4" weight="bold" mt="6" mb="3">{title}</Text>
      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--gray-3)' }}>
              <th style={{ textAlign: 'left', padding: '12px 16px', width: '20%', borderBottom: '2px solid var(--gray-5)' }}>参数</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', width: '35%', borderBottom: '2px solid var(--gray-5)' }}>说明</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', width: '25%', borderBottom: '2px solid var(--gray-5)' }}>类型</th>
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

// Inset 组件属性
export const insetProps = [
  { param: 'side', desc: '应用 Inset 的边', type: "'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right'", defaultValue: "'all'", version: '0.2.0' },
  { param: 'clip', desc: '裁剪盒模型', type: "'border-box' | 'padding-box'", defaultValue: "'border-box'", version: '0.2.0' },
  { param: 'p', desc: '所有方向内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'px', desc: '水平方向内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'py', desc: '垂直方向内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'pt', desc: '顶部内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'pr', desc: '右侧内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'pb', desc: '底部内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'pl', desc: '左侧内边距', type: "'current' | '0'", defaultValue: "-", version: '0.2.0' },
  { param: 'asChild', desc: '将组件的样式和行为应用于子元素', type: "boolean", defaultValue: "false", version: '0.2.0' },
];

// API文档组件
export const InsetPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Inset Props" data={insetProps} />
    </Box>
  );
}; 