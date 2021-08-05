/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Girlh extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("girlh", "./Girlh/costumes/girlh.png", { x: 170, y: 209 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "sky" }, this.whenIReceiveSky),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "move1" }, this.whenIReceiveMove1),
      new Trigger(Trigger.BROADCAST, { name: "move2" }, this.whenIReceiveMove2),
      new Trigger(Trigger.BROADCAST, { name: "move3" }, this.whenIReceiveMove3),
      new Trigger(Trigger.BROADCAST, { name: "move4" }, this.whenIReceiveMove4)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.moves = 1;
    this.visible = false;
  }

  *whenIReceiveSky() {
    this.goto(-205, 144);
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (!this.touching(this.sprites["Snowman"].andClones())) {
      yield;
    }
    this.broadcast("finalemoj");
    this.broadcast("next");
  }

  *whenIReceiveMove1() {
    this.stage.vars.moves += 1;
    for (let i = 0; i < 4; i++) {
      this.y += -57;
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveMove2() {
    this.stage.vars.moves += 1;
    for (let i = 0; i < 3; i++) {
      this.x += 56;
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveMove3() {
    this.stage.vars.moves += 1;
    this.y += -57;
  }

  *whenIReceiveMove4() {
    for (let i = 0; i < 2; i++) {
      this.x += 56;
      yield* this.wait(1);
      yield;
    }
  }
}
