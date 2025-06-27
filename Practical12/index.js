const events = require("events");
var eventEmiter = new events.EventEmitter();
var myEventHandler = () => {
  console.log("Order Received! Baking a pasta");
};
eventEmiter.on("Order-Pasta", myEventHandler);
eventEmiter.emit("Order-Pasta");
