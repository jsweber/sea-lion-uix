import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { kbdPropDefs } from './kbd.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps , GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';


type KbdElement = React.ElementRef<'kbd'>;
type KbdOwnProps = GetPropDefTypes<typeof kbdPropDefs>;
interface KbdProps extends ComponentPropsWithout<'kbd', RemovedProps>, MarginProps, KbdOwnProps { }
const Kbd = React.forwardRef<KbdElement, KbdProps>((props, forwardedRef) => {
    const { asChild, className, ...kbdProps } = extractProps(props, kbdPropDefs, marginPropDefs);
    const Comp = asChild ? Slot : 'kbd';
    return (
        <Comp
            {...kbdProps}
            ref={forwardedRef}
            className={classNames('rt-reset', 'rt-Kbd', className)}
        />
    );
});
Kbd.displayName = 'Kbd';

export { Kbd };
export type { KbdProps };
