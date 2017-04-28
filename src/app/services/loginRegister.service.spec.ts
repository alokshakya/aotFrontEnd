/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginRegisterService } from './loginRegister.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRegisterService]
    });
  });

  it('should ...', inject([LoginRegisterService], (service: LoginRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
