function o0(o1){
    var o2 = "s" in o1; 
    return o2;
}

noInline(o0);

var o4;
for (var o5 = 0; o5 < 1000000; ++o5) {
    var o6 = { 'y' : o5, 's' : o5 + 1 };
    o6.o7 = 10;
    o4 = o0(o6);
}

if (!o4) {
    print ("Error: " + o4);
}
