const r = require("raylib");
const m = require("./math");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "Circle Points";

    r.InitWindow(WIDTH, HEIGHT, TITLE);

    return { WIDTH, HEIGHT };
}

function update() {
    // change the state
}

function drawPoint(x, y) {
    r.DrawCircle(x, y, 5, r.WHITE);
}

function draw(world) {
    const centerX = 200;
    const centerY = 200;
    const radius = 150;

    const noOfPoints = 12;
    const spaceBetweenPoints = 360 / noOfPoints;
    // const spaceBetweenPoints = (2 * Math.PI) / noOfPoints;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleLines(centerX, centerY, radius, r.WHITE);
    for (let degree = 0; degree < 360; degree += spaceBetweenPoints) {
        const radian = m.calcRadian(degree);
        const x = m.calcXCoordinate(centerX, radius, radian);
        const y = m.calcYCoordinate(centerY, radius, radian);
        drawPoint(x, y);
    }

    // for (let radian = 0; radian < 2 * Math.PI; radian += spaceBetweenPoints) {
    //     const x = calcXCoordinate(centerX, radius, radian);
    //     const y = calcYCoordinate(centerY, radius, radian);
    //     drawPoint(x, y);
    // }

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
