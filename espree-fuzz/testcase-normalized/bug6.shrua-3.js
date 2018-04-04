//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
var o1 = false;
var o2 = false;
var o3 = function(o4) {
    var o5 = o4;
    return function() {
    // Robert Jenkins' 32 bit integer hash function.
    // This hash is public domain. (http://burtleburtle.net/bob/hash/integer.html)
    o5 = ((o5 + 0x7ed55d16) + (o5 << 12))  & 0xffffffff;
    o5 = ((o5 ^ 0xc761c23c) ^ (o5 >>> 19)) & 0xffffffff;
    o5 = ((o5 + 0x165667b1) + (o5 << 5))   & 0xffffffff;
    o5 = ((o5 + 0xd3a2646c) ^ (o5 << 9))   & 0xffffffff;
    o5 = ((o5 + 0xfd7046c5) + (o5 << 3))   & 0xffffffff;
    o5 = ((o5 ^ 0xb55a4f09) ^ (o5 >>> 16)) & 0xffffffff;
    return (o5 & 0xfffffff) / 0x10000000;
    };
};;
var o6 = 0;
function o7(o5, o8, o9, o10, o11) {
   Math.random = o3(o5);
   var o14, o15, o16, o17 = Math.floor(o9 * o10), o19 = 0;
   var o20 = [];
   var o21 = o8 == 'var';
   function o22(o23) {
       return Math.floor(Math.random() * 100) < o23
   }

   o16 = 'tempIntArr' + o6++;

   for (var o24 = 0; o24 < o9; o24++) {
       if (o21 && o24 != 0) {
           o8 = Math.floor(Math.random() * 100) < 50 ? 'int' : 'float';
       }

       if(o19 < o17 && o22(o10)) {
           o19++;
           o20.push('');
       } else {
           var o26;
           if (o8 == 'int') {
               o26 = Math.floor(Math.random() * o5);
           } else if (o8 == 'float') {
               o26 = Math.random() * o5;
           } else if (o8 == 'var') {
               o26 = '\'' + (Math.random() * o5).toString(36) + '\'';
           }
           o20.push(o26);
       }
   }

   if(o20.length == 1 && o11 == 'constructor') {
       o20.push(Math.floor(Math.random() * o5));
   }
   if(o11 == 'literal') {
       o15 = 'var ' + o16 + ' = [' + o20.join() + '];';
   } else {
       o15 = 'var ' + o16 + ' = new Array(' + o20.join() + ');';
   }

   o15 += 'result =  ' + o16 + ';';
   eval(o15);
   return o14;
}
;

function o31(o32) {
  if(o32 % 1 == 0) // int number
    return o32 % 2147483647;
  else // float number
    return o32.toFixed(8);
 return o32;
};

var print = o35.o36;
o35.o36 = function(o32) { if(!o32) print(o32); else print(o37(o32.toString())); };

function o37(o32) {{
 return o32.replace(/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g, function(match) {{return o31(parseFloat(match));}} );
}};
function o41(o42, o43, index, o45) {
    return (typeof o42 == "number" && typeof o43 == "number") ? o43 + o42 : 0
}
;
var o46 = 0;
function o47(){
  var o48 = o0 ? 12 : 10;
  var o49 = [];
  o46++;;
  function o50(o51) { if(o51 < 1 || o51 > 4294967295 || o51 != o51 || isNaN(o51) || !isFinite(o51)) return 100; else return Math.floor(o51) & 0xffff; };;
  function o54() { return 100; };
  var o55 = {};
  var o56 = {};
  var o57 = {o58: 3.14159265358979};
  var o56 = {};
  var o59 = function(){
    o60 = (++ o55.o61);
    o60 = ((o47.caller) - ((o63 - o63) * (4294967295, o63) - 2108033774));
    o55.o61 = (- ((- -1414475580) * (o47.caller) - (o64 ^ 1595238567.1)));
    return o54.call(o56 );
  };
  var o66 = function(){
    o63 <<=o59.call(o67 );
    (function(o68, o69, o70){
      o60 |=(o55.o61 = (- o71));
      o60 <<=(typeof(o63)  != 'string') ;
      o63 = ((! o59.call(o67 )) * (o47.caller) - (((o63 === o64)&&(o71 >= o63)) - (- o69.o61)));
      o55.o61 =157225836;
      o63 -=((- (-2067422549 >>> -1636353152.9)) >> ((o60 &= o69.length) * (-2067422549 >>> -1636353152.9) + (o71 + o71)));
    })(o64,o56,(~ 2147483647));
    this.o61=(- (o47.caller));
    return (- (o72.push((o71 * o64 + 552020892)))
);
  };
  var o73 = function(){
    return -125;
  };
  var o74 = function(o75,o76,o77,o78){
    o63 = o66.call(o76 );
    o55.o61 +=(o75.unshift(153045429, o66.call(o76 ), (! (typeof(-1410448513)  == 'string') ), (o75.reverse()), (o47.caller), ((-4.64733614747003E+18, o64) & o66.call(o76 )), (o75.reverse()), (! (-2080272368.9 >> -1073741824)), (- (o47.caller)), (o47.caller), (! (-2080272368.9 >> -1073741824)), ((o64 ^ o76.o61) + (- 153)), o55.o61, ((o63 ^ o71) * ((o47.caller) - 1178228778.1))));
    o60 = (- ((o55.o61 -= o71) * (-8.20260457466577E+18 + (- o71))));
    return (o54.call(o56 ) + (- (o64 + -9.50122264758276E+16)));
  };
  var o81 = function(){
    o67.o82=o63;
    o67.o82 -=(~ (-- o83.o82));
    var o84 = [''];
    var o85 = o84[o46%o84.length];
    o85.toString();
    return (o47.caller);
  };
  o55.o86 = o59;
  o55.o87 = o55.o86;
  o56.o86 = o55.o87;
  o56.o87 = o55.o87;
  var o72 = new Array(10);
  var o89 = new Int8Array(256);
  var o91 = new Int16Array(256);
  var o93 = new Int32Array(256);
  var o95 = new Uint8Array(256);
  var o97 = new Uint16Array(256);
  var o99 = new Uint32Array(256);
  var o101 = new Float32Array(256);
  var o103 = new Float64Array(256);
  var o105 = new Uint8ClampedArray(256);
  var o107 = [];
  var o108 = new Array(968398749,213,-2147483647);
  var o109 = [31,-65142194,688927696,251979442];
  var o110 = new Array(o56,-28,580282652,74274812,615692735,498133449,-2,-170);
  var o63 = 7.18833214492778E+17;
  var o111 = 2;
  var o112 = -7.40943319632701E+18;
  var o60 = -163914637;
  var o113 = 1767600395;
  var o114 = 3.67258722953737E+18;
  var o115 = 5.20382937941989E+18;
  var o116 = 57;
  var o117 = -9.90282939910018E+17;
  var o118 = -156825025;
  var o71 = -1179658900.9;
  var o119 = 243;
  var o120 = 1266801686;
  var o32 = -9.00984088258652E+18;
  var o121 = -3.18287498070513E+18;
  var o64 = -4.64827628003843E+18;
  var o122 = -2147483649;
  var o123 = -1118727838.9;
  o56[0] = 6.36672072818147E+18;
  o56[1] = 135;
  o56[2] = -929029250;
  o56[3] = 1245041367;
  o56[4] = -5.26701184552884E+18;
  o56[5] = 2146462342.1;
  o56[6] = 2.94930445871878E+16;
  o56[7] = -10;
  o56[8] = -2147483647;
  o56[9] = -227;
  o56[10] = 71865530;
  o56[11] = 2147483647;
  o56[12] = -1918718448.9;
  o56[13] = 2.88409576756109E+17;
  o56[14] = -796492977;
  o56[o56.length-1] = 315591605.1;
  o56.length = o50(-2147483647);
  o72[0] = 180224827;
  o72[1] = -252;
  o72[2] = 43;
  o72[3] = 761200964;
  o72[4] = -149924584;
  o72[5] = 357066928;
  o72[6] = -1029007725;
  o72[7] = 65536;
  o72[8] = -104;
  o72[9] = -1584655723.9;
  o72[10] = 2147483650;
  o72[11] = -1850992516.9;
  o72[12] = -1.73690935785342E+18;
  o72[13] = 194;
  o72[14] = -220;
  o72[o72.length-1] = 1047975887;
  o72.length = o50(1022565544.1);
  var o67 = o55;;
  var o124 = o110;;
  this.o61 = 186;
  o55.o61 = 170;
  o55.length = o50(4294967297);
  o67.o61 = 4.1347939449402E+18;
  o67.length = o50(639922501);
  o56.o61 = -103;
  o56.length = o50(0);
  o67.o82 = -430662160.9;
  o107[o107.length] = 774590552;
  o107[6] = 215;
  o107[0] = 8.2967774148005E+18;
  o107[5] = 54835619;
  o107[4] = 1;
  o107[2] = 1003589260;
  o107[3] = -85;
  o108[5] = -1389274251;
  o108[4] = 3;
  o108[3] = 60;
  o114 = (typeof(o71)  != 'undefined') ;
  var o125 = [o56, o55, o55, o55];
  var o126 = o125[o46%o125.length];
  o126.o86();
  o60 = (o64 - (o47.caller));
  o63 +=(((o54.call(o56 ) + (- (o64 + -9.50122264758276E+16))) | (o63 * (o71 + o71))) >> (o63 ^= (typeof(o71)  != 'number') ));
  o55.o61 -=(typeof(o64)  != 'boolean') ;
  o67.o82 = (typeof(o63)  == 'boolean') ;
  o63 +=(typeof(o71)  != 'object') ;
  o67.o82 = ((((o54.call(o56 ) + (- (o64 + -9.50122264758276E+16))) | (o63 * (o71 + o71))) >> (o63 ^= (typeof(o71)  != 'number') )) ^ (typeof(o63)  == 'boolean') );
  o55.o61 = ((- (-657539943 << 114)) | (typeof(o71)  == 'undefined') );
  o55.o61 -=(- ((o71 == o71)||(o63 !== o64)));
  if(((- ((o71 != o63)&&(o71 <= o64))) === ((o71 << o71) * ((o55.o61 -= o64) - (o55.o61 += -4.93175485795449E+18))))) {
    o63 = o64;
    o55.o86.call(o55 );
    function o127 () {
      this.o61 = (o72.push())
;
    }
    var o128 = new o127();
    o60 -=(332129343 >> (- (o72.push())
));
    o128.o58=o81;
    o55.o61 = o56.o86.call(o55 );
o129 = arguments;
    o55.o61 >>=(((-- o60)) & o56.o86.call(o55 ));
    o55.o131 = (typeof(o71)  == 'string') ;
    o60 = o55.o87.call(o128 );
    o56.o87.call(o55 );
    var o132 = [''];
    o132[o46%o132.length].toString();
    o63 +=((o108.shift()) - 51);
    o55.o82 = ((-- o60) * ((~ (- -710887009)) + (~ o55.o86.call(o67 ))));
    o128.o61 =((o101[(49) & 255] + (typeof(o120)  != 'number') ), (- (~ o71)));
    o60 >>=((o55.o61 > o119)||(o128.o61 == o55.o82));
    o55.o61 &=o59.call(o67 );
    o67.o61 <<=(~ o71);
  }
  else {
    o60 = (o55.o61 -= ((o47.caller) | -232));
    o63 <<=810624396;
    o63 -=(((o47.caller) & (o108.reverse())) * (o66.call(o57 ) + (- o113)));
    o63 = (((typeof(o67.o82)  != null)  * (-240 - o60) + (o63 |= o64)) + (o118 === o114));
    o60 |=(o47.caller);
    o55.o61 |=(-- o60);
    o63 -=o55.o61;
    o55.o61 -=(o47.caller);
    o60 = (77784693 + ((- -1710585.9) + (o55.o61 + 1777722759.1)));
    o63 >>=((typeof(o114)  == 'undefined')  * ((- (~ 4294967297)) + (typeof(o114)  == 'string') ));
    this.o134 = (((o114 + o114) * ((o60++ ) + (232 * o114 + o55.o61))) | (- (~ o56.length)));
    o57.o61={15: (~ o56.length), 18: (parseInt("-0x72016C28") * (o55.o61 - (3.25814039531148E+18 - 880653562))), o61: 166, o58: ((~ 809498557), (o114 === o56.length), (o47.caller), (o56.length * (o55.o61 + o114)), (- 92), (2147483647 - o55.o61)), o134: (- (~ o56.length)), o131: ((typeof(o56.length)  == 'undefined')  + (- o55.o61)), o136: (-863285653 + (- -80)), o137: (parseInt("-0x72016C28") * (o55.o61 - (3.25814039531148E+18 - 880653562)))};
    o56.o131 = ((- (typeof(o112)  == 'number') ) - (o56.length <= o114));
    o57.o61.o58 +=o55.o86.call(this );
    o56.o131 = (~ (- 4294967295));
    o120 = (~ (- 4294967295));
    o120 = (((- -242) - (o112 * 2025680025.1 + o112)) + (o74.call(o67 , o110, o83, o57, o56) ^ (842191728 < o56.length)));
    o57.o61.o137 &=((o47.caller) - (-- o57.o61.o134));
    var o138 = [''];
    o138[o46%o138.length].toString();
  }
  o115 +=(- ((o71 != o63)&&(o71 <= o64)));
  this.o131 = ((((o112 == o112)&&(o112 === o56.length)) + (201 + 963281167)) - 5.91645921888607E+18);
  o57.o134 = ((o47.caller) - (typeof(o114)  == 'number') );
  var o139 = [''];
  var o140 = o139[o46%o139.length];
  o140.toString();
  o120 <<=(o114 === o55.o61);
  o56.o61 = (((3 ^ o56.length) * -9.01970240007522E+18 + (o47.caller)) - ((- o114) + ((o56.length > o56.length)||(o112 == o56.length))));
  o115 = ((o112 == o112)&&(o112 < o112));
  o115 ^=o81.call(o56 );
  o56.o61 = (o47.caller);
  o35.o36('a = ' + (o63|0));
  o35.o36('b = ' + (o111|0));
  o35.o36('c = ' + (o112|0));
  o35.o36('d = ' + (o60|0));
  o35.o36('e = ' + (o113|0));
  o35.o36('f = ' + (o114|0));
  o35.o36('g = ' + (o115|0));
  o35.o36('h = ' + (o116|0));
  o35.o36('i = ' + (o117|0));
  o35.o36('j = ' + (o118|0));
  o35.o36('k = ' + (o71|0));
  o35.o36('l = ' + (o119|0));
  o35.o36('m = ' + (o120|0));
  o35.o36('n = ' + (o32|0));
  o35.o36('o = ' + (o121|0));
  o35.o36('p = ' + (o64|0));
  o35.o36('q = ' + (o122|0));
  o35.o36('r = ' + (o123|0));
  o35.o36('this.prop0 = ' + (this.o61|0));
  o35.o36('obj0.prop0 = ' + (o55.o61|0));
  o35.o36('obj0.length = ' + (o55.length|0));
  o35.o36('aliasOfObj0.prop0 = ' + (o83.o61|0));
  o35.o36('aliasOfObj0.length = ' + (o83.length|0));
  o35.o36('arrObj0.prop0 = ' + (o56.o61|0));
  o35.o36('arrObj0.length = ' + (o56.length|0));
  o35.o36('aliasOfObj0.prop4 = ' + (o83.o82|0));
  o35.o36('this.prop2 = ' + (this.o134|0));
  o35.o36('this.prop3 = ' + (this.o131|0));
  o35.o36('litObj0.prop2 = ' + (o57.o134|0));
  o35.o36('arrObj0[0] = ' + (o56[0]|0));
  o35.o36('arrObj0[1] = ' + (o56[1]|0));
  o35.o36('arrObj0[2] = ' + (o56[2]|0));
  o35.o36('arrObj0[3] = ' + (o56[3]|0));
  o35.o36('arrObj0[4] = ' + (o56[4]|0));
  o35.o36('arrObj0[5] = ' + (o56[5]|0));
  o35.o36('arrObj0[6] = ' + (o56[6]|0));
  o35.o36('arrObj0[7] = ' + (o56[7]|0));
  o35.o36('arrObj0[8] = ' + (o56[8]|0));
  o35.o36('arrObj0[9] = ' + (o56[9]|0));
  o35.o36('arrObj0[10] = ' + (o56[10]|0));
  o35.o36('arrObj0[11] = ' + (o56[11]|0));
  o35.o36('arrObj0[12] = ' + (o56[12]|0));
  o35.o36('arrObj0[13] = ' + (o56[13]|0));
  o35.o36('arrObj0[14] = ' + (o56[14]|0));
  o35.o36('arrObj0[arrObj0.length-1] = ' + (o56[o56.length-1]|0));
  o35.o36('arrObj0.length = ' + (o56.length|0));
  o35.o36('ary[0] = ' + (o72[0]|0));
  o35.o36('ary[1] = ' + (o72[1]|0));
  o35.o36('ary[2] = ' + (o72[2]|0));
  o35.o36('ary[3] = ' + (o72[3]|0));
  o35.o36('ary[4] = ' + (o72[4]|0));
  o35.o36('ary[5] = ' + (o72[5]|0));
  o35.o36('ary[6] = ' + (o72[6]|0));
  o35.o36('ary[7] = ' + (o72[7]|0));
  o35.o36('ary[8] = ' + (o72[8]|0));
  o35.o36('ary[9] = ' + (o72[9]|0));
  o35.o36('ary[10] = ' + (o72[10]|0));
  o35.o36('ary[11] = ' + (o72[11]|0));
  o35.o36('ary[12] = ' + (o72[12]|0));
  o35.o36('ary[13] = ' + (o72[13]|0));
  o35.o36('ary[14] = ' + (o72[14]|0));
  o35.o36('ary[ary.length-1] = ' + (o72[o72.length-1]|0));
  o35.o36('ary.length = ' + (o72.length|0));
  for(var o117 =0;o117<o49.length;o117++){ 
  o35.o36(o49[o117]); 
  };
  o35.o36('sumOfary = ' + o72.slice(0, 23).reduce(function(o42, o43) {{ return o42 + o43; }},0));
  o35.o36('subset_of_ary = ' + o72.slice(0, 11));;
  o35.o36('sumOfIntArr0 = ' + o107.slice(0, 23).reduce(function(o42, o43) {{ return o42 + o43; }},0));
  o35.o36('subset_of_IntArr0 = ' + o107.slice(0, 11));;
  o35.o36('sumOfIntArr1 = ' + o108.slice(0, 23).reduce(function(o42, o43) {{ return o42 + o43; }},0));
  o35.o36('subset_of_IntArr1 = ' + o108.slice(0, 11));;
  o35.o36('sumOfFloatArr0 = ' + o109.slice(0, 23).reduce(function(o42, o43) {{ return o42 + o43; }},0));
  o35.o36('subset_of_FloatArr0 = ' + o109.slice(0, 11));;
  o35.o36('sumOfVarArr0 = ' + o110.slice(0, 23).reduce(function(o42, o43) {{ return o42 + o43; }},0));
  o35.o36('subset_of_VarArr0 = ' + o110.slice(0, 11));;
  o35.o36('sumOfaliasOfVarArr0 = ' + o124.slice(0, 23).reduce(function(o42, o43) {{ return o42 + o43; }},0));
  o35.o36('subset_of_aliasOfVarArr0 = ' + o124.slice(0, 11));;
};

// generate profile
o47();
// Run Simple JIT
o47();
o47();

// run JITted code
o1 = true;
o47();
