/**
 * 从 iconfont CSS 解析所有可用图标名并打印
 *
 * 用法：
 *   node fetch-icons.js                                  → 内置图标，列出全部
 *   node fetch-icons.js refresh                          → 内置图标，过滤 "refresh"
 *   node fetch-icons.js "" https://at.alicdn.com/t/c/font_xxx.css  → 自定义图标库，列出全部
 *   node fetch-icons.js refresh https://at.alicdn.com/t/c/font_xxx.css → 自定义图标库+过滤
 *
 * 参数：
 *   argv[2]  关键词（可选，空字符串或不传表示不过滤）
 *   argv[3]  iconfont CSS 地址（可选，不传则使用 sea-lion 内置图标库）
 */

const https = require('https');
const http = require('http');

const DEFAULT_CSS_URL = 'https://at.alicdn.com/t/c/font_3858115_hwwfmyoy6t7.css';

const keyword = (process.argv[2] ?? '').toLowerCase();
const rawUrl = process.argv[3] ?? DEFAULT_CSS_URL;
const CSS_URL = rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl;

function fetchText(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function parseIconNames(cssText) {
    const matches = [...cssText.matchAll(/\.(icon-[^:]+):before/g)];
    return [...new Set(matches.map((m) => m[1]))];
}

(async () => {
    try {
        console.log(`\n图标库地址：${CSS_URL}`);
        const cssText = await fetchText(CSS_URL);
        let icons = parseIconNames(cssText);

        if (keyword) {
            icons = icons.filter((name) => name.toLowerCase().includes(keyword));
        }

        console.log(`共找到 ${icons.length} 个图标${keyword ? `（过滤词："${keyword}"）` : ''}：\n`);
        icons.forEach((name) => console.log(`  ${name}`));
        console.log('');
    } catch (err) {
        console.error('获取图标列表失败：', err.message);
        process.exit(1);
    }
})();
