module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:vue/vue3-recommended', 'plugin:vue-pug/vue3-recommended', 'eslint:recommended', 'prettier'],
	parser: 'vue-eslint-parser',
	plugins: ['vue', 'html', 'prettier', 'pug'],
	rules: {
		'prettier/prettier': 'error',
		'vue/require-prop-types': 'off',
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 'off'
	}
};
