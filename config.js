'use strict'

module.exports = {
    "extends": [
        "stylelint-config-recommended",
        "stylelint-config-styled-components"
    ],
    "rules": {
        "indentation": 4,
        "max-empty-lines": 1,
        "at-rule-empty-line-before": [ "always" ],
        "block-closing-brace-empty-line-before": [ "never" ],
        "custom-property-empty-line-before": [ "always" ],
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