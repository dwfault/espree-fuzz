//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function o0(o1) {
    try {
        o2.write(o1 + "<br/>");
        o0 = function(o1) { o2.write(o1 + "<br/>"); };
    } catch (o4) {
        try {
            o5.o6("" + o1);
            o0 = function(o1) { o5.o6("" + o1); };
        } catch (o7) {
            print("" + o1);
            o0 = function(o1) { print("" + o1); };
        }
    }
}

var o9 = false;
var o10 = false;
var o11 = false;

function o12(o13) {
    var o14 = [];
    for (var o15 = 1; o15 < arguments.length; ++o15)
        o14.push(arguments[o15]);
    try {
        return o13.apply(this, o14);
    } catch (o4) {
        o0("EXCEPTION");
    }
}

o20 = "0123456789abcdef";

function o21(o1) {
    var o22 = [];
    if (o1 === null)
        o22.push("null");
    else if (o1 === undefined)
        o22.push("undefined");
    else if (o1 === true)
        o22.push("true");
    else if (o1 === false)
        o22.push("false");
    else if (typeof o1 === "number")
        o22.push(o1.toString());
    else if (typeof o1 == "string") {
        if (o1.length > 8192)
            o22.push("<long string>");
        else {
            o22.push("\"");
            var o25 = -1;
            for (var o26 = 0; o26 < o1.length; o26++) {
                var o27 = o1.charCodeAt(o26);
                if (o27 < 32 || o27 > 127 || o27 == '"'.charCodeAt(0) || o27 == '\\'.charCodeAt(0)) {
                    if (o25 >= 0)
                        o22.push(o1.substring(o25, o26));
                    o25 = -1;
                    o22.push("\\u");
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                    o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
                }
                else {
                    if (o25 < 0)
                        o25 = o26;
                }
            }
            if (o25 >= 0)
                o22.push(o1.substring(o25, o1.length));
            o22.push("\"");
        }
    }
    else if (o1 instanceof RegExp) {
        var o33 = o1.source;
        o22.push("/");
        var o25 = -1;
        for (var o26 = 0; o26 < o33.length; o26++) {
            var o27 = o33.charCodeAt(o26);
            if (o27 < 32 || o27 > 127) {
                if (o25 >= 0)
                    o22.push(o33.substring(o25, o26));
                o25 = -1;
                o22.push("\\u");
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 12) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 8) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 4) & 0xf)));
                o22.push(String.fromCharCode(o20.charCodeAt((o27 >> 0) & 0xf)));
            }
            else {
                if (o25 < 0)
                    o25 = o26;
            }
        }
        if (o25 >= 0)
            o22.push(o33.substring(o25, o33.length));
        o22.push("/");
        if (o1.global)
            o22.push("g");
        if (o1.o36)
            o22.push("i");
        if (o1.o37)
            o22.push("m");
        if (!o9 && o1.o38 !== undefined) {
            o22.push(" /*lastIndex=");
            o22.push(o1.o38);
            o22.push("*/ ");
        }
    }
    else if (o1.length !== undefined) {
        o22.push("[");
        for (var o26 = 0; o26 < o1.length; o26++) {
            if (o26 > 0)
                o22.push(",");
            o22.push(o21(o1[o26]));
        }
        o22.push("]");
        if (!o11 && (o1.input !== undefined || o1.index !== undefined))
        {
            o22.push(" /*input=");
            o22.push(o21(o1.input));
            o22.push(", index=");
            o22.push(o21(o1.index));
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            o22.push("*/ ");
        }
    }
    else if (o1.toString !== undefined) {
        o22.push("<object with toString>");
    }
    else
        o22.push(o1.toString());
    return o22.join("");
}

function o42(o43, o44, o45) {
    var o22 = [o43];
    o22.push("(");
    for (var o26 = 0; o26 < o45; o26++) {
        if (o26 > 0) o22.push(", ");
        o22.push(o21(o44[o26]));
    }
    if (o44.length > o45) {
        o22.push(", ");
        o22.push(o21(o44[o45]));
        o44[0].o38 = o44[o45];
    }
    o22.push(");");
    o0(o22.join(""));
}

function o46(o47) {
    if (!o9) {
        o0("r.lastIndex=" + o21(o47.o38));
    }
    if (!o10) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o22 = [];
        o22.push("RegExp.${_,1,...,9}=[");
        o22.push(o21(RegExp.o48));
        for (var o26 = 1; o26 <= 9; o26++) {
            o22.push(",");
            o22.push(o21(RegExp["$" + o26]));
        }
        o22.push("]");
        o0(o22.join(""));
    }
}

function exec(o47, o50) {
    o42("exec", arguments, 2);
    o0(o21(o47.exec(o50)));
    o46(o47);
}

function test(o47, o50) {
    o42("test", arguments, 2);
    o0(o21(o47.test(o50)));
    o46(o47);
}

function replace(o47, o50, o1) {
    o42("replace", arguments, 3);
    o0(o21(o50.replace(o47, o1)));
    o46(o47);
}

function split(o47, o50) {
    o42("split", arguments, 2);
    o0(o21(o50.split(o47)));
    o46(o47);
}

function match(o47, o50) {
    o42("match", arguments, 2);
    o0(o21(o50.match(o47)));
    o46(o47);
}

function search(o47, o50) {
    o42("search", arguments, 2);
    o0(o21(o50.search(o47)));
    o46(o47);
}

function o56(o47, o1) {
    o0("bogus(" + o21(o47) + ", " + o21(o1) + ");");
    try { new RegExp(o47, o1); o0("FAILED"); } catch (o57) { o0("PASSED"); }
}
// END PRELUDE

//bogus("a[]]b", "");
//bogus("a[^]b]c");
//bogus("(b.)c(?!\N)", "s");
//bogus("([a-\d]+)", "");
//bogus("a*(*FAIL)", "");
//bogus("a*(*F)", "");
//bogus("(A(A|B(*ACCEPT)|C)D)(E)", "");

exec(/(((a+a?)*)+b+)/, "aaaab");
exec(/.*a(.*aaa.*)a.*/, "aaaaa");
exec(/a/, "xxxxxxxxxxxxaxxxxxxx");
exec(/abcd/, "xxxxxxxabcdxxxxxxxxxx");

// exec(/(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))(?:(a)|(a))b/, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac");

exec(/(?:r?)*?r|(.{2,4})/, "abcde");
exec(/((\3|b)\2(a)x)+/, "aaxabxbaxbbx");
exec(/^((.)?a\2)+$/, "babadad");
exec(/^(a\1?){4}$/, "aaaaaaaaaa");
exec(/(b.)c(?!\N)/, "a\nb\nc\n");
exec(/^(a\1?){4}$/, "aaaaaa");
exec(/((\3|b)\2(a)){2,}/, "bbaababbabaaaaabbaaaabba");
exec(/^$/, "");
exec(/\n/, "\n");
exec(/(\3)(\1)(a)/, "cat");
exec(/ab(?:cd)/, "abcd");
exec(/[a]bc[d]/, "abcd");
exec(/a(?:b)(?:cd)/, "abcd");
exec(/(?:a)bc(?:d)/, "abcd");
exec(/([^a-z]+)/i, "AB12CD34");
exec(/([^A-Z]+)/, "AB12CD34");
exec(/a|ab/, "abc");
exec(/((a)|(ab))((c)|(bc))/, "xxabcyy");
exec(/a[a-z]{2,4}/, "abcdefghi");
exec(/a[a-z]{2,4}?/, "abcdefghi");
exec(/(aa|aabaac|ba|b|c)*/, "aabaac");
exec(/(z)((a+)?(b+)?(c))*/, "zaacbbbcac");
exec(/(a*)*/, "b");
exec(/(a*)b\1+/, "baaaac");
exec(/abc*de/, "xxabdeyy");
exec(/a*bcde/, "xxaaabcdeyy");
exec(/abcde*/, "xxabcdeeeyy");
exec(/(?=(a+))/, "baaabac");
exec(/(?=(a+))a*b\1/, "baaabac");
exec(/(.*?)aab/, "baaab");
exec(/(.*?)a(?!(a+)b\2c)\2(.*)/, "baaabaac");
exec(/a(.*)a/, "baaaaab");
exec(/a(.*?)a/, "baaaaab");
exec(/([^a-z]*)([a-z\u2000-\u23ff]*)/, "--AbC--");
exec(/([^a-z]*)([a-z\u2000-\u23ff]*)/i, "--AbC--");
exec(/^[\],:{}\s]*$/, "]\x0a] ] ]{]\x0a] ] ] ] ]]:] ]4]0]9]6]\x0a] ] ]}]]");
exec(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g, "[\x0a  {\x0a    \"tag\": \"titillation\",\x0a    \"popularity\": 4294967296\x0a  },\x0a  {\x0a    \"tag\": \"foamless\",\x0a    \"popularity\": 1257718401\x0a  } ]");
exec(/(^|.)(ronl|qri-ehf3.wbg)(|fgberf|zbgbef|yvirnhpgvbaf|jvxv|rkcerff|punggre).(pbz(|.nh|.pa|.ux|.zl|.ft|.oe|.zk)|pb(.hx|.xe|.am)|pn|qr|se|vg|ay|or|ng|pu|vr|va|rf|cy|cu|fr)$/i, "cntrf.ronl.pbz");


exec(/function\s*([^(]*)([^{]*\))/, 
"function Common__taskManager$_process$i() {\x0d\x0a        if (this._hasStopped) {\x0d\x0a            return;\x0d\x0a        }\x0d\x0a        if (this._isYielding) {\x0d\x0a            window.setTimeout(this._processDelegate, Common._taskManager._tickInterval);\x0d\x0a            return;\x0d\x0a        }\x0d\x0a    var timeNow = new Date();\x0d\x0a        var nextInterval = Common._taskManager._tickInterval;\x0d\x0a        var timeRemaining = Common._taskManager._tickInterval;\x0d\x0a        var drift = (timeNow.getTime() - this._lastProcessedTime.getTime()) - Common._taskManager._tickInterval;\x0d\x0a        this._lastProcessedTime = timeNow;\x0d\x0a        if (drift > (nextInterval / 2)) {\x0d\x0a            drift = 0;\x0d\x0a        }\x0d\x0a        if (drift < 0 || drift > (nextInterval / 2)) {\x0d\x0a            drift = 0;\x0d\x0a        }\x0d\x0a        var lastKeyStroke = timeNow;\x0d\x0a   if (Common._aFrameworkApplication.get__activeFrame$i()) {\x0d\x0a            lastKeyStroke = Common._aFrameworkApplication.get__activeFrame$i()._theKeyInputManager$i.get__lastKeyStroke$i();\x0d\x0a        }\x0d\x0a        if (!this._pauseRef && timeNow.getTime() - lastKeyStroke.getTime() >= Common._taskManager._tickInterval * 5) {\x0d\x0a            this._isProcessing = true;\x0d\x0a            for (this._processingQueue = 0; this._processingQueue < Common._taskItemPriority.lastPriority; this._processingQueue++) {\x0d\x0a                var maxTask = this._queues[this._processingQueue].length;\x0d\x0a                if (!maxTask) {\x0d\x0a                    continue;\x0d\x0a                }\x0d\x0a        var currentTask = this._lastProcessedTasks[this._processingQueue];\x0d\x0a                var tasksToProcess = maxTask;\x0d\x0a                do {\x0d\x0a                    currentTask = currentTask + 1;\x0d\x0a currentTask = (currentTask >= maxTask) ? 0 : currentTask;\x0d\x0a                    Common.Debug._assertTag$i(currentTask >= 0 && currentTask < maxTask, 964309305);\x0d\x0a                    var task = this._queues[this._processingQueue][currentTask];\x0d\x0a                    if (task && !task.get__isDeleted$i() && timeNow.getTime() - task.get__lastProcessed$i().getTime() > task.get__interval$i() - drift) {\x0d\x0a                        var startTime = new Date();\x0d\x0a                        if (task.get__taskType$i() !== Common._taskItemType.continuous) {\x0d\x0a       Array.removeAt(this._queues[this._processingQueue], currentTask);\x0d\x0a                            maxTask--;\x0d\x0a                            currentTask--;\x0d\x0a                        }\x0d\x0a                        task._process$i();\x0d\x0a                        var endTime = new Date();\x0d\x0a                        timeRemaining -= endTime.getTime() - startTime.getTime();\x0d\x0a                    }\x0d\x0a                    tasksToProcess--;\x0d\x0a               } while (maxTask > 0 && tasksToProcess > 0 && timeRemaining > 0);\x0d\x0a                if (this._pendingDeletes) {\x0d\x0a                    for (var iTask = 0; iTask < maxTask; iTask++) {\x0d\x0a                        var task = this._queues[this._processingQueue][iTask];\x0d\x0a                        if (task.get__isDeleted$i()) {\x0d\x0a                            Array.removeAt(this._queues[this._processingQueue], iTask);\x0d\x0a     if (iTask <= currentTask) {\x0d\x0a                                currentTask--;\x0d\x0a  }\x0d\x0a                            iTask--;\x0d\x0a                            maxTask--;\x0d\x0a     }\x0d\x0a                    }\x0d\x0a                    this._pendingDeletes = false;\x0d\x0a                }\x0d\x0a                this._lastProcessedTasks[this._processingQueue] = currentTask;\x0d\x0a                if (timeRemaining <= 0) {\x0d\x0a                    break;\x0d\x0a                }\x0d\x0a            }\x0d\x0a            this._isProcessing = false;\x0d\x0a        }\x0d\x0a        if (timeRemaining < 0 || (Common._taskManager._tickInterval - timeRemaining) < 0) {\x0d\x0a            timeRemaining = 0;\x0d\x0a        }\x0d\x0a        nextInterval = nextInterval - drift - (Common._taskManager._tickInterval - timeRemaining);\x0d\x0a        if (nextInterval < 10) {\x0d\x0a            nextInterval = 0;\x0d\x0a        }\x0d\x0a        if (nextInterval > Common._taskManager._tickInterval) {\x0d\x0a nextInterval = Common._taskManager._tickInterval;\x0d\x0a        }\x0d\x0a        if (!this._isDisposed) {\x0d\x0a       window.setTimeout(this._processDelegate, nextInterval);\x0d\x0a        }\x0d\x0a    }"
);

exec(/aababa(?:bbaaa)/, "aabababbaaa");
match(/[cgt]gggtaaa|tttaccc[acg]/ig, "GGCCGGGTAAAGTGGCTCACGCCTGTAATCCCAGCACTTTACCCCCCGAGGCGGGCGGA");

exec(/((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))/, "x");

exec(/a^|b/, "ab");
exec(/(a|ab){0,2}?x/, "abax");
exec(/(^|\s)(([^a]([^ ]+)?)|(a([^#.][^ ]+)+)):(hover|active)/, "#standardCore UL#bloc_adresse_recap LI ADDRESS, #standardCore UL#bloc_adresse_recap LI UL, #cgvPopin #printBonus#standardCore UL#bloc_adresse_recap LI ADDRESS, #standardCore UL#bloc_adresse_recap LI UL, #cgvPopin #printBonus#standardCore UL#bloc_adresse_recap LI ADDRESS, #standardCore UL#bloc_adresse_recap LI UL, #cgvPopin #printBonus#standardCore UL#bloc_adresse_recap LI ADDRESS, #standardCore UL#bloc_adresse_recap LI UL, #cgvPopin #printBonus#standardCore UL#bloc_adresse_recap LI ADDRESS, #standardCore UL#bloc_adresse_recap LI UL, #cgvPopin #printBonus");
// Can't baseline this one using v8 :-)
// exec(/(^|\s)(([^a]([^ ]+)?)|(a([^#.][^ ]+)+)):(hover|active)/, "html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, code, del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td");

exec(/(^|\s)(([^a]([^ ]+)?)|(a([^#.][^ ]+)+)):(hover|active)/, "html, body");
