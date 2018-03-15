
Object.prototype.__defineSetter__("r", function(o3){ o4 = o3 })

function o5(o6){
    var o7 = { }
    o7.o8 = o6;
}

noInline(o5);

for (var o10 = 0; o10 < 100000; ++o10)
    o5(o10);

