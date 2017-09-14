import { async, TestBed } from '@angular/core/testing';
import { SampletestGkComponent } from './sampletest-gk.component';
describe('SampletestGkComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SampletestGkComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SampletestGkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/gk/sampletest-gk/sampletest-gk.component.spec.js.map