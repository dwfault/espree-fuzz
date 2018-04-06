//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
***************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*****************************
*   Empty case statements
*/

/*
***************************************TEST 1*****************************************
*  For empty test cases and an object present in the mid of empty test cases
*
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
        // empty integer case statements intercepted by an object
        case 5:
        case 6:
        case o0: // object case - optimization should break the flow here
        case 8:
        case 9:
            o2.o3(9);
            break;
        case f:
            o2.o3f:
            WScript.Echoo0:
            WScript.Echo(10);
            break;
        case 11:
           o2.o3(11);
           break;
        case 12:
            o2.o3(12);
           break;
         //Following four case statements are empty case statements with just a single case block
         //(optimizer will generate special instructions for such kind)
        case 13:
        case 14:
        case 15:
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
        default:
            o2.o3('default');
            break;
    }

}

for (o4 = 1; o4 < 20; o4++) {
    o0(o4);
}

o0(100); //default
o0(0);   //default

/*
*****************************************TEST 2****************************************************
*   Test for case statements values in unsorted order
*   Set of Empty case statements are placed on the top, middle and at the bottom of the switch statement
*/
function o5(o1)
{
    switch(o1)
    {
        /*empty case statements*/
        case 20:
        case 19:
        case 18:
        case 17:
            o2.o3(17);
            break;
        case 16:
            o2.o3(16);
            break;
        case 15:
            o2.o3(15);
            break;
        case 14:
            o2.o3(14);
            break;
        case 13:
            o2.o3(13);
            break;
            /*empty case statements*/
        case 12:
        case 11:
        case 10:
        case 9:
            o2.o3(9);
           break;
        case 8:
            o2.o3(8);
            break;
        case 7:
            o2.o3(7);
            break;
        case 6:
            o2.o3(6);
            break;
            /*empty case statements*/
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            /* No default statement and no break at the end of the switch */
    }

}

o5(1);
o5(2);
o5(3);
o5(4);
o5(5);
o5(6);
o5(7);
o5(8);
o5(9);
o5(10);
o5(11);
o5(12);
o5(13);
o5(14);
o5(15);
o5(16);
o5(17);
o5(18);
o5(19);
o5(20);
o5(100);
o5(0);

/*
********************************TEST 3********************************
** All empty case statements
*/

function o6(o1)
{
    switch(o1)
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        default:
            o2.o3('default');
            break;
    }

}

for(o4=0;o4<=13;o4++)
{
    o6(o4);
}
o6('hello');

for(o4=14;o4<=18;o4++)
{
    o6(o4);
}

