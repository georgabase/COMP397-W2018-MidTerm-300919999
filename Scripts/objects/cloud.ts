namespace objects {
  export class Cloud extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("cloud");
      if (managers.Game.currentScene == config.Scene.LEVEL2) this.rotation = 90;
      if (managers.Game.currentScene == config.Scene.LEVEL3)
        this.rotation = -90;

      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
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
        this.x = this.width + 640;
        this.y = Math.floor(
          Math.random() * (480 - this.height) + this.halfHeight
        );
        this._dy = Math.floor(Math.random() * 4 - 2);
        this._dx = Math.floor(Math.random() * 5 + 5);
      }
      if (managers.Game.currentScene == config.Scene.LEVEL3) {
        this.x = -this.width - 640;
        this.y = Math.floor(
          Math.random() * (480 - this.height) + this.halfHeight
        );
        this._dy = Math.floor(Math.random() * 4 - 2);
        this._dx = Math.floor(Math.random() * 5 + 5);
      } else {
        this.x = Math.floor(
          Math.random() * (640 - this.width) + this.halfWidth
        );
        this.y = -this.height;
        this._dx = Math.floor(Math.random() * 4 - 2);
        this._dy = Math.floor(Math.random() * 5 + 5);
      }
    }

    // move the object to some new location
    public Move(): void {
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x -= this._dx;
        this.y += this._dy;
      }
      if (managers.Game.currentScene == config.Scene.LEVEL3) {
        this.x += this._dx;
        this.y += this._dy;
      } else {
        this.y += this._dy;
        this.x += this._dx;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        if (this.x <= 0) this.Reset();
      }
      if (managers.Game.currentScene == config.Scene.LEVEL3) {
        if (this.x >= 640) this.Reset();
      } else {
        if (this.y >= 480 + this.height) this.Reset();
      }
    }
  }
}
