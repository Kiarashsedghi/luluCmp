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
    __scopeType = str()
    __scopeSt = list()

    def __init__(self, scope_type):
        self.__scopeType = scope_type

    def add_entity(self, entity):
        self.__scopeSt.append(entity)

    def set_scope_type(self, scope_type):
        self.__scopeType = scope_type

    def get_scope_type(self):
        return self.__scopeType

    ##search entity


class RootScope(Scope):
    __declareSt = list()

    def add_to_declare_st(self, entity):
        self.__declareSt.append(entity)

    def is_exist_entity(self,entity_name):
        for entity in self.__declareSt:
            if entity.get_entity_name() == entity_name:
                return True
        return False

    def get_declare_St(self):
        return self.__declareSt

    def show_me_st(self):
        for entity in self.__declareSt :
            if entity.get_entity_type()=="function":
                print(entity.get_entity_name()+"/"+entity.get_entity_type()+"/")
            elif entity.get_entity_type()=="variable":
                print(entity.get_entity_name()+"/"+entity.get_entity_type()+"/"+entity.get_data_type()+"/"+entity.get_data_value())
            else:
                print(entity.get_entity_name()+"/"+entity.get_entity_type()+"/")


    ##seatch entity


class Entity:
    __enType = str()
    __enName = str()

    def __init__(self, entity_type):
        self.__enType = entity_type

    def get_entity_type(self):
        return self.__enType

    def set_entity_name(self,entity_name):
        self.__enName = entity_name

    def get_entity_name(self):
        return self.__enName





class FunctionEntity(Entity):
    __inputParams = list()
    __outputParams = list()

    def checksignature(self, inputparams, outputparams):
        pass

    def set_input_params(self, inputparams):
        self.__inputParams = inputparams

    def set_output_params(self, outputparams):
        self.__outputParams = outputparams

    def get_input_params(self):
        return self.__inputParams

    def get_output_params(self):
        return self.__outputParams


class VariableEntity(Entity):
    __dataType = str()  ## int float double string
    __Value = str()  # TODO  may use in future
    __const = False

    def set_data_type(self, data_type):
        self.__dataType = data_type

    def get_data_type(self):
        return self.__dataType

    def set_data_value(self, value):
        self.__Value = value

    def get_data_value(self):
        return self.__Value
    def set_is_const(self):
        self.__const = True
    def is_const(self):
        return self.__const



class TypeEntity(Entity):
    pass


# This class defines a complete listener for a parse tree produced by LuluParser.
class LuluListener(ParseTreeListener):

    def __init__(self):
        self.programStack = Stack()

    def initial_state(self):
        root_scope = RootScope('root')
        self.programStack.push(root_scope)

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

        ## this implementation is for declare :
        pass










    # Exit a parse tree produced by LuluParser#var_def.
    def exitVar_def(self, ctx: LuluParser.Var_defContext):
        pass

    # Enter a parse tree produced by LuluParser#var_val.
    def enterVar_val(self, ctx: LuluParser.Var_valContext):
        print(ctx.expr())
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
        type_name=(ctx.Identifiers()).getText()
        root_scope=self.programStack.top()
        if root_scope.is_exist_entity(type_name):
            root_scope.show_me_st()
            exit()

        newType=TypeEntity('type')
        newType.set_entity_name(type_name)
        root_scope.add_to_declare_st(newType)


























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
