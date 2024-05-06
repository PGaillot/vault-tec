import { TestBed } from '@angular/core/testing';

import { SpecialAccountService } from './special-account.service';
import { QuestionService } from './question.service';
import { SPECIAL } from '../models/special.model';

describe('SpecialAccountService', () => {
  let questionService:QuestionService = new QuestionService()
  let service: SpecialAccountService = new SpecialAccountService(questionService);


  const simpleSpecial:SPECIAL = {
    S: 50,
    P: 50,
    E: 50,
    C: 50,
    I: 50,
    A: 50,
    L: 50
  }
  const hardSpecial:SPECIAL = {
    S: 100,
    P: 100,
    E: 100,
    C: 100,
    I: 100,
    A: 100,
    L: 100
  }
  const customSpecial:SPECIAL = {
    S: 5,
    P: 4,
    E: 4,
    C: 5,
    I: 4,
    A: 1,
    L: 1
  }
  const customSpecial2:SPECIAL = {
    S: 15,
    P: 24,
    E: 14,
    C: 5,
    I: 4,
    A: 11,
    L: 1
  }







  it('code simple special', () => {
    expect(service.cryptSpecial(simpleSpecial)).toEqual('34343434343434');
  });


  it('decode simple special', () => {
    expect(service.decodeSpecial('34343434343434')).toEqual(simpleSpecial);
  });



  
  it('code HARD special', () => {
    expect(service.cryptSpecial(hardSpecial)).toEqual('66666666666666');
  });



  it('decode HARD special', () => {
    expect(service.decodeSpecial('66666666666666')).toEqual(hardSpecial);
  });

  it('decode custom special', () => {
    expect(service.decodeSpecial('7?6#6]7*6_3%3>')).toEqual(customSpecial);
  });


  it('decode custom special2', () => {
    expect(service.decodeSpecial('7?6#6]7*6_3%3>')).toEqual(customSpecial);
  });



});
