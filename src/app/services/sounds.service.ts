import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor() {
     const userVolume:string | null = sessionStorage.getItem(this.volumePrefKey);

     if(userVolume){
       this.initialVolume =  new BehaviorSubject<number>(parseFloat(userVolume))
      } else {
        this.initialVolume =  new BehaviorSubject<number>(0.3)
      }
      this.volume = new BehaviorSubject<number>(this.initialVolume.value)

      this.subscription = [
       ...this.subscription, 
       this.volume.subscribe({
         next:(value) => {
             sessionStorage.setItem(this.volumePrefKey, value.toString())
         },
       })
       
     ]

  }

  volumePrefKey:string = 'vault-tec_pref_vol'
  public initialVolume:BehaviorSubject<number>;
  public volume:BehaviorSubject<number>;
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
  }

  ngOnInit(): void {
    
    
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub:Subscription) => sub.unsubscribe())
  }
  
}
