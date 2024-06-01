import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

export const slideInAnimation = 
  trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ top: '-100vh' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ top: '100vh' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ top: '0vh' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
  ]);