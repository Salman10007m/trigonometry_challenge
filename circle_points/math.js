function calcRadian(degree) {
    return degree * (Math.PI / 180);
}

function calcYCoordinate(centerY, radius, radian) {
    return centerY + radius * Math.sin(radian);
}

function calcXCoordinate(centerX, radius, radian) {
    return centerX + radius * Math.cos(radian);
}

module.exports = {
    calcRadian,
    calcXCoordinate,
    calcYCoordinate,
};
