import Phaser from "phaser";
import events from "./EventCenter";

export default class UI extends Phaser.Scene {
  constructor() {
    super("ui");
  }

  init({ level = 1, score = 0 }) {
    this.level = level;
    this.score = score;
  }

  create() {
    this.text = this.add.text(
      10,
      10,
      `Nivel: ${this.level} - Puntos ${this.score}`,
      {
        font: "12px Arial",
        fill: "#ffffff",
      }
    );

    // escuchar eventos
    events.on("update", this.setText, this);
  }

  setText(data) {
    console.log("actualizar datos", data);
    this.level = data.level;
    this.score = data.score;

    this.text.setText(`Nivel: ${this.level} - Puntos ${this.score}`);
  }
}
