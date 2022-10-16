const xTouch = require("../modules/connection")
const Buttons = require("../settings/buttons")
let surface = new xTouch();

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

surface.getDevices()
surface.connect(2, 2)

async function lines(loopnb, time, reverse = false, falloff = -1) {
    var object = [...Buttons.lines];
    if (reverse)
        object.reverse();

    for (let index = 0; index < loopnb; index++) {
        for (const line of object) {
            for (const bt of line) {
                surface.output.send([Buttons.Prefix, bt, Buttons.LightStatus.ON]);
            }
            setTimeout(() => {
                for (const bt of line) {
                    surface.output.send([Buttons.Prefix, bt, Buttons.LightStatus.OFF]);
                }
            }, time + falloff);
            await delay(time)
        }

    }
}

async function columns(loopnb, time, reverse = false, falloff = -1) {
    var object = [...Buttons.columns];
    if (reverse)
        object.reverse();

    for (let index = 0; index < loopnb; index++) {
        for (const line of object) {
            for (const bt of line) {
                surface.output.send([Buttons.Prefix, bt, Buttons.LightStatus.ON]);
            }
            setTimeout(() => {
                for (const bt of line) {
                    surface.output.send([Buttons.Prefix, bt, Buttons.LightStatus.OFF]);
                }
            }, time + falloff);
            await delay(time)
        }

    }
}

async function pingponglines(nb, speed, falloff = -1) {
    for (let index = 0; index < nb; index++) {
        await lines(1, speed, true, falloff);
        await lines(1, speed, false, falloff);
    }
}

async function pingpongcolumns(nb, speed, falloff = -1) {
    for (let index = 0; index < nb; index++) {
        await columns(1, speed, false, falloff);
        await columns(1, speed, true, falloff);
    }
}
async function uprightcorner(nb, reverse, speed, falloff = -1) {
    for (let index = 0; index < nb; index++) {
        await Promise.all([
            lines(1, speed, reverse, falloff),
            columns(1, speed, reverse, falloff)
        ]);
    }
}
async function upleftcorner(nb, reverse, speed, falloff = -1) {
    for (let index = 0; index < nb; index++) {
        await Promise.all([
            lines(1, speed, reverse, falloff),
            columns(1, speed, !reverse, falloff)
        ]);
    }
}
//lines(40, 50, 60);
//lines(1, 40, false, 60);
// lines(1, 40, true, 60);
// pingponglines(10, 50, 30);
// pingpongcolumns(10, 50, 30);
async function crosses(nb, speed, falloff = -1) {
    for (let index = 0; index < nb; index++) {
        await upleftcorner(1, false, speed, falloff)
        await upleftcorner(1, true, speed, falloff)
        await uprightcorner(1, false, speed, falloff)
        await uprightcorner(1, true, speed, falloff)
    }
}

async function animation() {
    await lines(3, 30, false, 15)
    await pingpongcolumns(1, 40, 70)
    await crosses(1, 50, 30)
    await upleftcorner(2, false, 30, -1)
    await columns(1, 30, false, 500)
}
surface.clearbtn()
animation();

surface.on("btnpress", async (btn) => {
    if (btn == Buttons.Pos.SCRUB) {
        await delay(500);
        await animation();
    }
});
