//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o8 = [];
function undefined() {
}
function o472() {
    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = { o6: -o5[o9].o6 };
    return o10(o473(o4, o5, o8));

    function o473(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                if(o0 && o17 === (2 >> 1))
                    o4.o101 = 0;
                o12 += o474(o4, o5, o17);
            }
            o12 += o474(o4, o5, o13);
        }

        function o474(o4, o5, o9) {
            return (o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6);
        }
        return o12;
    }
}
var o3 = {};
var o32;
var o5 = function () {
};
var o16 = 0;
var o7 = o0.o67;
o2.o8 = o5;
o2.o9 = o6;
{ o6: 2 };
o3.o9 = undefined;
var o19 = 0;
var undefined = -this.o5[0];
var o14 = [];
var o15 = -2;
o16 = Object.create(o2);
Object.create(o3);
o4.o19 = o15 * (o10.unshift() + o3.o9.call(function() {
        var o706;
        var value;
        var o730;
        var o123;
        var o731;
        var o699;
        var o700;
        var o732;
        var o733;
        {
            (o677 = null);
            (o682 = (o676("\u1E9Cif")));
            (o688 = ((o733 = (new o221("\u1E9Cf",null))), (!(o733 instanceof o221)?o733:(new o221((o676((o733.o222))), (o674((o733.o223))))))));
            (o689 = ((o732 = (new o221("\u1E9Ct",null))), (!(o732 instanceof o221)?o732:(new o221((o676((o732.o222))), (o674((o732.o223))))))));
            (o700 = o694);
            while (!(o700 === null)) {
                {
                    (o699 = (o700.o222));
                    if (((o699 instanceof o221)&&(((o699.o222)==="\u1E9Cequal")&&((o699.o223.o222) instanceof o221))))
                        {
                            (o731 = ((o699.o223.o222).o222));
                            (value = (new o221((!(o699 instanceof o221)?o699:(new o221((o676((o699.o222))), (o674((o699.o223)))))), ((o123 = ((o699.o223.o222).o222)), (o730 = (o676(o123))), (o730[(1)])))));
                            (o706 = (o676(o731)));
                            (o706[(1)] = value);
                        }
                    else
                        (o111("ADD-LEMMA did not like term:  ", o699));
                    (o700 = (o700.o223));
                }
            }
            return true;
        }
    }));
for (var o8 = 0 of o12) {
    o22 >>>= false ? o7() : o7(+o3.o9.call(o16));
    "Unexpected exception - " + o109.name + ": ";
    undefined.length = o1((++o17, o2.o8(o9.o10(function () { Array.prototype.findIndex.call(null); }, o12, "findIndex throws TypeError if its this argument is null", "Array.prototype.findIndex: 'this' is null or undefined"))));
}

o24.o25('pass');