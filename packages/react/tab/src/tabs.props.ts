import { asChildPropDef } from '@sea-lion/react-props';

const tabsRootPropDefs = {
  ...asChildPropDef,
};

const tabsContentPropDefs = {
  ...asChildPropDef,
};

export { baseTabListPropDefs as tabsListPropDefs } from './base-tab-list.props';
export { tabsRootPropDefs, tabsContentPropDefs };
