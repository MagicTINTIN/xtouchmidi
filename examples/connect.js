const xTouch = require("../modules/connection")
const Buttons = require("../settings/buttons")
let surface = new xTouch();

surface.on("debug", (msg) => console.info("[Debug]", msg));
surface.on("error", (msg) => console.info("[Error]", msg));

surface.getDevices()
surface.connect(2, 2)

surface.on("btnpress", (btn) => surface.btnset(btn, Buttons.LightStatus.ON));
surface.on("btnrelease", (btn) => surface.btnset(btn, Buttons.LightStatus.OFF));