import { asChildPropDef } from '@sea-lion/react-props';

import type { PropDef } from '@sea-lion/react-props';

const tabNavLinkPropDefs = {
  ...asChildPropDef,
  active: { type: 'boolean', default: false },
} satisfies {
  active: PropDef<boolean>;
};

export { baseTabListPropDefs as tabNavRootPropDefs } from '@sea-lion/react-base-tab-list';
export { tabNavLinkPropDefs };
