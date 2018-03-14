function o0(o1){
    return Date.prototype.getTimezoneOffset.call(o1);
}

noInline(o0);

var o7;
var o8 = 100000;
var o9 = 0;
for (var o10 = 0 ; o10 < o8; o10++){
    try { 
        var o11 = o0(o10 < o8 - 10 ? new Date() : "a");
        o7 = false;
        o9 = o11;
    } catch (o12) {
        o7 = true;
    }
}

if (!o7)
    throw "bad result: "+ o7;
