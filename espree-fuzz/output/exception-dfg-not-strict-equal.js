;(function () {
function o0(o1, o2) {
    var o3 = null;
    try {
        o3 = o1 == o2;
    } catch(o4) {
    }
}
noInline(o0);

for (var o6 = 0; o6 < 1000; o6++) {
    o0(10, 20);
    o0({}, {o7:300});
    o0(10, 10.0);
    o0("hello", "hello");
    o0(null, undefined);
    o0(false, 0);
}

var o8 = {
    valueOf: function() { return {o8:o0}; },
    toString: function() { return {}; }
};
o0(o8, "hello");
})();


function o11(o2) {
    if (!o2)
        throw new Error("Bad assertion");
}
noInline(o11);


;(function() {

var o13 = false;
function o14() { return o13; }
noInline(o14);

function o0(o1, o2) {
    var o3 = null;
    try {
        o3 = o1 == o2;
    } finally {
        if (o14())
            o11(o3 === null);
    }
    return o3;
}
noInline(o0);

for (var o6 = 0; o6 < 1000; o6++) {
    o0(10, 20);
    o0({}, {o4:2000000000});
    o0(10, 10.0);
    o0("hello", "hello");
    o0(null, undefined);
    o0(false, 0);
}

var o8 = {
    valueOf: function() { return {o4:1, o2:2}; },
    toString: function() { return {}; }
};
try {
    o13 = true;
    o0(o8, "hello");
} catch(o4) {}

})();
