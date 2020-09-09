module.exports = {
  overrides: [
    {
      files: ['**.ts', '**.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
