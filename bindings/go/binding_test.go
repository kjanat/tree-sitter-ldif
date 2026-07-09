package tree_sitter_ldif_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_ldif "github.com/kjanat/tree-sitter-ldif/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_ldif.Language())
	if language == nil {
		t.Errorf("Error loading LDIF grammar")
	}
}
