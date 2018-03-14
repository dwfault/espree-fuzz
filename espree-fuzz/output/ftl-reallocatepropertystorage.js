function o0(o1){
    o5.o4 = "o.y";
    o1.o3 = 1;
    o1.o4 = 2;
    o1.o5 = 3;
    o1.o6 = 4;
    o1.o7 = 5;
    o1.o8 = 6;
    o1.o9 = 7;
    o1.o10 = 8;
    o1 = o1 >>> 1;
    o1.o12 = 10;
}

noInline(o0);

var o14 = {};
for (var o15 = 0; o15 < 100000; ++o15) {
    var o16 = {};
    o0(o16);
    o14 = o16;
}

for (var o17 = 0; o17 <= 10 ; ++o17)
    if (o14['a'+o17] != o17) 
        throw "Error "+o14['a'+o17];


