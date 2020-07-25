const { postCSSPlugins } = require('../../../scripts/css-processing.js');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        ...postCSSPlugins(),
        purgecss({
            content: ['../_site/**/*.html'],
            whitelistPatterns: [
                /focus-visible/,
                /headerContainer/,
                /spectrum-Heading1--display$/,
                /spectrum-Heading1--quiet$/,
                /spectrum-Heading2$/,
                /spectrum-Heading3$/,
                /sp-link/,
                /sp-sidenav/,
                /code-example/,
            ],
        }),
    ],
};
