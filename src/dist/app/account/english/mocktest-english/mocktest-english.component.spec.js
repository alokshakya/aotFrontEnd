import { async, TestBed } from '@angular/core/testing';
import { MocktestEnglishComponent } from './mocktest-english.component';
describe('MocktestEnglishComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MocktestEnglishComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MocktestEnglishComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/english/mocktest-english/mocktest-english.component.spec.js.map