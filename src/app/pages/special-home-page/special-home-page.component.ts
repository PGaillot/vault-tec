import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PerkCardComponent } from '../../components/perk-card/perk-card.component';

@Component({
  selector: 'app-special-home-page',
  standalone: true,
  imports: [RouterLink, PerkCardComponent],
  templateUrl: './special-home-page.component.html',
  styleUrl: './special-home-page.component.scss'
})
export class SpecialHomePageComponent {

}
