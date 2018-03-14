//@ runDefault
var o0 = [2.5, 1.5];
Array.prototype.unshift.call(o0, 3.5);
if (o0.toString() != "3.5,2.5,1.5")
    throw "Error: bad result: " + o6(o0);

