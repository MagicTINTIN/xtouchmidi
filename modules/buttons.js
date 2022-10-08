const Buttons = require('../settings/buttons');
const EventEmitter = require('events');
const emitter = new EventEmitter
module.exports = {
    /**
     * Set button light status
     * 
     * @param {int} button The button to light up (or down).
     * @param {int} status The button status. 
     */
    set(button, status) {
        emitter.emit("debug", "Setting button light: " + Buttons.names[button] + " to " + (status ? "on" : "off"));
        this.output.send([Buttons.Prefix, button, status]);
    }
}