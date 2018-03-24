namespace objects {
  export class PlaneFlash extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("planeflash");
      if (managers.Game.currentScene == config.Scene.LEVEL2) this.rotation = 90;
      if (managers.Game.currentScene == config.Scene.LEVEL3)
        this.rotation = -90;
    }

    // private methods

    // public methods
    public Start(): void {}

    public Update(): void {}
  }
}
