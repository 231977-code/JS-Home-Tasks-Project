function addColors() {

    let colors = [
        document.getElementById("color1").value,
        document.getElementById("color2").value,
        document.getElementById("color3").value
    ];

    let container = document.getElementById("boxContainer");

    for (let i = 0; i < colors.length; i++) {

        if(colors[i] !== ""){

            let box = document.createElement("div");
            box.classList.add("colorBox");
            box.style.backgroundColor = colors[i];

            container.appendChild(box);
        }
    }

    document.getElementById("info").innerText =
        "Window Width: " + window.innerWidth +
        " | Height: " + window.innerHeight;
}

function clearBoxes() {
    document.getElementById("boxContainer").innerHTML = "";
}
