/// <reference path="../../TypeSinon.d.ts" />
/// <reference path="App.d.ts" />
declare var engine: App.Engine, engineStartSpy: TypeSinon.CapturedFunc<() => void>;
declare var engine: App.Engine, engineStopSpy: TypeSinon.CapturedFunc<() => void>;
