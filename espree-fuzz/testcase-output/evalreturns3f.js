//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

// for loop that produces a value
write(eval('for (var i = 0; i < 1; i++) { i; var q = "wrong"; }') + '');
// for loop that doesn't
write(eval('for (i = 0; i < 0; i++) { i; var q = "wrong"; }') + '');
// another for loop that doesn't
write(eval('for (i = 0; i < 1; i++) { var q = "wrong"; }') + '');

// if that executes nothing
write(eval('if (i = 0) { i; }') + '');
// if with a value
write(eval('if (i = 1) { i; }') + '');
// if-else with value in if
write(eval('if (i = 0) { ++i; } else { i; var q = "wrong"; }') + '');
// if-else with value in else
write(eval('if (i = 1) { ++i; } else { i; var q = "wrong"; }') + '');

// try-catch with value in try
write(eval('try { "hello"; throw 0; } catch(e) {}') + '');
// try-catch with value in try and catch
write(eval('try { "hello"; throw 0; } catch(e) {++e;}') + '');
// try-catch with no value
write(eval('try { throw 0; } catch(e) { var q = "wrong"; }') + '');
// try-catch with value in catch
write(eval('try { throw 0; } catch(e) { ++e; var q = "wrong"; }') + '');

// try-finally with value in try
write(eval('try { "hello"; } finally {}') + '');
// try-finally with value in finally
write(eval('try { "hello"; } finally {"goodbye";}') + '');
// try-finally with no value
write(eval('try {} finally { var q = "wrong"; }') + '');
// try-finally with value only in finally
write(eval('try {} finally { "good night"; var q = "wrong"; }') + '');

// Function expressions produce a value but function declarations don't
write(eval("(function () { });")); // different behavior in standards mode
write(eval("1; (function () { });")); // different behavior in standards mode
write(eval("(function () { }); 2;"));
write(eval("1; (function () { }); 2;"));
write(eval("function x() { };"));
write(eval("1; function x() { };"));
write(eval("function x() { }; 2;"));
write(eval("1; function x() { }; 2;"));

// eval of switch returns the last expression statement's value
write(eval("switch(1) { case 2: 3; break; case 1: 2; break; default: 7; break }"));

// eval of a comma expression
function o3(){return false;}
function o1222() {
    "use strict";

    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = [];
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = -o5[o8];
    return o9(o1223(o4, o5, o7));

    function o1223(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                        o11 += o4.o5[-1];
                    }
                }
            }
            o11 += o4.o5[-1];
        }
        return o11;
    }
};
write(eval("ret_true(),ret_false();"));

try {
    // post-increment a function result (should throw)
    write(eval("++({ f: function() { } }.f());"));
}
catch(o5) {
    write(o5.o6);
}

write(eval.call());
write(eval.call('test'));
write(eval.call('test1', '"test2"'));