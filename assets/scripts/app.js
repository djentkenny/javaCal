const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutPut(operator, resultBeforeCalc, calcNumber) {
    const calcDesription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesription);
}

function writeToLog(
    operationIdentifier,
    preResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutPut('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}


function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutPut('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutPut('x', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutPut('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);