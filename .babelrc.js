const aliasPath = require('./aliasPath');

module.exports = (()=>({
	"plugins": [
		["babel-plugin-styled-components"],
		["@babel/plugin-proposal-optional-chaining"],
		["import", { "libraryName": "antd", libraryDirectory: "es", "style": 'css'}],
		["module-resolver", {
			"alias": aliasPath
		}]
	]
}))();