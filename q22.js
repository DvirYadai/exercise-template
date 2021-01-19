function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr1 = JSON.parse(input);
    let arr2 = JSON.parse(input2);
    let newArr = arr1.concat(arr2);
    newArr.sort(function(a, b){return a-b});
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === newArr[i + 1]){
            newArr.splice(i, 1);
            i--;
        }
    }
    out = newArr;
/**/
    output.innerText = out;
}