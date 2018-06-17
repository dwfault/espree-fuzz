//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Boolean(true);
try { "use strict"; } catch(e) {}try { try {
throw o189;
}catch(e){} } catch(e) {}

var o1 = Boolean(true);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
try { {} } catch(e) {}try { o1("SVGFilterElement"); } catch(e) {}
}catch(e){}
