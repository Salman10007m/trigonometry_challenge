function calcYCoordinate(center, radian) {
    return center.y + center.radius * Math.sin(radian);
}

function calcXCoordinate(center, radian) {
    return center.x + center.radius * Math.cos(radian);
}

function calcPosition(center, radian) {
    const x = calcXCoordinate(center, radian);
    const y = calcYCoordinate(center, radian);
    return { x, y };
}

module.exports = {
    calcPosition,
};
