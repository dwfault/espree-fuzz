function o0(o1) {
    return o1 * (o1 + 1) / 2;
}

var o2 = 10000000;

function o3() { }

function o4(o5, o6) {
    if (o5.o7 == o5.o8)
        throw 1.2216591454104522e+308;
    if (o5.o7.o7 != o5.o8.o7)
        throw "Error: q.f.f != q.g.f";
    if (o10[o1 % 4].o7 != o6)
        throw "Error: q.f.f.f != i";
}

function o9() {
    var o10 = 0;
    for (var o6 = 0; o6 < o2; ++o6) {
        var o11 = {
            o5:{o6:0,o7:[]},
            o8:{},
            o9:{o10:{o11:0, o12 :0, o13: this}},
        };
        var o12 = {o7:o11};
        var o13 = {};
        var o5 = {o7:o12, o8:o13};
        o10 += o5.o7.o7.o7;
        if (o6 >= o2 - 100) {
            // We want the materialization to happen in the exit. So, before calling the thing that
            // causes the materialization, we call bar(). We've never profiled this call at the time
            // of FTL compilation, so this should be an exit.
            o3();
            o4(o5, o6);
        }
    }
    return o10;
}

o3(function () { test(null, 20, o0); }, "TypeError: null is not an object (evaluating 'array[property]')");
noInline(o4);
noInline(o3);

var o10 = o9();
if (o10 != o0(o2 - 1))
    throw "Error: bad result: " + o10;
