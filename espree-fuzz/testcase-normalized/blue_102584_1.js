//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0() { o1.o2(/A/.exec({})); };
function o4() { o1.o2("".match({})); };
function o4() { o1.o2("".indexOf({})); };
function o7() { o1.o2("".match()); }; 
function o8() { o1.o2("a".match(/a/g)); }; 
function o9() { o1.o2("A".replace("C", {})); }; 
function o11() { o1.o2("A".replace("C")); }; 
function o12() { o1.o2("A".replace()); }; 
function o13() { "A".replace({}, "C"); }; 
function o14() { o1.o2("ABCDEF".replace({}, "DEF")); }; 
function o15() { o1.o2('fafafa'.replace({}, "X")); }; 
function o16() { var o17 = {}; o1.o2("Aundefined".replace(o17.o18, Array.isArray)); };
function o21() { o1.o2("Aundefined".replace("undefined", function (o17) { return o17 == "Aundefined"; })); };
function o22() { var o23 = {}; o1.o2(/A/.exec(o23.o18)); };
function o24() { var o25 = 'a'; o1.o2(o25.replace(1, 1).replace(1, 1)); };
function o26() { var o23 = {}; o1.o2("".match(o23.o18)); }; 
function o27() { try { o1.o2(String.prototype.match.call(null, o23)); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o33() { try { o1.o2(String.prototype.match.apply(Array.o17, "a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o35() { try { o1.o2(String.prototype.match.call("a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o36() { try { var o23 = {}; o1.o2(String.prototype.replace.call(null, o23)); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o37() { try { o1.o2(String.prototype.replace.call(Array.o17, "a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o38() { o1.o2(String.prototype.replace.call("a", String.o39)); }; 
function o40() { try { var o23 = {}; o1.o2(RegExp.prototype.exec.call(null, o23.o18)); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o42() { try { o1.o2(RegExp.prototype.exec.apply(Array.o17, "a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o43() { try {o1.o2(RegExp.prototype.exec.call("a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 

o0(); o0();
o4(); o4();
o7(); o7();
o8(); o8();
o9(); o9();
o11(); o11();
o12(); o12();
o13(); o13();
o14(); o14();
o15(); o15();
o16(); o16();
o21(); o21();
o22(); o22();
o24(); o24();
o26(); o26();
o27(); o27();
o33(); o33();
o35(); o35();
o36(); o36();
o37(); o37();
o38(); o38();
o40(); o40();
o42(); o42();
o43(); o43();

String.prototype.match = function(o18) { o1.o2(o18 instanceof RegExp); return []; }
o4();
String.prototype.replace = function(o18) { o1.o2(o18 instanceof Object); return []; }
o14();
