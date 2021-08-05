/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DownButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("down button", "./DownButton/costumes/down button.png", {
        x: 293,
        y: 144
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveSky() {
    this.goto(180, 50);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.moves == 1) {
      this.broadcast("move1");
    }
  }
}
