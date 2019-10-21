// Generated from src/grammars/Loop.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LoopListener = require('./LoopListener').LoopListener;
var LoopVisitor = require('./LoopVisitor').LoopVisitor;

var grammarFileName = "Loop.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000b\u001a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002\u0003\u0003",
    "\u0002\b\t\u0002\u0018\u0002\b\u0003\u0002\u0002\u0002\u0004\u0015\u0003",
    "\u0002\u0002\u0002\u0006\u0017\u0003\u0002\u0002\u0002\b\t\u0007\u0003",
    "\u0002\u0002\t\n\u0007\u0004\u0002\u0002\n\u000b\u0005\u0004\u0003\u0002",
    "\u000b\f\u0007\u0005\u0002\u0002\f\r\u0007\u0006\u0002\u0002\r\u000e",
    "\u0007\u0007\u0002\u0002\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0005\u0006\u0004\u0002\u0010\u0011\u0007\n\u0002\u0002\u0011\u0012",
    "\u0005\u0006\u0004\u0002\u0012\u0016\u0003\u0002\u0002\u0002\u0013\u0016",
    "\u0007\b\u0002\u0002\u0014\u0016\u0007\t\u0002\u0002\u0015\u000f\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0014\u0003",
    "\u0002\u0002\u0002\u0016\u0005\u0003\u0002\u0002\u0002\u0017\u0018\t",
    "\u0002\u0002\u0002\u0018\u0007\u0003\u0002\u0002\u0002\u0003\u0015"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'while'", "'('", "')'", "'{'", "'}'" ];

var symbolicNames = [ null, "LOOP_KEY", "OBRACE", "CBRACE", "OCBRACE", "CCBRACE", 
                      "INT", "ID", "OPERATOR", "WS" ];

var ruleNames =  [ "program", "condition", "operand" ];

function LoopParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LoopParser.prototype = Object.create(antlr4.Parser.prototype);
LoopParser.prototype.constructor = LoopParser;

Object.defineProperty(LoopParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LoopParser.EOF = antlr4.Token.EOF;
LoopParser.LOOP_KEY = 1;
LoopParser.OBRACE = 2;
LoopParser.CBRACE = 3;
LoopParser.OCBRACE = 4;
LoopParser.CCBRACE = 5;
LoopParser.INT = 6;
LoopParser.ID = 7;
LoopParser.OPERATOR = 8;
LoopParser.WS = 9;

LoopParser.RULE_program = 0;
LoopParser.RULE_condition = 1;
LoopParser.RULE_operand = 2;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LoopParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.LOOP_KEY = function() {
    return this.getToken(LoopParser.LOOP_KEY, 0);
};

ProgramContext.prototype.OBRACE = function() {
    return this.getToken(LoopParser.OBRACE, 0);
};

ProgramContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ProgramContext.prototype.CBRACE = function() {
    return this.getToken(LoopParser.CBRACE, 0);
};

ProgramContext.prototype.OCBRACE = function() {
    return this.getToken(LoopParser.OCBRACE, 0);
};

ProgramContext.prototype.CCBRACE = function() {
    return this.getToken(LoopParser.CCBRACE, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof LoopListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof LoopListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LoopVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LoopParser.ProgramContext = ProgramContext;

LoopParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LoopParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.match(LoopParser.LOOP_KEY);
        this.state = 7;
        this.match(LoopParser.OBRACE);
        this.state = 8;
        this.condition();
        this.state = 9;
        this.match(LoopParser.CBRACE);
        this.state = 10;
        this.match(LoopParser.OCBRACE);
        this.state = 11;
        this.match(LoopParser.CCBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LoopParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.operand = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandContext);
    } else {
        return this.getTypedRuleContext(OperandContext,i);
    }
};

ConditionContext.prototype.OPERATOR = function() {
    return this.getToken(LoopParser.OPERATOR, 0);
};

ConditionContext.prototype.INT = function() {
    return this.getToken(LoopParser.INT, 0);
};

ConditionContext.prototype.ID = function() {
    return this.getToken(LoopParser.ID, 0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LoopListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LoopListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LoopVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LoopParser.ConditionContext = ConditionContext;

LoopParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LoopParser.RULE_condition);
    try {
        this.state = 19;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 13;
            this.operand();
            this.state = 14;
            this.match(LoopParser.OPERATOR);
            this.state = 15;
            this.operand();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
            this.match(LoopParser.INT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 18;
            this.match(LoopParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LoopParser.RULE_operand;
    return this;
}

OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandContext.prototype.constructor = OperandContext;

OperandContext.prototype.INT = function() {
    return this.getToken(LoopParser.INT, 0);
};

OperandContext.prototype.ID = function() {
    return this.getToken(LoopParser.ID, 0);
};

OperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof LoopListener ) {
        listener.enterOperand(this);
	}
};

OperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof LoopListener ) {
        listener.exitOperand(this);
	}
};

OperandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LoopVisitor ) {
        return visitor.visitOperand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LoopParser.OperandContext = OperandContext;

LoopParser.prototype.operand = function() {

    var localctx = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LoopParser.RULE_operand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        _la = this._input.LA(1);
        if(!(_la===LoopParser.INT || _la===LoopParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.LoopParser = LoopParser;
