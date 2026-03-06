import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { cardPropDefs } from './card.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type CardElement = React.ElementRef<'div'>;
type CardOwnProps = GetPropDefTypes<typeof cardPropDefs>;
interface CardProps extends ComponentPropsWithout<'div', RemovedProps>, MarginProps, CardOwnProps { }
const Card = React.forwardRef<CardElement, CardProps>((props, forwardedRef) => {
    const { asChild, className, ...cardProps } = extractProps(props, cardPropDefs, marginPropDefs);
    const Comp = asChild ? Slot : 'div';
    return (
        <Comp
            ref={forwardedRef}
            {...cardProps}
            className={classNames('rt-reset', 'rt-BaseCard', 'rt-Card', className)}
        />
    );
});
Card.displayName = 'Card';

export { Card };
export type { CardProps };
