const eslintConfig = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      process: 'readonly', // Añadir más globals si es necesario
    },
  },
  plugins: {
    prettier: require('eslint-plugin-prettier'), // Asegúrate de que el plugin esté instalado
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    eqeqeq: 'error',
    'prettier/prettier': 'error',
  },
};

module.exports = [
  {
    ...eslintConfig,
  },
];
