'use strict'

module.exports = {
    "extends": [
        "stylelint-config-recommended",
        "stylelint-config-styled-components"
    ],
    "rules": {
        "indentation": 4,
        // "max-empty-lines": 1,
        // "at-rule-empty-line-before": "never",
        // "block-closing-brace-empty-line-before": "never",
        "no-descending-specificity": null,
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "function",
                    "if",
                    "each",
                    "include",
                    "mixin"
                ]
            }
        ],
        "custom-property-empty-line-before": [ "never" ],
        "comment-empty-line-before":
        [
            "always",
            {
                "except": [ "first-nested" ]
            }
        ],
        "declaration-empty-line-before":
        [
            "always",
            {
                "except": [ "after-declaration", "first-nested" ]
            }
        ],
        "rule-empty-line-before":
        [
            "always",
            {
                "except": [ "first-nested" ],
            }
        ]
    }
}