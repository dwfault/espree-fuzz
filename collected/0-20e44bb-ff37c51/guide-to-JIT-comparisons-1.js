function main() {
    return 1 == { valueOf: () => { print("We got called."); return 4; } };
}
var a = main();