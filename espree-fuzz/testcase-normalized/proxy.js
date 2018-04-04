//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    get: function(target, key)
    {
        return key in target ? target[key] : 'Not Found';
    }
};

var o4 = {
    get: function(target, key)
    {
        return "[[" + key + "]]";;
    }
};

var o5 = new Proxy({}, o0);
o5.o7 = 1;

var revocable = Proxy.revocable({}, o4);
var o9 = revocable.o9;

var o10 = Proxy.revocable({}, o4);
var o11 = o10.o9;

o10.o12();

o13.o14(o15, 50);

/////////////////

function o15()
{
    var o16 = false;
        
    o17(`p.a: ${o5.o7}`, true); //1);
    o17(`p.b: ${o5.o18}`, true); //Not Found

    try
    {
        o11.o19;
    }
    catch(o20)
    {
        o16 = true;
    }
    o17(`proxyDone.foo: ${o16}`, true); //true

    o17(`proxy.foo: ${o9.o19}`, true); //[[foo]]

    revocable.o12();
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