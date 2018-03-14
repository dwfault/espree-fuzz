
Object.prototype.__defineSetter__("r", function(o3){ noInline(o9); })

function o5(o6){
    var o7 = { }
    o7.o8 = o6;
}

noInline(o5);

for (var o10 = 0; o10 < 1000; ++o10)
    o5(o10);

