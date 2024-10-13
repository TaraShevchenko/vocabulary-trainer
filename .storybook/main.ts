import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';


const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-data-theme-switcher',
        'storybook-addon-source-link',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '': path.resolve(__dirname, '../src'),
                'app': path.resolve(__dirname, '../src/app'),
                'kernel': path.resolve(__dirname, '../src/kernel'),
                'widgets': path.resolve(__dirname, '../src/widgets'),
                'entities': path.resolve(__dirname, '../src/entities'),
                'features': path.resolve(__dirname, '../src/features'),
                'shared': path.resolve(__dirname, '../src/shared'),
            }
        }

        return config
    },
}
export default config