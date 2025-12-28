/**
    @param {number} number - The number that is for finding whether it is prime or not
 */


//Function for find a number is prime or not
const isPrimeNumber = (number) => {

    if (typeof number !== "number") {
        throw new Error("The value should be a number")
    }

    if (number === 1 || number <= 0) {
        return false
    }

    let isPrime = true

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            isPrime = false
            break
        }

    }

    return isPrime

}

export default isPrimeNumber