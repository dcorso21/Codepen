let rot = 0;
let yrot = 0;
let rotRange = [0.01, 0.04]
let rotInc = 0.01
let rotAdd = rotRange[0]
let rotyRange = [.10, .15]
let rotYInc = 0.15
tick();

function tick() {
  requestAnimationFrame(tick);
  rotInc = (rotInc === rotRange[1]) ? rotInc - rotInc
  : rotInc === rotRange[0] ? rotInc += rotInc : 
  rot += rotInc;
  yrot += rotYInc;
  


  document.body.style.setProperty("--rot", `${rot}deg`);
  document.body.style.setProperty("--roty", `${yrot}deg`);
}