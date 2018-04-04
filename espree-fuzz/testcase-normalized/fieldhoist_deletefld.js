//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(){
    var o1 = {o2:true}
    for (var o3 = 0 ; o3 < 10 ; o3++){
        delete o1.o2
    }
}
test()
