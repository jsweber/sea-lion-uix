import * as React from 'react';
import classNames from 'classnames';

import { separatorPropDefs } from './separator.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type SeparatorElement = React.ElementRef<'span'>;
type SeparatorOwnProps = GetPropDefTypes<typeof separatorPropDefs>;
interface SeparatorProps
  extends ComponentPropsWithout<'span', RemovedProps>,
  MarginProps,
  SeparatorOwnProps { }
const Separator = React.forwardRef<SeparatorElement, SeparatorProps>((props, forwardedRef) => {
  const { className, color, decorative, ...separatorProps } = extractProps(
    props,
    separatorPropDefs,
    marginPropDefs
  );
  return (
    <span
      data-accent-color={color}
      role={decorative ? undefined : 'separator'}
      {...separatorProps}
      ref={forwardedRef}
      className={classNames('rt-Separator', className)}
    />
  );
});
Separator.displayName = 'Separator';

export { Separator };
export type { SeparatorProps };
