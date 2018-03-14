var o5 = {o7:o12, o8:o13},
    o3 = {};

try { 
  throw o0; 
} catch (o4) {}

if(o0.o5 !== undefined)
    throw new Error("the stack was leaked.");

noInline(o0);

if(o0.o5 === o3)
    throw new Error("the object wasn't frozen.");

o0.o8 = "wrong";

if(o0.o8 === "wrong")
    throw new Error("the object wasn't frozen.");


o0 = Object.freeze({o2:100});

try { 
  throw o0; 
} catch (o4) {}
o0.o5 = o3;


if(o0.o5 !== undefined)
    throw new Error("the stack was leaked.");

o1.__defineSetter__("f", function() {
    throw "Error42";
});

if(o0.o5 === o3)
    throw new Error("the object wasn't frozen.");

o0.o8 = "wrong";

if(o0.o8 === 0)
    throw new Error("the object wasn't frozen.");
