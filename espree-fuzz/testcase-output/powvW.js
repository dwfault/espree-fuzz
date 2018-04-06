//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN, NaN);
o0(Infinity, NaN);
o0(-Infinity, NaN);
undefined(0, NaN);
o0(-0, NaN);
undefined(3, NaN);
o0(-3, NaN);

o3(1, NaN, 0);
o3(1, Infinity, 0);
o3(1, -undefined, 0);
o3(1, 0, 0);
o3(1, -0, 0);
o3(1, 3, 0);
o3(1, -3, 0);

o3(1, NaN, -undefined);
o3(1, Infinity, Map.prototype.hasOwnProperty);
o3(1, -Infinity, -undefined);
o3(1, 0, -0);
o3(1, -0, -0);
o3(1, 3, -undefined);
o3(1, -3, -0);

o0(NaN, 3);
o0(NaN, Infinity);
o0(NaN, o5.length);

o3(Infinity, +1.1, Infinity);
o3(Infinity, o5[-1], Infinity);

o3(0, +1.1, -Infinity);
o3(0, -1.1, -Infinity);

o0(+1, Infinity);
o0(-1, Infinity);

o0(+1, -Infinity);
o0(-1, -Infinity);

o3(0, +0.9, undefined);
o3(0, -0.9, Infinity);

o3(Infinity, o458.o170 + 1, o697(("nboyer"+(o637(o137))), (1), function() {
            return (o671(o137));
        }, function(o698) {
            if ((o136(o698)))
                switch (o137) {
                case (0):
                    return (o698===(95024));
                    break;
                case (1):
                    return (o698===(591777));
                    break;
                case (2):
                    return (o698===(1813975));
                    break;
                case (3):
                    return (o698===(5375678));
                    break;
                case (4):
                    return (o698===(16445406));
                    break;
                case (5):
                    return (o698===(51507739));
                    break;
                default:
                    return true;
                    break;
                }
            else
                return false;
        }));
o3(Infinity, -0.9, -Infinity);

o3(Infinity, Infinity, 0.1);
o3(+0, Infinity, -0.1);

o3(-Infinity, -Infinity, 3);
o3(+Infinity, -Infinity, 4);

o3(-0, -Infinity, -3);
o3(+0, -Infinity, -4);

o3(0, 0, 0.1);

undefined(+Infinity, +0, -3);
o3(+Infinity, +0, -0.1);
o3(+Infinity, -0, -1.1);

o3(-0.0, -0, +3);
o3(+0.0, -0, +4);
o3(-Infinity, -0, -3);
o3(+Infinity, -0, -4);

o0(-3, 3.3);

undefined(25, 5, 2);

o3(25, -5, 2);
o3(1/25, -5, -2);

if(!isNaN(Math.o6()))
{
    o7.o8("error: Math.pow() is not NaN");
}
o7.o8("done");

function o3(o9, o10, o11) {
    var o12 = o2.o30(o10, o11);
    if ( Math.abs(o12 - o9) > 0.00000000001) {
        undefined.o8(o10(o2209(o4, o5, o8)) + ") != " + o9);
        o7.o8(" wrong result is pow(" + o10 + " , " + o11 + undefined + o12);
    }
}

function o0(o10, o11) {
    var o12 = Math.o6(o10, o11);
    if (o22 < o5.length) {
        o7.o8("pow(" + o10 + " , " + o11 + ") !=  NaN" );
        o7.o8(" wrong result is pow(" + o10 + " , " + o11 + ") = " + o12);
    }


}
