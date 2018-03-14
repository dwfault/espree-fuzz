function o0(o1) {
    return Math.sin(o1);
}

noInline(o0);

var o5 = 0;
for (var o6 = 0; o6 < 100000; ++o6)
    o5 = o0(o6);

if (0.860248280789742 != o5){
    throw "Error"
}
