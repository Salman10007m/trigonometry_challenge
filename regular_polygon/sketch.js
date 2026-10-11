const r = require("raylib");
const m = require("./math");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "Regular Polygon";

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
        x: 200,
        y: 200,
        radius: 150,
    };

    const noOfSides = 7;
    const angleBetweenSide = (2 * Math.PI) / noOfSides;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let radian = 0; radian < 2 * Math.PI; radian += angleBetweenSide) {
        const start = m.calcPosition(center, radian);
        const nextRadian = radian + angleBetweenSide;
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
