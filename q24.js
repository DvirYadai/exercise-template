function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    const arr = eval(input);
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== null && arr[i] !== 0 && arr[i] !== "\"\"" && arr[i] !== false && arr[i] !== undefined && !(Number.isNaN(arr[i]))){
            newArr.push(arr[i]);
        }
    }
    out = newArr;
/**/
    output.innerText = out;
}