/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Down2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("down2", "./Down2/costumes/down2.png", { x: 292, y: 143 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.moves == 3) {
      this.broadcast("move3");
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSky() {
    this.goto(180, 115);
    this.visible = true;
  }
}
