import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentmangemtComponent } from './appointmentmangemt.component';

describe('AppointmentmangemtComponent', () => {
  let component: AppointmentmangemtComponent;
  let fixture: ComponentFixture<AppointmentmangemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentmangemtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentmangemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
