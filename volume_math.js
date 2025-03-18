console.log("Volume Math Loaded.");

function volume_math() {
    convert_lToCup();
    convert_mlToTsp();
    convert_mlToTbsp();
    convert_lToGal();
}

function check() {
    alert("convert");
}

function convert_lToCup() {
    const input = document.getElementById("userInput_lToCup").value;
    const type = document.getElementById('type_lToCup').value;
    const ftToCm = type === 'lToCup';
    const dp = document.getElementById("dp_select").value;
    let measurement = " CUPS" 
    let result = "";
    if (ftToCm === true) {
    result = (input / 0.236).toFixed(dp);
    } else {
    result = (input * 0.236).toFixed(dp);
    measurement = " L";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_lToCup').innerHTML = result + measurement;
}

function convert_mlToTsp() {
    const input = document.getElementById("userInput_mlToTsp").value;
    const type = document.getElementById('type_mlToTsp').value;
    const ftToCm = type === 'mlToTsp';
    const dp = document.getElementById("dp_select").value;
    let measurement = " TSP" 
    let result = "";
    if (ftToCm === true) {
    result = (input / 	4.93).toFixed(dp);
    } else {
    result = (input * 	4.93).toFixed(dp);
    measurement = " ML";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_mlToTsp').innerHTML = result + measurement;
}

function convert_mlToTbsp() {
    const input = document.getElementById("userInput_mlToTbsp").value;
    const type = document.getElementById('type_mlToTbsp').value;
    const ftToCm = type === 'mlToTbsp';
    const dp = document.getElementById("dp_select").value;
    let measurement = " TBSP" 
    let result = "";
    if (ftToCm === true) {
    result = (input / 	14.7868).toFixed(dp);
    } else {
    result = (input * 	14.7868).toFixed(dp);
    measurement = " ML";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_mlToTbsp').innerHTML = result + measurement;
}

function convert_lToGal() {
    const input = document.getElementById("userInput_lToGal").value;
    const type = document.getElementById('type_lToGal').value;
    const ftToCm = type === 'lToGal';
    const dp = document.getElementById("dp_select").value;
    let measurement = " GAL" 
    let result = "";
    if (ftToCm === true) {
    result = (input / 	4.546).toFixed(dp);
    } else {
    result = (input * 	4.546).toFixed(dp);
    measurement = " L";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_lToGal').innerHTML = result + measurement;
}
