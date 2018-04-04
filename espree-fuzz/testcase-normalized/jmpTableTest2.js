//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//To test if BailOnNoProfile is working for MultiBr Instr created for consecutive integers
function o0(o1)
{
    switch(o1)
    {
        case 14:
            o2.o3('14');
            break;
        case 15:
            o2.o3('16');
            break;
        case 1:
            o2.o3('1');
            break;
        default:
            o2.o3('default');
            break;
    }
}

o0(1);
o0(14);
