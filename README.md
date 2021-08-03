# hexo-related-keyword-post

本插件使用[hailiang-wang/hanlp-api](https://github.com/hailiang-wang/hanlp-api)自动生成文章的关键词，计算博客中文章关键词的相关性，在博客侧边栏中生成“相关文章”

## 环境
```
java 1.8
nodejs >= 6
```
## 安装
```
npm install hexo-related-keywords-post
```
## 配置
由于npm安装[hailiang-wang/hanlp-api](https://github.com/hailiang-wang/hanlp-api)并不包含大约几百兆的词典文件，请去此项目地址或下面的搬运链接下载，并配置好路径，
以下搬运自上面的项目README：
- 配置文件路径 node_modules/node-hanlp/lib/src-java/hanLP.proerties
- 请修改root为您的目录路径
- 词典文件目录 ./data
- 请下载词典 https://pan.baidu.com/s/1pKUVNYF 放入 ./data (约800MB文件) 目录
## 插件出错
npm install过程中可能会出现node-gyp的相关错误，请检查windows-build-tools，python和nodejs的安装版本是否兼容，尝试去以下链接找解决办法：
- [nodejs/node-gyp](https://github.com/nodejs/node-gyp)
- [Microsoft/nodejs-guidelines](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#environment-setup-and-configuration)
