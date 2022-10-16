const Midi = require('midi');
const EventEmitter = require('events');


const trigger = require("./modules/trigger")
const buttons = require("./modules/buttons");
const Buttons = require('./settings/buttons');

const buttonset = new buttons()

class xTouch extends EventEmitter {

    constructor() {
        super();

        // initialise midi communication
        this.input = new Midi.Input();
        this.output = new Midi.Output();
        // Default encoder mode is relative, corrected if we detect an absolute value when reading
        this.encoderMode = null;

        this.input.on("message", (dt, msg) => {
            trigger.onMidiMessage(this, dt, msg)
        });
    }

    /**
        * Set button light status
        *
        * @param {int} button The button to light up (or down).
        * @param {int} status The button status.
        */
    btnset(button, status) {
        buttonset.set(this, button, status);
    }

    /**
        * Lights down all buttons
        */
    clearbtn() {
        for (const bt in Buttons.Pos) {
            this.btnset(Buttons.Pos[bt], 0);
        }
    }

    /**
        * Lights up all buttons
        */
    fullbtn() {
        for (const bt in Buttons.Pos) {
            this.btnset(Buttons.Pos[bt], 127);
        }
    }

}

module.exports = xTouch;