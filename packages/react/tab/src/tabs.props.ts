import { asChildPropDef } from '@sea-lion/react-props';

const tabsRootPropDefs = {
  ...asChildPropDef,
};

const tabsContentPropDefs = {
  ...asChildPropDef,
};

export { baseTabListPropDefs as tabsListPropDefs } from '@sea-lion/react-base-tab-list';
export { tabsRootPropDefs, tabsContentPropDefs };
