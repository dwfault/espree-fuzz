//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


try
{
    eval("function test() { function * arguments() { \"use strict\"; } }; test();");
}
catch (o1)
{
    o2.o3(o1);
}

