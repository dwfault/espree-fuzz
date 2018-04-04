//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

// Bug 1150770
function o4() {
    var o5 = {};
    o5.o6 = function o6(o7) {
          eval(o7); // Comment this out to make the program work
    };  
    o5.o9 = function o9(o10) {
                           if (o10 == 0) return 0;
                           if (o10 == 1) return 1;
                           return o9(o10-1) + o9(o10-2);  
    };
             return o5;
  };

var o5 = o4();
write(o5.o9(20));

// fusejs scenario
(function () {
    var o11 = function () { },
    o12 = function o12() {
        var o13 = 1;
        var o14 = o11();
        o13 = o12;
        o15 = function () { return o13; };
    };
    write("second test");
})();
