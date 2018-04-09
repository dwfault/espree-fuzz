//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 spec says that `await` is a FutureReservedWord but only
// when Module is the goal symbol of the syntatic grammar.
// That is only when parsing a module script.
// See http://www.ecma-international.org/ecma-262/6.0/#sec-future-reserved-words
// or https://tc39.github.io/ecma262/#sec-future-reserved-words

var o0 = 0; // shouldn't cause syntax error
if (o0 !== 0) {
    print('fail');
}

function o1() {
    "use strict";
    var o0 = 1;

    if (o0 !== 1) {
        print('fail');
    }
}
o1();

var o2 = '';
try {
    o3.o4('var await = 0;', 'samethread');
} catch (o5) {
    o2 = o5.o6;
}

print(o2 === 'The use of a keyword for an identifier is invalid' ?
        'pass' : 'fail');
