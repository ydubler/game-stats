"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Player=function Player(playerIdIn,strongholdCountIn,castleCountIn,supplyCountIn,fiefdomsIn,lastTurnPlayedIn,notesIn){_classCallCheck(this,Player);this.id=playerIdIn;this.lastTurnPlayed=lastTurnPlayedIn;this.strongholdCount=strongholdCountIn;this.castleCount=castleCountIn;this.supplyCount=supplyCountIn;this.fiefdomsPosition=fiefdomsIn;this.notes=notesIn;};exports["default"]=Player;