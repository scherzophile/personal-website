container = document.querySelector(".particles")
lines = []
colors = ["rgba(0, 255, 72, 0.5)", "rgba(0, 98, 255, 0.5)", "rgba(162, 159, 0, 0.5)"]

for (let i=0; i<50; i++) {
    const line = document.createElement("div")
    line.style.position = "absolute";
    line.style.background = "rgba(255, 255, 255, 0.5)";
    line.style.width = Math.random()*5 + "px";
    line.style.height = Math.ceil(Math.random()*5)+20 + "px";
    line.style.left = (Math.random() * 100) + "vw"
    line.style.top = Math.random()*window.innerHeight + "px";
    line.style.borderRadius = "5px";
    line.speed = Math.random() + 0.5;
    line.style.boxShadow = "0 0 8px 2px " + colors[i%3];
    container.append(line);
    lines.push(line);
}

function loop() {
    lines.forEach(line => {
        let top = parseFloat(line.style.top);
        top += line.speed;
        if (top > window.innerHeight) {
            top = -line.offsetHeight;
            line.style.left = Math.random() * 100 + "vw";
            line.style.height = Math.ceil(Math.random()*5)+20 + "px";
            line.speed = Math.random() + 0.5
        }
        line.style.top = top + "px";
    })
    requestAnimationFrame(loop);
}

loop();
