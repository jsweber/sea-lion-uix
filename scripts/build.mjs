import { globSync } from 'glob';
import { normalize } from 'path';
import { existsSync } from 'fs';
import * as esbuild from 'esbuild';
import * as tsup from 'tsup';
import { lessLoader } from 'esbuild-plugin-less';


const build = async (path) => {
    const normalizePath = normalize(`${process.cwd()}/${path}`);
    const file = normalize(`${normalizePath}/src/index.ts`);
    const dist = normalize(`${normalizePath}/dist`);

    if (!existsSync(file)) {
        return;
    }

    const esbuildConfig = {
        entryPoints: [file],
        external: ['@ui-lib-monorepo-template/*'],
        packages: 'external',
        bundle: true,
        sourcemap: true,
        format: 'cjs',
        target: 'es2022',
        outdir: dist,
        plugins: [lessLoader()]
    };

    await esbuild.build(esbuildConfig);

    await esbuild.build({
        ...esbuildConfig,
        format: 'esm',
        outExtension: { '.js': '.mjs' },
    });
    console.log(`Built ${path}/dist/index.mjs`);

    // tsup is used to emit d.ts files only (esbuild can't do that).
    //
    // Notes:
    // 1. Emitting d.ts files is super slow for whatever reason.
    // 2. It could have fully replaced esbuild (as it uses that internally),
    //    but at the moment its esbuild version is somewhat outdated.
    //    It’s also harder to configure and esbuild docs are more thorough.
    // tsup在window中的路径有问题
    console.log(`${path}/src/index.ts`.replace(/(\/|\\|\\\\)/g, '/'));
    await tsup.build({
        entryPoints: [`${path}/src/index.ts`.replace(/(\/|\\|\\\\)/g, '/')],
        format: ['cjs', 'esm'],
        dts: { only: true },
        outDir: dist,
        external: [/@ui-lib-monorepo-template\/.+/],
        clean: true,
    });
    console.log(`Built ${path}/dist/index.d.ts`);
}

globSync('packages/*/*').forEach(build);


