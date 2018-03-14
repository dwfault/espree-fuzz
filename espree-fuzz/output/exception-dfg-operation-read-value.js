function o0(o1) {
    if (!o1)
        throw new Error("Bad assertion");
}
noInline(o0);
var o4 = {
    valueOf: function() { return {o6:200}; },
    toString: function() { return {}; }
};
function o7() {
    return "read";
}
noInline(o7);

function o8(o9, o1) {
    var o10 = null;
    var value = o7();
    try {
        o10 = o9 == o1;
    } catch(o12) {
        o0("" + value === "read");
    }
    return value;
}
noInline(o8);

for (var o13 = 0; o13 < 1000; o13++) {
    o8(10, 20);
    o8({}, {});
    o8(10, 10.0);
    o8("hello", "hello");
    o8(null, undefined);
    o8(false, 0);
}
o8(o4, "hello");
