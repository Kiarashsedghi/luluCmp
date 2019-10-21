// Define a grammar called Hello
grammar Hello;

/** The start rule; begin parsing here. */
//program : ( if_statement | declare_statement )+ ;
//
//
//if_statement : If_keyword Obrace ( Number | comparison | true_keyword  | 'False' )  Cbrace Ocbrace (  multiline_comment*  ('Pass' | program) multiline_comment* )  Ccbrace  ;
//declare_statement : Declare_keyword Obrace Cbrace Ocbrace (  multiline_comment*  ('Pass' | program) multiline_comment* ) Ccbrace  ;
//
//number : Number ;
//identifier : Identifier ;
//Declare_keyword : 'declare' ;
//
//true_keyword : True_keyword ;
//If_keyword: 'if'  ;
//True_keyword : 'true' ;
//
//comparison : Comparison ;
//
//Comparison : (  ('this.')?Identifier | Number ) WS* Operator WS* ( ('this.')?Identifier | Number ) ;
//
////Bug : How To Select Everything
//multiline_comment : Multiline_comment ;
//Multiline_comment : Block_comments   ( [a-zA-Z0-9(){}/*] | '\n' | ' ' | '\t' | Operator )*  Block_comments ;
//
//Block_comments : ('/*' | '*/');
//
//
//operator : Operator;
//Operator : '==' | '<=' | '>=' | '!=' | '>' | '<' ;
//
//
//
//
//
//Obrace : '(';
//Cbrace : ')' ;
//Ocbrace : '{';
//Ccbrace : '}';
//
//
//Identifier : [a-zA-Z] ( [a-zA-Z] | Number )*;
//Number : '0' | [1-9][0-9]*;

program : ft_dcl? ft_def+;
ft_dcl : declare '{'( func_dcl | type_dcl | var_def ) + '}';
func_dcl : ( '(' args ')' '=' )? id '(' ( args | args_var )? ')' ';';

args : type ( '[' ']' ) * | args ',' 'type' ( '[' ']' ) *;
//args_var> ::= <type> ( ‘[’ ‘]’ ) * id | <args_var> ‘,’ <type> ( ‘[’ ‘]’ ) * id
//<type_dcl> ::= id ‘;’
//<var_def> ::= const? <type> <var_val> ( ‘,’ <var_val> ) * ‘;’
//<var_val> ::= <ref> ( ‘=’ <expr>)?
//<ft_def> ::= ( <type_def> | <fun_def> )
//<type_def> ::= type id ( ‘:’ id )? ‘{’ <component> + ‘}’
//<component> ::= <access modifier>? ( <var_def> | <fun_def> )
//<access_modifier> ::= private | public | protected
//<fun_def> ::= ( ‘(’ <args_var> ‘)’ ‘=’ )? function id ‘(’ <args_var>? ‘)’ <block>
//<block> ::= ‘{’ ( <var_def> | <stmt> ) * ’}’
//<stmt> ::= <assign> ‘;’ | <func_call> ‘;’ | <cond_stmt> | <loop_stmt> | break ‘;’ |
//continue ‘;’ | destruct ( ‘[’ ‘]’ ) * id ‘;’
//<assign> ::= ( <var> | ‘(’ <var> ( ‘,’ <var> ) * ‘)’ ) ‘=’ <expr>
//<var> ::= ( ( this | super ) ‘.’ )? <ref> ( ‘.’ <ref> ) *
//<ref> ::= id ( ‘[‘ <expr> ‘]’ ) *
//<expr> ::= <expr> <binary_op> <expr> | ‘(’ <expr> ‘)’ | <unary_op> <expr>|
//<const_val> | allocate <handle_call> | <func_call> | <var> | <list> | nil
//<func_call> ::= ( <var> ‘.’ )? <handle_call> | read ‘(‘ ‘)’ | write ‘(’ <expr> ‘)’
//<list> ::= ‘[’ ( <expr> | <list> ) ( ‘,’ ( <expr> | <list> ) ) * ‘]’
//<handle_call> ::= id ‘(’ <params>? ‘)’
//<params> ::= <expr> | <expr> ‘,’ <params>
//<cond_stmt> ::= if <expr> ( <block> | <stmt> ) ( else ( <block> | <stmt> ) )? |
//switch <var> ‘{’ <switch_body> ’}’
//<switch_body> ::= ( caseof int_const ‘:’ <block> ) + ( default ‘:’ <block> )?
//<loop_stmt> ::= for ( <type>? <assign> )? ‘;’ <expr> ‘;’ <assign>? <block> |
//while <expr> <block>
//<type> ::= int | bool | float | string | id
//<const_val> ::= int_const | real_const | bool_const | string_const
//<unary_op> ::= ‘-’ | ‘!’ | ‘~’
//<binary_op> ::= <arithmetic> | <relational> | <bitwise> | <logical>
//<arithmetic> ::= ‘+’ | ‘-’ | ‘*’ | ‘/’ | ‘%’
//<bitwise> ::= ‘&’ | ‘|’
//<logical> ::= “||” | “&&”
//<relational> ::= “==” | “!=” | “<=” | “>=” | ‘<’ | ‘>’




WS : ( ' '  | '\t' | '\n')+ -> skip;

