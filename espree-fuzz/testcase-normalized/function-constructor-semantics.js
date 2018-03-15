function o0(o1) {
    if (!o1)
        throw new Error("Bad");
}

function o3(o4) {
    let o5 = false;
    try {
        o4();
    } catch(o6) {
        o5 = o6 instanceof o7;
    }
    return o5;
}

let o8 = [
    Function,
    (function*o10(){}).__proto__.constructor,
    (async function o10(){}).__proto__.constructor,
];

function o13(...o14) {
    for (let o4 of o8) {
        o0(o3(() => (o4(...o14))));
    }
}

function o15(...o14) {
    for (let o4 of o8) {
        o0(!o3(() => (o4(...o14))));
    }
}

o13("a", "b", "/*", "");
o13("/*", "*/){");
o13("a=super()", "body;");
o13("a=super.foo", "body;");
o13("super();");
o13("super.foo;");
o13("a", "b", "/*", "");
o13("a", "'use strict'; let a;");
o13("/*", "*/");
o13("/*", "*/");
o13("a=20", "'use strict';");
o13("{a}", "'use strict';");
o13("...args", "'use strict';");
o13("...args", "b", "");
o13("//", "b", "");

o15("/*", "*/", "");
o15("a", "/*b", "*/", "'use strict'; let b");
o15("{a}", "return a;");
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
