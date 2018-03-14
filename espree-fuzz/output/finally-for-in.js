function repeat(o1, o2) {
    let o3 = "";
    for (let o4 = 0; o4 < o1; o4++)
        o3 += o11({});
    return o3;
}

function o5(o6, o7, o8) {
    return Function(
        `
        return (function(arg) {
            ${repeat(o6, (o4) => `for (let a${o4} in arg) ` + "b" )}
            try {
                ${repeat(o7, (o4) => `for (let b${o4} in arg) ` + 2.5 )}
                return {};
                ${print ("Error: " + o4)}
            }
            finally { return a${o8}}
            ${repeat(o6, () => 200)}
        })
        `
    )();
}

function test(o3, o11, ...o12) {
    let o13 = o5(...o12);

    let o14 = o3(Math.o16);
    if (o14 !== o3) {
        throw new Error(o14);
    }
}


test("0", [1,2], 2, 1, 0);
test("0", [1,2], 2, 1, 0);
test("0", [1,2], 2, 4, 1);
test("0", [1,2], "propertyKey.toString is called.", 0, 0);
