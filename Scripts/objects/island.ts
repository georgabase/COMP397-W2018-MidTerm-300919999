namespace objects {
  export class Island extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("island");
      if (managers.Game.currentScene == config.Scene.LEVEL2) this.rotation = 90;
      if (managers.Game.currentScene == config.Scene.LEVEL3)
        this.rotation = -90;

      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      if (managers.Game.currentScene == config.Scene.LEVEL2) this._dx = -5;
      if (managers.Game.currentScene == config.Scene.LEVEL3) this._dx = 5;
      else this._dy = 5;
      this.Reset();
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x = this.width + 640 + this.halfWidth;
        this.y = Math.floor(
          Math.random() * (480 - this.height) + this.halfHeight
        );
      }

      if (managers.Game.currentScene == config.Scene.LEVEL3) {
        this.x = -this.width - 640 - this.halfWidth;
        this.y = Math.floor(
          Math.random() * (480 - this.height) + this.halfHeight
        );
      } else {
        this.x = Math.floor(
          Math.random() * (640 - this.width) + this.halfWidth
        );
        this.y = -this.height;
      }
    }

    // move the object to some new location
    public Move(): void {
      if (managers.Game.currentScene == config.Scene.LEVEL2) this.x += this._dx;
      if (managers.Game.currentScene == config.Scene.LEVEL3) this.x += this._dx;
      else this.y += this._dy;
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      // check lower bounds
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        if (this.x <= 0 - this.halfWidth) {
          this.Reset();
        }
      }
      if (managers.Game.currentScene == config.Scene.LEVEL3) {
        if (this.x >= 640 + this.halfWidth) {
          this.Reset();
        }
      } else if (this.y >= 480 + this.height) {
        this.Reset();
      }
    }
  }
}
