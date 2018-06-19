//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Let/const redecl/reassign cases in presence of eval.
// Eval creates its own block scope, preventing let and const variables from leaking out.

function o950() {
  try {
if (o947()) {
    try {
try {
      var o951 = 0;
      try {
while (o952("FREEZE_" + o90.name + "_" + o951) != null) {
        try {
o951++;
}catch(e){}
      }
}catch(e){}
      try {
o953("FREEZE_" + o90.name + "_" + o951, o90.o603());
}catch(e){}
      try {
o113("Saved the current state as: FREEZE_" + o90.name + "_" + o951, 0);
}catch(e){}
    }
    catch (o68) {
      try {
o113("Could not save the current emulation state(\"" + o68.o114 + "\").", 2);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot be saved while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}

// Global scope.
const o3 = 'global z';
let o525 = o489.o617(o31, {
                    o696: !(flags & 131072)
                });

try {
eval('let x = "global x"; const y = "global y"; write(z);');
}catch(e){}

try {
try { try {
o51(o0);
}catch(e){} } catch (o5) { try {
write(o5);
}catch(e){} }
}catch(e){}
try {
try { try {
write(e);
}catch(e){} } catch (name) { try {
write(o5);
}catch(e){} }
}catch(e){}

// Try redeclaration at global scope.
try {
try {
    try {
eval('var z = "global var z";');
}catch(e){}
}
catch(includes) {
    try {
write(o5);
}catch(e){}
}
}catch(e){}
try {
try {
    try {
eval('var w = "global var w";');
}catch(e){}
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
eval('let x = "global block x"; const y = "global block y"; write(z);');
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