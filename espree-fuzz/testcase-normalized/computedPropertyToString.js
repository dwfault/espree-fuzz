//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
   {
       name: "computed functions",
       o4: function ()
       {
           var o5 = new Date(2011,10,30);
           var o7 = function() { var o8 = 1; var o9 = 2; var o10 = 3; return o8+o10+o9};
           var o11 = function() { var o8 = 1; var o9 = "1"; var o10 = "b"; return o8+o9+o10};
           var o12 = function() { var o8 = {}; var o9 = o5; var o10 = {}; return o8+o9+o10};
           var o13 = function() { return NaN;};
           var o15 = function() { return undefined;}
           var o17 = function() { return null;}
           var o18 = function() { return true;}
           var o19 = function() { return false;}
           var o20 = function() { return Symbol("FAZ");}
           var o22 = function() { return o5;}
           var o23 = class {
               [o7()]() {}
               [o11()]() {}
               [o12()]() {}
               [o13()]() {}
               [o15()]() {}
               [o17()]() {}
               [o18()]() {}
               [o19()]() {}
               [o20()]() {}
               [o22()]() {}
               }
           var o24 = new o23();
           o25.o26("6() {}",           o24[o7()].toString(), "name0() adds 1+2+3, expecting 6");
           o25.o26("11b() {}",         o24[o11()].toString(), "name1() returns number 1 plus string 1 and string b should evaluate to 11b");
           o25.o26({}+o5+{}+"() {}", o24[o12()].toString(), "name2() returns object + date + object should be toStrings of all three");
           o25.o26("NaN() {}",         o24[o13()].toString(), "name3() returns NaN, which should be the name");
           o25.o26("undefined() {}",   o24[o15()].toString(), "name4() returns undefined for the name");
           o25.o26("null() {}",        o24[o17()].toString(), "name5() returns null as the name");
           o25.o26("true() {}",        o24[o18()].toString(), "name6() returns true as the name");
           o25.o26("false() {}",       o24[o19()].toString(), "name7() returns false as the name");
           o25.o26(o5+"() {}",       o24[o22()].toString(), "name8() returns a date as the name");
       }
   },
   {
       name: "computed Values",
       o4: function ()
       {
           var o5 = new Date(2011,10,30);
           var o8 = 4;
           var o9 = 2;
           var o10 = "c"
           var o23 = class {
                      [1+4]() {}
                      [o5]() {}
                      [o8+o9]() {}
                      [o8+o10]() {}
                      ["foo"]() {}
                      ["fo\0o"+"bar"]() {}
                    }
           var o24 = new o23();
           o25.o26("5() {}",        o24[5].toString(),     "the result of 1+4 for the name");
           o25.o26(o5+"() {}",    o24[o5].toString(),  "date as the name");
           o25.o26("6() {}",        o24[6].toString(),     "the result of 4 + 2 for the name");
           o25.o26("4c() {}",       o24["4c"].toString(),  "the result of numeric value 4 plus string c");
           o25.o26("foo() {}",      o24["foo"].toString(), "the result of the string foo");
           o25.o26("fo\0obar() {}", o24["fo\0obar"].toString(), "the result of the concatenation of two strings");
       }
   },

   ];

o28.o29(o2, { o30: o0.o31[0] != "summary" });
