namespace objects {
  export class Coin extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("coin");
      if (managers.Game.currentScene == config.Scene.LEVEL2) this.rotation = 90;
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {}

    public Update(): void {
      this.CheckBounds();
    }

    public CheckBounds(): void {
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        if (this.x < 0 - this.height) this.alpha = 1;
      } else {
        if (this.y > 480 + this.height) this.alpha = 1;
      }
    }
  }
}
