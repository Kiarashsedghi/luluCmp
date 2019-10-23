grammar Lulu;
program: ( func_call );

const_val: Bool_const;
Bool_const: 'true' | 'false';
//Int_const : INTEGER_NUM | HEX_NUM ;

/*
 * TODO: Int_const & Real_const & String_const
 */

// To have nested blocks just add 'block' in below statement 



block: '{' (var_def | stmt)* '}';
stmt:
	assign ';'
	|cond_stmt 
	|loop_stmt 
	|func_call';'
	| 'break' ';'
	| 'continue' ';'
	| 'destruct' ('[' ']')* Identifiers ';';

var_def: 'const'? type var_val (',' var_val)* ';';
var_val: ref ('=' expr)?;


// fst_dcl= <ft_dcl>
fst_dcl : 'declare' '{' ( func_dcl | type_dcl | var_def )+ '}' ;

// Function dcl accepts only 1 format for parameters ( dcl_args | func_def_args )
func_dcl : ( '(' dcl_args ')' '=' )? Identifiers '(' ( dcl_args | func_def_args )? ')'';';

// dcl_args = <args>
dcl_args  :   type ('['']')*  |  dcl_args ',' type ('['']')*;

type_dcl : Identifiers ';';



func_call : (var '.')? func_handler | 'read' '('')'| 'write' '('expr')'; //func_handler = handle_call
func_handler : Identifiers '(' params? ')';
params : expr | expr ',' params; // expr can be function_call in params of a function_call !!!!!!!!!!!



func_def_args : type ('['']')* Identifiers | func_def_args ',' type ('['']')* Identifiers;

func_def : ('(' func_def_args ')' '=')? 'function' Identifiers '(' func_def_args? ')' block; //func_def_args === args_var

cond_stmt : 'if' expr (block|stmt)('else' (block|stmt)) ?; //| 'switch'var '{'switch_body'}';
// switch_body: ('caseof' Int_const ':' block)+ ('default'':'block) ?;


loop_stmt:
	'for' (type? assign)? ';' expr ';' assign? block
	| 'while' expr block;

type: 'int' | 'float' | 'string' | Identifiers | 'bool';
// We can declare a new token as Known_types for ('int' , 'float' ,' bool') for presenting parse tree  

assign: ( var | '(' var ( ',' var)* ')') '=' expr;

var: ( ( 'this' | 'super') '.')? ref ( '.' ref)*;

ref: Identifiers ('[' expr ']')*;

expr: (Unary_op | '-') (
		var
		| expr
	) // we've separated the '-' token from Unary_op 
	| expr ('*' | '/' | '%') expr
	/*
	*FIXME:
	*-adding bitwise operators with * / %
	*-fix binary operators
	 */
	| expr ('+' | '-') expr
	| '(' expr ')'
	|expr binary_op expr
	| array
	| const_val
	|'allocate' func_handler /* FIXME: allocate not understood  */
	|func_call
	| var
	|'nil' /*FIXME: nill not understood */;


array: '[' ( expr | array) ( ',' ( expr | array))* ']';

Identifiers: [a-zA-Z@_][a-zA-Z0-9@_]*;
Unary_op: '!' | '~';
binary_op:
	Comparative_op
	// | Arithmatic_op
	| Logical_op
	| Bitwise_op;

Comparative_op: '==' | '>=' | '<=' | '!=' | '>' | '<';
// Arithmatic_op: '+' | '/' | '*' | '-' | '%';
Logical_op: '||' | '&&';
Bitwise_op: '&' | '|';

WS: ['\t' | '\n' | '\r']+ -> skip;

