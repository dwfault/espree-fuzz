//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    try {
        eval(o1);
    }
    catch (o3) {
        o4.o5(o3);
    }
}

// Keywords that are reserved cannot be used as identifiers. Examples: var, with, false
// Other keywords are not reserved, and can be used as identifiers. Examples: double, byte

// regular identifier, referenced later with unicode variant
o0("var hello=10; WScript.Echo(hello); WScript.Echo(h\\u0065llo);");
// identifier with unicode variant. Used with and without unicode
o0("var h\u0065llo=20; WScript.Echo(hello); WScript.Echo(h\\u0065llo);");
// undefined identifier with unicode. Should throw a reference error
o0("WScript.Echo(h\\u0065llo2);");

// Valid use of some reserved keywords in expressions, like FALSE
// Invalid as of ES6 Draft 22
o0("WScript.Echo(fals\\u0065);");
o0("var a = fals\\u0065; WScript.Echo(a);");
o0("var b = tru\\u0065; WScript.Echo(b);");

// Invalid use of a reserved keyword in an expression. Should throw a syntax error
o0("var c = var;");
o0("var c = v\\u0061r;");
o0("var c = else;");
o0("var c = els\\u0065;");

// Reserved keyword declared as a var. Should throw an error indicating use of keyword as an identifier
o0("var false=30; WScript.Echo(false); WScript.Echo(fals\\u0065);");
o0("var var=30; WScript.Echo(var); WScript.Echo(v\\u0061r);");
o0("var fals\\u0065=40; WScript.Echo(false); WScript.Echo(fals\\u0065);");
o0("var v\\u0061r=30; WScript.Echo(var); WScript.Echo(v\\u0061r);");

// Use a reserved keyword as a property, legal
o0("var x1={};x1.else = 10;WScript.Echo(x1.else);");
o0("var x2={};x2.els\\u0065 = 10;WScript.Echo(x2.els\\u0065);");

// Use an unreserved keyword as a property, legal
o0("var x1={};x1.double = 10;WScript.Echo(x1.double);");
o0("var x2={};x2.doubl\\u0065 = 10;WScript.Echo(x2.doubl\\u0065);");

// Use a reserved keyword as a function name, not legal
o0("function else() {};");
o0("function els\\u0065() {};");

// Use an unreserved keyword as a function name, legal
o0("function double() {};");
o0("function doubl\\u0065() {};");
