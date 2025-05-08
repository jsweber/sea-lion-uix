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

// HoverCard.Root 组件属性
export const hoverCardRootProps = [
  { param: 'openDelay', desc: '显示延迟（毫秒）', type: 'number', defaultValue: '200', version: '0.2.1' },
  { param: 'closeDelay', desc: '关闭延迟（毫秒）', type: 'number', defaultValue: '150', version: '0.2.1' },
];

// HoverCard.Trigger 组件属性
export const hoverCardTriggerProps = [
  { param: 'asChild', desc: '是否将组件作为子元素传递（总是true）', type: 'boolean', defaultValue: 'true', version: '0.2.1' },
];

// HoverCard.Content 组件属性
export const hoverCardContentProps = [
  { param: 'size', desc: '卡片尺寸', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.1' },
  { param: 'asChild', desc: '是否将组件作为子元素传递', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
  { param: 'width', desc: '卡片宽度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'minWidth', desc: '最小宽度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'maxWidth', desc: '最大宽度', type: 'string', defaultValue: "'480px'", version: '0.2.1' },
  { param: 'align', desc: '对齐方式', type: "'start' | 'center' | 'end'", defaultValue: "'start'", version: '0.2.1' },
  { param: 'container', desc: '门户容器', type: 'HTMLElement', defaultValue: '-', version: '0.2.1' },
];

// API文档组件
export const HoverCardPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="HoverCard.Root Props" data={hoverCardRootProps} />
      <ApiTable title="HoverCard.Trigger Props" data={hoverCardTriggerProps} />
      <ApiTable title="HoverCard.Content Props" data={hoverCardContentProps} />
    </Box>
  );
}; 