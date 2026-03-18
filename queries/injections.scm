(attrval_spec
  (attribute_name) @_attr
  (value) @injection.content
  (#match? @_attr "^olc(AttributeTypes|ObjectClasses|LdapSyntaxes|DitContentRules|MatchingRules|MatchingRuleUse|NameForms)$")
  (#set! injection.language "ldap-schema"))
