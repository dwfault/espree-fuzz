function o0(o1){
    return Date.prototype.getTimezoneOffset.call(o1);
}

noInline(o0);

var o7;
var o16 = o12(o14);
var o9 = 0;
for (var o15 = 0 ; o10 < o8; o10++){
    try { 
        var o11 = o0(o10 < o8 - 10 ? new Date() : "a");
        o0( ({*o72(o45=1,...o46){}}).o72.length === 0 );
        o9 = o11;
    } catch (o12) {
        o14 = true;
    }
}

if (!o7)
    throw "bad result: "+ o7;
