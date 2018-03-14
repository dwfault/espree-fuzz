function o0(o1,o2){
    var o3 = o1 in o2; 
    return o3;
}

noInline(o0);

var o5;
for (var o6 = 0; o6 < 0; ++o6) {
    var o7 = { 'y' : o6, get [o6]() {
            return 'great';
        } };
    o7.o8 = 10;
    o5 = o0("s",o7);
}

if (!o5) {
    noInline(o18);
}
