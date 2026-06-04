# tsuYuResume

余威的个人主页，使用 Next.js 静态导出并部署到 GitHub Pages。

## Getting Started

安装依赖：

```bash
npm install
```

本地开发：

```bash
npm run dev
```

构建静态站点：

```bash
npm run build
```

构建结果会输出到 `out/`，可由 GitHub Pages 直接托管。

## Deploy

仓库推送到 GitHub 后，在仓库设置中启用 GitHub Pages：

1. 进入 `Settings -> Pages`。
2. Source 选择 `GitHub Actions`。
3. 推送到 `main` 或 `master` 后，`.github/workflows/deploy.yml` 会自动构建并发布。

默认项目页地址类似：

```text
https://<github-username>.github.io/tsuYuResume/
```
