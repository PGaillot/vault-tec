import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor() { }

  volume:number = 0.1;

  playAudioClick(){
    let audio = new Audio();
    audio.src = "../../../assets/sounds/pen-click.mp3";
    audio.load();
    audio.volume = this.volume;
    audio.play();    
  }

  playAudioError(){
    let audio = new Audio();
    audio.src = "../../../assets/sounds/console-error.mp3";
    audio.load();
    audio.volume = this.volume;
    audio.play();    
    console.log('audio error')
  }
  
}
