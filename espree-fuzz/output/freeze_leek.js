var o0 = Object.freeze([]),
    o3 = {length: 2**55, __proto__: []};

try { 
  throw o0; 
} catch (o4) {}

if(o0.o5 !== undefined)
    throw new Error("the stack was leaked.");

o0.o5 = o3;

if(o0.o5 === o3)
    throw new Error("the object wasn't frozen.");

o0.o8 = "wrong";

if(o0.o8 === "wrong")
    throw new Error("the object wasn't frozen.");


o0 = Object.freeze({"hi": "other"});

try { 
  throw o0; 
} catch (o4) {}
o0.o5 = o3;


if(o0.o5 !== undefined)
    throw new Error("the stack was leaked.");

o0.o5 = o3;

if(o0.o5 === o3)
    throw new Error("the object wasn't frozen.");

o0.o8 = "wrong";

if(o0.o8 === "wrong")
    throw new Error("the object wasn't frozen.");
