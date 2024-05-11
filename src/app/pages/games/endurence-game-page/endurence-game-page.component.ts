import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { QuestionService } from '../../../services/question.service';

interface Obstacle {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  passed: boolean;
}

interface Character {
  img: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-endurence-game-page',
  standalone: true,
  imports: [],
  templateUrl: './endurence-game-page.component.html',
  styleUrl: './endurence-game-page.component.scss',
})
export class EndurenceGamePageComponent {
  @ViewChild('gameCanvas', { static: true }) gameRef!: ElementRef;

  private ctx!: CanvasRenderingContext2D;
  private animationId: number = 0;
  private pipboyColor: string = '#2dc92d';

  // imgs
  obstacleIgm: HTMLImageElement | undefined;
  characterImg: HTMLImageElement | undefined;

  character!: Character;
  obstacles: Obstacle[] = [];

  // GAME
  gameOver: boolean = false;
  score: number = 0;
  game: { height: number; width: number };
  gameHeight: number = 300;
  gameWidth: number = 500;
  bestScore: string = '0';
  bestScoreLocalKey: string = 'enducence-game-best-score';

  //Road
  roadHeight: number = 250;
  lineDashOffset = 0;

  xVelocity: number = -1;
  yVelocity: number = 0;
  gravity: number = 0.0115;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.jumpCharacter(event);
  }

  constructor(private questionService: QuestionService) {
    this.game = { height: this.gameHeight, width: this.gameWidth };

    if (sessionStorage.getItem(this.bestScoreLocalKey)) {
      this.bestScore = sessionStorage.getItem(this.bestScoreLocalKey)!;
    }
  }

  startAnimation() {
    setInterval(this.placeObstacle, 1000);
    this.animationId = requestAnimationFrame(this.update.bind(this));
  }

  jumpCharacter(e: KeyboardEvent) {

    console.log(this.character.y);
    console.log(this.roadHeight - (this.character.height  + 5));
    

    if (
      e.code === 'ArrowUp' &&
      this.character.y >= this.roadHeight - (this.character.height  + 5)
    ) {
      this.yVelocity = -1.2;
    }
  }

  update() {
    // Appeler la prochaine frame d'animation
    if (this.gameOver) return;
    this.ctx.clearRect(0, 0, this.game.width, this.game.height);

    // PLACE ROAD
    this.placeRoad();
    this.lineDashOffset += -(this.xVelocity / 0.9);
    this.placeLineRoad();

    //PLACE OBSTACLES
    this.obstacles.forEach((obstacle: Obstacle, i) => {
      obstacle.x += this.xVelocity;
      this.ctx.drawImage(
        obstacle.img,
        obstacle.x,
        obstacle.y,
        obstacle.width,
        obstacle.height
      );

      if (!obstacle.passed && this.character.x > obstacle.x + obstacle.width) {
        this.score += 1;
        obstacle.passed = true;
      }

      if (this.detectCollision(this.character, obstacle)) {
        this.gameOver = true;
        if (
          typeof sessionStorage.getItem(this.bestScoreLocalKey) === 'string' &&
          sessionStorage.getItem(this.bestScoreLocalKey) !== null
        ) {
          const bestScore: number | null = parseInt(
            sessionStorage.getItem(this.bestScoreLocalKey)!
          );

          if (bestScore < this.score){
            sessionStorage.setItem(
              this.bestScoreLocalKey,
              this.score.toString()
            );

            this.bestScore = this.score.toString()
          }
      
        }
      }
    });

    while (
      this.obstacles.length > 0 &&
      this.obstacles[0].x < -this.obstacles[0].width
    ) {
      this.obstacles.shift();
    }

    // PLACE CHARACTER
    this.yVelocity += this.gravity;
    this.character.y = Math.max(this.character.y + this.yVelocity, 0);
    this.character.y = Math.min(
      this.character.y + this.yVelocity,
      this.roadHeight - 55
    );
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    this.animationId = requestAnimationFrame(this.update.bind(this));
  }

  placeObstacle = () => {
    if (this.gameOver) return;
    const medRand: number = this.questionService.getRandom(1, 2);
    const highRand: number = this.questionService.getRandom(3, 4);
console.log(medRand);
console.log(highRand);

    // this.obstacleIgm = new Image();
    // this.obstacleIgm.src = '../../../../assets/obstacle' + rand + '.svg';

    const smallObstacleImg = new Image();
    smallObstacleImg.src = '../../../../assets/obstacle5.svg'

    const mediumObstacleImg = new Image();
    mediumObstacleImg.src = '../../../../assets/obstacle' + medRand + '.svg';
        
    const highObstacleImg = new Image();
    highObstacleImg.src = '../../../../assets/obstacle' + highRand + '.svg';

    const obstacleSmall: Obstacle = {
      img: smallObstacleImg!,
      x: this.game.width,
      y: this.roadHeight - 23,
      width: 23,
      height: 23,
      passed: false,
    };

    const obstacleMedium: Obstacle = {
      img: mediumObstacleImg!,
      x: this.game.width,
      y: this.roadHeight - 31,
      width: 31,
      height: 30,
      passed: false,
    };

    const obstacleHigh: Obstacle = {
      img: highObstacleImg!,
      x: this.game.width,
      y: this.roadHeight - 54,
      width: 30,
      height: 54,
      passed: false,
    };

    const allObstacles:Obstacle[] = [obstacleSmall, obstacleMedium, obstacleHigh]

    this.obstacles.push(allObstacles[this.questionService.getRandom(0, (allObstacles.length - 1))]);
    console.log(this.obstacles);
  };

  placeRoad() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.pipboyColor;
    this.ctx.moveTo(0, this.roadHeight);
    this.ctx.lineTo(this.game.width, this.roadHeight);
    this.ctx.setLineDash([]);
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
  }

  placeLineRoad() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.pipboyColor;
    this.ctx.moveTo(0, this.roadHeight + 15);
    this.ctx.lineTo(this.game.width, this.roadHeight + 15);

    // Apply line dash only to this line
    this.ctx.setLineDash([12, 24]);
    this.ctx.lineDashOffset = this.lineDashOffset; // Décalage de 6 pixels

    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  detectCollision(a: any, b: any): boolean {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.gameRef.nativeElement;
    canvas.height = this.game.height;
    canvas.width = this.game.width;

    this.ctx = canvas.getContext('2d')!;

    if (this.ctx) {
      this.characterImg = new Image();
      this.characterImg.src = '../../../../assets/vaultboy-game.svg';

      this.character = {
        img: this.characterImg!,
        x: 30,
        y: this.roadHeight,
        width: 20,
        height: 50,
      };

      this.startAnimation();
    }
  }

  ngOnDestroy(): void {
    // Arrêter l'animation lorsque le composant est détruit
    cancelAnimationFrame(this.animationId);
  }
}
