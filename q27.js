function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    const arr = eval(input);
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].hasOwnProperty(input2)){
            newArr.push(arr[i][input2]);
        }
    }
    out = newArr;
    /**/
    output.innerText = out;
}