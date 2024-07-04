//  const user= {
//     username:"kami",
//     age:21,
//     welcome:function(){
//         console.log(this)
//     }
    
    
// }
// user.welcome()
// console.log(this)
//  const funcon=function(){
//     user:"kimmi",
//     console.log(this)
// }
// //arrow function using this keyword
// funcon();
//  const fun=()=> {
//     user:"kimmi",
//     console.log(this) 
// }
// fun();
// // implicit return 
// const sum=(num1,num2)=>( num1+num2);
// const add=(num1,num2)=> num1+num2;
// console.log(sum(2,3))
// console.log(add(2,3))


//Immediately invoked function
// (function chai(){
//     console.log("chai ready hai");
// })();
// (()=>{

//     console.log("chai ready hai with code");
// })();
((name)=>{


    console.log(`chai ready hai with code ${name}`);
})('kami'); 