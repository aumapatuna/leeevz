/**
 * Icon Sprite Generator
 * ---
 * Reads SVG files from a given directory and process them to generate a since sprite svg file and
 * save them to given directories or write to index.html file
 * @author Charith Arumapperuma 28/02/2021
 * @type {module:fs}
 */
const fs = require('fs');
const path = require('path');
const mkdirp = require("mkdirp");
const SVGSpriter = require('svg-sprite');
const yargs = require('yargs');
const chalk = require('chalk');
const dotenv = require('dotenv');
const cwd = process.cwd();
const HTMLParser = require('node-html-parser');

const USE = 'args'; // args || env
const HANDLER = 'save_as_svg'; // save_as_svg || write_to_html
const GENERATOR_MODE = 'symbol';
const HTML_SELECTOR = 'icon-sprite';

function throws(message, critical = true) {
    console.log(chalk.red(`[ERR] ${message}`));
    if (critical) {
        console.log(`Stopping...`);
        process.exit(1);
    }
}

function init() {
    console.log('[INFO] Initializing...');
    if (USE === 'args') {
        return initWithArgs();
    } else if (USE === 'env') {
        return initWithEnv();
    } else {
        throws('Could not initialize');
    }
}

function initWithEnv() {
    // check if env argument is provided
    if (argv.env) {
        if (argv.env === '') {
            throws('Invalid argument \'env\'.');
        } else if (!fs.existsSync(path.join(cwd, argv.env))) {
            throws(`Environment file '${path.join(cwd, argv.src)}' does not exist.`);
        } else {
            dotenv.config({
                path: path.join(cwd, argv.env)
            });
            return {
                config: process.env.SVG_ICON_SPRITE_CONFIG,
                srcDir: process.env.SVG_ICON_SPRITE_SOURCE_DIR,
                svgOutDir: process.env.SVG_ICON_SPRITE_SVG_OUT_PATH,
                scssOutDir: process.env.SVG_ICON_SPRITE_SCSS_OUT_PATH,
                htmlTarget: process.env.SVG_ICON_SPRITE_HTML_TARGET
            }
        }
    }

    throws('Could not initialize the environment for sprite generation');
    process.exit(1);
}

function initWithArgs() {
    const argv = yargs.option('src', {
        alias: 's',
        description: 'Source directory of SVG files',
        type: 'string'
    }).option('out', {
        alias: 'o',
        description: 'Output directory of sprite files',
        type: 'string'
    }).option('config', {
        alias: 'c',
        description: 'Custom configuration for \'svg-sprite\'',
        type: 'string'
    }).help().alias('help', 'h').argv;


    // check if src argument is valid
    if (!argv.src || argv.src === '') {
        throws('Require \'src\' argument.')
    }
    if (!fs.existsSync(path.join(cwd, argv.src))) {
        throws(`Source directory '${path.join(cwd, argv.src)}' does not exist.`)
    }

    // check if out argument is valid
    if (!argv.out || argv.out === '') {
        throws('Require \'out\' argument.')
    }

    // check if config argument is valid
    if (!argv.config || argv.config === '') {
        throws('Require \'config\' argument.')
    }
    if (argv.config && !fs.existsSync(argv.config)) {
        throws(`Configuration file '${argv.config}' does not exist.`)
    }

    return {
        config: argv.config,
        srcDir: argv.src,
        svgOutDir: argv.out
    };
}

function createSpriter(srcDir, configPath) {
    console.log('[INFO] Creating spriter...');
    const config = require(path.join(cwd, configPath));
    const spriter = new SVGSpriter(config);
    const dirents = fs.readdirSync(path.join(cwd, srcDir), {withFileTypes: true});

    for (dirent of dirents) {
        if (dirent.isFile()) {
            const filepath = path.join(cwd, srcDir, dirent.name);
            const file = fs.readFileSync(filepath);
            spriter.add(filepath, null, file);
        }
    }

    return spriter;
}

function processResult(result, state) {
    console.log('[INFO] Processing output...');
    if (!result) {
        return;
    }
    if (HANDLER === 'save_as_svg') {
        return saveFiles(result, state);
    } else if (HANDLER === 'write_to_html') {
        return writeTo(result, state);
    } else {
        throws('Could not process');
    }
}

function saveFiles(result, {svgOutDir, scssOutDir}) {
    console.log('[INFO] Saving files...');
    if (result && result[GENERATOR_MODE]) {
        // save svg
        mkdirp.sync(svgOutDir);
        fs.writeFileSync(path.join(svgOutDir, `icons.svg`), result[GENERATOR_MODE].sprite.contents);

        // save scss
        if (result[GENERATOR_MODE].scss) {
            mkdirp.sync(scssOutDir);
            fs.writeFileSync(path.join(scssOutDir, `icons.scss`), result[GENERATOR_MODE].scss.contents);
        }
    }
}

function saveFilesAll(result, outDir) {
    console.log('[INFO] Saving files...');

    for (let mode in result) {
        for (let resource in result[mode]) {
            mkdirp.sync(outDir);
            fs.writeFileSync(path.join(outDir, `sprite${mode !== 'css' ? '-' + mode : ''}.svg`), result[mode][resource].contents);
        }
    }
}

function writeTo(result, {file}) {
    console.log('[INFO] Writing svg content to file...');
    if (!result || !fs.existsSync(path.join(cwd, file))) {
        throws('Failed writing file');
    }

    // read old stuff
    const htmlString = fs.readFileSync(path.join(cwd, file));
    const html = HTMLParser.parse(htmlString);
    const body = html.querySelector('body');
    const oldSvg = html.querySelector('svg#icon-sprite');

    // read new stuff
    const svgString = new TextDecoder("utf-8").decode(result[GENERATOR_MODE].sprite.contents);
    const newSvg = HTMLParser.parse(svgString).querySelector(`svg#${HTML_SELECTOR}`);
    newSvg.setAttribute('id', HTML_SELECTOR);


    // replace old from new
    body.exchangeChild(oldSvg, newSvg);

    // write
    fs.writeFileSync(path.join(cwd, file), html.toString(), {encoding: 'utf8'});
}

module.exports = (() => {
    const state = init();
    const spriter = createSpriter(state.srcDir, state.config);
    spriter.compile((error, result) => processResult(result, state));
})()
