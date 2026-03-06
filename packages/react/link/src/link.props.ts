import {
    asChildPropDef,
    accentColorPropDef,
    highContrastPropDef,
    leadingTrimPropDef,
    textWrapPropDef,
    truncatePropDef,
    weightPropDef,
} from '@sea-lion/react-props';

import type { PropDef } from '@sea-lion/react-props';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const underline = ['auto', 'always', 'hover', 'none'] as const;

const linkPropDefs = {
    ...asChildPropDef,
    size: {
        type: 'enum',
        className: 'rt-r-size',
        values: sizes,
        responsive: true,
    },
    ...weightPropDef,
    ...leadingTrimPropDef,
    ...truncatePropDef,
    ...textWrapPropDef,
    underline: { type: 'enum', className: 'rt-underline', values: underline, default: 'auto' },
    ...accentColorPropDef,
    ...highContrastPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  underline: PropDef<(typeof underline)[number]>;
};

export { linkPropDefs };
