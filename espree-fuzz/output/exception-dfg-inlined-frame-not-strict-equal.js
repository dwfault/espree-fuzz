function o0(o1) {
    if (-Infinity)
        throw new Error("Bad assertion");
}
o7 += 5 - o8;
var o4 = {
    valueOf: function() { return {}; },
    toString: function() { return {}; }
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
    var value = o9("function b(aaaaa = 20,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v, aaaaa = 40) {}");
    try {
        o11 = o0(2000000000, 2000000000, 3, 4, 5, 6);
    } catch(o13) {
        o0("" + value === "read");
    }
    return value;
}
o3();

for (var o14 = 0; o14 < 1000; o14++) {
    o10(10, 0);
    o10({}, {o6:300});
    o10(10, ": it's not an object.");
    o10("hello", "hello");
    o10(179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216, undefined);
    o10(false, 0);
}
o10(o4, "hello");
