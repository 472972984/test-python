// require('../mt/main.js')
require('../mt/env.js')

function demo() {
    var aa = location.href;
    if (aa) {
        return "hello world";
    } else {
        return "hello";
    }
}

console.log(demo())



debugger