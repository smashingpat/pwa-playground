const path = require('path');
const rimraf = require('rimraf');
const Bundler = require('parcel-bundler');
const ghpages = require('gh-pages');

(async () => {
    await new Promise((resolve, reject) => {
        rimraf(path.resolve(__dirname, './dist'), (err) => {
            if (err) reject(err);
            resolve();
        })
    });
    await new Promise((resolve, reject) => {
        const bundler = new Bundler(path.resolve(__dirname, './src/index.html'), {
            detailedReport: true,
            minify: true,
            sourceMaps: false,
        });
        bundler.on('bundled', resolve);
        bundler.on('buildError', reject);
        bundler.bundle();
    });
    await new Promise((resolve, reject) => {
        ghpages.publish('dist', (err) => {
            if (err) reject(err);
            resolve();
        })
    })
    console.log('done');
})();
