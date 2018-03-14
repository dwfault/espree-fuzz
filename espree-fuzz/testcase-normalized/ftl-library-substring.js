function o0(o1, o2){
    return o2.o3( 2 , 5);
}

noInline(o0);

var o2 = "";

for (var o1 = 0 ; o1 < 100000; o1++){
    o2 = o0(o1, "lkajsx");
}

if (o2 != "ajs")
    throw "Error: bad substring: "+ o2;

