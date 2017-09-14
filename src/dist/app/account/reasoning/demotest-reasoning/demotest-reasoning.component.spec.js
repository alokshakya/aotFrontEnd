import { async, TestBed } from '@angular/core/testing';
import { DemotestReasoningComponent } from './demotest-reasoning.component';
describe('DemotestReasoningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DemotestReasoningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DemotestReasoningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/reasoning/demotest-reasoning/demotest-reasoning.component.spec.js.map