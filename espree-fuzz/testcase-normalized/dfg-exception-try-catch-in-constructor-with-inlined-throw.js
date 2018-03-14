function o0() {
    return 20; 
}
noInline(o0);

function o2(o3) { 
    if (o3)
        throw new Error("blah!");
}

function o5(o3) {
    try {
        this.value = o2(o3);
    } catch(o7) {
        this.value = o7.toString();
    }

    o0(this.value, o3);
}
noInline(o5);


for (var o9 = 1; o9 < 1000; o9++) {
    let value = new o5(o9 % 3 === 0);
    if (o9 % 3 === 0 && value.value !==  "Error: blah!")
        throw new Error("bad value: " + value.value);
}
