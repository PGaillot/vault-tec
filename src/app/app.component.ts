import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SoundsService } from './services/sounds.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  FormControl,
  FormControlName,
  ReactiveFormsModule,
} from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { slideInAnimation } from './animations/animations';

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
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'VAULT-TEC';
  muted: BehaviorSubject<boolean>;
  volume: FormControl = new FormControl(0);
  linePreference: FormControl = new FormControl(true);
  effectPreference: FormControl = new FormControl(true);
  subscriptions: Subscription[] = [];

  constructor(
    private soundsService: SoundsService,
    private settingSevice: SettingsService
  ) {
    this.muted = soundsService.muted;
    this.volume.setValue(this.soundsService.initialVolume.value * 10);
    this.linePreference.setValue(this.settingSevice.linePref);
    this.effectPreference.setValue(this.settingSevice.effectPref);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onAnimationStart() {
    document.getElementById('footer')!.classList.add('hide-during-animation');
    document.getElementById('sound-menu')!.classList.add('hide-during-animation');
  }

  onAnimationDone() {
    document.getElementById('footer')!.classList.remove('hide-during-animation');
    document.getElementById('sound-menu')!.classList.remove('hide-during-animation');
  }

  toogleMute() {
    this.soundsService.toggleMute();
  }

  onVolumeChange(volume: number) {
    this.soundsService.volume.next(volume);
  }

  ngOnInit(): void {
    this.subscriptions = [
      ...this.subscriptions,

      this.volume.valueChanges.subscribe({
        next: (value) => {
          if (value) {
            this.onVolumeChange(value / 10);
          }
        },
      }),

      this.linePreference.valueChanges.subscribe({
        next: (value) => {
          this.settingSevice.setLinePref(value);
        },
      }),

      this.effectPreference.valueChanges.subscribe({
        next: (value) => {
          this.settingSevice.setEffectPref(value);
        },
      }),
    ];
  }
}
