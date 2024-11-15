import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  },
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          configFile: './.babelrc',
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      react: pluginReact, 
      ...{
          ...pluginJs.configs.recommended,
          ...pluginReact.configs.recommended,
        },
    },
  },
];
