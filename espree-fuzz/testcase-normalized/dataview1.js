//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
    this.o0.o1("util.js");
}

function o2() {
    var o3 = Array(0x100); //[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var o5 = (new Uint32Array(o3)).buffer;
    var o8 = 0;
    var o9 = o5.byteLength;
    var o11 = new DataView(o5, o8, o9);
    for (var o13 = 0; o13 <= 8; o13++) {
        try {
            o0.o14('view.getUint32(-' + o13 + '): 0x' + o11.getUint32(-o13).toString(16));
        } catch (o17) {
            o0.o14(o17.o18);
        }
    }
    for (var o13 = 0; o13 <= 8; o13++) {
        try {
            o0.o14('view.setUint32(-' + o13 + '): 0x' + o11.setUint32(-o13, 10).toString(16));
        } catch (o17) {
            o0.o14(o17.o18);
        }
    }
}

function o20() {
    var o5 = new ArrayBuffer(10);

    try{
        var o22 = new DataView(o5, undefined);
    } catch (o17) {
        if (o17 instanceof o24) {
            if(o17.o18 !== "DataView constructor argument byteOffset is invalid"){
                o0.o14('FAIL');
            }
        } else {
            o0.o14('FAIL');
        }
    }

    try{
        var o25 = new DataView(o5, 1.5);
    } catch (o17) {
        if (o17 instanceof o24) {
            if (o17.o18 !== "DataView constructor argument byteOffset is invalid") {
                o0.o14('FAIL');
            }
        } else {
            o0.o14('FAIL');
        }
    }
    o0.o14('PASS');
}

function o26() {
    var o27 = new DataView(new ArrayBuffer(), 0, 0);
    var o28 = new DataView(new ArrayBuffer(1), 1, 0);
}

function o29() {
    var o5 = (new Uint32Array([0, 1, 2, 3])).buffer;
    var o22 = new DataView(o5);
    var o25 = new DataView(o5, 0);
    var o30 = new DataView(o5, 0, undefined);
    if ((o22.byteLength === o25.byteLength) && (o25.byteLength === o30.byteLength)) {
        o0.o14('PASS');
        for (var o13 = 0; o13 < 4; o13++) {
            if ((o22.getUint32(o13) === o25.getUint32(o13)) && (o25.getUint32(o13) === o30.getUint32(o13))) {
                o0.o14('PASS');
            } else {
                o0.o14('FAIL');
                o0.o14(o22.getUint32(o13));
                o0.o14(o25.getUint32(o13));
                o0.o14(o30.getUint32(o13));
            }
        }
    } else {
        o0.o14('FAIL');
        o0.o14(o22.byteLength);
        o0.o14(o25.byteLength);
        o0.o14(o30.byteLength);
    }
}

function o31() {
    o32.o33(
        function () { var o34 = new DataView(new ArrayBuffer(0x100000), 1, 0xffffffff); },
        o24,
        "DataView constructor argument byteLength is invalid");
}

o2();
o20();
o26();
o29();
o31();