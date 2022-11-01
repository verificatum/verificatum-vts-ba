
// Copyright 2008-2022 Douglas Wikstrom

// Our view of compilers and linters is the following.
//
// (0) Enable as strict as possible.
// (1) Warnings and deprecation information are errors.
// (2) Software should have zero errors when it is used.
// (3) If a rule is disabled globally, then this is documented.
// (4) If a rule is disabled locally, then this is documented in the code
//     unless the reason is obvious from the context.
//
// Use 'grep -Rl "eslint-disable" src/ts' to see all places where we
// have locally disabled rules.

module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
	"tsconfigRootDir": ".",
	"project": ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"]
    },
    "plugins": [
        "@typescript-eslint",
        "eslint-plugin-tsdoc",
	"sonarjs"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
	"plugin:sonarjs/recommended"
    ],
    "rules": {

	// We use nested functions for encapsulation.
	"no-inner-declarations": "off",

	// We use namespaces to create single-file software.
	"@typescript-eslint/no-namespace": "off",

	"@typescript-eslint/array-type": "error",
	"@typescript-eslint/ban-tslint-comment": "error",
	"@typescript-eslint/class-literal-property-style": "error",
	"@typescript-eslint/consistent-indexed-object-style": "error",

	// We use casts of the form "<mytype>x" consistently, since
	// the "as mytype" notation is confusing for
	// non-TypeScript/JavaScript programmers who may review our
	// software.
	"@typescript-eslint/consistent-type-assertions": ["error", {
            "assertionStyle": "angle-bracket",
	    "objectLiteralTypeAssertions": "allow"
	}],

	"@typescript-eslint/consistent-type-definitions": "error",
	"@typescript-eslint/consistent-type-imports": "error",
	"@typescript-eslint/explicit-function-return-type": "error",

	// This is not an obvious choice, but we prefer simpler code
	// for the moment. A strong argument in the opposite direction
	// may change this. It is important to realize that
	// accessibility in the context of TypeScript is solely a
	// compile-time property and does not provide any run-time
	// security in terms of encapsulation due to how poorly
	// JavaScript is constructed.
	//
	// We can probably use private members in the future, e.g., we
	// could expect that "private x: number = 1;" will be compiled
	// to "#x = 1", but currently this is not a mature language
	// feature, so it makes no sense to waste time on it.
	"@typescript-eslint/explicit-member-accessibility": ["off"],

	"@typescript-eslint/explicit-module-boundary-types": "error",
	"@typescript-eslint/member-delimiter-style": "error",

	// This harms overall readability of software.
	"@typescript-eslint/member-ordering": "off",

	"@typescript-eslint/method-signature-style": "error",
	"@typescript-eslint/no-confusing-non-null-assertion": "error",
	"@typescript-eslint/no-dynamic-delete": "error",
	"@typescript-eslint/no-extraneous-class": "error",

	// This is philosophically wrong to ever enable in a typed
	// language, where this is useful to the reader. Explicit
	// typing is a comment for readers and less error prone.
	"@typescript-eslint/no-inferrable-types": "off",

	"@typescript-eslint/no-invalid-void-type": "error",
	"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
	"@typescript-eslint/no-parameter-properties": "error",
	"@typescript-eslint/no-require-imports": "error",

	// We use as precise types as is possible as a form of comment
	// and in anticipation of stricter type checking. Thus, we
	// need to turn this off, despite that we understand this in the
	// context of C types which can be confusing.
	"@typescript-eslint/no-type-alias": "off",

	"@typescript-eslint/prefer-enum-initializers": "error",

	// We prefer plain for-loops, since it makes the code more
	// readable by non-TypeScript/JavaScript programmers and it is
	// still faster in some cases.
	"@typescript-eslint/prefer-for-of": "off",

	"@typescript-eslint/prefer-function-type": "error",
	"@typescript-eslint/prefer-literal-enum-member": "error",
	"@typescript-eslint/prefer-optional-chain": "error",
	"@typescript-eslint/prefer-ts-expect-error": "error",

	// This is too strict and harms overall readability.
	"@typescript-eslint/sort-type-union-intersection-members": "off",

	"@typescript-eslint/type-annotation-spacing": "error",
	"@typescript-eslint/typedef": "error",

	// This is wrong to use at all. It is lazy to not provide the
	// most precise overload for improved readability.
	"@typescript-eslint/unified-signatures": "off",

	// Any brace style is acceptable when used consistently, but
	// simple one-line statements are good for generated code and
	// do not harm readability.
	"brace-style": "off",
	"@typescript-eslint/brace-style": ["error", "1tbs", {
	    "allowSingleLine": true
	}],

	"@typescript-eslint/comma-dangle": "error",
	"@typescript-eslint/comma-spacing": "error",
	"@typescript-eslint/default-param-last": "error",
	"@typescript-eslint/func-call-spacing": "error",

	// This rule is apparently broken and nobody is interested in
	// fixing it, so we turn it off entirely and rely on OCD
	// to keep the code in good shape. Let us know if you have a
	// more severe case of this disorder than we do.
	"indent": "off",
	"@typescript-eslint/indent": ["off"],

	// This is wrong to use at all. Variables are variables and if
	// they are not used, or potentially not initialized before use,
	// then this is an error
	"init-declarations": "off",
	"@typescript-eslint/init-declarations": "off",

	// This is a matter of taste. Historically, people have used
	// both consistent space and no-space between, e.g., a cast and
	// a variable.
	"@typescript-eslint/keyword-spacing": "off",

	// This is too strict and harms overall readability.
	"lines-between-class-members": "off",
	"@typescript-eslint/lines-between-class-members": ["off"],

	// It makes perfect sense to gather certain functionality in
	// static functions of a class for uniformity reasons.
	"@typescript-eslint/no-extraneous-class": "off",

	"@typescript-eslint/no-dupe-class-members": "error",
	"@typescript-eslint/no-duplicate-imports": "error",
	"@typescript-eslint/no-extra-semi": "error",
	"@typescript-eslint/no-invalid-this": "error",
	"@typescript-eslint/no-loop-func": "error",

	// Arithmetic constants are not magic. They have a semantic
	// meaning to *real* programmers :-)
	"@typescript-eslint/no-magic-numbers": "off", 

	"@typescript-eslint/no-redeclare": "error",
	"@typescript-eslint/no-restricted-imports": "error",

	// This is wrong to use at all as a general rule despite that
	// it is a good principle.
	"@typescript-eslint/no-shadow": "off",

	"@typescript-eslint/no-unused-expressions": "error",

	// This is outdated.
	"@typescript-eslint/no-use-before-define": "off",

	"@typescript-eslint/no-useless-constructor": "error",
	"@typescript-eslint/object-curly-spacing": "error",
	"@typescript-eslint/padding-line-between-statements": "error",

	"quotes": "off",
	"@typescript-eslint/quotes": "error",

	"@typescript-eslint/semi": "error",

	// We use the pattern "foo()" and "function()" consistently.
	// This is a matter of taste.
	"space-before-function-paren": "off",
	"@typescript-eslint/space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never"
	}],

	"@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/no-explicit-any": "off",

	// The TSDoc linter does not handle HTML escaping correctly,
	// e.g., a comment containing "x < 1" is perfectly valid HTML
	// and should not be flagged since it cannot be misunderstood
	// as an HTML tag, whereas "1 <tr " should be flagged.
	//
	// We do not modify comments for arithmetic algorithms because
	// the linter gives false positives. Please let us know if
	// this bug in the eslint-plugin-tsdoc is addressed.
        "tsdoc/syntax": "off"
    }
}
