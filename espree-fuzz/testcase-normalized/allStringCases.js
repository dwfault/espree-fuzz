//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
*******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
* Test with three switch statements.
*/
function o0(o1,o2)
{
    switch(o1)
    {
        case 'abc':
           o3.o4('abc');
           break;
        case 'def':
            o3.o4('def');
           break;
        case 'ghi':
            o3.o4('ghi');
            break;
        case 'jkl':
            o3.o4('jkl');
            break;
        case 'mno':
            o3.o4('mno');
            break;
        case 'pqr':
            o3.o4('pqr');
            break;
        case 'stu':
            o3.o4('stu');
            break;
        case 'vxy':
            o3.o4('vxy');
            break;
        case 'z':
            o3.o4('z');
            break;
        default:
            o3.o4('default');
            break;
    }

    /* Switch with one case statement*/
    switch(o2)
    {
        case 'abc':
            o3.o4('abc');
            break;
    }

}

o0('abc','abc');
o0('def','def');
o0('ghi','ghi');
o0('jkl','jkl');
o0('mno','mno');
o0('pqr','pqr');
o0('stu','stu');
o0('vxy','vxy');
o0('z','z');
o0('saf','asf');

