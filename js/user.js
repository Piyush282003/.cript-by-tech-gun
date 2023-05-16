export default function(){
    console.log("default function called...")
}

export let name = "Piyush";
let age = 24;

export function code(){
    console.log("coding...")
}

function cook(){
    console.log("cooking...")
}

import {withdraw} from 'js/account.js'