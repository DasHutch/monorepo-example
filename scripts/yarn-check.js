// NOTE: Using yarn workspaces with Lerna for our monorepo.
//       mixing npm and yarn can cause some terrible issues.
//
//       In an effort to make it clear, and easy for the team this
//       script was adopted from https://github.com/rafayepes
// see: https://github.com/alexanderwallin/use-yarn-instead/issues/1
'use strict';

const execSync = require('child_process').execSync;
const chalk = require('chalk');

// TODO: Finsih this script
//if (process.env.npm_execpath.indexOf('yarn') === -1) {
// }

try {
    execSync('yarn check').toString();
} catch (error) {
    console.log(
        '\n' +
        chalk.red(`  This project uses ${chalk.underline.bold('yarn')} to install all JavaScript dependencies.\n`) +
        chalk.red(`  Please don't modify the dependencies manually in package.json nor use npm install to update them.\n`) +
        chalk.dim('    Please run ') +
        chalk.reset('yarn add [package-name] [--dev]') +
        chalk.dim(' to install any new dependency\n') +
        chalk.dim('    or') +
        chalk.reset(' yarn upgrade [package@version]') +
        chalk.dim(' to upgrade a dependency to a specific version.\n') +
        chalk.dim(
            '    Ensure you commit both the package.json and the yarn.lock files together.\n'
        ) +
        chalk.dim('    Check out ') +
        chalk.underline.blue('https://yarnpkg.com/en/docs/cli/') +
        chalk.dim(' for more information.') +
        `\n`
    );
    process.exit(1);
    // throw error;
}
