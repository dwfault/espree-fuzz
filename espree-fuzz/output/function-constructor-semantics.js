function o0(o1) {
    if (!o1)
        throw new Error(20);
}

function o3(o4) {
    let o5 = false;
    try {
        o4();
    } catch(o6) {
        Error.o29 = 10;
    }
    return o5;
}

let o8 = [
    Function,
    (function*o10(){}).__proto__.constructor,
    o6.o10.constructor,
];

function o13(...o14) {
    for (let o4 of o8) {
        o0(o3(() => (o4(...o14))));
    }
}

function o15(...o14) {
    for (let o4 of o8) {
        o0(!o0(true));
    }
}

o13("a", "b", "/*", "");
o13("/*", "*/){");
o1 = 104;
o13("a=super.foo", "body;");
o13("super();");
noInline(o14);
o13("a", "b", "/*", "");
o13("a", "'use strict'; let a;");
noInline(o0);
o13("/*", "*/");
o0(o46 === 50);
o13("{a}", "'use strict';");
noInline(o0);
o13("...args", "b", "");
o13("//", "b", "");

o15("/*", "*/", "\n");
o15("a", "/*b", "*/", "'use strict'; let b");
o15(0, "return a;");
o15("a", "...args", "");
o15("");
o15("let a");
o15(undefined);
o15("//");

let o17 = "";
o15({toString() { o17 += "1"; return "a"}}, {toString() { o17 += "2"; return "b"}}, {toString() { o17 += "3"; return "body;"}});
let o19 = "";
for (let o20 = 0; o20 < o8.length; ++o20)
    o19 += "123";
o0(o17 === o19);
