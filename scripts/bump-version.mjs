import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const NEW_VERSION = '0.3.0';
const root = 'e:/work/sea-lion-uix';

// 收集所有需要升版的 package.json 路径
function collectPackages(dir, results = []) {
    const pkgFile = join(dir, 'package.json');
    if (existsSync(pkgFile)) {
        const pkg = JSON.parse(readFileSync(pkgFile, 'utf-8'));
        // 只处理 @sea-lion/* 包
        if (pkg.name && pkg.name.startsWith('@sea-lion/')) {
            results.push({ file: pkgFile, pkg });
        }
    }
    // 递归子目录（排除 node_modules、dist）
    for (const entry of readdirSync(dir)) {
        if (['node_modules', 'dist', '.git', 'skill'].includes(entry)) continue;
        const sub = join(dir, entry);
        if (statSync(sub).isDirectory()) {
            collectPackages(sub, results);
        }
    }
    return results;
}

const packages = collectPackages(join(root, 'packages'));

console.log(`Found ${packages.length} @sea-lion/* packages:\n`);
for (const { file, pkg } of packages) {
    console.log(`  ${pkg.version} → ${NEW_VERSION}  ${pkg.name}`);
}

console.log('\nUpdating...\n');

for (const { file, pkg } of packages) {
    pkg.version = NEW_VERSION;

    // 同时把 dependencies / devDependencies / peerDependencies 中的
    // workspace:* 以外的 @sea-lion/* 固定版本也更新
    for (const depField of ['dependencies', 'devDependencies', 'peerDependencies']) {
        if (!pkg[depField]) continue;
        for (const [dep, ver] of Object.entries(pkg[depField])) {
            if (dep.startsWith('@sea-lion/') && ver !== 'workspace:*' && /^\d/.test(ver)) {
                pkg[depField][dep] = NEW_VERSION;
                console.log(`  Updated dep: ${dep} in ${pkg.name}`);
            }
        }
    }

    writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
    console.log(`  ✓ ${pkg.name}`);
}

console.log(`\nDone. All packages bumped to ${NEW_VERSION}.`);
