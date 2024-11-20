import * as React from 'react';
import classNames from 'classnames';

import { marginPropDefs, layoutPropDefs } from '@ui-lib-monorepo-template/react-props';
import { extractProps } from '@ui-lib-monorepo-template/react-helpers';
import { Slot } from '@radix-ui/react-slot';

import { flexPropDefs } from './flex.props';

import type { FlexOwnProps } from './flex.props.js';
import type { MarginProps, LayoutProps } from '@ui-lib-monorepo-template/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@ui-lib-monorepo-template/react-helpers';

type FlexElement = React.ElementRef<'div'>;
interface CommonFlexProps extends MarginProps, LayoutProps, FlexOwnProps { }
type FlexDivProps = { as?: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type FlexSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type FlexProps = CommonFlexProps & (FlexSpanProps | FlexDivProps);

const Flex = React.forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    as: Tag = 'div',
    ...flexProps
  } = extractProps(props, flexPropDefs, layoutPropDefs, marginPropDefs);
  const Comp = asChild ? Slot : Tag;
  return <Comp {...flexProps} ref={forwardedRef} className={classNames('rt-Flex', className)} />;
});
Flex.displayName = 'Flex';

export { Flex };
export type { FlexProps };
