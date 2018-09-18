'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
    let string = str.split(" ");
    for (let i=0; i<string.length; i++){
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substr(1, string[i].length);
    }
    return string.join(" ");
    }
    
    //* Begin of tests
    const assert = require('assert')
    
    assert.strictEqual(jadenCase('zorro bisou'), 'Zorro Bisou');
    assert.strictEqual(jadenCase('je suis content'), 'Je Suis Content');
    assert.strictEqual(jadenCase('bite'), 'Bite');
    
    // End of tests */

