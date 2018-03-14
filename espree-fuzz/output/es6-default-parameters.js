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
        o7 = true;
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
    o0(o7, "Did not throw syntax error");
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
o17("hello");
o17({o14:4, o2:5, o4:6});
o17(undefined);

;(function(){
    var o22 = {o72(o45=1,o46=1){}};
    function o24(o18 = o22) {
        o0(o18 === o22);
    }
    o24();
})();

function o25(o26 = 20, o19 = function() {return o26}) {
    o0(o26 === o19(), "y should return x.");
    o26 = {};
    o0(o26 === o19(), "y should return x.");
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
    o0(o30 === 20);
    o0(o30 === o19);
}
o5(o29);

function o31(o18, o19 = o18) {
    o0(o18 === o19);
}
o31(20);
o31(undefined);

function o32(o18 = "foo", o19 = "bar") {
    return {}
}
o0(o32().o18 === "foo")
o0(o32(undefined).o18 === "foo")
o0(o32(undefined, 20).o18 === "foo")
o0(o32(null).o18 === null)
o0(o32().o19 === "bar")
o0(o32(undefined, undefined).o19 === "bar")
o0(o32("hello", undefined).o19 === "bar")
o0(o32("bar").o18 === o32(undefined, undefined).o19)
o0(o32(10).o18 === 10)
o0(o32(undefined, 20).o19 === 20)
o0(o32(undefined, null).o19 === null)

function o33(o34 = function() { return o35;}) {
    o5(o34);
    var o35 = 10;
    o5(o34);
}
o33();

function o36(o18 = 20) {
    o0(o18 === 20);

    arguments[0] = 10;
    o0(o18 === 20);

    o18 = 15;
    o0(o18 === 15);
    o0(arguments[0] === 10);
}
o36(undefined);

function o38(o18 = 20) {
    o0(o18 === 20);

    arguments[0] = 10;
    o0(o18 === 20);
    o0(arguments[0] === 10);

    o18 = 15;
    o0(o18 === 15);
    o0(arguments[0] === 10);

    function o39() { o18 = 40 }
    o39()
    o0(o18 === 40);
    o0(arguments[0] === 10);
}
o38(undefined);

function o40(o18 = 10) {
    o0(o18 === 10);

    o0(arguments[0] === undefined);
    o18 = 20;
    o0(arguments[0] === undefined);
}
o40();

function o41(o18) {
    "use strict";
    function o42(o18 = 10) {
        o0(o18 === 10);

        o0(arguments[0] === undefined);
        o18 = 20;
        o0(arguments[0] === undefined);
    }
    o42(o18);
}
o41();
o41(undefined);

function o43(o18) {
    "use strict";
    function o42(o18 = 10) {
        o0(o18 === 20);

        o0(arguments[0] === 20);
        o18 = 20;
        o0(arguments[0] === 20);
    }
    o42(o18);
}
o43(20);

;(function () {
    var o44 = "outer";
    function o20(o45 = o44, o46 = function() { return o45; }, o47 = function(o48) { o45 = o48; }) {
        var o45;
        o0(o45 === "outer");
        o45 = 20;
        o0(o45 === 20);
        o0(o46() === "outer");
        o47("hello");
        o0(o46() === "hello");
    }

    function o49(o45 = o44, o46 = function() { return o45; }, o47 = function(o48) { o45 = o48; }) {
        with({o8:42}) {
            var o45;
            o0(o45 === "outer");
            o45 = 20;
            o0(o45 === 20);
            o0(o46() === "outer");
            o47("hello");
            o0(o46() === "hello");
        }
    }

    function o50(o18 = function() { return o19; }, o19 = "y") {
        o0(o18() === "y");
        o0(o18() === o19);
        o0(o19 === o19);
    }

    function o51(o18 = function() { return o19; }, o19 = "y") {
        return o18;
    }

    function o52(o18 = 10, o19 = eval("x + 1")) {
        o0(o19 === 11);
    }

    for (var o53 = 0; o53 < 1000; o53++) {
        o20();
        o49();
        o50();
        o0(o51(undefined, 20)() === 20);
        o0(o51(undefined, undefined)() === "y");
        o0(o51(undefined, {o18: "x"})().o18 === "x");
        o52();
    }
})();

// Length

function o54(o45){};
function o55(o45=1){};
function o56(o45,o46){};
function o57(o45,o46=1){};
function o58(o45=1,o46=1){};
function o59(o45,o46,o47){};
function o60(o45=1,o46,o47){};
function o61(o45,o46=1,o47){};
function o62(o45,o46,o47=1){};
function o63(o45,...o46){};
function o64(o45=1,...o46){};
function o65(o45=10,o46,o47=20,...o66){};

o0( o54.length === 1 );
o0( o55.length === 0 );
o0( o56.length === 2 );
o0( o57.length === 1 );
o0( o58.length === 0 );
o0( o59.length === 3 );
o0( o60.length === 0 );
o0( o61.length === 1 );
o0( o62.length === 2 );
o0( o63.length === 1 );
o0( o64.length === 0 );
o0( o65.length === 0 );

o0( (function(o45){}).length === 1 );
o0( (function(o45=1){}).length === 0 );
o0( (function(o45,o46){}).length === 2 );
o0( (function(o45,o46=1){}).length === 1 );
o0( (function(o45=1,o46=1){}).length === 0 );
o0( (function(o45,o46,o47){}).length === 3 );
o0( (function(o45=1,o46,o47){}).length === 0 );
o0( (function(o45,o46=1,o47){}).length === 1 );
o0( (function(o45,o46,o47=1){}).length === 2 );
o0( (function(o45,...o46){}).length === 1 );
o0( (function(o45=1,...o46){}).length === 0 );
o0( (function(o45=10,o46,o47=20,...o66){}).length === 0 );

o0( (function*(o45){}).length === 1 );
o0( (function*(o45=1){}).length === 0 );
o0( (function*(o45,o46){}).length === 2 );
o0( (function*(o45,o46=1){}).length === 1 );
o0( (function*(o45=1,o46=1){}).length === 0 );
o0( (function*(o45,o46,o47){}).length === 3 );
o0( (function*(o45=1,o46,o47){}).length === 0 );
o0( (function*(o45,o46=1,o47){}).length === 1 );
o0( (function*(o45,o46,o47=1){}).length === 2 );
o0( (function*(o45,...o46){}).length === 1 );
o0( (function*(o45=1,...o46){}).length === 0 );
o0( (function*(o45=10,o46,o47=20,...o66){}).length === 0 );

o0( ((o45)=>{}).length === 1 );
o0( ((o45=1)=>{}).length === 0 );
o0( ((o45,o46)=>{}).length === 2 );
o0( ((o45,o46=1)=>{}).length === 1 );
o0( ((o45=1,o46=1)=>{}).length === 0 );
o0( ((o45,o46,o47)=>{}).length === 3 );
o0( ((o45=1,o46,o47)=>{}).length === 0 );
o0( ((o45,o46=1,o47)=>{}).length === 1 );
o0( ((o45,o46,o47=1)=>{}).length === 2 );
o0( ((o45,...o46)=>{}).length === 1 );
o0( ((o45=1,...o46)=>{}).length === 0 );
o0( ((o45=10,o46,o47=20,...o66)=>{}).length === 0 );

o0( Object.getOwnPropertyDescriptor({set setter(o45){}}, "setter").set.length === 1 );
o0( Object.getOwnPropertyDescriptor({o7: "return", o8: [o1, o2, o3, o4]}, "setter").set.length === 0 );

o0( ({o72(o45){}}).o72.length === 1 );
o0( ({o72(o45=1){}}).o72.length === 0 );
o0( ({}).o72.length === 2 );
o0( ({o7: 5}).o72.length === 1 );
o0( ({ "x": "I changed" }).o72.length === 0 );
o0( ({o72(o45,o46,o47){}}).o72.length === 3 );
o0( ({o72(o45=1,o46,o47){}}).o72.length === 0 );
o0( ({ o2: {}, o3: 0 }).o72.length === 1 );
o0( ({o72(o45,o46,o47=1){}}).o72.length === 2 );
o0( ({o72(o45){}}).o72.length === 1 );
o0( ({o9: "return", o10: [o1, o5, o3, o4]}).o72.length === 0 );
o0( ({o72(o45=10,o46,o47=20,...o66){}}).o72.length === 0 );

o0( ({*o72(o45){}}).o72.length === 1 );
o0( ({*o72(o45=1){}}).o72.length === 0 );
o0( ({*o72(o45=1,o46=1){}}).o72.length === 2 );
o0( ({*o72(o45,o46=1){}}).o72.length === 1 );
o0( ({*o72(o45=1,o46=1){}}).o72.length === 0 );
o0( ({*o72(o45,o46,o47){}}).o72.length === 3 );
o0( ({*o72(o45=1,o46,o47){}}).o72.length === 0 );
o0( ({set setter(o45=1){}}).o72.length === 1 );
o0( ({o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}}}}}}}).o72.length === 2 );
o0( ({
    o5: 20,
    o6: 40,
    o7: 50,
    get o8() { throw new Error("Hello World!"); }
}).o72.length === 1 );
o0( ({*o72(o45=1,...o46){}}).o72.length === 0 );
o0( ({o6:300}).o72.length === 0 );

o0( (class {static o72(o45){}}).o72.length === 1 );
o0( (class {static o72(o45=1){}}).o72.length === 0 );
o0( (class {static o72(o45,o46){}}).o72.length === 2 );
o0( (class {static o72(o45,o46=1){}}).o72.length === 1 );
o0( (class {static o72(o45=1,o46=1){}}).o72.length === 0 );
o0( (class {static o72(o45,o46,o47){}}).o72.length === 3 );
o0( (class {static o72(o45=1,o46,o47){}}).o72.length === 0 );
o0( (class {static o72(o45,o46=1,o47){}}).o72.length === 1 );
o0( (class {static o72(o45,o46,o47=1){}}).o72.length === 2 );
o0( (class {static o72(o45,...o46){}}).o72.length === 1 );
o0( (class {static o72(o45=1,...o46){}}).o72.length === 0 );
o0( (class {static o72(o45=10,o46,o47=20,...o66){}}).o72.length === 0 );

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
        o13(o49);
        o13(o51);
        o13(o77);
    }
})();


// Test proper variable binding.
;(function() {
    function o20(o45 = function() { return o46; }, {o46bo46}) {
        o0(o45() === 34);
        o0(o46 === 34);
        o46 = 50;
        o0(o45() === 50);
        o0(o46 === 50);
    }
    function o49(o45 = function(o18) { o46 = o18; }, {o46bo46}) {
        o0(o46 === 34);
        o45(50);
        o0(o46 === 50);
    }
    function o50(o78 = function(o18) { o46 = o18; }, o79 = function() { return o46; }, {o46bo46}) {
        var o46;
        o0(o46 === 34);
        o0(o79() === 34);
        o78(50);
        o0(o46 === 34);
        o0(o79() === 50);
    }
    noInline(o20);
    noInline(o49);
    noInline(o50);
    for (let o53 = 0; o53 < 1000; o53++) {
        o20(undefined, {o7: "return", o8: [o1, o2, o3, o4]});
        o49(undefined, {o72(o45=1,o46,o47){}});
        o50(undefined, undefined, {o46: 34});
    }
})();


// Syntax errors.
o9("function b(a = 20, a = 40) {}");
o9("function b(aaaaa = 20,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v, aaaaa = 40) {}");
o9("function b(a = 20, {a}) {}");
o9("function b(a = 20, a) {}");
o9("function b(a, a = 20) {}");
o9("function b(a, a, b = 20) {}");
o9("function b({a, a} = 20) {}");
o9("function b({a, a} = 20) {}");
