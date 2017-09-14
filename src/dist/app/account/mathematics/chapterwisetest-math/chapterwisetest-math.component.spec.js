import { async, TestBed } from '@angular/core/testing';
import { ChapterwisetestMathComponent } from './chapterwisetest-math.component';
describe('ChapterwisetestMathComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChapterwisetestMathComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChapterwisetestMathComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/mathematics/chapterwisetest-math/chapterwisetest-math.component.spec.js.map