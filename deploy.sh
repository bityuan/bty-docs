#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
npm run build
 
# 提交git 
git add .
git commit -m `date +%Y%m%d-%H%M%S`
 
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push origin

echo '发布成功. 👉 https://docs.bityuan.com'