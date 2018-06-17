//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Boolean(true);
o0.__defineSetter__("something", function() {});

var o1 = Boolean(true);
o1.__defineGetter__("something else", function() {});

// Above shouldn't cause AV
o2.o3('Pass');
