//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = {};
    var o3 = function () {
    };
    var o4 = function () {
    };
    o1.o5 = o4;
    o2.o6 = o1.o5;
    o6 = o2.o6;
    var o7 = [];
    Object.prototype.o10 = -118;
    function o11() {
        this.o12 = o6();
        this.o10 = this.o13;
    }
    new o11();
    while (o10) {
        var o14 = new o11();
        var o15 = {
            o16: function () {
                return function o17() {
                };
            }
        };
        o2.o18 = o15.o16();
        var o19 = o2.o18(Object.prototype.o12--);
        ({ o20: o3(Math.atan2(Object.prototype.o13--)) });
        Object.prototype.o10 = o7.shift();
    }
}
o0();
o0();
o0();

var o24 = Array();
o24[5] = 456463198.1;
function o11(o26, o27) {
  this.o12 = o26;
  this.o10 = o27;
}
for (var o28 of o24) {
  var o29 = new o11(144);
  o29.o13 = o29.o10 = o0;
}

o30.o31('pass');
