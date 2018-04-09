//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
var print = function(){return this};
var o1 = function(){return this};
var o2 = {};
/*@cc_on @*/

o3=10;
function o4(){

(function(){/*sStart*/;try{try{with({}) { try{throw o5;}catch(o6){} } }catch(o6){}try{delete o7.o8;}catch(o6){}}catch(o6){};;/*sEnd*/})();
(function(){/*sStart*/;if(o0){undefined--}/*sEnd*/})();
(function(){/*sStart*/;"use strict"; /*tLoop*/for (let o9 in [null, null, new Number(1)]) { if(!o0){function o10(o11){this.o12 = "udb6fudff4";if ( "" ) for (var o13 in this) { }return this; }; o10(o3);}; };;/*sEnd*/})();

};

//Profile
o4();
o4();

//Bailout
o0 = true;
o4();

o14.o15("Success");
