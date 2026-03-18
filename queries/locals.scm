; Local scopes and definitions for LDIF
;
; Each entry/change_record is a scope. Attribute names within
; an entry are definitions so editors can match repeated
; references to the same attribute within the same entry.

(entry) @local.scope
(change_record) @local.scope

; DN is the entry's identity
(dn_spec
  (dn_value
    (value) @local.definition))

; Each attribute line defines an attribute within the entry scope
(attrval_spec
  (attribute_name) @local.definition)

; Modify operations reference attributes
(modify_operation
  (attribute_name) @local.reference)
