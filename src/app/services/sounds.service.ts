import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor() {
    this.subscription = [
      ...this.subscription, 
    ]
  }

  public volume:BehaviorSubject<number> = new BehaviorSubject<number>(0.2);
  public muted:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  subscription:Subscription[] = [];

  mute(){
    this.muted.next(true);
  }

  unmute(){
    this.muted.next(false);
  }

  toggleMute(){
    this.muted.next(!this.muted.value);    
  }

  playAudioClick(){
    if(this.muted.getValue()) return
    let audio = new Audio();
    audio.src = "../../../assets/sounds/pen-click.mp3";
    audio.load();
    audio.volume = this.volume.getValue();
    audio.play();    
  }
  
  playAudioError(){
    if(this.muted.getValue()) return
    let audio = new Audio();
    audio.src = "../../../assets/sounds/console-error.mp3";
    audio.load();
    audio.volume = this.volume.getValue();
    audio.play();    
    console.log('audio error')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.forEach((sub:Subscription) => sub.unsubscribe())
  }
  
}
