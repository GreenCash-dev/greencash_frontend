module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
  },

  extends: ['prettier'],
  plugins: ['prettier', 'import', 'react', 'react-hooks', 'jsx-a11y'],

  rules: {
    'global-require': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-return-await': 'off',

    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: { attributes: false },
          },
        ],
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {},
    },
  },
};
