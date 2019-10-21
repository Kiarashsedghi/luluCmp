grammar Loop;

program : LOOP_KEY OBRACE condition  CBRACE OCBRACE CCBRACE ;

LOOP_KEY : 'while' ;

OBRACE : '(' ;
CBRACE : ')' ;
OCBRACE : '{' ;
CCBRACE : '}' ;
condition : operand OPERATOR operand | INT | ID ;
operand : INT | ID ;
INT : [1-9][0-9]* ;
ID : [a-zA-Z][a-zA-Z0-9]*;
OPERATOR : '==' | '>=' | '<=' | '!=' ;

WS : [ \t\r\n] -> skip ;

