'use client';

import * as React from 'react';
import { useCallbackRef } from '@radix-ui/react-use-callback-ref';

import themeLightIcon from './images/theme-light.svg';
import themeDarkIcon from './images/theme-dark.svg';

import { Button } from '@sea-lion/react-button';
import { Theme, useThemeContext, themePropDefs } from '@sea-lion/react-theme';
import { inert, getMatchingGrayColor } from '@sea-lion/react-helpers';
import { Flex } from '@sea-lion/react-flex';
import { ScrollArea } from '@sea-lion/react-scroll-area';
import { Box } from '@sea-lion/react-box';
import { Grid } from '@sea-lion/react-grid';
import { Heading } from '@sea-lion/react-heading';
import { Text } from '@sea-lion/react-text';
import { Tooltip } from '@sea-lion/react-tooltip';
import { Kbd } from '@sea-lion/react-kbd';
import * as Popover from '@sea-lion/react-popover';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';
import type { GetPropDefTypes } from '@sea-lion/react-props';
import classNames from 'classnames';

const CUSTOM_VARS_STYLE_ID = 'sea-lion-theme-panel-custom-vars';

const fontFamilyPresets = [
    {
        value: 'default',
        label: '系统',
        fontStack: '',
    },
    {
        value: 'pingfang',
        label: '苹方',
        fontStack: "'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', sans-serif",
    },
    {
        value: 'msyh',
        label: '雅黑',
        fontStack: "'Microsoft YaHei', 'WenQuanYi Micro Hei', 'Noto Sans SC', sans-serif",
    },
    {
        value: 'sourcehans',
        label: '思源',
        fontStack: "'Source Han Sans SC', 'Noto Sans CJK SC', 'Noto Sans SC', sans-serif",
    },
    {
        value: 'alibaba',
        label: '普惠',
        fontStack: "'Alibaba PuHuiTi', 'PingFang SC', 'Noto Sans SC', sans-serif",
    },
] as const;

type FontFamilyValue = (typeof fontFamilyPresets)[number]['value'];

const fontSizePresets = [
    { value: '12', label: '12px' },
    { value: '13', label: '13px' },
    { value: '14', label: '14px' },
    { value: '16', label: '16px' },
    { value: '18', label: '18px' },
] as const;

type FontSizeValue = (typeof fontSizePresets)[number]['value'];

const shadowModeOptions = [
    { value: 'none', label: '无' },
    { value: 'soft', label: '柔和' },
    { value: 'default', label: '默认' },
    { value: 'strong', label: '强' },
] as const;

type ShadowMode = (typeof shadowModeOptions)[number]['value'];

interface ThemePanelProps extends Omit<ThemePanelImplProps, keyof ThemePanelImplPrivateProps> {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const ThemePanel = React.forwardRef<ThemePanelImplElement, ThemePanelProps>(
    ({ open = true, setOpen, ...props }, forwardedRef) => {
        return <ThemePanelImpl {...props} ref={forwardedRef} open={open} onOpenChange={setOpen} />;
    },
);
ThemePanel.displayName = 'ThemePanel';

type ThemePanelImplElement = React.ElementRef<'div'>;
interface ThemePanelImplPrivateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
interface ThemePanelImplProps
  extends ComponentPropsWithout<'div', RemovedProps>,
  ThemePanelImplPrivateProps {
  onAppearanceChange?: (value: 'light' | 'dark') => void;
}
const ThemePanelImpl = React.forwardRef<ThemePanelImplElement, ThemePanelImplProps>(
    (props, forwardedRef) => {
        const { open, onOpenChange, onAppearanceChange: onAppearanceChangeProp, ...panelProps } = props;
        const themeContext = useThemeContext();
        const {
            appearance,
            onAppearanceChange,
            accentColor,
            onAccentColorChange,
            grayColor,
            onGrayColorChange,
            panelBackground,
            onPanelBackgroundChange,
            radius,
            onRadiusChange,
            scaling,
            onScalingChange,
        } = themeContext;

        const hasOnAppearanceChangeProp = onAppearanceChangeProp !== undefined;
        const handleAppearanceChangeProp = useCallbackRef(onAppearanceChangeProp);
        const handleAppearanceChange = React.useCallback(
            (value: 'light' | 'dark') => {
                const cleanup = disableAnimation();

                if (appearance !== 'inherit') {
                    onAppearanceChange(value);
                    return;
                }

                if (hasOnAppearanceChangeProp) {
                    handleAppearanceChangeProp(value);
                } else {
                    setResolvedAppearance(value);
                    updateRootAppearanceClass(value);
                }

                cleanup();
            },
            [appearance, onAppearanceChange, hasOnAppearanceChangeProp, handleAppearanceChangeProp],
        );

        const autoMatchedGray = getMatchingGrayColor(accentColor);
        const resolvedGrayColor = grayColor === 'auto' ? autoMatchedGray : grayColor;

        function getGraySwatchStyle(gray: string, matchedGray: string) {
            let backgroundColor: string;
            if (gray === 'auto') {
                backgroundColor = `var(--${matchedGray}-9)`;
            } else if (gray === 'gray') {
                backgroundColor = 'var(--gray-9)';
            } else {
                backgroundColor = `var(--${gray}-9)`;
            }
            return {
                backgroundColor,
                filter: gray === 'gray' ? ('saturate(0)' as const) : undefined,
            };
        }

        const [fontFamily, setFontFamily] = React.useState<FontFamilyValue>('default');
        const [fontSize, setFontSize] = React.useState<FontSizeValue>('16');
        const [shadowMode, setShadowMode] = React.useState<ShadowMode>('default');

        React.useEffect(() => {
            let styleEl = document.getElementById(CUSTOM_VARS_STYLE_ID) as HTMLStyleElement | null;
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = CUSTOM_VARS_STYLE_ID;
                document.head.appendChild(styleEl);
            }

            const vars: string[] = [];

            const selectedFont = fontFamilyPresets.find((f) => f.value === fontFamily);
            if (selectedFont && fontFamily !== 'default') {
                vars.push(`--default-font-family: ${selectedFont.fontStack};`);
                vars.push(`--heading-font-family: ${selectedFont.fontStack};`);
            }

            if (fontSize !== '16') {
                vars.push(`--default-font-size: ${fontSize}px;`);
            }

            if (shadowMode === 'none') {
                for (let i = 1; i <= 6; i++) {
                    vars.push(`--shadow-${i}: none;`);
                }
            } else if (shadowMode === 'soft') {
                vars.push('--shadow-1: inset 0 0 0 1px var(--gray-a3);');
                vars.push('--shadow-2: 0 0 0 1px var(--gray-a2), 0 1px 3px var(--gray-a2);');
                vars.push('--shadow-3: 0 0 0 1px var(--gray-a2), 0 2px 6px var(--gray-a2);');
                vars.push('--shadow-4: 0 0 0 1px var(--gray-a2), 0 4px 12px var(--gray-a2);');
                vars.push('--shadow-5: 0 0 0 1px var(--gray-a2), 0 8px 20px var(--gray-a3);');
                vars.push('--shadow-6: 0 0 0 1px var(--gray-a3), 0 12px 32px var(--gray-a3);');
            } else if (shadowMode === 'strong') {
                vars.push('--shadow-1: inset 0 0 0 1px var(--gray-a7), inset 0 2px 3px var(--gray-a4);');
                vars.push('--shadow-2: 0 0 0 1px var(--gray-a5), 0 2px 6px var(--gray-a4), 0 4px 12px var(--black-a2);');
                vars.push('--shadow-3: 0 0 0 1px var(--gray-a5), 0 4px 12px var(--gray-a4), 0 8px 24px var(--black-a3);');
                vars.push('--shadow-4: 0 0 0 1px var(--gray-a5), 0 8px 24px var(--black-a2), 0 16px 40px var(--gray-a4);');
                vars.push('--shadow-5: 0 0 0 1px var(--gray-a5), 0 16px 48px var(--black-a4), 0 20px 48px var(--gray-a5);');
                vars.push('--shadow-6: 0 0 0 1px var(--gray-a5), 0 20px 60px var(--black-a5), 0 24px 64px var(--gray-a6);');
            }

            styleEl.textContent =
                vars.length > 0 ? `.radix-themes {\n  ${vars.join('\n  ')}\n}` : '';
        }, [fontFamily, fontSize, shadowMode]);

        React.useEffect(() => {
            return () => {
                const el = document.getElementById(CUSTOM_VARS_STYLE_ID);
                if (el) el.remove();
            };
        }, []);

        const [copyState, setCopyState] = React.useState<'idle' | 'copying' | 'copied'>('idle');
        async function handleCopyThemeConfig() {
            const theme = {
                appearance: appearance === themePropDefs.appearance.default ? undefined : appearance,
                accentColor: accentColor === themePropDefs.accentColor.default ? undefined : accentColor,
                grayColor: grayColor === themePropDefs.grayColor.default ? undefined : grayColor,
                panelBackground:
          panelBackground === themePropDefs.panelBackground.default ? undefined : panelBackground,
                radius: radius === themePropDefs.radius.default ? undefined : radius,
                scaling: scaling === themePropDefs.scaling.default ? undefined : scaling,
            } satisfies GetPropDefTypes<typeof themePropDefs>;

            const themePropsStr = Object.keys(theme)
                .filter((key) => theme[key as keyof typeof theme] !== undefined)
                .map((key) => `${key}="${theme[key as keyof typeof theme]}"`)
                .join(' ');

            const themeTag = themePropsStr ? `<Theme ${themePropsStr}>` : '<Theme>';

            const cssVars: string[] = [];
            const selectedFont = fontFamilyPresets.find((f) => f.value === fontFamily);
            if (selectedFont && fontFamily !== 'default') {
                cssVars.push(`  --default-font-family: ${selectedFont.fontStack};`);
                cssVars.push(`  --heading-font-family: ${selectedFont.fontStack};`);
            }
            if (fontSize !== '16') {
                cssVars.push(`  --default-font-size: ${fontSize}px;`);
            }
            if (shadowMode === 'none') {
                cssVars.push('  --shadow-1: none; --shadow-2: none; --shadow-3: none;');
                cssVars.push('  --shadow-4: none; --shadow-5: none; --shadow-6: none;');
            } else if (shadowMode !== 'default') {
                cssVars.push(`  /* shadow: ${shadowMode} */`);
            }

            const cssBlock =
                cssVars.length > 0
                    ? `\n\n/* Global CSS */\n.radix-themes {\n${cssVars.join('\n')}\n}`
                    : '';

            const textToCopy = themeTag + cssBlock;

            setCopyState('copying');
            await navigator.clipboard.writeText(textToCopy);
            setCopyState('copied');
            setTimeout(() => setCopyState('idle'), 2000);
        }

        const [resolvedAppearance, setResolvedAppearance] = React.useState<'light' | 'dark' | null>(
            appearance === 'inherit' ? null : appearance,
        );

        const keyboardInputElement = `
      [contenteditable],
      [role="combobox"],
      [role="listbox"],
      [role="menu"],
      input:not([type="radio"], [type="checkbox"]),
      select,
      textarea
    `;

        // quickly show/hide using "T" keypress
        React.useEffect(() => {
            function handleKeydown(event: KeyboardEvent) {
                const isModifierActive = event.altKey || event.ctrlKey || event.shiftKey || event.metaKey;
                const isKeyboardInputActive = document.activeElement?.closest(keyboardInputElement);
                const isKeyT = event.key?.toUpperCase() === 'T' && !isModifierActive;
                if (isKeyT && !isKeyboardInputActive) {
                    onOpenChange(!open);
                }
            }
            document.addEventListener('keydown', handleKeydown);
            return () => document.removeEventListener('keydown', handleKeydown);
        }, [onOpenChange, open, keyboardInputElement]);

        // quickly toggle appearance using "D" keypress
        React.useEffect(() => {
            function handleKeydown(event: KeyboardEvent) {
                const isModifierActive = event.altKey || event.ctrlKey || event.shiftKey || event.metaKey;
                const isKeyboardInputActive = document.activeElement?.closest(keyboardInputElement);
                const isKeyD = event.key?.toUpperCase() === 'D' && !isModifierActive;
                if (isKeyD && !isKeyboardInputActive) {
                    handleAppearanceChange(resolvedAppearance === 'light' ? 'dark' : 'light');
                }
            }
            document.addEventListener('keydown', handleKeydown);
            return () => document.removeEventListener('keydown', handleKeydown);
        }, [handleAppearanceChange, resolvedAppearance, keyboardInputElement]);

        React.useEffect(() => {
            const root = document.documentElement;
            const { body } = document;

            function update() {
                const hasDarkClass =
          root.classList.contains('dark') ||
          root.classList.contains('dark-theme') ||
          body.classList.contains('dark') ||
          body.classList.contains('dark-theme');

                if (appearance === 'inherit') {
                    setResolvedAppearance(hasDarkClass ? 'dark' : 'light');
                } else {
                    setResolvedAppearance(appearance);
                }
            }

            const classNameObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        update();
                    }
                });
            });

            update();

            // Observe <html> and <body> for `class` changes only when the appearance is inherited from them
            if (appearance === 'inherit') {
                classNameObserver.observe(root, { attributes: true });
                classNameObserver.observe(body, { attributes: true });
            }

            return () => classNameObserver.disconnect();
        }, [appearance]);

        return (
            <Theme asChild radius="medium" scaling="100%">
                <Flex
                    direction="column"
                    position="fixed"
                    top="0"
                    right="0"
                    mr="4"
                    mt="4"
                    // @ts-expect-error inert is a polyfill for dialog inert behavior when panel is closed
                    inert={open ? undefined : inert}
                    {...panelProps}
                    ref={forwardedRef}
                    style={{
                        zIndex: 9999,
                        overflow: 'hidden',
                        maxHeight: 'calc(100vh - var(--space-4) - var(--space-4))',
                        borderRadius: 'var(--radius-4)',
                        backgroundColor: 'var(--color-panel-solid)',
                        transformOrigin: 'top center',
                        transitionProperty: 'transform, box-shadow',
                        transitionDuration: '200ms',
                        transitionTimingFunction: open ? 'ease-out' : 'ease-in',
                        transform: open ? 'none' : 'translateX(105%)',
                        boxShadow: open ? 'var(--shadow-5)' : 'var(--shadow-2)',
                        ...props.style,
                    }}
                >
                    <ScrollArea>
                        <Box flexGrow="1" p="5" position="relative">
                            <Box position="absolute" top="0" right="0" m="2">
                                <Tooltip
                                    content="Press T to show/hide the Theme Panel"
                                    side="bottom"
                                    sideOffset={6}
                                >
                                    <Kbd asChild size="3" tabIndex={0} className="rt-ThemePanelShortcut">
                                        <button onClick={() => onOpenChange(!open)}>X</button>
                                    </Kbd>
                                </Tooltip>
                            </Box>

                            <Heading size="5" trim="both" as="h3" mb="5">
                                主题调色面板
                            </Heading>

                            <Text id="accent-color-title" as="p" size="2" weight="medium" mt="5">
                                品牌色
                            </Text>

                            <Grid columns="10" gap="2" mt="3" role="group" aria-labelledby="accent-color-title">
                                {themePropDefs.accentColor.values.map((color) => (
                                    <label
                                        key={color}
                                        className="rt-ThemePanelSwatch"
                                        style={{ backgroundColor: `var(--${color}-9)` }}
                                    >
                                        <Tooltip
                                            content={`${upperFirst(color)}${accentColor === 'gray' && resolvedGrayColor !== 'gray'
                                                ? ` (${upperFirst(resolvedGrayColor)})`
                                                : ''
                        }`}
                                        >
                                            <input
                                                className="rt-ThemePanelSwatchInput"
                                                type="radio"
                                                name="accentColor"
                                                value={color}
                                                checked={accentColor === color}
                                                onChange={(event) =>
                                                    onAccentColorChange(event.target.value as typeof accentColor)
                                                }
                                            />
                                        </Tooltip>
                                    </label>
                                ))}
                            </Grid>

                            <Flex asChild align="center" justify="between">
                                <Text as="p" id="gray-color-title" size="2" weight="medium" mt="5">
                                    中性色
                                </Text>
                            </Flex>

                            <Grid columns="10" gap="2" mt="3" role="group" aria-labelledby="gray-color-title">
                                {themePropDefs.grayColor.values.map((gray) => (
                                    <Flex key={gray} asChild align="center" justify="center">
                                        <label
                                            className="rt-ThemePanelSwatch"
                                            style={getGraySwatchStyle(gray, autoMatchedGray)}
                                        >
                                            <Tooltip
                                                content={`${upperFirst(gray)}${gray === 'auto' ? ` (${upperFirst(autoMatchedGray)})` : ''
                          }`}
                                            >
                                                <input
                                                    className="rt-ThemePanelSwatchInput"
                                                    type="radio"
                                                    name="grayColor"
                                                    value={gray}
                                                    checked={grayColor === gray}
                                                    onChange={(event) =>
                                                        onGrayColorChange(event.target.value as typeof grayColor)
                                                    }
                                                />
                                            </Tooltip>
                                        </label>
                                    </Flex>
                                ))}
                            </Grid>

                            <Text id="appearance-title" as="p" size="2" weight="medium" mt="5">
                                深色模式
                            </Text>

                            <Grid columns="2" gap="2" mt="3" role="group" aria-labelledby="appearance-title">
                                {(['light', 'dark'] as const).map((value) => (
                                    <label key={value} className="rt-ThemePanelRadioCard">
                                        <input
                                            className="rt-ThemePanelRadioCardInput"
                                            type="radio"
                                            name="appearance"
                                            value={value}
                                            checked={resolvedAppearance === value}
                                            onChange={(event) =>
                                                handleAppearanceChange(event.target.value as 'light' | 'dark')
                                            }
                                        />
                                        <Flex align="center" justify="center" height="32px" gap="2">
                                            <img
                                                src={value === 'light' ? themeLightIcon : themeDarkIcon}
                                                alt=""
                                                width={15}
                                                height={15}
                                                style={{ margin: '0 -1px' }}
                                            />
                                            <Text size="1" weight="medium">
                                                {upperFirst(value)}
                                            </Text>
                                        </Flex>
                                    </label>
                                ))}
                            </Grid>

                            <Text id="radius-title" as="p" size="2" weight="medium" mt="5">
                                圆角
                            </Text>

                            <Grid columns="5" gap="2" mt="3" role="group" aria-labelledby="radius-title">
                                {themePropDefs.radius.values.map((value) => (
                                    <Flex key={value} direction="column" align="center">
                                        <label className="rt-ThemePanelRadioCard">
                                            <input
                                                className="rt-ThemePanelRadioCardInput"
                                                type="radio"
                                                name="radius"
                                                id={`theme-panel-radius-${value}`}
                                                value={value}
                                                checked={radius === value}
                                                onChange={(event) => onRadiusChange(event.target.value as typeof radius)}
                                            />
                                            <Theme asChild radius={value}>
                                                <Box
                                                    m="3"
                                                    width="32px"
                                                    height="32px"
                                                    style={{
                                                        borderTopLeftRadius: value === 'full' ? '80%' : 'var(--radius-5)',
                                                        backgroundImage:
                              'linear-gradient(to bottom right, var(--accent-3), var(--accent-4))',
                                                        borderTop: '2px solid var(--accent-a8)',
                                                        borderLeft: '2px solid var(--accent-a8)',
                                                    }}
                                                />
                                            </Theme>
                                        </label>
                                        <Box asChild pt="2">
                                            <Text asChild size="1" color="gray">
                                                <label htmlFor={`theme-panel-radius-${value}`}>{upperFirst(value)}</label>
                                            </Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </Grid>

                            <Text id="scaling-title" as="p" size="2" weight="medium" mt="5">
                                缩放
                            </Text>

                            <Grid columns="5" gap="2" mt="3" role="group" aria-labelledby="scaling-title">
                                {themePropDefs.scaling.values.map((value) => (
                                    <label key={value} className="rt-ThemePanelRadioCard">
                                        <input
                                            className="rt-ThemePanelRadioCardInput"
                                            type="radio"
                                            name="scaling"
                                            value={value}
                                            checked={scaling === value}
                                            onChange={(event) => onScalingChange(event.target.value as typeof scaling)}
                                        />

                                        <Flex align="center" justify="center" height="32px">
                                            <Theme asChild scaling={value}>
                                                <Flex align="center" justify="center">
                                                    <Text size="1" weight="medium">
                                                        {upperFirst(value)}
                                                    </Text>
                                                </Flex>
                                            </Theme>
                                        </Flex>
                                    </label>
                                ))}
                            </Grid>

                            {/* eslint-disable max-len -- panel background UI with long SVG paths */}
                            <Flex mt="5" align="center" gap="2">
                                <Text id="panel-background-title" as="p" size="2" weight="medium">
                                    Panel background
                                </Text>

                                <Popover.Root>
                                    <Popover.Trigger>
                                        <Button>
                                            <AccessibleIcon label="Learn more about panel background options">
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    {/* eslint-disable-next-line max-len */}
                                                    <path
                                                        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </AccessibleIcon>
                                        </Button>
                                    </Popover.Trigger>

                                    <Popover.Content size="1" style={{ maxWidth: 220 }} side="top" align="center">
                                        <Text as="p" size="2">
                                            Whether Card and Table panels are translucent, showing some of the
                                            background behind them.
                                        </Text>
                                    </Popover.Content>
                                </Popover.Root>
                            </Flex>

                            <Grid
                                columns="2"
                                gap="2"
                                mt="3"
                                role="group"
                                aria-labelledby="panel-background-title"
                            >
                                {themePropDefs.panelBackground.values.map((value) => (
                                    <label key={value} className="rt-ThemePanelRadioCard">
                                        <input
                                            className="rt-ThemePanelRadioCardInput"
                                            type="radio"
                                            name="panelBackground"
                                            value={value}
                                            checked={panelBackground === value}
                                            onChange={(event) =>
                                                onPanelBackgroundChange(event.target.value as typeof panelBackground)
                                            }
                                        />
                                        <Flex align="center" justify="center" height="32px" gap="2">
                                            {value === 'solid' ? (
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ margin: '0 -2px' }}
                                                >
                                                    {/* eslint-disable-next-line max-len */}
                                                    <path
                                                        d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ margin: '0 -2px' }}
                                                >
                                                    {/* eslint-disable-next-line max-len */}
                                                    <path
                                                        opacity=".05"
                                                        d="M6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".1"
                                                        d="M7.28204 13.4775C9.23929 9.99523 9.23929 5.00475 7.28204 1.52248L7.71791 1.2775C9.76067 4.9119 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".15"
                                                        d="M7.82098 13.5064C9.72502 9.99523 9.72636 5.01411 7.82492 1.50084L8.26465 1.26285C10.2465 4.92466 10.2451 10.085 8.26052 13.7448L7.82098 13.5064Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".2"
                                                        d="M8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".25"
                                                        d="M9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".3"
                                                        d="M9.66809 13.0655C11.1097 9.69572 11.1107 5.3121 9.67088 1.94095L10.1307 1.74457C11.6241 5.24121 11.6231 9.76683 10.1278 13.2622L9.66809 13.0655Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".35"
                                                        d="M10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".4"
                                                        d="M11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".45"
                                                        d="M11.7214 11.668C12.4254 9.01303 12.4262 5.99691 11.7237 3.34116L12.2071 3.21329C12.9318 5.95292 12.931 9.05728 12.2047 11.7961L11.7214 11.668Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        opacity=".5"
                                                        d="M12.4432 10.752C12.8524 8.63762 12.8523 6.36089 12.4429 4.2466L12.9338 4.15155C13.3553 6.32861 13.3554 8.66985 12.9341 10.847L12.4432 10.752Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                    {/* eslint-disable-next-line max-len */}
                                                    <path
                                                        d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                            <Text size="1" weight="medium">
                                                {upperFirst(value)}
                                            </Text>
                                        </Flex>
                                    </label>
                                ))}
                            </Grid>
                            {/* eslint-enable max-len */}

                            <Text id="font-family-title" as="p" size="2" weight="medium" mt="5">
                                字体
                            </Text>

                            <Grid columns="5" gap="2" mt="3" role="group" aria-labelledby="font-family-title">
                                {fontFamilyPresets.map((preset) => (
                                    <Flex key={preset.value} direction="column" align="center">
                                        <label className={classNames('rt-ThemePanelRadioCard', 'rt-ThemePanelRadioCardFontFamily')}>
                                            <input
                                                className="rt-ThemePanelRadioCardInput"
                                                type="radio"
                                                name="fontFamily"
                                                id={`theme-panel-font-${preset.value}`}
                                                value={preset.value}
                                                checked={fontFamily === preset.value}
                                                onChange={(event) =>
                                                    setFontFamily(event.target.value as FontFamilyValue)
                                                }
                                            />
                                            <Flex align="center" justify="center" height="32px">
                                                <Text
                                                    size="1"
                                                    weight="medium"
                                                    style={
                                                        preset.fontStack
                                                            ? { fontFamily: preset.fontStack }
                                                            : undefined
                                                    }
                                                >
                                                    {preset.label}
                                                </Text>
                                            </Flex>
                                        </label>
                                    </Flex>
                                ))}
                            </Grid>

                            <Text id="font-size-title" as="p" size="2" weight="medium" mt="5">
                                字号基准
                            </Text>

                            <Grid columns="5" gap="2" mt="3" role="group" aria-labelledby="font-size-title">
                                {fontSizePresets.map((preset) => (
                                    <label key={preset.value} className="rt-ThemePanelRadioCard">
                                        <input
                                            className="rt-ThemePanelRadioCardInput"
                                            type="radio"
                                            name="fontSize"
                                            value={preset.value}
                                            checked={fontSize === preset.value}
                                            onChange={(event) =>
                                                setFontSize(event.target.value as FontSizeValue)
                                            }
                                        />
                                        <Flex align="center" justify="center" height="32px">
                                            <Text size="1" weight="medium">
                                                {preset.label}
                                            </Text>
                                        </Flex>
                                    </label>
                                ))}
                            </Grid>

                            <Text id="shadow-mode-title" as="p" size="2" weight="medium" mt="5">
                                阴影强度
                            </Text>

                            <Grid columns="4" gap="2" mt="3" role="group" aria-labelledby="shadow-mode-title">
                                {shadowModeOptions.map((option) => (
                                    <label key={option.value} className="rt-ThemePanelRadioCard">
                                        <input
                                            className="rt-ThemePanelRadioCardInput"
                                            type="radio"
                                            name="shadowMode"
                                            value={option.value}
                                            checked={shadowMode === option.value}
                                            onChange={(event) =>
                                                setShadowMode(event.target.value as ShadowMode)
                                            }
                                        />
                                        <Flex align="center" justify="center" height="32px">
                                            <Text size="1" weight="medium">
                                                {option.label}
                                            </Text>
                                        </Flex>
                                    </label>
                                ))}
                            </Grid>

                            {/* eslint-disable react/jsx-no-bind -- theme copy handler is stable */}
                            <Button
                                className="rt-r-mt-5"
                                mt="5"
                                style={{ width: '100%' }}
                                onClick={handleCopyThemeConfig}
                            >
                                {copyState === 'copied' ? 'Copied' : 'Copy Theme'}
                            </Button>
                            {/* eslint-enable react/jsx-no-bind */}
                        </Box>
                    </ScrollArea>
                </Flex>
            </Theme>
        );
    },
);
ThemePanelImpl.displayName = 'ThemePanelImpl';

// https://github.com/pacocoursey/next-themes/blob/main/packages/next-themes/src/index.tsx#L285
function disableAnimation() {
    const css = document.createElement('style');
    css.appendChild(
        document.createTextNode(
      `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
        ),
    );
    document.head.appendChild(css);

    return () => {
    // Force restyle
        (() => window.getComputedStyle(document.body))();

        // Wait for next tick before removing
        setTimeout(() => {
            document.head.removeChild(css);
        }, 1);
    };
}

function upperFirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateRootAppearanceClass(appearance: 'light' | 'dark') {
    const root = document.documentElement;
    const hasLightTheme = root.classList.contains('light-theme');
    const hasDarkTheme = root.classList.contains('dark-theme');
    const hasLight = root.classList.contains('light');
    const hasDark = root.classList.contains('dark');

    if (hasLightTheme || hasDarkTheme) {
        root.classList.remove('light-theme', 'dark-theme');
        root.style.colorScheme = appearance;
        root.classList.add(`${appearance}-theme`);
    }

    if (hasLight || hasDark) {
        root.classList.remove('light', 'dark');
        root.style.colorScheme = appearance;
        root.classList.add(appearance);
    }

    if (!hasLightTheme && !hasDarkTheme && !hasLight && !hasDark) {
        root.style.colorScheme = appearance;
        root.classList.add(appearance);
    }
}

export { ThemePanel };
export type { ThemePanelProps };
