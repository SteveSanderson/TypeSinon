/// <reference path="../../TypeSinon.ts" />
/// <reference path="../App.ts" />
// simple stub
var stub1 = TypeSinon.stub().throws();
try {
    stub1();
}
catch (e) {
    console.log("stub1 throws");
}
// stub existing object
var engine2 = new App.Engine();
console.info("engine.getState method before creating stub returns", engine2.getState());
var stub2 = TypeSinon.stub(engine2);
console.info("engine.getState method after creating stub returns", engine2.getState());
// stub method on existing object
var engine3 = new App.Engine();
var stub3 = TypeSinon.stub(engine3, engine3.start).throws();
try {
    engine3.start();
}
catch (e) {
    console.log("stub3 throws");
    console.info("engine.getState method should still return state properly:", engine3.getState());
}
// stub method on existing object with given (as param) function
var engine4 = new App.Engine();
var fakeStartFunc = function () {
    console.log("fake startEngine");
};
var stub4 = TypeSinon.stub(engine4, engine4.start, fakeStartFunc);
engine4.start();
var wrongFakePerformDutiesFunc = function (p) {
    console.log("wrong fake performDuties");
    return true;
};
// below will not work, TS compiler will return following error:
// Type argument candidate '() => void' is not a valid type argument because it is not a supertype of candidate '(p: number) => boolean'.
// TypeSinon.stub(engine4, engine4.start, wrongFakePerformDutiesFunc);
// engine4.start(); 
