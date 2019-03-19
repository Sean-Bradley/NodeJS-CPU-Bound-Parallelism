const fibonacci = (n) => {
    if (n <= 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

sTime = process.hrtime()
console.log(fibonacci(48))
console.log(process.hrtime(sTime))
