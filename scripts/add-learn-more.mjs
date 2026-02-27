import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const urlMap = JSON.parse(readFileSync(join(__dirname, 'radix-urls.json'), 'utf-8'));
const reactDir = join(__dirname, '../packages/react');

let updated = 0;

for (const [comp, url] of Object.entries(urlMap)) {
    const compDir = join(reactDir, comp);

    // 中文 readme
    const cnFile = join(compDir, 'readme.md');
    if (existsSync(cnFile)) {
        let content = readFileSync(cnFile, 'utf-8');
        // 先移除旧的（无论是乱码还是正确的）：匹配所有可能的历史残留
        content = content.replace(/\n+## (?:查看更多|鏌ョ湅鏇村|u\{67E5\}[^\n]*)[\s\S]*$/u, '');
        // 也清除可能遗留的乱码参考行（没有 ## 头的孤立内容）
        content = content.replace(/\n+鍙傝€[\s\S]*$/u, '');
        content = content.trimEnd();
        content += `\n\n## 查看更多\n\n参考 [Radix UI 官方文档](${url}) 获取完整 API 与设计规范。\n`;
        writeFileSync(cnFile, content, 'utf-8');
        updated++;
    }

    // 英文 readme
    const enFile = join(compDir, 'readme.en-US.md');
    if (existsSync(enFile)) {
        let content = readFileSync(enFile, 'utf-8');
        content = content.replace(/\n## Learn More[\s\S]*$/u, '');
        content = content.trimEnd();
        content += `\n\n## Learn More\n\nSee the [Radix UI documentation](${url}) for the full API reference and design guidelines.\n`;
        writeFileSync(enFile, content, 'utf-8');
        updated++;
    }
}

console.log(`Done. Updated ${updated} files.`);
