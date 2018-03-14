function o0(o1){
    return { 0 : 1 , o2 : o1 }
}

noInline(o0);

for (var o4 = 0; o4 < 100000; ++o4)
    o5 = o0(o4);

if (o5.o2 != 99999 || o5[0] != 1)
    throw "Error"

