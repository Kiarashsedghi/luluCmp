// Generated from src/grammars/Lulu.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002>\u01ee\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003",
    ")\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0005/\u0153\n/\u00030\u00030\u00030\u0003",
    "0\u00050\u0159\n0\u00031\u00031\u00032\u00032\u00033\u00033\u00033\u0003",
    "4\u00034\u00034\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00055\u016e\n5\u00036\u00066\u0171\n6\r6\u000e6\u0172\u0003",
    "6\u00036\u00036\u00036\u00056\u0179\n6\u00036\u00066\u017c\n6\r6\u000e",
    "6\u017d\u00056\u0180\n6\u00037\u00067\u0183\n7\r7\u000e7\u0184\u0003",
    "7\u00037\u00077\u0189\n7\f7\u000e7\u018c\u000b7\u00037\u00057\u018f",
    "\n7\u00037\u00077\u0192\n7\f7\u000e7\u0195\u000b7\u00037\u00037\u0006",
    "7\u0199\n7\r7\u000e7\u019a\u00037\u00057\u019e\n7\u00037\u00067\u01a1",
    "\n7\r7\u000e7\u01a2\u00037\u00057\u01a6\n7\u00038\u00038\u00058\u01aa",
    "\n8\u00038\u00068\u01ad\n8\r8\u000e8\u01ae\u00039\u00039\u00039\u0003",
    "9\u00039\u00039\u00039\u00039\u00039\u00039\u00039\u00039\u00039\u0003",
    "9\u00039\u00039\u00079\u01c1\n9\f9\u000e9\u01c4\u000b9\u00039\u0003",
    "9\u0003:\u0003:\u0007:\u01ca\n:\f:\u000e:\u01cd\u000b:\u0003;\u0003",
    ";\u0003;\u0003;\u0007;\u01d3\n;\f;\u000e;\u01d6\u000b;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003<\u0003<\u0003<\u0003<\u0007<\u01e1\n<\f",
    "<\u000e<\u01e4\u000b<\u0003<\u0003<\u0003=\u0006=\u01e9\n=\r=\u000e",
    "=\u01ea\u0003=\u0003=\u0003\u01d4\u0002>\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<",
    "w=y>\u0003\u0002\u000e\u0005\u0002\'\',,11\u0005\u0002##//\u0080\u0080",
    "\u0004\u0002--//\u0004\u0002>>@@\u0003\u00022;\u0005\u00022;CHch\u0004",
    "\u0002ZZzz\u0004\u0002))^^\u0005\u0002B\\aac|\u0006\u00022;B\\aac|\u0004",
    "\u0002\f\f\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u020b",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002",
    "\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002",
    "\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002",
    "\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002",
    "=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003",
    "\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002",
    "\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002",
    "\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002",
    "\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002",
    "S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003",
    "\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002",
    "\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002",
    "\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002",
    "\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002",
    "i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003",
    "\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002",
    "\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002",
    "\u0002\u0002w\u0003\u0002\u0002\u0002\u0002y\u0003\u0002\u0002\u0002",
    "\u0003{\u0003\u0002\u0002\u0002\u0005}\u0003\u0002\u0002\u0002\u0007",
    "\u007f\u0003\u0002\u0002\u0002\t\u0081\u0003\u0002\u0002\u0002\u000b",
    "\u0087\u0003\u0002\u0002\u0002\r\u0090\u0003\u0002\u0002\u0002\u000f",
    "\u0099\u0003\u0002\u0002\u0002\u0011\u009b\u0003\u0002\u0002\u0002\u0013",
    "\u009d\u0003\u0002\u0002\u0002\u0015\u00a3\u0003\u0002\u0002\u0002\u0017",
    "\u00a5\u0003\u0002\u0002\u0002\u0019\u00a7\u0003\u0002\u0002\u0002\u001b",
    "\u00af\u0003\u0002\u0002\u0002\u001d\u00b1\u0003\u0002\u0002\u0002\u001f",
    "\u00b3\u0003\u0002\u0002\u0002!\u00b8\u0003\u0002\u0002\u0002#\u00ba",
    "\u0003\u0002\u0002\u0002%\u00c2\u0003\u0002\u0002\u0002\'\u00c9\u0003",
    "\u0002\u0002\u0002)\u00d3\u0003\u0002\u0002\u0002+\u00d5\u0003\u0002",
    "\u0002\u0002-\u00da\u0003\u0002\u0002\u0002/\u00e0\u0003\u0002\u0002",
    "\u00021\u00e9\u0003\u0002\u0002\u00023\u00ec\u0003\u0002\u0002\u0002",
    "5\u00f1\u0003\u0002\u0002\u00027\u00f8\u0003\u0002\u0002\u00029\u00ff",
    "\u0003\u0002\u0002\u0002;\u0107\u0003\u0002\u0002\u0002=\u010b\u0003",
    "\u0002\u0002\u0002?\u0111\u0003\u0002\u0002\u0002A\u0115\u0003\u0002",
    "\u0002\u0002C\u011b\u0003\u0002\u0002\u0002E\u0122\u0003\u0002\u0002",
    "\u0002G\u0127\u0003\u0002\u0002\u0002I\u012c\u0003\u0002\u0002\u0002",
    "K\u0132\u0003\u0002\u0002\u0002M\u0134\u0003\u0002\u0002\u0002O\u0136",
    "\u0003\u0002\u0002\u0002Q\u0138\u0003\u0002\u0002\u0002S\u013a\u0003",
    "\u0002\u0002\u0002U\u0143\u0003\u0002\u0002\u0002W\u0147\u0003\u0002",
    "\u0002\u0002Y\u0149\u0003\u0002\u0002\u0002[\u014b\u0003\u0002\u0002",
    "\u0002]\u0152\u0003\u0002\u0002\u0002_\u0158\u0003\u0002\u0002\u0002",
    "a\u015a\u0003\u0002\u0002\u0002c\u015c\u0003\u0002\u0002\u0002e\u015e",
    "\u0003\u0002\u0002\u0002g\u0161\u0003\u0002\u0002\u0002i\u016d\u0003",
    "\u0002\u0002\u0002k\u017f\u0003\u0002\u0002\u0002m\u01a5\u0003\u0002",
    "\u0002\u0002o\u01a7\u0003\u0002\u0002\u0002q\u01b0\u0003\u0002\u0002",
    "\u0002s\u01c7\u0003\u0002\u0002\u0002u\u01ce\u0003\u0002\u0002\u0002",
    "w\u01dc\u0003\u0002\u0002\u0002y\u01e8\u0003\u0002\u0002\u0002{|\u0007",
    "}\u0002\u0002|\u0004\u0003\u0002\u0002\u0002}~\u0007\u007f\u0002\u0002",
    "~\u0006\u0003\u0002\u0002\u0002\u007f\u0080\u0007=\u0002\u0002\u0080",
    "\b\u0003\u0002\u0002\u0002\u0081\u0082\u0007d\u0002\u0002\u0082\u0083",
    "\u0007t\u0002\u0002\u0083\u0084\u0007g\u0002\u0002\u0084\u0085\u0007",
    "c\u0002\u0002\u0085\u0086\u0007m\u0002\u0002\u0086\n\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0007e\u0002\u0002\u0088\u0089\u0007q\u0002\u0002",
    "\u0089\u008a\u0007p\u0002\u0002\u008a\u008b\u0007v\u0002\u0002\u008b",
    "\u008c\u0007k\u0002\u0002\u008c\u008d\u0007p\u0002\u0002\u008d\u008e",
    "\u0007w\u0002\u0002\u008e\u008f\u0007g\u0002\u0002\u008f\f\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0007f\u0002\u0002\u0091\u0092\u0007g\u0002",
    "\u0002\u0092\u0093\u0007u\u0002\u0002\u0093\u0094\u0007v\u0002\u0002",
    "\u0094\u0095\u0007t\u0002\u0002\u0095\u0096\u0007w\u0002\u0002\u0096",
    "\u0097\u0007e\u0002\u0002\u0097\u0098\u0007v\u0002\u0002\u0098\u000e",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0007]\u0002\u0002\u009a\u0010",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0007_\u0002\u0002\u009c\u0012",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0007e\u0002\u0002\u009e\u009f",
    "\u0007q\u0002\u0002\u009f\u00a0\u0007p\u0002\u0002\u00a0\u00a1\u0007",
    "u\u0002\u0002\u00a1\u00a2\u0007v\u0002\u0002\u00a2\u0014\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\u0007.\u0002\u0002\u00a4\u0016\u0003\u0002",
    "\u0002\u0002\u00a5\u00a6\u0007?\u0002\u0002\u00a6\u0018\u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\u0007f\u0002\u0002\u00a8\u00a9\u0007g\u0002",
    "\u0002\u00a9\u00aa\u0007e\u0002\u0002\u00aa\u00ab\u0007n\u0002\u0002",
    "\u00ab\u00ac\u0007c\u0002\u0002\u00ac\u00ad\u0007t\u0002\u0002\u00ad",
    "\u00ae\u0007g\u0002\u0002\u00ae\u001a\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0007*\u0002\u0002\u00b0\u001c\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0007+\u0002\u0002\u00b2\u001e\u0003\u0002\u0002\u0002\u00b3",
    "\u00b4\u0007v\u0002\u0002\u00b4\u00b5\u0007{\u0002\u0002\u00b5\u00b6",
    "\u0007r\u0002\u0002\u00b6\u00b7\u0007g\u0002\u0002\u00b7 \u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\u0007<\u0002\u0002\u00b9\"\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0007r\u0002\u0002\u00bb\u00bc\u0007t\u0002\u0002",
    "\u00bc\u00bd\u0007k\u0002\u0002\u00bd\u00be\u0007x\u0002\u0002\u00be",
    "\u00bf\u0007c\u0002\u0002\u00bf\u00c0\u0007v\u0002\u0002\u00c0\u00c1",
    "\u0007g\u0002\u0002\u00c1$\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007",
    "r\u0002\u0002\u00c3\u00c4\u0007w\u0002\u0002\u00c4\u00c5\u0007d\u0002",
    "\u0002\u00c5\u00c6\u0007n\u0002\u0002\u00c6\u00c7\u0007k\u0002\u0002",
    "\u00c7\u00c8\u0007e\u0002\u0002\u00c8&\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0007r\u0002\u0002\u00ca\u00cb\u0007t\u0002\u0002\u00cb\u00cc",
    "\u0007q\u0002\u0002\u00cc\u00cd\u0007v\u0002\u0002\u00cd\u00ce\u0007",
    "g\u0002\u0002\u00ce\u00cf\u0007e\u0002\u0002\u00cf\u00d0\u0007v\u0002",
    "\u0002\u00d0\u00d1\u0007g\u0002\u0002\u00d1\u00d2\u0007f\u0002\u0002",
    "\u00d2(\u0003\u0002\u0002\u0002\u00d3\u00d4\u00070\u0002\u0002\u00d4",
    "*\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007t\u0002\u0002\u00d6\u00d7",
    "\u0007g\u0002\u0002\u00d7\u00d8\u0007c\u0002\u0002\u00d8\u00d9\u0007",
    "f\u0002\u0002\u00d9,\u0003\u0002\u0002\u0002\u00da\u00db\u0007y\u0002",
    "\u0002\u00db\u00dc\u0007t\u0002\u0002\u00dc\u00dd\u0007k\u0002\u0002",
    "\u00dd\u00de\u0007v\u0002\u0002\u00de\u00df\u0007g\u0002\u0002\u00df",
    ".\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007h\u0002\u0002\u00e1\u00e2",
    "\u0007w\u0002\u0002\u00e2\u00e3\u0007p\u0002\u0002\u00e3\u00e4\u0007",
    "e\u0002\u0002\u00e4\u00e5\u0007v\u0002\u0002\u00e5\u00e6\u0007k\u0002",
    "\u0002\u00e6\u00e7\u0007q\u0002\u0002\u00e7\u00e8\u0007p\u0002\u0002",
    "\u00e80\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007k\u0002\u0002\u00ea",
    "\u00eb\u0007h\u0002\u0002\u00eb2\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0007g\u0002\u0002\u00ed\u00ee\u0007n\u0002\u0002\u00ee\u00ef\u0007",
    "u\u0002\u0002\u00ef\u00f0\u0007g\u0002\u0002\u00f04\u0003\u0002\u0002",
    "\u0002\u00f1\u00f2\u0007u\u0002\u0002\u00f2\u00f3\u0007y\u0002\u0002",
    "\u00f3\u00f4\u0007k\u0002\u0002\u00f4\u00f5\u0007v\u0002\u0002\u00f5",
    "\u00f6\u0007e\u0002\u0002\u00f6\u00f7\u0007j\u0002\u0002\u00f76\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0007e\u0002\u0002\u00f9\u00fa\u0007",
    "c\u0002\u0002\u00fa\u00fb\u0007u\u0002\u0002\u00fb\u00fc\u0007g\u0002",
    "\u0002\u00fc\u00fd\u0007q\u0002\u0002\u00fd\u00fe\u0007h\u0002\u0002",
    "\u00fe8\u0003\u0002\u0002\u0002\u00ff\u0100\u0007f\u0002\u0002\u0100",
    "\u0101\u0007g\u0002\u0002\u0101\u0102\u0007h\u0002\u0002\u0102\u0103",
    "\u0007c\u0002\u0002\u0103\u0104\u0007w\u0002\u0002\u0104\u0105\u0007",
    "n\u0002\u0002\u0105\u0106\u0007v\u0002\u0002\u0106:\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0007h\u0002\u0002\u0108\u0109\u0007q\u0002\u0002",
    "\u0109\u010a\u0007t\u0002\u0002\u010a<\u0003\u0002\u0002\u0002\u010b",
    "\u010c\u0007y\u0002\u0002\u010c\u010d\u0007j\u0002\u0002\u010d\u010e",
    "\u0007k\u0002\u0002\u010e\u010f\u0007n\u0002\u0002\u010f\u0110\u0007",
    "g\u0002\u0002\u0110>\u0003\u0002\u0002\u0002\u0111\u0112\u0007k\u0002",
    "\u0002\u0112\u0113\u0007p\u0002\u0002\u0113\u0114\u0007v\u0002\u0002",
    "\u0114@\u0003\u0002\u0002\u0002\u0115\u0116\u0007h\u0002\u0002\u0116",
    "\u0117\u0007n\u0002\u0002\u0117\u0118\u0007q\u0002\u0002\u0118\u0119",
    "\u0007c\u0002\u0002\u0119\u011a\u0007v\u0002\u0002\u011aB\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0007u\u0002\u0002\u011c\u011d\u0007v\u0002",
    "\u0002\u011d\u011e\u0007t\u0002\u0002\u011e\u011f\u0007k\u0002\u0002",
    "\u011f\u0120\u0007p\u0002\u0002\u0120\u0121\u0007i\u0002\u0002\u0121",
    "D\u0003\u0002\u0002\u0002\u0122\u0123\u0007d\u0002\u0002\u0123\u0124",
    "\u0007q\u0002\u0002\u0124\u0125\u0007q\u0002\u0002\u0125\u0126\u0007",
    "n\u0002\u0002\u0126F\u0003\u0002\u0002\u0002\u0127\u0128\u0007v\u0002",
    "\u0002\u0128\u0129\u0007j\u0002\u0002\u0129\u012a\u0007k\u0002\u0002",
    "\u012a\u012b\u0007u\u0002\u0002\u012bH\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0007u\u0002\u0002\u012d\u012e\u0007w\u0002\u0002\u012e\u012f",
    "\u0007r\u0002\u0002\u012f\u0130\u0007g\u0002\u0002\u0130\u0131\u0007",
    "t\u0002\u0002\u0131J\u0003\u0002\u0002\u0002\u0132\u0133\u0007#\u0002",
    "\u0002\u0133L\u0003\u0002\u0002\u0002\u0134\u0135\u0007\u0080\u0002",
    "\u0002\u0135N\u0003\u0002\u0002\u0002\u0136\u0137\u0007/\u0002\u0002",
    "\u0137P\u0003\u0002\u0002\u0002\u0138\u0139\u0007-\u0002\u0002\u0139",
    "R\u0003\u0002\u0002\u0002\u013a\u013b\u0007c\u0002\u0002\u013b\u013c",
    "\u0007n\u0002\u0002\u013c\u013d\u0007n\u0002\u0002\u013d\u013e\u0007",
    "q\u0002\u0002\u013e\u013f\u0007e\u0002\u0002\u013f\u0140\u0007c\u0002",
    "\u0002\u0140\u0141\u0007v\u0002\u0002\u0141\u0142\u0007g\u0002\u0002",
    "\u0142T\u0003\u0002\u0002\u0002\u0143\u0144\u0007p\u0002\u0002\u0144",
    "\u0145\u0007k\u0002\u0002\u0145\u0146\u0007n\u0002\u0002\u0146V\u0003",
    "\u0002\u0002\u0002\u0147\u0148\t\u0002\u0002\u0002\u0148X\u0003\u0002",
    "\u0002\u0002\u0149\u014a\t\u0003\u0002\u0002\u014aZ\u0003\u0002\u0002",
    "\u0002\u014b\u014c\t\u0004\u0002\u0002\u014c\\\u0003\u0002\u0002\u0002",
    "\u014d\u014e\u0007@\u0002\u0002\u014e\u0153\u0007?\u0002\u0002\u014f",
    "\u0150\u0007>\u0002\u0002\u0150\u0153\u0007?\u0002\u0002\u0151\u0153",
    "\t\u0005\u0002\u0002\u0152\u014d\u0003\u0002\u0002\u0002\u0152\u014f",
    "\u0003\u0002\u0002\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0153^",
    "\u0003\u0002\u0002\u0002\u0154\u0155\u0007?\u0002\u0002\u0155\u0159",
    "\u0007?\u0002\u0002\u0156\u0157\u0007#\u0002\u0002\u0157\u0159\u0007",
    "?\u0002\u0002\u0158\u0154\u0003\u0002\u0002\u0002\u0158\u0156\u0003",
    "\u0002\u0002\u0002\u0159`\u0003\u0002\u0002\u0002\u015a\u015b\u0007",
    "(\u0002\u0002\u015bb\u0003\u0002\u0002\u0002\u015c\u015d\u0007~\u0002",
    "\u0002\u015dd\u0003\u0002\u0002\u0002\u015e\u015f\u0007(\u0002\u0002",
    "\u015f\u0160\u0007(\u0002\u0002\u0160f\u0003\u0002\u0002\u0002\u0161",
    "\u0162\u0007~\u0002\u0002\u0162\u0163\u0007~\u0002\u0002\u0163h\u0003",
    "\u0002\u0002\u0002\u0164\u0165\u0007v\u0002\u0002\u0165\u0166\u0007",
    "t\u0002\u0002\u0166\u0167\u0007w\u0002\u0002\u0167\u016e\u0007g\u0002",
    "\u0002\u0168\u0169\u0007h\u0002\u0002\u0169\u016a\u0007c\u0002\u0002",
    "\u016a\u016b\u0007n\u0002\u0002\u016b\u016c\u0007u\u0002\u0002\u016c",
    "\u016e\u0007g\u0002\u0002\u016d\u0164\u0003\u0002\u0002\u0002\u016d",
    "\u0168\u0003\u0002\u0002\u0002\u016ej\u0003\u0002\u0002\u0002\u016f",
    "\u0171\t\u0006\u0002\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0171",
    "\u0172\u0003\u0002\u0002\u0002\u0172\u0170\u0003\u0002\u0002\u0002\u0172",
    "\u0173\u0003\u0002\u0002\u0002\u0173\u0180\u0003\u0002\u0002\u0002\u0174",
    "\u0175\u00072\u0002\u0002\u0175\u0179\u0007z\u0002\u0002\u0176\u0177",
    "\u00072\u0002\u0002\u0177\u0179\u0007Z\u0002\u0002\u0178\u0174\u0003",
    "\u0002\u0002\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0179\u017b\u0003",
    "\u0002\u0002\u0002\u017a\u017c\t\u0007\u0002\u0002\u017b\u017a\u0003",
    "\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017b\u0003",
    "\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e\u0180\u0003",
    "\u0002\u0002\u0002\u017f\u0170\u0003\u0002\u0002\u0002\u017f\u0178\u0003",
    "\u0002\u0002\u0002\u0180l\u0003\u0002\u0002\u0002\u0181\u0183\t\u0006",
    "\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002",
    "\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u018a\u00070",
    "\u0002\u0002\u0187\u0189\t\u0006\u0002\u0002\u0188\u0187\u0003\u0002",
    "\u0002\u0002\u0189\u018c\u0003\u0002\u0002\u0002\u018a\u0188\u0003\u0002",
    "\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b\u018e\u0003\u0002",
    "\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018d\u018f\u0005o",
    "8\u0002\u018e\u018d\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002",
    "\u0002\u0002\u018f\u01a6\u0003\u0002\u0002\u0002\u0190\u0192\t\u0006",
    "\u0002\u0002\u0191\u0190\u0003\u0002\u0002\u0002\u0192\u0195\u0003\u0002",
    "\u0002\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0193\u0194\u0003\u0002",
    "\u0002\u0002\u0194\u0196\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002",
    "\u0002\u0002\u0196\u0198\u00070\u0002\u0002\u0197\u0199\t\u0006\u0002",
    "\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0199\u019a\u0003\u0002\u0002",
    "\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019a\u019b\u0003\u0002\u0002",
    "\u0002\u019b\u019d\u0003\u0002\u0002\u0002\u019c\u019e\u0005o8\u0002",
    "\u019d\u019c\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002",
    "\u019e\u01a6\u0003\u0002\u0002\u0002\u019f\u01a1\t\u0006\u0002\u0002",
    "\u01a0\u019f\u0003\u0002\u0002\u0002\u01a1\u01a2\u0003\u0002\u0002\u0002",
    "\u01a2\u01a0\u0003\u0002\u0002\u0002\u01a2\u01a3\u0003\u0002\u0002\u0002",
    "\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a6\u0005o8\u0002\u01a5",
    "\u0182\u0003\u0002\u0002\u0002\u01a5\u0193\u0003\u0002\u0002\u0002\u01a5",
    "\u01a0\u0003\u0002\u0002\u0002\u01a6n\u0003\u0002\u0002\u0002\u01a7",
    "\u01a9\u0007`\u0002\u0002\u01a8\u01aa\t\u0004\u0002\u0002\u01a9\u01a8",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa\u01ac",
    "\u0003\u0002\u0002\u0002\u01ab\u01ad\t\u0006\u0002\u0002\u01ac\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01ac",
    "\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01afp",
    "\u0003\u0002\u0002\u0002\u01b0\u01c2\u0007)\u0002\u0002\u01b1\u01b2",
    "\u0007^\u0002\u0002\u01b2\u01c1\u0007p\u0002\u0002\u01b3\u01b4\u0007",
    "^\u0002\u0002\u01b4\u01c1\u0007v\u0002\u0002\u01b5\u01b6\u0007^\u0002",
    "\u0002\u01b6\u01c1\u0007t\u0002\u0002\u01b7\u01b8\u0007^\u0002\u0002",
    "\u01b8\u01c1\u0007^\u0002\u0002\u01b9\u01ba\u0007^\u0002\u0002\u01ba",
    "\u01c1\u00072\u0002\u0002\u01bb\u01bc\u0007^\u0002\u0002\u01bc\u01bd",
    "\t\b\u0002\u0002\u01bd\u01be\t\u0007\u0002\u0002\u01be\u01c1\t\u0007",
    "\u0002\u0002\u01bf\u01c1\n\t\u0002\u0002\u01c0\u01b1\u0003\u0002\u0002",
    "\u0002\u01c0\u01b3\u0003\u0002\u0002\u0002\u01c0\u01b5\u0003\u0002\u0002",
    "\u0002\u01c0\u01b7\u0003\u0002\u0002\u0002\u01c0\u01b9\u0003\u0002\u0002",
    "\u0002\u01c0\u01bb\u0003\u0002\u0002\u0002\u01c0\u01bf\u0003\u0002\u0002",
    "\u0002\u01c1\u01c4\u0003\u0002\u0002\u0002\u01c2\u01c0\u0003\u0002\u0002",
    "\u0002\u01c2\u01c3\u0003\u0002\u0002\u0002\u01c3\u01c5\u0003\u0002\u0002",
    "\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002\u01c5\u01c6\u0007)\u0002",
    "\u0002\u01c6r\u0003\u0002\u0002\u0002\u01c7\u01cb\t\n\u0002\u0002\u01c8",
    "\u01ca\t\u000b\u0002\u0002\u01c9\u01c8\u0003\u0002\u0002\u0002\u01ca",
    "\u01cd\u0003\u0002\u0002\u0002\u01cb\u01c9\u0003\u0002\u0002\u0002\u01cb",
    "\u01cc\u0003\u0002\u0002\u0002\u01cct\u0003\u0002\u0002\u0002\u01cd",
    "\u01cb\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007%\u0002\u0002\u01cf",
    "\u01d0\u0007*\u0002\u0002\u01d0\u01d4\u0003\u0002\u0002\u0002\u01d1",
    "\u01d3\u000b\u0002\u0002\u0002\u01d2\u01d1\u0003\u0002\u0002\u0002\u01d3",
    "\u01d6\u0003\u0002\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d4",
    "\u01d2\u0003\u0002\u0002\u0002\u01d5\u01d7\u0003\u0002\u0002\u0002\u01d6",
    "\u01d4\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007+\u0002\u0002\u01d8",
    "\u01d9\u0007%\u0002\u0002\u01d9\u01da\u0003\u0002\u0002\u0002\u01da",
    "\u01db\b;\u0002\u0002\u01dbv\u0003\u0002\u0002\u0002\u01dc\u01dd\u0007",
    "%\u0002\u0002\u01dd\u01de\u0007&\u0002\u0002\u01de\u01e2\u0003\u0002",
    "\u0002\u0002\u01df\u01e1\n\f\u0002\u0002\u01e0\u01df\u0003\u0002\u0002",
    "\u0002\u01e1\u01e4\u0003\u0002\u0002\u0002\u01e2\u01e0\u0003\u0002\u0002",
    "\u0002\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e3\u01e5\u0003\u0002\u0002",
    "\u0002\u01e4\u01e2\u0003\u0002\u0002\u0002\u01e5\u01e6\b<\u0002\u0002",
    "\u01e6x\u0003\u0002\u0002\u0002\u01e7\u01e9\t\r\u0002\u0002\u01e8\u01e7",
    "\u0003\u0002\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002\u01ea\u01e8",
    "\u0003\u0002\u0002\u0002\u01ea\u01eb\u0003\u0002\u0002\u0002\u01eb\u01ec",
    "\u0003\u0002\u0002\u0002\u01ec\u01ed\b=\u0002\u0002\u01edz\u0003\u0002",
    "\u0002\u0002\u001a\u0002\u0152\u0158\u016d\u0172\u0178\u017d\u017f\u0184",
    "\u018a\u018e\u0193\u019a\u019d\u01a2\u01a5\u01a9\u01ae\u01c0\u01c2\u01cb",
    "\u01d4\u01e2\u01ea\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LuluLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LuluLexer.prototype = Object.create(antlr4.Lexer.prototype);
LuluLexer.prototype.constructor = LuluLexer;

Object.defineProperty(LuluLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

LuluLexer.EOF = antlr4.Token.EOF;
LuluLexer.T__0 = 1;
LuluLexer.T__1 = 2;
LuluLexer.T__2 = 3;
LuluLexer.T__3 = 4;
LuluLexer.T__4 = 5;
LuluLexer.T__5 = 6;
LuluLexer.T__6 = 7;
LuluLexer.T__7 = 8;
LuluLexer.T__8 = 9;
LuluLexer.T__9 = 10;
LuluLexer.T__10 = 11;
LuluLexer.T__11 = 12;
LuluLexer.T__12 = 13;
LuluLexer.T__13 = 14;
LuluLexer.T__14 = 15;
LuluLexer.T__15 = 16;
LuluLexer.T__16 = 17;
LuluLexer.T__17 = 18;
LuluLexer.T__18 = 19;
LuluLexer.T__19 = 20;
LuluLexer.T__20 = 21;
LuluLexer.T__21 = 22;
LuluLexer.T__22 = 23;
LuluLexer.T__23 = 24;
LuluLexer.T__24 = 25;
LuluLexer.T__25 = 26;
LuluLexer.T__26 = 27;
LuluLexer.T__27 = 28;
LuluLexer.T__28 = 29;
LuluLexer.T__29 = 30;
LuluLexer.T__30 = 31;
LuluLexer.T__31 = 32;
LuluLexer.T__32 = 33;
LuluLexer.T__33 = 34;
LuluLexer.T__34 = 35;
LuluLexer.T__35 = 36;
LuluLexer.T__36 = 37;
LuluLexer.T__37 = 38;
LuluLexer.T__38 = 39;
LuluLexer.T__39 = 40;
LuluLexer.T__40 = 41;
LuluLexer.T__41 = 42;
LuluLexer.Multiplicative = 43;
LuluLexer.Unary = 44;
LuluLexer.Additive = 45;
LuluLexer.Relational = 46;
LuluLexer.Equality = 47;
LuluLexer.Bitwise_AND = 48;
LuluLexer.Bitwise_inclusive_OR = 49;
LuluLexer.Logical_AND = 50;
LuluLexer.Logical_OR = 51;
LuluLexer.Bool_const = 52;
LuluLexer.Int_const = 53;
LuluLexer.Real_const = 54;
LuluLexer.Exponent = 55;
LuluLexer.String_const = 56;
LuluLexer.Identifiers = 57;
LuluLexer.Multi_line_Comment = 58;
LuluLexer.Single_Line_Comment = 59;
LuluLexer.WS = 60;

LuluLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LuluLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LuluLexer.prototype.literalNames = [ null, "'{'", "'}'", "';'", "'break'", 
                                     "'continue'", "'destruct'", "'['", 
                                     "']'", "'const'", "','", "'='", "'declare'", 
                                     "'('", "')'", "'type'", "':'", "'private'", 
                                     "'public'", "'protected'", "'.'", "'read'", 
                                     "'write'", "'function'", "'if'", "'else'", 
                                     "'switch'", "'caseof'", "'default'", 
                                     "'for'", "'while'", "'int'", "'float'", 
                                     "'string'", "'bool'", "'this'", "'super'", 
                                     "'!'", "'~'", "'-'", "'+'", "'allocate'", 
                                     "'nil'" ];

LuluLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, "Multiplicative", "Unary", "Additive", 
                                      "Relational", "Equality", "Bitwise_AND", 
                                      "Bitwise_inclusive_OR", "Logical_AND", 
                                      "Logical_OR", "Bool_const", "Int_const", 
                                      "Real_const", "Exponent", "String_const", 
                                      "Identifiers", "Multi_line_Comment", 
                                      "Single_Line_Comment", "WS" ];

LuluLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "T__10", "T__11", "T__12", "T__13", "T__14", 
                                  "T__15", "T__16", "T__17", "T__18", "T__19", 
                                  "T__20", "T__21", "T__22", "T__23", "T__24", 
                                  "T__25", "T__26", "T__27", "T__28", "T__29", 
                                  "T__30", "T__31", "T__32", "T__33", "T__34", 
                                  "T__35", "T__36", "T__37", "T__38", "T__39", 
                                  "T__40", "T__41", "Multiplicative", "Unary", 
                                  "Additive", "Relational", "Equality", 
                                  "Bitwise_AND", "Bitwise_inclusive_OR", 
                                  "Logical_AND", "Logical_OR", "Bool_const", 
                                  "Int_const", "Real_const", "Exponent", 
                                  "String_const", "Identifiers", "Multi_line_Comment", 
                                  "Single_Line_Comment", "WS" ];

LuluLexer.prototype.grammarFileName = "Lulu.g4";



exports.LuluLexer = LuluLexer;
