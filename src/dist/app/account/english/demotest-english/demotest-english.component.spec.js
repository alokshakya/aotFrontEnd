import { async, TestBed } from '@angular/core/testing';
import { DemotestEnglishComponent } from './demotest-english.component';
describe('DemotestEnglishComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DemotestEnglishComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DemotestEnglishComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/english/demotest-english/demotest-english.component.spec.js.map