import { async, TestBed } from '@angular/core/testing';
import { MocktestReasoningComponent } from './mocktest-reasoning.component';
describe('MocktestReasoningComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MocktestReasoningComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MocktestReasoningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/reasoning/mocktest-reasoning/mocktest-reasoning.component.spec.js.map