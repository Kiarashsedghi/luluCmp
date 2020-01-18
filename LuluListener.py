# Generated from Lulu.g4 by ANTLR 4.7.2
from antlr4 import *

if __name__ is not None and "." in __name__:
    from .LuluParser import LuluParser
else:
    from LuluParser import LuluParser


class Stack:
    Container = list()

    def push(self, value):
        self.Container.append(value)

    def pop(self):
        return self.Container.pop()

    def top(self):
        temp = self.Container.pop()
        self.Container.append(temp)
        return temp

    def length(self):
        return len(self.Container)


class Scope:
    scope_type = str()
    scope_symt = list()

    def __init__(self, scope_type):
        self.scope_type = scope_type

    def add_en(self, entity):
        self.scope_symt.append(entity)


# This class defines a complete listener for a parse tree produced by LuluParser.
class LuluListener(ParseTreeListener):
    program_stack = None

    def __init__(self):
        self.program_stack = Stack()

    # Enter a parse tree produced by LuluParser#program.
    def enterProgram(self, ctx: LuluParser.ProgramContext):
        pass

    # Exit a parse tree produced by LuluParser#program.
    def exitProgram(self, ctx: LuluParser.ProgramContext):
        pass

    # Enter a parse tree produced by LuluParser#const_val.
    def enterConst_val(self, ctx: LuluParser.Const_valContext):
        pass

    # Exit a parse tree produced by LuluParser#const_val.
    def exitConst_val(self, ctx: LuluParser.Const_valContext):
        pass

    # Enter a parse tree produced by LuluParser#block.
    def enterBlock(self, ctx: LuluParser.BlockContext):
        pass

    # Exit a parse tree produced by LuluParser#block.
    def exitBlock(self, ctx: LuluParser.BlockContext):
        pass

    # Enter a parse tree produced by LuluParser#stmt.
    def enterStmt(self, ctx: LuluParser.StmtContext):
        pass

    # Exit a parse tree produced by LuluParser#stmt.
    def exitStmt(self, ctx: LuluParser.StmtContext):
        pass

    # Enter a parse tree produced by LuluParser#var_def.
    def enterVar_def(self, ctx: LuluParser.Var_defContext):
        pass

    # Exit a parse tree produced by LuluParser#var_def.
    def exitVar_def(self, ctx: LuluParser.Var_defContext):
        pass

    # Enter a parse tree produced by LuluParser#var_val.
    def enterVar_val(self, ctx: LuluParser.Var_valContext):
        pass

    # Exit a parse tree produced by LuluParser#var_val.
    def exitVar_val(self, ctx: LuluParser.Var_valContext):
        pass

    # Enter a parse tree produced by LuluParser#fst_dcl.
    def enterFst_dcl(self, ctx: LuluParser.Fst_dclContext):
        pass

    # Exit a parse tree produced by LuluParser#fst_dcl.
    def exitFst_dcl(self, ctx: LuluParser.Fst_dclContext):
        pass

    # Enter a parse tree produced by LuluParser#func_dcl.
    def enterFunc_dcl(self, ctx: LuluParser.Func_dclContext):
        pass

    # Exit a parse tree produced by LuluParser#func_dcl.
    def exitFunc_dcl(self, ctx: LuluParser.Func_dclContext):
        pass

    # Enter a parse tree produced by LuluParser#dcl_args.
    def enterDcl_args(self, ctx: LuluParser.Dcl_argsContext):
        pass

    # Exit a parse tree produced by LuluParser#dcl_args.
    def exitDcl_args(self, ctx: LuluParser.Dcl_argsContext):
        pass

    # Enter a parse tree produced by LuluParser#type_dcl.
    def enterType_dcl(self, ctx: LuluParser.Type_dclContext):
        pass

    # Exit a parse tree produced by LuluParser#type_dcl.
    def exitType_dcl(self, ctx: LuluParser.Type_dclContext):
        pass

    # Enter a parse tree produced by LuluParser#fst_def.
    def enterFst_def(self, ctx: LuluParser.Fst_defContext):
        pass

    # Exit a parse tree produced by LuluParser#fst_def.
    def exitFst_def(self, ctx: LuluParser.Fst_defContext):
        pass

    # Enter a parse tree produced by LuluParser#type_def.
    def enterType_def(self, ctx: LuluParser.Type_defContext):
        pass

    # Exit a parse tree produced by LuluParser#type_def.
    def exitType_def(self, ctx: LuluParser.Type_defContext):
        pass

    # Enter a parse tree produced by LuluParser#component.
    def enterComponent(self, ctx: LuluParser.ComponentContext):
        pass

    # Exit a parse tree produced by LuluParser#component.
    def exitComponent(self, ctx: LuluParser.ComponentContext):
        pass

    # Enter a parse tree produced by LuluParser#access_modifier.
    def enterAccess_modifier(self, ctx: LuluParser.Access_modifierContext):
        pass

    # Exit a parse tree produced by LuluParser#access_modifier.
    def exitAccess_modifier(self, ctx: LuluParser.Access_modifierContext):
        pass

    # Enter a parse tree produced by LuluParser#func_call.
    def enterFunc_call(self, ctx: LuluParser.Func_callContext):
        pass

    # Exit a parse tree produced by LuluParser#func_call.
    def exitFunc_call(self, ctx: LuluParser.Func_callContext):
        pass

    # Enter a parse tree produced by LuluParser#func_handler.
    def enterFunc_handler(self, ctx: LuluParser.Func_handlerContext):
        pass

    # Exit a parse tree produced by LuluParser#func_handler.
    def exitFunc_handler(self, ctx: LuluParser.Func_handlerContext):
        pass

    # Enter a parse tree produced by LuluParser#params.
    def enterParams(self, ctx: LuluParser.ParamsContext):
        pass

    # Exit a parse tree produced by LuluParser#params.
    def exitParams(self, ctx: LuluParser.ParamsContext):
        pass

    # Enter a parse tree produced by LuluParser#func_def_args.
    def enterFunc_def_args(self, ctx: LuluParser.Func_def_argsContext):
        pass

    # Exit a parse tree produced by LuluParser#func_def_args.
    def exitFunc_def_args(self, ctx: LuluParser.Func_def_argsContext):
        pass

    # Enter a parse tree produced by LuluParser#func_def.
    def enterFunc_def(self, ctx: LuluParser.Func_defContext):
        pass

    # Exit a parse tree produced by LuluParser#func_def.
    def exitFunc_def(self, ctx: LuluParser.Func_defContext):
        pass

    # Enter a parse tree produced by LuluParser#cond_stmt.
    def enterCond_stmt(self, ctx: LuluParser.Cond_stmtContext):
        pass

    # Exit a parse tree produced by LuluParser#cond_stmt.
    def exitCond_stmt(self, ctx: LuluParser.Cond_stmtContext):
        pass

    # Enter a parse tree produced by LuluParser#switch_body.
    def enterSwitch_body(self, ctx: LuluParser.Switch_bodyContext):
        pass

    # Exit a parse tree produced by LuluParser#switch_body.
    def exitSwitch_body(self, ctx: LuluParser.Switch_bodyContext):
        pass

    # Enter a parse tree produced by LuluParser#loop_stmt.
    def enterLoop_stmt(self, ctx: LuluParser.Loop_stmtContext):
        pass

    # Exit a parse tree produced by LuluParser#loop_stmt.
    def exitLoop_stmt(self, ctx: LuluParser.Loop_stmtContext):
        pass

    # Enter a parse tree produced by LuluParser#data_type.
    def enterData_type(self, ctx: LuluParser.Data_typeContext):
        pass

    # Exit a parse tree produced by LuluParser#data_type.
    def exitData_type(self, ctx: LuluParser.Data_typeContext):
        pass

    # Enter a parse tree produced by LuluParser#assign.
    def enterAssign(self, ctx: LuluParser.AssignContext):
        pass

    # Exit a parse tree produced by LuluParser#assign.
    def exitAssign(self, ctx: LuluParser.AssignContext):
        pass

    # Enter a parse tree produced by LuluParser#variable.
    def enterVariable(self, ctx: LuluParser.VariableContext):
        pass

    # Exit a parse tree produced by LuluParser#variable.
    def exitVariable(self, ctx: LuluParser.VariableContext):
        pass

    # Enter a parse tree produced by LuluParser#ref.
    def enterRef(self, ctx: LuluParser.RefContext):
        pass

    # Exit a parse tree produced by LuluParser#ref.
    def exitRef(self, ctx: LuluParser.RefContext):
        pass

    # Enter a parse tree produced by LuluParser#expr.
    def enterExpr(self, ctx: LuluParser.ExprContext):
        pass

    # Exit a parse tree produced by LuluParser#expr.
    def exitExpr(self, ctx: LuluParser.ExprContext):
        pass

    # Enter a parse tree produced by LuluParser#array.
    def enterArray(self, ctx: LuluParser.ArrayContext):
        pass

    # Exit a parse tree produced by LuluParser#array.
    def exitArray(self, ctx: LuluParser.ArrayContext):
        pass
