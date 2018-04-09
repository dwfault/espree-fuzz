//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = "";

function write(o1) {
    if (typeof (o2) == "undefined") {
        o0 += o1 + "\n";
        o3.o4("writer").o5 = o0; // .replace("\0", '\\0');
    } else {
        o2.o6(o1);
    }
}

write("--- 1 ---");                                                                   // CHROME          IE8
try { write(eval('1+//\0\n1')); } catch (o7) { write(o7); }                             // 2               !
try { write(eval('"a\0b"').length); } catch (o7) { write(o7); }                         // 3               !
try { write(eval('\'a\0b\'').length); } catch (o7) { write(o7); }                       // 3               !
o168.prototype.o46 = function(o169) {
    return new o168(this.o103 * o169,
                        this.o104 * o169,
                        this.o105 * o169);
};                                // !               undefined
try { write(eval('/*\0*/1')); } catch (o7) { write(o7); }                               // 1               !
try { write(eval('1//\0')); } catch (o7) { write(o7); }                                 // 1               1
