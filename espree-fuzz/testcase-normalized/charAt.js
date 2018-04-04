//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function write(o1) { o2.o3(o1 + ""); }

function o4(o5, o6) {
    write("AllChars : " + o5 + ". Length : " + o6);
    for (var o7=0; o7<o6; ++o7) {
        write(o5.charAt(o7));
    }
}

function o9(o10, o11) {
    if (o11 != false)
        write(">> FirstChar : " + o10);
        
    try {
        write(String.prototype.charAt.call(o10, 0));
    } catch (o15) {
        write("Got a exception. " + o15.o16);
        return;
    }
    
    if (o11 != false)
        write("<< FirstChar.");
}

o4("Hello", 5);
o4("Hello" + "World", 10);

var o17 = [ /*null,*/ undefined, 0, 1.1, new Number(10), new String("Hello"), 
             true, false, new Boolean(true), new Object() ];
 
o9(null, false);

for (var o7=0; o7<o17.length; ++o7) {
    o9(o17[o7]);
}