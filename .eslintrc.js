module.exports = {
    "env": {
        "browser": true
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            { "vars": "local", "args": "after-used", "ignoreRestSiblings": false }
        ]
    }
};