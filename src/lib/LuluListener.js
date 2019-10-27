// Generated from src/grammars/Lulu.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LuluParser.
function LuluListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LuluListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LuluListener.prototype.constructor = LuluListener;

// Enter a parse tree produced by LuluParser#program.
LuluListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by LuluParser#program.
LuluListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by LuluParser#const_val.
LuluListener.prototype.enterConst_val = function(ctx) {
};

// Exit a parse tree produced by LuluParser#const_val.
LuluListener.prototype.exitConst_val = function(ctx) {
};


// Enter a parse tree produced by LuluParser#block.
LuluListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by LuluParser#block.
LuluListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by LuluParser#stmt.
LuluListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by LuluParser#stmt.
LuluListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by LuluParser#var_def.
LuluListener.prototype.enterVar_def = function(ctx) {
};

// Exit a parse tree produced by LuluParser#var_def.
LuluListener.prototype.exitVar_def = function(ctx) {
};


// Enter a parse tree produced by LuluParser#var_val.
LuluListener.prototype.enterVar_val = function(ctx) {
};

// Exit a parse tree produced by LuluParser#var_val.
LuluListener.prototype.exitVar_val = function(ctx) {
};


// Enter a parse tree produced by LuluParser#fst_dcl.
LuluListener.prototype.enterFst_dcl = function(ctx) {
};

// Exit a parse tree produced by LuluParser#fst_dcl.
LuluListener.prototype.exitFst_dcl = function(ctx) {
};


// Enter a parse tree produced by LuluParser#func_dcl.
LuluListener.prototype.enterFunc_dcl = function(ctx) {
};

// Exit a parse tree produced by LuluParser#func_dcl.
LuluListener.prototype.exitFunc_dcl = function(ctx) {
};


// Enter a parse tree produced by LuluParser#dcl_args.
LuluListener.prototype.enterDcl_args = function(ctx) {
};

// Exit a parse tree produced by LuluParser#dcl_args.
LuluListener.prototype.exitDcl_args = function(ctx) {
};


// Enter a parse tree produced by LuluParser#type_dcl.
LuluListener.prototype.enterType_dcl = function(ctx) {
};

// Exit a parse tree produced by LuluParser#type_dcl.
LuluListener.prototype.exitType_dcl = function(ctx) {
};


// Enter a parse tree produced by LuluParser#fst_def.
LuluListener.prototype.enterFst_def = function(ctx) {
};

// Exit a parse tree produced by LuluParser#fst_def.
LuluListener.prototype.exitFst_def = function(ctx) {
};


// Enter a parse tree produced by LuluParser#type_def.
LuluListener.prototype.enterType_def = function(ctx) {
};

// Exit a parse tree produced by LuluParser#type_def.
LuluListener.prototype.exitType_def = function(ctx) {
};


// Enter a parse tree produced by LuluParser#component.
LuluListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by LuluParser#component.
LuluListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by LuluParser#access_modifier.
LuluListener.prototype.enterAccess_modifier = function(ctx) {
};

// Exit a parse tree produced by LuluParser#access_modifier.
LuluListener.prototype.exitAccess_modifier = function(ctx) {
};


// Enter a parse tree produced by LuluParser#func_call.
LuluListener.prototype.enterFunc_call = function(ctx) {
};

// Exit a parse tree produced by LuluParser#func_call.
LuluListener.prototype.exitFunc_call = function(ctx) {
};


// Enter a parse tree produced by LuluParser#func_handler.
LuluListener.prototype.enterFunc_handler = function(ctx) {
};

// Exit a parse tree produced by LuluParser#func_handler.
LuluListener.prototype.exitFunc_handler = function(ctx) {
};


// Enter a parse tree produced by LuluParser#params.
LuluListener.prototype.enterParams = function(ctx) {
};

// Exit a parse tree produced by LuluParser#params.
LuluListener.prototype.exitParams = function(ctx) {
};


// Enter a parse tree produced by LuluParser#func_def_args.
LuluListener.prototype.enterFunc_def_args = function(ctx) {
};

// Exit a parse tree produced by LuluParser#func_def_args.
LuluListener.prototype.exitFunc_def_args = function(ctx) {
};


// Enter a parse tree produced by LuluParser#func_def.
LuluListener.prototype.enterFunc_def = function(ctx) {
};

// Exit a parse tree produced by LuluParser#func_def.
LuluListener.prototype.exitFunc_def = function(ctx) {
};


// Enter a parse tree produced by LuluParser#cond_stmt.
LuluListener.prototype.enterCond_stmt = function(ctx) {
};

// Exit a parse tree produced by LuluParser#cond_stmt.
LuluListener.prototype.exitCond_stmt = function(ctx) {
};


// Enter a parse tree produced by LuluParser#switch_body.
LuluListener.prototype.enterSwitch_body = function(ctx) {
};

// Exit a parse tree produced by LuluParser#switch_body.
LuluListener.prototype.exitSwitch_body = function(ctx) {
};


// Enter a parse tree produced by LuluParser#loop_stmt.
LuluListener.prototype.enterLoop_stmt = function(ctx) {
};

// Exit a parse tree produced by LuluParser#loop_stmt.
LuluListener.prototype.exitLoop_stmt = function(ctx) {
};


// Enter a parse tree produced by LuluParser#type.
LuluListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by LuluParser#type.
LuluListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by LuluParser#assign.
LuluListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by LuluParser#assign.
LuluListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by LuluParser#variable.
LuluListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by LuluParser#variable.
LuluListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by LuluParser#ref.
LuluListener.prototype.enterRef = function(ctx) {
};

// Exit a parse tree produced by LuluParser#ref.
LuluListener.prototype.exitRef = function(ctx) {
};


// Enter a parse tree produced by LuluParser#expr.
LuluListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by LuluParser#expr.
LuluListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by LuluParser#array.
LuluListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by LuluParser#array.
LuluListener.prototype.exitArray = function(ctx) {
};



exports.LuluListener = LuluListener;