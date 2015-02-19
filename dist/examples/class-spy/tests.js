define(["require", "exports", "../../strong-sinon", "App"], function (require, exports, capture, App) {
    //test 1: should change state from stopped to started on power button press
    // Arrange
    var engine = new App.Engine("stopped"), engineStartSpy = capture.wrapMethod(engine, engine.start);
    // Act
    engine.pressPowerButton();
    // Assert
    console.log(engineStartSpy.calledOnce);
    console.log(engine.getState(), "started");
    // test 2: should change state from started to stopped on power button press
    // Arrange
    var engine = new App.Engine("started"), engineStopSpy = capture.wrapMethod(engine, engine.stop);
    // Act
    engine.pressPowerButton();
    // Assert
    console.log(engineStopSpy.calledOnce);
    console.log(engine.getState(), "stopped");
});
