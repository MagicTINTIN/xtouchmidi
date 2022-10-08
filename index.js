// exports every module

//const internalEvents = require('./modules/emitter');
const globalEmitter = require('./modules/emitter');
const Midi = require('midi');
const EventEmitter = require('events');
//const trigger = require("./trigger")
const globalEvents = new globalEmitter();
exports.globalEvents = globalEvents;

class xTouch extends EventEmitter {

    trigger = require("./modules/trigger")
    connection = require("./modules/connection");

    constructor() {
        super();

        // initialise midi communication
        this.input = new Midi.Input();
        this.output = new Midi.Output();
        //this.input.on("message", this..bind(this));
        // Default encoder mode is relative, corrected if we detect an absolute value when reading
        this.encoderMode = null;

        this.input.on("message", (dt, msg) => this.emit("msg", dt, msg));
        //this.trigbymidi.bind(this)
        //internalEvents.emit("msg", msg)
        //console.log(dt, msg)
    }


    //btn = require("./modules/buttons")
}
//internalEvents.on("msg", (msg) => console.log("triggered in trigger by internal"))
//internalEvents.on("msg", (dt, msg) => console.log("triggered in trigger by internal exported"))
module.exports = xTouch;