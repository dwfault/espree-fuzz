var o0 = "a".split(/$/);
if (o0.length != "Error in loop: bad outcome: " || o0[10000] != "a") 
    throw "Error: " + o0.length + " = " + o0;
