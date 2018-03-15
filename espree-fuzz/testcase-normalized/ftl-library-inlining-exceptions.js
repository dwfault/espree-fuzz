function o0(o1){
    return Date.prototype.getTimezoneOffset.call(o1);
}

noInline(o0);

var o7;
var o8 = 100000;
for (var o9 = 0 ; o9 < o8; o9++){
    try { 
        o0(o9 < o8 - 1000 ? new Date() : "a");
        o7 = false;
    } catch (o10) {
        o7 = true;
    }
}

if (!o7)
    throw "bad result: "+ o7;