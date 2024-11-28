const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const rootDir = path.resolve(__dirname, '../');
const sourcePath = path.join(rootDir, 'rollup.config.js');

const workspaceFilePath = path.join(rootDir, 'pnpm-workspace.yaml');
let projects = [];

try {
  const workspaceConfig = yaml.load(fs.readFileSync(workspaceFilePath, 'utf8'));
  const patterns = workspaceConfig.packages || [];
  patterns.forEach(pattern => {
    const resolvedPaths = path.join(rootDir, pattern.replace(/\*/g, ''));
    const dirs = fs
      .readdirSync(resolvedPaths, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => path.join(resolvedPaths, dirent.name));
    projects.push(...dirs);
  });
} catch (error) {
  console.error('Failed to parse pnpm-workspace.yaml:', error);
  process.exit(1);
}

projects.forEach(projectPath => {
  const targetPath = path.join(projectPath, 'rollup.config.js');
  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied rollup.config.js to ${projectPath}`);
  } catch (error) {
    console.error(`Failed to copy to ${projectPath}:`, error);
  }
});
