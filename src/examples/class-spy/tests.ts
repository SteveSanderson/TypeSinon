/// <reference path="../../TypeSinon.ts" />
/// <reference path="../App.ts" />


//test 1: should change state from stopped to started on power button press

// Arrange
var engine = new App.Engine("stopped"),
	engineStartSpy = TypeSinon.spy(engine, engine.start);

// Act
engine.pressPowerButton();

// Assert
console.log(engineStartSpy.calledOnce);
console.log(engine.getState(), "started");


// test 2: should change state from started to stopped on power button press

// Arrange
var engine = new App.Engine("started"),
    engineStopSpy = TypeSinon.spy(engine, engine.stop);

// Act
engine.pressPowerButton();

// Assert
console.log(engineStopSpy.calledOnce);
console.log(engine.getState(), "stopped");