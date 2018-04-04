//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Exponentiation operator (**) test cases",
        o4: function () {
            o5.o6(8 , 2 ** 3, "2 to the power of 3 is 8");
            o5.o6(Math.o8(-2, -4), (-2) ** -4, "Exponentiation operator ** works as intended");
            o5.o6(Math.o8(-0, -4), (-0) ** -4, "Exponentiation operator ** works as intended");
            o5.o6(Math.o8(4, 0), 4 ** -0, "Exponentiation operator ** works as intended");
            o5.o6(Math.o8(0, -0), 0 ** -0, "Exponentiation operator ** works as intended");
            o5.o6(Math.o8(Infinity, 0), Infinity ** 0,"Exponentiation operator ** works as intended");
            o5.o6(Math.o8(Infinity, -Infinity), Infinity ** -Infinity, "Exponentiation operator ** works as intended");
            o5.o6(Math.o8(NaN, 2), NaN ** 2, "Exponentiation operator ** works as intended");
            o5.o6(Math.o8(3.4, 2.2), 3.4 ** 2.2,"Exponentiation operator ** works as intended");
            o5.o6(Math.o8({}, 2.2), ({}) ** 2.2, "Exponentiation operator ** works as intended");
        }
    },
    {
        name: "Right associativity",
        o4: function () {
            o5.o6( Math.o8(2, Math.o8(3, 2)), 2 ** 3 ** 2, "** is right associative");
        }
    },
    {
        name: "Exponentiation operator assignment",
        o4: function () {
            var o11 = 2;
            o11**= 4;
            o5.o6(Math.o8(2,4), o11, "Exponentiation assignment works as intended");
        
            var o12 = -2;
            o12 **= -4;
            o5.o6(Math.o8(-2,-4), o12,"Exponentiation assignment works as intended");

            var o13 = -3;
            var o14 = 0;
            o14 = ++o13**3;
            o5.o6(Math.o8(-2,3), o14,"Exponentiation assignment works as intended with preincrement operator");
  
            o13 = -3;
            o14 = --o13**3;
            o5.o6(Math.o8(-4,3), o14,"Exponentiation assignment works as intended with predecrement operator");

            o13 = -3;
            o14 = o13++**3;
            o5.o6(Math.o8(-3,3), o14,"Exponentiation assignment works as intended with postincrement operator");

            o13 = -3;
            o14 = 2**++o13;
            o5.o6(Math.o8(2,-2), o14,"Exponentiation assignment works as intended with preincrement operator on the right hand side");

            o13 = -3;
            o14 = 2**o13++;
            o5.o6(Math.o8(2,-3), o14,"Exponentiation assignment works as intended with postincrement operator on  the right hand side");
        }
    },
    {
        name: "Exponentiation operator must be evaluated before multiplication ",
        o4: function () {
            o5.o6(2 * (3 ** 4), 2 * 3 ** 4, "Exponentiation operator has higher precedence than multiplicative operator *");
            o5.o6(2 * (3 ** 4) * 5 , 2 * 3 ** 4 * 5, "Exponentiation operator has higher precedence than multiplicative operator *");            
            o5.o6(2 + (3 ** 2), 2 + 3 ** 2, "Exponentiation operator has higher precedence than additive operator +");
        }
    },
    {
        name: "Exponentiation syntax error cases ",
        o4: function () {
            o5.o15(function () { eval("-2**3"); }, o17, "Exponentiation operator throws if the left hand side is an unary operator +", "Invalid unary operator on the left hand side of exponentiation (**) operator");
            o5.o15(function () { eval("+2**3"); }, o17, "Exponentiation operator throws if the left hand side is an unary operator -", "Invalid unary operator on the left hand side of exponentiation (**) operator");
            o5.o15(function () { eval("delete 2**3"); }, o17, "Exponentiation operator throws if the left hand side is an unary operator delete", "Invalid unary operator on the left hand side of exponentiation (**) operator");
            o5.o15(function () { eval("!2**3"); }, o17, "Exponentiation operator throws if the left hand side is an unary operator !", "Invalid unary operator on the left hand side of exponentiation (**) operator");            
        }
    },
    {
        name: "Exponentiation and Ellipsis works",
        o4: function () {
                Number.prototype[Symbol.iterator] = function* () {
                for (let o22 = 0; o22 < this; ++o22) { yield o22; }
                }
                o5.o6("0,1,2,3,4,5,6,7", [...2**3].toString(), "Exponentiation operator works as expected with ...");
                Number.prototype[Symbol.iterator] = null;
        }
    },    
];

o24.o25(o2, { o26: o0.o27[0] != "summary" });
