import {
    forwardRef,
    ElementRef,
    ComponentPropsWithoutRef,
    CSSProperties,
    useMemo
} from 'react';
import classNames from 'classnames';

import { BaseButton } from '@sea-lion/react-base-button';

type ButtonElement = ElementRef<typeof BaseButton>;


interface ButtonTheme {
    padding?: string;
    height?: string;
}


interface ButtonProps extends ComponentPropsWithoutRef<typeof BaseButton> {
    theme?: ButtonTheme;
}

export const getTheme = (param: ButtonTheme = {}): CSSProperties => {
    const { padding, height } = param;
    const cssVars: any = {};

    if (padding) {
        cssVars['--button-theme-padding'] = padding;
    }

    if (height) {
        cssVars['--button-theme-height'] = height;
    }

    return cssVars;
}

const Button = forwardRef<ButtonElement, ButtonProps>(
    ({ className, theme, ...props }, forwardedRef) => {
        const buttonTheme = useMemo(() => {
            return getTheme(theme);
        }, [theme]);

        return (

            <BaseButton
                {...props}
                ref={forwardedRef}
                className={classNames('rt-Button', className)}
                style={buttonTheme}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonTheme };
