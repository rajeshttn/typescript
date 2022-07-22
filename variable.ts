// ----------- Variable ----------
var name1:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name1) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)


//var num:number = "hello"
//Compile time error
// Type 'string' is not assignable to type 'number'.


// -------- Type Assertion ----------

var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))
// Doubt here.

// Inferred Typing
var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = "12";
console.log(num);



