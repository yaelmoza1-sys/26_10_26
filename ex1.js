// task1
function extractNumbers(arr) {
    let newArr = []

    if (!Array.isArray(arr)) {
        throw new Error("is not Arry");
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
// console.log(extractNumbers([2,5,"hi"]))

// task2
function sumNumbersSafe(arr) {
    let sum = 0

    try {
        let newArr2 = extractNumbers(arr)
        for (let i = 0; i < newArr2.length; i++) {
            let num = newArr2[i]
            sum = sum + num
        }
        return sum
    }
    
    catch(err){
        console.warn("Invalid input: Expected an array")
        return 0
    }
}
// console.log(sumNumbersSafe([2, "hi", 5, 3]))

// task3
function filterLargeSums(arrList, minTotal){
    
    let newArr3=[]
    let sum2=0
    
    for(let i=0; i<arrList.length; i++){
            
            sum2=sumNumbersSafe(arrList[i])
            
            if(sum2>=minTotal){
                newArr3.push(arrList[i])
            }
    }
    return newArr3
}

console.log(filterLargeSums([[2,4,5,7],[5,8,"hi"],[5,2]],10))

// task4
function summaryStats(arrList) {
    let filArr = (filterLargeSums(arrList, 10))
    return filArr.map(filArr => {
        const sum = sumNumbersSafe(filArr)
        const valNumbers = extractNumbers(filArr)
        let avg
        if (valNumbers.length > 0) {
            avg = sum / valNumbers.length
        } else {
            avg = 0
        }
        return {
            sum: sum,
            average: avg
        }
    })
}
// console.log(summaryStats([[1, 2, 3], [5, 5, 5], [100], "bad"]));

// task5
function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new Error("Not same type")
    }
    switch (operation) {
        case "add":
            return a + b
        case "subtract":
            return a - b
        case "multiply":
            return a * b
        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operation")
    }
}
console.log(safeCalculator(10, 5, "add"))
console.log(safeCalculator(10, 5, "divide"))
console.log(safeCalculator(10, "5", "add"))
