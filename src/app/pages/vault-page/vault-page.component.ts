import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vault-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './vault-page.component.html',
  styleUrl: './vault-page.component.scss'
})
export class VaultPageComponent {

}
