//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0); }

var o3 = 5;

function o4(o5) {
    for (var o6=0; o6<o3; o6++) {
        o5[o6] = o6 * o6 + 1;
    }
    o5.length = o3;

    return o5;
}

function o7(o5) {
    write(">>> Start pop test for object: " + o5);
    for (var o6=0; o6<o3+2; o6++) {
        var o8 = Array.prototype.pop.call(o5);
        write(o6 + " iteration. Poped:" + o8 + " obj.length:" + o5.length);
    }
    write("<<< Stop pop test for object: " + o5);
}

var o9 = new Array(new Number(10) , new Boolean(false));
for (var o6=0;o6<o9.length;o6++) {
    o7(o4(o9[o6]));
}


function o10()
{
  var o11 = {};
  var o12 = function(o13){
    o13[7] = 1;
  }
  var o14 = new Array(10);
  o14[1] = 1;
  o14.length = 2;
  o14.pop();
  o12(o14);
  o1.o2("ary[1] = " + (o14[1]));
};
o10();

Array.prototype[0] = 10;
function o15() {
    (function () {
     o16 = [,];
    }());
    switch (o16.pop()) {
    case o16:
    }
}
o15();
o15();