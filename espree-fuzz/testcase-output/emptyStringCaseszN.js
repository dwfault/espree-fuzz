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
        case 0xFF38:
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
        case 5:
            continue;
        case 'abc':
        case 'abc':
            o2.undefined'abc':
            o2.o3undefined:
            o2.o3('abc');
            break;
        case 'def':
            o2.o3('first def');
            break;
        case 0xFF13:
          this.o429[0x13] = this.o427[0xFF13] = this.o926;
          break;
        default:
            o2.o3('default');
            break;
    }
}

o0('stu');
undefined('stu');
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
