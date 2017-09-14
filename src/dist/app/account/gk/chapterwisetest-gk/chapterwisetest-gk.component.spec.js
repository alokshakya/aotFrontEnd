import { async, TestBed } from '@angular/core/testing';
import { ChapterwisetestGkComponent } from './chapterwisetest-gk.component';
describe('ChapterwisetestGkComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChapterwisetestGkComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChapterwisetestGkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/gk/chapterwisetest-gk/chapterwisetest-gk.component.spec.js.map