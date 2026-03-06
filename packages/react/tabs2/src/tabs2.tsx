import * as React from 'react';
import classNames from 'classnames';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';
import type { MarginProps } from '@sea-lion/react-props';

interface TabsProps extends MarginProps {
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
  className?: string;
  size?: '1' | '2' | '3';
  variant?: 'surface' | 'ghost';
  color?: 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'pink';
  highContrast?: boolean;
  animationDuration?: number;
  orientation?: 'horizontal' | 'vertical';
}

interface TabPaneProps {
  tab: React.ReactNode;
  children?: React.ReactNode;
  tabKey: string;
  className?: string;
  disabled?: boolean;
}

const TabPane: React.FC<TabPaneProps> = () => null;
TabPane.displayName = 'Tabs2.TabPane';

const Tabs2: React.FC<TabsProps> & { TabPane: typeof TabPane } = ({
    defaultActiveKey,
    activeKey: propActiveKey,
    onChange,
    children,
    className,
    size = '2',
    variant = 'surface',
    color = 'gray',
    highContrast = false,
    animationDuration = 150,
    orientation = 'horizontal',
    ...marginProps
}) => {
    const [activeKey, setActiveKey] = React.useState(propActiveKey || defaultActiveKey || '');
    const [inkStyle, setInkStyle] = React.useState({ left: 0, top: 0, width: 0, height: 0 });
    const tabsRef = React.useRef<HTMLDivElement>(null);
    const { className: marginClassName, ...restMarginProps } = extractProps(
        marginProps,
        marginPropDefs,
    );

    // 获取所有的 TabPane 子组件
    const panes = React.Children.toArray(children).filter(
        (child): child is React.ReactElement<TabPaneProps> =>
            React.isValidElement(child) && child.type === TabPane,
    );

    // 更新指示器位置
    const updateInkStyle = (key: string) => {
        if (tabsRef.current) {
            const tabNode = tabsRef.current.querySelector(`[data-key="${key}"]`) as HTMLElement;
            if (tabNode) {
                setInkStyle({
                    left: orientation === 'horizontal' ? tabNode.offsetLeft : 0,
                    top: orientation === 'vertical' ? tabNode.offsetTop : 0,
                    width: orientation === 'horizontal' ? tabNode.offsetWidth : 2,
                    height: orientation === 'vertical' ? tabNode.offsetHeight : 2,
                });
            }
        }
    };

    // 处理标签点击
    const handleTabClick = (key: string, disabled?: boolean) => {
        if (disabled) return;
        if (!propActiveKey) {
            setActiveKey(key);
        }
        onChange?.(key);
        updateInkStyle(key);
    };

    // 初始化和 activeKey 变化时更新指示器
    React.useEffect(() => {
        const currentKey = propActiveKey || activeKey;
        if (currentKey) {
            updateInkStyle(currentKey);
        }
    }, [propActiveKey, activeKey]);

    const currentKey = propActiveKey || activeKey;

    return (
        <div
            className={classNames(
                'rt-Tabs2',
        `rt-r-size-${size}`,
        variant && `rt-variant-${variant}`,
        `rt-orientation-${orientation}`,
        {
            'rt-high-contrast': highContrast,
        },
        marginClassName,
        className,
            )}
            {...restMarginProps}
            data-accent-color={color}
            style={{ '--tabs2-animation-duration': `${animationDuration}ms` } as React.CSSProperties}
        >
            <div className="rt-Tabs2Nav" ref={tabsRef}>
                {panes.map(({ props: { tab, tabKey, disabled } }) => (
                    <div
                        key={tabKey}
                        data-key={tabKey}
                        className={classNames('rt-Tabs2Tab', {
                            'rt-Tabs2TabActive': currentKey === tabKey,
                            'rt-Tabs2TabDisabled': disabled,
                        })}
                        onClick={() => handleTabClick(tabKey, disabled)}
                    >
                        <span className="rt-Tabs2TabInner">{tab}</span>
                        <span className="rt-Tabs2TabInnerHidden">{tab}</span>
                    </div>
                ))}
                <div
                    className="rt-Tabs2Ink"
                    style={{
                        transform: orientation === 'horizontal'
                            ? `translateX(${inkStyle.left}px)`
                            : `translateY(${inkStyle.top}px)`,
                        width: inkStyle.width,
                        height: inkStyle.height,
                    }}
                />
            </div>
            <div className="rt-Tabs2Content">
                {panes.map(
                    ({ props: { children: paneChildren, tabKey, className: paneClassName } }) =>
                        currentKey === tabKey && (
                            <div key={tabKey} className={classNames('rt-Tabs2Pane', paneClassName)}>
                                {paneChildren}
                            </div>
                        ),
                )}
            </div>
        </div>
    );
};

Tabs2.TabPane = TabPane;
export default Tabs2;
