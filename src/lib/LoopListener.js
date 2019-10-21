// Generated from src/grammars/Loop.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LoopParser.
function LoopListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LoopListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LoopListener.prototype.constructor = LoopListener;

// Enter a parse tree produced by LoopParser#program.
LoopListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by LoopParser#program.
LoopListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by LoopParser#condition.
LoopListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by LoopParser#condition.
LoopListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by LoopParser#operand.
LoopListener.prototype.enterOperand = function(ctx) {
};

// Exit a parse tree produced by LoopParser#operand.
LoopListener.prototype.exitOperand = function(ctx) {
};



exports.LoopListener = LoopListener;