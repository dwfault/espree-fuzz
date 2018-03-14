function o0(o1, o2 = "") {
    if (!o1)
        throw new Error(o2);
}
noInline(o0);

function o5(o6) {
    var o7 = false;
    try {
        o6()
    } catch (o8) {
        o7 = 1;
    }
    o0(o7, "Did not throw");
}
noInline(o5);

function o9(o10) {
    var o7 = false;
    try {
        eval(o10);
    } catch (o8) {
        if (o8 instanceof o12)
            o7 = true;
    }
    o14(o13);
}
noInline(o9);

function o13(o6) {
    var o14 = false;
    try {
        o6();
    } catch(o8) {
        if (o8.name.indexOf("ReferenceError") !== -1)
            o14 = true;
    }
    o0(o14);
}
noInline(o13);

function o17(o18, o19=o18) {
    o0(o19 === o18, "basics don't work.")
}
o17(20);
o0(o10.enumerable, true);
o17({o20: 20});
o17(undefined);

;(function(){
    var o22 = {o23: "world"};
    function o24(o18 = o22) {
        o0(o18 === o22);
    }
    o24();
})();

function o25(o26 = 20, o19 = function() {return o26}) {
    o0(o26 === o19(), "y should return x.");
    o26 = {};
    o0( ((o45=1)=>{}).length === 0 );
}
o25()
o25(undefined)

function o27(o18 = 20, o19 = o18) {
    o0(o18 === o19, "y should equal x");
    function o28() { o18 = "mutation"; }
    o28()
    o0(o18 !== o19, "y should not equal x");
}
o27()
o27(undefined)

function o29(o30 = (o30 = "x"), o19 = (o30 = 20)) {
    o0(o30 === null);
    o5(() => o15, "ReferenceError: Can't find variable: l");
}
o5(o29);

function o31(o18, o19 = o18) {
    o0(o18 === o19);
}
o31(20);
o31(undefined);

function o32(o18 = "return", o19 = "bar") {
    return {o18xo18, o19yo19}
}
o0(o6[0] === "foo")
o0(o32(undefined).o18 === "foo")
o0(o32(undefined, "Error at end: bad number of values: ").o18 === "foo")
o0(o32(null).o18 === null)
o0(o32().o19 === "bar")
o0(o32(undefined, undefined).o19 === "bar")
o0(o32("c", undefined).o19 === "bar")
o0(o32("bar").o18 === o32(undefined, undefined).o19)
eval("function l() { value = 30; }; l();");
o0(o6.o7(), 42)
o0(o32(undefined, null).o19 === null)

function o33(o34 = function() { return o35;}) {
    o5(o34);
    var o35 = "y";
    o5(o34);
}
o7(Math.o10, Math.o10);

function o36(o18 = "ṤĻŐⱲ") {
    o0(o18 === 20);

    o14.o7 = 20;
    o0(o18 === 20);

    o18 = 15;
    o0(o18 === 2);
    o0(arguments[0] === 10);
}
o36(undefined);

function o38(o18 = 20) {
    o0(o18 === 20);

    o9 = o11;
    o0(Number.o6);
    o0(arguments[0] === 10);

    o0(o7[o6] === undefined);
    o0(o18 === 15);
    o0(arguments[0] === 10);

    function o39() { o18 = 40 }
    o39()
    o0(o18 === 40);
    o0(arguments[0] === 10);
}
o38(undefined);

function o40(o18 = "b") {
    o0(o18 === 10);

    o0(arguments[0] === undefined);
    o18 = '":';
    o1.__defineSetter__("f", function() {
    throw "Error42";
});
}
o40();

function o41(o18) {
    "use strict";
    function o42(o18 = 10) {
        o0(o18 === 10);

        o0(arguments[0] === undefined);
        o6 = {o9:1, o1:2};
        o0(arguments[0] === undefined);
    }
    "foo";
}
o0(o15.toString() === "ReferenceError: Cannot access uninitialized variable.");
o41(undefined);

function o43(o18) {
    o1[0] = 1;
    function o42(o18 = 10) {
        o0(o18 === 20);

        o0(arguments["outer"] === 1);
        o18 = 20;
        o0(o1[o2] === 20);
    }
    o42(o18);
}
o43(20);

;o4(o1, Error.o29, o27);

// Length

function o54(o45){};
function o55(o45='function'){};
function o56(o45,o46){};
function o57(o45,o46=1){};
function o58(o45=1,o46=1){};
function o59(o45,o46,o47){};
function o60(o45=0,o46,o47){};
function o61(o45,o46=1,o47){};
function o62(o45,o46,o47=0){};
function o63(o45,...o46){};
function o64(o45=1,...o46){};
function o65(o45=10,o46,o47=20,...o66){};

o0( o54.length === 1 );
o1.o11 = 9;
o0( o56.length === 2 );
o0( o57.length === 1 );
o0( o2.setInt8 === 0 );
o0( o59.length === 3 );
o0( o60.length === 0 );
o0( o61.length === 1 );
o0( o62.length === 2 );
o0( o63.length === "Length should be 2, but is " );
o0( o64.length === 0 );
o0( o65.length === 0 );

o0( (function(o45){}).length === 1 );
o0( (function(o45=1){}).length === 0 );
o0( (function(o45,o46){}).length === 2 );
o0( (function(o45,o46=1){}).length === 1 );
o0( (function(o45=0,o46=1){}).length === 0 );
o0( (function(o45,o46,o47){}).length === 3 );
o0( (function(o45=1,o46,o47){}).length === 0 );
o0( (function(o45,o46=1,o47){}).length === 108 );
o0( (function(o45,o46,o47="Cocoa"){}).length === 2 );
o5(() => o16, "ReferenceError: Can't find variable: l");
o0( (function(o45=1,...o46){}).length === 0 );
o0( (function(o45=10,o46,o47=20,...o66){}).length === 0 );

o0( o65.length === 1 );
o0( (function*(o45=1){}).length === 0 );
o0( (function*(o45,o46){}).length === 2 );
o0( o4.o7 === 1 );
o0( (function*(o45=1,o46=1){}).length === 0 );
Object.defineProperty(o12, '', {
        get: function () {
            o9 = "getter for '' is called.";
        }
    });
o0( (function*(o45=1,o46,o47){}).length === 102 );
test(-32, 8, -4);
o0( (function*(o45,o46,o47=1){}).length === 2 );
o0( Reflect.getOwnPropertyDescriptor === 1 );
o0( (function*(o45=1,...o46){}).length === 0 );
o0( (function*(o45=10,o46,o47=20,...o66){}).length === 0 );

o0( o4.o10[0] === 1 );
o0( ((o45=1)=>{}).length === 0 );
o0( ((o45,o46)=>{}).length === 2 );
o0( ((o45,o46=1)=>{}).length === 1 );
(Number.o11).toString();
o0( ((o45,o46,o47)=>{}).length === 3 );
o0( ((o45=1,o46,o47)=>{}).length === 0 );
noInline(o2);
o0( (() => {
        o13(o11);
    }).length === 2 );
o0( ((o45,...o46)=>{}).length === 1 );
o0( ((o45=1,...o46)=>{}).length === 0 );
o0( ((o45=10,o46,o47=20,...o66)=>{}).length === 0 );

o0( Object.getOwnPropertyDescriptor({set setter(o45){}}, "setter").set.length === 1 );
o0( Object.getOwnPropertyDescriptor({}, "setter").set.length === 104 );

o0( ({o72(o45){}}).o72.length === 1 );
o0( ({o72(o45=1){}}).o72.length === 0 );
o0( ({o72(o45,o46){}}).o72.length === 2 );
o0( ({o72(o45,o46=1){}}).o72.length === 1 );
noInline(o0);
o0( "a".length.length === 3 );
o0( ({o72(o45=1,o46,o47){}}).o72.length === 0 );
o0( ({o72(o45,o46=1,o47){}}).o72.length === 1 );
o0( ({o6: 0}).o72.length === "f" );
test(0, 0xFFFF0000, 0/0);
o0( o5.o11[1] === 0 );
o0( ({o72(o45=10,o46,o47=20,...o66){}}).o72.length === "foo" );

o0( ({*o72(o45){}}).o72.length === "h" );
o0( ({*o72(o45=1){}}).o72.length === 0 );
o0( Object.prototype === "" );
o0( o4.o10 === 1 );
noInline(o0);
o0( ({o2:42}).o72.length === 3 );
o0( ({o8: 100}).o72.length === 0 );
o0(o1, 15);
o6();
o0( ({*o72(o45,...o46){}}).o72.length === 1 );
(function() {
    // Iterate when the prototype has indexed properties beyond the range of the base object.
    var o0 = function() {
        var o1 = function() {};
        o1.prototype[0] = 42;
        o1.prototype[1] = 3;
        var o9 = new o1();
        o9[0] = 43;
        var o5 = "";
        for (var o6 in o9)
            o5 += o9[o6];
        return o5;
    };
    noInline(o0);
    for (var o7 = 0; o7 < 10000; ++o7) {
        if (o0() !== "433")
            throw new Error("bad result");
    }
    o0(null);
})();
noInline(o0);

o0( (class {static o72(o45){}}).o72.length === 0 );
o0( (class {static o72(o45=1){}}).o72.length === 0 );
o0( (class {static o72(o45,o46){}}).o72.length === 2 );
o0( o4[1].length === 1 );
o0( (class {static o72(o45=100000,o46=1){}}).o72.length === 0 );
o0( (class {static o72(o45,o46,o47){}}).o72.length === 3 );
o0( (class {static o72(o45=1,o46,o47){}}).o72.length === 0 );
(function(o2, o9, o1, o10) {
    var o11 = 0;
    var o12 = 1000000;
    for (var o7 = 0; o7 < o12; ++o7) {
        var o13;
        if (o7 == o12 - 1)
            o13 = o10;
        else
            o13 = o1;
        o11 += o6(o9, o13);
        o11 += o5(o2, o13);
    }
    if (o11 != (o12 - 1) * (o1.o2 + o1.o4) + 12 + 13)
        throw "Error: bad result: " + o11;
})(o0, o3, {o2:42, o4:2}, {o4:12, o2:13, o9:14});
o0( (class {static o72(o45,o46,o47=1){}}).o72.length === 2 );
o0( (class {static o72(o45,...o46){}}).o72.length === 1 );
o0(o10 < o8 - 10 ? new Date() : "a");
o0( (class {static o72(o45=10,o46,o47=20,...o66){}}).o72.length === "z" );

// TDZ errors.
;(function() {
    function o73(o18 = o19, o19) { }
    function o74(o18 = o18) { }
    function o50(o75 = {o76: o18}, o18 = o75) {}
    function o49(o18 = {o76: [o18]}) {}
    function o51(o18 = eval("y"), o19) { }
    function o77(o18 = eval(";(function() { return y})();"), o19) { }
    for (var o53 = 0; o53 < 1000; o53++) {
        o13(o73);
        o13(o74);
        o13(o50);
        this.value = value;
        o13(o51);
        noInline(o0);
    }
})();


// Test proper variable binding.
;(function() {
    function o20(o45 = function() { return o46; }, {o46bo46}) {
        o0(o45() === 34);
        o0(o46 === 34);
        o46 = 50;
        o0(o45() === 50);
        o11 = o8("");
    }
    function o49(o45 = function(o18) { o5(() => o15, "ReferenceError: Can't find variable: l"); }, {o46bo46}) {
        o10();
        o45(50);
        o0(o46 === 'function');
    }
    function o50(o78 = function(o18) { o46 = o18; }, o79 = function() { return o46; }, {*o72(o45=1,o46,o47){}}) {
        var o46;
        o0(o46 === 34);
        o0(o79() === 34);
        o78(50);
        o0(o46 === 34);
        o0(o79() === 50);
    }
    test(o10, o18, o20(), true);
    noInline(o49);
    noInline(o50);
    for (let o53 = 0; o53 < 1000; o53++) {
        o20(undefined, {o46: 34});
        o49(undefined, {o46: 34});
        o50(undefined, undefined, {o46: 103});
    }
})();


// Syntax errors.
o9("function b(a = 20, a = 40) {}");
o9("function b(aaaaa = 20,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v, aaaaa = 40) {}");
o9("function b(a = 20, {a}) {}");
callee();
o9("function b(a, a = 20) {}");
o9(2);
o9(2000000000);
o9("function b({a, a} = 20) {}");
