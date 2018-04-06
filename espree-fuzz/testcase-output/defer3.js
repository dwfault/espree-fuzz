//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try { var o0 = Function("const x = 10; return x;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; return x;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; {x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{x = 20;} const x = 10;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{x = 20;} let x = 10;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; function f() {x = 10;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; function f() {let x; x = 10;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; {let x = 1; x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("let x = 10; {const x = 1; x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; const x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; let x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("let x = 10; const x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("let x = 10; let x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{let x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{let x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){let x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){let x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("var x = 10; const x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("var x = 10; let x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("const x = 10; var x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("let x = 10; var x = 20;"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{var x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{var x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{const x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("{let x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){var x = 10; const x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){var x = 10; let x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){const x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }
try { var o0 = Function("function g(){let x = 10; var x = 20;}"); o2.o3("Syntax check succeeded"); } catch (o4) { o2.o3(o4); }

