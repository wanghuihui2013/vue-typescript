module.exports = {
  extends: [
    'alloy',
    'alloy/typescript',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // 自定义规则
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'grouped-accessor-pairs': 'off',
    'no-constructor-return': 'off',
    'no-dupe-else-if': 'off',
    'no-import-assign': 'off',
    'no-setter-return': 'off',
    'prefer-regex-literals': 'off'
  }
};