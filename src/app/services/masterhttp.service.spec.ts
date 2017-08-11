/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterHttpService } from './masterhttp.service';

describe('MasterHttpService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MasterHttpService]
        });
    });

    it('should ...', inject([MasterHttpService], (service: MasterHttpService) => {
        expect(service).toBeTruthy();
    }));
});
