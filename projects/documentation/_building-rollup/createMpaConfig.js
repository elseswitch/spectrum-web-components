const merge = require('deepmerge');
const { createSpaConfig } = require('@open-wc/building-rollup');
const fs = require('fs');
const postcss = require('postcss');
const { listFiles } = require('./utils');

/**
 * @param {MpaOptions} options
 */
async function createMpaConfig(options) {
    const htmlFiles = await listFiles(options.inputGlob);
    const html = await Promise.all(
        htmlFiles.map(async (inputPath) => {
            const name = inputPath.substring(options.rootPath.length + 1);
            let rootDir = inputPath.split('/');
            rootDir.pop();
            rootDir = rootDir.join('/');
            return {
                name,
                inputPath,
                rootDir,
                html: fs.readFileSync(inputPath, 'utf8'),
            };
        })
    );
    const userOptions = merge(
        {
            html: {
                flatten: false,
                html,
            },
            workbox: {
                navigateFallback: '/404.html',
            },
            injectServiceWorker: false,
        },
        options
    );
    return createSpaConfig(userOptions);
}

module.exports = { createMpaConfig };
