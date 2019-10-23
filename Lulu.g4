grammar Lulu;

// program : LOOP_KEY OBRACE condition  CBRACE OCBRACE CCBRACE ;

// LOOP_KEY : 'while' ;

// OBRACE : '(' ; CBRACE : ')' ; OCBRACE : '{' ; CCBRACE : '}' ; condition : operand OPERATOR
// operand | INT | ID ; operand : INT | ID ; INT : [1-9][0-9]* ; ID : [a-zA-Z][a-zA-Z0-9]*; OPERATOR
// : '==' | '>=' | '<=' | '!=' ;

// WS : [ \t\r\n] -> skip ;

program: ( func_def );

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

func_call : (var '.')? func_call_args | 'read' '('')'| 'write' '('expr')'; //func_call_args = handle_call
func_call_args : Identifiers '(' params? ')';
params : expr | expr ',' params; // expr can be function_call in params of a function_call !!!!!!!!!!!



func_def_args : type ('['']')* Identifiers | func_def_args ',' type ('['']') *Identifiers;

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
	|'allocate' func_call_args /* FIXME: allocate not understood  */
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

