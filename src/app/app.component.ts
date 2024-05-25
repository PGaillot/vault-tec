import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SoundsService } from './services/sounds.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  FormControlName,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent,
    NavMenuComponent,
    AsyncPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'VAULT-TEC';
  muted: BehaviorSubject<boolean>;
  volume: FormControl = new FormControl(0.2);

  constructor(private soundsService: SoundsService) {
    this.muted = soundsService.muted;
  }

  toogleMute() {
    this.soundsService.toggleMute();
  }


  onVolumeChange(volume: number) {
    console.log('Volume changed to:', volume);
    // Vous pouvez ajouter ici le code pour mettre à jour le volume dans le service
    this.soundsService.volume.next(volume);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.volume.valueChanges.subscribe({
      next: (value) => {

        if(value){
          this.onVolumeChange(value / 10)
        }
      },
    });

    // this.volume..subscribe({
    //   next: (value) => {
    //     console.log(value + '!!!');
    //   },
    // })
  }
}
