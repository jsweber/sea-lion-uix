/**
 * 预制 SVG 插画示例，对应 svg-guide.md 中的 6 种内容类型。
 * 各示例为 400×200 的几何抽象风格，可通过 recolorSvg 替换主色和背景色。
 */

export const analyticsSvg = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f0f7ff" rx="12"/>
  <line x1="40" y1="180" x2="280" y2="180" stroke="#1890ff" stroke-width="1" opacity="0.15"/>
  <line x1="40" y1="150" x2="280" y2="150" stroke="#1890ff" stroke-width="1" opacity="0.1"/>
  <line x1="40" y1="120" x2="280" y2="120" stroke="#1890ff" stroke-width="1" opacity="0.1"/>
  <line x1="40" y1="90" x2="280" y2="90" stroke="#1890ff" stroke-width="1" opacity="0.1"/>
  <rect x="42" y="140" width="28" height="40" fill="#1890ff" opacity="0.8" rx="3"/>
  <rect x="90" y="110" width="28" height="70" fill="#1890ff" opacity="0.9" rx="3"/>
  <rect x="138" y="75" width="28" height="105" fill="#1890ff" rx="3"/>
  <rect x="186" y="105" width="28" height="75" fill="#1890ff" opacity="0.7" rx="3"/>
  <rect x="234" y="85" width="28" height="95" fill="#1890ff" opacity="0.85" rx="3"/>
  <polyline points="56,140 104,110 152,78 200,108 248,88" fill="none" stroke="#096dd9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="56" cy="140" r="4" fill="#ffffff" stroke="#096dd9" stroke-width="2"/>
  <circle cx="104" cy="110" r="4" fill="#ffffff" stroke="#096dd9" stroke-width="2"/>
  <circle cx="152" cy="78" r="4" fill="#ffffff" stroke="#096dd9" stroke-width="2"/>
  <circle cx="200" cy="108" r="4" fill="#ffffff" stroke="#096dd9" stroke-width="2"/>
  <circle cx="248" cy="88" r="4" fill="#ffffff" stroke="#096dd9" stroke-width="2"/>
  <circle cx="340" cy="55" r="55" fill="#1890ff" opacity="0.07"/>
  <circle cx="340" cy="55" r="35" fill="#1890ff" opacity="0.06"/>
  <circle cx="340" cy="55" r="18" fill="#1890ff" opacity="0.08"/>
  <line x1="320" y1="65" x2="355" y2="45" stroke="#1890ff" stroke-width="2" opacity="0.4" stroke-linecap="round"/>
  <polyline points="348,40 358,45 353,55" fill="none" stroke="#1890ff" stroke-width="2" opacity="0.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const userSvg = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f9f0ff" rx="12"/>
  <circle cx="110" cy="90" r="52" fill="#722ed1" opacity="0.07"/>
  <circle cx="110" cy="70" r="24" fill="#722ed1" opacity="0.5"/>
  <ellipse cx="110" cy="132" rx="34" ry="22" fill="#722ed1" opacity="0.3"/>
  <circle cx="195" cy="90" r="52" fill="#722ed1" opacity="0.05"/>
  <circle cx="195" cy="70" r="24" fill="#722ed1" opacity="0.35"/>
  <ellipse cx="195" cy="132" rx="34" ry="22" fill="#722ed1" opacity="0.22"/>
  <circle cx="280" cy="90" r="52" fill="#722ed1" opacity="0.03"/>
  <circle cx="280" cy="70" r="24" fill="#722ed1" opacity="0.18"/>
  <ellipse cx="280" cy="132" rx="34" ry="22" fill="#722ed1" opacity="0.12"/>
  <line x1="134" y1="98" x2="171" y2="98" stroke="#722ed1" stroke-width="1.5" opacity="0.25" stroke-dasharray="3 3"/>
  <line x1="219" y1="98" x2="256" y2="98" stroke="#722ed1" stroke-width="1.5" opacity="0.18" stroke-dasharray="3 3"/>
  <circle cx="360" cy="35" r="38" fill="#722ed1" opacity="0.06"/>
  <circle cx="40" cy="170" r="28" fill="#722ed1" opacity="0.05"/>
</svg>`;

export const toolSvg = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#e6fffb" rx="12"/>
  <line x1="80" y1="100" x2="200" y2="52" stroke="#13c2c2" stroke-width="1.5" opacity="0.35"/>
  <line x1="200" y1="52" x2="320" y2="100" stroke="#13c2c2" stroke-width="1.5" opacity="0.35"/>
  <line x1="80" y1="100" x2="200" y2="148" stroke="#13c2c2" stroke-width="1.5" opacity="0.35"/>
  <line x1="200" y1="148" x2="320" y2="100" stroke="#13c2c2" stroke-width="1.5" opacity="0.35"/>
  <line x1="80" y1="100" x2="320" y2="100" stroke="#13c2c2" stroke-width="1" opacity="0.18" stroke-dasharray="5 4"/>
  <circle cx="80" cy="100" r="20" fill="#13c2c2" opacity="0.8"/>
  <circle cx="200" cy="52" r="25" fill="#13c2c2" opacity="0.9"/>
  <circle cx="320" cy="100" r="20" fill="#13c2c2" opacity="0.72"/>
  <circle cx="200" cy="148" r="15" fill="#13c2c2" opacity="0.62"/>
  <circle cx="80" cy="100" r="7" fill="white" opacity="0.65"/>
  <circle cx="200" cy="52" r="9" fill="white" opacity="0.65"/>
  <circle cx="320" cy="100" r="7" fill="white" opacity="0.65"/>
  <circle cx="200" cy="148" r="5" fill="white" opacity="0.65"/>
  <polygon points="352,20 368,12 384,20 384,36 368,44 352,36" fill="none" stroke="#13c2c2" stroke-width="1.5" opacity="0.35"/>
  <circle cx="44" cy="162" r="24" fill="#13c2c2" opacity="0.07"/>
</svg>`;

export const alertSvg = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#fff7e6" rx="12"/>
  <polygon points="160,28 285,178 35,178" fill="#fa8c16" opacity="0.11"/>
  <polygon points="160,48 268,168 52,168" fill="none" stroke="#fa8c16" stroke-width="2.5" opacity="0.55" stroke-linejoin="round"/>
  <rect x="153" y="88" width="14" height="44" fill="#fa8c16" opacity="0.85" rx="4"/>
  <circle cx="160" cy="147" r="8" fill="#fa8c16" opacity="0.85"/>
  <polygon points="310,42 328,22 346,42" fill="none" stroke="#fa8c16" stroke-width="1.5" opacity="0.3" stroke-linejoin="round"/>
  <circle cx="342" cy="140" r="38" fill="#fa8c16" opacity="0.07"/>
  <circle cx="342" cy="140" r="22" fill="#fa8c16" opacity="0.05"/>
</svg>`;

export const successSvg = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f6ffed" rx="12"/>
  <circle cx="178" cy="100" r="88" fill="#52c41a" opacity="0.04"/>
  <circle cx="178" cy="100" r="66" fill="#52c41a" opacity="0.06"/>
  <circle cx="178" cy="100" r="48" fill="#52c41a" opacity="0.09"/>
  <circle cx="178" cy="100" r="38" fill="none" stroke="#52c41a" stroke-width="3.5" opacity="0.68"/>
  <polyline points="156,100 172,118 208,80" fill="none" stroke="#52c41a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="328" cy="52" r="30" fill="#52c41a" opacity="0.06"/>
  <circle cx="328" cy="52" r="18" fill="#52c41a" opacity="0.06"/>
  <polyline points="318,50 324,56 338,44" fill="none" stroke="#52c41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.32"/>
  <circle cx="56" cy="162" r="22" fill="#52c41a" opacity="0.06"/>
</svg>`;

export const documentSvg = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f0f5ff" rx="12"/>
  <rect x="118" y="50" width="164" height="112" fill="#2f54eb" opacity="0.07" rx="6"/>
  <rect x="105" y="42" width="164" height="112" fill="#e8edff" rx="6"/>
  <rect x="105" y="42" width="164" height="112" fill="none" stroke="#2f54eb" stroke-width="1" opacity="0.18" rx="6"/>
  <rect x="88" y="36" width="164" height="112" fill="white" rx="6"/>
  <rect x="88" y="36" width="164" height="112" fill="none" stroke="#2f54eb" stroke-width="1.5" opacity="0.28" rx="6"/>
  <line x1="108" y1="64" x2="236" y2="64" stroke="#2f54eb" stroke-width="2.5" opacity="0.52" stroke-linecap="round"/>
  <line x1="108" y1="82" x2="226" y2="82" stroke="#2f54eb" stroke-width="2" opacity="0.34" stroke-linecap="round"/>
  <line x1="108" y1="100" x2="218" y2="100" stroke="#2f54eb" stroke-width="2" opacity="0.34" stroke-linecap="round"/>
  <line x1="108" y1="118" x2="200" y2="118" stroke="#2f54eb" stroke-width="2" opacity="0.24" stroke-linecap="round"/>
  <line x1="108" y1="130" x2="176" y2="130" stroke="#2f54eb" stroke-width="2" opacity="0.14" stroke-linecap="round"/>
  <polygon points="236,36 252,36 252,52" fill="#2f54eb" opacity="0.22"/>
  <line x1="236" y1="36" x2="252" y2="52" stroke="white" stroke-width="1"/>
  <circle cx="332" cy="128" r="46" fill="#2f54eb" opacity="0.06"/>
  <circle cx="46" cy="52" r="24" fill="#2f54eb" opacity="0.05"/>
</svg>`;

export type SvgType = 'analytics' | 'user' | 'tool' | 'alert' | 'success' | 'document';

export interface SvgExample {
    svg: string;
    primaryColor: string;
    bgColor: string;
    label: string;
    keywords: string[];
    /** 文档与 Storybook 中展示的示例用户描述，便于对照 Prompt → 插画流程 */
    samplePrompt: string;
}

export const SVG_EXAMPLES: Record<SvgType, SvgExample> = {
    analytics: {
        svg: analyticsSvg,
        primaryColor: '#1890ff',
        bgColor: '#f0f7ff',
        label: '数据统计',
        keywords: ['数据', '统计', '报表', '图表', '分析', '销售', 'analytics', 'report', 'chart', 'data', 'sales'],
        samplePrompt: '给销售数据统计卡片加一张蓝色系、报表风格的横版插画，约 400×200。',
    },
    user: {
        svg: userSvg,
        primaryColor: '#722ed1',
        bgColor: '#f9f0ff',
        label: '用户人员',
        keywords: ['用户', '成员', '团队', '人员', '社区', '头像', 'user', 'team', 'member', 'people'],
        samplePrompt: '团队管理卡片需要紫色背景、偏用户/成员社群感觉的插画。',
    },
    tool: {
        svg: toolSvg,
        primaryColor: '#13c2c2',
        bgColor: '#e6fffb',
        label: '功能工具',
        keywords: ['功能', '工具', '设置', '配置', '系统', '网络', 'tool', 'setting', 'config', 'function', 'system'],
        samplePrompt: '系统设置或工具类入口卡片，要青绿色、偏功能/网络节点的简约插画。',
    },
    alert: {
        svg: alertSvg,
        primaryColor: '#fa8c16',
        bgColor: '#fff7e6',
        label: '警告提示',
        keywords: ['警告', '提示', '通知', '错误', '状态', '异常', 'warning', 'alert', 'notification', 'error'],
        samplePrompt: '异常或警告状态卡片，用橙色系、带提醒感的插画。',
    },
    success: {
        svg: successSvg,
        primaryColor: '#52c41a',
        bgColor: '#f6ffed',
        label: '成功完成',
        keywords: ['成功', '完成', '结果', '确认', '达成', 'success', 'complete', 'done', 'finish', 'check'],
        samplePrompt: '操作成功完成的反馈卡片，用绿色、偏确认/达成氛围的插画。',
    },
    document: {
        svg: documentSvg,
        primaryColor: '#2f54eb',
        bgColor: '#f0f5ff',
        label: '内容文档',
        keywords: ['文档', '文章', '内容', '知识', '笔记', '报告', 'document', 'article', 'content', 'note', 'report'],
        samplePrompt: '知识库或文档列表卡片，要蓝紫色、偏文章/内容堆叠感觉的插画。',
    },
};

/**
 * 根据 prompt 关键词匹配最合适的 SVG 类型
 */
export function matchSvgType(prompt: string): SvgType | null {
    const q = prompt.toLowerCase();
    for (const [type, example] of Object.entries(SVG_EXAMPLES) as Array<[SvgType, SvgExample]>) {
        if (example.keywords.some((kw) => q.includes(kw))) {
            return type;
        }
    }
    return null;
}

/**
 * 将 SVG 字符串中的主色和背景色替换为指定颜色
 */
export function recolorSvg(svg: string, from: { primaryColor: string; bgColor: string }, to: { primaryColor: string; bgColor: string }): string {
    return svg
        .replace(new RegExp(from.primaryColor.replace('#', '\\#'), 'g'), to.primaryColor)
        .replace(new RegExp(from.bgColor.replace('#', '\\#'), 'g'), to.bgColor);
}
