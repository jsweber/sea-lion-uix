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

// Grid 组件属性
export const gridProps = [
  { param: 'as', desc: '要渲染的HTML元素', type: "'div' | 'span'", defaultValue: "'div'", version: '0.2.0' },
  { param: 'asChild', desc: '是否将组件作为子元素传递', type: 'boolean', defaultValue: 'false', version: '0.2.0' },
  { param: 'display', desc: 'CSS display属性', type: "'none' | 'inline-grid' | 'grid'", defaultValue: "'grid'", version: '0.2.0' },
  { param: 'areas', desc: 'CSS grid-template-areas属性', type: 'string', defaultValue: "-", version: '0.2.0' },
  { param: 'columns', desc: 'CSS grid-template-columns属性', type: "'1' - '9' | string", defaultValue: "-", version: '0.2.0' },
  { param: 'rows', desc: 'CSS grid-template-rows属性', type: "'1' - '9' | string", defaultValue: "-", version: '0.2.0' },
  { param: 'flow', desc: 'CSS grid-auto-flow属性', type: "'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'", defaultValue: "-", version: '0.2.0' },
  { param: 'align', desc: 'CSS align-items属性', type: "'start' | 'center' | 'end' | 'baseline' | 'stretch'", defaultValue: "'stretch'", version: '0.2.0' },
  { param: 'justify', desc: 'CSS justify-content属性', type: "'start' | 'center' | 'end' | 'between'", defaultValue: "'start'", version: '0.2.0' },
  { param: 'gap', desc: '子元素之间的间距', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'width', desc: '宽度', type: 'string | number', defaultValue: "-", version: '0.2.0' },
  { param: 'height', desc: '高度', type: 'string | number', defaultValue: "-", version: '0.2.0' },
  { param: 'm', desc: '外边距 (margin)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'mx', desc: '水平外边距 (margin-left, margin-right)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'my', desc: '垂直外边距 (margin-top, margin-bottom)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'mt', desc: '上外边距 (margin-top)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'mr', desc: '右外边距 (margin-right)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'mb', desc: '下外边距 (margin-bottom)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' },
  { param: 'ml', desc: '左外边距 (margin-left)', type: "'1' - '9'", defaultValue: "-", version: '0.2.0' }
];

// API文档组件
export const GridPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Grid Props" data={gridProps} />
    </Box>
  );
}; 