var em = require('./emitter');
var globalEvents = em.globalEvents

const Buttons = require('../settings/buttons');
class triggerXTouch {

    /**
     * Function called on midi message incomming
     * 
     * @param {any} parent which is this
     * @param {float} deltaTime time since last event
     * @param {array} msg the received message
     */
    static onMidiMessage(parent, deltaTime, msg) {
        let [cmdType, target, value] = msg;

        parent.emit("debug", "MIDI message: " + msg);

        if (cmdType == Buttons.Prefix && Buttons.match(target)) {
            let eventName = value == Buttons.PressStatus.ON ? "btnpress" : "btnrelease";
            parent.emit("debug", "Button " + eventName.substring(3) + ": " + Buttons.names[target]);
            parent.emit(eventName, target, deltaTime);
        }


        /* else if (target == Controls.Encoder) {
                // Guess encoder mode
                if (RELATIVE_ENCODER_VALUES.includes(value)) {
                    parent.encoderMode = Controls.EncoderMode.RELATIVE;
                } else {
                    parent.encoderMode = Controls.EncoderMode.ABSOLUTE;
                }
    
                parent.emit("encoder", value);
            } else if (target == Controls.Fader) {
                parent.emit("fader", value);
            } else if (target == Controls.Jogwheel) {
                parent.emit("jogwheel", value);
            }*/

    }
}
module.exports = triggerXTouch;