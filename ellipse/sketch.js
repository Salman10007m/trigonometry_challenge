const r = require("raylib");
const m = require("./math");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 800;
    const HEIGHT = 800;
    const TITLE = "Ellipse";

    r.InitWindow(WIDTH, HEIGHT, TITLE);

    return { WIDTH, HEIGHT };
}

function update() {
    // change the state
}

function drawLine(start, end) {
    r.DrawLine(start.x, start.y, end.x, end.y, r.WHITE);
}

function draw(world) {
    const center = {
        x: 300,
        y: 200,
        hRadius: 200,
        vRadius: 100,
    };

    const segmentAngle = 0.1;
    const noOfSegments = (2 * Math.PI) / segmentAngle;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (i = 0; i < noOfSegments; i++) {
        const radian = i * segmentAngle;
        const nextRadian = (i + 1) * segmentAngle;

        const start = m.calcPosition(center, radian);
        const end = m.calcPosition(center, nextRadian);

        drawLine(start, end);
    }
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
