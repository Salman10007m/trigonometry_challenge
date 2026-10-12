function radiansToDegrees(radians) {
    return `${((180 / Math.PI) * radians).toFixed(2)}`;
}

module.exports = {
    radiansToDegrees,
};
