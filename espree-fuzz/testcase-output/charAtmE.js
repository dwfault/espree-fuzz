//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function write(o0) { o1.o2(o0 + ""); }

function o3(o4, o5) {
    write("AllChars : " + o4 + ". Length : " + o5);
    for (var o6=0; o6<o5; ++o6) {
        write(o4.charAt(o6));
    }
}

function o7(o8, o9) {
    if (o9 != false)
        write(">> FirstChar : " + o8);
        
    try {
        write(String.prototype.charAt.call(o8, 0));
    } catch (o10) {
        write("Got a exception. " + o10.o11);
        return;
    }
    
    if (o9 != false)
        write("<< FirstChar.");
}

o3("Hello", 5);
o3("Hello" + "World", 10);

var o12 = [ /*null,*/ undefined, 0, 1.1, new Number(10), new String("Hello"), 
             true, false, new Boolean(true), new Object() ];
 
o7(null, false);

for (var o6=0; o6<o12.length; ++o6) {
    o7(o12[o6]);
}
