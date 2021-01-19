function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let arrDuplicate = [];
    let count = 0;
    let num;
    for(let i = 0; i < arr.length; i++){
        count = 0;
        num = arr[i];
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > 1){
            let isBoo = false;
            for(let z = 0; z <arrDuplicate.length; z++){
                if(num === arrDuplicate[z]){
                    isBoo = true;
                }
            }
            if(!isBoo)
                arrDuplicate.push(arr[i]);
        }
    }
    out = arrDuplicate;
/**/
    output.innerText = out;
}