const Midi = require('midi');
const EventEmitter = require('events');
//const trigger = require("./trigger")

class xTouch extends EventEmitter {
    constructor() {
        super();

        // initialise midi communication
        this.input = new Midi.Input();
        this.output = new Midi.Output();

        // Default encoder mode is relative, corrected if we detect an absolute value when reading
        this.encoderMode = null;

        this.input.on("message", this.trigger.bind(this));
    }

    trigger = require("./trigger")

}

module.exports = xTouch;