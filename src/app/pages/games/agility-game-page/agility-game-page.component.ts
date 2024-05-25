import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-agility-game-page',
  standalone: true,
  imports: [],
  templateUrl: './agility-game-page.component.html',
  styleUrl: './agility-game-page.component.scss',
})
export class AgilityGamePageComponent {
  gameHeight: number = 500;
  gameWidth: number = 350;

  pipboyColor: string = '#2dc92d';

  ctx!: CanvasRenderingContext2D;
  canvas!: HTMLCanvasElement;
  animationId: number = 0;
  @ViewChild('agilityGame', { static: true }) gameRef!: ElementRef;

  drawLocker() {
    const lockerSize: number = 150;
    const holeHeight: number = 65;
    const holeWidth: number = 20;

    this.ctx.beginPath();
    this.ctx.fillStyle = this.pipboyColor;
    this.ctx.arc(
      this.gameWidth / 2,
      this.gameHeight / 2,
      lockerSize / 2,
      0,
      2 * Math.PI
    );
    this.ctx.fill();

    this.ctx.clearRect(
      this.gameWidth / 2 - holeWidth / 2,
      this.gameHeight / 2 - holeHeight,
      holeWidth,
      holeHeight
    );
  }

  drawPick() {
    const pickHeight: number = 300;
    const pickWidth: number = 6;
    this.ctx.fillRect(
      this.gameWidth / 2 - pickWidth / 2,
      this.gameHeight / 2 - pickHeight - 10,
      pickWidth,
      pickHeight
    );
  }

  drawLockpick(x: number, y: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.pipboyColor;
    this.ctx.lineWidth = 6;
    this.ctx.moveTo(
      this.gameWidth / 2 ,
      this.gameHeight / 2 - 10
    );
    this.ctx.lineTo(x - this.gameWidth / 2, y - this.gameHeight / 2)
    this.ctx.stroke()
  }

  update() {
    this.ctx.clearRect(0, 0, 100, 100);
    
    this.drawLocker();
    this.drawPick();
    
    this.animationId = requestAnimationFrame(this.update.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    this.drawLockpick(event.clientX, event.clientY)
  }
  
  onMouseLeave(event: MouseEvent) {
    this.drawLockpick(event.clientX, event.clientY)
  }

  ngOnInit(): void {
    this.canvas = this.gameRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.height = this.gameHeight;
    this.canvas.width = this.gameWidth;


    this.gameRef.nativeElement.addEventListener(
      'mousemove',
      (event: MouseEvent) => this.onMouseMove(event)
    );
    this.gameRef.nativeElement.addEventListener(
      'mouseout',
      (event: MouseEvent) => this.onMouseLeave(event)
    );

    this.animationId = requestAnimationFrame(this.update.bind(this));
  }
}
