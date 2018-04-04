//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1(1, 2, 3);
var o2 = o3(1, 2, 3);

function o1(o4, o5, o6)
{
    var o7 = {};
    var o8 = arguments;
    
    o7.length = function() { return o8.length; };
    o7.o11 = function() { return o5; };
    o7.o12 = function() { return o8[1]; };
   
    return o7;
}

function o3(o4, o5, o6)
{
    delete arguments[1];

    var o7 = {};
    var o8 = arguments;
    
    o7.length = function() { return o8.length; };
    o7.o11 = function() { return o5; }; 
    o7.o12 = function() { return o8[1]; };
   
    return o7;
}

o13.o14(o15, 20);

function o15()
{
    o16(`xlength: ${o0.length()}`, true); //3
    o16(`xnamed: ${o0.o11()}`, true); //2
    o16(`xposition: ${o0.o12()}`, true); //2
    
    o16(`ylength: ${o2.length()}`, true); //3
    o16(`ynamed: ${o2.o11()}`, true); //2
    o16(`yposition: ${o2.o12()}`, true); //undefined
}


