import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
      name: 'recurtement',
      shortName: 'job',
      routerLink: '/job',
    },
  ];

  constructor(private observer: BreakpointObserver) {}


  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/sounds/pen-click.mp3";
    audio.load();
    audio.play();    
  }


  ngOnInit(): void {
    this.observer.observe(Breakpoints.Small).subscribe(res => this.smallScreen = res.matches);
    this.observer.observe(Breakpoints.XSmall).subscribe(res => this.smallScreen = res.matches);
  }
  
}
