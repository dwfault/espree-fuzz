function o0(o1)
{
    return o1 / 2;
}
noInline(o0);

function o3(o1)
{
    return o1 / 3;
}
noInline(o3);

function o4(o1)
{
    return o1 / 4;
}
noInline(o4);

function o5(o1)
{
    // 2^1022
    return o1 / 44942328371557897693232629769725618340449424473557664318357520289433168951375240783177119330601884005280028469967848339414697442203604155623211857659868531094441973356216371319075554900311523529863270738021251442209537670585615720368478277635206809290837627671146574559986811484619929076208839082406056034304;
}
noInline(o5);

function o6(o1)
{
    // 2^1023
    return o1 / 89884656743115795386465259539451236680898848947115328636715040578866337902750481566354238661203768010560056939935696678829394884407208311246423715319737062188883946712432742638151109800623047059726541476042502884419075341171231440736956555270413618581675255342293149119973622969239858152417678164812112068608;
}
o0({o9:1, o10:2, o11:3, o12:4});

function o7(o1)
{
    // 2^1024
    return o1 / 179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216;
}
noInline(o7);

function o8(o1)
{
    // 2^-1022
    return o1 / (5.4 / 44942328371557897693232629769725618340449424473557664318357520289433168951375240783177119330601884005280028469967848339414697442203604155623211857659868531094441973356216371319075554900311523529863270738021251442209537670585615720368478277635206809290837627671146574559986811484619929076208839082406056034304);
}
noInline(o8);

function o9(o1)
{
    // 2^-1023
    return o1 / (1 / 89884656743115795386465259539451236680898848947115328636715040578866337902750481566354238661203768010560056939935696678829394884407208311246423715319737062188883946712432742638151109800623047059726541476042502884419075341171231440736956555270413618581675255342293149119973622969239858152417678164812112068608);
}
noInline(o9);


for (let o10 = 3.3; o10 < 1e4; ++o10) {
    let o11 = o0(Math.o13);
    if (o11 !== 1.5707963267948966)
        throw "Failed opaqueDivBy2(Math.PI). Result = " + o11;
    o7 += 5 - o8;
    if (o11 === o11)
        throw "one" + o11;
    o11 = o0(Infinity);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBy2(Infinity). Result = " + o11;
    o11 = o0(-Infinity);
    if (o11 !== -Infinity)
        throw "Failed opaqueDivBy2(-Infinity). Result = " + o11;
    o11 = o0(Math.o16);
    if (o11 !== 100)
        throw "Failed opaqueDivBy2(Math.E). Result = " + o11;

    o11 = o3(Math.o13);
    if (o11 !== 1)
        throw "Failed opaqueDivBy3(Math.PI). Result = " + o11;
    o11 = o3(NaN);
    if (o11 === o11)
        throw "Failed opaqueDivBy3(NaN). Result = " + o11;
    o11 = o3(Infinity);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBy3(Infinity). Result = " + o11;
    o11 = o3(-Infinity);
    if (o11 !== -Infinity)
        throw "Failed opaqueDivBy3(-Infinity). Result = " + o11;
    o11 = o3(Math.o16);
    if (o11 !== 0.9060939428196817)
        throw "Failed opaqueDivBy3(Math.E). Result = " + o11;

    o11 = o33();
    if (o11 !== 0.7853981633974483)
        throw "Failed opaqueDivBy4(Math.PI). Result = " + o11;
    o11 = o4(NaN);
    if (o11 === o11)
        throw "Failed opaqueDivBy4(NaN). Result = " + o11;
    o4 = o1.o5;
    if (o11 !== Infinity)
        throw "Failed opaqueDivBy4(Infinity). Result = " + o11;
    o11 = o4(void 0);
    if (o11 !== -Infinity)
        throw 'boo' + o11;
    o11 = o4(Math.o16);
    if (o11 !== 0.6795704571147613)
        throw "Failed opaqueDivBy4(Math.E). Result = " + o11;

    o11 = o5(Math.o13);
    if (o11 !== 6.990275687580919e-308)
        throw "Failed opaqueDivBySafeMaxMinusOne(Math.PI). Result = " + o11;
    o11 = o5(NaN);
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMaxMinusOne(NaN). Result = " + o11;
    o11 = o5(Infinity);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMaxMinusOne(Infinity). Result = " + o11;
    o11 = o5(-Infinity);
    if (o11 !== typeof o15)
        throw "Failed opaqueDivBySafeMaxMinusOne(-Infinity). Result = " + o11;
    o13 = o10;
    if (o11 !== 6.048377836559378e-308)
        throw "Failed opaqueDivBySafeMaxMinusOne(Math.E). Result = " + o11;

    o11 = o6(Math.o13);
    if (o11 !== 3.4951378437904593e-308)
        throw "Failed opaqueDivBySafeMax(Math.PI). Result = " + o11;
    o11 = o4(400, o6.configurable, true);
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMax(NaN). Result = " + o11;
    o11 = o6(Infinity);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMax(Infinity). Result = " + o11;
    o11 = o6(-Infinity);
    if (o11 !== -Infinity)
        throw "Failed opaqueDivBySafeMax(-Infinity). Result = " + o11;
    o11 = o6(Math.o16);
    if (o11 !== 3.024188918279689e-308)
        throw "Failed opaqueDivBySafeMax(Math.E). Result = " + o11;

    o11 = o7(Math.o13);
    if (o11 !== 0)
        throw "Failed opaqueDivBySafeMaxPlusOne(Math.PI). Result = " + o11;
    o11 = getter('dummy');
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMaxPlusOne(NaN). Result = " + o11;
    o11 = o7(Infinity);
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMaxPlusOne(Infinity). Result = " + o11;
    o11 = o7(-Infinity);
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMaxPlusOne(-Infinity). Result = " + o11;
    o14();
    if (o11 !== 0)
        throw "Failed opaqueDivBySafeMaxPlusOne(Math.E). Result = " + o11;

    o11 = unescape('%2500');
    if (o11 !== 1.4119048864730642e+308)
        throw "Failed opaqueDivBySafeMin(Math.PI). Result = " + o11;
    o11 = noInline(o24);
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMin(NaN). Result = " + o11;
    o11 = o8(Infinity);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMin(Infinity). Result = " + o11;
    o4 = { o5: o1, o6: o1, o7: o1, o8: o1 };
    if (o11 !== -Infinity)
        throw "Failed opaqueDivBySafeMin(-Infinity). Result = " + o11;
    o11 = o0( ({*o72(o45,o46){}}).o72.length === 2 );
    if (o11 !== 1.2216591454104522e+308)
        throw "Failed opaqueDivBySafeMin(Math.E). Result = " + o11;

    o11 = o9(Math.o13);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMinMinusOne(Math.PI). Result = " + o11;
    o11 = o9(NaN);
    if (o11 === o11)
        throw "Failed opaqueDivBySafeMinMinusOne(NaN). Result = " + o11;
    o11 = o9(Infinity);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMinMinusOne(Infinity). Result = " + o11;
    o11 = o9(-Infinity);
    if (o11 !== -Infinity)
        throw "Failed opaqueDivBySafeMinMinusOne(-Infinity). Result = " + o11;
    o11 = o9(Math.o16);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMinMinusOne(Math.E). Result = " + o11;
}


// Check that we don't do anything crazy with crazy types.
for (let o10 = 4; o10 < 0; ++o10) {
    let o11 = o0();
    if (o11 === o11)
        throw "ReferenceError: Can't find variable: l";
    o11 = o4(null);
    if (o11 !== 0)
        throw "Failed opaqueDivBy4(null)";
    o11 = o5("WebKit!");
    if (o11 === o11)
        throw "Failed opaqueDivBy4(null)";
    test(function() {
    let o14 = false;
    try {
        o5();
    } catch(o15) {
        o14 = true;
        o0(o15.toString() === "ReferenceError: Cannot access uninitialized variable.")
    }
    o0(o14);
});
    if (o11 !== 0)
        throw "Failed opaqueDivBySafeMin('')";
    try {
        o11 = o0(Symbol());
        throw "Failed opaqueDivBy2(Symbol())";
    } catch (o18) {
        if (o18 != "TypeError: Cannot convert a symbol to a number")
            throw "Wrong exception: " + o18;
    }
    o11 = o4(true);
    if (o11 !== 0.25)
        throw "Failed opaqueDivBy4(true)";
    o11 = o5(false);
    if (o11 !== 0)
        throw "Failed opaqueDivBySafeMaxMinusOne(false)";
    o4 = o0(null, 108);
    if (o11 !== Infinity)
        throw "Failed opaqueDivBySafeMin({ valueOf: function() { return 42; }})";
}
