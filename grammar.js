/// <reference types="tree-sitter-cli/dsl" />

module.exports = grammar({
	name: 'ldif',

	extras: $ => [/ /],

	conflicts: $ => [
		[$.entry, $.change_record],
		[$.change_record, $.add_content],
	],

	rules: {
		source_file: $ =>
			seq(
				optional($.version_spec),
				repeat(choice($.entry, $.change_record, $.comment, $._blank_line)),
			),

		version_spec: $ =>
			seq(
				'version:',
				$.version_number,
				$._newline,
			),

		version_number: _ => /[0-9]+/,

		// Regular entry (content record)
		entry: $ =>
			prec.right(seq(
				$.dn_spec,
				repeat1(choice($.attrval_spec, $.comment)),
			)),

		// Change record for ldapmodify
		change_record: $ =>
			prec.right(seq(
				$.dn_spec,
				repeat(choice($.control_spec, $.comment)),
				$.changetype_spec,
				repeat($.comment),
				optional($.change_content),
			)),

		dn_spec: $ =>
			seq(
				choice('dn:', 'DN:'),
				choice(
					seq(optional(' '), $.dn_value),
					seq(':', optional(' '), $.base64_value),
				),
				$._newline,
			),

		control_spec: $ =>
			seq(
				'control:',
				optional(' '),
				$.oid,
				optional(seq(' ', $.criticality)),
				optional(seq(choice(':', '::'), optional(' '), $.value)),
				$._newline,
			),

		criticality: _ => choice('true', 'false'),

		changetype_spec: $ =>
			seq(
				choice('changetype:', 'changeType:'),
				optional(' '),
				$.changetype,
				$._newline,
			),

		changetype: _ => choice('add', 'delete', 'modify', 'modrdn', 'moddn'),

		change_content: $ =>
			choice(
				$.add_content,
				$.modify_content,
				$.modrdn_content,
				// delete has no content
			),

		add_content: $ => prec.right(repeat1(choice($.attrval_spec, $.comment))),

		modify_content: $ => repeat1($.modify_spec),

		modify_spec: $ =>
			prec.right(seq(
				$.modify_operation,
				repeat(choice($.attrval_spec, $.comment)),
				optional($.separator),
			)),

		modify_operation: $ =>
			seq(
				choice('add:', 'delete:', 'replace:', 'increment:'),
				optional(' '),
				$.attribute_name,
				$._newline,
			),

		separator: $ => seq('-', $._newline),

		modrdn_content: $ =>
			seq(
				$.newrdn_spec,
				$.deleteoldrdn_spec,
				optional($.newsuperior_spec),
			),

		newrdn_spec: $ =>
			seq(
				choice('newrdn:', 'newRDN:'),
				choice(
					seq(optional(' '), $.value),
					seq(':', optional(' '), $.base64_value),
				),
				$._newline,
			),

		deleteoldrdn_spec: $ =>
			seq(
				choice('deleteoldrdn:', 'deleteOldRDN:'),
				optional(' '),
				choice('0', '1'),
				$._newline,
			),

		newsuperior_spec: $ =>
			seq(
				choice('newsuperior:', 'newSuperior:'),
				choice(
					seq(optional(' '), $.dn_value),
					seq(':', optional(' '), $.base64_value),
				),
				$._newline,
			),

		attrval_spec: $ =>
			seq(
				$.attribute_name,
				choice(
					seq(':', optional(' '), $.value),
					seq('::', optional(' '), $.base64_value),
					seq(':<', optional(' '), $.url_value),
				),
				$._newline,
			),

		attribute_name: _ => /[a-zA-Z][a-zA-Z0-9-]*(;[a-zA-Z0-9-]+)*/,

		dn_value: $ => $.value,

		value: $ =>
			prec.right(seq(
				$._value_content,
				repeat($.continuation),
			)),

		_value_content: _ => /[^\n\r]+/,

		continuation: $ =>
			seq(
				/\r?\n /,
				$._value_content,
			),

		base64_value: $ =>
			prec.right(seq(
				$._base64_content,
				repeat($.base64_continuation),
			)),

		_base64_content: _ => /[A-Za-z0-9+/=]+/,

		base64_continuation: $ =>
			seq(
				/\r?\n /,
				$._base64_content,
			),

		url_value: _ => /[^\n\r]+/,

		oid: _ => /[0-9]+(\.[0-9]+)*/,

		comment: $ =>
			seq(
				token(seq('#', /[^\n\r]*/, repeat(seq(/\r?\n /, /[^\n\r]*/)))),
				$._newline,
			),

		_blank_line: $ => $._newline,

		_newline: _ => /\r?\n/,
	},
});
