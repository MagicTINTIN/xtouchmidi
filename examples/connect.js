const xTouch = require("../modules/connection")

let surface = new xTouch();

surface.on("debug", (msg) => console.info("[Debug]", msg));
surface.on("error", (msg) => console.info("[Error]", msg));
// surface.on("btnpress", (btn) => console.log("btn pressed"));


surface.getDevices()
surface.connect(2, 2)



// surface.on("btnpress", (btn) => surface.btn.set(btn, Controls.LightStatus.ON));
// surface.on("btnrelease", (btn) => surface.btn.set(btn, Controls.LightStatus.OFF));