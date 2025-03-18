console.log("Running...");

function toggleDarkMode() {
    const body = document.getElementById("main");

    if (body.className == "light") {
        body.className = "dark"
        console.log("DarkMode Activated")
    }
    else {
        body.className = "light"
        console.log("LightMode Activated");
    }
}

function toggle(clicked_id) {
    const length = document.getElementById("cal_length");
    const weight = document.getElementById("cal_weight");
    const volume = document.getElementById("cal_volume");

    const lengthBtn = document.getElementById("length");
    const weightBtn = document.getElementById("weight");
    const volumeBtn = document.getElementById("volume");
    console.log("ID Clicked: " + clicked_id);

    if (clicked_id === 'length') {
        length.style.display = "block";
        weight.style.display = "none";
        volume.style.display = "none";

        lengthBtn.className = "navBtn navSelected"
        weightBtn.className = "navBtn navUnselected"
        volumeBtn.className = "navBtn navUnselected"
    } else if (clicked_id === 'weight') {
        length.style.display = "none";
        weight.style.display = "block";
        volume.style.display = "none";

        lengthBtn.className = "navBtn navUnselected"
        weightBtn.className = "navBtn navSelected"
        volumeBtn.className = "navBtn navUnselected"
    } else {
        length.style.display = "none";
        weight.style.display = "none";
        volume.style.display = "block";

        lengthBtn.className = "navBtn navUnselected"
        weightBtn.className = "navBtn navUnselected"
        volumeBtn.className = "navBtn navSelected"
    }
}

function copyText(clicked_id) {
    console.log("Copied: " + clicked_id);
    var r = document.createRange();;
    r.selectNode(document.getElementById(clicked_id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    // document.getElementById("copiedContent").innerText = r;
    
    // document.getElementById("copied").style.display = 'block';
    // setTimeout(function(){
    //     document.getElementById("copied").style.display = 'none';
    // }, 2000);
}

function update_dp() {
    length_math();
    weight_math();
}
