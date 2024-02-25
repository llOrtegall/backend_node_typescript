module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'eqeqeq': 'error', // Requiere el uso de === y !==
    'curly': 'error', // Requiere llaves consistentes para todos los bloques de control
    'no-unused-vars': 'warn', // Advierte sobre variables declaradas pero no utilizadas
    '@typescript-eslint/no-var-requires': 0, // Permite el uso de require
    '@typescript-eslint/explicit-function-return-type': 'off', // No requiere un tipo de retorno explícito para las funciones
    '@typescript-eslint/no-explicit-any': 'warn', // Advierte sobre el uso de 'any' type
  },
};