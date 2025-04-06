function createCounter() {
    let count = 0;  // Declare a variable 'count' and initialize it to 0

    function increment() {
        count++;  // Increment the 'count' variable by 1
        console.log(count);  // Log the updated 'count' value to the console
    }

    function decrement() {
        count--;  // Decrement the 'count' variable by 1
        console.log(count);  // Log the updated 'count' value to the console
    }

    return { increment, decrement };  // Return an object with the 'increment' and 'decrement' functions
}

const counter = createCounter();  // Call 'createCounter' to create the counter object
counter.increment();  // Call 'increment' to increase the count
counter.increment();  // Call 'increment' again to increase the count
counter.decrement();  // Call 'decrement' to decrease the count