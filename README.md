# webpack5-react-ts-mobx5-pc-demo
> webpack5-react-ts-mobx5-pc-demo

### 技术栈
- webpack5
- react18
- react-router6
- typescript5
- mobx5

### node
v16.14.0

### 项目运行
- npm ls --depth 0 -g
- 全局安装包安装
- npm i -g cross-env yarn
- 安装相应依赖包
- yarn install
- 开发环境运行
- yarn dev
- 生成项目打包文件
- yarn build


### git-check
- yarn run prepare
- 设置nvm环境
- /.husky/_/husky.sh
 export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
- 新建.husky文件夹
- npx husky add .husky/pre-commit 'npm run pre-check'

### 配置husky监听commit-msg
- npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

### npm
yarn add axios classnames copy-to-clipboard dayjs decimal.js lodash mobx mobx-react-lite react react-dom react-router react-router-dom

yarn add -D

yarn add

yarn remove
