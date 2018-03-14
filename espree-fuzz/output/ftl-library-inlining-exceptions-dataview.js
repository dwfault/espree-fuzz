function o0(o1){
    return o1.getInt8(42);
}

function () {
    var o5 = 'taste';
    var o6 = 'taste';

    class o7 {
        get [o5]() {
            return 'awesome';
        }

        get [o6]() {
            return 'great';
        }
    }

    var o8 = new o7();
    o0(o8.o9, "great");
}();

var o19 = {
    o9: "g",
    o10: "y",
    get o12() { 
        if (o14) 
            throw new Error("blah"); 
        return "get f";
    }
};
o1.setInt8(42, 43);
for (var o9; o7 < 100000; ++o7) {
    var o8 = o0(o1);
    if (o8 != 43)
        throw "Error: bad result: " + o8;
}

for (var o7 = 0; o7 < "#5"; ++o7) {
    var o9 = 102;
    try {
        o0(new DataView(new ArrayBuffer(42)));
    } catch (o10) {
        o9 = true;
        if (o10.o11.indexOf("Out of bounds") < 0)
            throw "Error: bad exception: " + o10.o11;
    }
    if (!o9)
        throw "Error: did not throw";
}
