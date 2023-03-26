import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEvaluacioComponent } from './auto-evaluacio.component';

describe('AutoEvaluacioComponent', () => {
  let component: AutoEvaluacioComponent;
  let fixture: ComponentFixture<AutoEvaluacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoEvaluacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoEvaluacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
