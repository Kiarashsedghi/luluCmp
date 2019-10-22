grammar Loop;

// program : LOOP_KEY OBRACE condition  CBRACE OCBRACE CCBRACE ;

// LOOP_KEY : 'while' ;

// OBRACE : '(' ; CBRACE : ')' ; OCBRACE : '{' ; CCBRACE : '}' ; condition : operand OPERATOR
// operand | INT | ID ; operand : INT | ID ; INT : [1-9][0-9]* ; ID : [a-zA-Z][a-zA-Z0-9]*; OPERATOR
// : '==' | '>=' | '<=' | '!=' ;

// WS : [ \t\r\n] -> skip ;

program: (
		assign
	);

const_val: Bool_const;
Bool_const: 'true' | 'false';
//Int_const : INTEGER_NUM | HEX_NUM ;

/*
 * TODO: Int_const & Real_const & String_const
 */

type:
	'int'
	| 'float'
	| 'string'
	| Identifiers
	| 'bool';
	// We can declare a new token as Known_types for ('int' , 'float' ,' bool') for presenting parse tree  

assign : ( var | '(' var  ( ',' var)* ')' ) '=' expr ;

var : ( ( 'this' | 'super' ) '.' )?  ref ( '.' ref )* ;

ref : Identifiers ('[' expr  ']')*;




expr : expr binary_op expr | '(' expr ')' | Unary_op  expr |  array  | const_val  | var;

array  : '[' ( expr | array ) ( ',' ( expr | array ) )*']';



Identifiers: [a-zA-Z@_][a-zA-Z0-9@_]*;
Unary_op: '!' | '-' | '~';
binary_op:
	Comparative_op
	| Arithmatic_op
	| Logical_op
	| Bitwise_op;

Comparative_op: '==' | '>=' | '<=' | '!=' | '>' | '<';
Logical_op: '||' | '&&';
Bitwise_op: '&' | '|';
Arithmatic_op: '+' | '*' | '/' | '%';

//WS: ['\t' | '\n' | '\r']+ -> skip;

