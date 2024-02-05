module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/core',
            from: './src/components'
          },
          {
            target: './src/core',
            from: './src/lib'
          },
          {
            target: './src/core',
            from: './src/pages'
          },
          {
            target: './src/lib',
            from: './src/pages'
          },
          {
            target: './src/components',
            from: './src/pages'
          }
        ]
      }
    ]
  }
}
