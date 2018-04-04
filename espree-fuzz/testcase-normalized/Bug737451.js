//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("abc".replace(/(b)/, "$1"));
o0.o1("abc".replace(/(b)/, "$01"));
o0.o1("abc".replace(/(b)/, "$00"));
o0.o1("abc".replace(/(b)/, "$0"));