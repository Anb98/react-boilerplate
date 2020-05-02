const aliasPath = require('./aliasPath');

module.exports = (()=>({
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"airbnb"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		'import/prefer-default-export':'off',
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"no-plusplus":"off",
		"max-len":["error", 120],
		"linebreak-style":0,
		"no-restricted-syntax":"off",
		"jsx-a11y/label-has-associated-control": "off",
		"indent": ["error", "tab"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"quotes": ["error", "single", { "allowTemplateLiterals": true }],
		"jsx-quotes":["error", "prefer-single"],
		"react/jsx-filename-extension":[1, {"extensions":[".js", ".jsx"]}],
	},
	"settings": {
		"import/resolver": {
			"babel-module": {
				"module-resolver": {
					"alias": aliasPath,
				}
			}
		}
	}
}))();