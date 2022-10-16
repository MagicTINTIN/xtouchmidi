const xTouchBase = require("../index")
class connection extends xTouchBase {

    /**
     * Connects to the X-Touch.
     * 
     * @param {int} midiInput Midi input device number.
     * @param {int} midiOutput Midi output device number.
     */
    connect(midiInput = null, midiOutput = null) {
        // Auto-discover devices if needed
        if (!midiInput || !midiOutput) {
            let devices = this.getDevices();

            if (!midiInput) {
                this.emit("debug", "No input device ID provided, auto-discovering it.");
                midiInput = parseInt(Object.keys(devices.input)[0]);
            }

            if (!midiOutput) {
                this.emit("debug", "No output device ID provided, auto-discovering it.");
                midiOutput = parseInt(Object.keys(devices.output)[0]);
            }
        }

        if (!midiInput || !midiOutput) {
            this.emit("error", "No device discovered.");
            return;
        }

        this.emit("debug", "Input device: " + midiInput);
        this.emit("debug", "Output device: " + midiOutput);

        try {
            this.input.openPort(midiInput);
            this.output.openPort(midiOutput);
        } catch (e) {
            this.emit("error", e);
            this.emit("debug", "Cannot open MIDI port: " + e.message);
        }
    }

    /**
     * Disconnects from the device.
     */
    disconnect() {
        this.input.closePort();
        this.output.closePort();
        this.emit("debug", "Input and output disconnected");
    }

    /**
     * Gets the available MIDI devices.
     * 
     * @returns object The list of available devices as an object with "input" and "output" keys for sorting.
     */
    getDevices() {
        let count = 0;
        let i;
        let devices = { input: {}, output: {} };


        // Count the available input ports.
        this.emit("debug", "Discovering input devices:");
        count = this.input.getPortCount();

        for (i = 0; i < count; i++) {
            let deviceName = this.input.getPortName(i);
            let debugMsg = i + ": " + deviceName;

            if (deviceName.match(/x-touch/i)) {
                devices.input[i] = deviceName;
                debugMsg += " (match)";
            }

            this.emit("debug", debugMsg);
        }

        // Count the available output ports.
        this.emit("debug", "Discovering output devices:");
        count = this.output.getPortCount();

        for (i = 0; i < count; i++) {
            var deviceName = this.output.getPortName(i);
            let debugMsg = i + ": " + deviceName;

            if (deviceName.match(/x-touch one/i)) {
                devices.output[i] = deviceName;
                debugMsg += " (match)";
            }

            this.emit("debug", debugMsg);
        }

        return devices;
    }

}
module.exports = connection;