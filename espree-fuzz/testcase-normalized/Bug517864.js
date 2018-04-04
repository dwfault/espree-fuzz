//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

﻿function o0() {
    return /[\uD800\uDC00\uFFFF]/.test("\uFFFF");
}

if (o0()) {
    o2.o3("Pass");
}
