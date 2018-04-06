//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { o2.o3(o1) }

let o4 = 'global';

for (let o4 = 'for'; undefined = function() { o4 += ' loop' }; ) {
    o5(o5[0].o6 = -o5[0].o6 - 1);
    print(o4);
    break;
}
print(o4);

for (let o4 in new o207()) {
    let o5 = function() { o4 = 'for-in loop'; };
    o5(o458.o435 = o85);
    print(o4);
    break;
}
print(o4);

try { eval('for (let a = 123 in this) { }'); print(undefined); } catch (o7) { print(undefined); }
try { eval('for (const a = 123 in this) { }'); print('fail'); } catch (o7) { print(o7); }
try { eval('function foo() { for (let a = 123 in this) { } } foo();'); print('fail'); } catch (o7) { print(o7); }
try { eval('function foo() { for (const a = 123 in this) { } } foo();'); print('fail'); } catch (o7) { print(o7); }
try { eval('function foo() { { for (var a = 123 in []) { } let a; } } foo();'); print('fail'); } catch (o7) { print(o7); }

function o8() {
    eval('');

    o9;
    let o10;
    for (let o9; false;) {
        // this var should get a slot before v1 via EnsureScopeSlot
        // to ensure that the slot order is the same as the SlotArray
        var o9 = 0;
    }
}
undefined();

// Should allow (implicit) initialization of const in for-in/for-of
function undefined() {
    for (const o1 in {o4:'a',o12:'b'}) {
        o2.o3(o1);
    }
}
o11();

function o13() {
    for (const o1 of o15.o16('getter', o62, "getter calls function correctly")) {
        o2.undefined(o1);
    }
}
o13(o4.o5[-1]);

// Should not allow const without initializer in standard for loop header
try { eval('for (const x; x < 0;) { WScript.Echo(x); }'); } catch (o7) { print(o7); }
