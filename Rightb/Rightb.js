/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rightb extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rightb", "./Rightb/costumes/rightb.png", { x: 295, y: 145 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.moves == 2) {
      this.broadcast("move2");
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSky() {
    this.goto(181, -17);
    this.visible = true;
  }
}
