import { promises as fs } from 'fs';
import path from 'path';

export async function copyTemplateFiles(templatePath: string, targetPath: string): Promise<void> {
  await fs.mkdir(targetPath, { recursive: true });
  const files = await fs.readdir(templatePath);

  for (const file of files) {
    const sourcePath = path.join(templatePath, file);
    const destPath = path.join(targetPath, file);
    const stat = await fs.stat(sourcePath);

    if (stat.isDirectory()) {
      await copyTemplateFiles(sourcePath, destPath);
    } else {
      await fs.copyFile(sourcePath, destPath);
    }
  }
}

export async function installDependencies(targetPath: string): Promise<void> {
  console.log('Installing dependencies...');
  // This is a placeholder. In a real CLI, you'd use child_process to run npm/pnpm/yarn install.
  // For simplicity, we'll just log a message for now.
  console.log(`cd ${targetPath} && pnpm install`);
}
