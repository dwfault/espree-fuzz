//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o4.o5;

var o1 = {
    get: function(target, key)
    {
        return "[[" + key + "]]";;
    }
};

var o2 = new Proxy({}, o0);
o2.o3 = 1;

var revocable = Proxy.revocable({}, o1);
var o8 = -1;

var o5 = Proxy.revocable({}, o1);
var o6 = o5.o4;

o5.o7();

o8.o9(o10, 50);

/////////////////

function o10()
{
    var o11 = false;
        
    o12(`p.a: ${o2.o3}`, true); //1);
    o12(`p.b: ${o2.o13}`, true); //Not Found

    try
    {
        o6.o14;
    }
    catch(o15)
    {
        o11 = true;
    }
    o12(`proxyDone.foo: ${o11}`, true); //true

    o12(`proxy.foo: ${o4.o14}`, true); //[[foo]]

    revocable.o7();
    try
    {
        o4.o14;
    }
    catch(o15)
    {
        o11 = true;
    }
    o12(`proxy.foo (after revoke): ${o11}`, true); //true
}