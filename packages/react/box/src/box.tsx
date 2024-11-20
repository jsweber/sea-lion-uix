import * as React from 'react';
import classNames from 'classnames';

import { Slot } from '@radix-ui/react-slot';
import { boxPropDefs } from './box.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs, layoutPropDefs } from '@sea-lion/react-props';

import type { LayoutProps, MarginProps } from '@sea-lion/react-props';
import type { BoxOwnProps } from './box.props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type BoxElement = React.ElementRef<'div'>;
interface CommonBoxProps extends MarginProps, LayoutProps, BoxOwnProps { }
type BoxDivProps = { as?: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type BoxSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type BoxProps = CommonBoxProps & (BoxSpanProps | BoxDivProps);

const Box = React.forwardRef<BoxElement, BoxProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    as: Tag = 'div',
    ...boxProps
  } = extractProps(props, boxPropDefs, layoutPropDefs, marginPropDefs);
  const Comp = asChild ? Slot : Tag;
  return <Comp {...boxProps} ref={forwardedRef} className={classNames('rt-Box', className)} />;
});
Box.displayName = 'Box';

export { Box };
export type { BoxProps };
