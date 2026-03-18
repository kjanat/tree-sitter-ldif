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

> [!NOTE]
>
> ## Editor-specific injections
>
> This grammar injects `ldap_schema` into LDIF attribute values matching `olcAttributeTypes`, `olcObjectClasses`, etc.\
> The [injections.scm] in this repo targets **Helix**'s (`"ldap-schema"`).
>
> Zed and Helix use different language names and **cannot share the same `injections.scm`**:
>
> | Editor | Language name   | Why                                        |
> | ------ | --------------- | ------------------------------------------ |
> | Zed    | `"LDAP Schema"` | Matches `name` in `config.toml`            |
> | Helix  | `"ldap-schema"` | Spaces in language names break query paths |
>
> The [zed-ldap] extension maintains its own copy with the Zed-compatible language name.

[injections.scm]: queries/injections.scm
[zed-ldap]: https://github.com/kjanat/zed-ldap
