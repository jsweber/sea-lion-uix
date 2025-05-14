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

// Tabs.Root 组件属性
export const tabsRootProps = [
  { param: 'defaultValue', desc: '默认选中的选项卡', type: "string", defaultValue: "-", version: '0.2.1' },
  { param: 'value', desc: '当前选中的选项卡(受控)', type: "string", defaultValue: "-", version: '0.2.1' },
  { param: 'onValueChange', desc: '选项卡切换时的回调', type: "(value: string) => void", defaultValue: "-", version: '0.2.1' },
  { param: 'asChild', desc: '是否将子元素作为根节点', type: "boolean", defaultValue: "false", version: '0.2.1' },
];

// Tabs.List 组件属性
export const tabsListProps = [
  { param: 'size', desc: '尺寸', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.1' },
  { param: 'color', desc: '颜色', type: "string", defaultValue: "'blue'", version: '0.2.1' },
  { param: 'highContrast', desc: '是否使用高对比度', type: "boolean", defaultValue: "false", version: '0.2.1' },
  { param: 'variant', desc: '变体样式', type: "'surface' | 'underline'", defaultValue: "'surface'", version: '0.2.1' },
];

// Tabs.Trigger 组件属性
export const tabsTriggerProps = [
  { param: 'value', desc: '选项卡的值', type: "string", defaultValue: "-", version: '0.2.1' },
  { param: 'disabled', desc: '是否禁用', type: "boolean", defaultValue: "false", version: '0.2.1' },
];

// Tabs.Content 组件属性
export const tabsContentProps = [
  { param: 'value', desc: '对应的选项卡值', type: "string", defaultValue: "-", version: '0.2.1' },
  { param: 'asChild', desc: '是否将子元素作为根节点', type: "boolean", defaultValue: "false", version: '0.2.1' },
];

// API文档组件
export const TabsRootPropsComponent: React.FC = () => {
  return (
    <Box style={{ maxWidth: '900px' }}>
      <ApiTable title="Tabs.Root 属性" data={tabsRootProps} />
    </Box>
  );
};

export const TabsListPropsComponent: React.FC = () => {
  return (
    <Box style={{ maxWidth: '900px' }}>
      <ApiTable title="Tabs.List 属性" data={tabsListProps} />
    </Box>
  );
};

export const TabsTriggerPropsComponent: React.FC = () => {
  return (
    <Box style={{ maxWidth: '900px' }}>
      <ApiTable title="Tabs.Trigger 属性" data={tabsTriggerProps} />
    </Box>
  );
};

export const TabsContentPropsComponent: React.FC = () => {
  return (
    <Box style={{ maxWidth: '900px' }}>
      <ApiTable title="Tabs.Content 属性" data={tabsContentProps} />
    </Box>
  );
}; 