import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { badgePropDefs } from './badge.props';
import { extractProps } from '@ui-lib-monorepo-template/react-helpers';
import { marginPropDefs } from '@ui-lib-monorepo-template/react-props';

import type { MarginProps, GetPropDefTypes } from '@ui-lib-monorepo-template/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@ui-lib-monorepo-template/react-helpers';

type BadgeElement = React.ElementRef<'span'>;
type BadgeOwnProps = GetPropDefTypes<typeof badgePropDefs>;
interface BadgeProps
  extends ComponentPropsWithout<'span', RemovedProps>,
  MarginProps,
  BadgeOwnProps { }
const Badge = React.forwardRef<BadgeElement, BadgeProps>((props, forwardedRef) => {
  const { asChild, className, color, radius, ...badgeProps } = extractProps(
    props,
    badgePropDefs,
    marginPropDefs
  );
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp
      data-accent-color={color}
      data-radius={radius}
      {...badgeProps}
      ref={forwardedRef}
      className={classNames('rt-reset', 'rt-Badge', className)}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
