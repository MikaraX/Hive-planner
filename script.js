// Simple drag & drop example for cities
const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

let cities = [
    { x: 200, y: 200, name: "City 1" },
    { x: 400, y: 300, name: "City 2" }
];

let dragging = null;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cities.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "lime";
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.fillText(c.name, c.x - 25, c.y - 30);
    });
}

canvas.addEventListener("mousedown", e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    cities.forEach(c => {
        if ((mx - c.x) ** 2 + (my - c.y) ** 2 < 20 ** 2) {
            dragging = c;
        }
    });
});

canvas.addEventListener("mousemove", e => {
    if (dragging) {
        const rect = canvas.getBoundingClientRect();
        dragging.x = e.clientX - rect.left;
        dragging.y = e.clientY - rect.top;
        draw();
    }
});

canvas.addEventListener("mouseup", () => dragging = null);

draw();
