const r = require("raylib");
const axis = require("./axis");
const d = require("./draw");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const TITLE = "Waves";
    const pallet = {
        sin: r.BLACK,
        cos: r.RED,
        bg: r.GRAY,
    };

    r.InitWindow(WIDTH, HEIGHT, TITLE);

    return { WIDTH, HEIGHT, pallet };
}

function update() {
    // change the state
}

function draw(world) {
    const origin = {
        x: 50,
        y: 200,
    };

    const wave = {
        height: 100,
        length: 200,
    };

    r.BeginDrawing();
    r.ClearBackground(world.pallet["bg"]);

    d.wave(origin, world, wave, Math.cos, world.pallet["sin"]);
    d.wave(origin, world, wave, Math.sin, world.pallet["cos"]);

    axis.create(origin, world, wave);

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
