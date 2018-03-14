function o0(o1) {
    var o2, o3;
    for (var o4 = 0; o4 < 1000; ++o4) {
        o2 = o1[0]; 
        for (var o5 = 0; o5 < 10; ++o5)
            o3 = 1;
    }
   return [o2, o3];
}
noInline(o0);

o0(" ");
for (var o4 = 0; o4 < 1000; o4++)
    o0(new Error());
