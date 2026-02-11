import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { badgePropDefs } from './badge.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

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
        marginPropDefs,
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
