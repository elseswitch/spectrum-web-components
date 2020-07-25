import { createBasicConfig } from '@open-wc/building-rollup';
import { copy } from '@web/rollup-plugin-copy';
import json from '@rollup/plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import styles from 'rollup-plugin-styles';
import litcss from 'rollup-plugin-lit-css';
import visualizer from 'rollup-plugin-visualizer';
import deepmerge from 'deepmerge';
const { injectManifest } = require('rollup-plugin-workbox');
const path = require('path');
const { createMpaConfig } = require('./_building-rollup/createMpaConfig.js');
import posthtml from 'posthtml';
import spectrumMarkdown from './src/utils/posthtml-spectrum-docs-markdown';
const Terser = require('terser');
const { postCSSPlugins } = require('../../scripts/css-processing.js');
const fs = require('fs');
const postcss = require('postcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const injectUsedCss = (css) => {
    return (html) => {
        const initialHTML = posthtml()
            .use(spectrumMarkdown())
            .process(html, { sync: true }).html;
        const finalHTML = postcss([
            purgecss({
                content: [
                    {
                        extension: 'html',
                        raw: initialHTML,
                    },
                ],
            }),
        ])
            .process(css, {
                from: `${process.cwd()}/src/components/`,
            })
            .then((result) => {
                return initialHTML
                    .replace(
                        '<link rel="stylesheet" href="styles.css">',
                        `<style>${result.css}</style>`
                    )
                    .replace(
                        /src="\//g,
                        process.env.SWC_DIR
                            ? `src="/${process.env.SWC_DIR}/`
                            : 'src="/'
                    )
                    .replace(
                        /href="\//g,
                        process.env.SWC_DIR
                            ? `href="/${process.env.SWC_DIR}/`
                            : 'href="/'
                    )
                    .replace(
                        "('/sw.js')",
                        process.env.SWC_DIR
                            ? `('/${process.env.SWC_DIR}/sw.js')`
                            : "('/sw.js')"
                    );
            });
        return finalHTML;
    };
};

const configSW = deepmerge(
    createBasicConfig({
        legacyBuild: false,
        developmentMode: false,
    }),
    {
        input: path.join(process.cwd(), '_site', 'serviceWorker.js'),
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
        ],
    }
);

module.exports = async () => {
    const inputCss = fs.readFileSync(
        `${process.cwd()}/src/components/styles.css`,
        'utf8'
    );
    const { css } = await postcss([...postCSSPlugins()]).process(inputCss, {
        from: `${process.cwd()}/src/components/`,
    });
    const optionsHTML = {
        transform: injectUsedCss(css),
        minify: {
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeComments: true,
            caseSensitive: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
            /** @param {string} code */
            minifyJS: (code) => Terser.minify(code).code,
        },
    };

    const mpaConfig = await createMpaConfig({
        outputDir: 'dist',
        legacyBuild: false,
        inputGlob: '_site/**/*.html',
        rootPath: path.resolve('_site'),

        // development mode creates a non-minified build for debugging or development
        developmentMode: false, // process.env.ROLLUP_WATCH === 'true',

        injectServiceWorker: false,
        workbox: false,
        html: optionsHTML,
    });

    mpaConfig.output.sourcemap = true;

    mpaConfig.moduleContext = {
        [require.resolve('focus-visible')]: 'window',
    };
    mpaConfig.plugins.push(json());

    mpaConfig.plugins.push(
        styles({
            mode: 'emit',
            minimize: true,
            plugins: postCSSPlugins(),
        })
    );
    mpaConfig.plugins.push(litcss());
    mpaConfig.plugins.push(
        commonjs({
            exclude: [
                '../../node_modules/focus-visible/**',
                '../../node_modules/prismjs/**',
            ],
        })
    );
    mpaConfig.plugins.push(
        replace({
            exclude: '*.css',
            values: {
                'process.env.NODE_ENV': '"production"',
            },
        })
    );
    mpaConfig.plugins.push(
        injectManifest({
            swSrc: path.join(process.cwd(), '_site', 'sw.js'),
            swDest: path.join(process.cwd(), 'dist', 'sw.js'),
            globDirectory: path.join(process.cwd(), 'dist'),
            globPatterns: ['**/*.{html,js,css,png,svg,ico,webmanifest}'],
            globIgnores: [
                '*nomodule*',
                'components/*/index.html',
                'components/*/api/index.html',
                'storybook/**/*',
            ],
            additionalManifestEntries: [
                {
                    url: 'index.html?homescreen',
                    revision: '3',
                },
            ],
        })
    );

    mpaConfig.plugins.push(
        copy({
            patterns: 'favicon.*',
            rootDir: './content',
        })
    );

    mpaConfig.plugins.push(
        copy({
            patterns: ['images/**/*', 'manifest.webmanifest'],
            rootDir: './_site',
        })
    );

    mpaConfig.plugins.push(
        visualizer({
            brotliSize: true,
            gzipSize: true,
        })
    );

    return [
        {
            ...configSW,
            output: {
                file: path.join(process.cwd(), '_site', 'sw.js'),
                format: 'es',
            },
        },
        mpaConfig,
    ];
};
