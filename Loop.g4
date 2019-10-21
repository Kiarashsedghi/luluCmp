grammar Loop;

// program : LOOP_KEY OBRACE condition  CBRACE OCBRACE CCBRACE ;

// LOOP_KEY : 'while' ;

// OBRACE : '(' ; CBRACE : ')' ; OCBRACE : '{' ; CCBRACE : '}' ; condition : operand OPERATOR
// operand | INT | ID ; operand : INT | ID ; INT : [1-9][0-9]* ; ID : [a-zA-Z][a-zA-Z0-9]*; OPERATOR
// : '==' | '>=' | '<=' | '!=' ;

// WS : [ \t\r\n] -> skip ;

program: Identifiers | const_val;




const_val :  Bool_const;
Bool_const : 'true' | 'false' ;
// Int_const : ('0x'|'0X')[a-fA-F0-9]+;
/*
*TODO:
Int_const & Real_const & String_const
 */







Identifiers: [a-zA-Z@_][a-zA-Z0-9@_]*;

