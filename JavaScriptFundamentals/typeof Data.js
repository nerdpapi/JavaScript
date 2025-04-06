function main() {
    var input = readLine();
    if (!isNaN(input) && input.trim() !== "") {
        input = Number(input);
    }
    else if (input === "true") {
        input = Boolean(input);
    } else if (input === "false") {
        input = Boolean(input);
    }
    console.log(dataDetective(input));
}

function dataDetective(input) {
    return typeof input
}