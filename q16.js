
function leapYear(num){
    if(num % 4 !== 0){
        return false;
    } else if(num % 100 !== 0){
        return true;
    } else if(num % 400 !== 0){
        return false;
    } else return true;
}

function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let isLeapYear = false;
    let arr = [];
    let maxYear = Math.max(Number(input), Number(input2));
    let minYear = Math.min(Number(input), Number(input2));    
    for(let i = minYear; i <= maxYear; i++){
        isLeapYear = leapYear(i);
        if(isLeapYear)
            arr.push(i);
    }
    out = arr;
/**/
    output.innerText = out;
}
    