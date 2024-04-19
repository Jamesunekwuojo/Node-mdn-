const events = require("events");
const { EventEmitter } = events;

const eventEmitter = new events.EventEmitter();
// They are two aspects to this module : register and event aand emitting or raising an event
eventEmitter.on("event1", function(param){
    console.log("hello");
    console.log(param);
});

eventEmitter.emit("event1", "By there");


