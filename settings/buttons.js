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

Buttons.red = [
    //REC
    0, 1, 2, 3, 4, 5, 6, 7,
    //MUTE
    16, 17, 18, 19, 20, 21, 22, 23,
    // write and save
    75, 80,
    // drop and replace
    87, 88,
    // main rec and scrub
    95, 101
]

Buttons.blue = [
    // zoom
    100
]

Buttons.green = [
    // select
    24, 25, 26, 27, 28, 29, 30, 31,
    // read group undo
    74, 79, 81,
    // marker nudge cycle clic and play
    84, 85, 86, 89
]

Buttons.yellow = [
    // solo
    8, 9, 10, 11, 12, 13, 14, 15,
    // encoder assign
    40, 41, 42, 43, 44, 45,
    // fb and channels
    46, 47, 48, 49,
    // nav
    50, 51,
    // function
    54, 55, 56, 57, 58, 59, 60, 61,
    // tracks control
    62, 63, 64, 65, 66, 67, 68, 69,
    // modify, automation, utility
    70, 71, 72, 73, 76, 77, 78, 82, 83,
    // transport and pause
    90, 91, 92, 93,
    // move
    96, 97, 98, 99
]

Buttons.columns = [
    // channels
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [4, 12, 20, 28],
    [5, 13, 21, 29],
    [6, 14, 22, 30],
    [7, 15, 23, 31],
    // main
    [40, 50, 51],
    // f1 column
    [42, 62, 54, 70, 72, 84, 91, 46, 48, 98],
    // f2 column
    [44, 63, 55, 71, 73, 85, 92, 47, 49, 96, 100, 97],
    // f3 column
    [41, 64, 56, 74, 77, 86, 99],
    // f4 column
    [43, 65, 57, 75, 78, 87, 93],
    // f5 column
    [45, 66, 58],
    // f6 column
    [67, 59, 76, 79, 88, 94],
    // f7 column
    [68, 60, 80, 82, 89],
    // f8 column
    [69, 61, 81, 83, 90, 95, 101],
]

Buttons.lines = [
    // encoder assign
    [40, 42, 44, 41, 43, 45],
    [0, 1, 2, 3, 4, 5, 6, 7, 51, 62, 63, 64, 65, 66, 67, 68, 69],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 54, 55, 56, 57, 58, 59, 60, 61],
    [24, 25, 26, 27, 28, 29, 30, 31, 50],
    [70, 71, 74, 75, 76, 80, 81],
    [72, 73, 77, 78, 79, 82, 83],
    [84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95],
    [46, 47, 101],
    [48, 49],
    [96],
    [98, 100, 99],
    [97]
]

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