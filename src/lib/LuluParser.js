// Generated from src/grammars/Lulu.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LuluListener = require('./LuluListener').LuluListener;
var LuluVisitor = require('./LuluVisitor').LuluVisitor;

var grammarFileName = "Lulu.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003>\u01b3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0005\u0002",
    "<\n\u0002\u0003\u0002\u0006\u0002?\n\u0002\r\u0002\u000e\u0002@\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004H",
    "\n\u0004\f\u0004\u000e\u0004K\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005^\n\u0005\f\u0005\u000e\u0005",
    "a\u000b\u0005\u0003\u0005\u0003\u0005\u0005\u0005e\n\u0005\u0003\u0006",
    "\u0005\u0006h\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006n\n\u0006\f\u0006\u000e\u0006q\u000b\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007x\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0006\b\u007f\n\b\r\b\u000e\b\u0080",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u008a",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0090\n\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u0099\n\n\f\n\u000e",
    "\n\u009c\u000b\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00a3",
    "\n\n\f\n\u000e\n\u00a6\u000b\n\u0007\n\u00a8\n\n\f\n\u000e\n\u00ab\u000b",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\f\u00b2",
    "\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b8\n\r\u0003\r\u0003",
    "\r\u0006\r\u00bc\n\r\r\r\u000e\r\u00bd\u0003\r\u0003\r\u0003\u000e\u0005",
    "\u000e\u00c3\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c7\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00ce\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d9",
    "\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00de\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00e7\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u00ed\n\u0013\f\u0013\u000e\u0013\u00f0",
    "\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00f9\n\u0013\f\u0013\u000e\u0013",
    "\u00fc\u000b\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u0100\n\u0013",
    "\f\u0013\u000e\u0013\u0103\u000b\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u010a\n\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0110\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u0119\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u011e\n\u0015\u0005\u0015\u0120\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0128",
    "\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0006\u0016",
    "\u012e\n\u0016\r\u0016\u000e\u0016\u012f\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u0135\n\u0016\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u0139\n\u0017\u0003\u0017\u0005\u0017\u013c\n\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0142\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u014a\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0153\n\u0019\f\u0019\u000e",
    "\u0019\u0156\u000b\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u015a\n",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u0161\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a",
    "\u0166\n\u001a\f\u001a\u000e\u001a\u0169\u000b\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0170\n\u001b",
    "\f\u001b\u000e\u001b\u0173\u000b\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u0183\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0007\u001c\u019d\n\u001c\f\u001c\u000e\u001c",
    "\u01a0\u000b\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u01a5",
    "\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u01aa\n\u001d",
    "\u0007\u001d\u01ac\n\u001d\f\u001d\u000e\u001d\u01af\u000b\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0002\u0005\u0012$6\u001e\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468\u0002\b\u0004\u000268::\u0003\u0002\u0013\u0015\u0004",
    "\u0002!$;;\u0003\u0002%&\u0003\u0002\')\u0003\u0002)*\u0002\u01dd\u0002",
    ";\u0003\u0002\u0002\u0002\u0004B\u0003\u0002\u0002\u0002\u0006D\u0003",
    "\u0002\u0002\u0002\bd\u0003\u0002\u0002\u0002\ng\u0003\u0002\u0002\u0002",
    "\ft\u0003\u0002\u0002\u0002\u000ey\u0003\u0002\u0002\u0002\u0010\u0089",
    "\u0003\u0002\u0002\u0002\u0012\u0094\u0003\u0002\u0002\u0002\u0014\u00ac",
    "\u0003\u0002\u0002\u0002\u0016\u00b1\u0003\u0002\u0002\u0002\u0018\u00b3",
    "\u0003\u0002\u0002\u0002\u001a\u00c2\u0003\u0002\u0002\u0002\u001c\u00c8",
    "\u0003\u0002\u0002\u0002\u001e\u00d8\u0003\u0002\u0002\u0002 \u00da",
    "\u0003\u0002\u0002\u0002\"\u00e6\u0003\u0002\u0002\u0002$\u00e8\u0003",
    "\u0002\u0002\u0002&\u0109\u0003\u0002\u0002\u0002(\u0127\u0003\u0002",
    "\u0002\u0002*\u012d\u0003\u0002\u0002\u0002,\u0149\u0003\u0002\u0002",
    "\u0002.\u014b\u0003\u0002\u0002\u00020\u0159\u0003\u0002\u0002\u0002",
    "2\u0160\u0003\u0002\u0002\u00024\u016a\u0003\u0002\u0002\u00026\u0182",
    "\u0003\u0002\u0002\u00028\u01a1\u0003\u0002\u0002\u0002:<\u0005\u000e",
    "\b\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<>\u0003",
    "\u0002\u0002\u0002=?\u0005\u0016\f\u0002>=\u0003\u0002\u0002\u0002?",
    "@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002A\u0003\u0003\u0002\u0002\u0002BC\t\u0002\u0002\u0002C\u0005\u0003",
    "\u0002\u0002\u0002DI\u0007\u0003\u0002\u0002EH\u0005\n\u0006\u0002F",
    "H\u0005\b\u0005\u0002GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002",
    "\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JL\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LM\u0007",
    "\u0004\u0002\u0002M\u0007\u0003\u0002\u0002\u0002NO\u00050\u0019\u0002",
    "OP\u0007\u0005\u0002\u0002Pe\u0003\u0002\u0002\u0002Qe\u0005(\u0015",
    "\u0002Re\u0005,\u0017\u0002ST\u0005\u001e\u0010\u0002TU\u0007\u0005",
    "\u0002\u0002Ue\u0003\u0002\u0002\u0002VW\u0007\u0006\u0002\u0002We\u0007",
    "\u0005\u0002\u0002XY\u0007\u0007\u0002\u0002Ye\u0007\u0005\u0002\u0002",
    "Z_\u0007\b\u0002\u0002[\\\u0007\t\u0002\u0002\\^\u0007\n\u0002\u0002",
    "][\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002a_\u0003\u0002",
    "\u0002\u0002bc\u0007;\u0002\u0002ce\u0007\u0005\u0002\u0002dN\u0003",
    "\u0002\u0002\u0002dQ\u0003\u0002\u0002\u0002dR\u0003\u0002\u0002\u0002",
    "dS\u0003\u0002\u0002\u0002dV\u0003\u0002\u0002\u0002dX\u0003\u0002\u0002",
    "\u0002dZ\u0003\u0002\u0002\u0002e\t\u0003\u0002\u0002\u0002fh\u0007",
    "\u000b\u0002\u0002gf\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002ij\u0005.\u0018\u0002jo\u0005\f\u0007\u0002",
    "kl\u0007\f\u0002\u0002ln\u0005\f\u0007\u0002mk\u0003\u0002\u0002\u0002",
    "nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
    "\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u0005",
    "\u0002\u0002s\u000b\u0003\u0002\u0002\u0002tw\u00054\u001b\u0002uv\u0007",
    "\r\u0002\u0002vx\u00056\u001c\u0002wu\u0003\u0002\u0002\u0002wx\u0003",
    "\u0002\u0002\u0002x\r\u0003\u0002\u0002\u0002yz\u0007\u000e\u0002\u0002",
    "z~\u0007\u0003\u0002\u0002{\u007f\u0005\u0010\t\u0002|\u007f\u0005\u0014",
    "\u000b\u0002}\u007f\u0005\n\u0006\u0002~{\u0003\u0002\u0002\u0002~|",
    "\u0003\u0002\u0002\u0002~}\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0007",
    "\u0004\u0002\u0002\u0083\u000f\u0003\u0002\u0002\u0002\u0084\u0085\u0007",
    "\u000f\u0002\u0002\u0085\u0086\u0005\u0012\n\u0002\u0086\u0087\u0007",
    "\u0010\u0002\u0002\u0087\u0088\u0007\r\u0002\u0002\u0088\u008a\u0003",
    "\u0002\u0002\u0002\u0089\u0084\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    ";\u0002\u0002\u008c\u008f\u0007\u000f\u0002\u0002\u008d\u0090\u0005",
    "\u0012\n\u0002\u008e\u0090\u0005$\u0013\u0002\u008f\u008d\u0003\u0002",
    "\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0010",
    "\u0002\u0002\u0092\u0093\u0007\u0005\u0002\u0002\u0093\u0011\u0003\u0002",
    "\u0002\u0002\u0094\u0095\b\n\u0001\u0002\u0095\u009a\u0005.\u0018\u0002",
    "\u0096\u0097\u0007\t\u0002\u0002\u0097\u0099\u0007\n\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a",
    "\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b",
    "\u00a9\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d",
    "\u009e\f\u0003\u0002\u0002\u009e\u009f\u0007\f\u0002\u0002\u009f\u00a4",
    "\u0005.\u0018\u0002\u00a0\u00a1\u0007\t\u0002\u0002\u00a1\u00a3\u0007",
    "\n\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003",
    "\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003",
    "\u0002\u0002\u0002\u00a7\u009d\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003",
    "\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003",
    "\u0002\u0002\u0002\u00aa\u0013\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0007;\u0002\u0002\u00ad\u00ae\u0007",
    "\u0005\u0002\u0002\u00ae\u0015\u0003\u0002\u0002\u0002\u00af\u00b2\u0005",
    "\u0018\r\u0002\u00b0\u00b2\u0005&\u0014\u0002\u00b1\u00af\u0003\u0002",
    "\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u0017\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0007\u0011\u0002\u0002\u00b4\u00b7\u0007;",
    "\u0002\u0002\u00b5\u00b6\u0007\u0012\u0002\u0002\u00b6\u00b8\u0007;",
    "\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bb\u0007\u0003",
    "\u0002\u0002\u00ba\u00bc\u0005\u001a\u000e\u0002\u00bb\u00ba\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002",
    "\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002",
    "\u0002\u0002\u00bf\u00c0\u0007\u0004\u0002\u0002\u00c0\u0019\u0003\u0002",
    "\u0002\u0002\u00c1\u00c3\u0005\u001c\u000f\u0002\u00c2\u00c1\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c6\u0003\u0002",
    "\u0002\u0002\u00c4\u00c7\u0005\n\u0006\u0002\u00c5\u00c7\u0005&\u0014",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c5\u0003\u0002\u0002",
    "\u0002\u00c7\u001b\u0003\u0002\u0002\u0002\u00c8\u00c9\t\u0003\u0002",
    "\u0002\u00c9\u001d\u0003\u0002\u0002\u0002\u00ca\u00cb\u00052\u001a",
    "\u0002\u00cb\u00cc\u0007\u0016\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002",
    "\u0002\u00cd\u00ca\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d9\u0005 \u0011",
    "\u0002\u00d0\u00d1\u0007\u0017\u0002\u0002\u00d1\u00d2\u0007\u000f\u0002",
    "\u0002\u00d2\u00d9\u0007\u0010\u0002\u0002\u00d3\u00d4\u0007\u0018\u0002",
    "\u0002\u00d4\u00d5\u0007\u000f\u0002\u0002\u00d5\u00d6\u00056\u001c",
    "\u0002\u00d6\u00d7\u0007\u0010\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002",
    "\u0002\u00d8\u00cd\u0003\u0002\u0002\u0002\u00d8\u00d0\u0003\u0002\u0002",
    "\u0002\u00d8\u00d3\u0003\u0002\u0002\u0002\u00d9\u001f\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0007;\u0002\u0002\u00db\u00dd\u0007\u000f\u0002",
    "\u0002\u00dc\u00de\u0005\"\u0012\u0002\u00dd\u00dc\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0007\u0010\u0002\u0002\u00e0!\u0003\u0002\u0002",
    "\u0002\u00e1\u00e7\u00056\u001c\u0002\u00e2\u00e3\u00056\u001c\u0002",
    "\u00e3\u00e4\u0007\f\u0002\u0002\u00e4\u00e5\u0005\"\u0012\u0002\u00e5",
    "\u00e7\u0003\u0002\u0002\u0002\u00e6\u00e1\u0003\u0002\u0002\u0002\u00e6",
    "\u00e2\u0003\u0002\u0002\u0002\u00e7#\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\b\u0013\u0001\u0002\u00e9\u00ee\u0005.\u0018\u0002\u00ea\u00eb",
    "\u0007\t\u0002\u0002\u00eb\u00ed\u0007\n\u0002\u0002\u00ec\u00ea\u0003",
    "\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f1\u0003",
    "\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007",
    ";\u0002\u0002\u00f2\u0101\u0003\u0002\u0002\u0002\u00f3\u00f4\f\u0003",
    "\u0002\u0002\u00f4\u00f5\u0007\f\u0002\u0002\u00f5\u00fa\u0005.\u0018",
    "\u0002\u00f6\u00f7\u0007\t\u0002\u0002\u00f7\u00f9\u0007\n\u0002\u0002",
    "\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003\u0002\u0002\u0002",
    "\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002",
    "\u00fb\u00fd\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002",
    "\u00fd\u00fe\u0007;\u0002\u0002\u00fe\u0100\u0003\u0002\u0002\u0002",
    "\u00ff\u00f3\u0003\u0002\u0002\u0002\u0100\u0103\u0003\u0002\u0002\u0002",
    "\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002",
    "\u0102%\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002",
    "\u0104\u0105\u0007\u000f\u0002\u0002\u0105\u0106\u0005$\u0013\u0002",
    "\u0106\u0107\u0007\u0010\u0002\u0002\u0107\u0108\u0007\r\u0002\u0002",
    "\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u0104\u0003\u0002\u0002\u0002",
    "\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0007\u0019\u0002\u0002\u010c\u010d\u0007;\u0002\u0002",
    "\u010d\u010f\u0007\u000f\u0002\u0002\u010e\u0110\u0005$\u0013\u0002",
    "\u010f\u010e\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0112\u0007\u0010\u0002\u0002",
    "\u0112\u0113\u0005\u0006\u0004\u0002\u0113\'\u0003\u0002\u0002\u0002",
    "\u0114\u0115\u0007\u001a\u0002\u0002\u0115\u0118\u00056\u001c\u0002",
    "\u0116\u0119\u0005\u0006\u0004\u0002\u0117\u0119\u0005\b\u0005\u0002",
    "\u0118\u0116\u0003\u0002\u0002\u0002\u0118\u0117\u0003\u0002\u0002\u0002",
    "\u0119\u011f\u0003\u0002\u0002\u0002\u011a\u011d\u0007\u001b\u0002\u0002",
    "\u011b\u011e\u0005\u0006\u0004\u0002\u011c\u011e\u0005\b\u0005\u0002",
    "\u011d\u011b\u0003\u0002\u0002\u0002\u011d\u011c\u0003\u0002\u0002\u0002",
    "\u011e\u0120\u0003\u0002\u0002\u0002\u011f\u011a\u0003\u0002\u0002\u0002",
    "\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0128\u0003\u0002\u0002\u0002",
    "\u0121\u0122\u0007\u001c\u0002\u0002\u0122\u0123\u00052\u001a\u0002",
    "\u0123\u0124\u0007\u0003\u0002\u0002\u0124\u0125\u0005*\u0016\u0002",
    "\u0125\u0126\u0007\u0004\u0002\u0002\u0126\u0128\u0003\u0002\u0002\u0002",
    "\u0127\u0114\u0003\u0002\u0002\u0002\u0127\u0121\u0003\u0002\u0002\u0002",
    "\u0128)\u0003\u0002\u0002\u0002\u0129\u012a\u0007\u001d\u0002\u0002",
    "\u012a\u012b\u00077\u0002\u0002\u012b\u012c\u0007\u0012\u0002\u0002",
    "\u012c\u012e\u0005\u0006\u0004\u0002\u012d\u0129\u0003\u0002\u0002\u0002",
    "\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u012d\u0003\u0002\u0002\u0002",
    "\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0134\u0003\u0002\u0002\u0002",
    "\u0131\u0132\u0007\u001e\u0002\u0002\u0132\u0133\u0007\u0012\u0002\u0002",
    "\u0133\u0135\u0005\u0006\u0004\u0002\u0134\u0131\u0003\u0002\u0002\u0002",
    "\u0134\u0135\u0003\u0002\u0002\u0002\u0135+\u0003\u0002\u0002\u0002",
    "\u0136\u013b\u0007\u001f\u0002\u0002\u0137\u0139\u0005.\u0018\u0002",
    "\u0138\u0137\u0003\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002",
    "\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013c\u00050\u0019\u0002",
    "\u013b\u0138\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002",
    "\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u0007\u0005\u0002\u0002",
    "\u013e\u013f\u00056\u001c\u0002\u013f\u0141\u0007\u0005\u0002\u0002",
    "\u0140\u0142\u00050\u0019\u0002\u0141\u0140\u0003\u0002\u0002\u0002",
    "\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002",
    "\u0143\u0144\u0005\u0006\u0004\u0002\u0144\u014a\u0003\u0002\u0002\u0002",
    "\u0145\u0146\u0007 \u0002\u0002\u0146\u0147\u00056\u001c\u0002\u0147",
    "\u0148\u0005\u0006\u0004\u0002\u0148\u014a\u0003\u0002\u0002\u0002\u0149",
    "\u0136\u0003\u0002\u0002\u0002\u0149\u0145\u0003\u0002\u0002\u0002\u014a",
    "-\u0003\u0002\u0002\u0002\u014b\u014c\t\u0004\u0002\u0002\u014c/\u0003",
    "\u0002\u0002\u0002\u014d\u015a\u00052\u001a\u0002\u014e\u014f\u0007",
    "\u000f\u0002\u0002\u014f\u0154\u00052\u001a\u0002\u0150\u0151\u0007",
    "\f\u0002\u0002\u0151\u0153\u00052\u001a\u0002\u0152\u0150\u0003\u0002",
    "\u0002\u0002\u0153\u0156\u0003\u0002\u0002\u0002\u0154\u0152\u0003\u0002",
    "\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155\u0157\u0003\u0002",
    "\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0157\u0158\u0007\u0010",
    "\u0002\u0002\u0158\u015a\u0003\u0002\u0002\u0002\u0159\u014d\u0003\u0002",
    "\u0002\u0002\u0159\u014e\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002",
    "\u0002\u0002\u015b\u015c\u0007\r\u0002\u0002\u015c\u015d\u00056\u001c",
    "\u0002\u015d1\u0003\u0002\u0002\u0002\u015e\u015f\t\u0005\u0002\u0002",
    "\u015f\u0161\u0007\u0016\u0002\u0002\u0160\u015e\u0003\u0002\u0002\u0002",
    "\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002",
    "\u0162\u0167\u00054\u001b\u0002\u0163\u0164\u0007\u0016\u0002\u0002",
    "\u0164\u0166\u00054\u001b\u0002\u0165\u0163\u0003\u0002\u0002\u0002",
    "\u0166\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0003\u0002\u0002\u0002\u01683\u0003\u0002\u0002\u0002",
    "\u0169\u0167\u0003\u0002\u0002\u0002\u016a\u0171\u0007;\u0002\u0002",
    "\u016b\u016c\u0007\t\u0002\u0002\u016c\u016d\u00056\u001c\u0002\u016d",
    "\u016e\u0007\n\u0002\u0002\u016e\u0170\u0003\u0002\u0002\u0002\u016f",
    "\u016b\u0003\u0002\u0002\u0002\u0170\u0173\u0003\u0002\u0002\u0002\u0171",
    "\u016f\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002\u0002\u0172",
    "5\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0174",
    "\u0175\b\u001c\u0001\u0002\u0175\u0176\t\u0006\u0002\u0002\u0176\u0183",
    "\u00056\u001c\u0012\u0177\u0178\u0007\u000f\u0002\u0002\u0178\u0179",
    "\u00056\u001c\u0002\u0179\u017a\u0007\u0010\u0002\u0002\u017a\u0183",
    "\u0003\u0002\u0002\u0002\u017b\u0183\u00058\u001d\u0002\u017c\u0183",
    "\u0005\u0004\u0003\u0002\u017d\u017e\u0007+\u0002\u0002\u017e\u0183",
    "\u0005 \u0011\u0002\u017f\u0183\u0005\u001e\u0010\u0002\u0180\u0183",
    "\u00052\u001a\u0002\u0181\u0183\u0007,\u0002\u0002\u0182\u0174\u0003",
    "\u0002\u0002\u0002\u0182\u0177\u0003\u0002\u0002\u0002\u0182\u017b\u0003",
    "\u0002\u0002\u0002\u0182\u017c\u0003\u0002\u0002\u0002\u0182\u017d\u0003",
    "\u0002\u0002\u0002\u0182\u017f\u0003\u0002\u0002\u0002\u0182\u0180\u0003",
    "\u0002\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0183\u019e\u0003",
    "\u0002\u0002\u0002\u0184\u0185\f\u0011\u0002\u0002\u0185\u0186\u0007",
    "-\u0002\u0002\u0186\u019d\u00056\u001c\u0012\u0187\u0188\f\u0010\u0002",
    "\u0002\u0188\u0189\t\u0007\u0002\u0002\u0189\u019d\u00056\u001c\u0011",
    "\u018a\u018b\f\u000f\u0002\u0002\u018b\u018c\u00070\u0002\u0002\u018c",
    "\u019d\u00056\u001c\u0010\u018d\u018e\f\u000e\u0002\u0002\u018e\u018f",
    "\u00071\u0002\u0002\u018f\u019d\u00056\u001c\u000f\u0190\u0191\f\r\u0002",
    "\u0002\u0191\u0192\u00072\u0002\u0002\u0192\u019d\u00056\u001c\u000e",
    "\u0193\u0194\f\f\u0002\u0002\u0194\u0195\u00073\u0002\u0002\u0195\u019d",
    "\u00056\u001c\r\u0196\u0197\f\u000b\u0002\u0002\u0197\u0198\u00074\u0002",
    "\u0002\u0198\u019d\u00056\u001c\f\u0199\u019a\f\n\u0002\u0002\u019a",
    "\u019b\u00075\u0002\u0002\u019b\u019d\u00056\u001c\u000b\u019c\u0184",
    "\u0003\u0002\u0002\u0002\u019c\u0187\u0003\u0002\u0002\u0002\u019c\u018a",
    "\u0003\u0002\u0002\u0002\u019c\u018d\u0003\u0002\u0002\u0002\u019c\u0190",
    "\u0003\u0002\u0002\u0002\u019c\u0193\u0003\u0002\u0002\u0002\u019c\u0196",
    "\u0003\u0002\u0002\u0002\u019c\u0199\u0003\u0002\u0002\u0002\u019d\u01a0",
    "\u0003\u0002\u0002\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e\u019f",
    "\u0003\u0002\u0002\u0002\u019f7\u0003\u0002\u0002\u0002\u01a0\u019e",
    "\u0003\u0002\u0002\u0002\u01a1\u01a4\u0007\t\u0002\u0002\u01a2\u01a5",
    "\u00056\u001c\u0002\u01a3\u01a5\u00058\u001d\u0002\u01a4\u01a2\u0003",
    "\u0002\u0002\u0002\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a5\u01ad\u0003",
    "\u0002\u0002\u0002\u01a6\u01a9\u0007\f\u0002\u0002\u01a7\u01aa\u0005",
    "6\u001c\u0002\u01a8\u01aa\u00058\u001d\u0002\u01a9\u01a7\u0003\u0002",
    "\u0002\u0002\u01a9\u01a8\u0003\u0002\u0002\u0002\u01aa\u01ac\u0003\u0002",
    "\u0002\u0002\u01ab\u01a6\u0003\u0002\u0002\u0002\u01ac\u01af\u0003\u0002",
    "\u0002\u0002\u01ad\u01ab\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002",
    "\u0002\u0002\u01ae\u01b0\u0003\u0002\u0002\u0002\u01af\u01ad\u0003\u0002",
    "\u0002\u0002\u01b0\u01b1\u0007\n\u0002\u0002\u01b19\u0003\u0002\u0002",
    "\u00025;@GI_dgow~\u0080\u0089\u008f\u009a\u00a4\u00a9\u00b1\u00b7\u00bd",
    "\u00c2\u00c6\u00cd\u00d8\u00dd\u00e6\u00ee\u00fa\u0101\u0109\u010f\u0118",
    "\u011d\u011f\u0127\u012f\u0134\u0138\u013b\u0141\u0149\u0154\u0159\u0160",
    "\u0167\u0171\u0182\u019c\u019e\u01a4\u01a9\u01ad"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "';'", "'break'", "'continue'", 
                     "'destruct'", "'['", "']'", "'const'", "','", "'='", 
                     "'declare'", "'('", "')'", "'type'", "':'", "'private'", 
                     "'public'", "'protected'", "'.'", "'read'", "'write'", 
                     "'function'", "'if'", "'else'", "'switch'", "'caseof'", 
                     "'default'", "'for'", "'while'", "'int'", "'float'", 
                     "'string'", "'bool'", "'this'", "'super'", "'!'", "'~'", 
                     "'-'", "'+'", "'allocate'", "'nil'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "Multiplicative", 
                      "Unary", "Additive", "Relational", "Equality", "Bitwise_AND", 
                      "Bitwise_inclusive_OR", "Logical_AND", "Logical_OR", 
                      "Bool_const", "Int_const", "Real_const", "Exponent", 
                      "String_const", "Identifiers", "Multi_line_Comment", 
                      "Single_Line_Comment", "WS" ];

var ruleNames =  [ "program", "const_val", "block", "stmt", "var_def", "var_val", 
                   "fst_dcl", "func_dcl", "dcl_args", "type_dcl", "fst_def", 
                   "type_def", "component", "access_modifier", "func_call", 
                   "func_handler", "params", "func_def_args", "func_def", 
                   "cond_stmt", "switch_body", "loop_stmt", "type", "assign", 
                   "variable", "ref", "expr", "array" ];

function LuluParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LuluParser.prototype = Object.create(antlr4.Parser.prototype);
LuluParser.prototype.constructor = LuluParser;

Object.defineProperty(LuluParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LuluParser.EOF = antlr4.Token.EOF;
LuluParser.T__0 = 1;
LuluParser.T__1 = 2;
LuluParser.T__2 = 3;
LuluParser.T__3 = 4;
LuluParser.T__4 = 5;
LuluParser.T__5 = 6;
LuluParser.T__6 = 7;
LuluParser.T__7 = 8;
LuluParser.T__8 = 9;
LuluParser.T__9 = 10;
LuluParser.T__10 = 11;
LuluParser.T__11 = 12;
LuluParser.T__12 = 13;
LuluParser.T__13 = 14;
LuluParser.T__14 = 15;
LuluParser.T__15 = 16;
LuluParser.T__16 = 17;
LuluParser.T__17 = 18;
LuluParser.T__18 = 19;
LuluParser.T__19 = 20;
LuluParser.T__20 = 21;
LuluParser.T__21 = 22;
LuluParser.T__22 = 23;
LuluParser.T__23 = 24;
LuluParser.T__24 = 25;
LuluParser.T__25 = 26;
LuluParser.T__26 = 27;
LuluParser.T__27 = 28;
LuluParser.T__28 = 29;
LuluParser.T__29 = 30;
LuluParser.T__30 = 31;
LuluParser.T__31 = 32;
LuluParser.T__32 = 33;
LuluParser.T__33 = 34;
LuluParser.T__34 = 35;
LuluParser.T__35 = 36;
LuluParser.T__36 = 37;
LuluParser.T__37 = 38;
LuluParser.T__38 = 39;
LuluParser.T__39 = 40;
LuluParser.T__40 = 41;
LuluParser.T__41 = 42;
LuluParser.Multiplicative = 43;
LuluParser.Unary = 44;
LuluParser.Additive = 45;
LuluParser.Relational = 46;
LuluParser.Equality = 47;
LuluParser.Bitwise_AND = 48;
LuluParser.Bitwise_inclusive_OR = 49;
LuluParser.Logical_AND = 50;
LuluParser.Logical_OR = 51;
LuluParser.Bool_const = 52;
LuluParser.Int_const = 53;
LuluParser.Real_const = 54;
LuluParser.Exponent = 55;
LuluParser.String_const = 56;
LuluParser.Identifiers = 57;
LuluParser.Multi_line_Comment = 58;
LuluParser.Single_Line_Comment = 59;
LuluParser.WS = 60;

LuluParser.RULE_program = 0;
LuluParser.RULE_const_val = 1;
LuluParser.RULE_block = 2;
LuluParser.RULE_stmt = 3;
LuluParser.RULE_var_def = 4;
LuluParser.RULE_var_val = 5;
LuluParser.RULE_fst_dcl = 6;
LuluParser.RULE_func_dcl = 7;
LuluParser.RULE_dcl_args = 8;
LuluParser.RULE_type_dcl = 9;
LuluParser.RULE_fst_def = 10;
LuluParser.RULE_type_def = 11;
LuluParser.RULE_component = 12;
LuluParser.RULE_access_modifier = 13;
LuluParser.RULE_func_call = 14;
LuluParser.RULE_func_handler = 15;
LuluParser.RULE_params = 16;
LuluParser.RULE_func_def_args = 17;
LuluParser.RULE_func_def = 18;
LuluParser.RULE_cond_stmt = 19;
LuluParser.RULE_switch_body = 20;
LuluParser.RULE_loop_stmt = 21;
LuluParser.RULE_type = 22;
LuluParser.RULE_assign = 23;
LuluParser.RULE_variable = 24;
LuluParser.RULE_ref = 25;
LuluParser.RULE_expr = 26;
LuluParser.RULE_array = 27;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.fst_dcl = function() {
    return this.getTypedRuleContext(Fst_dclContext,0);
};

ProgramContext.prototype.fst_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Fst_defContext);
    } else {
        return this.getTypedRuleContext(Fst_defContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.ProgramContext = ProgramContext;

LuluParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LuluParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__11) {
            this.state = 56;
            this.fst_dcl();
        }

        this.state = 60; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 59;
            this.fst_def();
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__12) | (1 << LuluParser.T__14) | (1 << LuluParser.T__22))) !== 0));
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


function Const_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_const_val;
    return this;
}

Const_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_valContext.prototype.constructor = Const_valContext;

Const_valContext.prototype.Int_const = function() {
    return this.getToken(LuluParser.Int_const, 0);
};

Const_valContext.prototype.Real_const = function() {
    return this.getToken(LuluParser.Real_const, 0);
};

Const_valContext.prototype.Bool_const = function() {
    return this.getToken(LuluParser.Bool_const, 0);
};

Const_valContext.prototype.String_const = function() {
    return this.getToken(LuluParser.String_const, 0);
};

Const_valContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterConst_val(this);
	}
};

Const_valContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitConst_val(this);
	}
};

Const_valContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitConst_val(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Const_valContext = Const_valContext;

LuluParser.prototype.const_val = function() {

    var localctx = new Const_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LuluParser.RULE_const_val);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        _la = this._input.LA(1);
        if(!(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & ((1 << (LuluParser.Bool_const - 52)) | (1 << (LuluParser.Int_const - 52)) | (1 << (LuluParser.Real_const - 52)) | (1 << (LuluParser.String_const - 52)))) !== 0))) {
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.var_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_defContext);
    } else {
        return this.getTypedRuleContext(Var_defContext,i);
    }
};

BlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.BlockContext = BlockContext;

LuluParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LuluParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(LuluParser.T__0);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__3) | (1 << LuluParser.T__4) | (1 << LuluParser.T__5) | (1 << LuluParser.T__8) | (1 << LuluParser.T__12) | (1 << LuluParser.T__20) | (1 << LuluParser.T__21) | (1 << LuluParser.T__23) | (1 << LuluParser.T__25) | (1 << LuluParser.T__28) | (1 << LuluParser.T__29) | (1 << LuluParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (LuluParser.T__31 - 32)) | (1 << (LuluParser.T__32 - 32)) | (1 << (LuluParser.T__33 - 32)) | (1 << (LuluParser.T__34 - 32)) | (1 << (LuluParser.T__35 - 32)) | (1 << (LuluParser.Identifiers - 32)))) !== 0)) {
            this.state = 69;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 67;
                this.var_def();
                break;

            case 2:
                this.state = 68;
                this.stmt();
                break;

            }
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 74;
        this.match(LuluParser.T__1);
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


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtContext.prototype.cond_stmt = function() {
    return this.getTypedRuleContext(Cond_stmtContext,0);
};

StmtContext.prototype.loop_stmt = function() {
    return this.getTypedRuleContext(Loop_stmtContext,0);
};

StmtContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

StmtContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.StmtContext = StmtContext;

LuluParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LuluParser.RULE_stmt);
    var _la = 0; // Token type
    try {
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.assign();
            this.state = 77;
            this.match(LuluParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.cond_stmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 80;
            this.loop_stmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 81;
            this.func_call();
            this.state = 82;
            this.match(LuluParser.T__2);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 84;
            this.match(LuluParser.T__3);
            this.state = 85;
            this.match(LuluParser.T__2);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 86;
            this.match(LuluParser.T__4);
            this.state = 87;
            this.match(LuluParser.T__2);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 88;
            this.match(LuluParser.T__5);
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LuluParser.T__6) {
                this.state = 89;
                this.match(LuluParser.T__6);
                this.state = 90;
                this.match(LuluParser.T__7);
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 96;
            this.match(LuluParser.Identifiers);
            this.state = 97;
            this.match(LuluParser.T__2);
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


function Var_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_var_def;
    return this;
}

Var_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_defContext.prototype.constructor = Var_defContext;

Var_defContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Var_defContext.prototype.var_val = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_valContext);
    } else {
        return this.getTypedRuleContext(Var_valContext,i);
    }
};

Var_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterVar_def(this);
	}
};

Var_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitVar_def(this);
	}
};

Var_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitVar_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Var_defContext = Var_defContext;

LuluParser.prototype.var_def = function() {

    var localctx = new Var_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LuluParser.RULE_var_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__8) {
            this.state = 100;
            this.match(LuluParser.T__8);
        }

        this.state = 103;
        this.type();
        this.state = 104;
        this.var_val();
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuluParser.T__9) {
            this.state = 105;
            this.match(LuluParser.T__9);
            this.state = 106;
            this.var_val();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
        this.match(LuluParser.T__2);
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


function Var_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_var_val;
    return this;
}

Var_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_valContext.prototype.constructor = Var_valContext;

Var_valContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

Var_valContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Var_valContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterVar_val(this);
	}
};

Var_valContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitVar_val(this);
	}
};

Var_valContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitVar_val(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Var_valContext = Var_valContext;

LuluParser.prototype.var_val = function() {

    var localctx = new Var_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LuluParser.RULE_var_val);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.ref();
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__10) {
            this.state = 115;
            this.match(LuluParser.T__10);
            this.state = 116;
            this.expr(0);
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


function Fst_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_fst_dcl;
    return this;
}

Fst_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fst_dclContext.prototype.constructor = Fst_dclContext;

Fst_dclContext.prototype.func_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_dclContext);
    } else {
        return this.getTypedRuleContext(Func_dclContext,i);
    }
};

Fst_dclContext.prototype.type_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Type_dclContext);
    } else {
        return this.getTypedRuleContext(Type_dclContext,i);
    }
};

Fst_dclContext.prototype.var_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_defContext);
    } else {
        return this.getTypedRuleContext(Var_defContext,i);
    }
};

Fst_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFst_dcl(this);
	}
};

Fst_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFst_dcl(this);
	}
};

Fst_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFst_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Fst_dclContext = Fst_dclContext;

LuluParser.prototype.fst_dcl = function() {

    var localctx = new Fst_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LuluParser.RULE_fst_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(LuluParser.T__11);
        this.state = 120;
        this.match(LuluParser.T__0);
        this.state = 124; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 124;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 121;
                this.func_dcl();
                break;

            case 2:
                this.state = 122;
                this.type_dcl();
                break;

            case 3:
                this.state = 123;
                this.var_def();
                break;

            }
            this.state = 126; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__8) | (1 << LuluParser.T__12) | (1 << LuluParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (LuluParser.T__31 - 32)) | (1 << (LuluParser.T__32 - 32)) | (1 << (LuluParser.T__33 - 32)) | (1 << (LuluParser.Identifiers - 32)))) !== 0));
        this.state = 128;
        this.match(LuluParser.T__1);
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


function Func_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_func_dcl;
    return this;
}

Func_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_dclContext.prototype.constructor = Func_dclContext;

Func_dclContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

Func_dclContext.prototype.dcl_args = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Dcl_argsContext);
    } else {
        return this.getTypedRuleContext(Dcl_argsContext,i);
    }
};

Func_dclContext.prototype.func_def_args = function() {
    return this.getTypedRuleContext(Func_def_argsContext,0);
};

Func_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFunc_dcl(this);
	}
};

Func_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFunc_dcl(this);
	}
};

Func_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFunc_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Func_dclContext = Func_dclContext;

LuluParser.prototype.func_dcl = function() {

    var localctx = new Func_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LuluParser.RULE_func_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__12) {
            this.state = 130;
            this.match(LuluParser.T__12);
            this.state = 131;
            this.dcl_args(0);
            this.state = 132;
            this.match(LuluParser.T__13);
            this.state = 133;
            this.match(LuluParser.T__10);
        }

        this.state = 137;
        this.match(LuluParser.Identifiers);
        this.state = 138;
        this.match(LuluParser.T__12);
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 139;
            this.dcl_args(0);

        } else if(la_===2) {
            this.state = 140;
            this.func_def_args(0);

        }
        this.state = 143;
        this.match(LuluParser.T__13);
        this.state = 144;
        this.match(LuluParser.T__2);
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


function Dcl_argsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_dcl_args;
    return this;
}

Dcl_argsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dcl_argsContext.prototype.constructor = Dcl_argsContext;

Dcl_argsContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Dcl_argsContext.prototype.dcl_args = function() {
    return this.getTypedRuleContext(Dcl_argsContext,0);
};

Dcl_argsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterDcl_args(this);
	}
};

Dcl_argsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitDcl_args(this);
	}
};

Dcl_argsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitDcl_args(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuluParser.prototype.dcl_args = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Dcl_argsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, LuluParser.RULE_dcl_args, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.type();
        this.state = 152;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 148;
                this.match(LuluParser.T__6);
                this.state = 149;
                this.match(LuluParser.T__7); 
            }
            this.state = 154;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 167;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Dcl_argsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_dcl_args);
                this.state = 155;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 156;
                this.match(LuluParser.T__9);
                this.state = 157;
                this.type();
                this.state = 162;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 158;
                        this.match(LuluParser.T__6);
                        this.state = 159;
                        this.match(LuluParser.T__7); 
                    }
                    this.state = 164;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
                }
         
            }
            this.state = 169;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Type_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_type_dcl;
    return this;
}

Type_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_dclContext.prototype.constructor = Type_dclContext;

Type_dclContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

Type_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterType_dcl(this);
	}
};

Type_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitType_dcl(this);
	}
};

Type_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitType_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Type_dclContext = Type_dclContext;

LuluParser.prototype.type_dcl = function() {

    var localctx = new Type_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LuluParser.RULE_type_dcl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(LuluParser.Identifiers);
        this.state = 171;
        this.match(LuluParser.T__2);
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


function Fst_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_fst_def;
    return this;
}

Fst_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fst_defContext.prototype.constructor = Fst_defContext;

Fst_defContext.prototype.type_def = function() {
    return this.getTypedRuleContext(Type_defContext,0);
};

Fst_defContext.prototype.func_def = function() {
    return this.getTypedRuleContext(Func_defContext,0);
};

Fst_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFst_def(this);
	}
};

Fst_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFst_def(this);
	}
};

Fst_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFst_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Fst_defContext = Fst_defContext;

LuluParser.prototype.fst_def = function() {

    var localctx = new Fst_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LuluParser.RULE_fst_def);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuluParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.type_def();
            break;
        case LuluParser.T__12:
        case LuluParser.T__22:
            this.enterOuterAlt(localctx, 2);
            this.state = 174;
            this.func_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function Type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_type_def;
    return this;
}

Type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_defContext.prototype.constructor = Type_defContext;

Type_defContext.prototype.Identifiers = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuluParser.Identifiers);
    } else {
        return this.getToken(LuluParser.Identifiers, i);
    }
};


Type_defContext.prototype.component = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComponentContext);
    } else {
        return this.getTypedRuleContext(ComponentContext,i);
    }
};

Type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterType_def(this);
	}
};

Type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitType_def(this);
	}
};

Type_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitType_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Type_defContext = Type_defContext;

LuluParser.prototype.type_def = function() {

    var localctx = new Type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LuluParser.RULE_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(LuluParser.T__14);
        this.state = 178;
        this.match(LuluParser.Identifiers);
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__15) {
            this.state = 179;
            this.match(LuluParser.T__15);
            this.state = 180;
            this.match(LuluParser.Identifiers);
        }

        this.state = 183;
        this.match(LuluParser.T__0);
        this.state = 185; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 184;
            this.component();
            this.state = 187; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__8) | (1 << LuluParser.T__12) | (1 << LuluParser.T__16) | (1 << LuluParser.T__17) | (1 << LuluParser.T__18) | (1 << LuluParser.T__22) | (1 << LuluParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (LuluParser.T__31 - 32)) | (1 << (LuluParser.T__32 - 32)) | (1 << (LuluParser.T__33 - 32)) | (1 << (LuluParser.Identifiers - 32)))) !== 0));
        this.state = 189;
        this.match(LuluParser.T__1);
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


function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.var_def = function() {
    return this.getTypedRuleContext(Var_defContext,0);
};

ComponentContext.prototype.func_def = function() {
    return this.getTypedRuleContext(Func_defContext,0);
};

ComponentContext.prototype.access_modifier = function() {
    return this.getTypedRuleContext(Access_modifierContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.ComponentContext = ComponentContext;

LuluParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LuluParser.RULE_component);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__16) | (1 << LuluParser.T__17) | (1 << LuluParser.T__18))) !== 0)) {
            this.state = 191;
            this.access_modifier();
        }

        this.state = 196;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuluParser.T__8:
        case LuluParser.T__30:
        case LuluParser.T__31:
        case LuluParser.T__32:
        case LuluParser.T__33:
        case LuluParser.Identifiers:
            this.state = 194;
            this.var_def();
            break;
        case LuluParser.T__12:
        case LuluParser.T__22:
            this.state = 195;
            this.func_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function Access_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_access_modifier;
    return this;
}

Access_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_modifierContext.prototype.constructor = Access_modifierContext;


Access_modifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterAccess_modifier(this);
	}
};

Access_modifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitAccess_modifier(this);
	}
};

Access_modifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitAccess_modifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Access_modifierContext = Access_modifierContext;

LuluParser.prototype.access_modifier = function() {

    var localctx = new Access_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LuluParser.RULE_access_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__16) | (1 << LuluParser.T__17) | (1 << LuluParser.T__18))) !== 0))) {
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


function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_func_call;
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.func_handler = function() {
    return this.getTypedRuleContext(Func_handlerContext,0);
};

Func_callContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFunc_call(this);
	}
};

Func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFunc_call(this);
	}
};

Func_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFunc_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Func_callContext = Func_callContext;

LuluParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LuluParser.RULE_func_call);
    try {
        this.state = 214;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuluParser.T__34:
        case LuluParser.T__35:
        case LuluParser.Identifiers:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
            if(la_===1) {
                this.state = 200;
                this.variable();
                this.state = 201;
                this.match(LuluParser.T__19);

            }
            this.state = 205;
            this.func_handler();
            break;
        case LuluParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 206;
            this.match(LuluParser.T__20);
            this.state = 207;
            this.match(LuluParser.T__12);
            this.state = 208;
            this.match(LuluParser.T__13);
            break;
        case LuluParser.T__21:
            this.enterOuterAlt(localctx, 3);
            this.state = 209;
            this.match(LuluParser.T__21);
            this.state = 210;
            this.match(LuluParser.T__12);
            this.state = 211;
            this.expr(0);
            this.state = 212;
            this.match(LuluParser.T__13);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function Func_handlerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_func_handler;
    return this;
}

Func_handlerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_handlerContext.prototype.constructor = Func_handlerContext;

Func_handlerContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

Func_handlerContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

Func_handlerContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFunc_handler(this);
	}
};

Func_handlerContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFunc_handler(this);
	}
};

Func_handlerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFunc_handler(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Func_handlerContext = Func_handlerContext;

LuluParser.prototype.func_handler = function() {

    var localctx = new Func_handlerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LuluParser.RULE_func_handler);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(LuluParser.Identifiers);
        this.state = 217;
        this.match(LuluParser.T__12);
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuluParser.T__6) | (1 << LuluParser.T__12) | (1 << LuluParser.T__20) | (1 << LuluParser.T__21))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (LuluParser.T__34 - 35)) | (1 << (LuluParser.T__35 - 35)) | (1 << (LuluParser.T__36 - 35)) | (1 << (LuluParser.T__37 - 35)) | (1 << (LuluParser.T__38 - 35)) | (1 << (LuluParser.T__40 - 35)) | (1 << (LuluParser.T__41 - 35)) | (1 << (LuluParser.Bool_const - 35)) | (1 << (LuluParser.Int_const - 35)) | (1 << (LuluParser.Real_const - 35)) | (1 << (LuluParser.String_const - 35)) | (1 << (LuluParser.Identifiers - 35)))) !== 0)) {
            this.state = 218;
            this.params();
        }

        this.state = 221;
        this.match(LuluParser.T__13);
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


function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParamsContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

ParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterParams(this);
	}
};

ParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitParams(this);
	}
};

ParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.ParamsContext = ParamsContext;

LuluParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LuluParser.RULE_params);
    try {
        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 224;
            this.expr(0);
            this.state = 225;
            this.match(LuluParser.T__9);
            this.state = 226;
            this.params();
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


function Func_def_argsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_func_def_args;
    return this;
}

Func_def_argsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_def_argsContext.prototype.constructor = Func_def_argsContext;

Func_def_argsContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Func_def_argsContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

Func_def_argsContext.prototype.func_def_args = function() {
    return this.getTypedRuleContext(Func_def_argsContext,0);
};

Func_def_argsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFunc_def_args(this);
	}
};

Func_def_argsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFunc_def_args(this);
	}
};

Func_def_argsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFunc_def_args(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuluParser.prototype.func_def_args = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Func_def_argsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, LuluParser.RULE_func_def_args, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.type();
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuluParser.T__6) {
            this.state = 232;
            this.match(LuluParser.T__6);
            this.state = 233;
            this.match(LuluParser.T__7);
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 239;
        this.match(LuluParser.Identifiers);
        this._ctx.stop = this._input.LT(-1);
        this.state = 255;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Func_def_argsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_func_def_args);
                this.state = 241;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 242;
                this.match(LuluParser.T__9);
                this.state = 243;
                this.type();
                this.state = 248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===LuluParser.T__6) {
                    this.state = 244;
                    this.match(LuluParser.T__6);
                    this.state = 245;
                    this.match(LuluParser.T__7);
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 251;
                this.match(LuluParser.Identifiers); 
            }
            this.state = 257;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Func_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_func_def;
    return this;
}

Func_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_defContext.prototype.constructor = Func_defContext;

Func_defContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

Func_defContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Func_defContext.prototype.func_def_args = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_def_argsContext);
    } else {
        return this.getTypedRuleContext(Func_def_argsContext,i);
    }
};

Func_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterFunc_def(this);
	}
};

Func_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitFunc_def(this);
	}
};

Func_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitFunc_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Func_defContext = Func_defContext;

LuluParser.prototype.func_def = function() {

    var localctx = new Func_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LuluParser.RULE_func_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__12) {
            this.state = 258;
            this.match(LuluParser.T__12);
            this.state = 259;
            this.func_def_args(0);
            this.state = 260;
            this.match(LuluParser.T__13);
            this.state = 261;
            this.match(LuluParser.T__10);
        }

        this.state = 265;
        this.match(LuluParser.T__22);
        this.state = 266;
        this.match(LuluParser.Identifiers);
        this.state = 267;
        this.match(LuluParser.T__12);
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (LuluParser.T__30 - 31)) | (1 << (LuluParser.T__31 - 31)) | (1 << (LuluParser.T__32 - 31)) | (1 << (LuluParser.T__33 - 31)) | (1 << (LuluParser.Identifiers - 31)))) !== 0)) {
            this.state = 268;
            this.func_def_args(0);
        }

        this.state = 271;
        this.match(LuluParser.T__13);
        this.state = 272;
        this.block();
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


function Cond_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_cond_stmt;
    return this;
}

Cond_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cond_stmtContext.prototype.constructor = Cond_stmtContext;

Cond_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Cond_stmtContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Cond_stmtContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

Cond_stmtContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Cond_stmtContext.prototype.switch_body = function() {
    return this.getTypedRuleContext(Switch_bodyContext,0);
};

Cond_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterCond_stmt(this);
	}
};

Cond_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitCond_stmt(this);
	}
};

Cond_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitCond_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Cond_stmtContext = Cond_stmtContext;

LuluParser.prototype.cond_stmt = function() {

    var localctx = new Cond_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LuluParser.RULE_cond_stmt);
    try {
        this.state = 293;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuluParser.T__23:
            this.enterOuterAlt(localctx, 1);
            this.state = 274;
            this.match(LuluParser.T__23);
            this.state = 275;
            this.expr(0);
            this.state = 278;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LuluParser.T__0:
                this.state = 276;
                this.block();
                break;
            case LuluParser.T__3:
            case LuluParser.T__4:
            case LuluParser.T__5:
            case LuluParser.T__12:
            case LuluParser.T__20:
            case LuluParser.T__21:
            case LuluParser.T__23:
            case LuluParser.T__25:
            case LuluParser.T__28:
            case LuluParser.T__29:
            case LuluParser.T__34:
            case LuluParser.T__35:
            case LuluParser.Identifiers:
                this.state = 277;
                this.stmt();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 285;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
            if(la_===1) {
                this.state = 280;
                this.match(LuluParser.T__24);
                this.state = 283;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case LuluParser.T__0:
                    this.state = 281;
                    this.block();
                    break;
                case LuluParser.T__3:
                case LuluParser.T__4:
                case LuluParser.T__5:
                case LuluParser.T__12:
                case LuluParser.T__20:
                case LuluParser.T__21:
                case LuluParser.T__23:
                case LuluParser.T__25:
                case LuluParser.T__28:
                case LuluParser.T__29:
                case LuluParser.T__34:
                case LuluParser.T__35:
                case LuluParser.Identifiers:
                    this.state = 282;
                    this.stmt();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }

            }
            break;
        case LuluParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 287;
            this.match(LuluParser.T__25);
            this.state = 288;
            this.variable();
            this.state = 289;
            this.match(LuluParser.T__0);
            this.state = 290;
            this.switch_body();
            this.state = 291;
            this.match(LuluParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function Switch_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_switch_body;
    return this;
}

Switch_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Switch_bodyContext.prototype.constructor = Switch_bodyContext;

Switch_bodyContext.prototype.Int_const = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuluParser.Int_const);
    } else {
        return this.getToken(LuluParser.Int_const, i);
    }
};


Switch_bodyContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Switch_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterSwitch_body(this);
	}
};

Switch_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitSwitch_body(this);
	}
};

Switch_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitSwitch_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Switch_bodyContext = Switch_bodyContext;

LuluParser.prototype.switch_body = function() {

    var localctx = new Switch_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LuluParser.RULE_switch_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 295;
            this.match(LuluParser.T__26);
            this.state = 296;
            this.match(LuluParser.Int_const);
            this.state = 297;
            this.match(LuluParser.T__15);
            this.state = 298;
            this.block();
            this.state = 301; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LuluParser.T__26);
        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__27) {
            this.state = 303;
            this.match(LuluParser.T__27);
            this.state = 304;
            this.match(LuluParser.T__15);
            this.state = 305;
            this.block();
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


function Loop_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_loop_stmt;
    return this;
}

Loop_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Loop_stmtContext.prototype.constructor = Loop_stmtContext;

Loop_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Loop_stmtContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Loop_stmtContext.prototype.assign = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignContext);
    } else {
        return this.getTypedRuleContext(AssignContext,i);
    }
};

Loop_stmtContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Loop_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterLoop_stmt(this);
	}
};

Loop_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitLoop_stmt(this);
	}
};

Loop_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitLoop_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.Loop_stmtContext = Loop_stmtContext;

LuluParser.prototype.loop_stmt = function() {

    var localctx = new Loop_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LuluParser.RULE_loop_stmt);
    var _la = 0; // Token type
    try {
        this.state = 327;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuluParser.T__28:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.match(LuluParser.T__28);
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuluParser.T__12 || _la===LuluParser.T__30 || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (LuluParser.T__31 - 32)) | (1 << (LuluParser.T__32 - 32)) | (1 << (LuluParser.T__33 - 32)) | (1 << (LuluParser.T__34 - 32)) | (1 << (LuluParser.T__35 - 32)) | (1 << (LuluParser.Identifiers - 32)))) !== 0)) {
                this.state = 310;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
                if(la_===1) {
                    this.state = 309;
                    this.type();

                }
                this.state = 312;
                this.assign();
            }

            this.state = 315;
            this.match(LuluParser.T__2);
            this.state = 316;
            this.expr(0);
            this.state = 317;
            this.match(LuluParser.T__2);
            this.state = 319;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuluParser.T__12 || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (LuluParser.T__34 - 35)) | (1 << (LuluParser.T__35 - 35)) | (1 << (LuluParser.Identifiers - 35)))) !== 0)) {
                this.state = 318;
                this.assign();
            }

            this.state = 321;
            this.block();
            break;
        case LuluParser.T__29:
            this.enterOuterAlt(localctx, 2);
            this.state = 323;
            this.match(LuluParser.T__29);
            this.state = 324;
            this.expr(0);
            this.state = 325;
            this.block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.TypeContext = TypeContext;

LuluParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LuluParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (LuluParser.T__30 - 31)) | (1 << (LuluParser.T__31 - 31)) | (1 << (LuluParser.T__32 - 31)) | (1 << (LuluParser.T__33 - 31)) | (1 << (LuluParser.Identifiers - 31)))) !== 0))) {
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


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.AssignContext = AssignContext;

LuluParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LuluParser.RULE_assign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuluParser.T__34:
        case LuluParser.T__35:
        case LuluParser.Identifiers:
            this.state = 331;
            this.variable();
            break;
        case LuluParser.T__12:
            this.state = 332;
            this.match(LuluParser.T__12);
            this.state = 333;
            this.variable();
            this.state = 338;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LuluParser.T__9) {
                this.state = 334;
                this.match(LuluParser.T__9);
                this.state = 335;
                this.variable();
                this.state = 340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 341;
            this.match(LuluParser.T__13);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 345;
        this.match(LuluParser.T__10);
        this.state = 346;
        this.expr(0);
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


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ref = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RefContext);
    } else {
        return this.getTypedRuleContext(RefContext,i);
    }
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.VariableContext = VariableContext;

LuluParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LuluParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuluParser.T__34 || _la===LuluParser.T__35) {
            this.state = 348;
            _la = this._input.LA(1);
            if(!(_la===LuluParser.T__34 || _la===LuluParser.T__35)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 349;
            this.match(LuluParser.T__19);
        }

        this.state = 352;
        this.ref();
        this.state = 357;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 353;
                this.match(LuluParser.T__19);
                this.state = 354;
                this.ref(); 
            }
            this.state = 359;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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


function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.Identifiers = function() {
    return this.getToken(LuluParser.Identifiers, 0);
};

RefContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.RefContext = RefContext;

LuluParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, LuluParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(LuluParser.Identifiers);
        this.state = 367;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 361;
                this.match(LuluParser.T__6);
                this.state = 362;
                this.expr(0);
                this.state = 363;
                this.match(LuluParser.T__7); 
            }
            this.state = 369;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ExprContext.prototype.const_val = function() {
    return this.getTypedRuleContext(Const_valContext,0);
};

ExprContext.prototype.func_handler = function() {
    return this.getTypedRuleContext(Func_handlerContext,0);
};

ExprContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

ExprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ExprContext.prototype.Multiplicative = function() {
    return this.getToken(LuluParser.Multiplicative, 0);
};

ExprContext.prototype.Relational = function() {
    return this.getToken(LuluParser.Relational, 0);
};

ExprContext.prototype.Equality = function() {
    return this.getToken(LuluParser.Equality, 0);
};

ExprContext.prototype.Bitwise_AND = function() {
    return this.getToken(LuluParser.Bitwise_AND, 0);
};

ExprContext.prototype.Bitwise_inclusive_OR = function() {
    return this.getToken(LuluParser.Bitwise_inclusive_OR, 0);
};

ExprContext.prototype.Logical_AND = function() {
    return this.getToken(LuluParser.Logical_AND, 0);
};

ExprContext.prototype.Logical_OR = function() {
    return this.getToken(LuluParser.Logical_OR, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuluParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 52;
    this.enterRecursionRule(localctx, 52, LuluParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.state = 371;
            _la = this._input.LA(1);
            if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LuluParser.T__36 - 37)) | (1 << (LuluParser.T__37 - 37)) | (1 << (LuluParser.T__38 - 37)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 372;
            this.expr(16);
            break;

        case 2:
            this.state = 373;
            this.match(LuluParser.T__12);
            this.state = 374;
            this.expr(0);
            this.state = 375;
            this.match(LuluParser.T__13);
            break;

        case 3:
            this.state = 377;
            this.array();
            break;

        case 4:
            this.state = 378;
            this.const_val();
            break;

        case 5:
            this.state = 379;
            this.match(LuluParser.T__40);
            this.state = 380;
            this.func_handler();
            break;

        case 6:
            this.state = 381;
            this.func_call();
            break;

        case 7:
            this.state = 382;
            this.variable();
            break;

        case 8:
            this.state = 383;
            this.match(LuluParser.T__41);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 412;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 410;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 386;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 387;
                    this.match(LuluParser.Multiplicative);
                    this.state = 388;
                    this.expr(16);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 389;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 390;
                    _la = this._input.LA(1);
                    if(!(_la===LuluParser.T__38 || _la===LuluParser.T__39)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 391;
                    this.expr(15);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 392;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 393;
                    this.match(LuluParser.Relational);
                    this.state = 394;
                    this.expr(14);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 395;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 396;
                    this.match(LuluParser.Equality);
                    this.state = 397;
                    this.expr(13);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 398;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 399;
                    this.match(LuluParser.Bitwise_AND);
                    this.state = 400;
                    this.expr(12);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 401;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 402;
                    this.match(LuluParser.Bitwise_inclusive_OR);
                    this.state = 403;
                    this.expr(11);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 404;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 405;
                    this.match(LuluParser.Logical_AND);
                    this.state = 406;
                    this.expr(10);
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuluParser.RULE_expr);
                    this.state = 407;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 408;
                    this.match(LuluParser.Logical_OR);
                    this.state = 409;
                    this.expr(9);
                    break;

                } 
            }
            this.state = 414;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuluParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArrayContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuluListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuluVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuluParser.ArrayContext = ArrayContext;

LuluParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, LuluParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.match(LuluParser.T__6);
        this.state = 418;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.state = 416;
            this.expr(0);
            break;

        case 2:
            this.state = 417;
            this.array();
            break;

        }
        this.state = 427;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuluParser.T__9) {
            this.state = 420;
            this.match(LuluParser.T__9);
            this.state = 423;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
            switch(la_) {
            case 1:
                this.state = 421;
                this.expr(0);
                break;

            case 2:
                this.state = 422;
                this.array();
                break;

            }
            this.state = 429;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 430;
        this.match(LuluParser.T__7);
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


LuluParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.dcl_args_sempred(localctx, predIndex);
	case 17:
			return this.func_def_args_sempred(localctx, predIndex);
	case 26:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LuluParser.prototype.dcl_args_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

LuluParser.prototype.func_def_args_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

LuluParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 15);
		case 3:
			return this.precpred(this._ctx, 14);
		case 4:
			return this.precpred(this._ctx, 13);
		case 5:
			return this.precpred(this._ctx, 12);
		case 6:
			return this.precpred(this._ctx, 11);
		case 7:
			return this.precpred(this._ctx, 10);
		case 8:
			return this.precpred(this._ctx, 9);
		case 9:
			return this.precpred(this._ctx, 8);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LuluParser = LuluParser;
