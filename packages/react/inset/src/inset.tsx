import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { insetPropDefs } from './inset.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';
import type { GetPropDefTypes } from '@sea-lion/react-props';

type InsetElement = React.ElementRef<'div'>;
type InsetOwnProps = GetPropDefTypes<typeof insetPropDefs>;
interface InsetProps
  extends ComponentPropsWithout<'div', RemovedProps>,
  MarginProps,
  InsetOwnProps { }

const Inset = React.forwardRef<InsetElement, InsetProps>((props, forwardedRef) => {
  const { asChild, className, ...insetProps } = extractProps(props, insetPropDefs, marginPropDefs);
  const Comp = asChild ? Slot : 'div';
  return <Comp {...insetProps} ref={forwardedRef} className={classNames('rt-Inset', className)} />;
});
Inset.displayName = 'Inset';

export { Inset };
export type { InsetProps };
