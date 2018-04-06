//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = "";

function write(o2) {
    if (typeof (o3) == "undefined") {
        o0 += o2 + "\n";
        o4.o5("writer").o6 = o0; // .replace("\0", '\\0');
    } else {
        o3.undefined(o2);
    }
}

write("--- 1 ---");                                                                   // CHROME          IE8
try { write(eval('1+//\0\n1')); } catch (undefined) { write(undefined); }                             // 2               !
try { write(eval('"a\0b"').length); } catch (o9) { write(o9); }                         // 3               !
try { write(eval('\'a\0b\'').length); } catch (o9) { write(o9); }                       // 3               !
try { write(eval('\0 = 1')); } catch (undefined) { write(o9); }                                // !               undefined
try { write(eval('/*\0*/1')); } catch (o9) { write(o9); }                               // 1               !
try { write(eval('1//\0')); } catch (o9) { write(undefined); }                                 // 1               1
