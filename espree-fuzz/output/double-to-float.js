function o0(o1, input)
{
    // All uses of "outputDouble" are converted to float.
    // Inside the loop, the Upsilon is referencing its own Phi. This should
    // not prevent the conversion.
    let o3 = input;
    while (o1) {
        if (o1 & 0x4)
            o3 = Math.fround(o3) + Math.o6;
        o1 = o1 >>> 1;
    }
    return Math.fround(o3);
}
noInline(o0);

let o8 = Math.fround(Math.o9);
let o10 = Math.fround(Math.fround(Math.o9) + Math.o6);
for (let o11 = 0; o11 < 1e6; ++o11) {
    let o12 = o0(3, Math.o9);
    if (o12 !== o8)
        throw "Failed upsilonReferencingItsPhi(3, Math.LN2) at i = " + o11 + " result = " + o12;

    let o13 = o0(7, Math.o9);
    if (o13 !== o10)
        throw "Failed upsilonReferencingItsPhi(7, Math.LN2) at i = " + o11 + " result = " + o13;
}

// Same as above, but this time it is always better to convert the outside Phi-Upsilon.
function o14(o1, input)
{
    let o3 = Math.fround(input);
    while (o1) {
        if (o1 & 0x4)
            o3 = Math.fround(o3) + Math.o6;
        o1 = o1 >>> 1;
    }
    return Math.fround(o3);
}
noInline(o14);

for (let o11 = 0; o11 < 1e6; ++o11) {
    let o12 = o14(3, Math.o9);
    if (o12 !== o8)
        throw "Failed upsilonReferencingItsPhiAllFloat(3, Math.LN2) at i = " + o11 + " result = " + o12;

    let o13 = o14(7, Math.o9);
    if (o13 !== o10)
        throw "Failed upsilonReferencingItsPhiAllFloat(7, Math.LN2) at i = " + o11 + " result = " + o13;
}

// This time, converting to float would be a mistake because one of the Phi
// is not converted.
function o15(o1, input)
{
    let o3 = input;
    while (o1) {
        if (o1 & 0x4)
            o3 = Math.fround(o3) + Math.o6;
        o1 = o1 >>> 1;
    }
    return o3;
}
noInline(o15);

let o16 = Math.o9;
let o17 = Math.fround(Math.o9) + Math.o6;
for (let o11 = 0; o11 < 1e6; ++o11) {
    let o12 = o15(3, Math.o9);
    if (o12 !== o16)
        throw "Failed upsilonReferencingItsPhiWithoutConversion(3, Math.LN2) at i = " + o11 + " result = " + o12;

    let o13 = o15(7, Math.o9);
    if (o13 !== o17)
        throw "Failed upsilonReferencingItsPhiWithoutConversion(7, Math.LN2) at i = " + o11 + " result = " + o13;
}

function o18(o19, o20, o21)
{
    let o22 = 0.5;
    if (o19 & 0x1) {
        if (o19 & 0x2) {
            if (o19 & 0x4) {
                if (o19 & 0x8) {
                    o22 = Math.fround(o20) + Math.fround(o21);
                } else {
                    o22 = 6.5;
                }
            } else {
                o22 = 4.5;
            }
        } else {
            o22 = 2.5;
        }
    } else {
        o22 = 1.5;
    }
    return Math.fround(o22);
}
noInline(o18);

let o23 = Math.fround(Math.fround(Math.o9) + Math.fround(Math.o6));
for (let o11 = 0; o11 < 1e6; ++o11) {
    let o22 = o18(0xf, Math.o9, Math.o6);
    if (o22 !== o23)
        throw "Failed conversionPropagages(0xf, Math.LN2, Math.PI)";
}


function o24(o25, o26, o20, o21)
{
    let o27;
    if (o25)
        o27 = Math.fround(o20);
    else
        o27 = Math.fround(o21);

    let o28;
    if (o26)
        o28 = o27 + 2;
    else
        o28 = o27 + 1;
    return Math.fround(o28);
}
noInline(o24);

let o29 = Math.fround(Math.fround(Math.o6) + Math.fround(1));
for (let o11 = 0; o11 < 1e6; ++o11) {
    if (o24(1, 0, Math.o6, Math.o9) !== o29)
        throw "Failed chainedUpsilonBothConvert(1, 0, Math.PI, Math.LN2)";
}

function o30(o25, o26, o20, o21)
{
    // This first phi is trivially simplified by the fround()
    // of the second if-else.
    let o27;
    if (o25)
        o27 = Math.fround(o20);
    else
        o27 = Math.fround(o21);

    // This second one cannot ever be converted because the
    // result is not rounded to float.
    let o28;
    if (o26)
        o28 = Math.fround(o27) + Math.fround(1/3);
    else
        o28 = Math.fround(o27) - Math.fround(1/3);
    return o28;
}
noInline(o30);

let o31 = Math.fround(Math.o6) - Math.fround(1/3);
for (let o11 = 0; o11 < 1e6; ++o11) {
    if (o30(1, 0, Math.o6, Math.o9) !== o31)
        throw "Failed chainedUpsilonFirstConvert(1, 0, Math.PI, Math.LN2)";
}
