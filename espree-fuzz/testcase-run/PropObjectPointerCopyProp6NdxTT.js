//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'a = 1' makes 'a' only available as an int32
// - 'b = a' makes 'b' only available as an int32
// - The use of 'b' in 'b.length' gets copy-propped with 'a', and so it needs to unspecialize 'a'
try {
(o1("overflowX"))(o259[11148 >> 2] & 4);
}catch(e){}
