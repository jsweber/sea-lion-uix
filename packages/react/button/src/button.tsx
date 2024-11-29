import * as React from 'react';
import classNames from 'classnames';

import { BaseButton } from '@sea-lion/react-base-button';

type ButtonElement = React.ElementRef<typeof BaseButton>;
interface ButtonProps extends React.ComponentPropsWithoutRef<typeof BaseButton> {
    theme?: {
        padding?: number;
        height?: number;
    }
}
const Button = React.forwardRef<ButtonElement, ButtonProps>(
    ({ className, theme, ...props }, forwardedRef) => (

        <BaseButton
            {...props}
            ref={forwardedRef}
            className={classNames('rt-Button', className)}
            style={{
                '--button-theme-height': `50px`,
            } as React.CSSProperties}
        />
    )
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
