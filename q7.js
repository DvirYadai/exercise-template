// function run() {
//     const input = document.getElementById("input").value;
//     const output = document.getElementById("output");
//     let out = "";
// /**/
//     let arr = JSON.parse(input);
//     let newArr = [];
//     let removed = [];
//     for(let i = 0; i < arr.length; i++){
//         let tempNum = arr[i];
//         let y = i;
//         for(let j = 1; j < arr.length - 1; j++){
//             if(arr[j] > tempNum){
//                 tempNum = arr[j];
//                 y = j;
//             }
//         }
//         newArr.push(tempNum);
//         removed = arr.splice(y, 1);
//     }
//     out = newArr;

// /**/
//     output.innerText = out;
// }

// [2,4,3,6,5]