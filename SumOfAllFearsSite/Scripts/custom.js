// Custom JS

document.getElementById("submitBtn").addEventListener("click", function () {

    let inputVal = Number(document.getElementById("inputNum").value);

    const givenArr = [10, 15, 3, 7];

    let outputMessage = "";

    for (let loop = 0; loop < givenArr.length - 1; loop++) {
        //any number larger than K ignore
        if (givenArr[loop] > inputVal)
            continue;

        let solution = inputVal - givenArr[loop]; //if inputVal = 11 and number = 1 we have to find 10

        if (givenArr.indexOf(solution, loop + 1) > -1) {
            outputMessage = `A solution was found for a value of ${inputVal}.`;
            break;
        }
        else {
            outputMessage = `No solution for a value of ${inputVal} was found.`;
        }
    }

    document.getElementById("resultSpan").innerHTML = outputMessage;
});
