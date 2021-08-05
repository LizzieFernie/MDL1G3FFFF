/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Snowman extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "SNOWMANfull-removebg-preview",
        "./Snowman/costumes/SNOWMANfull-removebg-preview.png",
        { x: 153, y: 175 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSky() {
    this.goto(81, -140);
    this.visible = true;
  }
}
