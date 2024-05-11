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
  id: string;
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
  interval: number;
  velocity: number;
  enemiesId: string[];
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
  enemiesVelocityX: number = 0;
  roundVelocity: number = 0;
  velocityX: number = 0;
  bulletVelocityY: number = -1.5;
  enemiesRoundCount: number = 0;
  maxEnemiesRoundCount: number = 5;
  gameOver: boolean = false;
  shoots: Shoot[] = [];
  enemies: Enemy[] = [];
  gameRun: boolean = false;
  round: number = 0;
  maxShoots: number = 3;
  character: Character = {
    img: new Image(),
    x: 0,
    y: 0,
    width: 20,
    height: 50,
  };

  rounds: Round[] = [
    {
      interval: 1500,
      velocity: 0.4,
      enemiesId: [
        'submarine',
        'submarine',
        'submarine',
        'submarine',
        'submarine',
      ],
    },
    {
      interval: 1200,
      velocity: 0.6,
      enemiesId: [
        'submarine',
        'submarine',
        'submarine',
        'mask',
        'mask',
        'submarine',
        'submarine',
        'submarine',
      ],
    },
    {
      interval: 1000,
      velocity: 0.8,
      enemiesId: [
        'submarine',
        'submarine',
        'institute',
        'submarine',
        'mask',
        'mask',
        'submarine',
        'institute',
        'submarine',
        'submarine',
      ],
    },
    {
      interval: 600,
      velocity: 1,
      enemiesId: [
        'submarine',
        'submarine',
        'submarine',
        'mask',
        'institute',
        'mask',
        'submarine',
        'submarine',
        'submarine',
      ],
    },
    {
      interval: 400,
      velocity: 1.5,
      enemiesId: [
        'submarine',
        'submarine',
        'submarine',
        'institute',
        'institute',
        'mask',
        'institute',
        'mask',
        'institute',
        'institute',
        'submarine',
        'submarine',
        'submarine',
      ],
    },
    {
      interval: 200,
      velocity: 1.5,
      enemiesId: [
        'mask',
        'submarine',
        'submarine',
        'submarine',
        'institute',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'submarine',
        'submarine',
        'submarine',
        'mask',
      ],
    },
    {
      interval: 200,
      velocity: 1.6,
      enemiesId: [
        'mask',
        'submarine',
        'submarine',
        'submarine',
        'institute',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'mask',
        'mask',
        'submarine',
        'mask',
        'mask',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'submarine',
        'submarine',
        'submarine',
        'mask',
      ],
    },
    {
      interval: 200,
      velocity: 1.8,
      enemiesId: [
        'mask',
        'submarine',
        'submarine',
        'mask',
        'submarine',
        'institute',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'mask',
        'mask',
        'submarine',
        'mask',
        'mask',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'submarine',
        'mask',
        'submarine',
        'submarine',
        'mask',
      ],
    },
    {
      interval: 200,
      velocity: 1.9,
      enemiesId: [
        'mask',
        'submarine',
        'submarine',
        'mask',
        'submarine',
        'institute',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'mask',
        'mask',
        'submarine',
        'mask',
        'mask',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'submarine',
        'mask',
        'submarine',
        'submarine',
        'mask',
      ],
    },
    {
      interval: 200,
      velocity: 2,
      enemiesId: [
        'submarine',
        'institute',
        'institute',
        'mask',
        'submarine',
        'submarine',
        'mask',
        'submarine',
        'institute',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'mask',
        'mask',
        'submarine',
        'mask',
        'mask',
        'institute',
        'mask',
        'mask',
        'institute',
        'institute',
        'submarine',
        'mask',
        'submarine',
        'submarine',
        'mask',
        'institute',
        'institute',
        'submarine',
      ],
    },
  ];

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
    if (this.shoots.length < this.maxShoots) {
      const shoot: Shoot = {
        x: this.character.x + this.character.width / 2,
        y: this.gameHeight - this.character.height - 15,
        width: 4,
        height: 15,
        destroy: false,
      };
      this.shoots = [...this.shoots, shoot];
      console.log(this.shoots);
    }
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
    } else if (!this.gameRun) {
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
            this.shoots = this.shoots.filter((s: Shoot) => s !== shoot);
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
      this.enemies.length > 0 &&
      this.enemies.filter((enemy: Enemy) => enemy.dead).length ===
        this.maxEnemiesRoundCount &&
      this.gameRun
    ) {
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = this.pipboyColor;
      this.ctx.font = "900 32px 'Space Mono', monospace";
      this.ctx.fillText(
        'VAGUE ' + (this.round + 1) + 'TERMINéE',
        this.gameWidth / 2,
        this.gameHeight / 2
      );
      this.gameRun = false;
      setTimeout(() => {
        cancelAnimationFrame(this.animationId);
        this.round++;
        this.startNewRound();
      }, 2000);
    } else {
      this.enemies.forEach((enemy: Enemy) => {
        if (enemy.dead) return;

        enemy.y = enemy.line * 50;
        enemy.x += this.enemiesVelocityX;

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

  startNewRound() {
    const round: Round = this.rounds[this.round];
    if (round) {
      this.character.x = this.gameWidth / 2 - this.character.width / 2;
      this.enemies = [];
      this.shoots = [];
      this.enemiesRoundCount = 0;
      this.maxEnemiesRoundCount = round.enemiesId.length;
      console.log(round.interval);

      this.intervalEnemies = setInterval(() => {
        this.placeEnemy(round);
      }, round.interval);
      this.gameRun = true;
      this.enemiesVelocityX = round.velocity;
      console.log(round);
      this.animationId = requestAnimationFrame(this.update.bind(this));
    }
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

  placeEnemy = (round: Round) => {
    const mask: Enemy = {
      id: 'mask',
      img: new Image(),
      x: 0,
      y: 0,
      width: 22,
      height: 24,
      dead: false,
      line: 1,
    };

    const institute: Enemy = {
      id: 'institute',
      img: new Image(),
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      dead: false,
      line: 1,
    };

    const submarine: Enemy = {
      id: 'submarine',
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

    const enemie: Enemy = enemiesList.filter(
      (enemy: Enemy) => enemy.id === round.enemiesId[this.enemiesRoundCount]
    )[0]!;

    this.enemies = [...this.enemies, enemie];

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
    this.startNewRound();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}
