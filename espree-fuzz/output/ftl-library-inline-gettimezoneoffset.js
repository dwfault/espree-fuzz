function o0(o1, o2){
    return o1 + o2.getTimezoneOffset();
}

noInline(o0);

var o2 = new Date();
var o6 = o0(0, o2);
var o7 = 1000000;
var o6 = o3();
for (var o9 = 0 ; o9 < o7; o9++){
    o8 += o0(0, o2);
}

if (o8 != o7 * o6)
    throw "Error: bad result: " + o8;
