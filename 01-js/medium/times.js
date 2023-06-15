/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {

    function sum(n) {
        ans = 0
        for (let i = 1; i <= n; i++) {
            ans += i

        }
        return ans
    }
    const obj1 = new Date();
    const t1 = obj1.getSeconds()
    let res = sum(n)
    const obj2 = new Date();
    const t2 = obj2.getSeconds()

    console.log(t2, t1)



    return (t2 - t1);
}

console.log(calculateTime(1000000000))
