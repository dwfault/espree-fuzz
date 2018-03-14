function o0(){
    return arguments.length;
}

for (var o3 = 0; o3 < 100000; ++o3) {
    var o4 = o0(11, 12, 13, 18, 19, 20);
    if (o4 != 6) throw "Error: "+o4;
}

