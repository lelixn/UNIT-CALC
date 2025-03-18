console.log("Weight Math Loaded.");

function weight_math() {
    convert_tnToItn();
    convert_kgToLb();
    convert_lbToOz();
    convert_gToOz();
}

function check() {
    alert("convert");
}

function convert_tnToItn() {
    const input = document.getElementById("userInput_tnToItn").value;
    const type = document.getElementById('type_tnToItn').value;
    const ftToCm = type === 'tnToItn';
    const dp = document.getElementById("dp_select").value;
    let measurement = " IMPERIAL TONS" 
    let result = "";
    if (ftToCm === true) {
    result = (input * 1.609344).toFixed(dp);
    } else {
    result = (input / 1.609344).toFixed(dp);
    measurement = " TONNES";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_tnToItn').innerHTML = result + measurement;
}

function convert_kgToLb() {
    const input = document.getElementById("userInput_kgToLb").value;
    const type = document.getElementById('type_kgToLb').value;
    const ftToCm = type === 'kgToLb';
    const dp = document.getElementById("dp_select").value;
    let measurement = " LB" 
    let result = "";
    if (ftToCm === true) {
    result = (input * 1.609344).toFixed(dp);
    } else {
    result = (input / 1.609344).toFixed(dp);
    measurement = " KG";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_kgToLb').innerHTML = result + measurement;
}

function convert_lbToOz() {
    const input = document.getElementById("userInput_lbToOz").value;
    const type = document.getElementById('type_lbToOz').value;
    const ftToCm = type === 'lbToOz';
    const dp = document.getElementById("dp_select").value;
    let measurement = " OZ" 
    let result = "";
    if (ftToCm === true) {
    result = (input * 16).toFixed(dp);
    } else {
    result = (input / 16).toFixed(dp);
    measurement = " LB";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_lbToOz').innerHTML = result + measurement;
}

function convert_gToOz() {
    const input = document.getElementById("userInput_gToOz").value;
    const type = document.getElementById('type_gToOz').value;
    const ftToCm = type === 'gToOz';
    const dp = document.getElementById("dp_select").value;
    let measurement = " OZ" 
    let result = "";
    if (ftToCm === true) {
    result = (input * 16).toFixed(dp);
    } else {
    result = (input / 16).toFixed(dp);
    measurement = " G";
    }

    if (input === "") {
        result = "---";
        measurement = "";
    }

    document.getElementById('result_gToOz').innerHTML = result + measurement;
}
