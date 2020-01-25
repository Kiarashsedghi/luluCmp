# Generated from Lulu.g4 by ANTLR 4.7.2
from antlr4 import *
import re
import utils as util
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
        54: "Float",
        56: "String_const",
        57: "Identifiers"

    }

    Rule_Dic = {
        0 : 'program',
        1 : 'const_val',
        2: 'block',
        3 :'stmt' ,
        4: 'var_def' ,
        5 : 'var_val' ,
        6 : 'fst_dcl',
        7:'func_dcl',
        8 : 'dcl_args',
        9 :'type_dcl',
        10 :'fst_def',

        11: "type_def",
        12 :'component',
        13 :'access_modifier',
        14 :'func_call',
        15 : 'func_handler' ,
        16 :'params',
        17 :'func_def_args',
        18 :'func_def',
        19 : 'cond_stmt',
        20 :'switch_body',
        21 : 'loop_stmt',
        22 :'data_type',
        23 :'assign',
        24 : 'variable',
        25 : 'ref',
        26 : 'expr',
        27 :'array'

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
        def is_empty(self):
            if len(self.__Container)==0:
                return True
            return False

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
                    return (entity.get_data_type(),entity.is_const(),entity.get_entity_name(),False,None,entity.get_accessModifier())

                elif entity.get_entity_type() == "array" and entity.get_entity_name() == var_name:
                    return (entity.get_data_type(),entity.is_const(),entity.get_entity_name(),True,entity.get_dimension(),entity.get_accessModifier())

            return None

        def search_func_in_st(self, func_signature):

            for entity in self.__scopeSt:
                if entity.get_entity_type() == "function" :
                    #TODO creat get_function_signature
                    if FunctionEntity.checksignature(func_signature,(entity.get_entity_name(),entity.get_input_params(),entity.get_output_params())):
                        return (entity.get_input_params(), entity.get_output_params())

            return None




        # def search_func_in_st(self, func_name):
        #     for entity in self.__scopeSt:
        #         if entity.get_entity_type() == "function" and entity.get_entity_name() == func_name:
        #             return (entity.get_input_params(), entity.get_output_params())
        #
        #     return None

# NEW
        def search_fcall_sig_in_st(self, fcall_signature):
            '''this function will return output signature of all
            functions which match the fcall signature
            '''

            list_functions = list()
            for entity in self.__scopeSt:
                if entity.get_entity_type() == "function" and \
                        FunctionEntity.check_fcall_signature(fcall_signature,
                                                             (entity.get_entity_name(), entity.get_input_params())):
                    list_functions.append(entity.get_output_params)

            return list_functions

        def get_scope_type(self):
            return self.__scopeType


    class RootScope(Scope):
        def __init__(self, scopeType):
            super().__init__(scopeType)
            self.__declareSt = list()
            self.__mainctx = list()

        def add_to_declare_st(self, entity):
            self.__declareSt.append(entity)

        def add_to_main_context(self,entity):
            self.__mainctx.append(entity)


        

        def search_class_in_mainctx(self, class_name):
            for entity in self.__mainctx:
                if entity.get_entity_type() == "class" and entity.get_entity_name() == class_name:
                    return (entity.get_entity_name())
            return None

        def search_func_in_mainctx(self, func_signature):

            for entity in self.__mainctx:
                if entity.get_entity_type() == "function" :
                    #TODO creat get_function_signature
                    if FunctionEntity.checksignature(func_signature,(entity.get_entity_name(),entity.get_input_params(),entity.get_output_params())):
                        return (entity.get_input_params(), entity.get_output_params())

            return None

        def search_func_in_dclst2(self, func_signature):

            for entity in self.__declareSt:
                if entity.get_entity_type() == "function":
                    # TODO creat get_function_signature
                    if FunctionEntity.checksignature(func_signature, (
                    entity.get_entity_name(), entity.get_input_params(), entity.get_output_params())):
                        return (entity.get_input_params(), entity.get_output_params())

            return None

        # NEW
        def search_fcall_sig_in_dclst(self, fcall_signature):
            '''this function will return output signature of all
            functions which match the fcall signature
            '''

            list_functions = list()
            for entity in self.__declareSt:

                if entity.get_entity_type() == "function" and \
                        FunctionEntity.check_fcall_signature(fcall_signature,
                                                             (entity.get_entity_name(), entity.get_input_params())):
                    list_functions.append(entity.get_output_params())
            return list_functions

        # NEW
        def search_fcall_sig_in_mainctx(self, fcall_signature):
            '''this function will return output signature of all
            functions which match the fcall signature
            '''

            list_functions = list()
            for entity in self.__mainctx:
                if entity.get_entity_type() == "function" and \
                        FunctionEntity.check_fcall_signature(fcall_signature,
                                                             (entity.get_entity_name(), entity.get_input_params())):
                    list_functions.append(entity.get_output_params)

            return list_functions

        def get_mainctx(self):
            return self.__mainctx


        def is_exist_entity(self, entity_name):  ##TODO Impelemnet this again
            for entity in self.__declareSt:
                if entity.get_entity_name() == entity_name:
                    return True
            return False

        def search_var_in_dclst(self, var_name):
            for entity in self.__declareSt:
                if entity.get_entity_type() == "variable" and entity.get_entity_name() == var_name:

                    return (entity.get_data_type(),entity.is_const(), entity.get_entity_name(), False, None,entity.get_accessModifier())
                elif entity.get_entity_type() == "array" and entity.get_entity_name() == var_name:
                    return (entity.get_data_type(),entity.is_const(), entity.get_entity_name(), True, entity.get_dimension(),entity.get_accessModifier())

            return None

        def search_func_in_dclst(self, func_name):
            for entity in self.__declareSt:
                if entity.get_entity_type() == "function" and entity.get_entity_name() == func_name:
                    return (entity.get_input_params(), entity.get_output_params())

            return None

        def get_declare_St(self):
            return self.__declareSt

        def set_class_entity_is_defined (self , class_name ) :
            for entity in self.__mainctx:
                if entity.get_entity_type() =='class' and  entity.get_entity_name() == class_name:
                    entity.set_is_defined ()



        def set_func_entity_is_defined (self , func_signature):
            pass




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

#Change
    class FunctionEntity(Entity):

        def __init__(self, entity_type):
            super().__init__(entity_type)
            self.__inputParams = list()
            self.__outputParams = list()
            self.__isdefined = False             # helps for not clearing mainctx
            self.__accessModifier = 'private'

        def set_accessModifier(self, accessModifier):
            self.__accessModifier = accessModifier

        def get_accessModifier(self):
            return self.__accessModifier

        def set_is_defined(self):
            self.__isdefined=True

        def is_defined(self):
            return self.__isdefined

        @staticmethod
        def checksignature(signature1, signature2):
            for i in range(3):
                if signature1[i]!=signature2[i]:
                    return False
            return True

        @staticmethod
        def check_fcall_signature(signature1, signature2):



            for i in range(2):
                if signature1[i] != signature2[i]:
                    return False
            return True





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
            self.__accessModifier = 'private'

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
        def set_accessModifier(self , accessModifier):
            self.__accessModifier = accessModifier
        def get_accessModifier(self):
            return self.__accessModifier

        @staticmethod
        def check_type_assigment(l_type, r_type):

            if "_" in r_type:
                r_type = r_type.split('_')[0]
                if r_type == 'Real' :
                    r_type ='Float'


            if l_type == r_type:
                return True
            if not r_type in "Int Float Bool String" :
                r_type = 'Identifiers'
            if not l_type in "Int Float Bool String":
                l_type = 'Identifiers'

            elif l_type == 'Int':
                if r_type in "Int Bool Identifiers":
                    return True
                return False
            elif l_type == 'Bool':
                if r_type in 'Int Bool':
                    return True
                return False
            elif l_type == 'Float':
                if r_type in 'Float Int Bool Identifiers':
                    return True
                return False
            elif l_type == 'String':
                if r_type in 'String Int Bool Identifiers':
                    return True
                return False





        @staticmethod
        def check_type_conversion(operator,type1, type2 = None):

            if "_" in type1:
                type1 = type1.split('_')[0]
                if type1 == 'Real':
                    type1 = 'Float'
            if type2!=None and "_" in type2:
                type2 = type2.split('_')[0]
                if type2 == 'Real' :
                    type2 ='Float'


            if type1 not in "Bool Float Int String" :
                type1 = 'Identifiers'
            if type2!=None and type2 not in "Bool Float Int String":
                    type2 = 'Identifiers'





            if operator == '+' or operator =='-' or operator =='*' or operator == '/' or operator== '%':

                if (type1=='Int' and type2=='Int') :
                    return 'Int'
                elif (type1=='Float' and type2=='Float') :
                    return 'Float'
                elif (type1=='String' and type2=='String') :
                    return 'String'
                elif (type1=='Bool' and type2=='Bool') :
                    return 'Int'
                elif (type1 == "Bool" and type2 == 'Int') or (type1 == 'Int' and type2 == 'Bool'):
                    return 'Int'
                elif (type1 == "Int" and type2 == 'Float') or (type1 == 'Float' and type2 == 'Int'):
                    return 'Float'
                elif (type1 == "Int" and type2 == 'String') or (type1 == 'String' and type2 == 'Int'):
                    return 'String'
                elif (type1 == "Bool" and type2 == 'String') or (type1 == 'String' and type2 == 'Bool'):
                    return 'String'
                elif (type1 == "Bool" and type2 == 'Float') or (type1 == 'Float' and type2 == 'Bool'):
                    return 'Float'
                elif (type1 == 'Float'  ) and type2 ==None :
                    return 'Float'
                elif (type1 == 'Int' or type1 == 'Bool') and type2 ==None:
                    return 'Int'
                else:
                    return None



            elif operator =='>=' or operator =='<=' or operator == '<' or operator =='>' or operator =='==' or operator =='!=' :

                if type1 == 'Int' and type2 =='Int' :
                    return 'Bool'
                elif type1 == 'Float' and type2 =='Float' :
                    return 'Bool'
                elif type1 == 'String' and type2 =='String' :
                    return 'Bool'
                elif type1 == 'Bool' and type2 =='Bool' :
                    return 'Bool'
                elif (type1 == "Bool" and type2 == 'Int') or (type1 == 'Int' and type2 == 'Bool'):
                    return 'Bool'
                elif (type1 == "Int" and type2 == 'Float') or (type1 == 'Float' and type2 == 'Int'):
                    return 'Bool'
                elif (type1 == "Int" and type2 == 'String') or (type1 == 'String' and type2 == 'Int'):
                    return 'Bool'
                elif (type1 == "Bool" and type2 == 'String') or (type1 == 'String' and type2 == 'Bool'):
                    return 'Bool'
                elif (type1 == "Bool" and type2 == 'Float') or (type1 == 'Float' and type2 == 'Bool'):
                    return 'Bool'
                else:
                    return None



            elif operator == '||' or operator =='&&' or operator == '!':

                if(type1 == 'Int' and type2 == 'Int'):
                    return 'Bool'
                elif(type1 == 'Bool' and type2 == 'Bool'):
                    return 'Bool'
                elif(type1 == 'Identifiers' and type2 == 'Identifiers'):
                    return 'Bool'
                elif (type1 == 'Bool' and type2 == 'Int') or (type1 =='Int' and type2 =='Bool') :
                    return 'Bool'
                elif (type1 == 'Bool' and type2 == 'Identifiers') or (type1 =='Identifiers' and type2 =='Bool') :
                    return 'Bool'
                elif (type1 =='Bool' or type1=='Int' or type1=='Identifiers' ) and type2 == None :
                    return 'Bool'
                else:
                    return None


            elif operator =='|' or operator =='&' or operator =='~' :

                if (type1 == 'Int' and type2 =='Int'):
                    return 'Int'
                elif (type1 == 'Bool' and type2 =='Bool'):
                    return 'Int'
                elif (type1 == 'Identifiers' and type2 =='Identifiers'):
                    return 'Int'
                elif (type1 == 'Bool' or type1 =='Int' or type1 == 'Identifiers') and type2 ==None :
                    return 'Int'
                elif (type1  == 'Bool' and type2=='Int' ) or (type1 == 'Int' and type2=='Int') :
                    return 'int'
                elif (type1 == 'Identifiers' and type2 =='Int') or (type1 == 'Int' and type2=='Identifiers') :
                    return 'Int'
                else:
                    return None




## Changes
    class ArrayEntity(Entity):
        def __init__(self, entity_type):
            super().__init__(entity_type)
            self.__dataType = str()  ## int float double string
            self.__Value = str()  # TODO  may use in future
            self.__dimension = list()
            self.__const = False
            self.__accessModifier = 'private'


        def set_accessModifier(self , accessModifier):
            self.__accessModifier = accessModifier
        def get_accessModifier(self):
            return self.__accessModifier



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
            '''
            Check if this ctx contains array variable int x[][]
            '''
            if ctx.getChildCount() > 1:
                return True
            return False


    class ClassEntity(Entity):
        def __init__(self, entity_type):
            super().__init__(entity_type)
            self.__parentClassName= None
            self.__isdefined=False
            self.__parentPtr = 0
            self.__classScope= 0

        def is_defined(self):
            return self.__isdefined

        def set_is_defined(self):
            self.__isdefined = True
        def set_parentClassName(self, parentName):
            self.__parentClassName = parentName
        def get_parentClassName(self):
            return self.__parentClassName

        def set_parentPtr(self,parent_ptr):
            self.__parentPtr=parent_ptr
        def get_parentPtr(self):
            return self.__parentPtr


        def set_class_scope(self, class_scope):
            self.__classScope = class_scope


        def get_class_scope(self):
          return self.__classScope

    # This class defines a complete listener for a parse tree produced by LuluParser.


# This class defines a complete listener for a parse tree produced by LuluParser.
class LuluListener(ParseTreeListener):

    def __init__(self):
        self.__programStack = Stack()
        self.__typeStack = Stack()
        self.__arrayType = str()
        self.__func_dcl_ip = str()
        self.__func_dcl_op = str()
        self.__func_call_ip = str()
        self.__func_def_params=str()  ## For generating function siganture from func_def tree
        '''when we have array in rhs of an assignment and we want types of all elements in array
        not in form of  [[float],int]
        '''
        self.__assign_rhs_array = list()

    def initial_state(self):
        root_scope = RootScope('root')
        self.__programStack.push(root_scope)

    def future_look(self, l):

        inputpar = str()
        outputpar = str()

        if len(l) == 2:
            result = (self.__programStack.top()).search_func_in_mainctx((l[-1], None, None))
            if result == None:
                newFunction = FunctionEntity("function")

                newFunction.set_input_params(None)
                newFunction.set_output_params(None)
                newFunction.set_entity_name(l[-1])

                self.__programStack.top().add_to_main_context(newFunction)

            else:
                open("./prg_functions", 'w').close()
                print("Double definition of function " + l[-1])
                exit()


        elif l[-2].startswith("function"):
            '''first check if ip parameters are not similar'''
            inside_curly_braces = (l[-2][l[-2].index("(") + 1:l[-2].index(")")]).split(",")

            list_ip_params = []
            for i in range(l.index("&&")):
                list_ip_params.append(inside_curly_braces[i].strip(l[i]).strip("[]"))



            if l[-1] in list_ip_params :
                print("Input Parameters should not have similar name with function name")
                exit()




            if (list_ip_params.count(list_ip_params[0]) == len(list_ip_params)) and len(list_ip_params)!=1:
                print("Input parameters of function '" + l[-1]+"' "  + "should not have same name")
                exit()






            x = (l[-2][:l[-2].index("{")])
            q = (x.split(","))
            for i in range(l.index("&&")):
                inputpar += l[i] + str(q[i].count("[]"))
            result = (self.__programStack.top()).search_func_in_mainctx((l[-1], inputpar, None))
            if result == None:
                newFunction = FunctionEntity("function")

                newFunction.set_input_params(inputpar)
                newFunction.set_output_params(None)
                newFunction.set_entity_name(l[-1])

                self.__programStack.top().add_to_main_context(newFunction)

            else:
                open("./prg_functions", 'w').close()
                print("Double definition of function " + l[-1])
                exit()


        else:
            '''first check if op parameters are not similar'''

            a_p = l[-2].split("=")
            part_output = (a_p[0][a_p[0].index("(") + 1:a_p[0].index(")")]).split(",")

            part_input = (a_p[1][a_p[1].index("(") + 1:a_p[1].index(")")]).split(",")

            input_parameter_types = l[l.index("&&") + 1:-3]

            list_ip_params = []
            list_op_params = []
            for i in range(l.index("&&")):
                list_op_params.append((part_output[i].replace(l[i], "")).replace("[]", ""))

            for i in range(len(input_parameter_types)):
                list_ip_params.append((part_input[i].replace(input_parameter_types[i], "")).replace("[]", ""))

            if l[-1] in list_ip_params :
                print("Input Parameters should not have similar name with function name")
                exit()

            if l[-1] in list_op_params :
                print("Output Parameters should not have similar name with function name")
                exit()

            if (list_op_params.count(list_op_params[0]) == len(list_op_params)) and len(list_op_params) != 1:
                print("output parameters of function '" + l[-1] + "' should not be same")
                exit()
            # elif (list_ip_params.count(list_ip_params[0]) == len(list_ip_params)) and len(list_ip_params) != 1:
            #     print("input parameters of function '" + l[-1] + "' should not be same")
            #     exit()

            for input_parameter in list_ip_params:
                if input_parameter in list_op_params:
                    print("Function '" + l[
                        -1] + " ' shares input parameter '" + input_parameter + "' with output parameters")
                    exit()



            x = (l[-2][:l[-2].index("{")])
            q = (x.split("=")[0].split(","))
            q1 = (x.split("=")[1].split(","))
            for i in range(l.index("&&")):
                outputpar += l[i] + str(q[i].count("[]"))

            for i in range(l.index("&&") + 1, len(l) - 3):
                inputpar += l[i] + str(q1[i - l.index(("&&")) - 1].count("[]"))

            if inputpar == '':
                inputpar = None
            if outputpar == '':
                outputpar = None

            result = (self.__programStack.top()).search_func_in_mainctx((l[-1], inputpar, outputpar))
            if result == None:
                newFunction = FunctionEntity("function")

                newFunction.set_input_params(inputpar)
                newFunction.set_output_params(outputpar)
                newFunction.set_entity_name(l[-1])
                self.__programStack.top().add_to_main_context(newFunction)

            else:
                open("./prg_functions", 'w').close()
                print("Double definition of function " + l[-1])
                exit()


    # Enter a parse tree produced by LuluParser#program.
    def enterProgram(self, ctx: LuluParser.ProgramContext):




        root_scope=self.__programStack.top()

        '''checking existance of function start'''

        start_function_signature=("start",None,'int0')

        search_result=root_scope.search_func_in_mainctx(start_function_signature)


        if search_result==None:
            print("Program does not include 'start' function")
            exit()



        for i in range(len(ctx.fst_def())):

            '''check type definition'''
            if Rule_Dic[ctx.fst_def(i).getChild(0).getRuleIndex()]=="type_def":
                '''ud_class_name : user defined class name'''
                ud_class_name = (ctx.fst_def(i).getChild(0).Identifiers(0).getText())
                if root_scope.search_class_in_mainctx(ud_class_name) != None :
                    print("Double declaration of type '",ud_class_name, "'")
                    exit()
                else:
                    newClass=ClassEntity("class")
                    newClass.set_entity_name(ud_class_name)
                    root_scope.add_to_main_context(newClass)

    # Exit a parse tree produced by LuluParser#program.
    def exitProgram(self, ctx: LuluParser.ProgramContext):
        # TODO  Cehck function declaration at the end of the program

        pass

    # Enter a parse tree produced by LuluParser#const_val.
    def enterConst_val(self, ctx: LuluParser.Const_valContext):
        pass

    # Exit a parse tree produced by LuluParser#const_val.
    def exitConst_val(self, ctx: LuluParser.Const_valContext):
        pass

    # Enter a parse tree produced by LuluParser#block.
    def enterBlock(self, ctx: LuluParser.BlockContext):

        '''check if parent of block is a loop or condition statement , we have to check condition of statement
        at the begining of block , before we generate new SymbolTabel ^-^'''
        if Rule_Dic[ctx.parentCtx.getRuleIndex()] == 'loop_stmt' :
            final_type = self.__typeStack.pop()
            if not VariableEntity.check_type_assigment('Bool' ,final_type) :
                print("loop statement condition '" +ctx.parentCtx.expr().getRuleContext().getText()+"' can not be convert to Bool")
                exit()
        elif Rule_Dic[ctx.parentCtx.getRuleIndex()] == 'cond_stmt' :
            final_type = self.__typeStack.pop()
            if ctx.parentCtx.If() != None:
                if not VariableEntity.check_type_assigment('Bool' ,final_type):
                    print("if statement condition '"+ctx.parentCtx.expr().getRuleContext().getText()+"' can not be convert to Bool")
                    exit()
            else: #we have switch statement
                if not VariableEntity.check_type_assigment('Int' ,final_type):
                    print("if statement condition '"+ctx.parentCtx.expr().getRuleContext().getText()+"' can not be convert to Int")
                    exit()

        '''function definition in type def'''
        if Rule_Dic[ctx.parentCtx.getRuleIndex()] == 'func_def' and (self.__programStack.top()).get_scope_type()!="root" :


            function_name = ctx.parentCtx.Identifiers().getText()
            func_op_signature = ""
            func_ip_signature = ""
            func_ip_params_name=list()
            func_op_params_name=list()
            func_ip_params_type=list()
            func_op_params_type=list()


            current_scope = self.__programStack.top()


            if (len(ctx.parentCtx.func_def_args())) == 2:

                a = self.__func_def_params

                splitted = (a.split("&")[:-1])

                input_signature = splitted[0].split("^")
                output_signature = splitted[1].split("^")

                x_op = (input_signature[1:])
                x_ip = (output_signature[1:])

                ## function signature:


                for i in range(len(x_op)):
                    if i % 2 == 0:
                        func_op_signature += x_op[i]
                        func_op_params_type.append(x_op[i])
                    else:
                        func_op_params_name.append(x_op[i])

                for i in range(len(x_ip)):
                    if i % 2 == 0:
                        func_ip_signature += x_ip[i]
                        func_ip_params_type.append(x_ip[i])
                    else:
                        func_ip_params_name.append(x_ip[i])


                if (func_ip_params_name.count(func_ip_params_name[0]) == len(func_ip_params_name)) and len(func_ip_params_name)!=1:
                    print("Input parameters of function '" + function_name+"' "  + "should not have same name")
                    exit()

                if (func_op_params_name.count(func_op_params_name[0]) == len(func_op_params_name)) and len(func_op_params_name)!=1:
                    print("Input parameters of function '" + function_name+"' "  + "should not have same name")
                    exit()



                result = current_scope.search_func_in_st((function_name, func_ip_signature, func_op_signature))
                if result != None:
                    print("Multi definition function '"+function_name+"' in this  scope")
                    exit()


                if function_name in x_ip:
                    print("Input Parameters should not have similar name with function name")
                    exit()
                if function_name in x_op:
                    print("Output Parameters should not have similar name with function name")
                    exit()

                '''adding input parameters to scope function'''


            elif (len(ctx.parentCtx.func_def_args())) == 1:
                current_scope=self.__programStack.top()
                if ctx.parentCtx.getChild(0).getText()=="function":
                    a = self.__func_def_params

                    splitted = (a.split("&")[:-1])

                    input_signature = splitted[0].split("^")
                    x_ip = (input_signature[1:])

                    for i in range(len(x_ip)):
                        if i % 2 == 0:
                            func_ip_signature += x_ip[i]
                            func_ip_params_type.append(x_ip[i])
                        else:
                            func_ip_params_name.append(x_ip[i])

                    if (func_ip_params_name.count(func_ip_params_name[0]) == len(func_ip_params_name)) and len(
                            func_ip_params_name) != 1:
                        print("Input parameters of function '" + function_name + "' " + "should not have same name")
                        exit()



                    result = current_scope.search_func_in_st((function_name, func_ip_signature, None))
                    if result != None:
                        print("Multi definition function '" + function_name + "' in this  scope")
                        exit()
                    if function_name in x_ip:
                        print("Input Parameters should not have similar name with function name")
                        exit()



                else:
                    a = self.__func_def_params

                    splitted = (a.split("&")[:-1])

                    output_signature = splitted[0].split("^")

                    x_op = (output_signature[1:])


                    ## function signature:



                    for i in range(len(x_op)):
                        if i % 2 == 0:
                            func_op_signature += x_op[i]
                            func_op_params_type.append(x_op[i])
                        else:
                            func_op_params_name.append(x_op[i])

                    if (func_op_params_name.count(func_op_params_name[0]) == len(func_op_params_name)) and len(
                            func_op_params_name) != 1:
                        print("Output parameters of function '" + function_name + "' " + "should not have same name")
                        exit()



                    result = current_scope.search_func_in_st((function_name, None, func_op_signature))
                    if result != None:
                        print("Multi definition function '" + function_name + "' in this scope")
                        exit()

                    if function_name in x_op:
                        print("Output Parameters should not have similar name with function name")
                        exit()



            elif (len(ctx.parentCtx.func_def_args())) == 0:
                result = current_scope.search_func_in_st((function_name, None, None))
                if result != None:
                    print("Multi definition function '"+function_name+"' in this  scope")
                    exit()




            '''to make empty ip/op params to None value'''
            if func_ip_signature == "":
                func_ip_signature=None
            if func_op_signature == "":
                func_op_signature=None






            newFunction = FunctionEntity("function")
            newFunction.set_entity_name(function_name)
            newFunction.set_input_params(func_ip_signature)
            newFunction.set_output_params(func_op_signature)

            '''checking if it has access modifier'''
            if ctx.parentCtx.parentCtx.access_modifier():
                newFunction.set_accessModifier(ctx.parentCtx.parentCtx.access_modifier().getText())
            current_scope.add_to_scope_st(newFunction)


            self.__func_def_params = ""




            newFuncScope = Scope('function')

            '''adding input parameters to function scope'''




            if len(func_ip_params_name)!=0:
                for  i in range(len(func_ip_params_name)):
                    if (func_ip_params_type[i])[-1] == "0"   :    # it is a variable
                        newVaraible=VariableEntity("variable")
                        newVaraible.set_entity_name(func_ip_params_name[i])
                        newVaraible.set_data_type((func_ip_params_type[i][0:-1]).capitalize())
                        newFuncScope.add_to_scope_st(newVaraible)

                    else:
                        newArray=ArrayEntity("array")
                        newArray.set_entity_name(func_ip_params_name[i])
                        newArray.set_data_type((func_ip_params_type[i][0:-1]).capitalize())
                        newArray.set_dimension([None]*int(func_ip_params_type[i][-1]))
                        newFuncScope.add_to_scope_st(newArray)

            if len(func_op_params_name)!=0:
                for  i in range(len(func_op_params_name)):
                    if (func_op_params_name[i])[-1] == "0"   :    # it is a variable
                        newVaraible=VariableEntity("variable")
                        newVaraible.set_entity_name(func_op_params_name[i])
                        newVaraible.set_data_type((func_op_params_type[i][0:-1]).capitalize())
                        newFuncScope.add_to_scope_st(newVaraible)

                    else:
                        newArray=ArrayEntity("array")
                        newArray.set_entity_name(func_op_params_name[i])
                        newArray.set_data_type((func_op_params_type[i][0:-1]).capitalize())
                        newArray.set_dimension([None]*int(func_op_params_type[i][-1]))
                        newFuncScope.add_to_scope_st(newArray)



            self.__programStack.push(newFuncScope)


        elif (Rule_Dic[ctx .parentCtx.getRuleIndex()] == 'loop_stmt' or  Rule_Dic[ctx .parentCtx.getRuleIndex()] == 'cond_stmt') and ctx.parentCtx.getChild(0).getText()!='for':
            # print(ctx.parentCtx.getChild(0).getText())
            newRegularScope = Scope('regular')
            self.__programStack.push(newRegularScope)


    def exitBlock(self, ctx: LuluParser.BlockContext):
        if (self.__programStack.top()).get_scope_type()!="root":
            self.__programStack.pop()

    # Enter a parse tree produced by LuluParser#stmt.
    def enterStmt(self, ctx: LuluParser.StmtContext):

        if ctx.Break() != None :
            if Rule_Dic [ctx.parentCtx.parentCtx.getRuleIndex()] != 'loop_stmt' :
                print("'", ctx.Break().getText(), "' use only in loop statement")
        if ctx.Continue() != None :
            if Rule_Dic [ctx.parentCtx.parentCtx.getRuleIndex()] != 'loop_stmt' :
                print("'", ctx.Continue().getText(), "' use only in loop statement")




        if ctx.Destruct() != None :
            var_name = ctx.Identifiers().getText()
            temp_list = list()
            search_st_result =None


            while (len(self.__programStack.getStack()) != 0):
                current_scope = self.__programStack.pop()
                temp_list.append(current_scope)
                if current_scope.get_scope_type() == "root":
                    search_st_result = current_scope.search_var_in_dclst(var_name)

                    if search_st_result != None:

                        if search_st_result[3] == False: ## its not array
                            if len(ctx.getText().split('[')) > 1:
                                print("cannot not destruct dimensions of '", var_name, "'. check dimensions.")
                                exit()
                            if search_st_result[0] in 'Int Float Bool String': ## it isnt identifier
                                print("'destruct' is used only for arrays and types , cannot destruct '" ,var_name,"'.")
                                exit()
                        elif len(search_st_result[4]) != len(ctx.getText().split('[')) - 1: ##its array -> check dimension
                            print("cannot not destruct dimensions of '", var_name, "'. check dimensions.")
                            exit()
                        break
                elif current_scope.get_scope_type() == "class":
                    continue

                else:
                    search_st_result = current_scope.search_var_in_st(var_name)
                    if search_st_result != None:
                        if search_st_result[3] == False:  ## its not array
                            if len(ctx.getText().split('[')) > 1:
                                print("cannot not destruct dimensions of '", var_name, "'. check dimensions.")
                                exit()
                            if search_st_result[0] in 'Int Float Bool String':  ## it isnt identifier
                                print("'destruct' is used only for arrays and types , cannot destruct '", var_name,
                                      "'.")
                                exit()
                        elif len(search_st_result[4]) != len(
                                ctx.getText().split('[')) - 1:  ##its array -> check dimension
                            print("cannot not destruct dimensions of '", var_name, "'. check dimensions.")
                            exit()
                        break

            if search_st_result == None:
                print("variable " + var_name + " Is not declared.")
                exit()


            else:
                for i in range(len(temp_list) - 1, -1, -1):
                    self.__programStack.push(temp_list[i])






    # Exit a parse tree produced by LuluParser#stmt.
    def exitStmt(self, ctx: LuluParser.StmtContext):
        pass

    # Enter a parse tree produced by LuluParser#var_def.
    def enterVar_def(self, ctx: LuluParser.Var_defContext):



        variable_type = Lexer_Dic[ctx.data_type().getChild(0).getSymbol().type]

        '''
            for preventing rewriting type conversion Functions for lowerCase and uppercase
            
        '''

        if variable_type == 'Identifiers' :
            variable_type = ctx.data_type().getChild(0).getText()


        self.__typeStack.push(variable_type)

        '''setting array type for future use when we have array'''
        self.__arrayType = variable_type



    # Exit a parse tree produced by LuluParser#var_def.
    def exitVar_def(self, ctx: LuluParser.Var_defContext):
        self.__typeStack.pop()
        self.__arrayType=None





    # Enter a parse tree produced by LuluParser#var_val.
    def enterVar_val(self, ctx: LuluParser.Var_valContext):

        ''' for identifiers'''

        var_type = self.__typeStack.top()
        if ctx.parentCtx.data_type().Identifiers() :
            temp_stack = Stack()
            while True :
                current_scope = self.__programStack.top()
                if current_scope.get_scope_type() !='root':

                    temp_stack.push(self.__programStack.pop())
                else:
                    break
            is_exit_mainctx=0
            for entity in current_scope.get_mainctx():
                if entity.is_defined() and entity.get_entity_name()==var_type and entity.get_entity_type()=="class":
                    is_exit_mainctx=1
                    break
            if is_exit_mainctx==0:
                is_exist_declarest=0
                for entity in current_scope.get_declare_St() :
                    if entity.get_entity_name()==var_type and entity.get_entity_type()=="class":
                        is_exist_declarest=1
                        break
                is_exist_define_not_declare=0
                if is_exist_declarest==0:
                    for entity in current_scope.get_mainctx():
                        if not (entity.is_defined() )and entity.get_entity_name() == var_type and entity.get_entity_type() == "class":
                            is_exist_define_not_declare = 1
                            break
                    if is_exist_define_not_declare==1:
                        #TODO Implement kiarash Idea
                         print("Type '" + var_type + "' is defined but is not declared")
                         exit()

                    print("Type '" + var_type + "' is not defined and is not declared")
                    exit()



            while not temp_stack.is_empty():
                self.__programStack.push(temp_stack.pop())






    # Exit a parse tree produced by LuluParser#var_val.
    def exitVar_val(self, ctx: LuluParser.Var_valContext):
        var_name = ctx.ref().Identifiers().getText()

        current_scope = self.__programStack.top()

        current_scope_type = current_scope.get_scope_type()

        if current_scope_type == 'root':
            search_result = current_scope.search_var_in_dclst(var_name)
        else:
            search_result = current_scope.search_var_in_st(var_name)

        if search_result == None:
            if ctx.expr() == None and ctx.parentCtx.Const() != None:
                print("Const variable " + var_name + "  should be initialized when define")
                exit()
            if ctx.expr() != None:
                function_output_types_rhs = list()

                if hasattr(ctx.expr().getChild(0), 'getRuleIndex'):

                    if Rule_Dic[ctx.expr().getChild(0).getRuleIndex()] == "func_call":
                        ##TODO : this if is for only var_def ' not for operators
                        ## we have to complete it for operators
                        ## for checking exprs on functions  expr -> variable op function_call
                        ## we have to check it on expr exit functions , to check both sides of operator
                        ## and expr should

                        function_output_types_rhs = self.__typeStack.pop()
                        var_definition_type_lhs = self.__typeStack.pop()

                        cnt = 0
                        for function_op_type in function_output_types_rhs:
                            if sum(c.isdigit() for c in function_op_type) == 1 and \
                                    VariableEntity.check_type_assigment(var_definition_type_lhs,
                                                                        (function_op_type[:-1]).capitalize()):
                                cnt += 1

                        if cnt == 0:
                            print("No function found which matches '" , var_definition_type_lhs ,"'")
                            exit()
                        elif cnt > 1:
                            print("Ambiguity : Multi function found detected for assignment ")
                            exit()
                        ## TODO check these logic again
                        cnt = 0
                        self.__typeStack.push(var_definition_type_lhs)
                    else:

                        # TODO set value when we have [1,2,3,4,5]

                        '''checking assignment sides have convertible type'''
                        rhs_type = self.__typeStack.pop()
                        lhs_type = self.__typeStack.pop()

                        if not (VariableEntity.check_type_assigment(lhs_type, rhs_type)):
                            print("Variable cannot be assigned, '", var_name, "'cannot be convert '", rhs_type, "' to'", lhs_type,
                                  "'.")
                            exit()
                        self.__typeStack.push(lhs_type)

                else:

                    # TODO set value when we have [1,2,3,4,5]

                    '''checking assignment sides have convertible type'''
                    rhs_type = self.__typeStack.pop()
                    lhs_type = self.__typeStack.pop()

                    if not (VariableEntity.check_type_assigment(lhs_type, rhs_type)):
                        print('this is khata ??????? for type assigment ', var_name)
                        exit()
                    self.__typeStack.push(lhs_type)

            ''' detect if variable is an array '''
            if ArrayEntity.is_array(ctx.ref()):

                newArray = ArrayEntity('array')
                newArray.set_entity_name(var_name)
                newArray.set_data_type(self.__typeStack.top())
                array_dimensions = []

                ## get
                for dimension in ctx.ref().expr():
                    if (dimension.getText()).isnumeric():
                        array_dimensions.append(int(dimension.getText()))
                    else:
                        array_dimensions.append(None)
                newArray.set_dimension(array_dimensions)

                if ctx.parentCtx.Const() != None:
                    newArray.set_is_const()

                if Rule_Dic[ctx.parentCtx.parentCtx.getRuleIndex()] == 'component':
                    if ctx.parentCtx.parentCtx.access_modifier():
                        newArray.set_accessModifier(ctx.parentCtx.parentCtx.access_modifier().getText())

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

                if Rule_Dic[ctx.parentCtx.parentCtx.getRuleIndex()] == 'component':
                    if ctx.parentCtx.parentCtx.access_modifier():
                        newVariable.set_accessModifier(ctx.parentCtx.parentCtx.access_modifier().getText())

                if current_scope_type == 'root':
                    current_scope.add_to_declare_st(newVariable)
                else:
                    current_scope.add_to_scope_st(newVariable)



        else:
            open("./prg_functions", 'w').close()
            print('double declaration of ', var_name, ' detected')
            exit()

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
        output_params = self.__func_dcl_op
        input_params = self.__func_dcl_ip

        if ctx.func_def_args() == None:
            input_params = None
        if ctx.dcl_args() == None:
            output_params = None

        root_scope = self.__programStack.top()
        if root_scope.search_func_in_dclst2((ctx.Identifiers().getText(), input_params, output_params)) != None:
            print("Multi declaration of function '" + "' " + ctx.Identifiers().getText())
            exit()
        else:

            if root_scope.search_func_in_mainctx((ctx.Identifiers().getText(), input_params, output_params)) == None:
                print("Function declaration has no matched definition")
                exit()
                # TODO showing line number

            newFunction = FunctionEntity("function")
            newFunction.set_entity_name(ctx.Identifiers().getText())
            newFunction.set_input_params(input_params)
            newFunction.set_output_params(output_params)
            root_scope.add_to_declare_st(newFunction)

            '''for another function declaration we have to reset these variables'''
            self.__func_dcl_ip = ""
            self.__func_dcl_op = ""

    # Enter a parse tree produced by LuluParser#dcl_args.
    def enterDcl_args(self, ctx: LuluParser.Dcl_argsContext):
        pass

    # Exit a parse tree produced by LuluParser#dcl_args.
    def exitDcl_args(self, ctx: LuluParser.Dcl_argsContext):
        cnt = 0
        for i in range(ctx.getChildCount()):
            if ctx.getChild(i).getText() == "[":
                cnt += 1
        self.__func_dcl_op += ctx.data_type().getText() + str(cnt)



    # Enter a parse tree produced by LuluParser#type_dcl.
    def enterType_dcl(self, ctx: LuluParser.Type_dclContext):

        class_name = (ctx.Identifiers()).getText()
        root_scope = self.__programStack.top()
        if root_scope.is_exist_entity(class_name):
            print("Double declaration of type '", class_name ,"'")
            exit()
        else:
            if root_scope.search_class_in_mainctx(class_name) == None:
                print("Type '" + class_name +  "' is not defined")
                exit()


        newType = ClassEntity('class')
        newType.set_entity_name(class_name)
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
        class_name= ctx.Identifiers(0).getText()
        global class_entity
        for entity in self.__programStack.top().get_mainctx():
            if entity.get_entity_type() =='class' and entity.get_entity_name() ==class_name :
                class_entity = entity


        '''checking father class existance in mainctx and declare st'''
        if len(ctx.Identifiers())==2:
            class_father_name=ctx.Identifiers(1).getText()

            root_scope=self.__programStack.top()
            is_exist_mainctx=0

            for entity in root_scope.get_mainctx():
                if entity.get_entity_type()=="class" and entity.is_defined() and entity.get_entity_name()==class_father_name:
                    is_exist_mainctx=1
                    break
            if is_exist_mainctx==0:

                is_exist_declarest=0
                for entity in root_scope.get_declare_St():
                    if entity.get_entity_type() == "class" and entity.get_entity_name() == class_father_name:
                        is_exist_declarest = 1
                        break
                if is_exist_declarest==0:
                    is_defined_not_declared=0
                    for entity in root_scope.get_mainctx():
                        if entity.get_entity_type() == "class" and  (not entity.is_defined()) and entity.get_entity_name() == class_father_name:
                            is_defined_not_declared = 1
                            break

                    if is_defined_not_declared ==1 :
                        print("Parent type '" + class_father_name + "' is defined but not declared")
                        exit()

                    print("Type '" + class_father_name + "' is not defined and is not declared")
                    exit()

            for entity in root_scope.get_mainctx():

                if entity.get_entity_type()=="class" and entity.is_defined() and entity.get_entity_name()==class_father_name:
                    class_entity.set_parentPtr(entity)
                    break

                    ## add father here

        """
            we sure that top of program stack is always root in type_def , so we just set is define of type to true 
            
        """
        root_scope=self.__programStack.pop()
        root_scope.set_class_entity_is_defined(class_name)
        self.__programStack.push(root_scope)

        """
            we create a scope for this class if any condition pass successfully
        """


        '''
    
        '''
        newScope = Scope('class')
        className = ctx.Identifiers(0).getText()


        '''
            we checking 'super' key for variable : 
            we found that we need address of current newScope in variable in case 'super'
            because in normal mode we push the last information about scope at exitType_def
            and in 'super' case we need newScope address before exitVar_type 
            we wanted to search that address in mainctx and find the current class Entity 
            to update parentPrt :)
        '''
        for entity in (self.__programStack.top()).get_mainctx():
            if entity.get_entity_type()=="class" and entity.get_entity_name()==className :
                entity.set_class_scope(newScope)
                break


        self.__programStack.push(newScope)

    # Exit a parse tree produced by LuluParser#type_def.
    def exitType_def(self, ctx: LuluParser.Type_defContext):
        '''
                  we have to pop from programStack , we sure that is
                  scope of class ,
                  here we enqueue in classQueue for inheritance
                  a tuple of ( 'exitedClassNameScope' , 'exitedScope' )

              '''


        className = ctx.Identifiers(0).getText()
        classScope=self.__programStack.pop()
        for entity in (self.__programStack.top()).get_mainctx():
            if entity.get_entity_type()=="class" and entity.get_entity_name()==className :
                entity.set_class_scope(classScope)
                break

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
        if hasattr(ctx.parentCtx , 'Allocate') :
             # if ctx.parentCtx.Allocate() != None :
           self.__typeStack.push(ctx.Identifiers().getText())
        else:

            if ctx.params() == None :
                self.__func_call_ip=None



            f1_s = self.__programStack.pop()
            roots = self.__programStack.top()
            self.__programStack.push(f1_s)

            '''searching scopes to find a function with a function call signature
            function call signature : (f_name, input_parameters)
            '''

            searching_result = (
                roots.search_fcall_sig_in_dclst((ctx.Identifiers().getText(), self.__func_call_ip)))


            '''when no function found'''
            if len(searching_result) == 0:
                # TODO implement kiarash idea
                print(
                    "Function '" + ctx.Identifiers().getText() + "' is not defined or declared (no signature!)")
                exit()

            self.__typeStack.push(searching_result)

            self.__func_call_ip = ""


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
        '''Just For function declaration
                which is always occure when our current scope is root
                other cases are done in future_look_function     #TODO function input and output should be accessible
                '''
        current_scope = self.__programStack.top()
        cnt = 0
        for i in range(ctx.getChildCount()):
            if ctx.getChild(i).getText() == "[":
                cnt += 1

        if current_scope.get_scope_type()=="root":

            self.__func_dcl_ip += ctx.data_type().getText() + str(cnt)
        else:
            self.__func_def_params+= "^"+ctx.data_type().getText() + str(cnt) + "^" + ctx.Identifiers().getText()

            '''this is for separating input and output params'''
            if Rule_Dic[ctx.parentCtx.getRuleIndex()]=="func_def":
                self.__func_def_params += "&"




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
        if ctx.For() != None :
            newForScope = Scope('regular')
            self.__programStack.push(newForScope)

            if ctx.data_type() != None :

                variable_type = Lexer_Dic[ctx.data_type().getChild(0).getSymbol().type]
                currentScope = self.__programStack.top() ## this is for Scope actually
                for i in range(len(ctx.assign(0).variable())):
                    self.__typeStack.push(variable_type)
                    newVariable = VariableEntity('variable')
                    newVariable.set_data_type(variable_type)
                    newVariable.set_entity_name(ctx.assign(0).variable(i).getText())
                    currentScope.add_to_scope_st(newVariable)



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

        # if Rule_Dic[ctx.parentCtx.getRuleIndex()] == 'loop_stmt' :
        #     ''' so this condition is for for statement var def'''
        #     print('this is assigment for loop')
        if hasattr(ctx.expr().getChild(0), 'getRuleIndex'):
            if Rule_Dic[ctx.expr().getChild(0).getRuleIndex()] == 'array':

                array_elem_types = self.__typeStack.pop()
                flat_array_elem_types = list()
                util.flatten(array_elem_types, flat_array_elem_types)
                array_elem_types = flat_array_elem_types

                for i in range(len(ctx.variable())):
                    lhs_type = self.__typeStack.pop()
                    for t in array_elem_types:
                        if not VariableEntity.check_type_assigment(lhs_type, t):
                            print("Variable '" + ctx.variable(len(ctx.variable()) - i - 1).getText(),
                                  "' does not match '" + t + " '")
                            exit()

            elif Rule_Dic[ctx.expr().getChild(0).getRuleIndex()] == "func_call":
                function_output_types = self.__typeStack.pop()

                for i in range(len(ctx.variable())):
                    lhs_type = self.__typeStack.pop()
                    cnt = 0
                    muliti_output_functions = 0
                    for function_op_type in function_output_types:
                        # if  sum(c.isdigit() for c in function_op_type) > 1:
                        #     muliti_output_functions+=1
                        if sum(c.isdigit() for c in function_op_type) == 1 and \
                                VariableEntity.check_type_assigment(lhs_type, (function_op_type[:-1]).capitalize()):
                            # TODO solve capitalize problem
                            cnt += 1

                    if cnt == 0:
                        print("No function found which matches the lhs variable type")
                        exit()
                    elif cnt > 1:
                        print("ambiguity : Multi function found detected for assignment ")
                        exit()
                    ## TODO check these logic again
                    cnt = 0
            else:
                rhs_type = self.__typeStack.pop()

                number_of_eles = len(ctx.variable())
                for i in range(len(ctx.variable())):
                    if not VariableEntity.check_type_assigment(self.__typeStack.pop(), rhs_type):
                        print("Variable '" + ctx.variable(
                            number_of_eles - i - 1).getText() + "' does not match type '" + rhs_type + "'")
                        exit()
        else:
            rhs_type = self.__typeStack.pop()
            number_of_eles = len(ctx.variable())
            for i in range(len(ctx.variable())):
                if not VariableEntity.check_type_assigment(self.__typeStack.pop(), rhs_type):
                    print("Variable '" + ctx.variable(
                        number_of_eles - i - 1).getText() + "' does not match type '" + rhs_type + "'")
                    exit()







    # Enter a parse tree produced by LuluParser#variable.
    def enterVariable(self, ctx: LuluParser.VariableContext):

        pass

    # Exit a parse tree produced by LuluParser#variable.
    def exitVariable(self, ctx: LuluParser.VariableContext):


        variable_name = ctx.ref(0).Identifiers().getText()

        temp_list = list()
        search_st_result = None


        if ctx.This():

            while True:
                current_scope=self.__programStack.pop()
                temp_list.append(current_scope)

                if current_scope.get_scope_type()=="root":
                    print("Cannot use 'this' out of a class scope ")
                    exit()
                elif current_scope.get_scope_type()=="class":
                    search_st_result = current_scope.search_var_in_st(variable_name)
                    if search_st_result != None:
                        break
                    else:
                        print("Variable " + variable_name + " is not declared in this type")
                        exit()

            for i in range(len(temp_list) - 1, -1, -1):
                self.__programStack.push(temp_list[i])

        elif ctx.Super():

            while True:
                current_scope = self.__programStack.pop()
                temp_list.append(current_scope)

                if current_scope.get_scope_type() == "root":
                    print("Cannot use 'super' out of a class scope")
                    exit()

                elif current_scope.get_scope_type()=="class":


                    super_class_scope=None
                    for entity in (self.__programStack.top()).get_mainctx():
                        if entity.get_entity_type()=="class" and entity.get_class_scope() == current_scope :
                            if entity.get_parentPtr()==0:
                                print("Type '" + entity.get_entity_name() + "' is not inherited from any other type , 'super' Invlaid. ")
                                exit()
                            super_class_scope=(entity.get_parentPtr()).get_class_scope()

                    search_st_result = super_class_scope.search_var_in_st(variable_name)
                    if search_st_result == None:
                        print("Variable '" + variable_name + "' is not defined in parent type" )
                        exit()
                    else:

                        if (search_st_result[5] == 'private') :
                            print("Variable '",variable_name,"' is private in parent type , and cannot be accessed by 'super' from child type " )
                            exit()

                        break
            for i in range(len(temp_list) - 1, -1, -1):
                self.__programStack.push(temp_list[i])



        else:
            while (len(self.__programStack.getStack()) != 0):

                current_scope = self.__programStack.pop()
                temp_list.append(current_scope)
                if current_scope.get_scope_type() == "root":
                    search_st_result = current_scope.search_var_in_dclst(variable_name)
                    if search_st_result != None:
                        break
                elif current_scope.get_scope_type() == "class":
                    continue

                else:
                    search_st_result = current_scope.search_var_in_st(variable_name)
                    if search_st_result != None:
                        break

            if search_st_result == None:
                print("Variable '" + variable_name + "' is not declared in this scope")
                exit()


            else:
                #
                # if Rule_Dic[ctx.parentCtx.getRuleIndex()]!="assign":
                #
                #
                #         array_dimensions_size= (ctx.getText()).count("[")
                #         array_dimensions_values=[]
                #         for i in range(len(ctx.ref(0).expr())):
                #             if (ctx.ref(0).expr(i).getText()).isnumeric():
                #                 array_dimensions_values.append((ctx.ref(0).expr(i).getText()))
                #             else:
                #                 array_dimensions_values.append(None)
                #
                #         # array_dimensions_values=re.findall('\\[([0-9]*?)\\]', ctx.getText())
                #         # print(array_dimensions_values)
                #         # exit()
                #         if len(search_st_result[4]) < array_dimensions_size:
                #             print("Variable '" , search_st_result[2] + "' is an "+str(len(search_st_result[4]))+" dimensional array not "+str(array_dimensions_size))
                #             exit()


                for i in range(len(temp_list) - 1, -1, -1):
                    self.__programStack.push(temp_list[i])




        if Rule_Dic[ctx.parentCtx.getRuleIndex()]=="assign" and search_st_result[1]==True:
            print("Variable '"+ search_st_result[2] + "' is const and cannot be reassigned")
            exit()
        #print(search_st_result[0])

        #self.__typeStack.push(search_st_result[0])

        if Rule_Dic[ctx.parentCtx.parentCtx.getRuleIndex()] == "params":
            '''it is a regular variable not an array'''
            if search_st_result[3] == False:
                self.__func_call_ip += search_st_result[0] + "0"  # variabletype + 0 dimension

            else:
                '''it is an array'''
                self.__func_call_ip += search_st_result[0] + str(len(search_st_result[4]))  ## array type + #dimensions


        else:

            self.__typeStack.push(search_st_result[0])


    # Enter a parse tree produced by LuluParser#ref.
    def enterRef(self, ctx: LuluParser.RefContext):
        pass

    # Exit a parse tree produced by LuluParser#ref.
    def exitRef(self, ctx: LuluParser.RefContext):
        if ctx.getChildCount() > 1:  ## We have array under ref
            array_dimension_size = len(ctx.expr())
            for i in range(array_dimension_size):
                if not VariableEntity.check_type_assigment("Int" ,self.__typeStack.pop()[0] ):

                    print("Array dimensions values cannot be converted to int ")
                    exit()

    # Enter a parse tree produced by LuluParser#Logical_or_op.
    def enterLogical_or_op(self, ctx: LuluParser.Logical_or_opContext):
        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()
        operator = ctx.getChild(1).getText()


        final_type = VariableEntity.check_type_conversion(operator , l_operand_type , r_operand_type)

        if final_type != None :
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator,' can not operate on ' , l_operand_type , ' and ' , r_operand_type)
            exit()
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
        operator = ctx.getChild(1).getText()


        final_type = VariableEntity.check_type_conversion(operator , l_operand_type , r_operand_type)

        if final_type != None :
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator,' can not operate on ' , l_operand_type , ' and ' , r_operand_type)
            exit()

    # Enter a parse tree produced by LuluParser#Unaryop.
    def enterUnaryop(self, ctx: LuluParser.UnaryopContext):

        pass

    # Exit a parse tree produced by LuluParser#Unaryop.
    def exitUnaryop(self, ctx: LuluParser.UnaryopContext):

        u_operand = self.__typeStack.pop()

        operator = ctx.getChild(0).getText()

        final_type = VariableEntity.check_type_conversion(operator, u_operand)

        if final_type != None:
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator , ' can not operate on ', u_operand)
            exit()


    # Enter a parse tree produced by LuluParser#expr_variable.
    def enterExpr_variable(self, ctx: LuluParser.Expr_variableContext):

        pass

    # Exit a parse tree produced by LuluParser#expr_variable.
    def exitExpr_variable(self, ctx: LuluParser.Expr_variableContext):
        pass


    # Enter a parse tree produced by LuluParser#expr_funccall.
    def enterExpr_funccall(self, ctx: LuluParser.Expr_funccallContext):

        pass

    # Exit a parse tree produced by LuluParser#expr_funccall.
    def exitExpr_funccall(self, ctx: LuluParser.Expr_funccallContext):
        pass

    # Enter a parse tree produced by LuluParser#Logical_and_op.
    def enterLogical_and_op(self, ctx: LuluParser.Logical_and_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Logical_and_op.
    def exitLogical_and_op(self, ctx: LuluParser.Logical_and_opContext):
        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()
        operator = ctx.getChild(1).getText()


        final_type = VariableEntity.check_type_conversion(operator , l_operand_type , r_operand_type)

        if final_type != None :
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator," can not operate on types '" , l_operand_type , "' and '" , r_operand_type,"'")
            exit()
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

        const_val_type = Lexer_Dic[ctx.const_val().getChild(0).getSymbol().type]

        if const_val_type in 'Int_const String_const Bool_const ' :
            self.__typeStack.push(const_val_type.split('_')[0])
        else:
            self.__typeStack.push(const_val_type)

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

        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()
        operator= ctx.getChild(1).getText()

        final_type = VariableEntity.check_type_conversion(operator, l_operand_type, r_operand_type)

        if final_type != None:
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator," can not operate on types '" , l_operand_type , "' and '" , r_operand_type,"'")
            exit()


        pass

    # Enter a parse tree produced by LuluParser#Eqaulity_op.
    def enterEqaulity_op(self, ctx: LuluParser.Eqaulity_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Eqaulity_op.
    def exitEqaulity_op(self, ctx: LuluParser.Eqaulity_opContext):
        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()
        operator = ctx.getChild(1).getText()

        final_type = VariableEntity.check_type_conversion(operator, l_operand_type, r_operand_type)

        if final_type != None:

            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator," can not operate on types '" , l_operand_type , "' and '" , r_operand_type,"'")

            exit()


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

        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()


        operator = ctx.getChild(1).getText()

        final_type = VariableEntity.check_type_conversion(operator, l_operand_type, r_operand_type)

        if final_type != None:

            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator," can not operate on types '" , l_operand_type , "' and '" , r_operand_type,"'")

            exit()
        pass

    # Enter a parse tree produced by LuluParser#Bitwise_inclusive_or_op.
    def enterBitwise_inclusive_or_op(self, ctx: LuluParser.Bitwise_inclusive_or_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Bitwise_inclusive_or_op.
    def exitBitwise_inclusive_or_op(self, ctx: LuluParser.Bitwise_inclusive_or_opContext):
        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()
        operator = ctx.getChild(1).getText()


        final_type = VariableEntity.check_type_conversion(operator , l_operand_type , r_operand_type)

        if final_type != None :
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator," can not operate on '" , l_operand_type , "' and '" , r_operand_type,"'")
            exit()
        pass

    # Enter a parse tree produced by LuluParser#Bitwise_and_op.
    def enterBitwise_and_op(self, ctx: LuluParser.Bitwise_and_opContext):
        pass

    # Exit a parse tree produced by LuluParser#Bitwise_and_op.
    def exitBitwise_and_op(self, ctx: LuluParser.Bitwise_and_opContext):
        r_operand_type = self.__typeStack.pop()
        l_operand_type = self.__typeStack.pop()
        operator = ctx.getChild(1).getText()


        final_type = VariableEntity.check_type_conversion(operator , l_operand_type , r_operand_type)

        if final_type != None :
            self.__typeStack.push(final_type)
        else:
            print('Operator ',operator," can not operate on types '" , l_operand_type , "' and '" , r_operand_type,"'")
            exit()
        pass

    # Enter a parse tree produced by LuluParser#array.
    def enterArray(self, ctx: LuluParser.ArrayContext):

        pass

    # Exit a parse tree produced by LuluParser#array.
    def exitArray(self, ctx: LuluParser.ArrayContext):

        number_of_array_element = len(ctx.expr())

        if self.__arrayType!=None:
            for i in range(number_of_array_element):
                arr_ele_type = self.__typeStack.pop()
                ## TODO it seemes we dont need type convesion func for this case


                if not VariableEntity.check_type_assigment(self.__arrayType , arr_ele_type) :



                    # TODO Check if this way is a good way when we have funccall

                    '''
                    to get array_elements value we use #total_element-i-1 as index of ctx.expr()
                    '''
                    array_ele_value = (ctx.expr(number_of_array_element - i - 1).getText())
                    # TODO output result
                    print("Type of '" + array_ele_value + "' does not match '", self.__arrayType + "'")
                    exit()
            self.__typeStack.push(self.__arrayType)

        else:




            array_elem_types = list()
            for i in range(len(ctx.expr())) :
                array_elem_types.append(self.__typeStack.pop())
            self.__typeStack.push(array_elem_types)
            """
                         why we push list ?
                        because we want to check each array_elem type in exit assign for each variable
                                it is not important every array_elem type has same type because they can be converted to a common type
                """

