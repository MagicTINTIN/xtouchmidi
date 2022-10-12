// internal events
var em = require('./modules/emitter');
var globalEvents = em.globalEvents

const Midi = require('midi');
const EventEmitter = require('events');


const trigger = require("./modules/trigger")
const connection = require("./modules/connection");

class xTouch extends EventEmitter {

    constructor() {
        super();

        // initialise midi communication
        this.input = new Midi.Input();
        this.output = new Midi.Output();
        //this.input.on("message", this..bind(this));
        // Default encoder mode is relative, corrected if we detect an absolute value when reading
        this.encoderMode = null;

        this.input.on("message", (dt, msg) => {
            trigger.onMidiMessage(this, dt, msg)
        });


    }

}
module.exports = xTouch;