//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = "global.x";
var o5 = { o4 : "object.x" }

function o6(o7) {
    var o8 = "In foo: " + o7 + ". this.x: " + this.o4 + " type: " + typeof(this);
    write(o8);
    return o8;
}

o6.call(this, 2);

o6.call();
o6.call(0);
o6.call(void 0);
o6.call()===o6.call(0);
write(o6.call()===o6.call(void 0));

o6.apply();
o6.apply(0);
o6.apply(void 0);
o6.apply()===o6.apply(0);

write(o6.apply()===o6.apply(void 0));
