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







  it('code simple special', () => {
    expect(service.cryptSpecial(simpleSpecial)).toEqual('34343434343434');
  });

  it('encode simple special', () => {
    expect(service.decodeSpecial('34343434343434')).toEqual(simpleSpecial);
  });



});
