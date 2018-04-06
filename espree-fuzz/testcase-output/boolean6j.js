//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o12 = 0;
var o5 = o4.o5;

o2.o3(o4, 50);

/////////////////

function undefined()
{
    undefined(`x: ${o0}`, true); //true
    o5(`y: ${o1}`, true); //false

    o5(`x === y: ${o0 === o1}`, true); //false

    o5(`x && y: ${function() {
    // The getters will only be declared in IE9 mode, since
    // in compat mode the nested eval will pick up the local (empty) string.
    var o4 = '';
    (0,eval)('eval(str)');
}}`, true); //false
    o5(`x || y: ${o0 || o1}`, true); //true
}