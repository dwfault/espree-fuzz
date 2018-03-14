function o0(o1){
    return Math.random(o1);
}

noInline(o0);

var o1 = 0;

for (var o5 = 0 ; o5 < 100000; o5++){
    o1 = o0(o5);
}
