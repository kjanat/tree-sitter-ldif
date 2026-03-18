# tree-sitter-ldif

Tree-sitter grammar for LDIF (LDAP Data Interchange Format, RFC 2849).

Parses:
- Content records (entries)
- Change records (add, delete, modify, modrdn)
- Base64 values (`::`)
- URL references (`:<`)
- Comments

## Development

```bash
npm install
npm run generate
npm test
```
