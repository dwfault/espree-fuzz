//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

var o4 = 5;

function o5(o6) {
    for (var o7=0; o7<o4; o7++) {
        o6[o7] = o7 * o7 + 1;
    }
    o6.length = o4;

    return o6;
}

function o9(o6) {
    write(">>> Start pop test for object: " + o6);
    for (var o7=0; o7<o4+2; o7++) {
        var o10 = Array.prototype.pop.call(o6);
        write(o7 + " iteration. Poped:" + o10 + " obj.length:" + o6.length);
    }
    write("<<< Stop pop test for object: " + o6);
}

var o15 = new Array(new Number(10) , new Boolean(false));
for (var o7=0;o7<o15.length;o7++) {
    o9(o5(o15[o7]));
}


function o18()
{
  var o19 = {};
  var o20 = function(o21){
    o21[7] = 1;
  }
  var o22 = new Array(10);
  o22[1] = 1;
  o22.length = 2;
  o22.pop();
  o20(o22);
  o2.o3("ary[1] = " + (o22[1]));
};
o18();

Array.prototype[0] = 10;
function o23() {
    (function () {
     o24 = [,];
    }());
    switch (o24.pop()) {
    case o24:
    }
}
o23();
o23();