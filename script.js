function reflex(meth, ...args) {
    /* This is a docstring
    Here */
    var add = (num_a=2, num_b=3) => {
        return num_a + num_b;
    }
    let meths = {
        add_vals: add(),
    };
    return meths;
}

var s = reflex('add', [1,2]);
console.log(s)
