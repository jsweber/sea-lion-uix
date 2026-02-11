import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { sectionPropDefs } from './section.props';
import { extractProps } from '@sea-lion/react-helpers';
import { layoutPropDefs, marginPropDefs } from '@sea-lion/react-props';

import type { LayoutProps, MarginProps } from '@sea-lion/react-props';
import type { SectionOwnProps } from './section.props.js';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type SectionElement = React.ElementRef<'div'>;
interface SectionProps
  extends ComponentPropsWithout<'div', RemovedProps>,
  MarginProps,
  LayoutProps,
  SectionOwnProps { }
const Section = React.forwardRef<SectionElement, SectionProps>((props, forwardedRef) => {
    const { asChild, className, ...sectionProps } = extractProps(
        props,
        sectionPropDefs,
        layoutPropDefs,
        marginPropDefs,
    );
    const Comp = asChild ? Slot : 'section';
    return (
        <Comp {...sectionProps} ref={forwardedRef} className={classNames('rt-Section', className)} />
    );
});
Section.displayName = 'Section';

export { Section };
export type { SectionProps };
