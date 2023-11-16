import * as PIXI from "pixi.js";

class GridApp {
  private readonly app: PIXI.Application<HTMLCanvasElement>;
  private width: number;
  private height: number;
  private readonly grid: PIXI.Graphics;
  private readonly blurFilter: PIXI.BlurFilter;

  //animation propaties
  private readonly DOT_SIZE = 2.5;
  private readonly DOT_COLOR = 0xe7e7e7;
  private readonly DOT_SPACING = 32;
  private readonly GRID_DEFAULT_POS = 21;
  private readonly MOVE_SPEED = 0.036;
  private readonly INITIAL_MOVE_DIST = 32 * 16;
  private readonly BLUER_COEFFICIENT = 0.01;

  //state
  private currentAnimation: "none" | "scroll" | "up" | "left" | "right";
  private count = 0;

  constructor() {
    this.app = new PIXI.Application<HTMLCanvasElement>({
      backgroundAlpha: 0,
      resizeTo: window,
    });
    [this.width, this.height] = [this.app.screen.width, this.app.screen.height];
    this.grid = new PIXI.Graphics();
    this.blurFilter = new PIXI.BlurFilter();
    this.app.stage.addChild(this.grid);

    this.currentAnimation = "none";
  }
  public appendGrid = (div: HTMLDivElement) => {
    div.appendChild(this.app.view);
  };

  private gridAnimation = () => {
    if (this.currentAnimation === "none") return;
    if (this.currentAnimation === "scroll") return;
    this.count += (this.INITIAL_MOVE_DIST - this.count) * this.MOVE_SPEED;
    this.grid.clear();
    for (let i = 0; i < this.width; i += this.DOT_SPACING) {
      for (let j = 0; j < this.height; j += this.DOT_SPACING) {
        this.grid.beginFill(this.DOT_COLOR, 1);
        if (this.currentAnimation === "up") this.grid.drawCircle(i, j + (this.count % this.DOT_SPACING), this.DOT_SIZE);
        else if (this.currentAnimation === "left")
          this.grid.drawCircle(i - (this.count % this.DOT_SPACING), j, this.DOT_SIZE);
        else if (this.currentAnimation === "right")
          this.grid.drawCircle(i + (this.count % this.DOT_SPACING), j, this.DOT_SIZE);
        this.grid.endFill();
        this.blurFilter.blur = (this.DOT_SPACING * 16 - this.count) * this.BLUER_COEFFICIENT;
      }
    }
    if (this.INITIAL_MOVE_DIST - this.count <= 0.1) {
      this.changeTicker("none");
    }
  };
  public changeTicker = (animation: "none" | "scroll" | "up" | "left" | "right") => {
    this.currentAnimation = animation;
    this.count = 0;
  };
  public removeTicker(): void {
    this.app.ticker.remove(this.gridAnimation);
    this.count = 0;
  }

  public addTicker = (animation: "up" | "left" | "right") => {
    this.count = 0;
    if (animation === "up") this.currentAnimation = "up";
    else if (animation === "left") this.currentAnimation = "left";
    else if (animation === "right") this.currentAnimation = "right";
    this.app.ticker.add(this.gridAnimation);
  };

  //debug
  public getTickersNum = () => this.app.ticker.count;
}

export default GridApp;
