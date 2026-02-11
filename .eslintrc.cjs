module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        "eslint-config-ali/typescript/react",
        "eslint-config-ali/jsx-a11y",
        "plugin:storybook/recommended"
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: [
                    'src'
                ],
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            }
        }
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: ['error', 4, {
            ignoredNodes: ['TemplateLiteral'],
            SwitchCase: 1
        }],
        '@typescript-eslint/indent': [
            'error', 4
        ],
        'max-len': ['warn', {
            code: 200
        }],
        'no-console': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        "@typescript-eslint/consistent-type-assertions": 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
    },
    overrides: [
        {
            files: ['**/*.props.ts', '**/*.props.tsx'],
            rules: {
                '@typescript-eslint/consistent-type-exports': ['warn', {
                    fixMixedExportsWithInlineTypeSpecifier: true
                }]
            }
        }
    ]
};
