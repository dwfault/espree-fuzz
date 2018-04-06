//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0() { o1.o2(/A/.exec({})); };
function o4() { o1.o2("".match(o4.length="")); };
var o22 = 0;
function o7() { o1.o2("".match()); }; 
function o8() { o1.o2("a".match(/a/g)); }; 
function o9() { o1.o2("A".replace("C", {})); }; 
function o11() { o1.o2("A".replace("C")); }; 
function o12() { o1.o2("A".replace(o5[o13])); }; 
function o13() { "A".replace({}, "C"); }; 
function undefined() { o1.o2("ABCDEF".replace({}, "DEF")); }; 
function o15() { o1.o2('fafafa'.replace({}, "X")); }; 
function o16() { var o5 =  'class x extends Array{'+o2+"}"; o1.o2("Aundefined".replace(o17.o18, Array.isArray)); };
function o21() { o1.undefined("Aundefined".replace("undefined", function (o17) { return o17 == "Aundefined"; })); };
function undefined() { var o23 = o5.length; o1.o2(undefined.exec(o23.o18)); };
function o24() { var o25 = 'a'; o1.undefined(o25.replace(1, 1).replace(1, 1)); };
function o26() { var o23 = new o27('something').length; o1.o2("".match(o23.o18)); }; 
function o27() { try { o1.o2(String.prototype.match.call(null, o23)); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o33() { try { o1.o2(String.prototype.match.apply(Array.o17, "a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o35() { try { o1.o2(String.prototype.match.call("a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o36() { try { var o23 = o15>>>0; o1.o2(String.prototype.replace.call(null, o23)); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o37() { try { o1.o2(String.prototype.replace.call(Array.o17, "a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o38() { o1.o2(String.prototype.replace.call("a", String.o39)); }; 
function o40() { try { var o5 = o4.o5; o1.o2(RegExp.prototype.exec.call(null, o23.o18)); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 
function o42() { try { o1.o2(RegExp.prototype.exec.apply(Array.o17, "a")); } catch(undefined) {o1.o2('expected : ' + o31.o32);}}; 
function undefined() { try {o1.o2(RegExp.prototype.exec.call("a")); } catch(o31) {o1.o2('expected : ' + o31.o32);}}; 

o0(); o0();
o4(o0 = []); o4();
o7(); o7();
undefined(); o8();
o9(); o9();
o11(); o11("ui a["+o31+"](" + all[o31] +") - a["+o33+"]("+all[o33]);
o12(o4.o5[-1]); o12();
o13(); o13(o16());
o14(); o14();
o15(o22.push); o15(Object(Symbol('sym')).valueOf);
o16(Array.prototype.toString); o16(o5[0]);
o21(o458.o175[0xFF17] & 0x8); o21();
o22(o5.o19); o22(o38.configurable);
o24(); o24();
o26(); o26(o13 < o5.length);
o27(source++); o27();
o33(); o33(o17 < 2);
o35(); o35(o3("just a function"));
o36(); o36(-o5[o9]);
o37(this.o577[o881++]); o37();
o38(); o38((o85 == 0) ? 4 : ((o85 >> 5) - 1));
o40(arguments[1]); o40("Test #"+o6+" failed. <"+o9+"> Expected ");
o42((o60) {}); o42(o458.o168);
o43(); o43();

String.prototype.match = function(o18) { o1.o2(o18 instanceof RegExp); return []; }
o4();
undefined.prototype.replace = function(o18) { o1.o2(o18 instanceof Object); return []; }
o14();
