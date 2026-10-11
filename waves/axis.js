const r = require("raylib");

function create(origin, world, wave) {
    r.DrawLineEx(
        { x: origin.x, y: 0 },
        { x: origin.x, y: world.HEIGHT },
        5,
        r.WHITE,
    );
    r.DrawLineEx(
        { x: origin.x, y: origin.y },
        { x: world.WIDTH, y: origin.y },
        5,
        r.WHITE,
    );

    r.DrawText("0", origin.x - 15, origin.y - 10, 18, r.BLACK);
    r.DrawText("1", origin.x - 15, origin.y - 110, 18, r.BLACK);
    r.DrawText("-1", origin.x - 20, origin.y + 90, 18, r.BLACK);

    // r.DrawCircle(origin.x + 100, origin.y, 5, r.BLUE);
    // r.DrawCircle(origin.x + 200, origin.y + wave.height, 5, r.BLUE);
    // r.DrawCircle(origin.x + 300, origin.y, 5, r.BLUE);
    // r.DrawCircle(origin.x + 400, origin.y - 100, 5, r.BLUE);
    // r.DrawCircle(origin.x + 500, origin.y, 5, r.BLUE);

    // r.DrawCircle(origin.x, origin.y, 5, r.BLUE);
    // r.DrawCircle(origin.x + 100, origin.y - 100, 5, r.BLUE);
    // r.DrawCircle(origin.x + 200, origin.y, 5, r.BLUE);
    // r.DrawCircle(origin.x + 300, origin.y + 100, 5, r.BLUE);
    // r.DrawCircle(origin.x + 500, origin.y - 100, 5, r.BLUE);
    // r.DrawCircle(origin.x + 400, origin.y, 5, r.BLUE);
}

module.exports = {
    create,
};
