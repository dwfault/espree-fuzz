//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = 0;
function o5(o6) {
    var o7 = "check" + ++o4 + ": " + o6;
    try {
        var o8 = eval(o6);
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
    write(o15);
}

// funcexpression assigned a value
var o16 = function o17()
{
    write(o17);
    o17 = 100;
    write(o17);
}

//variable with same name
var o18 = function o19()
{
    write("Test3: " + o19);
    var o19;
    write("Test3: " + o19);
}

// variable with same name with init
var o20 = function o21()
{
    write("Test4: " + o21);
    var o21 = 100;
    write("Test4: " + o21);
}

// variable with same name with init
var o22 = function o23()
{
    write("Test5: " + o23);
    var o23;
    o23 = 100;
    write("Test5: " + o23);
}

// argument with same name
var o24 = function o25(o25)
{
    write("Test6: " + o25);
}

// argument with same name and assignment
var o26 = function o27(o27)
{
    write("Test7: " + o27);
    o27 = 100;
    write("Test7: " + o27);
}

// argument with same name and assignment
var o28 = function o29(o29)
{
    write("Test8: " + o29);
    o29 = 100;
    write("Test8: " + o29);
    write("Test8: " + arguments[0]);
}

// argument with same name and assignment
var o31 = function o32(o32)
{
    write("Test9: " + o32);
    arguments[0] = 100;
    write("Test9: " + o32);
    write("Test9: " + arguments[0]);
}

eval("var Test10 = function F_Test10(){}");

var o33 = function o34()
{
    eval('write("Test11: " + F_Test11)');
}

eval("var Test12 = function F_Test12(){eval('write(\"Test12: \" + F_Test12)');}");

// funcexpression assigned a value
var o35 = function o36()
{
    write("Test13: " + o36);
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
var o39 = function o40()
{
    write("Test15: " + o40);
    eval("var F_Test15;");
    write("Test15: " + o40);
    eval("F_Test15 = 100;");
    write("Test15: " + o40);
}

// argument with same name
var o41 = function o42(o42)
{
    eval("write(F_Test16)");
}

// argument with same name and assignment
var o43 = function o44(o44)
{
    write("Test17: " + o44);
    eval("F_Test17 = 100;");
    write("Test17: " + o44);
}

// argument with same name and assignment
var o45 = function o46(o46)
{
    write("Test18: " + o46);
    eval("F_Test18 = 100;");
    write("Test18: " + o46);
    write("Test18: " + arguments[0]);
}

// argument with same name and assignment
var o47 = function o48(o48)
{
    write("Test19: " + o48);
    eval("arguments[0] = 100;");
    write("Test19: " + o48);
    write("Test19: " + arguments[0]);
}

var o49 = function o50()
{
  function o51()
  {
      eval("var F_Test20 = 10");
      write(o50);   
  } 
  o51();
  o2.o3(o50);
  return 0;
}

var o52 = function o53() 
{
    try {
        var o54 = function o55() {
            var o56 = function o57() {
                eval("WScript.Echo(y)");
                eval("y = 'legacy only'");
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

var o61 = function o62() {
    var o54 = 1;
    new (function o63() { 
        with({}) { 
            o2.o3('typeof g === ' + typeof o63);
            o2.o3('typeof F_Test23 === ' + typeof o62);
            o2.o3('typeof x === ' + typeof o54);
            if (!o54) 
                o63(); 
        } 
    } );
}

var o64 = 24;

for (var o65=0;o65<o64;o65++)
{
    o5("Test" + o65 + "();");
    o5("Test" + o65 + "('hello');");
    o5("F_Test" + o65 + "();");
}
