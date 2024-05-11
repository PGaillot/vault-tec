import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { GameService } from '../../../services/game.service';

interface CanvasObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Character extends CanvasObject {
  img: HTMLImageElement;
}

interface Enemy extends Character {
  id:string;
  dead: boolean;
  line: number;
}

interface Bomb extends Character {
  passed: boolean;
}

interface Shoot extends CanvasObject {
  destroy: boolean;
}

interface Round {
  id:number,
  velocity:number,
  enemiesId:string[]
}

@Component({
  selector: 'app-strength-game-page',
  standalone: true,
  imports: [],
  templateUrl: './strength-game-page.component.html',
  styleUrl: './strength-game-page.component.scss',
})
export class StrengthGamePageComponent {
  private pipboyColor: string = '#2dc92d';

  private ctx!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;
  gameHeight: number = 500;
  gameWidth: number = 500;
  animationId: number = 0;
  intervalEnemies: any;
  movementVelocity: number = 0.8;
  roundVelocity:number = 0;
  velocityX: number = 0;
  bulletVelocityY: number = -1.5;
  enemiesRoundCount: number = 0;
  maxEnemiesRoundCount: number = 5;
  gameOver: boolean = false;
  shoots: Shoot[] = [];
  enemies: Enemy[] = [];
  round: number = 1;
  character: Character = {
    img: new Image(),
    x: 0,
    y: 0,
    width: 20,
    height: 50,
  };

  rounds:Round[] = [
    {
      id:1,
      velocity:0.4,
      enemiesId:[
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
      ]
    },
    {
      id:2,
      velocity:0.6,
      enemiesId:[
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
      ]
    },
    {
      id:3,
      velocity:0.8,
      enemiesId:[
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
      ]
    },
    {
      id:4,
      velocity:1,
      enemiesId:[
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
      ]
    },
    {
      id:5,
      velocity:1.5,
      enemiesId:[
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
        'submarine', 
      ]
    },
  ]

  @ViewChild('game', { static: true }) gameRef!: ElementRef;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowLeft':
        this.velocityX = this.movementVelocity * -1;
        break;
      case 'ArrowRight':
        this.velocityX = this.movementVelocity;
        break;

      case 'Space':
        this.shoot();
        break;

      default:
        break;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      this.velocityX = 0;
    }
  }

  constructor(private gameService: GameService) {}

  shoot() {
    const shoot: Shoot = {
      x: this.character.x + this.character.width / 2,
      y: this.gameHeight - this.character.height - 15,
      width: 4,
      height: 15,
      destroy: false,
    };

    this.shoots = [...this.shoots, shoot];
  }

  startGame() {
    this.round = 1;
    this.startNewRound()
    this.intervalEnemies = setInterval(this.placeEnemy, 1000);
    this.animationId = requestAnimationFrame(this.update.bind(this));
  }

  update() {
    if (this.gameOver) {
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = this.pipboyColor;
      this.ctx.font = "900 32px 'Space Mono', monospace";
      this.ctx.fillText(
        "FIN DE L'EXERCICE",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
      return;
    }
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.ctx.fillStyle = this.pipboyColor;
    this.placeCharacter();

    // SHOOTS !
    this.shoots.forEach((shoot: Shoot) => {
      if (!shoot.destroy) {
        shoot.y += this.bulletVelocityY;
        this.ctx.fillRect(shoot.x, shoot.y, shoot.width, shoot.height);

        this.enemies.forEach((enemy: Enemy) => {
          if (this.gameService.detectCollision(shoot, enemy) && !enemy.dead) {
            shoot.destroy = true;
            enemy.dead = true;
            console.log('Booom !');
          }
        });
      }
      while (
        this.shoots.length > 0 &&
        this.shoots[0].y < -this.shoots[0].height
      ) {
        this.shoots.shift();
      }
    });

    // PLACE ENEMIES
    if (
      this.enemies.filter((enemy: Enemy) => enemy.dead).length ===
      this.enemies.length
    ) {
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = this.pipboyColor;
      this.ctx.font = "900 32px 'Space Mono', monospace";
      this.ctx.fillText(
        'VAGUE ' + this.round + 'TERMINéE',
        this.gameWidth / 2,
        this.gameHeight / 2
      );

      this.round ++
      this.startNewRound()

    } else {
      this.enemies.forEach((enemy: Enemy) => {
        if (enemy.dead) return;

        enemy.y = enemy.line * 50;
        enemy.x += this.movementVelocity / 1.5;

        if (enemy.x + enemy.width > this.gameWidth) {
          enemy.line += 1;
          enemy.x = -enemy.width;
        }

        if (this.gameService.detectCollision(enemy, this.character)) {
          this.gameOver = true;
        }

        this.ctx.drawImage(
          enemy.img,
          enemy.x,
          enemy.y,
          enemy.width,
          enemy.height
        );
      });
    }

    this.animationId = requestAnimationFrame(this.update.bind(this));
  }


  startNewRound(){
    this.character.x = this.gameWidth / 2 - this.character.width / 2;
  }

  placeCharacter() {
    this.character.img.src = '../../../../assets/vaultboy-game.svg';
    this.character.y = this.gameHeight - this.character.height;

    this.character.x += this.velocityX;

    if (this.character.x < 0) {
      this.character.x = 0;
    } else if (this.character.x > this.gameWidth - this.character.width) {
      this.character.x = this.gameWidth - this.character.width;
    }

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );
  }

  placeEnemy = () => {
    const mask: Enemy = {
      id:'mask',
      img: new Image(),
      x: 0,
      y: 0,
      width: 22,
      height: 24,
      dead: false,
      line: 1,
    };

    const institute: Enemy = {
      id:'institute',
      img: new Image(),
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      dead: false,
      line: 1,
    };

    const submarine: Enemy = {
      id:'submarine',
      img: new Image(),
      x: 0,
      y: 0,
      width: 40,
      height: 25,
      dead: false,
      line: 1,
    };

    // Assign image
    mask.img.src = '../../../../assets/enemy01.svg';
    institute.img.src = '../../../../assets/enemy02.svg';
    submarine.img.src = '../../../../assets/enemy03.svg';

    const enemiesList: Enemy[] = [mask, institute, submarine];

    this.enemies = [
      ...this.enemies,
      enemiesList[this.gameService.getRandom(0, enemiesList.length - 1)],
    ];

    this.enemiesRoundCount++;
    if (this.enemiesRoundCount >= this.maxEnemiesRoundCount) {
      clearInterval(this.intervalEnemies);
    }
  };

  ngOnInit(): void {
    this.canvas = this.gameRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.height = this.gameHeight;
    this.canvas.width = this.gameWidth;
    this.startGame();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}
