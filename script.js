document.getElementById("output").innerHTML = "";
document.getElementById("expression").innerHTML = "";

// Shortcut to get elements
var el = function (element) {
    if (element.charAt(0) === "#") {
        // If passed an ID...
        return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

var buttons = el(".btn"),
    operators = ["add", "sub", "divide", "mult"],
    currentEntry = [""],
    currentOperators = [],
    currentDisplay = "",
    answer = 0,
    trans_op = {
        add: " + ",
        sub: " - ",
        mult: " * ",
        divide: " % ",
    },
    last = {
        display: "",
        answer: "",
    };

buttons.forEach((element) => {
    element.addEventListener("click", (event) => {
        let id = event.target.id;
        console.log(currentEntry)
        //clear upper left
        // if (currentOperators === []) {
            //     document.getElementById("expression").textContent = "";
            // }
        // Resume
        if (currentEntry[0].length === 0 && operators.includes(id)) {
            console.log('[\"\"]')
            currentEntry = [last.answer];
            currentDisplay = String(last.display);
        }

        if (id === "clear") {
            resetBlank();
            displayEntry(false);
        } else if (id === "eq") {
            calculate();
            resetBlank();
        } else {
            // If it is an operator
            if (operators.includes(id)) {
                currentOperators[currentEntry.length - 1] = id;
                currentEntry.push("");
                currentDisplay += trans_op[id];
                //Number
            } else {
                // append num to last element
                currentEntry[currentEntry.length - 1] =
                    currentEntry[currentEntry.length - 1] + id;
                currentDisplay += id;
            }
            displayEntry(false);
        }
    });
});

function calculate() {
    let firstNum, secondNum, fniter, sniter, result;

    // Multiplication and Division
    for (let i = 0; i < currentOperators.length; i++) {
        op = currentOperators[i];
        [firstNum, secondNum, fniter, sniter] = lookupEntries(i);
        if (op == false) {
            continue;
        } else if (op === "mult") {
            result = firstNum * secondNum;
            currentEntry[fniter] = result;
            currentEntry[sniter] = "<-";
        } else if (op === "divide") {
            result = firstNum / secondNum;
            currentEntry[fniter] = result;
            currentEntry[sniter] = "<-";
        }
    }
    // Addition and Subtraction
    for (let i = 0; i < currentOperators.length; i++) {
        op = currentOperators[i];
        [firstNum, secondNum, fniter, sniter] = lookupEntries(i);
        if (op == false) {
            continue;
        } else if (op === "add") {
            result = firstNum + secondNum;
            currentEntry[fniter] = result;
            currentEntry[sniter] = "<-";
        } else if (op === "sub") {
            result = firstNum - secondNum;
            currentEntry[fniter] = result;
            currentEntry[sniter] = "<-";
        }
        console.log(currentEntry, currentOperators);
    }
    answer = currentEntry[0];
    displayEntry(true);
}

function displayEntry(showAnswer) {
    if (showAnswer) {
        document.getElementById("output").textContent = answer;
        document.getElementById("expression").textContent =
            currentDisplay + " =";
        last.answer = answer
    } else {
        document.getElementById("output").textContent = currentDisplay;
        document.getElementById("expression").textContent = "";
    }
    last.display = currentDisplay
    
}

function scanEntries(i, asc = true) {
    let entry = currentEntry[i];
    while (entry == "<-") {
        asc ? i++ : i--;
        console.log(currentEntry);
        entry = currentEntry[i];
    }
    return [entry, i];
}

function lookupEntries(i) {
    let [fn, fni] = scanEntries(i, (asc = false)),
        [sn, sni] = scanEntries(i + 1);
    return [Number(fn), Number(sn), fni, sni];
}

function resetBlank() {
    currentEntry = [""];
    currentOperators = [];
    // last.display = currentDisplay;
    // last["answer"] = answer;
    currentDisplay = "";
    answer = 0;
    // displayEntry(false);
}
