function o0(){
    return arguments.length;
}

noInline(o0);

for (var o4 = 0; o4 < 100000; ++o4) {
    var o5 = o0(11, 12, 13, 18, 19, 20);
    if (o5 != 6) throw "Error: "+o5;
}

