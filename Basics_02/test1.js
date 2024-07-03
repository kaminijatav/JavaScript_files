let arr1=[2,3,4,5,7];
let arr2=[8,9,10,11,12];
//using spread
// it will spread all the elements of the array
// let spreadArray=[...arr1,...arr2];
// console.log(spreadArray);
//using push
// console.log(arr1.push(arr2));
// console.log(arr1);

//using concat 
 let arr=arr1.concat(arr2);
console.log(arr);
//spreading array of arrays
let anotherarray=[2,3,[5,6,7],8,9,[4,5,6,7,8]];
let vari=anotherarray.flat(Infinity);
console.log(vari);
console.log(anotherarray.flat(Infinity));
//check if array or not and creating arrays
let arr3=['K,i,m,m,i'];
console.log(Array.isArray(arr3));
console.log(Array.from("Kimmi"));
//if we create an object it will return an empty array
console.log(Array.from({name:"Kimmi"}));
//create an array from variablees or arrays
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

