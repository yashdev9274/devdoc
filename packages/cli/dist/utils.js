"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplateFiles = copyTemplateFiles;
exports.installDependencies = installDependencies;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
async function copyTemplateFiles(templatePath, targetPath) {
    await fs_1.promises.mkdir(targetPath, { recursive: true });
    const files = await fs_1.promises.readdir(templatePath);
    for (const file of files) {
        const sourcePath = path_1.default.join(templatePath, file);
        const destPath = path_1.default.join(targetPath, file);
        const stat = await fs_1.promises.stat(sourcePath);
        if (stat.isDirectory()) {
            await copyTemplateFiles(sourcePath, destPath);
        }
        else {
            await fs_1.promises.copyFile(sourcePath, destPath);
        }
    }
}
async function installDependencies(targetPath) {
    console.log('Installing dependencies...');
    // This is a placeholder. In a real CLI, you'd use child_process to run npm/pnpm/yarn install.
    // For simplicity, we'll just log a message for now.
    console.log(`cd ${targetPath} && pnpm install`);
}
