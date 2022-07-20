var message:string = "hello world";

var num:number = 10;


class Greeting { 
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();

 //---- types ----

 // build-in - number, string, object, void, null, undefined
// user defined - enums, classes, interfaces, arrays and tuple.


// Type Assertion in TypeScript
var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))

// Inferred Typing
var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
// num = "12";
console.log(num);


// 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


// /Users/rajesh/projects/growth/learn-typescript/index.ts





