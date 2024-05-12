import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})

/**
 * Dans cette page je stocke le nombres de mois de delais de reponse de VaultTec
 * ca ne sert strictement à rien. Simplement si l'utilisteur y fait attention,
 * le nombre de mois ne fait que monter meme si l'utilisteur recharge sa page.
 */
export class ContactPageComponent {
  
  savResponseDelayKey:string = 'vt_sav_response_delay_key'
  responseDelay: number = 5;
  interval: any;
  constructor(private gameService: GameService, private router:Router) {
    if(sessionStorage.getItem(this.savResponseDelayKey)){
      const value = sessionStorage.getItem(this.savResponseDelayKey)
      if(value && value.length && parseInt(value) > 0){
        this.responseDelay = parseInt(value)
      }
    } else {
      sessionStorage.setItem(this.savResponseDelayKey, '5')
    }
  }
  
  navToGit() {
    window.open("https://github.com/PGaillot/vault-tec")
    }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.responseDelay += this.gameService.getRandom(1, 8);
      sessionStorage.setItem(this.savResponseDelayKey, this.responseDelay.toString())
    }, 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
