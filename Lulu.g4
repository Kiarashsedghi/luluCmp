grammar Lulu;

program: fst_dcl? fst_def+;

const_val: Int_const | Real_const | Bool_const | String_const;
block: '{' (var_def | stmt)* '}';
stmt:
	assign ';'
	| cond_stmt
	| loop_stmt
	| func_call ';'
	| Break ';'
	| Continue ';'
	| Destruct ('[' ']')* Identifiers ';';

var_def: Const? data_type var_val (',' var_val)* ';';
var_val: ref ('=' expr)?;

// fst_dcl= <ft_dcl>
fst_dcl: Declare '{' ( func_dcl | type_dcl | var_def)+ '}';

// Function dcl accepts only 1 format for parameters ( dcl_args | func_def_args )
func_dcl: ('(' dcl_args ')' '=')? Identifiers '(' (
		dcl_args
		| func_def_args
	)? ')' ';';

// dcl_args = <args>
dcl_args: data_type ('[' ']')* | dcl_args ',' data_type ('[' ']')*;

type_dcl: Identifiers ';';

//fst_def = <ft_def>
fst_def: type_def | func_def;
type_def:
	Type Identifiers (':' Identifiers)? '{' component+ '}';
component: access_modifier? (var_def | func_def);
access_modifier: Private | Public | Protected;

func_call: (variable '.')? func_handler
	| Read '(' ')'
	| Write '(' expr ')';
//func_handler = handle_call
func_handler: Identifiers '(' params? ')';
params:
	expr
	| expr ',' params; // expr can be function_call in params of a function_call !!!!!!!!!!!

//func_def_args === args_var
func_def_args:
	data_type ('[' ']')* Identifiers
	| func_def_args ',' data_type ('[' ']')* Identifiers;

func_def: ('(' func_def_args ')' '=')? Function Identifiers '(' func_def_args? ')' block;

cond_stmt:
	If expr (block | stmt) (Else (block | stmt))?
	| Switch variable '{' switch_body '}';
switch_body: (Caseof Int_const ':' block)+ (
	Default ':' block
	)?;

loop_stmt:
	For (data_type? assign)? ';' expr ';' assign? block
	| While expr block;

data_type: Int | Float | String | Identifiers | Bool;
// We can declare a new token as Known_types for ('int' , 'float' ,' bool') for presenting parse tree

assign: ( variable | '(' variable ( ',' variable)* ')') '=' expr;

variable: ( ( This | Super) '.')? ref ( '.' ref)*;

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
	| Allocate func_handler
	| func_call
	| variable
	| Nil
	;

array: '[' ( expr | array) ( ',' ( expr | array))* ']';

Int: 'int';
Float: 'float';
Bool: 'bool';
String: 'string';
Function: 'function';
If : 'if';
Else: 'else';
Switch : 'switch';
Default: 'default';
Break: 'break';
For: 'for';
While: 'while';
Continue: 'continue';
Const: 'const';
Caseof: 'caseof';
This : 'this';
Super: 'super';
Type: 'type';
Declare: 'declare';
Read: 'read';
Write: 'write';
Nil : 'nil';
Destruct: 'destruct';
Allocate: 'allocate';
Public: 'public';
Private: 'private';
Protected: 'protected';


Multiplicative: ('*' | '/' | '%');
Unary: ( '!' | '~' | '-');
Additive: ('+' | '-');
Relational: ( '>=' | '<=' | '>' | '<');
Equality: ( '==' | '!=');
Bitwise_AND: ('&');
Bitwise_inclusive_OR: ('|');
Logical_AND: ('&&');
Logical_OR: ('||');
Bool_const: 'true' | 'false';
Int_const: [0-9]+ | ('0x' | '0X') [a-fA-F0-9]+;


Real_const:
//	[0-9]+ '.' [0-9]* Exponent?
//	| [0-9]* '.' [0-9]+ Exponent?
//	| [0-9]+ Exponent;
Int_const '.' Int_const? Exponent ?
|
Int_const? '.' Int_const Exponent?
|Int_const Exponent
;

Exponent: ('^') ('+' | '-')? Int_const;



String_const:
	'\'' (
		'\\n'
		| '\\t'
		| '\\r'
		| '\\\\'
		| '\\0'
		| '\\\''
		| '\\' ('x' | 'X') [0-9a-fA-F][a-f0-9A-F]
		| ~('\\')
	)* '\'';

Identifiers: [a-zA-Z@_][a-zA-Z0-9@_]*;

Multi_line_Comment: '#(' .*? ')#' -> skip;

Single_Line_Comment: '#$' ~[\r\n]* -> skip;

WS: [ \t\n\r]+ -> skip;