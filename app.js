var x='20';
if(x==20){
    console.log("matched")
}
// if(x===20){
//     console.log("matched")
// }

// for(i=0;i<10;i++){
//     console.log(i);
// }
const arr=[1,2,3,4,5,6,7,8,9];
console.log(arr)
let result = arr.filter((item)=>{
    return item>=3
})
console.warn(result);

