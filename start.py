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
    compiler_listener= LuluListener()
    compiler_listener.initial_state()
    walker = ParseTreeWalker()
    walker.walk(compiler_listener, tree)


if __name__ == '__main__':
    main(sys.argv)
