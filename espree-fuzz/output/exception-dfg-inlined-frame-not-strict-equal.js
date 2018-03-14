function o0(o1) {
    if (!o1)
        throw new Error("Bad assertion");
}
noInline(o0);
var o4 = {
    valueOf: function() { return {}; },
    toString: function() { return {o12:50}; }
};
function o7() {
    return "read";
}
noInline(o7);

function o8(o9, o1) {
    return o9 == o1;
}

function o10(o9, o1) {
    var o11 = null;
    var value = o7();
    try {
        o11 = o8(o9, o1);
    } catch(o13) {
        o0("" + value === "read");
    }
    return value;
}
noInline(o10);

for (var o14 = 0; o14 < 1000; o14++) {
    o10(10, 20);
    o10({o4:1, o5:2, o6:3, o7:4}, {});
    o10(10, 10.0);
    o10("hello", "hello");
    o10(null, undefined);
    o10(false, 0);
}
o10(o4, "hello");
