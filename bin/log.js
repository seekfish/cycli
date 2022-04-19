//调用
const chalk = require("chalk");
const log = console.log;

const success = function (msg) {
  log(chalk.bgGreen(" SUCCESS ") + chalk.green(" " + msg));
};

const warn = function (msg) {
  log(chalk.bgYellow(" WARN ") + chalk.yellow(" " + msg));
};

const error = function (msg) {
  log(chalk.bgRed(" ERROR") + chalk.red(" " + msg));
};

const info = function (msg) {
  log(chalk.bgBlackBright(" INFO ") + chalk.gray(" " + msg));
};

const tip = function (msg) {
  log(chalk.bgBlue(" TIP") + chalk.blue(" " + msg));
};

module.exports = { success, warn, error, info, tip };
