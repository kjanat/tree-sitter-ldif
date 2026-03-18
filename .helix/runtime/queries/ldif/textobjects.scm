; Textobjects for LDIF files

; class = entries/records
(entry) @class.around
(change_record) @class.around

; function = dn spec
(dn_spec) @function.around

; parameter = attribute lines
(attrval_spec) @parameter.around
(modify_spec) @parameter.around

; comment
(comment) @comment.around
