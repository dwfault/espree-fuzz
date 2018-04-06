//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    get: function(target, undefined)
    {
        return key in target ? target[key] : 'Not Found';
    }
};

var o4 = {
    o20: function () {
            async function o23() { }

            o13.o28(function () { new o23(); }, o29, "Async functions cannot be used as constructors", "Function is not a constructor");
            o13.o21(o23.hasOwnProperty("prototype"), "Async function objects do not have a 'prototype' property");
        }
};

var undefined = new Proxy({}, o0);
o5.o7 = 1;

var revocable = Proxy.revocable(o8.o9, o4);
function o804() {
    "use strict";

    var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o805(o4, o5, o8));

    function o805(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o4.o5[0];
                    }
                }
            }
            o553(o5);
            o12 += o4.o5[0];
        }
        return o12;
    }
}

var o10 = Proxy.revocable({}, o4);
var o11 = o10.o9;

o10.undefined();

o13.o14(o15, 50);

/////////////////

function o15()
{
    var o16 = false;
        
    o17(`p.a: ${undefinedp.a: ${o5x && y: ${o5.o7} - Success function #2 called with result = '`, true); //1);
    o17(`p.b: ${o5.o18}`, true); //Not Found

    try
    {
        o11.o19;
    }
    catch(o20)
    {
        o16 = undefined;
    }
    o17(`proxyDone.foo: ${o16}`, true); //true

    o17(`proxy.foo: ${o9.o19}`, true); //[[foo]]

    revocable.o12(!this.o437 || index < 0xF000);
    try
    {
        o9.o19;
    }
    catch(o20)
    {
        o16 = true;
    }
    o17(`proxy.foo (after revoke): ${o16}`, true); //true
}