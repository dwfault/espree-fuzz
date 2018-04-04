//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
  create: function() {
    return function o2() {
      this.o3.apply(this, arguments);
    }
  }
};

var o6 = {};
o6.o7 = o0.create();

o6.o7.prototype = {
    o9 : 0,
    o3 : function(o9) {
        this.o9 = o9;
   }
}

o6.o10 = o0.create();

o6.o10.prototype = {
        o11 : 0,
    o12 : 0,
    o3 : function(o11,o12) {
        this.o11 = o11;
        this.o12 = o12;
    }
}

o6.o13 = o0.create();

o6.o13.prototype = {
    o14 : {},
    o3 : function(o15) {
        this.o14 = new o6.o7(o15);
    }
}

o6.o16 = o0.create();

o6.o16.prototype = {
    o14 : {},
    o17 : {},
    o3 : function(o9,o18,o19) {
        this.o14 = new o6.o7(o9);
        this.o17 = new o6.o10(o18,o19);
    }
}

function o20()
{
    var o21 = new o6.o7();
    var o22 = new o6.o7(1);
    var o23 = new o6.o7(1,2);
    var o24 = new o6.o7(1,2,3);
    o25.o26(o24.o9);

    var o27 = new o6.o10(1);
    var o28 = new o6.o10(1,2);
    var o29 = new o6.o10(1,2,3);
    o25.o26(o29.o12);

    var o30 = new o6.o13(1);
    var o31 = new o6.o13(1,2);
    var o32 = new o6.o13(1,2,3);
    o25.o26(o32.o14.o9);

    var o33 = new o6.o16(1);
    var o34 = new o6.o16(1,2);
    var o35 = new o6.o16(1,2,3);
    o25.o26(o35.o14.o9);
    o25.o26(o35.o17.o12);
}

o20();
o20();

//override apply
Function.prototype.apply = function(){};
o20();

o25.o26("Passed");
