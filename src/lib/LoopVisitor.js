// Generated from src/grammars/Loop.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LoopParser.

function LoopVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LoopVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LoopVisitor.prototype.constructor = LoopVisitor;

// Visit a parse tree produced by LoopParser#program.
LoopVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LoopParser#condition.
LoopVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LoopParser#operand.
LoopVisitor.prototype.visitOperand = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LoopVisitor = LoopVisitor;