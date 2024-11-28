import * as React from 'react';
import classNames from 'classnames';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';
import { switchPropDefs } from './switch.props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout } from '@sea-lion/react-helpers';

type SwitchElement = React.ElementRef<typeof SwitchPrimitive.Root>;
type SwitchOwnProps = GetPropDefTypes<typeof switchPropDefs>;
interface SwitchProps
  extends ComponentPropsWithout<
    typeof SwitchPrimitive.Root,
    'asChild' | 'color' | 'defaultValue' | 'children'
  >,
  MarginProps,
  SwitchOwnProps { }
const Switch = React.forwardRef<SwitchElement, SwitchProps>((props, forwardedRef) => {
  const { className, color, radius, ...switchProps } = extractProps(
    props,
    switchPropDefs,
    marginPropDefs
  );
  return (
    <SwitchPrimitive.Root
      data-accent-color={color}
      data-radius={radius}
      {...switchProps}
      asChild={false}
      ref={forwardedRef}
      className={classNames('rt-reset', 'rt-SwitchRoot', className)}
    >
      <SwitchPrimitive.Thumb
        className={classNames('rt-SwitchThumb', { 'rt-high-contrast': props.highContrast })}
      />
    </SwitchPrimitive.Root>
  );
});
Switch.displayName = 'Switch';

export { Switch };
export type { SwitchProps };
