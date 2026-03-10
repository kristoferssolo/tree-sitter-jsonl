package tree_sitter_jsonl_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_jsonl "codeberg.org/kristoferssolo/tree-sitter-jsonl/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_jsonl.Language())
	if language == nil {
		t.Errorf("Error loading JSON Lines grammar")
	}
}
