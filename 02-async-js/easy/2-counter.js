var counter = 0
function count() {
    counter += 1
    console.log(counter)
    setTimeout(count, 1000)

}
setTimeout(count, 1000)



