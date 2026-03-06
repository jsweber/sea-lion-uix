import { asChildPropDef, colorPropDef, highContrastPropDef, textWrapPropDef, truncatePropDef, weightPropDef } from '@sea-lion/react-props';

import type { PropDef } from '@sea-lion/react-props';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const blockquotePropDefs = {
    ...asChildPropDef,
    size: {
        type: 'enum',
        className: 'rt-r-size',
        values: sizes,
        responsive: true,
    },
    ...weightPropDef,
    ...colorPropDef,
    ...highContrastPropDef,
    ...truncatePropDef,
    ...textWrapPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export { blockquotePropDefs };
