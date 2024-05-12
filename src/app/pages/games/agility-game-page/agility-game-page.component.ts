import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-agility-game-page',
  standalone: true,
  imports: [],
  templateUrl: './agility-game-page.component.html',
  styleUrl: './agility-game-page.component.scss'
})
export class AgilityGamePageComponent {
  gameHeight:number = 500;
  gameWidth:number = 500;

  ctx!:CanvasRenderingContext2D;
  canvas!:HTMLCanvasElement;

  @ViewChild('agilityGame', {static:true}) gameRef!: ElementRef;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.canvas = this.gameRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.canvas.height = this.gameHeight;
    this.canvas.width = this.gameWidth;


  }

}
