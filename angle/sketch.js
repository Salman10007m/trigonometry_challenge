const r = require("raylib");
const m = require("./math");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 800;
    const HEIGHT = 800;
    const TITLE = "Regular Polygon";

    r.InitWindow(WIDTH, HEIGHT, TITLE);

    return { WIDTH, HEIGHT };
}

function update() {
    // change the state
}

function draw(world) {
    const pointA = {
        x: 100,
        y: 300,
    };

    const pointB = {
        x: 350,
        y: 150,
    };

    const pointC = {
        x: pointB.x,
        y: pointA.y,
    };

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawLineEx(pointA, pointB, 5, r.BLUE);

    r.DrawLineEx(pointA, pointC, 5, r.WHITE);
    r.DrawLineEx(pointC, pointB, 5, r.RED);

    const dx = Math.abs(pointB.x - pointA.x);
    const dy = Math.abs(pointB.y - pointA.y);

    const radians = Math.atan2(dy, dx);
    const degree = m.radiansToDegrees(radians);

    r.DrawText(degree, pointA.x + 30, pointA.y - 20, 18, r.BLUE);

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
