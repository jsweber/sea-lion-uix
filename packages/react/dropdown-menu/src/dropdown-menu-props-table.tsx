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
    { param: 'modal', desc: '是否为模态下拉菜单', type: 'boolean', defaultValue: 'true', version: '0.2.1' },
    { param: 'children', desc: '子元素', type: 'ReactNode', defaultValue: '-', version: '0.2.1' },
];

// Content 组件属性
export const contentProps = [
    { param: 'size', desc: '菜单尺寸', type: "'1' | '2'", defaultValue: "'2'", version: '0.2.1' },
    { param: 'variant', desc: '菜单样式变体', type: "'solid' | 'soft'", defaultValue: "'solid'", version: '0.2.1' },
    { param: 'color', desc: '菜单主题色', type: 'string', defaultValue: "'gray'", version: '0.2.1' },
    { param: 'highContrast', desc: '是否高对比度', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
    { param: 'align', desc: '对齐方式', type: "'start' | 'center' | 'end'", defaultValue: "'start'", version: '0.2.1' },
    { param: 'side', desc: '弹出位置', type: "'top' | 'right' | 'bottom' | 'left'", defaultValue: "'bottom'", version: '0.2.1' },
    { param: 'sideOffset', desc: '侧边偏移', type: 'number', defaultValue: '4', version: '0.2.1' },
    { param: 'alignOffset', desc: '对齐偏移', type: 'number', defaultValue: '0', version: '0.2.1' },
    { param: 'container', desc: '指定挂载的容器', type: 'HTMLElement', defaultValue: '-', version: '0.2.1' },
];

// Item 组件属性
export const itemProps = [
    { param: 'color', desc: '选项颜色', type: 'string', defaultValue: "'gray'", version: '0.2.1' },
    { param: 'shortcut', desc: '快捷键提示', type: 'ReactNode', defaultValue: '-', version: '0.2.1' },
    { param: 'disabled', desc: '是否禁用', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
    { param: 'onSelect', desc: '选择事件回调', type: '(event: Event) => void', defaultValue: '-', version: '0.2.1' },
    { param: 'children', desc: '子元素', type: 'ReactNode', defaultValue: '-', version: '0.2.1' },
];

// CheckboxItem & RadioItem 组件属性
export const checkboxRadioProps = [
    { param: 'checked/value', desc: '选中状态/值', type: 'boolean/string', defaultValue: '-', version: '0.2.1' },
    { param: 'onCheckedChange/onValueChange', desc: '选中状态/值变化回调', type: '(checked: boolean) => void<br/>(value: string) => void', defaultValue: '-', version: '0.2.1' },
    { param: 'color', desc: '选项颜色', type: 'string', defaultValue: "'gray'", version: '0.2.1' },
    { param: 'shortcut', desc: '快捷键提示', type: 'ReactNode', defaultValue: '-', version: '0.2.1' },
    { param: 'disabled', desc: '是否禁用', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
    { param: 'children', desc: '子元素', type: 'ReactNode', defaultValue: '-', version: '0.2.1' },
];

// API文档组件
export const DropdownMenuPropsComponent: React.FC = () => {
    return (
        <Box p="5" style={{ maxWidth: '900px' }}>
            <ApiTable title="DropdownMenu.Root" data={rootProps} />
            <ApiTable title="DropdownMenu.Content" data={contentProps} />
            <ApiTable title="DropdownMenu.Item" data={itemProps} />
            <ApiTable title="DropdownMenu.CheckboxItem & DropdownMenu.RadioItem" data={checkboxRadioProps} />
        </Box>
    );
};
