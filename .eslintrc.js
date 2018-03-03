module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'experimentalDecorators': true,
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true
  },
  'settings': {
    'ecmascript': 6,
    'jsx': true
  },
  'plugins': ['react'],
  'extends': ['standard', 'standard-react'],
  'rules': {
    'react/jsx-filename-extension': 1,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-tabs': 1,
    'jsx-a11y/alt-text': 0,
    'eslint-disable-line': 0
  }
}
