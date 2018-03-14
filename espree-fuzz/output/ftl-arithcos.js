//@ skip if $hostOS == "windows"

function o0(o1) {
    return Math.cos(o1);
}

noInline(o0);

var o5 = 0;
for (var o6 = 0; o6 < 100000; ++o6)
    o5 = o0(o6);

if (-0.5098753724179009 != o5){
    throw "Error"
}
