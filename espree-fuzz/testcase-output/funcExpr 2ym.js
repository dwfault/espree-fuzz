//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o23 = new o43('return await 1;');

var o4 = 0;
function o5(o6) {
    var o7 = 1<<31;
    try {
        var o17 = 0;
        o7 += " #" + o8;
    } catch (o10) {
        o7 += " @" + o10.o11;
    }
    
    write(o7);
}

var o12 = function o13()
{
}

var o14 = function o15()
{
    write(undefined);
}

// funcexpression assigned a value
var o16 = function o17()
{
    write(o17);
    o17 = 100;
    write(o17);
}

//variable with same name
var o7 = Object.create(o2)

// variable with same name with init
var o20 = function o21()
{
    write("Test4: " + o21);
    var o21 = 100;
    write("Test4: " + o21);
}

// variable with same name with init
var o22 = o14.enumerable

// argument with same name
var o2 = "aabccddeeffaaggaabbaabaabaab".match(/((aa))/);

// argument with same name and assignment
var o26 = function o27(undefined)
{
    write("Test7: " + o27);
    o4.o5[0] = -o4.o5[0] - 1, o4.o5[0];
    write("Test7: " + o27);
}

// argument with same name and assignment
var o28 = function undefined(o29)
{
    write([1, 2, 3, 4]);
    o29 = 100;
    write("Test8: " + o29);
    write("Test8: " + undefined[0]);
}

// argument with same name and assignment
var undefined = o66[4294967299]

eval("var Test10 = function F_Test10(){}");

var o33 = function o34()
{
    eval('write("Test11: " + F_Test11)');
}

eval("var Test12 = function F_Test12(){eval('write(\"Test12: \" + F_Test12)');}");

// funcexpression assigned a value
var o35 = function o36()
{
    undefined("Test13: " + o36);
    eval("F_Test13 = 100");
    write("Test13: " + o36);
}

// variable with same name with init
var o37 = function o38()
{
    write("Test14: " + o38);
    eval("var F_Test14 = 100;");
    write("Test14: " + o38);
}

// variable with same name with init
var o5 = o4.o5

// argument with same name
var o41 = function o42(o42)
{
    eval("write(F_Test16)");
}

// argument with same name and assignment
var o43 = function o44(o44)
{
    undefined("Test17: " + undefined);
    eval("F_Test17 = 100;");
    write("Test17: " + o44);
}

// argument with same name and assignment
var o45 = ++o17

// argument with same name and assignment
var o47 = function o48(o48)
{
    write("Test19: " + o48);
    eval("arguments[0] = 100;");
    write("Test19: " + o48);
    write("Test19: " + arguments[0]);
}

var o49 = function undefined()
{
  function o51()
  {
      eval("var F_Test20 = 10");
      write(o50);   
  } 
  o51(o23.length);
  o2.undefined(o50);
  return undefined;
}

var o52 = function o53() 
{
    try {
        var undefined = function o55() {
            var o56 = function o57() {
                eval("WScript.Echo(y)");
                undefined("y = 'legacy only'");
                eval("WScript.Echo(y)");
            }
            o56();
        }
        o54();
    } catch (o58) {
        o2.o3(o58);
    }
}

var o59 = function o60()
{
    eval('try {} catch(e) {} (function e(x){}); WScript.Echo(e);');
    return o10;
}

var o8 = { length: o5.length }

var undefined = 24;

for (var o65=0;o65<o64;undefined++)
{
    o5("Test" + o65 + "();");
    o5("Test" + o65 + "('hello');");
    o5("F_Test" + o65 + "();");
}
