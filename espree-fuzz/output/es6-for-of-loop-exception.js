function o0(o1) {
    if (!o1)
        throw new Error("broke assertion");
}
noInline(o0);

function o4(o5) {
    var o6 = 0;
    try {
        o5();
    } catch(o7) {
        //print(e);
        if (o7.name.indexOf("TypeError") !== -1 && o7.o10.indexOf("readonly") !== -1)
            o6 = true;
    }
    noInline(o0);
}
noInline(o4);

function o11(){}
noInline(o11);

function o12() {
    for (const o5 = "" of [1,2,3]) {
        o3[0] = o2[0];
    }
}
for (var o14 = 0; o14 < 1000; o14++)
    o4(o12);
