
const human = new Object();  // this is an singleton object 
const human2 = {}; // also an object(empty) but not an singleton

// Define objects contain outside of the object
human2.id = "123abc";
human2.name = "John Doe";
human2.age = 30;
//console.log(human2);

// Define objects inside of the object
const detail = {
    fullname: {
        first: "John",
        last: "Doe"
    }
}
//console.log(detail.fullname.first); // this is how we access nested object

// Assign objects
const myobj1 = {1:"a", 2:"b", 3:"c"};
const myobj2 = {4:"d", 5:"e", 6:"f"};

const myobj3 = Object.assign({},myobj1,myobj2)

//console.log(myobj3);


//but we will mostly used spread 
const myobj4 = {...myobj1,...myobj2}
//console.log(myobj4);

//define objects in array
myStudent = [
    {id :1, name:"Raj"},
    {id :2, name:"Vivek"},
    {id :3, name:"Rahul"}
]
//console.log(myStudent[0].name);


//define objects methods
//console.log(Object.keys(myobj1));//return an array of obj keys
//console.log(Object.values(myobj1));//return array of obj values
//console.log(Object.entries(myobj1));//return array key-value pair

//to check if an property exist in an object
console.log("1" in myobj1);
console.log(human2.hasOwnProperty("name"));

