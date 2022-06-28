module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'import',
		'@typescript-eslint',
		'react-hooks',
	],
	rules: {
		'arrow-body-style': ['error', 'as-needed'],
		'import/no-unresolved': 'error',
		'jsx-quotes': ['error', 'prefer-single'],
		'linebreak-style': 0,
		'max-len': ['error', 120],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				'newlines-between': 'always',
				warnOnUnassignedImports: true,
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
				pathGroupsExcludedImportTypes: ['react'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin',
					},
					{
						pattern: '@components/**',
						group: 'internal',
					},
					{
						pattern: '@constants/**',
						group: 'internal',
					},
					{
						pattern: '@helpers/**',
						group: 'internal',
					},
					{
						pattern: '@images/**',
						group: 'internal',
					},
					{
						pattern: '@pages/**',
						group: 'internal',
					},
					{
						pattern: './*.css',
						group: 'sibling',
						position: 'after',
					},
				],
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{ tsx: 'never' },
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
};
