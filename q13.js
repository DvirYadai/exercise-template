let arr = [];
let i = 1;
function run() {
    const output = document.getElementById("output");
    let out = [];
    out = arr;
    output.innerText = out;
}

function add(){
    arr.push('Element ' + i + ' = ' + document.getElementById("input").value + '\n');
    i++;
}