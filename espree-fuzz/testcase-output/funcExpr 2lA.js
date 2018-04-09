//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

var o7 = 0;
function o4(o5) {
    var o6 = "check" + ++o3 + ": " + o5;
    try {
        var o7 = eval(o5);
        o6 += " #" + o7;
    } catch (o8) {
        o6 += " @" + o8.o9;
    }
    
    write(o6);
}

var o10 = function o11()
{
}

var o12 = function o13()
{
    write(o13);
}

// funcexpression assigned a value
var o14 = function o15()
{
    write(o15);
    o15 = 100;
    write(o15);
}

//variable with same name
var o16 = function o17()
{
    write("Test3: " + o17);
    var o17;
    write("Test3: " + o17);
}

// variable with same name with init
var o18 = function o19()
{
    write("Test4: " + o19);
    var o19 = 100;
    write("Test4: " + o19);
}

// variable with same name with init


// argument with same name
var o22 = function o23(o23)
{
    write("Test6: " + o23);
}

// argument with same name and assignment
var o24 = function o25(o25)
{
    write("Test7: " + o25);
    o25 = 100;
    write("Test7: " + o25);
}

// argument with same name and assignment
var o26 = function o27(o27)
{
    write("Test8: " + o27);
    o27 = 100;
    write("Test8: " + o27);
    write("Test8: " + arguments[0]);
}

// argument with same name and assignment
var o28 = function o29(o29)
{
    write("Test9: " + o29);
    arguments[0] = 100;
    write("Test9: " + o29);
    write("Test9: " + arguments[0]);
}

eval("var Test10 = function F_Test10(){}");

var o30 = function o31()
{
    eval('write("Test11: " + F_Test11)');
}

eval("var Test12 = function F_Test12(){eval('write(\"Test12: \" + F_Test12)');}");

// funcexpression assigned a value
var o32 = function o33()
{
    write("Test13: " + o33);
    eval("F_Test13 = 100");
    write("Test13: " + o33);
}

// variable with same name with init
var o34 = function o35()
{
    write("Test14: " + o35);
    eval("var F_Test14 = 100;");
    write("Test14: " + o35);
}

// variable with same name with init
var o36 = function o37()
{
    write("Test15: " + o37);
    eval("var F_Test15;");
    write("Test15: " + o37);
    eval("F_Test15 = 100;");
    write("Test15: " + o37);
}

// argument with same name
var o38 = function o39(o39)
{
    eval("write(F_Test16)");
}

// argument with same name and assignment
var o40 = function o41(o41)
{
    write("Test17: " + o41);
    eval("F_Test17 = 100;");
    write("Test17: " + o41);
}

// argument with same name and assignment
var o42 = function o43(o43)
{
    write("Test18: " + o43);
    eval("F_Test18 = 100;");
    write("Test18: " + o43);
    write("Test18: " + arguments[0]);
}

// argument with same name and assignment
var o44 = function o45(o45)
{
    write("Test19: " + o45);
    eval("arguments[0] = 100;");
    write("Test19: " + o45);
    write("Test19: " + arguments[0]);
}

var o46 = function o47()
{
  function o48()
  {
      eval("var F_Test20 = 10");
      write(o47);   
  } 
  o48();
  o1.o2(o47);
  return 0;
}

var o49 = function o50() 
{
    try {
        var o51 = function o52() {
            var o53 = function o54() {
                eval("WScript.Echo(y)");
                eval("y = 'legacy only'");
                eval("WScript.Echo(y)");
            }
            o53();
        }
        o51();
    } catch (o55) {
        o1.o2(o55);
    }
}

var o56 = function o57()
{
    eval('try {} catch(e) {} (function e(x){}); WScript.Echo(e);');
    return o8;
}

var o58 = function o59() {
    var o51 = 1;
    new (function o60() { 
        with({}) { 
            o1.o2('typeof g === ' + typeof o60);
            o1.o2('typeof F_Test23 === ' + typeof o59);
            o1.o2('typeof x === ' + typeof o51);
            if (!o51) 
                o60(); 
        } 
    } );
}

var o61 = 24;

for (var o62=0;o62<o61;o62++)
{
    o4("Test" + o62 + "();");
    o4("Test" + o62 + "('hello');");
    o4("F_Test" + o62 + "();");
}
