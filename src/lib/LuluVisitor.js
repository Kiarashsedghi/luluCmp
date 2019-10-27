// Generated from src/grammars/Lulu.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LuluParser.

function LuluVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LuluVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LuluVisitor.prototype.constructor = LuluVisitor;

// Visit a parse tree produced by LuluParser#program.
LuluVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#const_val.
LuluVisitor.prototype.visitConst_val = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#block.
LuluVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#stmt.
LuluVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#var_def.
LuluVisitor.prototype.visitVar_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#var_val.
LuluVisitor.prototype.visitVar_val = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#fst_dcl.
LuluVisitor.prototype.visitFst_dcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#func_dcl.
LuluVisitor.prototype.visitFunc_dcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#dcl_args.
LuluVisitor.prototype.visitDcl_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#type_dcl.
LuluVisitor.prototype.visitType_dcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#fst_def.
LuluVisitor.prototype.visitFst_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#type_def.
LuluVisitor.prototype.visitType_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#component.
LuluVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#access_modifier.
LuluVisitor.prototype.visitAccess_modifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#func_call.
LuluVisitor.prototype.visitFunc_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#func_handler.
LuluVisitor.prototype.visitFunc_handler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#params.
LuluVisitor.prototype.visitParams = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#func_def_args.
LuluVisitor.prototype.visitFunc_def_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#func_def.
LuluVisitor.prototype.visitFunc_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#cond_stmt.
LuluVisitor.prototype.visitCond_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#switch_body.
LuluVisitor.prototype.visitSwitch_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#loop_stmt.
LuluVisitor.prototype.visitLoop_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#type.
LuluVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#assign.
LuluVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#variable.
LuluVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#ref.
LuluVisitor.prototype.visitRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#expr.
LuluVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuluParser#array.
LuluVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LuluVisitor = LuluVisitor;