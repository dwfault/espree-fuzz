//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0(){ 
    //Snippets:stfldprototype.ecs
    function o1()
    {
    }
    o1.prototype = 1;
    var o3 = new o1();
    // Make sure this literal's type isn't shared with the one with the constructor above
    // as we would have the inline slot count locked for the literal
    var o4 = {o5: 1, o6: 1, o7: 1, o8: 1, o9: 1};

};
o0(); 

o0();

o10.o11("PASS");
