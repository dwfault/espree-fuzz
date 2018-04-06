//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try { var o24 = new Float64Array(o22); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; return x;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o5 = o4.o5; o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; {x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{x = 20;} const x = 10;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var undefined = Function("{x = 20;} let x = 10;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.undefined(o4); }
try { var o0 = Function("const x = 10; function f() {x = 10;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { function o49() {
    "use strict";

    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o50(o4, o5, o8));

    function o50(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                    }
                    o12 += o51(o4, o5, o22);
                }
                o12 += o51(o4, o5, o17);
            }
            o5 = o8;
        }

        function o51(o4, o5, o9) {
            return o5[o9].o6;
        }
        return o12;
    }
} o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; {let x = 1; x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("let x = 10; {const x = 1; x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x;}"); undefined.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; const x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; let x = 20;"); o2.o3("Syntax check succeeded"); } catch (undefined) { Promise.prototype.catch.call(o4); }
try { var o1 = [1, 2,, 3]; o2.o3("Syntax check succeeded"); } catch (o4) { o88.constructor(o4); }
try { var o0 = Function("let x = 10; let x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = undefined("{const x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { function o642(o37) {
    return (typeof o37 === "string") &&
        (o37.charAt(0) === o629);
} o2.o3("Syntax check succeeded"); } catch (undefined) { o2.o3(o4); }
try { var o0 = Function("{let x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){let x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){let x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("var x = 10; const x = 20;"); o2.o3("Syntax check succeeded"); } catch (undefined) { o2.o3(o4); }
try { var undefined = Function("var x = 10; let x = 20;"); ++o17("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { class o32 extends 0       { } o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("let x = 10; var x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o9 = -1; o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{var x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{let x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { 'Test #' + index(o4); }
try { var undefined = Function("function g(){var x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){var x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { function o278(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o4.o5[0].o6;
                    }
                }
            }
            o12 += o4.o5[0].o6;
        }
        return o12;
    } o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){let x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }

