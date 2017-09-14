import { async, TestBed } from '@angular/core/testing';
import { SampletestEnglishComponent } from './sampletest-english.component';
describe('SampletestEnglishComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SampletestEnglishComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SampletestEnglishComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/english/sampletest-english/sampletest-english.component.spec.js.map