import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PerkCardComponent } from '../../components/perk-card/perk-card.component';
import { Perk } from '../../models/perk.model';
import { PERKS } from '../../data/perks.data';
import { SoundsService } from '../../services/sounds.service';

@Component({
  selector: 'app-special-home-page',
  standalone: true,
  imports: [RouterLink, PerkCardComponent],
  templateUrl: './special-home-page.component.html',
  styleUrl: './special-home-page.component.scss'
})
export class SpecialHomePageComponent {
  perks:Perk[] = PERKS;


  constructor(private soundsServices:SoundsService){}
  
  playAudio() {
    this.soundsServices.playAudioClick()
  }
}
