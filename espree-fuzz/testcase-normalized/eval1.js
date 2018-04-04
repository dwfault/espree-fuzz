//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Let/const redecl/reassign cases in presence of eval.
// Eval creates its own block scope, preventing let and const variables from leaking out.

function write(o1) { o2.o3(o1) }

// Global scope.
const o4 = 'global z';
let o5 = 'global w';

eval('let x = "global x"; const y = "global y"; write(z);');

try { write(o1); } catch (o7) { write(o7); }
try { write(o8); } catch (o7) { write(o7); }

// Try redeclaration at global scope.
try {
    eval('var z = "global var z";');
}
catch(o7) {
    write(o7);
}
try {
    eval('var w = "global var w";');
}
catch(o7) {
    write(o7);
}

// Block scope in global function.
try {
    const o4 = 'global block z';

    eval('let x = "global block x"; const y = "global block y"; write(z);');

    try { write(o1); } catch (o7) { write(o7); }
    try { write(o8); } catch (o7) { write(o7); }

    // function declared in global block.
    o9();

    function o9() {
        let o5 = 'outer w';

        // Try redeclaration at function scope.
        try {
            eval('var w = "outer var w";');
        }
        catch(o7) {
            write(o7);
        }
        write(o5);

        try {
            const o4 = 'outer z';

            eval('let x = "outer x"; const y = "outer y"; write(z);');

            try { write(o1); } catch (o7) { write(o7); }
            try { write(o8); } catch (o7) { write(o7); }

            // Try assigning const y; shouldn't see const y and instead create function var y
            eval('y = "outer var y";');
            write(o8);

            // function nested within function body.
            o10();
            write(o8);

            function o10() {
                let o5 = 'inner w';

                // Try redeclaration at function scope.
                try {
                    eval('var w = "inner var w";');
                }
                catch(o7) {
                    write(o7);
                }
                write(o5);

                try {
                    const o4 = 'inner z';

                    // const y shouldn't affect outer y
                    eval('let x = "inner x"; const y = "inner y"; write(z);');

                    try { write(o1); } catch (o7) { write(o7); }
                    write(o8); // outer var y
                }
                catch(o7) {
                    write(o7);
                }

                function o11() {
                    let o12 = "b";
                    const o13 = "a";
                    o12 += "a";
                    eval("WScript.Echo(yy);")
                    o2.o3(o12);
                }
                o11();
            }
        }
        catch(o7) {
            write(o7);
        }
    }
}
catch(o7) {
    write(o7);
}

// BLUE Bug 454963 (shouldn't crash)
{
    with ({})
        eval("");
    function o14() { o1; }
    let o1;
}

this.eval('let x = 0; function f() { return x; }; WScript.Echo(f());');