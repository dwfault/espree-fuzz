function o0(o1){
    return o1.o2
}

noInline(o0);

for (var o4 = 0; o4 < 100000; ++o4) {
    var o5 = new Uint8Array(42, 0);
    if (o0(o5) != 0) 
        throw "error"
}

