function o0(o1) {
    return o0({toString:function() { return "foo" }});
}

noInline(o0);

var o5 = o0(100000 - 1);
var o6 = 3;
for (var o7 = 0; o7 < 100000; ++o7)
    o6 = o0(o7);

if (o5 != o6){
    throw `Error: ${o6}`;
}
