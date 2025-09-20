"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command('init [project-name]', 'Initialize a new Devdocs documentation project', (yargs) => {
    yargs.positional('project-name', {
        describe: 'Name of the new project directory',
        type: 'string',
        default: 'my-devdocs-app',
    });
}, async (argv) => {
    const projectName = argv['project-name'];
    const targetPath = path_1.default.join(process.cwd(), projectName);
    const templatePath = path_1.default.join(__dirname, '../../templates/next-devdocs');
    console.log(`Initializing Devdocs project in ${targetPath}...`);
    try {
        await (0, utils_1.copyTemplateFiles)(templatePath, targetPath);
        console.log('Template files copied successfully.');
        // TODO: Modify package.json in the new project if needed (e.g., update name)
        await (0, utils_1.installDependencies)(targetPath);
        console.log('Devdocs project initialized successfully!');
    }
    catch (error) {
        console.error('Failed to initialize Devdocs project:', error);
    }
})
    .command('add [components...]', 'Select and install Devdocs UI components', (yargs) => {
    yargs.positional('components', {
        describe: 'Names of components to add',
        type: 'string',
        array: true,
    });
    // TODO: Implement add command options/logic
}, (argv) => {
    console.log(`Adding components: ${argv.components}`);
    // Call a function to handle adding components
})
    .command('customize', 'Customize Devdocs layouts and themes', (yargs) => {
    // TODO: Implement customize command options/logic
}, (argv) => {
    console.log('Customizing Devdocs...');
    // Call a function to handle customization
})
    .command('tree <input-dir> <output-file>', 'Generate a file tree for Devdocs UI Files component', (yargs) => {
    yargs
        .positional('input-dir', {
        describe: 'Input directory to scan',
        type: 'string',
    })
        .positional('output-file', {
        describe: 'Output file for the generated tree (e.g., .tsx, .mdx)',
        type: 'string',
    });
    // TODO: Implement tree command options/logic
}, (argv) => {
    console.log(`Generating tree from ${argv.inputDir} to ${argv.outputFile}`);
    // Call a function to handle tree generation
})
    .demandCommand(1, 'You need at least one command before moving on')
    .help()
    .alias('h', 'help')
    .argv;
