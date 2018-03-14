function o0(o1) {
    return Math.sqrt(o1);
}

noInline(o0);

var o5 = 0;
for (var o6 = 0; o6 < 100000; ++o6)
    o5 = o0(o6);

if ( 316.226184874055 != o5){
    throw "Error"
}
