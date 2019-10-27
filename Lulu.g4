grammar Lulu;
// program: (fst_dcl? fst_def+);
program: assign;

const_val: Int_const | Real_const | Bool_const |String_const;
Bool_const: 'true' | 'false';
Int_const: [0-9]+ | ('0x' | '0X') [a-fA-F0-9]+;

Real_const:
	[0-9]+ '.' [0-9]* EXPONENT?
	| [0-9]* '.' [0-9]+ EXPONENT?
	| [0-9]+ EXPONENT;

EXPONENT: ('^') ('+' | '-')? [0-9]+;

String_const : '\''   ('\\n' | '\\t' |'\\r' |'\\\\' |'\\0'|Num_Esc_Char|~('\\'|'\'') )* '\'';
//String_const : '\'' .*?  '\'';

// Numeric Escape Characters
Num_Esc_Char : '\\'('x'|'X')[0-9a-fA-F][0-9a-fA-f] ;



//  To have nested blocks just add 'block' in below statement
block: '{' (var_def | stmt)* '}';
stmt:
	assign ';'
	| cond_stmt
	| loop_stmt
	| func_call ';'
	| 'break' ';'
	| 'continue' ';'
	| 'destruct' ('[' ']')* Identifiers ';';

var_def: 'const'? type var_val (',' var_val)* ';';
var_val: ref ('=' expr)?;

// fst_dcl= <ft_dcl>
fst_dcl: 'declare' '{' ( func_dcl | type_dcl | var_def)+ '}';

// Function dcl accepts only 1 format for parameters ( dcl_args | func_def_args )
func_dcl: ('(' dcl_args ')' '=')? Identifiers '(' (
		dcl_args
		| func_def_args
	)? ')' ';';

// dcl_args = <args>
dcl_args: type ('[' ']')* | dcl_args ',' type ('[' ']')*;

type_dcl: Identifiers ';';

//fst_def = <ft_def>
fst_def: type_def | func_def;
type_def:
	'type' Identifiers (':' Identifiers)? '{' component+ '}';
component: access_modifier? (var_def | func_def);
access_modifier: 'private' | 'public' | 'protected';

func_call: (variable '.')? func_handler
	| 'read' '(' ')'
	| 'write' '(' expr ')'; //func_handler = handle_call
func_handler: Identifiers '(' params? ')';
params:
	expr
	| expr ',' params; // expr can be function_call in params of a function_call !!!!!!!!!!!

func_def_args:
	type ('[' ']')* Identifiers
	| func_def_args ',' type ('[' ']')* Identifiers;

func_def: ('(' func_def_args ')' '=')? 'function' Identifiers '(' func_def_args? ')' block;
//func_def_args === args_var

cond_stmt:
	'if' expr (block | stmt) ('else' (block | stmt))?
	| 'switch' variable '{' switch_body '}';
switch_body: ('caseof' Int_const ':' block)+ (
		'default' ':' block
	)?;

loop_stmt:
	'for' (type? assign)? ';' expr ';' assign? block
	| 'while' expr block;

type: 'int' | 'float' | 'string' | Identifiers | 'bool';
// We can declare a new token as Known_types for ('int' , 'float' ,' bool') for presenting parse tree  

assign: ( variable | '(' variable ( ',' variable)* ')') '=' expr;

variable: ( ( 'this' | 'super') '.')? ref ( '.' ref)*;

ref: Identifiers ('[' expr ']')*;

expr:
	('!' | '~' | '-') expr
	// we've separated the '-' token from Unary_op 
	| expr Multiplicative expr
	| expr ('+' | '-') expr
	| expr Relational expr
	| expr Equality expr
	| expr Bitwise_AND expr
	| expr Bitwise_inclusive_OR expr
	| expr Logical_AND expr
	| expr Logical_OR expr
	| '(' expr ')'
	| array
	| const_val
	| 'allocate' func_handler /* FIXME: allocate not understood  */
	| func_call
	| variable
	| 'nil' /*FIXME: nill not understood */;

Multiplicative: ('*' | '/' | '%');
Unary: ( '!' | '~' | '-');
Additive: ('+' | '-');
Relational: ( '>=' | '<=' | '>' | '<');
Equality: ( '==' | '!=');
Bitwise_AND: ('&');
Bitwise_inclusive_OR: ('|');
Logical_AND: ('&&');
Logical_OR: ('||');

array: '[' ( expr | array) ( ',' ( expr | array))* ']';

Identifiers: [a-zA-Z@_][a-zA-Z0-9@_]*;


// FIXME Nested Multiline_Comment

Multi_line_Comment : '#(' .*? ')#' -> skip;

Single_Line_Comment: '#$' ~[\r\n]* -> skip;

WS: [ \t\n\r]+ -> skip;

