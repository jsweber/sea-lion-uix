import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { containerPropDefs } from './container.props';
import { extractProps, getSubtree } from '@sea-lion/react-helpers';
import { heightPropDefs, layoutPropDefs, marginPropDefs, widthPropDefs } from '@sea-lion/react-props';

import type { LayoutProps, MarginProps } from '@sea-lion/react-props';
import type { ContainerOwnProps } from './container.props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type ContainerElement = React.ElementRef<'div'>;
interface ContainerProps
  extends ComponentPropsWithout<'div', RemovedProps>,
  MarginProps,
  LayoutProps,
  ContainerOwnProps { }
const Container = React.forwardRef<ContainerElement, ContainerProps>(
    ({ width, minWidth, maxWidth, height, minHeight, maxHeight, ...props }, forwardedRef) => {
        const { asChild, children, className, ...containerProps } = extractProps(
            props,
            containerPropDefs,
            layoutPropDefs,
            marginPropDefs,
        );

        const { className: innerClassName, style: innerStyle } = extractProps(
            { width, minWidth, maxWidth, height, minHeight, maxHeight },
            widthPropDefs,
            heightPropDefs,
        );

        const Comp = asChild ? Slot : 'div';

        return (
            <Comp
                {...containerProps}
                ref={forwardedRef}
                className={classNames('rt-Container', className)}
            >
                {getSubtree({ asChild, children }, (children) => (
                    <div className={classNames('rt-ContainerInner', innerClassName)} style={innerStyle}>
                        {children}
                    </div>
                ))}
            </Comp>
        );
    },
);
Container.displayName = 'Container';

export { Container };
export type { ContainerProps };
