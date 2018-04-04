//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
*******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
*   Testing for normal execution with all integers and bailing out
*/

/*
************************************************** TEST 1******************************************************
*   Tests with all integer arguments
*/

function o0(o1)
{
    switch(o1)
    {
        case 1:
           o2.o3(1);
           break;
        case 2:
            o2.o3(2);
           break;
        case 3:
            o2.o3(3);
            break;
        case 4:
            o2.o3(4);
            break;
        case 5:
            o2.o3(5);
            break;
        case 6:
            o2.o3(6);
            break;
        case 7:
            o2.o3(7);
            break;
        case 8:
            o2.o3(8);
            break;
        case 9:
            o2.o3(9);
            break;
        case 10:
            o2.o3(10);
            break;
        case 11:
           o2.o3(11);
           break;
        case 12:
            o2.o3(12);
           break;
        case 13:
            o2.o3(13);
            break;
        case 14:
            o2.o3(14);
            break;
        case 15:
            o2.o3(15);
            break;
        case 16:
            o2.o3(16);
            break;
        case 17:
            o2.o3(17);
            break;
        case 18:
            o2.o3(18);
            break;
        case 19:
            o2.o3(19);
            break;
        case 20:
            o2.o3(20);
            break;
        default:
            o2.o3('default');
            break;
    }

}

for (o4 = 1; o4 <= 20; o4++)
{
    o0(o4);
}

o0(100);
o0(0);

//making the switch to bail out on non-integer inputs
for(o4=0;o4<35;o4++)
{
    o0(new Object);
}

/*
*********************************************TEST2**********************************
*   The first execution of the switch statement is with an object
*   The profiler data is updated during the first time itself and hence the optimization is not performed during the first time jit itself
*/

function o6(o1)
{
    switch(o1)
    {
        case 1:
           o2.o3(1);
           break;
        case 2:
            o2.o3(2);
           break;
        case 3:
            o2.o3(3);
            break;
        case 4:
            o2.o3(4);
            break;
        case 5:
            o2.o3(5);
            break;
        case 6:
            o2.o3(6);
            break;
        case 7:
            o2.o3(7);
            break;
        case 8:
            o2.o3(8);
            break;
        case 9:
            o2.o3(9);
            break;
        case 10:
            o2.o3(10);
            break;
        case 11:
           o2.o3(11);
           break;
        case 12:
            o2.o3(12);
           break;
        case 13:
            o2.o3(13);
            break;
        case 14:
            o2.o3(14);
            break;
        case 15:
            o2.o3(15);
            break;
        case 16:
            o2.o3(16);
            break;
        case 17:
            o2.o3(17);
            break;
        case 18:
            o2.o3(18);
            break;
        case 19:
            o2.o3(19);
            break;
        case 20:
            o2.o3(20);
            break;
        default:
            o2.o3('default');
            break;
    }

}

for(o4=0;o4<35;o4++)
{
    o6(new Object)
    o6(1);
    o6(-10);
    o6(9);
    o6(5);
}

