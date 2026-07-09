const testing = @import("std").testing;

const root = @import("tree-sitter-ldif");

test "can load grammar" {
    try testing.expect(@intFromPtr(root.language()) != 0);
}
