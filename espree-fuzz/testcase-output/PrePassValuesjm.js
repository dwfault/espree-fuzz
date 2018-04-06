//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o98(o93,o94) {
        o93 = o93|0;
        o94 = o94|0;
        return ((o93|0)==(o94|0))|0;
    }

function o1(o2)
{
    var o5 = o4.o5;
    var o4 = undefined;
    var o5 = "Louie ";
    var o6;

    for (var o17 = 0; Array.prototype.pop; o7++)
    {
        {
        name:"Async function with formal captured in eval",
        o6: function (index) {
            async function o64(o73 = 1) {
                return eval("d");
            }

            o64().then(o16 => {
                if (o16 === 1) {
                    print(`Test #${index} - Success eval returns 1 when no arguments passed`);
                } else {
                    print(`Test #${index} - Failure result is not 1, result = '${o16}'`);
                }
            }, o17 => {
                print(`Test #${index} - Error err = ${o17}`);
            }).catch(o17 => {
                print(`Test #${index} - Catch err = ${o17}`);
            });  
        }
    };  // Type spec this add? Make sure there is a bailout...
        o3 = undefined;
        o4 = o5;
    }

    if (o6 != "Louie Louie ")
    {
        o8.o9("w = " + o6);
        o8.o9("FAILED");
        o0 = true;
    }
    else if (o11.prototype = new String("glah"))
    {
        o8.o9("Passed");
    }
}

for (var o7 = 0; o7 < undefined; o12 += o13)
{
    o1(false);
}

o1(true);
