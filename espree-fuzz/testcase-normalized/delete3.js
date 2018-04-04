//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4;

// Delete locals
(function o5() {
    var o6;
    var o7 = 10;

    write("p : " + o6);
    o4 = delete o6;
    write("delete p: " + o4);
    write("p : " + o6);

    write("q : " + o7);
    o4 = delete o7;
    write("delete q: " + o4);
    write("q : " + o7);
}) ();

o8 = 10;
// Delete globals
(function o9() {
    o10 = 20;

    write("test2_value : " + o8);
    o4 = delete o8;
    write("delete test2_value: " + o4);

    try {
        write("test2_value : " + o8);
        write("delete test2_value failed");
    } catch (o11) {
        write("delete test2_value passed");
    }

    write("test2_local : " + o10);
    o4 = delete o10;
    write("delete test2_local: " + o4);

    try {
        write("test2_local : " + o10);
        write("delete test2_local failed");
    } catch (o11) {
        write("delete test2_local passed");
    }
}) ();

// Deleting parameters
(function o12(o13,o14,o15) {
    write("Test3 x : " + o13 + " y: " + o14 + " z: " + o15);

    o4 = delete o13;
    write("delete x: " + o4);

    o4 = delete o14;
    write("delete x: " + o4);

    o4 = delete o15;
    write("delete x: " + o4);

    write("Test3 x : " + o13 + " y: " + o14 + " z: " + o15);
 })(10, "hello");

// Delete arguments[i]
(function o16(o13,o14,o15) {
    write("Test4 x : " + o13 + " y: " + o14 + " z: " + o15);
    write("Test4 arguments[0] : " + arguments[0] + " arguments[1]: " + arguments[1] + " arguments[2]: " + arguments[2]);

    o4 = delete arguments[0];
    write("delete arguments[0]: " + o4);

    o4 = delete arguments[2];
    write("delete arguments[2]: " + o4);

    write("Test4 x : " + o13 + " y: " + o14 + " z: " + o15);
    write("Test4 arguments[0] : " + arguments[0] + " arguments[1]: " + arguments[1] + " arguments[2]: " + arguments[2]);
}) (10, "hello");

// Delete nested function
(function o18() {

    function o19() { return 100;}

    o4 = delete o19;
    write("Test5: delete function " + o4);
    write("test5_func() :" + o19());
}) ();

// Delete this
(function o20() {
    try {
        o4 = delete this;
    } catch (o11) {
        write("Exception delete this : " + o11.o21);
    }
    write("Test6: delete this: " + o4);
}) ();

// Delete a global function
function o22() {}
(function o23() {
    o4 = delete o22;
    write("Test7: delete test7_value: " + o4);
}) ();

// Delete arguments
(function o24() {
    o4 = delete arguments;
    write("Test8: delete arguments: " + o4);
}) ();

// Delete exception
(function o25() {
    try {
        throw 10;
    } catch(o11) {
        o4 = delete o11;
    }
    write("Test9: delete exception: " + o4);
})();

// Delete exception
(function o26() {
    try {
        throw new Error("some error");
    } catch(o11) {
        o4 = delete o11;
    }
    write("Test10: delete exception: " + o4);
})();

// Delete variable declared using eval
(function o28(){
    eval("var x = 10;");
    o4 = delete o13;
    write("Test11: delete x: " + o4);
}) ();

// Delete variable declared using eval, in eval
(function o30(){
    eval("var x = 10;");
    o4 = eval("delete x");
    write("Test12: delete x: " + o4);
}) ();

// Delete variable in eval
(function o31(){
    var o13;
    o4 = eval("delete x;");
    write("Test13: delete x: " + o4);
}) ();

// Delete function in eval
(function o32(){
    function o33() { return 100;}
    o4 = eval("delete f;");
    write("Test14: delete f: " + o4);
}) ();

// Delete function in eval, declared in eval
(function o34(){
    eval("function f() { return 100;}");
    o4 = eval("delete f;");
    write("Test15: delete f: " + o4);
}) ();

// Delete function, declared in eval
(function o35(){
    eval("function f() { return 100;}");
    o4 = delete o33;
    write("Test16: delete f: " + o4);
}) ();

// Delete arguments in function declared and called in eval
(function o36(){
    o4 = eval("function test17_value(){ return delete arguments; }; test17_value();");

    write("Test17: delete test17_value: " + o4);
}) ();

// With cases

// Delete local variable, not in with
(function o37(){
    var o38 = 10;
    var o39 = {};

    with(o39){
        o4 = delete o38;
    }

    write("Test18: delete test18_value: " + o4);
    write("test18_value : " + o38);
}) ();

// Delete variable in with
(function o40(){
    var o41 = 10;
    var o39 = { o41 : 20 };

    with(o39){
        o4 = delete o41;
    }

    write("Test19: delete test19_value: " + o4);
    write("test19_value : " + o41);
    write("o.test19_value : " + o39.o41);
}) ();

// Delete local variable, not in with inside eval
(function o42(){
    var o43 = 10;
    var o39 = {};

    with(o39){
        o4 = eval("delete test20_value");
    }

    write("Test20: delete test20_value: " + o4);
    write("test20_value : " + o43);
}) ();

// Delete variable in with, inside eval
(function o44(){
    var o45 = 10;
    var o39 = { o45 : 20 };

    with(o39){
        o4 = eval("delete test21_value");
    }

    write("Test21: delete test21_value: " + o4);
    write("test21_value : " + o45);
    write("o.test21_value : " + o39.o45);
}) ();

// Delete variable in multi level with!!!
(function o46(){
    var o47 = 10;
    var o48 = { o47 : 20 };
    var o49 = { o47 : 30 };
    var o50 = { o47 : 40 };
    var o51 = { o47 : 50 };

    with(o48){
        with(o49){
            with(o50){
                with(o51){
                    o4 = delete o47;
                }
            }
        }
    }

    write("Test22: delete test22_value: " + o4);
    write("test22_value : " + o47);
    write("o1.test22_value : " + o48.o47);
    write("o2.test22_value : " + o49.o47);
    write("o3.test22_value : " + o50.o47);
    write("o4.test22_value : " + o51.o47);
}) ();

(function o52(){
    var o53 = 10;
    var o48 = { o53 : 20 };
    var o49 = { o53 : 30 };
    var o50 = { o53 : 40 };
    var o51 = { o53 : 50 };

    with(o48){
        with(o49){
            with(o50){
                with(o51){
                    o4 = eval("delete test23_value");
                }
            }
        }
    }

    write("Test23: delete test23_value: " + o4);
    write("test23_value : " + o53);
    write("o1.test23_value : " + o48.o53);
    write("o2.test23_value : " + o49.o53);
    write("o3.test23_value : " + o50.o53);
    write("o4.test23_value : " + o51.o53);
}) ();

var o54 = 1;
(function o55(){
    var o54 = 10;
    var o39 = { o54 : 20 };

    with(o39){
       o4 = delete o54;
    }

    write("Test24: delete Test24_value: " + o4);
    write("Test24_value : " + o54);
    write("o.Test24_value : " + o39.o54);
}) ();

var o56 = 1;
(function o57(){
    var o39 = { o56 : 20 };

    with(o39){
       o4 = eval("delete Test25_value");
    }

    write("Test25: delete Test25_value: " + o4);
    write("Test25_value : " + o56);
    write("o.Test25_value : " + o39.o56);
}) ();

var o58 = 1;
(function o59(){
    var o39 = new Object();

    with(o39){
       o4 = delete o58;
    }

    write("Test26: delete Test26_value: " + o4);
    write("Test26_value : " + o58);
    write("o.Test26_value : " + o39.o58);
}) ();

var o61 = 1;
(function o62(){
    var o39 = new Object();

    with(o39){
       o4 = delete o61;
    }

    write("Test27: delete Test27_value: " + o4);
    write("Test27_value : " + o61);
    write("o.Test27_value : " + o39.o61);
}) ();

// Function Declaration. And eval with same name
function o63()
{
    write("Func28.1 :" + typeof(o63));

    eval("var Func28 = 1;");
    write("Func28.2 :" + typeof(o63));

    o4 = delete o63;
    write("Func28: delete Func28: " + o4);
    write("Func28.3 :" + typeof(o63));

    eval("var Func28 = 1;");
    write("Func28.4 :" + typeof(o63));

    eval("r = delete Func28;");
    write("Func28: delete Func28: " + o4);
    write("Func28.5 :" + typeof(o63));
}
o63();

(function o64()
{
    write("Expr29.1 :" + typeof(o64));

    eval("var Expr29 = 1;");
    write("Expr29.2 :" + typeof(o64));

    o4 = delete o64;
    write("Expr29: delete Expr29: " + o4);
    write("Expr29.3 :" + typeof(o64));

    eval("var Expr29 = 1;");
    write("Expr29.4 :" + typeof(o64));

    eval("r = delete Expr29;");
    write("Expr29: delete Expr29: " + o4);
    write("Expr29.5 :" + typeof(o64));
})()

function o65()
{
    write("Func30.1 :" + typeof(o65));
    eval("var Func30 = 1;");

    eval('write("Func30.2 :" + typeof(Func30));');
    eval('eval("var Func30 = {};");');
    eval('write("Func30.3 :" + typeof(Func30));');

    var o66 = '(function Func30_inner() {' +
              '   write("Func30.4 :" + typeof(Func30));' +
              '   r = delete Func30; ' +
              '   write("Func30: delete Func30: " + r);' +
              '   write("Func30.5 :" + typeof(Func30));' +
              '   r = delete Func30; ' +
              '   write("Func30: delete Func30: " + r);' +
              '   write("Func30.6 :" + typeof(Func30));' +
              '})();';

    eval(o66);
    write("Func30.7 :" + typeof(o65));
}
o65();

(function o67()
{
    write("Expr31.1 :" + typeof(o67));
    eval("var Expr31 = 1;");

    eval('write("Expr31.2 :" + typeof(Expr31));');
    eval('eval("var Expr31 = {};");');
    eval('write("Expr31.3 :" + typeof(Expr31));');

    var o66 = '(function Expr31_inner() {' +
              '   write("Expr31.4 :" + typeof(Expr31));' +
              '   r = delete Expr31; ' +
              '   write("Expr31: delete Expr31: " + r);' +
              '   write("Expr31.5 :" + typeof(Expr31));' +
              '   r = delete Expr31; ' +
              '   write("Expr31: delete Expr31: " + r);' +
              '   write("Expr31.6 :" + typeof(Expr31));' +
              '})();';

    eval(o66);
    write("Expr31.7 :" + typeof(o67));
})()
