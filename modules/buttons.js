const Buttons = require('../settings/buttons');
class buttonXTouch {
  /**
    * Set button light status
    *
    * @param {any} parent (generally this)
    * @param {int} button button to affect.
    * @param {int} status button status.
    */
  set(parent, button, status) {
    parent.emit("debug", "Setting button light: " + Buttons.names[button] + " to " + (status ? "on" : "off"));
    parent.output.send([Buttons.Prefix, button, status]);
  }

}
module.exports = buttonXTouch;