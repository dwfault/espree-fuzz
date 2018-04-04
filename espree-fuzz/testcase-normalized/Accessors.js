//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Object();

o2.o3("*** Setting data property ***");
o0.o4 = 23;
o2.o3("o.x=" + o0.o4);

o2.o3("*** Setting data property using defineProperty ***");
Object.defineProperty(o0, "x", { value : 24 });
o2.o3("o.x=" + o0.o4);

o2.o3("*** Setting accessor property using defineProperty ***");
var o4 = "";
var o7 = "";
Object.defineProperty(o0, "x", {
    get : function() { o2.o3("Getter called"); return o4; },
    set : function(o10) { o2.o3("Setter called"); o7 = 1000; o4 = o10; }
});
o0.o4 = 25;
o2.o3("o.x=" + o0.o4);
o2.o3("x=" + o4);
o2.o3("z=" + o7);
o2.o3("*** Setting backing store for accessor ***");
o4 = 26;
o2.o3("o.x=" + o0.o4);

var o11 = new Object();
Object.defineProperty(o11,"foo",{get:function(){o2.o3("In getter");}, configurable: true});
Object.defineProperty(o11,"foo",{set:function(o13){o2.o3("In setter");}});
o11.o14;
o11.o14 = 10;

delete o11.o14;

try
{
 var o11 = new Object();
 Object.defineProperty(o11,"foo",{get:function(){o2.o3("In getter");}});
 o11.o14;
 o11.o14 = 10;
}
catch(o15)
{
  o2.o3(o15.o16);
}

delete o11.o14;

try
{
 var o11 = new Object();
 Object.defineProperty(o11,"foo",{set:function(o13){o2.o3("In setter");}});
 o2.o3(o11.o14);
 o11.o14 = 10;
}
catch(o15)
{
  o2.o3(o15.o16);
}

delete o11.o14;

var o0 = {};

o0.o17 = 1;
o0.o18 = 2;
o0.o19 = 3;
o0.o20 = 4;
o0.o15 = 5;
o0.o21 = 6;
o0.o22 = 7;
o0.o23 = 8;
o0.o24 = 9;
o0.o25 = 10;
o0.o26 = 11;
o0.o27 = 12;
o0.o28 = 13;
o0.o29 = 14;
o0.o0 = 15;
o0.o30 = 16;
o0.o31 = 17;

Object.defineProperty(o0, "qqq",
    {
        set: function () { },
        get: function() { o2.o3("get"); }
    });

o2.o3(o0.o32);
delete o0.o32;

// prototype setter/getter

function o33() {
    this.o4=0;
    this.o34=0;
}

o33.prototype = {
    print:function() { o2.o3("x:"+this.o4+", y:"+this.o34+", z:"+this.o7); }
};

Object.defineProperty(o33.prototype,"z",{ set:function(o37) { this.o38=o37; }, get: function() { return this.o38; }});
var o39=new o33();
o39.o7=12;
o39.print();

Object.defineProperty(this, "abc",
    {
        set: function () { },
        get: function() { o2.o3("get global"); }
    });
o2.o3(o40);
delete this.o40;

(function () {
    o2.o3("*** Getters, prototypes, and deleting properties ***");

    function o41() { };
    o41.prototype = {
        get o30 () { return this.o42; },
        set o30 (o37) { this.o42 = o37; }
    };
    var o0 = new o41();
    o0.o30;
    delete o41.prototype.o30;
    o0.o30;
    o2.o3(o0.o30);
    o2.o3(o41.prototype.o30);
})();

(function () {
    o2.o3("*** Setters, prototypes, and deleting properties ***");

    function o41() { };
    o41.prototype = {
        get o30 () { return this.o42; },
        set o30 (o37) { this.o42 = o37; }
    };
    var o0 = new o41();
    o0.o42 = undefined; // create the property to stop the setter from changing the type
    o0.o30 = 1;
    delete o41.prototype.o30;
    o0.o30 = 2;
    o2.o3(o0.o30);
    o2.o3(o41.prototype.o30);
})();
