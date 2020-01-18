import sys
from antlr4 import *
from LuluLexer import LuluLexer
from LuluParser import LuluParser
from LuluListener import LuluListener






def main(argv):

    input_stream = FileStream(argv[1])
    lexer = LuluLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = LuluParser(stream)
    tree = parser.program()
    printer = LuluListener()
    walker = ParseTreeWalker()
    walker.walk(printer, tree)


if __name__ == '__main__':
    main(sys.argv)
