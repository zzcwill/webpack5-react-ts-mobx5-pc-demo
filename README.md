# webpack5-react-ts-mobx5-pc-demo

> webpack5-react-ts-mobx5-pc-demo

# node

- node >= 18
- nvm use 18.20.2

# dev

- yarn install
- pnpm dev
- pnpm build

# 技术栈

- webpack5
- react18
- react-router6
- typescript5
- mobx5

# git-check

- yarn prepare
- 设置nvm环境
- /.husky/\_/husky.sh
  export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
- 新建.husky文件夹
- npx husky add .husky/pre-commit 'npm run pre-check'

# 配置husky监听commit-msg

- npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
