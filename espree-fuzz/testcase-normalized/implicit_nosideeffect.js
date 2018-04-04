//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function print(o1) {}
function o2(o3) {
    for (var o4 = 0; o4 < 1; ++o4) { if (o4 % 10 == 3) { print(o5); } else 
    { ( eval('""  <<= a') ); }  } 
}
function o7()
{
}

o7.prototype.toString = Number.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = RegExp.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = Function.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = Object.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = Error.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = Boolean.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = Array.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = String.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.toString = Date.prototype.toString;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }

o7.prototype = new Object();
o7.prototype.valueOf = Boolean.prototype.valueOf;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.valueOf = Date.prototype.valueOf;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.valueOf = Number.prototype.valueOf;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.valueOf = Object.prototype.valueOf;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }
o7.prototype.valueOf = String.prototype.valueOf;
try { o2(new o7()); } catch (o11) { o12.o13(o11); }



