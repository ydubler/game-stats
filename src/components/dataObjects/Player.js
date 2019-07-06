import React from "react";

export default class Player {
  constructor(
    playerIdIn,
    strongholdCountIn,
    castleCountIn,
    supplyCountIn,
    fiefdomsIn,
    lastTurnPlayedIn,
    notesIn
  ) {
    this.id = playerIdIn;
    this.lastTurnPlayed = lastTurnPlayedIn;
    this.strongholdCount = strongholdCountIn;
    this.castleCount = castleCountIn;
    this.supplyCount = supplyCountIn;
    this.fiefdomsPosition = fiefdomsIn;
    this.notes = notesIn;
  }
}
