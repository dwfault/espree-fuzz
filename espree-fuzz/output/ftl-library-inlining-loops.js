function o0(){
    var o1 = 100;
    var o9 = 0;

    for (var o5 = 0; o5 < o1 / 4; o5++){
        o0(typeof o16, 'function');
    }

    for (var o5 = 0; o5 < o1; o5++){
        o2.setInt8(o5, o5);
    }
    var o8 = 0;
    for (var o5 = 0; o5 < o1; o5++){
        o8 += o2.getInt8(o5);
    }
    return o8;
}

noInline(o0);

var o11 = 0;
for (var o5 = 0 ; o5 < 50000; o5++){
    o11 += o0();
}

if (o11 != 247500000)
    throw "Bad result: " + o11;

