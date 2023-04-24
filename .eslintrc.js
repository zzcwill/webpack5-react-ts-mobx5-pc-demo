module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  // "off" 或 0：关闭规则，
  // "warn" 或 1：开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2：开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    'semi': ['error', 'never'], // 一行结尾不加分号
    'quotes': ['error', 'single'], // 单引号
    'comma-dangle': ['error', 'always-multiline'], // 对象或数组多行，最后一个值加逗号
    'camelcase': 'error', // 变量名必须使用驼峰式
    'no-debugger': 1,
     '@typescript-eslint/no-explicit-any': 'off', // ts可以设置any
      // '@typescript-eslint/type-annotation-spacing': 'error',
      // '@typescript-eslint/no-shadow': 'error',
      // '@typescript-eslint/explicit-module-boundary-types': 'off',
      // '@typescript-eslint/no-empty-function': 'off',
      // '@typescript-eslint/ban-ts-comment': 'off',
      // '@typescript-eslint/no-var-requires': 'off',
      // '@typescript-eslint/member-delimiter-style': 'off',
      // '@typescript-eslint/no-empty-interface': 'off',
  },
  // eslint检测react版本
  settings: {
    'react': {
      'version': 'detect',
    },
  },
}
