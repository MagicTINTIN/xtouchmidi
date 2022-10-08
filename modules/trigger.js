const xTouchBase = require("../index")
//const internalEvents = require('./emitter');
const globalEmitter = require('./emitter');
const { globalEvents } = require("../index")

const Buttons = require('../settings/buttons');

class triggerXTouch extends xTouchBase {
    constructor() {
        super();
        let receiver = new xTouchBase();
        receiver.on("msg", (msg) => console.log("msg triggered in trigger"))
        this.on("message", (msg) => console.log("triggered in trigger"));
        globalEvents.on("midiEvent", value => console.log("triggered in trigger by internal"))
        //this.input.on("message", this.onMidiMessage.bind(this));
    }

    /**
     * Callback on MIDI message received.
     * 
     * @param {float} deltaTime Time since last event on the track
     * @param {array} msg The received message
     */
    onMidiMessage(deltaTime, msg) {
        // Extract components from the MIDI command
        let [cmdType, target, value] = msg;

        this.emit("debug", "MIDI message: " + msg);

        // Handle only notes and CC
        if (VALID_CMD_TYPES.includes(cmdType)) {
            // Button presses
            if (cmdType == Buttons.Prefix && Buttons.match(target)) {
                let eventName = value == Buttons.PressStatus.ON ? "btnpress" : "btnrelease";
                this.emit("debug", "Button " + eventName.substring(3) + ": " + Controls.ButtonNames[target]);
                this.emit(eventName, target);
            }/* else if (target == Controls.Encoder) {
                // Guess encoder mode
                if (RELATIVE_ENCODER_VALUES.includes(value)) {
                    this.encoderMode = Controls.EncoderMode.RELATIVE;
                } else {
                    this.encoderMode = Controls.EncoderMode.ABSOLUTE;
                }
    
                this.emit("encoder", value);
            } else if (target == Controls.Fader) {
                this.emit("fader", value);
            } else if (target == Controls.Jogwheel) {
                this.emit("jogwheel", value);
            }*/
        }
    }
}
module.exports = triggerXTouch;