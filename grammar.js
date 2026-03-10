/**
 * @file Tree-sitter grammar for JSONL
 * @author Kristofers Solo <dev at kristofers dot xyz>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "jsonl",
  extras: (_) => [],

  rules: {
    // TODO: add the actual grammar rules
    document: ($) => repeat(choice($.record, $.empty_line)),
    record: ($) => seq($.content, /\r?\n/),
    content: (_) => /[^\r\n]+/,
    empty_line: (_) => /[ \t]*\r?\n/,
},
});
