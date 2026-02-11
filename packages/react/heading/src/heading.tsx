import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { headingPropDefs } from './heading.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs, MarginProps } from '@sea-lion/react-props';

import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';
import type { GetPropDefTypes } from '@sea-lion/react-props';

type HeadingElement = React.ElementRef<'h1'>;
type HeadingOwnProps = GetPropDefTypes<typeof headingPropDefs>;
interface HeadingProps
  extends ComponentPropsWithout<'h1', RemovedProps>,
  MarginProps,
  HeadingOwnProps {
  textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty';
}

const Heading = React.forwardRef<HeadingElement, HeadingProps>((props, forwardedRef) => {
    const {
        children,
        className,
        asChild,
        as: Tag = 'h1',
        color,
        ...headingProps
    } = extractProps(props, headingPropDefs, marginPropDefs);
    return (
        <Slot
            data-accent-color={color}
            {...headingProps}
            ref={forwardedRef}
            className={classNames('rt-Heading', className)}
        >
            {asChild ? children : <Tag>{children}</Tag>}
        </Slot>
    );
});
Heading.displayName = 'Heading';

export { Heading };
export type { HeadingProps };
