module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "no-underscore-dangle": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "max-len": 0,
        "no-tabs": 0,
        "jsx-a11y/alt-text": 0
    }
};