import { access, cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(rootDir, 'dist');
const deployDir = resolve(rootDir, '.gh-pages-deploy');
const branch = 'gh-pages';
const noPush = process.argv.includes('--no-push');

function git(args, cwd = rootDir, options = {}) {
  const output = execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: options.stdio ?? ['ignore', 'pipe', 'pipe'],
  });

  return typeof output === 'string' ? output.trim() : '';
}

function gitOptional(args, fallback) {
  try {
    return git(args);
  } catch {
    return fallback;
  }
}

if (!deployDir.startsWith(rootDir)) {
  throw new Error(`Invalid deploy directory: ${deployDir}`);
}

await access(resolve(distDir, 'index.html'), constants.R_OK);

const remoteUrl = git(['config', '--get', 'remote.origin.url']);
const userName = gitOptional(['config', '--get', 'user.name'], 'GitHub Pages Deploy');
const userEmail = gitOptional(['config', '--get', 'user.email'], 'deploy@example.invalid');

await rm(deployDir, { recursive: true, force: true });
await mkdir(deployDir, { recursive: true });
await cp(distDir, deployDir, { recursive: true });
await writeFile(resolve(deployDir, '.nojekyll'), '');

git(['init'], deployDir, { stdio: 'inherit' });
git(['checkout', '-B', branch], deployDir, { stdio: 'inherit' });
git(['add', '-A'], deployDir, { stdio: 'inherit' });
git([
  '-c',
  `user.name=${userName}`,
  '-c',
  `user.email=${userEmail}`,
  'commit',
  '-m',
  'Deploy to GitHub Pages',
], deployDir, { stdio: 'inherit' });
git(['remote', 'add', 'origin', remoteUrl], deployDir, { stdio: 'inherit' });

if (noPush) {
  console.log('Deploy dry run completed. Push skipped because --no-push was used.');
} else {
  git(['push', '--force', 'origin', `${branch}:${branch}`], deployDir, { stdio: 'inherit' });
}
