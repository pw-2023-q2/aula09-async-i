"use strict";
const start = new Date().getSeconds();
setTimeout(function () {
    const now = new Date().getSeconds() - start;
    console.log("Function was called after " + now + "s");
}, 500);
console.log('Started blocking operation');
while (new Date().getSeconds() - start < 2) { }
console.log('Finished blocking operation');
