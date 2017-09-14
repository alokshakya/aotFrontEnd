import { async, TestBed } from '@angular/core/testing';
import { SampletestReasoningComponent } from './sampletest-reasoning.component';
describe('SampletestReasoningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SampletestReasoningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SampletestReasoningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/reasoning/sampletest-reasoning/sampletest-reasoning.component.spec.js.map