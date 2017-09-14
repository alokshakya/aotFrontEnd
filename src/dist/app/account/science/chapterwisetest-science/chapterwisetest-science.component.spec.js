import { async, TestBed } from '@angular/core/testing';
import { ChapterwisetestScienceComponent } from './chapterwisetest-science.component';
describe('ChapterwisetestScienceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChapterwisetestScienceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChapterwisetestScienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/science/chapterwisetest-science/chapterwisetest-science.component.spec.js.map