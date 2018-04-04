//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This bailout instruction should not be dead-store-removed after copy-prop
function o0() {
    var o1 = new Uint8Array(1);
    return o1[-1] * 0 - 1 <= 0 ? false : true;
}
o3.o4("test0: " + o0());

// This bailout instruction should not be dead-store-removed after copy-prop
function o5() {
    var o1 = new Uint8Array(1);
    var o6 = o1[-1] * 0;
    --o6;
    return o6 <= 0 ? false : true;
}
o3.o4("test1: " + o5());

// This bailout instruction should not be dead-store-removed after copy-prop
function o7(o1, o6) {
    o6 &= 1;
    return (o1 * 0 + o6) * 0 < 0 ? false : true;
}
for(var o8 = 0; o8 < 1000; ++o8)
    o7(0, 0);
o3.o4("test2: " + o7({ valueOf: function() { o3.o4("test2: valueOf a"); } }, 0));

// This lossy conversion of 'a' to int32 should not be dead-store-removed since it has (or may have) side effects. Also, if the
// 'while' loop condition is not const-folded, due to 'a |= 0', the conversion would be changed into a lossless conversion of
// 'a' to int32. That conversion should also not be dead-store-removed even though const-prop would cause it to be a dead store,
// since it has (or may have) side effects.
function o10(o1, o6) {
    while((o1 & 1) * 0 + 1 == o6 * 0)
        o1 |= 0;
    return o1 * 0 - 1 <= 0 ? false : true;
}
for(var o8 = 0; o8 < 1000; ++o8)
    o10(0, 0);
o3.o4("test3: " + o10({ valueOf: function() { o3.o4("test3: valueOf a"); } }, 0));

// - The value of 'm' becomes NumberAndLikelyIntValue on merge after the first loop
// - The assign to 'm' after that causes only the var version of 'm' to be live
// - '1 > m' in the second loop causes 'm' to be lossless int32-specialized and invariant-hoisted to the landing pad
// - The lossy conversion of 'm' in 'i |= m' should be removed and instead use the already hoisted lossless conversion
function o11() {
    var o12 = 1;
    for(var o8 = 0; o8 < 1; ++o8)
        --o12;
    1.1 ? 1 : o12 = o13++;
    for(var o8 = 0; o8 < 1; ++o8) {
        1.1 ? 1 : 1 > o12 ? 1 : 1;
        if(1)
            o8 |= o12;
    }
    return o12;
}
o3.o4("test4: " + o11());

// - Say 'a' gets value number 1 at the beginning
// - With aggressive int type spec, 'a = b' will give a new value number to 'a' in the loop prepass, say 2
// - Upon merging after the 'if', 'a' should be given a new value number, say 3. A bug occurs if it's given value number 1.
// - Upon merging on the loop back-edge, the entry value of 'a' must be different from the back-edge value of 'a' to signify
//   that its value changed inside the loop. If 'a' was given value number 1 upon merging after the 'if', it would appear as
//   though 'a' is invariant through the loop. If 'a' was given value number 3, since this is a loop back-edge, 'a' would be
//   given a NumberAndLikelyIntValue.
// - In 'return a', 'a' should not have an int constant value, and 'a' should not be constant-propagated to 0. If it was seen as
//   invariant through the loop, 0 would get constant-propagated here and the result would be incorrect. 'a' should have a
//   NumberAndLikelyIntValue at this point.
function o14(o15) {
    var o1 = 0;
    for(var o6 = 0; o6 < o15; ++o6)
        if(o15 === 2)
            o1 = o6;
    return o1;
}
o3.o4("test5: " + o14(2));

// - In the loop prepass:
//     - At 'a = b', 'b' has an int value, so 'a' also has an int value
//     - At 'b = c', 'c' has an int value, so 'b' also has an int value
//     - At 'c += 1.1', 'c' now has a float value
// - After merge, 'a' and 'b' are live as ints on entry and have NumberAndLikelyInt values
// - In the optimization pass:
//     - At 'a = b', 'a' has a NumberAndLikelyIntValue, allowing it to be int-specialized
//     - At 'b = c', 'b' now has a float value
//     - On the back-edge, since 'b' was live as a lossless int32 in the loop header, the float value of 'b' needs to be
//       losslessly converted to an int
// - This is an almost guaranteed bailout case, and since a var version of 'b' is not available and float-to-int with bailout is
//   not supported, the compiler needs to bail out, disable aggressive int type specialization, and rejit the code gen work item
function o16() {
    var o1, o6 = 0, o15 = 0;
    for(var o8 = 0; o8 < 3; ++o8) {
        o1 = o6;
        o6 = o15;
        o15 += 1.1;
    }
    return o1;
}
o3.o4("test6: " + o16());

// - Same as above, but requires one extra pass to flush out all dependencies
function o17() {
    var o1, o6 = 0, o15 = 0, o18 = 0;
    for(var o8 = 0; o8 < 4; ++o8) {
        o1 = o6;
        o6 = o15;
        o15 = o18;
        o18 += 1.1;
    }
    return o1;
}
o3.o4("test7: " + o17());

// - Profile data is taken only going through the 'else' block, so 'o.p' is flagged as likely int
// - When jitting with profile data, the two 'o.p' accesses share inline caches, so the reference in the 'if' block also says
//   it's likely int, even though it's definitely not (a string is assigned to 'o.p' just before in the 'if' block)
// - The source of the add in the 'if' block is copy-propped with the sym holding the string, and the load-field is changed into
//   a direct load. The destination of that is a single-def sym, so the sym is marked as definitely not int.
// - Even though the profile data says that the value is likely int, it should not override the "definitely not int" flag on the
//   sym since it will guarantee bailout.
// - Note: The guaranteed bailout problem still exists with 'o' not being a slot variable since that causes 'o.p' to be hoisted
//   into a stack sym that is not single-def, so we lose the information that it's definitely not an int in the 'if' block
function o19(o1) {
    var o20 = { o21: 0 };
    for(var o8 = 0; o8 < 1; ++o8) {
        if(o1) {
            o20.o21 = "";
            ++o20.o21;
        } else
            ++o20.o21;
    }
    return o20.o21;

    function o22() { o20; }
}
o3.o4("test8: " + o19(false));

// - At 'u++', there is a Conv_Num of the original value before the increment
// - In the loop prepass, since 'u' starts off as an int32, the source of the Conv_Num has an int constant value, and Conv_Num
//   is int-specialized
// - In the loop prepass, when aggressive int type specialization is off, the destination value of Conv_Num must not be
//   transferred from the source, because 'u' is changing in the loop. Since we don't yet know that 'u' is changing (the add
//   comes after Conv_Num), the destination must be given a new value. Otherwise, if the destination sym is live as an int on
//   entry into the loop, it will have to do a lossless conversion to int on the loop back-edge, and that's not allowed when
//   aggressive int type specialization if off.
function o23() {
    var o24, o6, o25;
    for(var o26 = [[0]], o20 = 0; o20 < o26.length; ++o20) {
        o26[0].length = (0x3fffffff << 1) + 3;
        for(o24 = o26[o20], o6 = o24.length, o25 = 0x3fffffff << 1; o25 < o6; o25++)
            o6 !== 0 && o26.push(0);
    }
}
o3.o4("test9: " + o23());

// - The Sub is not int-specialized because it's not worth specializing it
// - Since the result of the Sub is used in a bitwise operation, int overflow is ignored on the sub
// - However, since the Sub is not specialized, the result of the Sub should not be given a definitely-int value since its srcs
//   will not be converted to int with bailout checks to ensure that they're ints
function o29(o1) {
    return (610611150 * 1322123869 - o1) | 0;
};
o3.o4("test10: " + o29(0));

// - 'a = (1 - a) * -1' is rewritten by the lowerer as the following, to make the destination and first source the same:
//     a = 1 - a
//     a = a * -1
// - When 'a * -1' bails out due to producing -0, the value of 'b' must be restored. It must not be restored from 'a' because it
//   changed before the bailout (at 'a = 1 - a'). It's ok that it changed because it will be overwritten anyway. Instead, the
//   sym corresponding to 'b', which must still be live due to the use of 'b' later, should be used to restore.
function o30() {
    var o1 = 0;
    for(var o8 = 0; o8 < 1; ++o8)
        o1 = 1;
    var o6 = o1;
    o1 = (1 - o1) * -1;
    return o6;
};
o3.o4("test11: " + o30());
