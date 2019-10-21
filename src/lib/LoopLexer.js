// Generated from src/grammars/Loop.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000b?\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0007\u0007&\n\u0007\f\u0007\u000e\u0007)\u000b\u0007",
    "\u0003\b\u0003\b\u0007\b-\n\b\f\b\u000e\b0\u000b\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t:\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0002\u0002\u000b\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0003\u0002\u0007",
    "\u0003\u00023;\u0003\u00022;\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002C\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0003\u0015\u0003\u0002\u0002\u0002\u0005\u001b\u0003\u0002\u0002",
    "\u0002\u0007\u001d\u0003\u0002\u0002\u0002\t\u001f\u0003\u0002\u0002",
    "\u0002\u000b!\u0003\u0002\u0002\u0002\r#\u0003\u0002\u0002\u0002\u000f",
    "*\u0003\u0002\u0002\u0002\u00119\u0003\u0002\u0002\u0002\u0013;\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007y\u0002\u0002\u0016\u0017\u0007",
    "j\u0002\u0002\u0017\u0018\u0007k\u0002\u0002\u0018\u0019\u0007n\u0002",
    "\u0002\u0019\u001a\u0007g\u0002\u0002\u001a\u0004\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0007*\u0002\u0002\u001c\u0006\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0007+\u0002\u0002\u001e\b\u0003\u0002\u0002\u0002",
    "\u001f \u0007}\u0002\u0002 \n\u0003\u0002\u0002\u0002!\"\u0007\u007f",
    "\u0002\u0002\"\f\u0003\u0002\u0002\u0002#\'\t\u0002\u0002\u0002$&\t",
    "\u0003\u0002\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002",
    "\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(\u000e\u0003",
    "\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*.\t\u0004\u0002\u0002",
    "+-\t\u0005\u0002\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u0010\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000212\u0007?\u0002\u00022:",
    "\u0007?\u0002\u000234\u0007@\u0002\u00024:\u0007?\u0002\u000256\u0007",
    ">\u0002\u00026:\u0007?\u0002\u000278\u0007#\u0002\u00028:\u0007?\u0002",
    "\u000291\u0003\u0002\u0002\u000293\u0003\u0002\u0002\u000295\u0003\u0002",
    "\u0002\u000297\u0003\u0002\u0002\u0002:\u0012\u0003\u0002\u0002\u0002",
    ";<\t\u0006\u0002\u0002<=\u0003\u0002\u0002\u0002=>\b\n\u0002\u0002>",
    "\u0014\u0003\u0002\u0002\u0002\u0006\u0002\'.9\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LoopLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LoopLexer.prototype = Object.create(antlr4.Lexer.prototype);
LoopLexer.prototype.constructor = LoopLexer;

Object.defineProperty(LoopLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

LoopLexer.EOF = antlr4.Token.EOF;
LoopLexer.LOOP_KEY = 1;
LoopLexer.OBRACE = 2;
LoopLexer.CBRACE = 3;
LoopLexer.OCBRACE = 4;
LoopLexer.CCBRACE = 5;
LoopLexer.INT = 6;
LoopLexer.ID = 7;
LoopLexer.OPERATOR = 8;
LoopLexer.WS = 9;

LoopLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LoopLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LoopLexer.prototype.literalNames = [ null, "'while'", "'('", "')'", "'{'", 
                                     "'}'" ];

LoopLexer.prototype.symbolicNames = [ null, "LOOP_KEY", "OBRACE", "CBRACE", 
                                      "OCBRACE", "CCBRACE", "INT", "ID", 
                                      "OPERATOR", "WS" ];

LoopLexer.prototype.ruleNames = [ "LOOP_KEY", "OBRACE", "CBRACE", "OCBRACE", 
                                  "CCBRACE", "INT", "ID", "OPERATOR", "WS" ];

LoopLexer.prototype.grammarFileName = "Loop.g4";



exports.LoopLexer = LoopLexer;

