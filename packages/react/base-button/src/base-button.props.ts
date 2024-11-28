import { asChildPropDef, accentColorPropDef, highContrastPropDef, radiusPropDef } from '@sea-lion/react-props';
import { spinnerPropDefs } from '@sea-lion/react-spinner';
import type { PropDef } from '@sea-lion/react-props';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'] as const;

const baseButtonPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'soft' },
  ...accentColorPropDef,
  ...highContrastPropDef,
  ...radiusPropDef,
  loading: { type: 'boolean', className: 'rt-loading', default: false },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  loading: PropDef<boolean>;
};

function mapButtonSizeToSpinnerSize(
  size: (typeof baseButtonPropDefs.size.values)[number]
): (typeof spinnerPropDefs.size.values)[number] {
  switch (size) {
    case '1':
      return '1';
    case '2':
    case '3':
      return '2';
    case '4':
      return '3';
  }
}

export { baseButtonPropDefs, mapButtonSizeToSpinnerSize };
