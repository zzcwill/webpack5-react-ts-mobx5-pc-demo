# webpack5-react-ts-mobx5-pc-demo
> webpack5-react-ts-mobx5-pc-demo

### 技术栈
- webpack5
- react18
- react-router6
- typescript5
- mobx5

### node
18.20.2

### 项目运行
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
