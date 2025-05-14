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

// Skeleton 组件属性
export const skeletonProps = [
  { param: 'loading', desc: '是否显示加载占位符', type: 'boolean', defaultValue: 'true', version: '0.2.0' },
  { param: 'width', desc: '宽度（支持响应式）', type: "CSSProperties['width']", defaultValue: '-', version: '0.2.0' },
  { param: 'minWidth', desc: '最小宽度（支持响应式）', type: "CSSProperties['minWidth']", defaultValue: '-', version: '0.2.0' },
  { param: 'maxWidth', desc: '最大宽度（支持响应式）', type: "CSSProperties['maxWidth']", defaultValue: '-', version: '0.2.0' },
  { param: 'height', desc: '高度（支持响应式）', type: "CSSProperties['height']", defaultValue: '-', version: '0.2.0' },
  { param: 'minHeight', desc: '最小高度（支持响应式）', type: "CSSProperties['minHeight']", defaultValue: '-', version: '0.2.0' },
  { param: 'maxHeight', desc: '最大高度（支持响应式）', type: "CSSProperties['maxHeight']", defaultValue: '-', version: '0.2.0' },
  { param: 'children', desc: '加载完成后显示的内容', type: 'React.ReactNode', defaultValue: '-', version: '0.2.0' },
];

// API文档组件
export const SkeletonPropsComponent: React.FC = () => {
  return (
    <Box style={{ maxWidth: '900px' }}>
      <ApiTable title="Skeleton 属性" data={skeletonProps} />
    </Box>
  );
}; 