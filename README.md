# AF's Space

基于 Astro 的最小个人空间，不使用现成主题。原来的 `index.html` 已原样迁移到 `src/pages/index.astro`，可以直接从这个页面开始自由设计。

## 本地开发

需要 Node.js 24（`.nvmrc` 已指定主版本）和 npm。

```sh
nvm use
npm ci
npm run dev
```

打开终端提示的本地地址，默认是 http://localhost:4321 。

## 构建与预览

```sh
npm run build
npm run preview
```

构建结果位于 `dist/`，无需提交该目录。`node_modules/` 和 `.astro/` 也已忽略。

## 文件位置

- `src/pages/index.astro`：首页；添加其他 `.astro` 或 Markdown 页面可扩展网站。
- `public/`：无需处理、直接复制到网站的图片等静态资源。
- `astro.config.mjs`：网站地址和静态构建配置。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署流程。
- `package-lock.json`：锁定依赖，必须随源码提交。

## GitHub Pages

网站地址：https://albertfrank-kmhuang.github.io/

这是用户主页仓库，网站位于域名根路径，因此无需配置仓库名 `base` 前缀。

仓库 **Settings → Pages → Build and deployment → Source** 应为 **GitHub Actions**。
部署流程在推送到 `main` 时自动执行，也可以在 GitHub 的 Actions 页面手动运行。

首次发布时，先确认本地变更，再提交源码和部署流程并推送到 `main`：

```sh
git status
git add .github/workflows/deploy.yml .gitignore .nvmrc README.md astro.config.mjs package.json package-lock.json tsconfig.json public/.gitkeep src/pages/index.astro index.html
git commit -m "Initialize minimal Astro site and GitHub Pages deployment"
git push origin main
```

其中 `index.html` 用于记录旧位置的删除；后续更新无需再添加这个路径。

在 Actions 中确认构建、部署均成功后，访问上述网站地址。

官方说明：https://docs.astro.build/en/guides/deploy/github/
