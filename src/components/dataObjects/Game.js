import React from "react";
import Player from "./Player";

export default class Game {
  constructor(
    yearIn,
    monthIn,
    dayIn,
    winnerIdIn,
    lastRoundIn,
    greyjoyPlayer,
    starkPlayer,
    arrynPlayer,
    baratheonPlayer,
    dornPlayer,
    tyrellPlayer,
    lannisterPlayer,
    targaryenPlayer
  ) {
    this.year = yearIn;
    this.month = monthIn;
    this.day = dayIn;
    this.winner = winnerIdIn;
    this.lastRound = lastRoundIn;
    this.lannister = lannisterPlayer;
    this.greyjoy = greyjoyPlayer;
    this.stark = starkPlayer;
    this.arryn = arrynPlayer;
    this.baratheon = baratheonPlayer;
    this.targaryen = targaryenPlayer;
    this.dorn = dornPlayer;
    this.tyrell = tyrellPlayer;
  }
}
