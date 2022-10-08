const EventEmitter = require('events');

class internalEvents extends EventEmitter {
    constructor() {
        super();
    }

    midiEvent(data) {
        this.emit('midiEvent', data);
    }
}

module.exports = internalEvents