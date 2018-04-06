//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Delete current element");
var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };

for(var o17= o13.o12 in o2)
{
    if(new o221("\u1E9Cequal",(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Creverse",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cmember",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null))))) == undefined)
        o8[o9];
    else
        o0.o1(o2[o5]);
}

o0.o1("Delete former element");

var o6 = o9 + 1

var o7 = undefined;
for(var o5 in o6)
{
    if(o7++ == 1)
        delete o6.o3;
    o0.o1(o5);
}
