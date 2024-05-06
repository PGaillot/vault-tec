import { TestBed } from '@angular/core/testing';

import { SpecialAccountService } from './special-account.service';
import { QuestionService } from './question.service';
import { SPECIAL } from '../models/special.model';

let questionService: QuestionService = new QuestionService();
let service: SpecialAccountService = new SpecialAccountService(questionService);

const symbols: string[] = [
  '#',
  '$',
  '%',
  '<',
  '>',
  ':',
  '_',
  '|',
  '*',
  ';',
  '/',
  '[',
  ']',
  '?',
  '!',
  '-',
  '+',
  '^',
  '¤',
];

const Special5_4_4_5_4_1_1: SPECIAL = {
  S: 5,
  P: 4,
  E: 4,
  C: 5,
  I: 4,
  A: 1,
  L: 1,
};

const Special0_0_0_0_0_0_0: SPECIAL = {
  S: 0,
  P: 0,
  E: 0,
  C: 0,
  I: 0,
  A: 0,
  L: 0,
};

const Special1_1_1_1_1_1_1: SPECIAL = {
  S: 1,
  P: 1,
  E: 1,
  C: 1,
  I: 1,
  A: 1,
  L: 1,
};

const Special5_5_5_5_5_5_5: SPECIAL = {
  S: 5,
  P: 5,
  E: 5,
  C: 5,
  I: 5,
  A: 5,
  L: 5,
};

const Special10_10_10_10_10_10_10: SPECIAL = {
  S: 10,
  P: 10,
  E: 10,
  C: 10,
  I: 10,
  A: 10,
  L: 10,
};

const Special50_50_50_50_50_50_50: SPECIAL = {
  S: 50,
  P: 50,
  E: 50,
  C: 50,
  I: 50,
  A: 50,
  L: 50,
};

const Special100_100_100_100_100_100_100: SPECIAL = {
  S: 100,
  P: 100,
  E: 100,
  C: 100,
  I: 100,
  A: 100,
  L: 100,
};

/**
 * ? ------ POUR SAVOIR SI UN SYMBOLE SE MET BIEN SUR LES PETITS CHIFFRES
 */
describe('POUR SAVOIR SI UN SYMBOLE SE MET BIEN SUR LES PETITS CHIFFRES', () => {
  it('VERIFIE SI UN SYMBOLE SE MET BIEN APRES LES PETITS CHIFFRES', () => {
    expect(
      symbols.includes(service.cryptSpecial(Special5_4_4_5_4_1_1).slice(1, 2))
    ).toBeTrue();
  });

  it('VERIFIE SI UN SYMBOLE NE SE MET PAS APRES LES CHIFFRES > 9', () => {
    expect(
      symbols.includes(service.cryptSpecial(Special50_50_50_50_50_50_50).slice(1, 2))
    ).toBeFalse();
  });
});

/**
 * ? ------ LES TESTS POUR ENCODER
 */
describe('Encode SPECIAL', () => {
  it('code Special50_50_50_50_50_50_50', () => {
    expect(service.cryptSpecial(Special50_50_50_50_50_50_50)).toEqual(
      '34343434343434'
    );
  });

  it('code Special100_100_100_100_100_100_100', () => {
    expect(service.cryptSpecial(Special100_100_100_100_100_100_100)).toEqual(
      '66666666666666'
    );
  });
});

/**
 * ? ------ LES TESTS POUR DECODER
 */
describe('Decode SPECIAL-CODE', () => {
  let questionService: QuestionService = new QuestionService();
  let service: SpecialAccountService = new SpecialAccountService(
    questionService
  );

  it('decode 34343434343434', () => {
    expect(service.decodeSpecial('34343434343434')).toEqual(
      Special50_50_50_50_50_50_50
    );
  });

  it('decode 66666666666666', () => {
    expect(service.decodeSpecial('66666666666666')).toEqual(
      Special100_100_100_100_100_100_100
    );
  });

  it('decode 0C0C0C0C0C0C0C', () => {
    expect(service.decodeSpecial('0C0C0C0C0C0C0C')).toEqual(
      Special10_10_10_10_10_10_10
    );
  });

  it('decode 7?6#6]7*6_3%3>', () => {
    expect(service.decodeSpecial('7?6#6]7*6_3%3>')).toEqual(
      Special5_4_4_5_4_1_1
    );
  });

  it('decode 3?3?3?3?3?3?3?', () => {
    expect(service.decodeSpecial('3?3?3?3?3?3?3?')).toEqual(
      Special1_1_1_1_1_1_1
    );
  });

  it('decode 2?2?2?2?2?2?2?', () => {
    expect(service.decodeSpecial('2?2?2?2?2?2?2?')).toEqual(
      Special0_0_0_0_0_0_0
    );
  });
});
