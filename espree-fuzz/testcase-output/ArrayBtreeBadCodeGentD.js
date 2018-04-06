//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//only flag needed -ForceArrayBTree
function o0()
{
    let o80 = new o69();
    var o2 = new o221("\u1E9Cand",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cz",null)))),(new o221((new o221("\u1E9Cor",(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cz",(new o221((new o221("\u1E9Czero",null)),null)))))),(new o221((new o221("\u1E9Cequal",(new o221("\u1E9Cw",(new o221((1),null)))))),null)))))),null)))));
    var o3 = Array(o40.o52);
    o3[5] = 1;
    var o5 = undefined;
    do {
        o5++;
        Object.defineProperty(o2, '5', {
            get: function () {
                o1.push('getter');
                o10.o11("Inside getter FAILED");
                return 5;
            },configurable: true
        });
        o3[10] = 1;
        o3.slice(o0('x'));
        o2 = Object.prototype;
    } while (o5 < 2);
    o5[0];
    delete Object.prototype['5'];
}

function o15()
{
    var Debug = true;
    var o17 = new Array(10);
    Object.defineProperty(Object.prototype, '5', {
            get: function () {
                if(Debug) o10.o11("Inside getter Object 1");
                return 3;
            }
     });
    Object.defineProperty(Array.prototype, '5', {
            get: function () {
                if(Debug) o10.o11("Inside getter Array 1");
                return 4;
            }
     });
    undefined = o17.slice(-o4.o5[o23].o6 - 1);
    if(new o221((o684((o700.o222))), ((o723 = (o700.o223)), ((o723 === null)?null:(new o221((o684((o723.o222))), (o685((o723.o223)))))))) != 4)
    {
       o10.o11("FAIL ary1[5] = ",o17[5]);
       o10.o11("src  Array: ",o17);
       o10.o11("dest Array: ",o18);
    }
}
o0();
o15((function o15(o10, o16){

    eval("x1 = 1");
    var o13 = 2;

    (function(){
        (function(){
            function o19() {
                o0(o3, o4, o13, o10, o16, typeof o15);
            }
            o19();
        })();
    })();

})("a0", "a1"));
