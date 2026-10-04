# ClashShop

中文网络隐私、VPN 与代理工具内容网站，基于 Astro 静态生成。

## 本地开发

```sh
npm install
npm run dev
```

默认访问 `http://localhost:4321/`。PowerShell 执行策略阻止 `npm.ps1` 时，请使用 `npm.cmd run dev`。

## 验证

```sh
npm run check
npm run build
npm test
npm run check:links
```

## 环境变量

复制 `.env.example` 为 `.env`，只填写实际启用的配置。联盟目标、统计站点 ID 和事件端点不得提交到内容文件中。未配置联盟 URL 时，链接会安全回退到内容中已核验的官方 URL。

## 部署

- Cloudflare Pages：构建命令 `npm run build`，输出目录 `dist`。
- Vercel：Framework Preset 选择 Astro，构建命令 `npm run build`，输出目录 `dist`。
- Node.js 建议使用当前 LTS。仓库的 `package-lock.json` 应随源码提交，CI 使用 `npm ci`。

`public/_headers` 供 Cloudflare Pages 使用，`vercel.json` 提供等价的 Vercel 安全响应头。生产部署前必须设置并验证 `PUBLIC_SITE_URL=https://clashshop.net`、联系邮箱、运营主体和隐私政策内容。

## 内容发布约束

`demo-vpn`、`demo-shield` 及其对比内容是虚构演示数据，已设置 `noindex` 并排除在 sitemap 外。替换成真实服务时，必须提供来源、核验日期、价格条件和审校状态，不能仅移除“示例数据”文字。
