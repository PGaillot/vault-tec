import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SoundsService } from '../../services/sounds.service';

interface NavMenuItem {
  name: string;
  shortName: string;
  routerLink: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  smallScreen: boolean = false;
  menuItems: NavMenuItem[] = [
    {
      name: 'abris',
      shortName: 'abris',
      routerLink: '/vault',
    },

    {
      name: 'contact',
      shortName: 'cont.',
      routerLink: '/contact',
    },

    {
      name: 'home',
      shortName: 'home',
      routerLink: '/home',
    },

    {
      name: 's.p.e.c.i.a.l.',
      shortName: 'spec.',
      routerLink: '/special',
    },

    {
      name: 'recrutement',
      shortName: 'job',
      routerLink: '/job',
    },
  ];

  constructor(private observer: BreakpointObserver, private soundsService:SoundsService) {}


  playAudio(){
    this.soundsService.playAudioClick()
  }


  ngOnInit(): void {
    this.observer.observe(Breakpoints.Small).subscribe(res => this.smallScreen = res.matches);
    this.observer.observe(Breakpoints.XSmall).subscribe(res => this.smallScreen = res.matches);
  }

}
