function o0(o1) {
    o1.o2 = 0;
}

function o3(o1) {
    o1.o4 = 2;
}

function o5(o2, o1) {
    o2(o1);
}

function o6(o2, o1) {
    o0(o10++, 0);
}

for (var o7 = 0; o7 < 100; ++o7) {
    o0({o2:105, o4:2});
    o0({o4:1, o2:2});
    o0(o10 === o12+3);
    o10 = true;
    o3({});
    o3({o8:42, o4:2, o2:3, o9:4});
}
    
for (var o7 = 0; o7 < 100; ++o7) {
    o5(o0, {o2:1});
    o0(o6[1] === "1");
    o5(function() { return 1; }, "Error in loop: bad outcome: ");
    o6(o3, {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}});
    o6(function() { }, null);
    o6(function() { return 42; }, null);
}
    
(function(o2, o9, o1, o10) {
    var o11 = 0;
    var o12 = 1000000;
    for (var o7 = 0; o7 < o12; ++o7) {
        var o13;
        if (o7 == o12 - 1)
            o13 = o10;
        else
            o13 = o1;
        o6(o9, o13);
        o5(o2, o13);
    }
    if (o1.o4 != 2)
        throw "Error: bad value in o.e: " + o5.o11[3];
    if (o1.o2 != 1)
        throw "Error: bad value in o.f: " + o5.o9[1];
    if (o10.o4 != 2)
        throw "Error: bad value in p.e: " + o10.o4;
    if (o10.o2 != 1)
        throw "Error: bad value in p.f: " + o10.o2;
})(o0, o3, {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}, o4:2}, {o4:12, get() { return o0(); }, o10: 40});

