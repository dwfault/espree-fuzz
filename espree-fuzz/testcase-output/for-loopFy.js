//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o0) { o1.o2(o0) }



for (let o3 = 'for'; o4 = function() { o3 += ' loop' }; ) {
    o4();
    print(o3);
    break;
}
print(o3);

for (let o3 in this) {
    let o4 = function() { o3 = 'for-in loop'; };
    o4();
    print(o3);
    break;
}
print(o3);

try { eval('for (let a = 123 in this) { }'); print('fail'); } catch (o5) { print(o5); }
try { eval('for (const a = 123 in this) { }'); print('fail'); } catch (o5) { print(o5); }
try { eval('function foo() { for (let a = 123 in this) { } } foo();'); print('fail'); } catch (o5) { print(o5); }
try { eval('function foo() { for (const a = 123 in this) { } } foo();'); print('fail'); } catch (o5) { print(o5); }
try { eval('function foo() { { for (var a = 123 in []) { } let a; } } foo();'); print('fail'); } catch (o5) { print(o5); }

function o6() {
    eval('');

    o7;
    let o8;
    for (let o7; false;) {
        // this var should get a slot before v1 via EnsureScopeSlot
        // to ensure that the slot order is the same as the SlotArray
        var o7 = 0;
    }
}
o6();

// Should allow (implicit) initialization of const in for-in/for-of
function o9() {
    for (const o0 in {o3:'a',o10:'b'}) {
        o1.o2(o0);
    }
}
o9();

function o11() {
    for (const o0 of ['a', 'b']) {
        o1.o2(o0);
    }
}
o11();

// Should not allow const without initializer in standard for loop header
try { eval('for (const x; x < 0;) { WScript.Echo(x); }'); } catch (o5) { print(o5); }
