/**
 * First we schedule an event to be triggered in 500ms
 * from now. But, second, we make a while loop block the 
 * UI thread for 2 seconds, preventing the scheduled event
 * to take place in the expected moment. Consequently,
 * the scheduled event is delayed for 2 seconds.
 */
const start = new Date().getSeconds()

setTimeout(function () {
    const now = new Date().getSeconds() - start

    console.log("Function was called after " + now + "s")
}, 500)

console.log('Started blocking operation')
while (new Date().getSeconds() - start < 2) {}
console.log('Finished blocking operation')