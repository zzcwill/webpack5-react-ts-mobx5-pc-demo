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
    'no-debugger': 1, // no debugger
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'space-infix-ops': 1, // 在操作符旁边必须有空格
    'space-before-blocks': 1, // 语句块之前必须有空格
    'spaced-comment': 1, // 注释前必须有空格
    'arrow-spacing': [1, {
      'before': true, 'after': true,
    }], // 定义箭头函数的箭头前后都必须有空格
    'keyword-spacing': [1, {
      'before': true, 'after': true,
    }], // 关键字前后必须有空格
    'no-unused-vars': 0,
    'object-curly-newline': ['error', {
      'ObjectPattern': {
        'multiline': true,
      },
    }],
    // 缩进2格
    'indent': ['error', 2],
    '@typescript-eslint/ban-ts-comment': 0, // 关闭 禁止ts-ignore
    '@typescript-eslint/no-unused-vars': 1, // ts变量不使用关闭
    '@typescript-eslint/no-explicit-any': 0, // ts可以设置any
    '@typescript-eslint/no-var-requires': 0, // ts引入可以require
  },
  // eslint检测react版本
  settings: {
    'react': {
      'version': 'detect',
    },
  },
}
