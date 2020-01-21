# Generated from Lulu.g4 by ANTLR 4.7.2
from antlr4 import *

if __name__ is not None and "." in __name__:
    from .LuluParser import LuluParser
else:
    from LuluParser import LuluParser

    ##search entity

    Lexer_Dic = {
        16: "Int",
        17: "Float",
        18: "Bool",
        19: "String",

        52: "Bool_const",
        53: "Int_const",
        54: "Real_const",
        56: "String_const",
        57: "Identifiers"

    }


    class Stack:

        def __init__(self):
            self.__Container = list()

        def push(self, value):
            self.__Container.append(value)

        def pop(self):
            return self.__Container.pop()

        def top(self):
            temp = self.__Container.pop()
            self.__Container.append(temp)
            return temp

        def length(self):
            return len(self.__Container)

        def getStack(self):
            return self.__Container


    class Scope:

        def __init__(self, scope_type):
            self.__scopeType = scope_type
            self.__scopeSt = list()

        def get_scope_st(self):
            return self.__scopeSt

        def add_to_scope_st(self, entity):
            self.__scopeSt.append(entity)

        def search_var_in_st(self, var_name):
            for entity in self.__scopeSt:
                if entity.get_entity_type() == "variable" and entity.get_entity_name() == var_name:
                    return entity.get_data_type()
            return None

        def search_func_in_st(self, func_name):
            for entity in self.__scopeSt:
                if entity.get_entity_type() == "function" and entity.get_entity_name() == func_name:
                    return (entity.get_input_params(), entity.get_output_params())

            return None

        def get_scope_type(self):
            return self.__scopeType


    class RootScope(Scope):
        def __init__(self, scopeType):
            super().__init__(scopeType)
            self.__declareSt = list()

        def add_to_declare_st(self, entity):
            self.__declareSt.append(entity)

        def is_exist_entity(self, entity_name):  ##TODO Impelemnet this again
            for entity in self.__declareSt:
                if entity.get_entity_name() == entity_name:
                    return True
            return False

        def search_var_in_dclst(self, var_name):
            for entity in self.__declareSt:
                if entity.get_entity_type() == "variable" and entity.get_entity_name() == var_name:
                    return entity.get_data_type()
            return None

        def search_func_in_dclst(self, func_name):
            for entity in self.__declareSt:
                if entity.get_entity_type() == "function" and entity.get_entity_name() == func_name:
                    return (entity.get_input_params(), entity.get_output_params())

            return None

        def get_declare_St(self):
            return self.__declareSt

        # def show_me_st(self):
        #     for entity in self.__declareSt:
        #         if entity.get_entity_type() == "function":
        #             print(entity.get_entity_name() + "/" + entity.get_entity_type() + "/")
        #         elif entity.get_entity_type() == "variable":
        #             print(
        #                 entity.get_entity_name() + "/" + entity.get_entity_type() + "/" + entity.get_data_type() + "/" + entity.get_data_value())
        #         else:
        #             print(entity.get_entity_name() + "/" + entity.get_entity_type() + "/")

        ##seatch entity


    class Entity:

        def __init__(self, entity_type):
            self.__enType = entity_type
            self.__enName = str()

        def get_entity_type(self):
            return self.__enType

        def set_entity_name(self, entity_name):
            self.__enName = entity_name

        def get_entity_name(self):
            return self.__enName


    class FunctionEntity(Entity):

        def __init__(self, entity_type):
            super().__init__(entity_type)
            self.__inputParams = list()
            self.__outputParams = list()

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

        def __init__(self, entity_type):
            super().__init__(entity_type)
            self.__dataType = str()  ## int float double string
            self.__Value = str()  # TODO  may use in future
            self.__const = False

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

        @staticmethod
        def check_type_assigment(l_type, r_type):
            if "_" in r_type:
                r_type = r_type.split('_')[0]
            if l_type == 'Int':
                if r_type in "Int Bool Identifiers":
                    return True
                return False
            elif l_type == 'Bool':
                if r_type in 'Int Bool':
                    return True
                return False
            elif l_type == 'Float':
                if r_type in 'Float Real Int':
                    return True
                return False
            elif l_type == 'String':
                if r_type in 'String Int ':
                    return True
                return False
            elif l_type == r_type:  ##TODO
                pass

        @staticmethod
        def check_type_conversion(type1, type2):
            if "_" in type1:
                type1 = type1.split('_')[0]
            if "_" in type2:
                type2 = type2.split('_')[0]

            if (type1 == "Bool" and type2 == 'Int') or (type1 == 'Int' and type2 == 'Bool'):
                return True
            elif (type1 == "Int" and type2 == 'Float') or (type1 == 'Float' and type2 == 'Int'):
                return True
            elif (type1 == "Int" and type2 == 'String') or (type1 == 'String' and type2 == 'Int'):
                return True
            elif (type1 == "Int" and type2 == 'Identifiers') or (type1 == 'Identifiers' and type2 == 'Int'):
                return True
            else:
                return False


    class ArrayEntity(Entity):
        def __init__(self, entity_type):
            super().__init__(entity_type)
            self.__dataType = str()  ## int float double string
            self.__Value = str()  # TODO  may use in future
            self.__dimension = list()
            self.__const = False

        def set_data_type(self, data_type):
            self.__dataType = data_type

        def get_data_type(self):
            return self.__dataType

        def set_data_value(self, value):
            self.__Value = value

        def get_data_value(self):
            return self.__Value

        def set_dimension(self, dimension):
            self.__dimension = dimension

        def get_dimension(self):
            return self.__dimension

        def set_is_const(self):
            self.__const = True

        def is_const(self):
            return self.__const

        @staticmethod
        def is_array(ctx):
            if ctx.getChildCount() > 1:
                return True
            return False


    class TypeEntity(Entity):
        pass

    # This class defines a complete listener for a parse tree produced by LuluParser.


# This class defines a complete listener for a parse tree produced by LuluParser.
class LuluListener(ParseTreeListener):

    def __init__(self):
        self.__programStack = Stack()
        self.__typeStack = Stack()

    def initial_state(self):
        root_scope = RootScope('root')

        self.__programStack.push(root_scope)

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
        self.__typeStack.push(Lexer_Dic[ctx.data_type().getChild(0).getSymbol().type])

        pass

    # Exit a parse tree produced by LuluParser#var_def.
    def exitVar_def(self, ctx: LuluParser.Var_defContext):
        self.__typeStack.pop()

        pass

    # Enter a parse tree produced by LuluParser#var_val.
    def enterVar_val(self, ctx: LuluParser.Var_valContext):
        pass

    # Exit a parse tree produced by LuluParser#var_val.
    def exitVar_val(self, ctx: LuluParser.Var_valContext):
        var_name = ctx.ref().Identifiers().getText()

        current_scope = self.__programStack.top()

        current_scope_type = current_scope.get_scope_type()

        if current_scope_type == 'root':
            search_result = current_scope.search_var_in_dclst(var_name)
        else:
            search_result = current_scope.search_var_in_dclst(var_name)

        if search_result == None:
            if ctx.expr()==None and ctx.parentCtx.Const()!=None:
                print("const value should be initialized first")
                exit()
            if ctx.expr() != None:

                '''checking assignment sides have convertible type'''
                rhs_type = self.__typeStack.pop()
                lhs_type = self.__typeStack.pop()

                if not (VariableEntity.check_type_assigment(lhs_type, rhs_type)):
                    print('this is khata for type assigment ', var_name)
                    exit()
                self.__typeStack.push(lhs_type)

            ''' detect if variable is an array '''
            if ArrayEntity.is_array(ctx.ref()):

                newArray=ArrayEntity('array')
                newArray.set_entity_name(var_name)
                newArray.set_data_type(self.__typeStack.top())
                array_dimensions=[]

                ## get
                for dimension in ctx.ref().expr():
                    if (dimension.getText()).isnumeric():
                        array_dimensions.append(int (dimension.getText()))
                    else:
                        array_dimensions.append(None)
                newArray.set_dimension(array_dimensions)

                if ctx.parentCtx.Const() != None:
                    newArray.set_is_const()

                if current_scope_type == 'root':
                    current_scope.add_to_declare_st(newArray)
                else:
                    current_scope.add_to_scope_st(newArray)

            else:
                newVariable = VariableEntity('variable')
                newVariable.set_entity_name(var_name)
                # newVariable.set_data_value() ## We dont need this right now
                var_type = self.__typeStack.top()
                newVariable.set_data_type(var_type)
                if ctx.parentCtx.Const() != None:
                    newVariable.set_is_const()
                if current_scope_type == 'root':
                    current_scope.add_to_declare_st(newVariable)
                else:
                    current_scope.add_to_scope_st(newVariable)



        else:
            print('double declaration of ', var_name, ' detected')
            exit()








    pass

    # Enter a parse tree produced by LuluParser#fst_dcl.
    def enterFst_dcl(self, ctx: LuluParser.Fst_dclContext):
        pass

    # Exit a parse tree produced by LuluParser#fst_dcl.
    def exitFst_dcl(self, ctx: LuluParser.Fst_dclContext):
        print(self.__typeStack.getStack())

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

        type_name = (ctx.Identifiers()).getText()
        root_scope = self.__programStack.top()
        if root_scope.is_exist_entity(type_name):
            root_scope.show_me_st()
            exit()

        newType = TypeEntity('type')
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
        if ctx.getChildCount() > 1:  ## We have array under ref
            array_dimension_size = len(ctx.expr())
            for i in range(array_dimension_size):
                if self.__typeStack.pop()[0] not in "Int_const Int": ## TODO Implement type casting
                    print("array dimension ha ro int bede ")
                    exit()

        pass

    # Enter a parse tree produced by LuluParser#Logical_or_op.
    def enterLogical_or_op(self, ctx: LuluParser.Logical_or_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Logical_or_op.
    def exitLogical_or_op(self, ctx: LuluParser.Logical_or_opContext):
        pass

    # Enter a parse tree produced by LuluParser#sumsub_op.
    def enterSumsub_op(self, ctx: LuluParser.Sumsub_opContext):

        pass

    # Exit a parse tree produced by LuluParser#sumsub_op.
    def exitSumsub_op(self, ctx: LuluParser.Sumsub_opContext):
        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()

        if VariableEntity.check_type_conversion(l_operand_type, r_operand_type):

            if r_operand_type == 'Int':
                pass
        else:
            print('rideyi dada type e jamet doros nis')
            exit()

    # Enter a parse tree produced by LuluParser#Unaryop.
    def enterUnaryop(self, ctx: LuluParser.UnaryopContext):
        pass

    # Exit a parse tree produced by LuluParser#Unaryop.
    def exitUnaryop(self, ctx: LuluParser.UnaryopContext):
        # print(ctx.type)
        pass

    # Enter a parse tree produced by LuluParser#expr_variable.
    def enterExpr_variable(self, ctx: LuluParser.Expr_variableContext):

        pass

    # Exit a parse tree produced by LuluParser#expr_variable.
    def exitExpr_variable(self, ctx: LuluParser.Expr_variableContext):

        variable_name = ctx.variable().ref(0).Identifiers().getText()

        current_scope = self.__programStack.top()

        if current_scope.get_scope_type() == "root":
            search_st_result = current_scope.search_var_in_dclst(variable_name)
        else:
            search_st_result = current_scope.search_var_in_st(variable_name)

        if search_st_result == None:
            print("variable " + variable_name + " Is not declared in this scope")
            exit()
        else:
            self.__typeStack.push(search_st_result)

    # Enter a parse tree produced by LuluParser#expr_funccall.
    def enterExpr_funccall(self, ctx: LuluParser.Expr_funccallContext):

        print(ctx.func_call().func_handler().Identifiers().getText())
        print(ctx.func_call().func_handler().params().getText())

        pass

    # Exit a parse tree produced by LuluParser#expr_funccall.
    def exitExpr_funccall(self, ctx: LuluParser.Expr_funccallContext):
        pass

    # Enter a parse tree produced by LuluParser#Logical_and_op.
    def enterLogical_and_op(self, ctx: LuluParser.Logical_and_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Logical_and_op.
    def exitLogical_and_op(self, ctx: LuluParser.Logical_and_opContext):
        pass

    # Enter a parse tree produced by LuluParser#expr_paranthensis.
    def enterExpr_paranthensis(self, ctx: LuluParser.Expr_paranthensisContext):
        pass

    # Exit a parse tree produced by LuluParser#expr_paranthensis.
    def exitExpr_paranthensis(self, ctx: LuluParser.Expr_paranthensisContext):
        pass

    # Enter a parse tree produced by LuluParser#expr_const_val.
    def enterExpr_const_val(self, ctx: LuluParser.Expr_const_valContext):

        pass

    # Exit a parse tree produced by LuluParser#expr_const_val.
    def exitExpr_const_val(self, ctx: LuluParser.Expr_const_valContext):

        ## TODO  STring_const has problem
        self.__typeStack.push(Lexer_Dic[ctx.const_val().getChild(0).getSymbol().type])

    # Enter a parse tree produced by LuluParser#expr_array.
    def enterExpr_array(self, ctx: LuluParser.Expr_arrayContext):
        pass

    # Exit a parse tree produced by LuluParser#expr_array.
    def exitExpr_array(self, ctx: LuluParser.Expr_arrayContext):
        pass

    # Enter a parse tree produced by LuluParser#Allocate_func.
    def enterAllocate_func(self, ctx: LuluParser.Allocate_funcContext):
        pass

    # Exit a parse tree produced by LuluParser#Allocate_func.
    def exitAllocate_func(self, ctx: LuluParser.Allocate_funcContext):
        pass

    # Enter a parse tree produced by LuluParser#Multiplicative_op.
    def enterMultiplicative_op(self, ctx: LuluParser.Multiplicative_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Multiplicative_op.
    def exitMultiplicative_op(self, ctx: LuluParser.Multiplicative_opContext):
        pass

    # Enter a parse tree produced by LuluParser#Eqaulity_op.
    def enterEqaulity_op(self, ctx: LuluParser.Eqaulity_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Eqaulity_op.
    def exitEqaulity_op(self, ctx: LuluParser.Eqaulity_opContext):
        pass

    # Enter a parse tree produced by LuluParser#expr_nil.
    def enterExpr_nil(self, ctx: LuluParser.Expr_nilContext):
        pass

    # Exit a parse tree produced by LuluParser#expr_nil.
    def exitExpr_nil(self, ctx: LuluParser.Expr_nilContext):
        pass

    # Enter a parse tree produced by LuluParser#Relational_op.
    def enterRelational_op(self, ctx: LuluParser.Relational_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Relational_op.
    def exitRelational_op(self, ctx: LuluParser.Relational_opContext):
        pass

    # Enter a parse tree produced by LuluParser#Bitwise_inclusive_or_op.
    def enterBitwise_inclusive_or_op(self, ctx: LuluParser.Bitwise_inclusive_or_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Bitwise_inclusive_or_op.
    def exitBitwise_inclusive_or_op(self, ctx: LuluParser.Bitwise_inclusive_or_opContext):
        pass

    # Enter a parse tree produced by LuluParser#Bitwise_and_op.
    def enterBitwise_and_op(self, ctx: LuluParser.Bitwise_and_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Bitwise_and_op.
    def exitBitwise_and_op(self, ctx: LuluParser.Bitwise_and_opContext):
        pass

    # Enter a parse tree produced by LuluParser#array.
    def enterArray(self, ctx: LuluParser.ArrayContext):
        pass

    # Exit a parse tree produced by LuluParser#array.
    def exitArray(self, ctx: LuluParser.ArrayContext):
        pass
