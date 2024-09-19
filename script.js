


function addition() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first + second;

    document.getElementById("output").innerHTML = " = " + String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "white";
    }

}

function subtraction() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first - second;
    document.getElementById("output").innerHTML = " = " + String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "white";
    }
}

function multiplication () {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first * second;
    document.getElementById("output").innerHTML = " = " + String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "white";
    }
}

function division() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first / second;
    document.getElementById("output").innerHTML = " = " + String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "white";
    }
}

function powerOf() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = 1;

    for (let i = 0; i < second; i++) {
        result = result * first
    }
    
    document.getElementById("output").innerHTML = " = " + String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "white";
    }
}

function clearOutput() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}