module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'tailwindcss/no-custom-classname': [
      'warn', {
        'whitelist': [
          'current',
          'router-link-active',
          'router-link-exact-active',
          'loader',
          'required',
        ],
      },
    ],

    '@typescript-eslint/no-namespace': 'off',

    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': false,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],

    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // '@typescript-eslint/no-non-null-assertion': 'off',
    'space-in-parens': ['warn', 'never'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'arrow-spacing': ['warn', { before: true, after: true }],
    '@typescript-eslint/type-annotation-spacing': ['warn', {}],

    '@typescript-eslint/space-before-blocks': 'error',

    semi: ['warn', 'never'],
    '@typescript-eslint/semi': ['warn', 'never'],

    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],

    'array-bracket-newline': ['warn', { multiline: true }],
    'vue/array-bracket-newline': ['warn', { multiline: true }],

    'array-bracket-spacing': ['error', 'never'],
    'vue/array-bracket-spacing': ['error', 'never'],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['warn', 'stroustrup', { allowSingleLine: false }],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['warn', { before: false, after: true }],
    'vue/comma-spacing': ['warn', { before: false, after: true }],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    'vue/comma-dangle': ['warn', 'always-multiline'],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
    'vue/space-infix-ops': 'warn',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'vue/object-curly-spacing': ['warn', 'always'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

    curly: ['warn', 'multi-or-nest', 'consistent'],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],

    // 'brace-style': 'off',
    // '@typescript-brace-styleeslint/': ['warn', 'stroustrup', { allowSingleLine: false }],
    // 'vue/brace-style': ['warn', 'stroustrup', { allowSingleLine: false }],

    '@typescript-eslint/no-var-requires': 'off',

    'no-multi-spaces': 'warn',
    'vue/multi-word-component-names': 'off',

    'vue/key-spacing': ['warn', { beforeColon: false, afterColon: true }],

    'vue/require-default-prop': 'off',
    // 'vue/max-attributes-per-line': ['error', {
    //   'singleline': { 'max': 3 }, // 單行最多 3 個屬性
    //   'multiline': { 'max': 1 }, // 多行最多 1 個屬性
    // }],
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': {
          'max': 3,
        },
        'multiline': {
          'max': 1,
        },
      },
    ],

    'vue/component-tags-order': [
      'warn',
      { order: ['script', 'template', 'style'] },
    ],

    indent: 'off',
    '@typescript-eslint/indent': [
      'warn', 2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
  },
}
