const inputText = document.forms["calculator"][0];

const calculateInput = (val) => {
    const initialNumber = ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (const num of initialNumber) {
        if (num === val) parseInt(val)
        else val;
    }

    if (val === "") inputText.value = "";

    inputText.value += val;
}

const backspace = document.getElementById("backspace");

backspace.addEventListener("click", () => {
    inputText.value = inputText.value.substring(0, inputText.value.length - 1);
})

const equate = document.getElementById("equate");

equate.addEventListener("click", () => {
    const calcAnswer = eval(inputText.value);
    inputText.value = calcAnswer;
})
