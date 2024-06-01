import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

export const slideInAnimation = 
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          transform: 'translateY(0)'
        })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('0ms', style({})), // Just to trigger the class addition
          animate('300ms ease-out', style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
        query(':enter', [
          animate('0ms', style({})), // Just to trigger the class addition
          style({ transform: 'translateY(-100%)' }),
          animate('300ms ease-out', style({ transform: 'translateY(0)' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
      query(':leave', animateChild(), { optional: true })
    ])
  ]);
