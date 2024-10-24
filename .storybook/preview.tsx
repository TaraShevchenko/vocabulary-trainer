import React from 'react'

import { Montserrat } from 'next/font/google'

import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import type { ThemeConfig } from 'storybook-addon-data-theme-switcher'
import { type SourceLinkParameter, getFileUrl } from 'storybook-addon-source-link'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' })

export const globalTypes = {
    dataThemes: {
        defaultValue: {
            list: [
                { name: 'Light', dataTheme: 'light', color: 'hsl(0 0% 100%)' },
                { name: 'Dark', dataTheme: 'dark', color: 'hsl(240 10% 3.9%)' },
            ],
            dataAttribute: 'data-theme',
            clearable: true,
        } satisfies ThemeConfig,
    },
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: themes.dark,
        },
        layout: 'centered',
        backgrounds: {
            default: 'Dark',
            values: [
                {
                    name: 'Light',
                    value: 'hsl(0 0% 100%)',
                },
                {
                    name: 'Dark',
                    value: 'hsl(240 10% 3.9%)',
                },
            ],
        },
        sourceLink: {
            links: {
                'component-vscode': ({ importPath, rootPath }) => {
                    if (!rootPath) return undefined
                    const fileUrl = getFileUrl(rootPath, importPath)
                    const pathParts = fileUrl.pathname.split('/')
                    pathParts[pathParts.length - 1] = 'index.tsx'
                    const modifiedPath = pathParts.join('/')
                    const href = `cursor://file${modifiedPath}`

                    return {
                        label: 'Open in Cursor',
                        href,
                        icon: 'ItalicIcon',
                    }
                },
                // 'story-vscode': ({ importPath, rootPath }) => {
                //     if (!rootPath) return undefined
                //     const fileUrl = getFileUrl(rootPath, importPath)
                //     const pathParts = fileUrl.pathname.split('/')
                //     pathParts[pathParts.length - 1] = 'index.tsx'
                //     const modifiedPath = pathParts.join('/')
                //     const href = `webstorm://open?file=${modifiedPath}`

                //     return {
                //         label: 'Open in Webstorm',
                //         href,
                //         icon: 'GrowIcon',
                //     }
                // },
                'story-vscode': () => {
                    return undefined
                },
                'addon-powered-by': ({ importPath, rootPath, isStaticBuild }) => {
                    return undefined
                },
            },
        } as SourceLinkParameter,
    },
    decorators: [
        (Story) => {
            return (
                <main className={montserrat.variable}>
                    <Story />
                </main>
            )
        },
    ],
}

export default preview
