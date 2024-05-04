import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-special-char-counter',
  standalone: true,
  imports: [],
  templateUrl: './special-char-counter.component.html',
  styleUrl: './special-char-counter.component.scss',
})
export class SpecialCharCounterComponent {
  @Input() char!: string;
  @Input() count:number = 0;
  @Output() updatePerk:EventEmitter<{perk:string, data:number}> = new EventEmitter<{perk:string, data:number}>()

  onMoreClick() {
      this.updatePerk.emit({'perk':this.char, 'data': 1})
  }

  onLessClick() {
    if(this.count > 0){
      this.updatePerk.emit({'perk':this.char, 'data':-1})
    }
  }
}
