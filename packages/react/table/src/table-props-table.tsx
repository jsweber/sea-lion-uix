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

// Table.Root 组件属性
export const tableRootProps = [
  { param: 'size', desc: '表格尺寸', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.1' },
  { param: 'variant', desc: '视觉变体', type: "'surface' | 'ghost'", defaultValue: "'ghost'", version: '0.2.1' },
  { param: 'layout', desc: '表格布局方式', type: "'auto' | 'fixed'", defaultValue: "'auto'", version: '0.2.1' },
];

// Table.Row 组件属性
export const tableRowProps = [
  { param: 'align', desc: '行内容垂直对齐', type: "'start' | 'center' | 'end' | 'baseline'", defaultValue: "-", version: '0.2.1' },
];

// Table.Cell 组件属性
export const tableCellProps = [
  { param: 'justify', desc: '单元格内容对齐', type: "'start' | 'center' | 'end'", defaultValue: "'start'", version: '0.2.1' },
  { param: 'width', desc: '单元格宽度', type: "string", defaultValue: "-", version: '0.2.1' },
];

// API文档组件
export const TablePropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Root 属性" data={tableRootProps} />
      <ApiTable title="Row 属性" data={tableRowProps} />
      <ApiTable title="Cell 属性" data={tableCellProps} />
    </Box>
  );
}; 