var fs = require('fs');//引用文件系统模块

function getFilesName(str) {
  const files = fs.readdirSync(str)
  const index = files.indexOf('index.md')
  if (index != -1) { 
    files.splice(index,1)
    files.unshift('')
  }
  files.forEach((item,index) => {
    if (item.length != 0 && !item.includes('.md')) {
      files[index] = {
        title: item,
        prefix: `${item}/`,
        children:getFilesName(`${str}/${item}`)
      }
    }
  })
  return files
}

module.exports = {
  getFilesName
}