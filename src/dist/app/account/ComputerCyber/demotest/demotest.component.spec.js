/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { DemotestComponent } from './demotest.component';
describe('DemotestComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DemotestComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DemotestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/ComputerCyber/demotest/demotest.component.spec.js.map