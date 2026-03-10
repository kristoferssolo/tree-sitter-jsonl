/**
 * @file Tree-sitter grammar for JSONL
 * @author Kristofers Solo <dev at kristofers dot xyz>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "jsonl",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
