//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o48(o49, o50) {
                try {
switch (o50) {
                case 0:
                    // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                    try {
o51.length = 0;
}catch(e){}
                    try {
return o49;
}catch(e){}
                case 1:
                    // change the value of the next indexed value - the new value should end up in the return object
                    try {
o51[2] = 200;
}catch(e){}
                    try {
return o49;
}catch(e){}
                case 2:
                    // change the value of a previous indexed value - the old value should end up in the return object
                    try {
o51[0] = -100;
}catch(e){}
                    try {
return o49;
}catch(e){}
                case 3:
                    // delete the next indexed value - return object should have undefined there
                    try {
delete o51[4];
}catch(e){}
                    try {
return o49;
}catch(e){}
                }
}catch(e){}

                // otherwise
                try {
return o49;
}catch(e){}
            };

var o3 = o554.o572(o500.o594, function (o565, o573) {
            try {
if (o565) try {
return o278(o565);
}catch(e){}
}catch(e){}

            var o576 = o573.o576([o554.o561], 'readonly');
            try {
o576.o585 = function () {
                try {
o278(this.o586);
}catch(e){}
            };
}catch(e){}

            var o596 = o576.o580(o554.o561);
            var index = o596.index('timestamp');

            try {
index.o597().o584 = function (o598) {
                var o599 = o598.target.o488;

                try {
if (!o599) {
                    try {
return o278(null, {
                        type: 'remote',
                        o573: o573,
                        entries: entries
                    });
}catch(e){}
                }
}catch(e){}

                try {
entries[o599.o600] = {
                    o489: o599.key
                };
}catch(e){}

                try {
o599.o601();
}catch(e){}
            };
}catch(e){}
        });
try {
Object.o1(o3, "1", Object.prototype);
}catch(e){}

try {
o0.o4(o3);
}catch(e){}

