import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core'
import { SoundsService } from '../../services/sounds.service';

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
  @Output() charHover : EventEmitter<string> = new EventEmitter<string>();
  @HostListener('document:mouseover',['$event']) 
  mouseover(event : any){
    if(event.target.matches('.char') && event.target.innerText === this.char){
      this.charHover.emit(this.char)
    }
  }



  constructor(
  private soundsService:SoundsService
  ){}
  
  onMoreClick() {
    this.updatePerk.emit({'perk':this.char, 'data': 1});
    this.soundsService.playAudioClick();
  }
  
  onLessClick() {
    this.soundsService.playAudioClick();
    if(this.count > 0){
      this.updatePerk.emit({'perk':this.char, 'data':-1});
    }
  }
}
