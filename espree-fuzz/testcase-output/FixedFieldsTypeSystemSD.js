//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

eval("async function method() { var await = 1; }");

var o2 = function(o3) {
    o0.o1(o3.o4());
}

var o5 = function(o6) {
    this.o7 = 0;
    this.o8 = 1;
    this.o9 = 2;
    this.o10 = 3;
    this.o11 = 4;
    this.o12 = 5;
    this.o13 = 6;
    this.o14 = 7;
    this.o15 = 8;
    this.o16 = 9;
    this.o17 = 10;
    this.o18 = 11;
    this.o19 = 12;
    this.o20 = 13;
    this.o21 = 14;
    this.o22 = 15;
    this.o23 = 16;
    this.o24 = 17;
    this.o25 = 18;
    this.o26 = 19;
    this.o27 = 20;
    this.o28 = 21;
    this.o29 = 22;
    this.o30 = 23;
    this.o31 = 24;
    this.o32 = 25;
    this.o33 = 26;
    this.o34 = 27;
    this.o35 = 28;
    this.o36 = 29;
    this.o37 = 30;
    this.o38 = 31;
    this.o39 = 32;
    this.o40 = 33;
    this.o41 = 34;
    this.o42 = 35;
    this.o43 = 36;
    this.o44 = 37;
    this.o45 = 38;
    this.o46 = 39;
    this.o47 = 40;
    this.o48 = 41;
    this.o49 = 42;
    this.o50 = 43;
    this.o51 = 44;
    this.o52 = 45;
    this.o53 = 46;
    this.o54 = 47;
    this.o55 = 48;
    this.o56 = 49;
    this.o57 = 50;
    this.o58 = 51;
    this.o59 = 52;
    this.o60 = 53;
    this.o61 = 54;
    this.o62 = 55;
    this.o63 = 56;
    this.o64 = 57;
    this.o65 = 58;
    this.o66 = 59;
    this.o67 = 60;
    this.o68 = 61;
    this.o69 = 62;
    this.o70 = 63;
    this.o71 = 64;
    this.o72 = 65;
    this.o73 = 66;
    this.o74 = 67;
    this.o75 = 68;
    this.o76 = 69;
    this.o77 = 70;
    this.o78 = 71;
    this.o79 = 72;
    this.o80 = 73;
    this.o81 = 74;
    this.o82 = 75;
    this.o83 = 76;
    this.o84 = 77;
    this.o85 = 78;
    this.o86 = 79;
    this.o87 = 80;
    this.o88 = 81;
    this.o89 = 82;
    this.o90 = 83;
    this.o91 = 84;
    this.o92 = 85;
    this.o93 = 86;
    this.o94 = 87;
    this.o95 = 88;
    this.o96 = 89;
    this.o97 = 90;
    this.o98 = 91;
    this.o99 = 92;
    this.o100 = 93;
    this.o101 = 94;
    this.o102 = 95;
    this.o103 = 96;
    this.o104 = 97;
    this.o105 = 98;
    this.o106 = 99;
    this.o107 = 100;
    this.o108 = 101;
    this.o109 = 102;
    this.o110 = 103;
    this.o111 = 104;
    this.o112 = 105;
    this.o113 = 106;
    this.o114 = 107;
    this.o115 = 108;
    this.o116 = 109;
    this.o117 = 110;
    this.o118 = 111;
    this.o119 = 112;
    this.o120 = 113;
    this.o121 = 114;
    this.o122 = 115;
    this.o123 = 116;
    this.o124 = 117;
    this.o125 = 118;
    this.o126 = 119;
    this.o127 = 120;
    this.o128 = 121;
    this.o129 = 122;
    this.o130 = 123;
    this.o131 = 124;
    this.o132 = 125;
    this.o133 = 126;
    this.o134 = 127;
    // Adding this property should switch the object to SimpleDictionaryTypeHandler
    this.o135 = 128;
    this.o4 = o6;
}

function o136() {
    // Let's create the first (singleton) instance of LargeObject...
    var o137 = new o5(function() { return "function on the first object"; });
    o2(o137);
    // Let's JIT the function now...
    o2(o137);

    // Now let's create the second one, which should first clear the singleton instance (if any), 
    // by which we should stop reporting any existing fixed fields as such.  Then each remaining
    // fixed field (if any) should get cleared and invalidated as individual properties are added 
    // in constructor.
    var o138 = new o5(function() { return "function on the second object"; });

    // Now let's make sure we still call the right functions...
    o2(o137);
    o2(o138);
}

o136();

o0.o1();