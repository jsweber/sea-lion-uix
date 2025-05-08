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

// Link 组件属性
export const linkProps = [
  { param: 'size', desc: '链接尺寸', type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'weight', desc: '字重', type: "'light' | 'regular' | 'medium' | 'bold'", defaultValue: "regular", version: '0.2.0' },
  { param: 'underline', desc: '下划线样式', type: "'auto' | 'always' | 'hover' | 'none'", defaultValue: "auto", version: '0.2.0' },
  { param: 'color', desc: '颜色', type: "标准颜色", defaultValue: "-", version: '0.2.0' },
  { param: 'highContrast', desc: '高对比度模式', type: "boolean", defaultValue: "false", version: '0.2.0' },
  { param: 'truncate', desc: '文本截断', type: "boolean", defaultValue: "false", version: '0.2.0' },
  { param: 'textWrap', desc: '文本换行方式', type: "'wrap' | 'nowrap' | 'balance' | 'pretty'", defaultValue: "wrap", version: '0.2.0' },
  { param: 'asChild', desc: '将组件的样式和行为应用于子元素', type: "boolean", defaultValue: "false", version: '0.2.0' },
];

// API文档组件
export const LinkPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Link Props" data={linkProps} />
    </Box>
  );
}; 