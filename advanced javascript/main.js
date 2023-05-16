// import {msg, user1 as u1, user2, hello} from "./library.js";          //u1 humne ek nichname de diya hai

// console.log(msg);
// document.body.innerHTML=msg;
// u1();

// let n = user2("Piyush");
// document.body.innerHTML=n;

// let h = new hello();




// **************************************************************************************************




// import * as y from "./library.js";          //u1 humne ek nichname de diya hai

// console.log(y.msg);
// document.body.innerHTML=y.msg;
// y.user1();

// let n = y.user2("Piyush");
// document.body.innerHTML=n;

// let h = new y.hello();



// ****************************************************************************************************


// // import {default as d} from "./library.js";
// import d from "./library.js";
// d();




// ***************************************************************************************************
//Aggregate Modules
import {user2} from "./bridge.js";
let p=user2("Piku");
console.log(p);