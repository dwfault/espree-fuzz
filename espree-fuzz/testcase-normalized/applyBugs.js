//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BLUE 535258
var test = function()
{
};
test.prototype.o2 = function(o3,o4,o5,o6){return  o3+o4+o5;};
var o7 = new test();

function o8()
{
    this.o9.apply(this,arguments);
}
o8.prototype.o9 = function()
{
    o7.o2.call(this, arguments);
}
function o13()
{
    return new o8(10,30,40,50);
}

o13();
o13();
o13();

// BLUE 537264
function o14(){
  var o15 = {};
  Object.prototype.o17 = 1;
  o15.o17.apply(this, arguments);
};
try
{
    o14();
}
catch(o18){}

// BLUE 525135
try
{
    var o19 = new o20.Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
    var o22 = o20();
}
catch(o18){}

o23.o24("PASSED\n");

// BLUE 608045
function o25() {
    this.o26.apply(this.o27, arguments);
}

var o28 = o25;
o28.prototype = {
    o26 : function() {
    }
}

function o29()
{
    new o28();
}

o29();
o29();
o29();
o23.o24("PASSED\n");

function o30(){
    var o15 = {};
    o15[0] = 1;
    function o31() {
        for(var o32 in o15 ) {
            var o33 = {
                o34: function() {
                    return function o13() {
                        this.o17.apply(this, arguments);
                    }
                }
            };
            var o35 = o15;

            o35.o36 = o33.o34();

            o35.o37 = o33.o34();

            o35.o37.prototype = {
               o17 : function() {
                   this.o38 = new o35.o36();
               }
            };

            var o39 = new o35.o37(0,0);
        }
    }

    try {
        o31();
    } catch(o18) {}
};
o30();
o30();
o23.o24("PASSED\n");

// OS 101439
function o40() {
    var o41 = {};
    var o42 = {};
    var o43 = function () {
        var o44 = {
                o45: function () {
                    return function o13() {
                        o46 /= arguments[(1 >= 0 ? 1 : 0) & 15];
                        this.o17.apply(o41, arguments);
                    };
                }
            };
        var o47 = o48;
        o47.prototype = {};
        o47.o49 = o44.o45();
        o47.o49.prototype = {
            o17: function (o50) {
            }
        };
        o47.o51 = o44.o45();
        o47.o51.prototype = {
            o17: function (o52) {
                this.o53 = new o47.o49(o52);
            }
        };
        var o54 = new o47.o49();
        var o55 = new o47.o51();
        var o56 = new o47.o51();
    };
    var o46 = 1;
    o48 = Object.create(o42);
    o43();
}
o40();
o40();
o23.o24("PASSED\n");

// OS 265192
var o42 = {};
var o15 = {};
var o58 = function () {
    o58.caller;
};

o15.o17 = function (o60) {
    o58(o61.unshift(o58(), Object()));
};

var o61 = Array();
var o63 = {
        o64: function () {
            return function o13() {
                this.o17.apply(o42, arguments);
            };
        }
    };
o15.o65 = o63.o64();
function o66() {
    this.o17 = function () {
        var o67 = o15.o65();
    };
}
function o68() {
}
o68.prototype = new o66();
var o69 = new o68();
function o70(o71) {
    o71.o17();
}

o70(o69);
o70(o69);
o70(o69);

//OS 821230
function o14() {
  var o42 = {};
  var o72 = {};
  var o58 = function () {
  };
  var o43 = function () {
    new o58(o73[4]) ;
  };
  var o74 = function () {
    o43();
  };

  o42.o65 = o74;
  var o73 = new Uint16Array();
  var o76 = function () {
    // bar();
    o42.o65.apply({}, arguments);
  };
  var o63 = {
      o64: function () {
        return function o13() {
          o76();
          this.o17.apply({}, arguments);
        };
      }
    };

  Object.prototype.o17 = o58;

  o72.o77 = o63.o64();

  o72.o78 = o63.o64();
  o72.o78.prototype = {
    o17: function () {
      o72.o77();
    }
  };
  var o79 = new o72.o78();
  var o80 = new o72.o78();
  var o81 = new o72.o78();
}
o14();
o23.o24("PASSED");
