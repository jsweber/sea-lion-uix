import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
    base: 'light',
    brandTitle: 'Sea-lion-uix',
    brandUrl: 'https://openaide.pjlab.org.cn',
    brandImage: 'https://cdn-static.openxlab.org.cn/magic-maker/home/logo-static.svg',
    brandTarget: '_self',
});

addons.setConfig({
    navSize: 300,
    bottomPanelHeight: 300,
    rightPanelWidth: 300,
    panelPosition: 'bottom',
    enableShortcuts: true,
    showToolbar: true,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: false,
        collapsedRoots: ['other'],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
    theme
});
