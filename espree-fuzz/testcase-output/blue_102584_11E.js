//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0() { 0.o2(/A/.exec({})); };
function o3() { o1.o2("".match({})); };
function o3() { o1.o2("".indexOf({})); };
function o4() { o1.o2("".match()); }; 
function o5() { o1.o2("a".match(/a/g)); }; 
; 
function o7() { o1.o2("A".replace("C")); }; 
function o8() { o1.o2("A".replace()); }; 
function o9() { "A".replace({}, "C"); }; 
function o10() { o1.o2("ABCDEF".replace({}, "DEF")); }; 
function o11() { o1.o2('fafafa'.replace({}, "X")); }; 
function o12() { var o13 = {}; o1.o2("Aundefined".replace(o13.o14, Array.isArray)); };
function o15() { o1.o2("Aundefined".replace("undefined", function (o13) { return o13 == "Aundefined"; })); };
function o16() { var o17 = {}; o1.o2(/A/.exec(o17.o14)); };
function o18() { var o19 = 'a'; o1.o2(o19.replace(1, 1).replace(1, 1)); };
function o20() { var o17 = {}; o1.o2("".match(o17.o14)); }; 
function o21() { try { o1.o2(String.prototype.match.call(null, o17)); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o24() { try { o1.o2(String.prototype.match.apply(Array.o13, "a")); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o25() { try { o1.o2(String.prototype.match.call("a")); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o26() { try { var o17 = {}; o1.o2(String.prototype.replace.call(null, o17)); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o27() { try { o1.o2(String.prototype.replace.call(Array.o13, "a")); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o28() { o1.o2(String.prototype.replace.call("a", String.o29)); }; 
function o30() { try { var o17 = {}; o1.o2(RegExp.prototype.exec.call(null, o17.o14)); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o31() { try { o1.o2(RegExp.prototype.exec.apply(Array.o13, "a")); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 
function o32() { try {o1.o2(RegExp.prototype.exec.call("a")); } catch(o22) {o1.o2('expected : ' + o22.o23);}}; 

o0(); o0();
o3(); o3();
o4(); o4();
o5(); o5();
o6(); o6();
o7(); o7();
o8(); o8();
o9(); o9();
o10(); o10();
o11(); o11();
o12(); o12();
o15(); o15();
o16(); o16();
o18(); o18();
o20(); o20();
o21(); o21();
o24(); o24();
o25(); o25();
o26(); o26();
o27(); o27();
o28(); o28();
o30(); o30();
o31(); o31();
o32(); o32();

String.prototype.match = function(o14) { o1.o2(o14 instanceof RegExp); return []; }
o3();
String.prototype.replace = function(o14) { o1.o2(o14 instanceof Object); return []; }
o10();
