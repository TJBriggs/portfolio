module.exports = {
	extends: "@wordpress/stylelint-config",
	plugins: [
		"stylelint-order"
	],
	rules: {
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["first-nested", "blockless-after-same-name-blockless", "blockless-after-blockless"],
				ignore: ["after-comment"]
			},
		],
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["extend", "mixin", "define-mixin", "custom-media"]
			}
		],
		"color-hex-length": "long",
		"function-url-quotes": "always",
		"order/properties-alphabetical-order": true,
		"selector-class-pattern": null,
		"max-line-length": 100,
		"no-eol-whitespace": null,
		"selector-class-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(_([a-z0-9]+_?)+)?(--([a-z0-9]+-?)+){0,2}$",
		"selector-id-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(_([a-z0-9]+_?)+)?(--([a-z0-9]+-?)+){0,2}$",
		"no-descending-specificity": null
	}
};
