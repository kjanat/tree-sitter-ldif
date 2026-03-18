(comment) @comment

(version_number) @constant.numeric
(oid) @constant.numeric

["dn:" "DN:"] @keyword
["version:"] @keyword
["changetype:" "changeType:"] @keyword
["control:"] @keyword

(changetype) @type

["add:" "delete:" "replace:" "increment:"] @function
["newrdn:" "newRDN:"] @keyword
["deleteoldrdn:" "deleteOldRDN:"] @keyword
["newsuperior:" "newSuperior:"] @keyword

(criticality) @constant.builtin

(attribute_name) @property

(value) @string
(base64_value) @string.special
(url_value) @markup.link.url
(dn_value) @string

":" @punctuation.delimiter
"::" @punctuation.delimiter
":<" @punctuation.delimiter

(separator) @punctuation.delimiter
