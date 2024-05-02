import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-special-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './special-page.component.html',
  styleUrl: './special-page.component.scss'
})
export class SpecialPageComponent {

}
