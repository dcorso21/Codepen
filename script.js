let rot = 0;
let yrot = 0;

let rotRange = [0.05, 0.55];
let rotInc = 0.01;
let rotyRange = [0.05, 2.55];
let rotyInc = 0.15;
let rotasc = true;
let rotyasc = true;

var divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].classList.add("colored");
}

tick();

function setIncrements() {
    let offset = 0.02;
    // RotY

    if (rotInc <= rotRange[0]) {
        rotasc = true;
    } else if (rotInc >= rotRange[1]) {
        rotasc = false;
    }
    rotInc = rotasc ? rotInc + offset : rotInc - offset;
    // RotY
    if (rotyInc <= rotyRange[0]) {
        rotyasc = true;
    } else if (rotyInc >= rotyRange[1]) {
        rotyasc = false;
    }
    rotyInc = rotyasc ? rotyInc + offset : rotyInc - offset;
}

function randColor() {
    let r, g, b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function tick() {
    requestAnimationFrame(tick);
    setIncrements();

    rot += rotInc;
    yrot += rotyInc;

    document.body.style.setProperty("--rot", `${rot}deg`);
    document.body.style.setProperty("--roty", `${yrot}deg`);

    if (yrot > 90) {
        yrot -= 180;
        let color = randColor()
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.border = `1px solid ${color}`;
        }
    }
}
