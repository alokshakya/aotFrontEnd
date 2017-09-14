/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { AccountMainComponent } from './main.component';
describe('AccountMainComponent', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [
                AccountMainComponent
            ],
        });
        TestBed.compileComponents();
    });
    it('should create the app', async(function () {
        var fixture = TestBed.createComponent(AccountMainComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app works!'", async(function () {
        var fixture = TestBed.createComponent(AccountMainComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));
    it('should render title in a h1 tag', async(function () {
        var fixture = TestBed.createComponent(AccountMainComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
});
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/main/main.component.spec.js.map