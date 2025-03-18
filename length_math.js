console.log("Lenght Math Loaded.");

function length_math() {
    convert_mToKm();
    convert_mToFt();
    convert_ydToM();
    convert_cmToIn();
    convert_ftToCm();
    convert_mmToIn();
}

function check() {
    alert("convert");
}

function convert_mToKm() {
    const input = document.getElementById("userInput_mToKm").value;
    const type = document.getElementById('type_mToKm').value;
    const ftToCm = type === 'mToKm';
    const dp = document.getElementById("dp_select").value;
    let measurement = " KM" 
    let result = "";
    if (ftToCm === true) {
    result = (input * 1.609344).toFixed(dp);
    } else {
    result = (input / 1.609344).toFixed(dp);
    measurement = " METERS";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_mToKm').innerHTML = result + measurement;
}


function convert_mToFt() {
    const input = document.getElementById("userInput_mToFt").value;
    const type = document.getElementById('type_mToFt').value;
    const mToFt = type === 'mToFt';
    const dp = document.getElementById("dp_select").value;
    let measurement = " FT" 
    let result = "";
    if (mToFt === true) {
    result = (input * 3.28084).toFixed(dp);
    } else {
    result = (input / 3.28084).toFixed(dp);
    measurement = " METERS";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_mToFt').innerHTML = result + measurement;
}

function convert_ydToM() {
    const input = document.getElementById("userInput_ydToM").value;
    const type = document.getElementById('type_ydToM').value;
    const ydToM = type === 'ydToM';
    const dp = document.getElementById("dp_select").value;
    let measurement = " METERS" 
    let result = "";
    if (ydToM === true) {
    result = (input * 0.9144).toFixed(dp);
    } else {
    result = (input / 0.9144).toFixed(dp);
    measurement = " YD";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_ydToM').innerHTML = result + measurement;
}

function convert_cmToIn() {
    const input = document.getElementById("userInput_cmToIn").value;
    const type = document.getElementById('type_cmToIn').value;
    const cmToIn = type === 'cmToIn';
    const dp = document.getElementById("dp_select").value;
    let measurement = " IN" 
    let result = "";
    if (cmToIn === true) {
    result = (input * 0.3937007874).toFixed(dp);
    } else {
    result = (input / 0.3937007874).toFixed(dp);
    measurement = " CM";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_cmToIn').innerHTML = result + measurement;
}

function convert_ftToCm() {
    const input = document.getElementById("userInput_ftToCm").value;
    const type = document.getElementById('type_ftToCm').value;
    const ftToCm = type === 'ftToCm';
    const dp = document.getElementById("dp_select").value;
    let measurement = " IN" 
    let result = "";
    if (ftToCm === true) {
    result = (input * 30.48).toFixed(dp);
    } else {
    result = (input / 30.48).toFixed(dp);
    measurement = " CM";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_ftToCm').innerHTML = result + measurement;
}

function convert_mmToIn() {
    const input = document.getElementById("userInput_mmToIn").value;
    const type = document.getElementById('type_mmToIn').value;
    const mmToIn = type === 'mmToIn';
    const dp = document.getElementById("dp_select").value;
    let measurement = " IN" 
    let result = "";
    if (mmToIn === true) {
    result = (input * 0.0393700787).toFixed(dp);
    } else {
    result = (input / 0.0393700787).toFixed(dp);
    measurement = " MM";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_mmToIn').innerHTML = result + measurement;
}
