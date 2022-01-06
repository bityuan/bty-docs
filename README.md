# BitYuan 开发文档

该站点基于 Vuepress 构建而成，文档格式为Markdown。文档相关问题欢迎 issue 或 pull request。

BitYuan 架构相关问题[前往此处](https://github.com/bityuan/bityuan) issue 或 pull request。

## 开发
```
npm install
npm run dev
```

## 文档编辑
```
首次编辑执行命令：npm install

英文版指南路径：/guide
中文版指南路径：/zh/guide

Markdown文件直接放入路径内会自行扫描生成导航
# 指南初始页为index.md，务改此文件名。

编辑完成执行命令：npm run deploy 发布至GitHub更新
若需本地预览执行：npm run dev
```