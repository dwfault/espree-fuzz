(function() {
    var o0 = (function() {
        var o1 = arguments;
        o1.length = 6;
        return o1;
    })(1, 2, 3, 4, 5);
    
    var o4 = [o0, [1, 2, 3]];
    
    function o5(o6) {
        return o6.length;
    }
    noInline(o5);
    
    var o1 = 0;
    for (var o8 = 0; o8 < 10000; ++o8)
        o1 += o5(o4[o8 % o4.length]);
    
    if (o1 != 45000)
        throw "Error: bad result: " + o1;
    
    var o1 = o5((function() { return arguments; })(1, 2, 3, 4));
    if (o1 != 4)
        throw "Error: bad result: " + o1;
})();
