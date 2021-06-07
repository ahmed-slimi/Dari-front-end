import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAppointmentComponent } from './post-appointment.component';

describe('PostAppointmentComponent', () => {
  let component: PostAppointmentComponent;
  let fixture: ComponentFixture<PostAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
