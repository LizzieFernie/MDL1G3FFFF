/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rb2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rb2", "./Rb2/costumes/rb2.png", { x: 294, y: 141 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.moves == 4) {
      this.broadcast("move4");
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSky() {
    this.goto(181, -90);
    this.visible = true;
  }
}
