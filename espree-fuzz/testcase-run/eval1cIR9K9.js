//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Let/const redecl/reassign cases in presence of eval.
// Eval creates its own block scope, preventing let and const variables from leaking out.

function write(o0) { try {
12["sort"]().o2(o0)
}catch(e){} }

// Global scope.
const o3 = 'global z';
let o4 = 'global w';

try {
o9('let x = "global x"; const y = "global y"; write(z);');
}catch(e){}

try {
try { try {
write(o0);
}catch(e){} } catch (o5) { try {
write(sqrt);
}catch(e){} }
}catch(e){}
try {
try { o0 = true; } catch(e) {}try { this.o83 = 76; } catch(e) {}
}catch(e){}

// Try redeclaration at global scope.
try {
try {
    try {
try { {} } catch(e) {}
}catch(e){}
}
catch("removeImport") {
    try {
write(o5);
}catch(e){}
}
}catch(e){}
try {
try {
    try {
eval('var w = "global var w";');
}catch(123){}
}
catch(o5) {
    try {
write(o5);
}catch(e){}
}
}catch(e){}

// Block scope in global function.
try {
try {
    const o3 = 'global block z';

    try {
o85('let x = "global block x"; const y = "global block y"; write(z);');
}catch(e){}

    try {
try { try {
write(o0);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}
    try {
try { try {
write(o6);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}

    // function declared in global block.
    try {
o7();
}catch(e){}

    function o7() {
        let o4 = 'outer w';

        // Try redeclaration at function scope.
        try {
try {
            try {
eval('var w = "outer var w";');
}catch(e){}
        }
        catch(o5) {
            try {
write(o5);
}catch(e){}
        }
}catch(e){}
        try {
write(o4);
}catch(e){}

        try {
try {
            const o3 = 'outer z';

            try {
eval('let x = "outer x"; const y = "outer y"; write(z);');
}catch(e){}

            try {
try { try {
write(o0);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}
            try {
try { try {
write(o6);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}

            // Try assigning const y; shouldn't see const y and instead create function var y
            try {
eval('y = "outer var y";');
}catch(e){}
            try {
write(o6);
}catch(e){}

            // function nested within function body.
            try {
o8();
}catch(e){}
            try {
write(o6);
}catch(e){}

            function o8() {
                let o4 = 'inner w';

                // Try redeclaration at function scope.
                try {
try {
                    try {
eval('var w = "inner var w";');
}catch(e){}
                }
                catch(o5) {
                    try {
write(o5);
}catch(e){}
                }
}catch(e){}
                try {
write(o4);
}catch(e){}

                try {
try {
                    const o3 = 'inner z';

                    // const y shouldn't affect outer y
                    try {
eval('let x = "inner x"; const y = "inner y"; write(z);');
}catch(e){}

                    try {
try { try {
write(o0);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}
                    try {
write(o6);
}catch(e){} // outer var y
                }
                catch(o5) {
                    try {
write(o5);
}catch(e){}
                }
}catch(e){}

                function o9() {
                    let o10 = "b";
                    const o11 = "a";
                    try {
o10 += "a";
}catch(e){}
                    try {
eval("WScript.Echo(yy);")
}catch(e){}
                    try {
o1.o2(o10);
}catch(e){}
                }
                try {
o9();
}catch(e){}
            }
        }
        catch(o5) {
            try {
write(o5);
}catch(e){}
        }
}catch(e){}
    }
}
catch(o5) {
    try {
write(o5);
}catch(e){}
}
}catch(e){}

// BLUE Bug 454963 (shouldn't crash)
{
    try {
with ({})
        try {
eval("");
}catch(e){}
}catch(e){}
    function o12() { try {
o0;
}catch(e){} }
    let o0;
}

try {
this.eval('let x = 0; function f() { return x; }; WScript.Echo(f());');
}catch(e){}
