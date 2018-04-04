//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
*******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
* Test with two switch statements containing empty case statements and repetition.
*/

function o0(o1)
{
    /* Empty cases*/
    switch(o1)
    {
        case 'abc':
        case 'def':
        case 'ghi':
            o2.o3('empty Cases');
            break;
        case 'stu':
            o2.o3('stu');
            break;
        default:
            o2.o3('Default cases');
            break;
    }

    /*Repeated empty cases*/
    switch(o1)
    {
        case 'abc':
        case 'abc':
        case 'abc':
            o2.o3('abc');
            break;
        case 'def':
            o2.o3('first def');
            break;
        case 'def':
            o2.o3('second def');
            break;
        default:
            o2.o3('default');
            break;
    }
}

o0('stu');
o0('stu');
o0('vxy');
o0('z');
o0('x');
o0('abc');
o0('def');
o0('ghi');
o0('jkl');
o0('mno');
o0('pqr');
o0('saf');
