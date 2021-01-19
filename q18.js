function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let num = Number(input2);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            out = i;
            break;
        }
    }

/**/
    output.innerText = out;
}