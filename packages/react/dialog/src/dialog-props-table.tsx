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
                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }} dangerouslySetInnerHTML={{ __html: item.type }} />
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

// Root 组件属性
export const rootProps = [
  { param: 'defaultOpen', desc: '默认是否打开', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
  { param: 'open', desc: '是否打开（受控）', type: 'boolean', defaultValue: '-', version: '0.2.1' },
  { param: 'onOpenChange', desc: '打开状态变化时的回调函数', type: '(open: boolean) => void', defaultValue: '-', version: '0.2.1' },
  { param: 'modal', desc: '是否模态对话框', type: 'boolean', defaultValue: 'true', version: '0.2.1' },
  { param: 'children', desc: '子元素', type: 'ReactNode', defaultValue: '-', version: '0.2.1' }
];

// Content 组件属性
export const contentProps = [
  { param: 'size', desc: '对话框尺寸', type: "'1' | '2' | '3' | '4'", defaultValue: "'3'", version: '0.2.1' },
  { param: 'overlayClass', desc: '遮罩层类名', type: 'string', defaultValue: "''", version: '0.2.1' },
  { param: 'overlayStyle', desc: '遮罩层样式', type: 'CSSProperties', defaultValue: '{}', version: '0.2.1' },
  { param: 'container', desc: '指定挂载的容器', type: 'HTMLElement', defaultValue: '-', version: '0.2.1' }
];

// Trigger 组件属性
export const triggerProps = [
  { param: 'asChild', desc: '是否作为子元素传递', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
  { param: 'children', desc: '子元素', type: 'ReactNode', defaultValue: '-', version: '0.2.1' }
];

// Title、Description 组件属性
export const titleDescriptionProps = [
  { param: 'children', desc: '描述内容', type: 'ReactNode', defaultValue: '-', version: '0.2.1' },
  { param: 'size', desc: '文本尺寸', type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'", defaultValue: "'3'", version: '0.2.1' },
  { param: 'weight', desc: '文本粗细', type: "'light' | 'regular' | 'medium' | 'bold'", defaultValue: '-', version: '0.2.1' },
  { param: 'color', desc: '文本颜色', type: 'string', defaultValue: '-', version: '0.2.1' }
];

// API文档组件
export const DialogPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Dialog.Root" data={rootProps} />
      <ApiTable title="Dialog.Content" data={contentProps} />
      <ApiTable title="Dialog.Trigger" data={triggerProps} />
      <ApiTable title="Dialog.Title & Dialog.Description" data={titleDescriptionProps} />
    </Box>
  );
}; 