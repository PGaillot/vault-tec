import { CounterDisplayPipe } from './counter-display.pipe';



describe('CounterDisplayPipe', () => {
  let pipe: CounterDisplayPipe;

  beforeEach(() => {
    pipe = new CounterDisplayPipe();
  });

  it('devrait créer une instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('devrait formater le nombre avec la longueur par défaut', () => {
    expect(pipe.transform(18)).toBe('018');
  });

  it('devrait formater le nombre avec une longueur spécifiée', () => {
    expect(pipe.transform(18, 4)).toBe('0018');
    expect(pipe.transform(5, 3)).toBe('005');
  });

  it('devrait formater le nombre avec une longueur inférieure à celle du nombre', () => {
    expect(pipe.transform(12345, 3)).toBe('12345');
  });

  it('devrait formater le nombre avec une longueur de 0', () => {
    expect(pipe.transform(18, 0)).toBe('18');
  });

  it('devrait formater le nombre avec une longueur négative', () => {
    expect(pipe.transform(18, -1)).toBe('18');
  });

  it('devrait formater le nombre avec une longueur non numérique', () => {
    expect(pipe.transform(18, 'a' as any)).toBe('018');
  });
});

