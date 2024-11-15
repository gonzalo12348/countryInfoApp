import babelParser from '@babel/eslint-parser';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    parser: babelParser,
    plugins: {
      react: eslintPluginReact,
    },
    languageOptions: {
      ecmaVersion: 'latest',  
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',        
      'no-console': 'warn',               
      'semi': ['error', 'always'],       
      'quotes': ['error', 'single'],      
      'no-unused-vars': ['warn'],        
      'react/jsx-uses-react': 'off',      
      'react/jsx-uses-vars': 'error',   
    },
  },
];
