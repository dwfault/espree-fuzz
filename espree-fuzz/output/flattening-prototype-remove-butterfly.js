// Create an object with inline capacity 1.
let o0 = {o7:1, o2:2};

// Make it into a dictionary.
delete o0.o1;

// Get us to allocate out of line capacity.
o0.o1 = 1;
o0.o2 = 2;

// Delete the inline property.
delete o0.o1;

let o3 = Object.create(o0);

function o1() {
    return o3.toString();
}
noInline(o1);

// Flatten into an empty butterfly.
for (let o8 = 0; o8 < 10000; o8++)
    o1();
