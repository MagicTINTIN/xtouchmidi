const Buttons = {};

Buttons.Prefix = 144;

Buttons.Pos = {
    // channels buttons
    REC1: 0,
    REC2: 1,
    REC3: 2,
    REC4: 3,
    REC5: 4,
    REC6: 5,
    REC7: 6,
    REC8: 7,
    SOLO1: 8,
    SOLO2: 9,
    SOLO3: 10,
    SOLO4: 11,
    SOLO5: 12,
    SOLO6: 13,
    SOLO7: 14,
    SOLO8: 15,
    MUTE1: 16,
    MUTE2: 17,
    MUTE3: 18,
    MUTE4: 19,
    MUTE5: 20,
    MUTE6: 21,
    MUTE7: 22,
    MUTE8: 23,
    SELECT1: 24,
    SELECT2: 25,
    SELECT3: 26,
    SELECT4: 27,
    SELECT5: 28,
    SELECT6: 29,
    SELECT7: 30,
    SELECT8: 31,
    // encoder assign buttons
    TRACK: 40,
    SEND: 41,
    PAN: 42,
    PLUGIN: 43,
    EQ: 44,
    INST: 45,
    // faders navigation
    PREVFB: 46,
    NEXTFB: 47,
    PREVCH: 48,
    NEXTCH: 49,
    // view control buttons
    FLIP: 50,
    GLOBAL: 51,
    DISPLAY: 52,
    SMTPEBEATS: 53,
    // function buttons
    F1: 54,
    F2: 55,
    F3: 56,
    F4: 57,
    F5: 58,
    F6: 59,
    F7: 60,
    F8: 61,
    // software controls
    MIDITRACKS: 62,
    INPUTS: 63,
    AUDIOTRACKS: 64,
    AUDIOINST: 65,
    AUX: 66,
    BUSES: 67,
    OUTPUTS: 68,
    USER: 69,
    // modify
    SHIFT: 70,
    OPTION: 71,
    CONTROL: 72,
    ALT: 73,
    // automation
    READ: 74,
    WRITE: 75,
    TRIM: 76,
    TOUCH: 77,
    LATCH: 78,
    GROUP: 79,
    // utility
    SAVE: 80,
    UNDO: 81,
    CANCEL: 82,
    ENTER: 83,
    // transport
    MARKER: 84,
    NUDGE: 85,
    CYCLE: 86,
    DROP: 87,
    REPLACE: 88,
    CLICK: 89,
    SOLO: 90,
    // play pause options
    REWIND: 91,
    FORWARD: 92,
    STOP: 93,
    PLAY: 94,
    REC: 95,
    // directionnal arrows
    UP: 96,
    DOWN: 97,
    LEFT: 98,
    RIGHT: 99,
    ZOOM: 100,
    // other
    SCRUB: 101
};

Buttons.names = {};

for (const [name, buttonCode] of Object.entries(Buttons.Pos)) {
    Buttons.names[buttonCode] = name[0] + name.toLowerCase().substring(1);
}

Buttons.PressStatus = {
    OFF: 0,
    ON: 127
};

Buttons.LightStatus = {
    OFF: 0,
    ON: 127
};

// Checks if a code is identifying a button press
Buttons.match = function (code) {
    return Object.keys(Buttons.names).includes(code.toString());
};

module.exports = Buttons;