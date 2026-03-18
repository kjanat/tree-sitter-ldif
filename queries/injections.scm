; Inject ldap-schema into OpenLDAP OLC schema definition attributes.
; Case-insensitive match because LDAP attribute names are case-insensitive.
(attrval_spec
  (attribute_name) @_attr
  (value) @injection.content
  (#match? @_attr "(?i)^olc(AttributeTypes|ObjectClasses|LdapSyntaxes|DitContentRules|MatchingRules|MatchingRuleUse|NameForms)(;[a-zA-Z0-9-]+)*$")
  (#set! injection.language "ldap-schema"))
