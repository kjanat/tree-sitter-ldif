; Comments
(comment) @comment

; Numeric literals
(version_number) @constant.numeric
(oid) @constant.numeric

; DN keywords — the most prominent structural keyword
(dn_keyword) @keyword
["version:"] @keyword

; Change record keywords
["changetype:" "changeType:"] @keyword
["control:"] @keyword

; Changetype values (add, delete, modify, modrdn, moddn)
(changetype) @type

; Modify operation keywords
["add:" "delete:" "replace:" "increment:"] @keyword.operator

; modrdn keywords
["newrdn:" "newRDN:"] @keyword
["deleteoldrdn:" "deleteOldRDN:"] @keyword
["newsuperior:" "newSuperior:"] @keyword

; Boolean criticality in controls
(criticality) @constant.builtin

; Attribute names
(attribute_name) @property

; Regular values
(value) @string
(base64_value) @string.special
(url_value) @markup.link.url

; DN values override generic @string — must come AFTER (value) @string
; Captures inner (value) node so it takes priority over the generic capture
(dn_value
  (value) @label)

; Delimiters
":" @punctuation.delimiter
"::" @punctuation.delimiter
":<" @punctuation.delimiter

; Separator between modify operations
(separator) @punctuation.delimiter
