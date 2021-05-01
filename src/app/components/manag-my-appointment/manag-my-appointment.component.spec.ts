import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagMyAppointmentComponent } from './manag-my-appointment.component';

describe('ManagMyAppointmentComponent', () => {
  let component: ManagMyAppointmentComponent;
  let fixture: ComponentFixture<ManagMyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagMyAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagMyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
