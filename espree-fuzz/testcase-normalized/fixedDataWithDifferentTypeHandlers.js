//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//****************Test0 creates a SimpleDictionaryTypeHandler****************
var o0 = 6;

function o1()
{
    return o0;
}

o2.o3(o1());
//JIT test() with fixedDataProp
o2.o3(o1());
o0++;
//Should bail out during this call
o2.o3(o1());


//****************Test 1 creates a PathTypeHandler****************
var o4 = {o5:1}

function o6()
{
    return o4.o5;
}

o2.o3(o6());
o2.o3(o6());
o4.o5 = 2;
//Bails out here, since a new property is added.
o2.o3(o6());

//*******************Test2: Creates a DictionaryTypeHandler****************
Object.prototype.o9 = 5;

function o10()
{
    return o9;
}

o2.o3(o10());
o2.o3(o10());
o9=2;
o2.o3(o10());



