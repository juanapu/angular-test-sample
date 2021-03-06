import { EventEmitter } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Directionality , Direction} from '@angular/cdk/bidi';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'hero-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hero-app');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hero-app!');
  });

  it('show change value of Direction',()=>{
        const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const eventEmit = new EventEmitter();
    const eventE = eventEmit.next('rtl');
    let spy = spyOn(Directionality, 'change').and.returnValue(eventE);
    console.log(app.isRtl)
  });

});

