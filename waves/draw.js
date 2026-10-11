const r = require("raylib");

function drawLine(pervios, next, color) {
    r.DrawLineEx(pervios, next, 5, color);
}

function calcRadian(x, origin, wave) {
    return (2 * Math.PI * (x - origin.x)) / wave.length;
}

function calcYcoordinate(origin, x, wave, operation) {
    const radian = calcRadian(x, origin, wave);
    return origin.y - wave.height * operation(radian);
}

function wave(origin, world, wave, operation, color) {
    let previousPointX = origin.x;
    let previousPointY = calcYcoordinate(origin, origin.x, wave, operation);
    const step = 1;
    for (let x = origin.x; x < world.WIDTH; x += step) {
        const currentPoint = {
            x,
            y: calcYcoordinate(origin, x, wave, operation),
        };
        drawLine({ x: previousPointX, y: previousPointY }, currentPoint, color);

        previousPointX = currentPoint.x;
        previousPointY = currentPoint.y;
    }
}

module.exports = {
    wave,
};
