import { UpperCasePipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-terminal-game',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './terminal-game.component.html',
  styleUrl: './terminal-game.component.scss',
})
export class TerminalGameComponent {
  maxError: number = 8;
  errorCount: number = this.maxError;
  gameRunning: boolean = true;

  raw_words: string[] = [
    'table',
    'cible',
    'chaos',
    'étole',
    'ombre',
    'globe',
    'pomme',
    'homme',
    'fille',
    'ville',
    'route',
    'flèche',
    'boîte',
    'piste',
    'foule',
  ];

  words: string[] = [];

  hashs: string[] = [];
  logs: string[] = [];
  winWord!: string;
  selectedWord: string | undefined;
  @HostListener('document:mouseover', ['$event'])
  mouseover(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      (target.innerText && target.className === 'hash-code') ||
      target.className === 'game-container'
    ) {
      const hashOver = target.innerText.trim().toLowerCase();
      if (this.words.includes(hashOver)) {
        target.classList.add('highlight');
        this.selectedWord = target.innerText.trim();
      }
    } else {
      this.selectedWord = undefined;
    }
  }

  @HostListener('document:mouseout', ['$event'])
  mouseout(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('hash-code')) {
      target.classList.remove('highlight');
    }
  }

  constructor() {
    let wordsData: any[] = [];
    this.raw_words.forEach((rw: string) => {
      const wLength: number = rw.length;

      if (wordsData.find((t: any) => t.wLength === wLength)) {
        const t = wordsData.find((t: any) => t.wLength === wLength);
        const tUpdate = { wLength, wCount: t.wCount + 1 };
        wordsData = wordsData.filter((x: any) => x !== t);
        wordsData = [...wordsData, tUpdate];
      } else {
        wordsData.push({ wLength, wCount: 1 });
      }
    });
    const maxWordsWithSameCharCount: any = wordsData.reduce(
      (x: any, y: any) => {
        return x && x.wCount >= y.wCount ? x : y;
      }
    );
    this.words = this.raw_words.filter(
      (rw: string) => rw.length === maxWordsWithSameCharCount.wLength
    );
    this.winWord = this.words[this.getRandom(0, this.words.length - 1)];
    console.warn('winWord :', this.winWord);
    this.hashs = this.generateHashedText(this.words, 800);
  }

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateHashedText(wordsList: string[], size: number = 500): string[] {
    const symbols: string[] = [
      '#',
      '$',
      '%',
      '<',
      '>',
      ':',
      '_',
      '|',
      '*',
      ';',
      '/',
      '[',
      ']',
      '?',
      '!',
      '-',
      '+',
      '^',
    ];
    const hashPartsNumber: number = wordsList.length;
    const hashCharsNeed =
      size - wordsList.reduce((total, w) => total + w.length, 0);
    let hashlist: string[] = [];
    let hashString: string = '';
    for (let i = 0; i < hashCharsNeed; i++) {
      hashString += symbols[this.getRandom(0, symbols.length - 1)];
    }
    hashlist.push(hashString);
    for (let i = 0; i < hashPartsNumber; i++) {
      const s: string | undefined = hashlist.reduce(
        (x: string | undefined, y: string) => {
          return x && x.length >= y.length ? x : y;
        },
        undefined
      );
      if (s) {
        const randSlice: number = this.getRandom(0, s.length - 2);

        const partA: string = s.slice(0, randSlice);
        const partB: string = s.slice(randSlice, s.length);

        hashlist = hashlist.filter((h) => h !== s);
        hashlist = [...hashlist, partA, partB];
      }
    }
    let mixedList: string[] = [];
    hashlist.forEach((h: string, i) => {
      if (wordsList[i]) {
        mixedList = [...mixedList, h, wordsList[i].toUpperCase()];
      } else {
        mixedList = [...mixedList, h];
      }
    });
    return mixedList;
  }

  getLikeness(test: string): number {
    const winW: string = this.winWord.toUpperCase();
    let likeness: number = 0;
    for (let i = 0; i < winW.length; i++) {
      if (test[i] === winW[i]) {
        likeness += 1;
      }
    }
    return likeness;
  }

  testHash(hash: string) {
    console.log('testHash');
    if (hash.toLowerCase() === this.winWord.toLowerCase() && this.gameRunning) {
      this.gameRunning = false;
      this.logs = [...this.logs, hash, 'GG FREROT'];
    } else if (this.words.includes(hash.toLowerCase()) && this.gameRunning) {
      this.logs = [...this.logs, hash, 'accèes refusé :'];
      this.errorCount -= 1;
      this.logs = [
        ...this.logs,
        'similarité :' + this.getLikeness(hash),
        'accèes refusé.',
        '---',
      ];
    }
    this.selectedWord = undefined;
  }
}
