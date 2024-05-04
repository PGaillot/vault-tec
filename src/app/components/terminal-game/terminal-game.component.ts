import { UpperCasePipe } from '@angular/common'
import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-terminal-game',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './terminal-game.component.html',
  styleUrl: './terminal-game.component.scss',
})
export class TerminalGameComponent {
  words: string[] = ['test', 'tête', 'fête', 'belle', 'bête']
  hashs: string[] = []

  @HostListener('document:mouseover', ['$event'])
  mouseover(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const hashOver = target.innerText.trim().toLowerCase();
    if (target.className === 'hash-code' && this.words.includes(hashOver)) {
      target.classList.add('highlight');
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
    this.hashs = this.generateHashedText(this.words, 800)
    console.log(this.hashs)
  }

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
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
    ]
    const hashPartsNumber: number = wordsList.length
    const hashCharsNeed =
      size - wordsList.reduce((total, w) => total + w.length, 0)
    let hashlist: string[] = []
    let hashString: string = ''
    for (let i = 0; i < hashCharsNeed; i++) {
      hashString += symbols[this.getRandom(0, symbols.length - 1)]
    }
    hashlist.push(hashString)
    for (let i = 0; i < hashPartsNumber; i++) {
      const s: string | undefined = hashlist.reduce(
        (x: string | undefined, y: string) => {
          return x && x.length >= y.length ? x : y
        },
        undefined,
      )
      if (s) {
        const randSlice: number = this.getRandom(0, s.length - 2)

        const partA: string = s.slice(0, randSlice)
        const partB: string = s.slice(randSlice, s.length)

        hashlist = hashlist.filter((h) => h !== s)
        hashlist = [...hashlist, partA, partB]
      }
    }
    let mixedList: string[] = []
    hashlist.forEach((h: string, i) => {
      if (wordsList[i]) {
        mixedList = [...mixedList, h, wordsList[i].toUpperCase()]
      } else {
        mixedList = [...mixedList, h]
      }
    })

    console.log(mixedList)
    return mixedList
  }
}
