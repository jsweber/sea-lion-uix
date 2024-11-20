'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { checkboxPropDefs } from './checkbox.props';
import { ThickCheckIcon, ThickDividerHorizontalIcon } from '@ui-lib-monorepo-template/react-icon';
import { extractProps } from '@ui-lib-monorepo-template/react-helpers';
import { marginPropDefs } from '@ui-lib-monorepo-template/react-props';

import type { MarginProps, GetPropDefTypes } from '@ui-lib-monorepo-template/react-props';
import type { ComponentPropsWithout } from '@ui-lib-monorepo-template/react-helpers';

type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxOwnProps = GetPropDefTypes<typeof checkboxPropDefs>;
interface CheckboxProps
  extends ComponentPropsWithout<
    typeof CheckboxPrimitive.Root,
    'asChild' | 'color' | 'defaultValue' | 'children'
  >,
  MarginProps,
  CheckboxOwnProps { }
const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>((props, forwardedRef) => {
  const {
    className,
    color,
    checked: checkedProp,
    defaultChecked: defaultCheckedProp,
    onCheckedChange,
    ...checkboxProps
  } = extractProps(props, checkboxPropDefs, marginPropDefs);

  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultCheckedProp,
    onChange: onCheckedChange,
  });

  return (
    <CheckboxPrimitive.Root
      data-accent-color={color}
      {...checkboxProps}
      defaultChecked={defaultCheckedProp}
      checked={checked}
      onCheckedChange={setChecked}
      asChild={false}
      ref={forwardedRef}
      className={classNames('rt-reset', 'rt-BaseCheckboxRoot', 'rt-CheckboxRoot', className)}
    >
      <CheckboxPrimitive.Indicator
        asChild
        className="rt-BaseCheckboxIndicator rt-CheckboxIndicator"
      >
        {checked === 'indeterminate' ? <ThickDividerHorizontalIcon /> : <ThickCheckIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
