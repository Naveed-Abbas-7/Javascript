// alert("See person details")
// const person = {
//     Name : "Naveed",
//     Department : "Computer Science",
//     Field : "BSSE",
//     ID    : "2023-KIU-BS4159",
//     Section : "A",

    
    
// };
// console.log( "The person's details are  ", person)
// console.log(person.Name)
// console.log(person.ID)



// javascript operators

// let a = 10;
// let b = 2;

// console.log("Addition is", a+b )
// console.log("Substraction is", a-b )
// console.log("Multiplication is", a*b )
// console.log("Squareroot is", a**b )
// console.log("Remainder is", a%b )

//                  #Calculator
// const a = parseInt( prompt("enter first operant"))
// const o = prompt("enter operator")
// const b = parseInt( prompt("enter second operant"))

// if(o == "+"){
//     console.log( a+b )
// }else if(o == "-"){
//     console.log( a-b )
// }
// else if(o == "*"){
//     console.log( a*b )
// }
// else if(o == "/"){
//     console.log( a/b )
// }

//          programme #1
// let num = 10;

// if(num %2 ==0){
//     console.log("The num is even")

// }
// else{
//     console.log("the num is odd")
// }

//          programme #2

// let user = prompt("enter number")
// for (let x = 1; x <=10 ; x++) {
// console.log(x*user)
            
//         }


//                     programe #3


// for( let i = 5; i <= 1; i-- ) {
//     console.log(i*num)
        
// }                




// let num = 6;
// let fact = 1;

// for (let i = num; i >=1; i--) 
//   {
//         fact = fact*i;
// }
// console.log(fact);


// let num = 6;
// let i = 1;
// while (i <=10) {
//    console.log(i*num);
//    i++;
// }



// let maths = {
//    add : function (a,b){
//         return a+b;
//    },
//    sub : function (a,b){
//         return a-b;
//    },
//    multlipy : function(a,b){
//         return a*b;
//    },
//    divide : function(a,b){
//         return a/b;
//    },
//    modulas : function(a,b){
//         return a%b;
//    }     
// }

// Calculator object
// const calculator = {
//         add: function (a, b) {
//           return a + b;
//         },
//         subtract: function (a, b) {
//           return a - b;
//         },
//         multiply: function (a, b) {
//           return a * b;
//         },
//         divide: function (a, b) {
//           return a/b;
//         },
//         modulas: function (a, b){
//           return a%b
//         }
//       };
      
//       Function to perform the calculation
//       function calculate(o, a,b) {
//         if(o == "+"){
//     console.log( a+b )
//     }else if(o == "-"){
//     console.log( a-b )
//     }
//      else if(o == "*"){
//     console.log( a*b )
//     }
//      else if(o == "/"){
//     console.log( a/b )
// }
      
//       }
//       const result = calculate('+ ',3 ,4 );




// const num = [1, 2, 3, 4, 5];
// console.log(num); //before splice  [1 , 2 , 3 , 4 , 5]
// console.log(num.splice(2, 2, "ali",100));
// console.log(num);
      
      
// function Person() {

// this.name="ali",
// this.age=30


  
// }

// const object=new Person;

// console.log(object.name);
// console.log(object.age);




//                         #for of loop

// const data =[
//    {
//       name : "qasid",
//       fname : "iqbal",
//       age : 19
//    },
//    {
//       name : "naveed",
//       fname : "fida ali",
//       age : 20
//    },
//    {
//       name : "hassan",
//       fname : "mohammad",
//       age : 21
//    },
//    {
//       name : "kashif",
//       fname : "ahmed",
//       age : 22
//    }
// ]
// for (const i of data) {
//    console.log(i.name,i.age)
   
// }



//                          #for in loop



// const details=[
//    {
//       name : "qasid",
//       fname : "iqbal",
//       age : 19
//    },
//    {
//       name : "naveed",
//       fname : "fida ali",
//       age : 20
//    },
//    {
//       name : "hassan",
//       fname : "mohammad",
//       age : 21
//    },
//    {
//       name : "kashif",
//       fname : "ahmed",
//       age : 22
//    }
// ]
// for (const key in details) {
//    console.log(key)
// }








//                         for each loop




// const person = [
//      {
//         id : 1,
//         name : "naveed",
//         age  : 20,

        
//      } ,  
//      {
//         id : 2,
//         name : "jamsheed",
//         age  : 20,

        
//      } ,  
//      {
//         id : 3,
//         name : "sibtain",
//         age  : 20,

        
//      }   ,
//      {
//         id : 4,
//         name : "naveed",
//         age  : 20,

        
//      }   
// ]

// person.forEach(function(item,index) {
//         console.log(item,index)
        
// })



//                 #array map method


// let arr = [1,2,3,4,5,6]
// let a = arr.map((value,index)=>{
//         console.log(value+2)
   
// })



                //# To Do list array[]



// let todolist = [];

// function addtolist(element) {
//     todolist.push(element);
//     console.log(`element"${element}" is added to list`);
    
// }
// addtolist("apple");
// addtolist("banana");
// addtolist("mango");
// addtolist("grapes");

// function removeitem(index){
//   todolist.splice(1,1)
//  console.log(`items"${index}" is removed successfully`)
//  if (index >= 0 && index < todolist.length) {
//     const removeitem = todolist.splice(2,1);
//     console.log(`item "${removeitem}" removed successfully.`);
//   } else {
//     console.log("Invalid index. No item removed.");
//   }
// }
// removeitem(1);



// let todolist = [];

// function addtolist(element) {
//     todolist.push(element);
  
// }

// addtolist(
//   {
//   id : 2,
//   name : "Naveed",
//   email : "naveed@gmail.com"
//   }
// )
// addtolist(
//   {
//     id : 3,
//     name : "Ali",
//     email : "ali@gmail.com"
//     },
// )
// console.log(todolist)

// const deletefromlist = (id) =>{
//   todolist = todolist.filter((todolist) =>{
//     return todolist.id !==id;

//   })
//   return todolist;

// }
// deletefromlist(3)
// console.log(todolist)


// const edittolist = (id, updatedlist) =>{
//   todolist = todolist.forEach(todolist => {
//     if(todolist.id == id)
    
// });
// }

// edittolist(2,{
//   name : "Naveed Abbas",
//   email :"naveedabbas@gmail.com"
// })






// let ali = [];

// function addtoali(element) {
//     ali.push(element);
  
// }

// addtoali(
//   {
//   id : 2,
//   name : "banana",
//   rate : 50
//   }
// )
// addtoali(
//   {
//     id : 3,
//     name : "orange",
//     rate : 60
// },
// )
// addtoali(
//     {
//         id : 4,
//         name : "apple",
//         rate : 70

//     }
// )
// addtoali(
//     {
//         id : 5,
//         name : "grapes",
//         rate : 80

//     }
// )
// addtoali(
//     {
//         id : 6,
//         name : "pine-apple",
//         rate : 90

//     }
// )
// addtoali(
//     {
//         id : 7,
//         name : "watermelon",
//         rate : 100

//     }
// )
// console.log(ali)

// const search =(search)=>{
//     search = ali.filter((items) =>{
//      return   items.name === search || items.rate === search || items.id ===search

        
//     }) 
//     return search;
    
// }
// console.log(search("apple"))
// console.log(search(50))
// console.log(search(5))


// const deletefromlist = (id) =>{
//   ali = ali.filter((item) =>{
//     return item.id !==id;

//   })
//   return ali;

// }

// console.log(deletefromlist(5))


// let todolist = [];

// function addtolist(element) {
//     todolist.push(element);
  
// }

// let carparking = [];

// function addcar({id,name}){
  
//         if (carparking.length < 5) {
//             carparking.push({id,name})
            
//             }
//             else{
//                 console.log("limit exceed")
//             }
            
//         }
    
// addcar(
//   {
//   id : 2,
//   name : "toyota supra",
  
//   }
// )
// addcar(
//   {
//     id : 3,
//     name : "bugatti",
//     },
// )
// addcar(
//   {
//     id : 4,
//     name : "lamborgini",
//     },
// )
// addcar(
//   {
//     id : 5,
//     name : "lemozine",
//     },
// )

// console.log(carparking)


// let arr = ["naveed","hasan","qasid","sibtain","mazahir","faizan","amir","junaid","naeem","ali"]

// function randomname(){
//    randomindex = Math.floor( Math.random()*arr.length);
//   return arr[randomindex]

// }

// console.log(randomname());
// console.log(randomname());
// console.log(randomname());
// console.log(randomname());
// console.log(randomname());
// console.log(randomname());
// console.log(randomname());
// console.log(randomname());




// function dice(){
//   let randomnum = Math.floor( Math.random()*6)+1;
//  return randomnum

// }

// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());
// console.log(dice());


// fetch().then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err)
// })



// let a = "hello";

// function greet() {
//     let b = "World"
//     console.log(a + b);
// }
// greet();
// console.log(a + b);




// const add = (a,b)=>{
//     return a + b

// }
// console.log(add(5,10));
// const multiply=(a,b)=>{
// return a*b
// }
// console.log(multiply(3,8))


// const subtract = (a,b) =>{
// return Math.abs(a-b)
// }
// console.log(subtract(2,6))

// let isEven = (a)=>{
//  return a%2==0;
// }
// console.log(isEven(29));


// let rounde= (a)=>{
// return Math.round(a)
// }
// console.log(rounde(2.1))


// let divide =(a,b)=>{
//   return Math.round(a/b)
// }
// console.log(divide(7,20))

// let square = (a)=>{
//     return a*a;
// }
// console.log(square(2))

// let fact = ()=>{
    
// }


let box = []

function addtobox(elements){
  box.push(elements);
  // console.log(box)
}

addtobox({
  id : 2,
  name : "grapes",
  rate : 60
})
addtobox({
  id : 3,
  name : "banana",
  rate : 70
})
addtobox({
  id : 4,
  name : "mango",
  rate : 80
})

// let deletefromlist = (id)=>{
//   box = box.filter((items)=>{
//     return items.id !==id
//   })
//   console.log(box)
// }
// deletefromlist(3)


let searchfromlist = (search)=>{
  box = box.filter((items)=>{
    return items.name===search || items.id === search
  })
  return box
}
console.log( searchfromlist(4))
