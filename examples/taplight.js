const hardcore = true;
const xTouch = require("../modules/connection")
const Buttons = require("../settings/buttons")
let surface = new xTouch();

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var listOfLights = {}
var timestart, timelastpoint;

surface.getDevices()
surface.connect(2, 2)

surface.on("btnpress", (btn) => {
    if (btn > 32) return;
    if (listOfLights["b" + btn]) {
        listOfLights["b" + btn] = false;
        surface.btnset(btn, Buttons.LightStatus.OFF)
    }
    else {
        listOfLights["b" + btn] = true;
        surface.btnset(btn, Buttons.LightStatus.ON)
    }
});

function lightupRandomButton() {
    var bt = random(0, 32)
    surface.btnset(bt, Buttons.LightStatus.ON)
    listOfLights["b" + bt] = true;
}

/**
 * 
 * @param {int} time 
 * @param {int} playabletime in seconds
 * @param {int} maxtime in milliseconds
 * @returns time between actions at time 
 */
function timebetweenactions(time, playabletime, maxtime) {
    var m = playabletime + 5;
    var timecalculated = ((1000 * m - 1000 * ((time / 1000) ** 2) / m) / (1000 * m)) * maxtime

    if (hardcore)
        for (let col = 0; col < 8; col++) {
            var btpercolumn = 0;
            for (let bt = 0; bt < Buttons.columns[col].length; bt++) {
                if (listOfLights["b" + Buttons.columns[col][bt]] && listOfLights["b" + Buttons.columns[col][bt]] == true)
                    btpercolumn++

            }
            if (btpercolumn >= 4) timecalculated = timecalculated * 0.75;
        }
    return timecalculated;
}


function generatelight() {
    var actDate = Date.now();
    if ((actDate - timelastpoint) > timebetweenactions((actDate - timestart), 60, 500)) {
        timelastpoint = actDate;
        lightupRandomButton();
    }
}

function gameover() {
    var line = 0
    var gameisnotover = true
    while (line < 4 && gameisnotover) {
        var bt = (line * 8);
        var gameisover = true;
        while ((bt < ((line + 1) * 8)) && gameisover) {
            gameisover = (listOfLights["b" + bt] && listOfLights["b" + bt] == true);
            bt++;
        }
        if (gameisover) {
            gameisnotover = false;
            if (line == 0) console.log("REC line is complete")
            else if (line == 1) console.log("SOLO line is complete")
            else if (line == 2) console.log("MUTE line is complete")
            else console.log("SELECT line is complete")
        }
        line++;
    }
    return !gameisnotover;
}

async function game() {
    console.log("Starting game");
    surface.clearbtn();
    var gameison = true;
    while (gameison) {
        var end = gameover()
        generatelight()
        if (end) {
            gameison = false;
            for (let index = 33; index < 101; index++) {
                surface.btnset(index, Buttons.LightStatus.ON)
            }
        }
        await delay(10)

    }
    console.log("GAME OVER");
    await delay(1000)
    console.log("Press scrub to restart a new game");

}

surface.clearbtn();
console.log("Press scrub to start a game");
surface.on("btnpress", async (btn) => {
    if (btn == Buttons.Pos.SCRUB) {
        surface.clearbtn();
        listOfLights = {}
        timestart = Date.now()
        timelastpoint = Date.now()
        await delay(500);
        await game()
    }
});