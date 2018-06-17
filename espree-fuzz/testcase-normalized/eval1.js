//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Let/const redecl/reassign cases in presence of eval.
// Eval creates its own block scope, preventing let and const variables from leaking out.

function write(o0) { o1.o2(o0) }

// Global scope.
const o3 = 'global z';
let o4 = 'global w';

eval('let x = "global x"; const y = "global y"; write(z);');

try { write(o0); } catch (o5) { write(o5); }
try { write(o6); } catch (o5) { write(o5); }

// Try redeclaration at global scope.
try {
    eval('var z = "global var z";');
}
catch(o5) {
    write(o5);
}
try {
    eval('var w = "global var w";');
}
catch(o5) {
    write(o5);
}

// Block scope in global function.
try {
    const o3 = 'global block z';

    eval('let x = "global block x"; const y = "global block y"; write(z);');

    try { write(o0); } catch (o5) { write(o5); }
    try { write(o6); } catch (o5) { write(o5); }

    // function declared in global block.
    o7();

    function o7() {
        let o4 = 'outer w';

        // Try redeclaration at function scope.
        try {
            eval('var w = "outer var w";');
        }
        catch(o5) {
            write(o5);
        }
        write(o4);

        try {
            const o3 = 'outer z';

            eval('let x = "outer x"; const y = "outer y"; write(z);');

            try { write(o0); } catch (o5) { write(o5); }
            try { write(o6); } catch (o5) { write(o5); }

            // Try assigning const y; shouldn't see const y and instead create function var y
            eval('y = "outer var y";');
            write(o6);

            // function nested within function body.
            o8();
            write(o6);

            function o8() {
                let o4 = 'inner w';

                // Try redeclaration at function scope.
                try {
                    eval('var w = "inner var w";');
                }
                catch(o5) {
                    write(o5);
                }
                write(o4);

                try {
                    const o3 = 'inner z';

                    // const y shouldn't affect outer y
                    eval('let x = "inner x"; const y = "inner y"; write(z);');

                    try { write(o0); } catch (o5) { write(o5); }
                    write(o6); // outer var y
                }
                catch(o5) {
                    write(o5);
                }

                function o9() {
                    let o10 = "b";
                    const o11 = "a";
                    o10 += "a";
                    eval("WScript.Echo(yy);")
                    o1.o2(o10);
                }
                o9();
            }
        }
        catch(o5) {
            write(o5);
        }
    }
}
catch(o5) {
    write(o5);
}

// BLUE Bug 454963 (shouldn't crash)
{
    with ({})
        eval("");
    function o12() { o0; }
    let o0;
}

this.eval('let x = 0; function f() { return x; }; WScript.Echo(f());');
