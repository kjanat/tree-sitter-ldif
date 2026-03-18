; Tags for code navigation (GitHub, tree-sitter tags)

; Content entries define a DN
(entry
  (dn_spec
    (dn_value
      (value) @name)) @definition.class)

; Change records define operations on a DN
(change_record
  (dn_spec
    (dn_value
      (value) @name)) @definition.class)
