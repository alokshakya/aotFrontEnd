import { async, TestBed } from '@angular/core/testing';
import { ChapterwisetestEnglishComponent } from './chapterwisetest-english.component';
describe('ChapterwisetestEnglishComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChapterwisetestEnglishComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChapterwisetestEnglishComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/english/chapterwisetest-english/chapterwisetest-english.component.spec.js.map