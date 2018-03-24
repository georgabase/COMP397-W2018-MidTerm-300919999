namespace objects {
  export class Plane extends objects.GameObject {
    // private instance variables

    // public properties
    public planeFlash: objects.PlaneFlash;

    // Constructor
    constructor() {
      super("plane");
      this.Start();
      if (managers.Game.currentScene == config.Scene.LEVEL2) this.rotation = 90;
      if (managers.Game.currentScene == config.Scene.LEVEL3)
        this.rotation = -90;
    }

    // private methods
    private _animationEnded(): void {
      if (this.alpha == 0) {
        this.alpha = 1;
        this.planeFlash.alpha = 0;
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this.planeFlash = new objects.PlaneFlash();
      this.planeFlash.alpha = 1;
      this.planeFlash.on(
        "animationend",
        this._animationEnded.bind(this),
        false
      );

      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x = 0;
        this.y = 320;
      }
      if (managers.Game.currentScene == config.Scene.LEVEL3) {
        this.x = 640;
        this.y = 320;
      } else {
        this.x = 320;
        this.y = 430;
      }
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {}

    // move the object to some new location
    public Move(): void {
      // mouse controls
      // this.x = objects.Game.stage.mouseX;

      // keyboard controls
      if (
        managers.Game.keyboardManager.moveLeft &&
        managers.Game.currentScene == config.Scene.PLAY
      )
        this.x -= 5;

      if (
        managers.Game.keyboardManager.moveRight &&
        managers.Game.currentScene == config.Scene.PLAY
      )
        this.x += 5;

      if (
        managers.Game.keyboardManager.moveForward &&
        managers.Game.currentScene == config.Scene.LEVEL2
      )
        this.y -= 5;

      if (
        managers.Game.keyboardManager.moveBackward &&
        managers.Game.currentScene == config.Scene.LEVEL2
      )
        this.y += 5;

      this.planeFlash.x = this.x;
      this.planeFlash.y = this.y;
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      // right boundary
      if (this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // left boundary
      if (this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
      // up boundary
      if (this.y >= 480 - this.halfHeight) {
        this.y = 480 - this.halfHeight;
      }
      // low boundary
      if (this.y <= this.halfHeight) {
        this.y = this.halfHeight;
      }
    }
  }
}
