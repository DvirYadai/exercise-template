function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let newArr = [];
    while((arr.length !== 0)){
        let index = indexOfBiggest(arr);
        newArr.unshift(arr[index]);
        arr.splice(index, 1);
    }
    out = newArr;
/**/
    output.innerText = out;
}

function indexOfBiggest(arr){
    let max = arr[0];
    let index = 0;
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            index = i;
        }
    }
    return index;
}
