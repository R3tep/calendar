import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components';
import { GeneralStateFacade } from './store/general-state';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() =>
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [RouterTestingModule, HeaderModule],
        providers: [
          {
            provide: GeneralStateFacade,
            useValue: {
              setCurrentDate: () => {},
            },
          },
        ],
      }).compileComponents()
    )
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calendar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calendar');
  });

  it('should trigger setCurrentDate call facade method', () => {
    const setCurrentDateFacade = spyOn(TestBed.inject(GeneralStateFacade), 'setCurrentDate');
    component.setCurrentDate(new Date('11-11-2011'));
    fixture.detectChanges();
    expect(setCurrentDateFacade).toHaveBeenCalledWith(new Date('11-11-2011'));
  });
});
