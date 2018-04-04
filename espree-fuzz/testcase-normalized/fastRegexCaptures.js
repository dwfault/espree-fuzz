//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0(/.*(aaa.*aaa)/.exec("aaaaaa"));
o0(/.*a(.*aaa.*)a.*/.exec("aaaaa"));
o0(/.*(\.facebook\..*)/.exec("www.facebook.com"));
o0(/.*(aamber aamber aamber)/.exec("aamber aamber aamber."));
o0(/.*(this (is this is) this)/.exec("this is this is this"));
o0(/.*(this is top tier toy)/.exec("this is top tier toy"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helpers

function o0(o2)
{
    o3.o4("" + o2);
}
