//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function() {
    var o1 = function() {}
    o1(o2());
};
function o2() {
    var o1 = function() {}
    return o1(/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g, function() {
    });
}
var o3 = 0;
o3++;
var o4 = {};
o4.o5 = {
    o6: function() {
        return function o7() {
        };
    }
}.o6();
o4.o5.prototype = {
    o5: function() {
        try {
            function o9() {
                var o10 = 1;
                Object.prototype.indexOf = String.prototype.indexOf;
                o14 = {
                    toString: function() {
                        o10;
                    }
                }.indexOf();
                [].push(o10);
            }
            o9();
            [
              {},
              new o4.o5()
            ][o3].o5();
        } catch(o17) {
            o0();
        } finally {
        }
    }
};
for(var o18 in (new Int8Array(1))) {
    var o1 = function() {}
    var o20 = function() {}
    o1(o20(new o4.o5().o5()));
}
o21.o22("PASS");
