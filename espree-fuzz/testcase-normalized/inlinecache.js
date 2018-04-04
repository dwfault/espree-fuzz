//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() {
    write(Math.o6);
    write(Math.o6);
    Math.o6++;
    write(Math.o6);
    write(Math.o6);
}

o4();

function o7() {
    var o8 = [ 10, 20]

    write(o8.concat());
    write(o8.concat());
}

o7();

function o10() {

    function o11() { write("in f"); }

    var o12 = {};
    Object.defineProperty(o12, "x", { writable: false, value: o11 });

    write(o12.o17);
    o12.o17();
    o12.o17();
    write(o12.o17);
}

o10();

function o18() {

 Object.defineProperty(this, "x", ({get: function(){}}));
 eval("for(var i=0;i< 10; i++ ) {x=20;}");

}
o18();
