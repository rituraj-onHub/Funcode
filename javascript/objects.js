// objects literals

const mySym = Symbol("helloG") //an symbol is define

const JSUser = {
    name : "Rituraj",
    email : "rituraj@google.com",
    contact : 9898989898,
    [mySym] : "kesoHo"  // without [] it was treated as an string literal so it will refere as symbol
}

//console.log(JSUser); // print enire object contains

//console.log(JSUser.email)  // print an specific contain in object

//console.log(JSUser["email"]);   // print an specific contain in object

// console.log(JSUser[mySym]);   // can only print value through this methode

//JSUser.email = "rohit@gmail.com" // change the value of the element 

//console.log(JSUser.email);

//Object.freeze(JSUser)  //prevent any modification in object

JSUser.greeting = function()
    {
        console.log("helloG");    
        // this will generate an output with undefined as the fun doesnot return any thing
        // can be solve be return "value"                          
    }

//console.log(JSUser.greeting());   //excute function 

//console.log(JSUser.greeting); // this will return the function not gone excute it

JSUser.greeting2 = function()
{
    console.log(`hello ${this.name}`); 
    //with "this" we can refer to the same object and use its property and attributes
}

//console.log(JSUser.greeting2());


